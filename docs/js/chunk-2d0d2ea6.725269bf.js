(window["webpackJsonp_main-application-project"]=window["webpackJsonp_main-application-project"]||[]).push([["chunk-2d0d2ea6"],{"5b14":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"table-colspan"};function r(t,e,n,r,i,o){var d=Object(a["B"])("demo-line"),l=Object(a["B"])("plc-index"),s=Object(a["B"])("plc"),f=Object(a["B"])("pl-table");return Object(a["w"])(),Object(a["g"])("div",c,[Object(a["k"])(d,{title:"字段值相同则合并列"}),Object(a["k"])("ul",null,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(i.data,(function(t,e){return Object(a["w"])(),Object(a["g"])("li",{key:e},Object(a["D"])(t),1)})),128))]),Object(a["k"])(f,{data:i.data,spanMethod:i.spanMethod,border:""},{default:Object(a["J"])((function(){return[Object(a["k"])(l),Object(a["k"])(s,{title:"产品线",field:"name"}),Object(a["k"])(s,{title:"第一季度盈亏",field:"first"}),Object(a["k"])(s,{title:"第二季度盈亏",field:"second"}),Object(a["k"])(s,{title:"第三季度盈亏",field:"third"}),Object(a["k"])(s,{title:"第四季度盈亏",field:"fourth"})]})),_:1},8,["data","spanMethod"])])}n("4160");var i={name:"table-colspan",data:function(){var t=this,e=[{name:"产品线A",first:"盈利",second:"盈利",third:"亏损",fourth:"亏损"},{name:"产品线B",first:"盈利",second:"亏损",third:"亏损",fourth:"亏损"},{name:"产品线C",first:"盈利",second:"盈利",third:"盈利",fourth:"亏损"},{name:"产品线D",first:"亏损",second:"亏损",third:"亏损",fourth:"亏损"},{name:"产品线E",first:"盈利",second:"盈利",third:"盈利",fourth:"盈利"}],n=[],a=["first","second","third","fourth"];return e.forEach((function(t){var e={},c=null;a.forEach((function(n,a){if(0===a)return c=n,void(e[n]=1);t[c]===t[n]?(e[n]=0,e[c]++):(e[n]=1,c=n)})),n.push(e)})),console.log(JSON.parse(JSON.stringify(n))),{data:e,spanMap:n,spanMethod:function(e){var n=e.node,a=e.plc,c=a.props.field;return"name"===c?{rowspan:1,colspan:1}:{rowspan:1,colspan:t.spanMap[n.index][c]}}}}};i.render=r;e["default"]=i}}]);
//# sourceMappingURL=chunk-2d0d2ea6.725269bf.js.map