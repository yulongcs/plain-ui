import {computed, reactive, watch} from "vue";
import {designComponent} from "../../use/designComponent";
import {useSlots} from "../../use/useSlots";
import './button.scss'
import {ClickWave} from "../click-wave/click-wave-directive";
import {EditProps, useEdit} from "../../use/useEdit";
import {StyleProps, StyleStatus, useStyle} from "../../use/useStyle";
import {useProps} from "../../use/useProps";
import {ButtonModeProvider} from "./button-group";
import {FuncProps, SimpleFunction} from "../../shims";
import {throttle} from 'plain-utils/utils/throttle'
import {unit} from 'plain-utils/string/unit'
import {useStyles} from "../../use/useStyles";

console.log('load button component')

export default designComponent({
    name: 'pl-button',
    directives: {ClickWave},
    props: {
        mode: {type: String, default: 'fill'},                  // fill,stroke,text
        label: {type: [String, Object]},                        // 按钮文本
        width: {type: [String, Number]},                        // 按钮宽度
        icon: {type: String},                                   // 按钮图标
        active: {type: Boolean},                                // 按钮是否高亮
        noPadding: {type: Boolean},                             // 按钮是否无边距
        block: {type: Boolean},                                 // 块级元素
        throttleClick: {type: [Boolean, Number]},               // click节流
        autoLoading: {type: Boolean},                           // 在执行click处理函数时，是否自动变更为加载状态
        asyncHandler: {type: Function as any as FuncProps<(e: MouseEvent) => void>},    // autoLoading 为true时，的异步处理函数

        ...EditProps,
        ...StyleProps,

        /*native*/
        type: {type: String, default: 'button'},
        nativeProps: {type: Object},
    },
    emits: {
        click: (e: MouseEvent) => true,
    },
    setup({props, event: {emit}}) {

        const {slots} = useSlots()
        const {propsState} = useProps(props, {
            width: useProps.NUMBER,
            label: useProps.PROMISE,
        })
        const {styleComputed} = useStyle({status: StyleStatus.primary})
        const {editState, editComputed} = useEdit()
        const buttonGroup = ButtonModeProvider.inject()
        const otherComputed = computed(() => ({
            mode: !!buttonGroup ? buttonGroup.value.mode : props.mode
        }))
        const state = reactive({
            handleClick: null as SimpleFunction | null,
            handleClickInner: async (e: MouseEvent) => {
                if (!editComputed.value.editable) {
                    return
                }
                if (!props.autoLoading) {
                    return emit.click(e)
                }
                if (!props.asyncHandler) {
                    return console.error(`pl-button: props.asyncHandler is necessary when autoLoading is true!`)
                }
                editState.loading = true
                try {
                    await props.asyncHandler(e)
                } catch (e) {
                    // do nothing
                } finally {
                    editState.loading = null
                }
            },
        })

        watch(
            () => props.throttleClick,
            (val) => {
                if (!val) {
                    return state.handleClick = state.handleClickInner
                }
                if (val === true) {
                    val = 1000
                }
                state.handleClick = throttle(state.handleClickInner, val, {trailing: false})
            },
            {immediate: true}
        )

        const classes = computed(() => ([
            'pl-button',
            'plain-click-node',

            `pl-button-mode-${otherComputed.value.mode}`,
            `pl-button-status-${styleComputed.value.status}`,
            `pl-button-shape-${styleComputed.value.shape}`,
            `pl-button-size-${styleComputed.value.size}`,

            {
                'pl-button-icon': !!props.icon,
                'pl-button-active': !!props.active,
                'pl-button-noPadding': !!props.noPadding,

                'pl-button-loading': !!editComputed.value.loading,
                'pl-button-has-icon': !!props.icon,
                'pl-button-block': !!props.block,
                'pl-button-disabled': !!editComputed.value.disabled,
                'pl-button-icon-only': !!props.icon && !propsState.label,
            },
        ]))

        const styles = useStyles(style => {
            style.width = !!propsState.width ? (unit(propsState.width) || undefined) : undefined
        })

        return {
            render: () => {
                return (
                    <button
                        style={styles.value}
                        class={classes.value}
                        type={props.type as any}
                        disabled={editComputed.value.disabled!}
                        v-click-wave={"large"}
                        {...{
                            ...(props.nativeProps || {}),
                            onClick: state.handleClick!,
                        }}
                    >
                        {!!editComputed.value.loading && <pl-loading type="gamma"/>}
                        {
                            slots.default(<>
                                {(!!props.icon && !editComputed.value.loading) ? <pl-icon icon={props.icon}/> : null}
                                {propsState.label ? <span>{propsState.label}</span> : null}
                            </>)
                        }
                    </button>
                )
            }
        }
    },
})