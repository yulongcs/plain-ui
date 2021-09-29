import {designPage} from "plain-design-composition";
import PlTablePro from "../../../src/packages/PlTablePro";
import {PlcSelect} from "../../../src/packages/PlcSelect";
import {PlcCheckbox} from "../../../src/packages/PlcCheckbox";
import {PlcNumber} from "../../../src/packages/PlcNumber";
import {PlcInput} from "../../../src/packages/PlcInput";
import {TableRenderScope} from "../../../src/packages/PlTable/plc/utils/plc.type";
import PlcTextarea from "../../../src/packages/PlcTextarea";
import useTableOption from "../../init/useTableOption";
import useObjectOption from "../../init/useObjectOption";
import {Plc} from "../../../src/packages/Plc";
import $$message from "../../../src/packages/$$message";
import {PlcDate} from "../../../src/packages/PlcDate";
import PlSelectOption from "../../../src/packages/PlSelectOption";
import PlIcon from "../../../src/packages/PlIcon";
import PlcObject from "../../../src/packages/PlcObject";
import PlcAddress from "../../../src/packages/PlcAddress";
import PlcOv from "../../../src/packages/PlcOv";

export default designPage(() => {

    const option = useTableOption({
        title: '示例列表',
        url: '/demo',
        // editType: 'form',
        defaultNewRow: {
            count: 100
        },
        // enable: false,
        /*enable: {
            update: false
        },*/
        buttons: [
            {
                label: '详情',
                code: 'detail',
                type: 'other',
                position: 'in',
                handler: (node) => {
                    console.log(node)
                }
            },
            {
                label: '发布',
                code: 'publish',
                type: 'other',
                position: 'out',
                handler: (node) => {
                    console.log(node)
                }
            },
            {
                label: '发布',
                code: 'publish',
                type: 'other',
                position: 'in',
                handler: (node) => {
                    console.log(node)
                }
            },
        ],
        hooks: {
            /*onRequestData: (data) => {
                data.distinctFields = ['normalText']
            }*/
        },
        // filterParam: {queries: [{field: 'normalText', operator: '~', value: '22'}]},
    })

    const parentOption = useObjectOption({
        url: '/demo',
        render: () => <>
            <Plc title="编号id" field="id"/>
            <PlcInput title="文本normalText" field="normalText" fixed="left"/>
        </>
    })

    const onClick = (data: { e: MouseEvent, scope: TableRenderScope }) => {
        $$message(data.scope.row.normalText)
    }

    return () => <>
        <div style={{height: '100%', boxSizing: 'border-box', backgroundColor: 'white'}}>
            <PlTablePro option={option}>
                <Plc title="编号id" field="id" link onClick={onClick} hideInForm/>
                <PlcDate title="创建时间" field="createdAt" hideInForm width={200} editable={false} datetime/>
                <PlcDate title="更新时间" field="updatedAt" hideInForm width={200} editable={false} datetime/>
                <PlcDate title="日期" field="dateVal"/>
                <PlcNumber title="计数count" field="count" required/>
                <PlcInput title="文本normalText" field="normalText" required fixed="left"/>
                <PlcNumber title="数字numberVal" field="numberVal"/>
                <PlcCheckbox title="复选框flag" field="flag"/>
                <PlcSelect title="下拉框selectVal" field="selectVal">
                    <PlSelectOption label="消费者" val="consumer">
                        <PlIcon icon="el-icon-s-custom" status="primary" style={{marginRight: '4px'}}/>
                        <span>消费者</span>
                    </PlSelectOption>
                    <PlSelectOption label="潜在客户" val="potential">
                        <PlIcon icon="el-icon-place" status="info" style={{marginRight: '4px'}}/>
                        <span>潜在客户</span>
                    </PlSelectOption>
                    <PlSelectOption label="门店" val="store">
                        <PlIcon icon="el-icon-s-shop" status="error" style={{marginRight: '4px'}}/>
                        <span>门店</span>
                    </PlSelectOption>
                </PlcSelect>
                <PlcTextarea title="长文本longText" field="longText"/>
                <PlcObject title="父对象" field="parentName" option={parentOption} map={{parentId: 'id', parentName: 'normalText'}}/>
                <PlcAddress title="省" field="provinceVal" province/>
                <PlcAddress title="市" field="cityVal" parentField="provinceVal" city/>
                <PlcAddress title="区" field="districtVal" parentField="cityVal" district/>
                <PlcOv title="选项值" field="ovVal" ov="promotion"/>
            </PlTablePro>
        </div>
    </>
})
