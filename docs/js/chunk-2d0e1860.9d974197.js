(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["chunk-2d0e1860"],{"7b98":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"virtual-tree-large-data"},[n("demo-line",[n("pl-button-group",[n("pl-button",{attrs:{label:"全部展开"},on:{click:function(e){return t.$refs.tree1.expandAll()}}}),n("pl-button",{attrs:{label:"全部收起"},on:{click:function(e){return t.$refs.tree1.collapseAll()}}}),n("pl-button",{attrs:{label:"当前选中节点"},on:{click:function(e){t.$message(t.$refs.tree1.getCurrent()?t.$refs.tree1.getCurrent().data.name:"未选中任何节点！")}}}),n("pl-button",{attrs:{label:"获取选中的数据"},on:{click:function(e){t.$message(t.$refs.tree1.getCheckedData().map((function(t){return t.name})).join(","),{time:null})}}}),n("pl-button",{attrs:{label:"打印数据"},on:{click:function(e){return t.$plain.log(t.treeData)}}})],1)],1),n("pl-virtual-tree",{ref:"tree1",attrs:{data:t.treeData,defaultExpandAll:"",keyField:"id",labelField:"name",childrenField:"subs",height:"360px",width:"500px",virtual:"",draggable:"",showCheckbox:""},on:{"node-click":function(e){return t.$plain.log(e.data.name)}}})],1)},l=[],r={name:"virtual-tree-large-data",props:{},data:function(){function t(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=[],l=0;l<10;l+=1){var r="".concat(e,"-").concat(l),u={name:r,id:r};n>0&&(u.subs=t(r,n-1)),a.push(u)}return a}var e=t();return{treeData:e}},methods:{}},u=r,i=n("2877"),o=Object(i["a"])(u,a,l,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e1860.9d974197.js.map