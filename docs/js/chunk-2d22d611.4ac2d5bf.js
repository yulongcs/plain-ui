(window["webpackJsonp_main-application_project"]=window["webpackJsonp_main-application_project"]||[]).push([["chunk-2d22d611"],{f6f1:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),u={class:"demo-time"},a=Object(l["j"])("现在"),c=Object(l["j"])(' max="121212" min="040404" ');function r(t,e,n,r,o,i){var b=Object(l["B"])("pl-button"),d=Object(l["B"])("pl-time"),j=Object(l["B"])("demo-row"),O=Object(l["B"])("pl-input"),f=Object(l["B"])("demo-line"),m=Object(l["B"])("pl-checkbox");return Object(l["w"])(),Object(l["g"])("div",u,[Object(l["k"])(j,{title:"pl-time"},{default:Object(l["J"])((function(){return[Object(l["k"])(j,{title:"额外的内容"},{default:Object(l["J"])((function(){return[Object(l["k"])(d,{modelValue:o.val[18],"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.val[18]=t})},{foot:Object(l["J"])((function(){return[Object(l["k"])(b,{mode:"text",size:"mini",onClick:i.setTime},{default:Object(l["J"])((function(){return[a]})),_:1},8,["onClick"])]})),_:1},8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"基本用法"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,[Object(l["k"])(O)]),Object(l["k"])("div",null,[Object(l["k"])(d,{onFocus:e[2]||(e[2]=function(t){return i.log("focus")}),onBlur:e[3]||(e[3]=function(t){return i.log("blur")})})]),Object(l["k"])("div",null,[Object(l["k"])(d,{range:"",onFocus:e[4]||(e[4]=function(t){return i.log("focus")}),onBlur:e[5]||(e[5]=function(t){return i.log("blur")})})])]})),_:1}),Object(l["k"])(j,{title:"选择任意时间"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[18]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[18],"onUpdate:modelValue":e[6]||(e[6]=function(t){return o.val[18]=t})},null,8,["modelValue"]),Object(l["k"])(d,{modelValue:o.val[18],"onUpdate:modelValue":e[7]||(e[7]=function(t){return o.val[18]=t})},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"选择时间范围"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,"start:"+Object(l["D"])(o.val[19]),1),Object(l["k"])("div",null,"end:"+Object(l["D"])(o.val[20]),1)]})),_:1}),Object(l["k"])(d,{start:o.val[19],"onUpdate:start":e[8]||(e[8]=function(t){return o.val[19]=t}),end:o.val[20],"onUpdate:end":e[9]||(e[9]=function(t){return o.val[20]=t}),range:""},null,8,["start","end"]),Object(l["k"])(d,{start:o.val[19],"onUpdate:start":e[10]||(e[10]=function(t){return o.val[19]=t}),end:o.val[20],"onUpdate:end":e[11]||(e[11]=function(t){return o.val[20]=t}),range:""},null,8,["start","end"])]})),_:1}),Object(l["k"])(j,{title:"格式化值以及显示值"},{default:Object(l["J"])((function(){return[Object(l["k"])(j,{title:"单值"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[33]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[33],"onUpdate:modelValue":e[12]||(e[12]=function(t){return o.val[33]=t}),displayFormat:"HH时mm分ss秒",valueFormat:"HHmmss"},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"范围选择"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,"start:"+Object(l["D"])(o.val[34]),1),Object(l["k"])("div",null,"end:"+Object(l["D"])(o.val[35]),1)]})),_:1}),Object(l["k"])(d,{range:"",start:o.val[34],"onUpdate:start":e[13]||(e[13]=function(t){return o.val[34]=t}),end:o.val[35],"onUpdate:end":e[14]||(e[14]=function(t){return o.val[35]=t}),displayFormat:"HH时mm分ss秒",valueFormat:"HHmmss"},null,8,["start","end"])]})),_:1})]})),_:1}),Object(l["k"])(j,{title:"最大最小值"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[c]})),_:1}),Object(l["k"])(j,{title:"单值"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[36]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[36],"onUpdate:modelValue":e[15]||(e[15]=function(t){return o.val[36]=t}),displayFormat:"HH时mm分ss秒",valueFormat:"HHmmss",max:"121212",min:"040404"},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"范围选择"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,"start:"+Object(l["D"])(o.val[37]),1),Object(l["k"])("div",null,"end:"+Object(l["D"])(o.val[38]),1)]})),_:1}),Object(l["k"])(d,{range:"",start:o.val[37],"onUpdate:start":e[16]||(e[16]=function(t){return o.val[37]=t}),end:o.val[38],"onUpdate:end":e[17]||(e[17]=function(t){return o.val[38]=t}),displayFormat:"HH时mm分ss秒",valueFormat:"HHmmss",max:"121212",min:"040404"},null,8,["start","end"])]})),_:1})]})),_:1}),Object(l["k"])(j,{title:"四种视图"},{default:Object(l["J"])((function(){return[Object(l["k"])(j,{title:"时"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[39]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[39],"onUpdate:modelValue":e[18]||(e[18]=function(t){return o.val[39]=t}),valueFormat:"HH",displayFormat:"HH时",layout:["h"]},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"时分"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[40]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[40],"onUpdate:modelValue":e[19]||(e[19]=function(t){return o.val[40]=t}),valueFormat:"HHmm",displayFormat:"HH时mm分",layout:["h","m"]},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"时分秒"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[41]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[41],"onUpdate:modelValue":e[20]||(e[20]=function(t){return o.val[41]=t})},null,8,["modelValue"])]})),_:1}),Object(l["k"])(j,{title:"时分"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[42]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[42],"onUpdate:modelValue":e[21]||(e[21]=function(t){return o.val[42]=t}),valueFormat:"mmss",displayFormat:"mm分ss秒",layout:["m","s"]},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(l["k"])(j,{title:"自定义可选时间点"},{default:Object(l["J"])((function(){return[Object(l["k"])(j,{title:"时分"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["j"])(Object(l["D"])(o.val[40]),1)]})),_:1}),Object(l["k"])(d,{modelValue:o.val[43],"onUpdate:modelValue":e[22]||(e[22]=function(t){return o.val[43]=t}),valueFormat:"HHmm",displayFormat:"HH时mm分",layout:["h","m"],custom:i.custom},null,8,["modelValue","custom"])]})),_:1})]})),_:1}),Object(l["k"])(j,{title:"只读以及禁用"},{default:Object(l["J"])((function(){return[Object(l["k"])(f,null,{default:Object(l["J"])((function(){return[Object(l["k"])(m,{modelValue:o.val[44],"onUpdate:modelValue":e[23]||(e[23]=function(t){return o.val[44]=t}),label:"只读或者禁用"},null,8,["modelValue"])]})),_:1}),Object(l["k"])(d,{modelValue:o.val[45],"onUpdate:modelValue":e[24]||(e[24]=function(t){return o.val[45]=t}),disabled:o.val[44]},null,8,["modelValue","disabled"]),Object(l["k"])(d,{modelValue:o.val[45],"onUpdate:modelValue":e[25]||(e[25]=function(t){return o.val[45]=t}),readonly:o.val[44]},null,8,["modelValue","readonly"])]})),_:1})]})),_:1})])}n("99af"),n("c975"),n("a9e3"),n("ac1f"),n("1276");var o=n("3835"),i=n("cb06"),b=n("0c50"),d=n("ffb4"),j={name:"demo-time",data:function(){var t=this,e=function(){var e,n=Object(l["z"])(null);return{val:n,toggle:function(){e||(e=Object(b["a"])(t)({reference:function(){return t.$refs["basic"]},renderAttrs:function(){return{modelValue:n.value,onChange:function(t){return n.value=t}}}})),e.toggle()}}}(),n=function(){var e,n=Object(l["z"])(null),u=Object(l["z"])(null);return{start:n,end:u,toggle:function(){e||(e=Object(b["a"])(t)({reference:function(){return t.$refs["range"]},renderAttrs:function(){return{start:n.value,end:u.value,range:!0,onChange:function(t,e){"start"===e?n.value=t:u.value=t}}}})),e.toggle()}}}();return{basic:e,range:n,val:{6:"20:15:10",7:"12:12:12",8:"08:08:08",13:null},timeBaseColumn:{custom:function(){var t=0,e=15,n=[];while(t<60)n.push(t),t+=e;return n}}}},methods:{log:function(){var t;(t=console).log.apply(t,arguments)},checkDisabled:function(t,e,n){if("m"===e)return t>15||t<8;if("s"===e){if(n.isNull)return!0;if(n.minute>=15)return t>15;if(n.minute<=8)return t<8}return!1},onMSChange:function(t){var e=15,n=15,l=8,u=8;if(t){var a=t.split(":"),c=Object(o["a"])(a,2),r=c[0],b=c[1];r=Number(r),b=Number(b),(r>e||r===e&&b>n)&&(this.val["12"]="".concat(Object(i["a"])(e),":").concat(Object(i["a"])(n))),(r<l||r===l&&b<u)&&(this.val["12"]="".concat(Object(i["a"])(l),":").concat(Object(i["a"])(u)))}},custom:function(t,e){var n=[0,5,10,15,20,25,30,35,40,45,50,55],l=[0,10,20,30,40,50];return"h"===t?[8,9,10,11,13,15,17]:"m"===t?e.isNull?[]:e.hour>12?l:n:void 0},onCustomChange:function(t){if(t){var e=t.split(":"),n=Object(o["a"])(e,2),l=n[0],u=n[1];l=Number(l),u=Number(u),l>12?-1===[15,30].indexOf(u)&&(u=15):-1===[30].indexOf(u)&&(u=30);var a="".concat(Object(i["a"])(l),":").concat(Object(i["a"])(u));a!==t&&(this.val["13"]=a)}},setTime:function(){this.val[18]=d["a"].plainDate.today("HH:mm:ss","HH:mm:ss").getValue()}}};j.render=r;e["default"]=j}}]);
//# sourceMappingURL=chunk-2d22d611.4ac2d5bf.js.map