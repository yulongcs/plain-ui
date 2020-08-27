import {PlcType} from "@/packages/table/plc/plc";
import {TableNode} from "@/packages/table/table/TableNode";
import {StyleType} from "@/types/utils";
import {PlainUtils} from "@/util/util";
import {PlcGroupType} from "@/packages/table/plc/plc-group";

/**
 * plc组属性
 * @author  韦胜健
 * @date    2020/8/14 17:25
 */
export const PlcGroupProps = {
    title: {type: String},                                                  // 列标题
    align: {type: String, default: 'left'},                                 // 非编辑状态下文本对其方式
    noPadding: {type: Boolean},                                             // 是否不兼容表格的虚拟滚动功能
    colDraggable: {type: Boolean},                                          // 列是否可以拖拽排序

    hide: {type: Boolean},                                                  // 是否隐藏
    order: {type: Number},                                                  // 列排序
    fixed: {type: String, default: 'center'},                               // 冻结列位置：left、right、undefined
    autoFixedLeft: {type: Boolean},                                         // 当出现左固定列的时候，是否自动设置为左固定列
    autoFixedRight: {type: Boolean},                                        // 当出现右固定列的时候，是否自动设置为右固定列
}

/**
 * plc属性
 * @author  韦胜健
 * @date    2020/8/14 17:25
 */
export const PlcProps = {

    // 基础属性
    ...PlcGroupProps,
    field: {type: String},                                                  // 列绑定字段
    width: {type: [String, Number], default: '120'},                        // 列宽度
    fit: {type: Number, default: 0},                                        // 当列不满表格宽度时，该列所占剩下宽度的权重
    notFitVirtual: {type: Boolean},                                         // 是否不兼容表格的虚拟滚动功能

    // 渲染函数
    head: {type: Function},                                                 // 列标题渲染函数
    default: {type: Function},                                              // 列内容默认渲染函数
    summary: {type: Function},                                              // 列内容在合计行上的渲染函数
    edit: {type: Function},                                                 // 列内容在编辑状态下的渲染函数
    renderAfterRow: {type: Function},                                       // 行之后需要额外渲染的内容

    // 编辑相关
    required: {type: Boolean},                                              // 是否必填
    rules: {type: [Object, Array]},                                         // 校验规则
    editable: {type: [Boolean, Function], default: true},                   // 是否可编辑
    addEditPadding: {type: Boolean},                                        // 处于编辑状态的时候，是否添加内编辑，只有当行状态为编辑状态，并且列有edit渲染函数或者作用域插槽时，才符合“处于编辑状态”的条件

    // search: {type: Boolean, default: true},                              // 可查询
    // searchType: {type: String, default: 'input'},                        // 查询类型
    // searchField: {type: String},                                         // 查询字段
    // sort: {type: Boolean, default: true},                                // 可排序
    // sortField: {type: String},                                           // 排序字段

    // formatter: {type: Function},                                         // 文本格式化函数，支持异步格式化
    // linkText: {type: Boolean},                                           // 是否以超链接的形式展示文本，并且点击的时候回派发事件
}

export const PLC_COLLECTOR = '@@PLC_COLLECTOR'

/**
 * plc组件类型，有列和组两种
 * @author  韦胜健
 * @date    2020/8/14 17:25
 */
export const enum PlcComponentType {
    PLC = 'PLC',
    GROUP = 'GROUP',
}

/**
 * plc的固定类型，左中右
 * @author  韦胜健
 * @date    2020/8/14 17:25
 */
export const enum PlcFixedType {
    left = 'left',
    center = 'center',
    right = 'right',
}

/**
 * plc的对其类型
 * @author  韦胜健
 * @date    2020/8/14 17:25
 */
export const enum PlcAlign {
    left = 'left',
    center = 'center',
    right = 'right'
}

/**
 * plc组件的一些公共数据
 * @author  韦胜健
 * @date    2020/8/14 17:26
 */
export const PlcComponentPublicData = {
    level: 0,
    rowspan: 1,
    colspan: 1,
    fixedPosition: {
        left: 0,
        right: 0,
    },
    isLastFixedLeft: false,
    isFirstFixedRight: false,
    styles: {
        head: {
            cell: {},
            innerCell: {},
        },
        body: {
            cell: {},
            innerCell: {},
        },
    },
    classes: {
        head: {
            cell: {},
            innerCell: {},
        },
        body: {
            cell: {},
            innerCell: {},
        },
    },
} as {
    level?: number,                     // 分组表头层级
    rowspan?: number,                   // 表头td的rowspan
    colspan?: number,                   // 表头td的colspan
    fixedPosition: {                    // 固定列的sticky位置
        left: number,
        right: number,
    },
    isLastFixedLeft: boolean,           // 是否为最后一个左固定列
    isFirstFixedRight: boolean,         // 是否为第一个右固定列

    // 列style公共内联样式
    styles: {
        head: {
            cell: StyleType,
            innerCell: StyleType,
        },
        body: {
            cell: StyleType,
            innerCell: StyleType,
        },
    },
    // 列公共class样式
    classes: {
        head: {
            cell: any,
            innerCell: any,
        },
        body: {
            cell: any,
            innerCell: any,
        },
    },
}

export function getCellClass(plc: PlcType | PlcGroupType, rowData?: TableNode) {
    return [
        `plt-cell-align-${plc.props.align || PlcAlign.left}`,
        {
            'pl-cell-group': plc.type === PlcComponentType.GROUP,
        }
    ]
}

/**
 * 是否可以使用sticky定位
 * @author  韦胜健
 * @date    2020/8/15 23:58
 */
export const stickyFlag = !PlainUtils.ie || PlainUtils.ie === 'edge'