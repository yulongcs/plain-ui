import {designComponent} from "../../use/designComponent";
import {markRaw, ref, watch, computed} from 'vue';
import './icon.scss'
import {VNodeChild} from "../../shims";
import {refreshPopperReference} from "../popper/refershPopperReference";

interface IconGetter {
    (icon: string): VNodeChild | Promise<VNodeChild>
}

/**
 * prefix必须为全小写，可以有横杠下划线
 * @author  韦胜健
 * @date    2020/11/1 12:59
 */
const registry = (() => {
    const icons: { prefix: string, getter: IconGetter }[] = []
    return Object.assign((prefix: string, getter: IconGetter) => {
        icons.unshift({prefix, getter})
    }, {
        icons,
    })
})()

registry('el-icon-', async (icon) => {
    try {
        const module = await import('./icons/' + icon + '.json')
        // console.log(module)
        return (
            <svg
                class={`el-svg-icon ${icon}`}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                innerHTML={module.default[0]}
            />
        )
    } catch (e) {
        console.error(e)
        throw e
    }
})

export const PlIcon = designComponent({
    name: 'pl-icon',
    props: {
        icon: {type: String},                       // 图标名称
        status: {type: String},                     // 图标状态
    },
    setup({props}) {

        const {freshPopperReference} = refreshPopperReference.inject()

        const icon = ref(null as any)

        const classes = computed(() => [
            'pl-icon',
            {
                [`pl-icon-status-${props.status}`]: !!props.status
            }
        ])

        const utils = {
            getIconVNode: async (iconName: string) => {
                for (let i = 0; i < registry.icons.length; i++) {
                    const registryIcon = registry.icons[i];
                    if (iconName.indexOf(registryIcon.prefix) === 0) {
                        return await registryIcon.getter(iconName)
                    }
                }
                return null
            },
            reset: async (iconName: string) => {
                const Icon = await utils.getIconVNode(iconName)
                icon.value = !!Icon ? markRaw(Icon) : null
                freshPopperReference()
            }
        }

        watch(() => props.icon, val => !!val && utils.reset(val), {immediate: true})

        return {
            render: () => {
                const {value: Icon} = icon
                return !!Icon ? <Icon class={classes.value}/> : <i class="PlIcon"/>
            }
        }
    },
}, {registry})