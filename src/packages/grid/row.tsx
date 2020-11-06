import {designComponent} from "../../use/designComponent";
import {useClass} from "../../use/useClasses";
import {useStyles} from "../../use/useStyles";
import {useSlots} from "../../use/useSlots";
import {unit} from 'plain-utils/string/unit';
import {createComponentPlugin} from "../../utils/createComponentPlugin";
import './grid.scss'

export const Row = designComponent({
    name: 'pl-row',
    props: {
        type: {type: String},                               //类型,type
        align: {type: String},                              //对其方式,left|center|right
        justify: {type: String},                            //内容弹性布局方式,start,end,center,space-around,space-between
        gutter: {type: [Number, String], default: 0},       //间隔
    },
    provideRefer: true,
    setup({props}) {

        const {slots} = useSlots()
        const classes = useClass(() => [
            'pl-row',
            {
                [`pl-row-${props.type}`]: !!props.type,
                [`pl-row-${props.type}-${props.align}`]: !!props.align,
                [`pl-row-${props.type}-${props.justify}`]: !!props.justify,
            }
        ])
        const styles = useStyles(style => {
            const gutter = Number(props.gutter)
            if (gutter !== 0) {
                style = {
                    marginLeft: unit(gutter / -2),
                    marginRight: unit(gutter / -2)
                };
            }
            return style
        })

        return {
            refer: {
                props,
            },
            render: () => (
                <div class={classes.value} style={styles.value}>
                    {slots.default()}
                </div>
            )
        }
    },
})

export default createComponentPlugin(Row)