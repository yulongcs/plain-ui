import {designComponent} from "../../use/designComponent";
import {useSlots} from "../../use/useSlots";
import PlcCollector from './plc/core/plc-collector'
import {PltHead} from "./core/head/head";
import {PltBody} from "./core/body/body";
import './table.scss'
import {TableHoverPart, TableProps} from './core/table.utils';
import {usePlc} from "./plc/format/usePlc";
import {computed, onMounted, PropType} from 'vue';
import {useTableTree} from "./core/body/useTableTree";
import {SimpleObject} from "../../shims";
import {useBindScroll} from "./core/useBindScroll";
import {useTableNode} from "./core/useTableNode";
import {useRefs} from "../../use/useRefs";

const Table = designComponent({
    name: 'pl-table',
    props: {
        ...TableProps,
    },
    emits: {
        onUpdateData: (data?: SimpleObject[]) => true,
        onScrollLeft: (scrollLeft: number, part: TableHoverPart) => true,
    },
    setup({props, event}) {

        const {refs} = useRefs({
            el: HTMLDivElement,
        })

        const {emit} = event
        const {slots} = useSlots()
        const {numberState, plcData} = usePlc({props})
        const {dataModel} = useTableTree({props, emit})
        const {bindScroll} = useBindScroll(event)
        const {nodeState} = useTableNode({props, emit, getValidate: () => null as any})

        /*是否可以启用虚拟滚动*/
        const disabledVirtual = computed(() => props.virtual == false || (!!plcData.value && plcData.value.notFitVirtual.length > 0))

        const refer = {
            refs,
            props,
            numberState,
            plcData,
            dataModel,
            bindScroll,
            event,
            nodeState,
            disabledVirtual,
        }

        onMounted(() => {
            // console.log(refer.nodeState)
        })

        return {
            refer,
            render: () => (
                <div class="pl-table" ref="el">
                    <PlcCollector ref="collector">{slots.default()}</PlcCollector>
                    {!!plcData.value && <>
                        <PltHead table={refer}/>
                        <PltBody table={refer}/>
                    </>}
                </div>
            )
        }
    },
})

export const PlainTable = Object as PropType<typeof Table.use.class>

export default Table