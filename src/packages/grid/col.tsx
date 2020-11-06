import {designComponent} from "../../use/designComponent";
import {Row} from './row'
import {SingleClass, useClass} from "../../use/useClasses";
import {useStyles} from "../../use/useStyles";
import {useSlots} from "../../use/useSlots";
import {createComponentPlugin} from "../../utils/createComponentPlugin";

export const Col = designComponent({
    name: 'pl-col',
    props: {
        span: [Number, String],
        order: [Number, String],
        offset: [Number, String],
        push: [Number, String],
        pull: [Number, String],
        className: String,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object]
    },
    setup({props}) {
        const {slots} = useSlots()
        const row = Row.use.inject()
        const classes = useClass(() => {
            let classList = [
                'pl-col',
                {
                    [`pl-col-span-${props.span}`]: props.span,
                    [`pl-col-order-${props.order}`]: props.order,
                    [`pl-col-offset-${props.offset}`]: props.offset,
                    [`pl-col-push-${props.push}`]: props.push,
                    [`pl-col-pull-${props.pull}`]: props.pull,
                    [`${props.className}`]: !!props.className
                }
            ] as SingleClass[];

            const sizeProps = props as any
            ['xs', 'sm', 'md', 'lg'].forEach(size => {
                if (typeof sizeProps[size] === 'number') {
                    classList.push(`pl-col-${size}-${sizeProps[size]}`);
                } else if (typeof sizeProps[size] === 'object') {
                    let obj = sizeProps[size];
                    Object.keys(obj).forEach(prop => {
                        classList.push(
                            prop !== 'span'
                                ? `pl-col-${size}-${prop}-${obj[prop]}`
                                : `pl-col-span-${size}-${obj[prop]}`
                        );
                    });
                }
            });
            return classList;
        })
        const styles = useStyles(style => {
            if ((Number(row.props.gutter)) !== 0) {
                style = {
                    paddingLeft: (Number(row.props.gutter)) / 2 + 'px',
                    paddingRight: (Number(row.props.gutter)) / 2 + 'px'
                };
            }
            return style;
        })

        return {
            render: () => (
                <div class={classes.value} style={styles.value}>
                    {slots.default()}
                </div>
            )
        }
    },
})

export default createComponentPlugin(Col)