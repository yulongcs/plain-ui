import {computed, defineComponent, getCurrentInstance, provide} from "@vue/composition-api";
import {getCellClass} from "@/packages/table/plc/plc-utils";
import {PlcType} from "@/packages/table/plc/plc";
import {TableNode} from "@/packages/table/table/TableNode";
import {PlcRender} from "@/packages/table/table/render";
import {injectTable} from "@/packages/table/table/table";
import {FormTrigger, validateField} from "@/packages/form/validate";
import {EditProvider} from "@/use/useEdit";
import {useStyle} from "@/use/useStyle";

interface BodyCellPropsType {
    plc: PlcType,
    rowData: TableNode,
    isSummary: boolean
}

function useFormItemEdit(props: BodyCellPropsType, table: ReturnType<typeof injectTable>): void {
    const editComputed = computed(() => {
        return {
            disabled: null,
            readonly: null,
            loading: null,
            editable: true,
            onBlur: () => {
                // console.log('blur', props.plc.props.field)
            },
            onChange: () => {
                // console.log('change', props.plc.props.field)
                const {rowData, plc: {props: {field}}} = props
                if (!!field) {
                    const {data, editRow, isEdit} = rowData
                    const validateResult = rowData.validateResult || {}
                    validateField(validateResult, table.validateConfigData.value.allRules, isEdit ? editRow : data, field!, FormTrigger.CHANGE).then(ret => {
                        rowData.validateResult = validateResult
                    })
                }
            }
        }
    })
    provide(EditProvider, editComputed)

    useStyle({
        shape: 'none',
        size: 'mini',
        adjust: (result) => {
            const {validateResult} = props.rowData
            const {status} = result
            result.status = status != null ? status : (!!props.plc.props.field && !!validateResult && validateResult[props.plc.props.field] != null ? 'error' : (status || null))

            return result
        }
    })
}

export default defineComponent({
    name: 'plt-body-cell',
    props: {
        plc: {type: Object, required: true},
        rowData: {type: TableNode, required: true},
        fixed: {type: String, required: true},
        isSummary: {type: Boolean},
    },
    setup(props: BodyCellPropsType) {

        const table = injectTable()
        const ctx = getCurrentInstance()!
        useFormItemEdit(props, table)

        const renderData = computed(() => PlcRender.body({
            ...props,
            ctx,
        }))

        const span = !!table.props.spanMethod ? table.props.spanMethod({tableNode: props.rowData, plc: props.plc}) : {
            rowspan: 1,
            colspan: 1,
        }

        const cellStyles = computed(() => props.plc.styles.body.cell)
        const innerCellStyles = computed(() => {
            const styles = {...props.plc.styles.body.innerCell}
            if (span.colspan > 1) {
                const plcList = table.plcData.value!.flatPlcList
                const startIndex = plcList.indexOf(props.plc)
                styles.width = `${plcList.slice(startIndex, startIndex + span.colspan).reduce((ret: number, plc: PlcType) => {
                    ret += Number(plc.props.width)
                    return ret
                }, 0)}px`
            }
            return styles
        })
        const cellClass = computed(() => [
            ...props.plc.classes.body.cell,
            ...getCellClass(props.plc, props.rowData),
            {
                'plt-cell-editing': renderData.value.editable,
            },
        ])
        const innerCellClass = computed(() => props.plc.classes.body.innerCell)

        return () => {
            if (span.rowspan === 0 || span.colspan === 0) {
                /*rowspan为0时，不会正确合并单元格，如果要合并单元格得不渲染这个td*/
                return null
            }
            return (
                <td colspan={span.colspan}
                    rowspan={span.rowspan}
                    class={cellClass.value}
                    style={cellStyles.value}>
                    <div style={innerCellStyles.value} class={innerCellClass.value}>
                        {/*{props.plc.isLastFixedLeft && 'isLastFixedLeft'}-{props.plc.isFirstFixedRight && 'isFirstFixedRight'}*/}
                        {renderData.value.body}
                    </div>
                </td>
            )
        }
    },
})