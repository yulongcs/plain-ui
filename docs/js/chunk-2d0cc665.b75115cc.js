(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["chunk-2d0cc665"],{"4e86":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("child-component",{model:{value:e.val[0],callback:function(t){e.$set(e.val,0,t)},expression:"val[0]"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val[0],expression:"val[0]"}],attrs:{type:"text"},domProps:{value:e.val[0]},on:{input:function(t){t.target.composing||e.$set(e.val,0,t.target.value)}}})],1)},l=[],o={mixins:[{watch:{value:function(e){console.log("mixin change",e)}}}],props:{value:{}},watch:{value:function(e){console.log("self change",e)}},render:function(){var e=this,t=arguments[0];return t("input",{attrs:{value:"value"},on:{input:function(t){return e.$emit("input",t.target.value)}}})}},s={name:"test",components:{ChildComponent:o},props:{},data:function(){return{val:{}}},methods:{}},u=s,i=n("2877"),c=Object(i["a"])(u,a,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cc665.b75115cc.js.map