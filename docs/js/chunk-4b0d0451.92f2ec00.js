(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b0d0451"],{"25fa":function(t,e,n){"use strict";n("c9df")},c1f6:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),c={class:"popper-service"};function r(t,e,n,r,o,u){var a=Object(l["B"])("pl-button"),i=Object(l["B"])("demo-row"),p=Object(l["B"])("pl-input");return Object(l["w"])(),Object(l["g"])("div",c,[Object(l["k"])(i,{title:"基本用法"},{default:Object(l["J"])((function(){return[Object(l["k"])(a,{label:"基本用法一",onClick:o.basicUsage.toggle,ref:"basicUsage"},null,8,["onClick"])]})),_:1}),Object(l["k"])(i,{title:"实例服务"},{default:Object(l["J"])((function(){return[Object(l["k"])(a,{label:"实例一",ref:"example1",onClick:o.example1.toggle},null,8,["onClick"]),Object(l["k"])(a,{label:"实例二",ref:"example2",onClick:o.example2.toggle},null,8,["onClick"]),Object(l["k"])(p,{modelValue:o.text,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.text=t})},null,8,["modelValue"])]})),_:1}),Object(l["k"])(i,{title:"popper 属性测试"},{default:Object(l["J"])((function(){return[Object(l["k"])(a,{label:"Popper属性测试",onClick:o.testAttrs.toggle,ref:"testAttrs"},null,8,["onClick"]),Object(l["k"])(a,{label:"Popper属性测试",onClick:o.testAttrs2.toggle,ref:"testAttrs2"},null,8,["onClick"])]})),_:1})])}n("b0c0");var o=n("5530"),u={name:"popper-service",data:function(){var t=this,e=function(e){var n=e.name,c=e.content,r=e.attrs;return t.$popper({reference:function(){return t.$refs[n]},render:function(){return Object(l["k"])("div",null,["function"===typeof c?c():c])},popperAttrs:Object(o["a"])({},r||{})})},n=e({name:"basicUsage",content:"基本用法"}),c=e({name:"example1",content:function(){return Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["j"])("实例一")]),Object(l["k"])(Object(l["B"])("pl-input"),{modelValue:t.text,"onUpdate:modelValue":function(e){return t.text=e}},null)])}}),r=e({name:"example2",content:function(){return Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["j"])("实例二")]),Object(l["k"])(Object(l["B"])("pl-number"),{modelValue:t.text,"onUpdate:modelValue":function(e){return t.text=e}},null)])}}),u=e({name:"testAttrs",content:function(){return Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["j"])("testAttrs1")]),Object(l["j"])("高度、对其方式、动画")])},attrs:{height:"80px",width:"200px",placement:"bottom-end",transition:"pl-transition-popper-drop"}}),a=e({name:"testAttrs2",content:function(){return Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["j"])("testAttrs2")]),Object(l["j"])("高度、对其方式、动画")])},attrs:{height:"80px",width:"200px",placement:"top-start",transition:"pl-transition-popper-drop"}});return{basicUsage:n,example1:c,example2:r,text:"123456",testAttrs:u,testAttrs2:a}}};n("25fa");u.render=r;e["default"]=u},c9df:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4b0d0451.92f2ec00.js.map