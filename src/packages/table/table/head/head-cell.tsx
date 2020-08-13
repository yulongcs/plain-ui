import {computed, defineComponent} from "@vue/composition-api";
import {PlcType} from "@/packages/table/plc/plc";
import {PlcComponentType} from "@/packages/table/plc/plc-utils";
import {injectTable} from "@/packages/table/table/table";
import {PlcRender} from "@/packages/table/table-bak/render";

export default defineComponent({
    name: 'plt-head-cell',
    props: {
        plc: {type: Object},
    },
    setup(props: { plc: PlcType }) {

        const table = injectTable()

        /**
         * 给 head-cell 加一个key，当 plc的props变化之后，head-cell节点会更新为新的节点，触发 scroll 的 ObjectServer事件，从而刷新滚动条宽度
         * @author  韦胜健
         * @date    2020/6/11 11:03
         */
        const key = computed(() => {
            const plc = props.plc
            return Object.keys(plc.props).reduce((ret, key) => {
                ret += `_${key}=${plc.props[key] || ''}`
                return ret
            }, '')
        })

        const styles = computed(() => {
            const height = `${table.props.headRowHeight as number * props.plc.rowspan!}px`
            const width = props.plc.type === PlcComponentType.GROUP ? null : `${props.plc.props.width}px`
            return {
                height,
                width,
            }
        })

        return () => {
            return (
                <td rowspan={props.plc.rowspan}
                    colspan={props.plc.colspan}
                    key={key.value}
                    style={styles.value}
                >
                    {PlcRender.head({
                        plc: props.plc,
                        fixed: props.plc.props.fixed! as any,
                    })}
                </td>
            )
        }
    },
})