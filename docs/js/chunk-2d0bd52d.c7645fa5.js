(window["webpackJsonp_main-application-project"]=window["webpackJsonp_main-application-project"]||[]).push([["chunk-2d0bd52d"],{"2c06":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),a={class:"demo-loading"},i={style:{"font-size":"32px"}},c=Object(n["k"])("span",null,"如果父节点的position不为fixed、relative、absolute，pl-loading-mask会自动将父节点的样式设置为 relative",-1),o={key:0,style:{height:"300px",width:"300px","background-color":"#f6f6f6"}},b={key:0,style:{height:"300px",width:"300px","background-color":"#f6f6f6",display:"inline-block"}},u=Object(n["j"])("   "),r={key:1,style:{height:"300px",width:"300px","background-color":"#f6f6f6",display:"inline-block"}};function d(e,t,l,d,j,s){var O=Object(n["B"])("pl-loading"),f=Object(n["B"])("demo-row"),k=Object(n["B"])("pl-checkbox"),g=Object(n["B"])("pl-button"),p=Object(n["B"])("pl-loading-mask"),m=Object(n["C"])("loading");return Object(n["w"])(),Object(n["g"])("div",a,[Object(n["k"])(f,{title:"基本用法"},{default:Object(n["J"])((function(){return[Object(n["k"])(O)]})),_:1}),Object(n["k"])(f,{title:"类型"},{default:Object(n["J"])((function(){return[Object(n["k"])(O,{type:"alpha"}),Object(n["k"])(O,{type:"beta"}),Object(n["k"])(O,{type:"gamma"}),Object(n["k"])(O,{type:"ice"}),Object(n["k"])(O,{type:"delta"})]})),_:1}),Object(n["k"])(f,{title:"大小 font-size:32px"},{default:Object(n["J"])((function(){return[Object(n["k"])("div",i,[Object(n["k"])(O,{type:"alpha"}),Object(n["k"])(O,{type:"beta"}),Object(n["k"])(O,{type:"gamma"}),Object(n["k"])(O,{type:"ice"}),Object(n["k"])(O,{type:"delta"})])]})),_:1}),Object(n["k"])(f,{title:"状态（颜色)"},{default:Object(n["J"])((function(){return[(Object(n["w"])(),Object(n["g"])(n["a"],null,Object(n["A"])(["primary","success","warn","error","info"],(function(e){return Object(n["k"])(O,{key:e,type:"delta",status:e},null,8,["status"])})),64))]})),_:1}),Object(n["k"])(f,{title:"自定义颜色"},{default:Object(n["J"])((function(){return[Object(n["k"])(O,{type:"alpha",style:{color:"blueviolet"}}),Object(n["k"])(O,{type:"beta",style:{color:"blueviolet"}}),Object(n["k"])(O,{type:"gamma",style:{color:"blueviolet"}}),Object(n["k"])(O,{type:"ice",style:{color:"blueviolet"}}),Object(n["k"])(O,{type:"delta",style:{color:"blueviolet"}})]})),_:1}),Object(n["k"])(f,{title:"组件调用loading-mask"},{default:Object(n["J"])((function(){return[Object(n["k"])(k,{label:"init",modelValue:j.flag1.init,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.flag1.init=e})},null,8,["modelValue"]),Object(n["k"])(k,{label:"open mask",modelValue:j.flag1.loading,"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.flag1.loading=e})},null,8,["modelValue"]),c,j.flag1.init?(Object(n["w"])(),Object(n["g"])("div",o,[Object(n["k"])(g,{label:"this is button"}),Object(n["k"])(p,{modelValue:j.flag1.loading,"onUpdate:modelValue":t[3]||(t[3]=function(e){return j.flag1.loading=e}),message:"loading..."},null,8,["modelValue"])])):Object(n["h"])("",!0)]})),_:1}),Object(n["k"])(f,{title:"指令调用loading-directive"},{default:Object(n["J"])((function(){return[Object(n["k"])(k,{label:"init",modelValue:j.flag2.init,"onUpdate:modelValue":t[4]||(t[4]=function(e){return j.flag2.init=e})},null,8,["modelValue"]),Object(n["k"])(k,{label:"open mask",modelValue:j.flag2.loading,"onUpdate:modelValue":t[5]||(t[5]=function(e){return j.flag2.loading=e})},null,8,["modelValue"]),Object(n["k"])("div",null,[j.flag2.init?Object(n["K"])((Object(n["w"])(),Object(n["g"])("div",b,[Object(n["k"])(g,{label:"this is button"})],512)),[[m,j.flag2.loading]]):Object(n["h"])("",!0),u,j.flag2.init?Object(n["K"])((Object(n["w"])(),Object(n["g"])("div",r,[Object(n["k"])(g,{label:"this is button"})],512)),[[m,{message:"加载中...",modelValue:j.flag2.loading}]]):Object(n["h"])("",!0)])]})),_:1}),Object(n["k"])(f,{title:"$loading.mask"},{default:Object(n["J"])((function(){return[Object(n["k"])(g,{label:"全屏加载状态",onClick:s.loadingMask},null,8,["onClick"])]})),_:1}),Object(n["k"])(f,{title:"$loading.bar"},{default:Object(n["J"])((function(){return[Object(n["k"])(g,{onClick:s.newLoadingBar,label:"new loading bar"},null,8,["onClick"]),Object(n["k"])(g,{onClick:t[6]||(t[6]=function(e){j.bar.done(),j.bar=null}),label:"done",disabled:!j.bar},null,8,["disabled"]),Object(n["k"])(g,{onClick:t[7]||(t[7]=function(e){j.bar.fail(),j.bar=null}),label:"fail",disabled:!j.bar},null,8,["disabled"])]})),_:1})])}l("96cf");var j=l("1da1"),s=l("276f"),O={name:"loading",data:function(){return{flag1:{loading:!0,init:!0},flag2:{loading:!0,init:!0},bar:null}},methods:{loadingMask:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=e.$loading.mask({message:"正在加载资源文件..."}),e.$message("三秒钟之后关闭！"),t.next=4,Object(s["a"])(3e3);case 4:l.close();case 5:case"end":return t.stop()}}),t)})))()},startLoading:function(){var e=this;this.$loading(!0),setTimeout((function(){e.$loading(!1)}),3e3)},newLoadingBar:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.bar&&e.bar.done(),e.bar=e.$loading.bar();case 2:case"end":return t.stop()}}),t)})))()}}};O.render=d;t["default"]=O}}]);
//# sourceMappingURL=chunk-2d0bd52d.c7645fa5.js.map