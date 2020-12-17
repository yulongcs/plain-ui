import {designComponent} from "../../use/designComponent";
import {useSlots} from "../../use/useSlots";
import PlcCollector from './plc/core/plc-collector'
import {PltHead} from "./core/head/head";
import {PltBody} from "./core/body/body";
import './table.scss'
import {TableProps} from './core/table.utils';
import {usePlc} from "./plc/format/usePlc";

const Table = designComponent({
    name: 'pl-table',
    props: {
        ...TableProps,
    },
    setup({props}) {

        const {slots} = useSlots()

        const {numberState} = usePlc({props})

        const refer = {
            props,
            numberState,
        }

        return {
            refer,
            render: () => (
                <div class="pl-table" ref="el">
                    <PlcCollector ref="collector">{slots.default()}</PlcCollector>
                    <PltHead table={refer}/>
                    <PltBody table={refer}/>
                </div>
            )
        }
    },
})

export type PlainTable = typeof Table.use.class

export default Table