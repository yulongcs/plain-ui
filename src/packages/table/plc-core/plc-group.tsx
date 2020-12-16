import {designComponent} from "../../../use/designComponent";
import {useSlots} from "../../../use/useSlots";

export default designComponent({
    name: 'plc-group',
    setup({props}) {

        const {slots} = useSlots()

        return {
            render: () => slots.default()
        }
    },
})