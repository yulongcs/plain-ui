(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-349f5122"],{"6e4f":function(t,e,c){"use strict";c.r(e);var l=c("7a23"),n={class:"demo-scroll"},o={class:"demo-scroll-wrapper",style:{display:"inline-block","vertical-align":"top"}},r={class:"demo-scroll-wrapper"},i=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),u={class:"demo-scroll-wrapper",style:{display:"inline-block","vertical-align":"top"}},s={class:"demo-scroll-wrapper"},b=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),j={class:"demo-scroll-wrapper"},O=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),a={class:"demo-scroll-wrapper",style:{height:"auto"}},d=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),f={class:"demo-scroll-wrapper",style:{width:"auto"}},k=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),p={class:"demo-scroll-wrapper"},h=Object(l["k"])("div",{style:{height:"100%",width:"400px"},class:"demo-scroll-content"}," this is content ",-1),m={class:"demo-scroll-wrapper"},v=Object(l["k"])("div",{style:{height:"400px",width:"100%"},class:"demo-scroll-content"}," this is content ",-1),w={class:"demo-scroll-wrapper"},J={style:{height:"400px",width:"400px"},class:"demo-scroll-content"},g=Object(l["j"])(" this is content "),_={class:"demo-scroll-wrapper"},y={style:{height:"400px",width:"400px"},class:"demo-scroll-content"},x=Object(l["j"])(" this is content "),C={class:"demo-scroll-wrapper",style:{display:"inline-block","vertical-align":"top"}},S={style:{display:"inline-block"}},$=Object(l["j"])("向下滚动"),A=Object(l["j"])("向上滚动"),B=Object(l["j"])("停止滚动"),E={class:"demo-scroll-wrapper",style:{display:"inline-block","vertical-align":"top"}},D={style:{display:"inline-block","white-space":"nowrap"}},V={style:{display:"inline-block"}},X=Object(l["j"])("向左滚动"),z=Object(l["j"])("向右滚动"),H=Object(l["j"])("停止滚动"),W={class:"demo-scroll-wrapper"},L=Object(l["k"])("div",{style:{height:"400px",width:"400px"},class:"demo-scroll-content"}," this is content ",-1);function R(t,e,c,R,T,U){var Y=Object(l["B"])("pl-scroll"),q=Object(l["B"])("pl-button"),F=Object(l["B"])("pl-button-group"),G=Object(l["B"])("demo-row"),I=Object(l["B"])("pl-checkbox"),K=Object(l["B"])("pl-item"),M=Object(l["B"])("pl-list"),N=Object(l["B"])("pl-checkbox-group");return Object(l["w"])(),Object(l["g"])("div",n,[Object(l["k"])(G,{title:"基本用法1"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",o,[Object(l["k"])(Y,null,{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,[(Object(l["w"])(!0),Object(l["g"])(l["a"],null,Object(l["A"])(T.list,(function(t){return Object(l["w"])(),Object(l["g"])("div",{class:["demo-scroll-label",U.getClass(t)],key:t},Object(l["D"])(t),3)})),128))])]})),_:1})]),Object(l["k"])(F,{vertical:""},{default:Object(l["J"])((function(){return[Object(l["k"])(q,{icon:"el-icon-circle-plus-outline",onClick:e[1]||(e[1]=function(t){return T.list.push(T.list.length+1)}),label:"添加元素"}),Object(l["k"])(q,{icon:"el-icon-remove-outline",onClick:e[2]||(e[2]=function(t){return T.list.shift()}),label:"删除元素"})]})),_:1})]})),_:1}),Object(l["k"])(G,{title:"基本用法2"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",r,[Object(l["k"])(Y,null,{default:Object(l["J"])((function(){return[i]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"基本用法3"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",u,[Object(l["k"])(Y,null,{default:Object(l["J"])((function(){return[Object(l["k"])(N,{modelValue:T.checkboxValue,"onUpdate:modelValue":e[3]||(e[3]=function(t){return T.checkboxValue=t})},{default:Object(l["J"])((function(){return[Object(l["k"])(M,{direction:"top"},{default:Object(l["J"])((function(){return[(Object(l["w"])(!0),Object(l["g"])(l["a"],null,Object(l["A"])(T.list,(function(t){return Object(l["w"])(),Object(l["g"])(K,{class:"demo-scroll-label",key:t},{default:Object(l["J"])((function(){return[Object(l["k"])(I,{val:String(t)},null,8,["val"]),Object(l["j"])(" "+Object(l["D"])(t),1)]})),_:2},1024)})),128))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]),Object(l["k"])(F,{vertical:""},{default:Object(l["J"])((function(){return[Object(l["k"])(q,{icon:"el-icon-circle-plus-outline",onClick:e[4]||(e[4]=function(t){return T.list.push(T.list.length+1)}),label:"添加元素"}),Object(l["k"])(q,{icon:"el-icon-remove-outline",onClick:e[5]||(e[5]=function(t){return T.list.shift()}),label:"删除元素"})]})),_:1}),Object(l["j"])(" checkboxValue："+Object(l["D"])(T.checkboxValue),1)]})),_:1}),Object(l["k"])(G,{title:"可横向滚动"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",s,[Object(l["k"])(Y,{scrollX:"",scrollAfterDragEnd:""},{default:Object(l["J"])((function(){return[b]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"只能横向滚动"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",j,[Object(l["k"])(Y,{scrollX:"",scrollY:!1},{default:Object(l["J"])((function(){return[O]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"适配内容高度"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",a,[Object(l["k"])(Y,{scrollX:"",fitContentHeight:""},{default:Object(l["J"])((function(){return[d]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"适配内容宽度"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",f,[Object(l["k"])(Y,{fitContentWidth:""},{default:Object(l["J"])((function(){return[k]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"适配host高度"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",p,[Object(l["k"])(Y,{fitHostHeight:"",scrollX:""},{default:Object(l["J"])((function(){return[h]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"适配host宽度"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",m,[Object(l["k"])(Y,{fitHostWidth:""},{default:Object(l["J"])((function(){return[v]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"滚动：纵向"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",w,[Object(l["k"])(Y,{ref:"scroll1",onScroll:e[9]||(e[9]=function(t){return U.log("vertical scroll")})},{default:Object(l["J"])((function(){return[Object(l["k"])("div",J,[g,Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scroll",onClick:e[6]||(e[6]=function(e){return t.$refs.scroll1.methods.scroll({y:100},1e3)})})]),Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scroll(no emit)",onClick:e[7]||(e[7]=function(e){return t.$refs.scroll1.methods.scroll({y:100},{time:1e3,noEmitScroll:!0})})})]),Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scrollEnd",onClick:e[8]||(e[8]=function(e){return t.$refs.scroll1.methods.scrollEnd()})})])])])]})),_:1},512)])]})),_:1}),Object(l["k"])(G,{title:"滚动：横向"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",_,[Object(l["k"])(Y,{ref:"scroll2",scrollX:"",onScroll:e[13]||(e[13]=function(t){return U.log("vertical scroll")})},{default:Object(l["J"])((function(){return[Object(l["k"])("div",y,[x,Object(l["k"])("div",null,[Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scroll",onClick:e[10]||(e[10]=function(e){return t.$refs.scroll2.methods.scroll({x:100},1e3)})})]),Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scroll(no emit)",onClick:e[11]||(e[11]=function(e){return t.$refs.scroll2.methods.scroll({x:100},{time:1e3,noEmitScroll:!0})})})]),Object(l["k"])("p",null,[Object(l["k"])(q,{size:"mini",label:"scrollEnd",onClick:e[12]||(e[12]=function(e){return t.$refs.scroll2.methods.scrollEnd()})})])])])]})),_:1},512)])]})),_:1}),Object(l["k"])(G,{title:"自动滚动(纵向)"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",C,[Object(l["k"])(Y,{ref:"autoScroll1"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",null,[(Object(l["w"])(),Object(l["g"])(l["a"],null,Object(l["A"])(100,(function(t){return Object(l["k"])("div",{class:"demo-scroll-label",key:t},Object(l["D"])(t),1)})),64))])]})),_:1},512)]),Object(l["k"])("div",S,[Object(l["k"])(F,{vertical:""},{default:Object(l["J"])((function(){return[Object(l["k"])(q,{onClick:e[14]||(e[14]=function(e){return t.$refs.autoScroll1.methods.autoScrollBottom()})},{default:Object(l["J"])((function(){return[$]})),_:1}),Object(l["k"])(q,{onClick:e[15]||(e[15]=function(e){return t.$refs.autoScroll1.methods.autoScrollTop()})},{default:Object(l["J"])((function(){return[A]})),_:1}),Object(l["k"])(q,{onClick:e[16]||(e[16]=function(e){return t.$refs.autoScroll1.methods.stopAutoScroll()})},{default:Object(l["J"])((function(){return[B]})),_:1})]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"自动滚动（横向）"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",E,[Object(l["k"])(Y,{ref:"autoScroll2",scrollX:""},{default:Object(l["J"])((function(){return[Object(l["k"])("div",D,[(Object(l["w"])(),Object(l["g"])(l["a"],null,Object(l["A"])(12,(function(t){return Object(l["k"])("div",{class:"demo-scroll-label",key:t,style:{width:"30px",display:"inline-block","margin-right":"10px"}},Object(l["D"])(t),1)})),64))])]})),_:1},512)]),Object(l["k"])("div",V,[Object(l["k"])(F,{vertical:""},{default:Object(l["J"])((function(){return[Object(l["k"])(q,{onClick:e[17]||(e[17]=function(e){return t.$refs.autoScroll2.methods.autoScrollLeft()})},{default:Object(l["J"])((function(){return[X]})),_:1}),Object(l["k"])(q,{onClick:e[18]||(e[18]=function(e){return t.$refs.autoScroll2.methods.autoScrollRight()})},{default:Object(l["J"])((function(){return[z]})),_:1}),Object(l["k"])(q,{onClick:e[19]||(e[19]=function(e){return t.$refs.autoScroll2.methods.stopAutoScroll()})},{default:Object(l["J"])((function(){return[H]})),_:1})]})),_:1})])]})),_:1}),Object(l["k"])(G,{title:"scrollAfterDragEnd: 拖拽结束后滚动"},{default:Object(l["J"])((function(){return[Object(l["k"])("div",W,[Object(l["k"])(Y,{scrollX:"",scrollAfterDragEnd:""},{default:Object(l["J"])((function(){return[L]})),_:1})])]})),_:1})])}var T={name:"demo-scroll",props:{},data:function(){return{checkboxValue:[],list:function(){var t=[],e=0;while(e<40)t.push(e++);return t}()}},methods:{getClass:function(t){return console.log("item",t),{}},log:function(){var t;(t=console).log.apply(t,arguments)}}};c("744f");T.render=R;e["default"]=T},"73c3":function(t,e,c){},"744f":function(t,e,c){"use strict";c("73c3")}}]);
//# sourceMappingURL=chunk-349f5122.b9d4302c.js.map