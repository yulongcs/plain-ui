(window["webpackJsonp_main-application-project"]=window["webpackJsonp_main-application-project"]||[]).push([["chunk-2d237591"],{fb76:function(e,n,t){"use strict";t.r(n);t("b0c0");var a=t("7a23"),o={class:"demo-use-props"};function c(e,n,t,c,r,l){var u=Object(a["B"])("demo-use-props-component");return Object(a["w"])(),Object(a["g"])("div",o,[Object(a["k"])(u,{name:r.name,age:r.age,flag:r.flag},null,8,["name","age","flag"])])}t("d3b7"),t("a9e3");var r=t("53ca"),l=t("7a87"),u=t("b1c6"),i=Object(l["a"])({props:{name:{type:[String,Object]},age:{type:[Number,String]},flag:{type:[Boolean,Function]},level:{type:Number}},setup:function(e){var n=e.props,t=Object(u["a"])(n,{name:u["a"].PROMISE,age:u["a"].NUMBER,flag:u["a"].FUNCTION}),o=t.propsState;return console.log(o),Object(a["H"])((function(){return o.name}),(function(e){return console.log("name",e)}),{immediate:!0}),Object(a["H"])((function(){return o.age}),(function(e){return console.log("age",e)}),{immediate:!0}),Object(a["H"])((function(){return o.flag}),(function(e){return console.log("flag",e)}),{immediate:!0}),{render:function(){return Object(a["k"])("div",null,[Object(a["k"])("ul",null,[Object(a["k"])("li",null,[Object(a["j"])("name:"),String(o.name),Object(a["j"])("-"),Object(r["a"])(o.name)]),Object(a["k"])("li",null,[Object(a["j"])("age:"),String(o.age),Object(a["j"])("-"),Object(r["a"])(o.age)]),Object(a["k"])("li",null,[Object(a["j"])("flag:"),String(o.flag),Object(a["j"])("-"),Object(r["a"])(o.flag)])])])}}}}),p={name:"demo-use-props",components:{DemoUsePropsComponent:i},data:function(){return{name:new Promise((function(e){setTimeout((function(){return e("hello world")}),2e3)})),age:"200px",flag:function(){return!0}}}};p.render=c;n["default"]=p}}]);
//# sourceMappingURL=chunk-2d237591.6fe85b8b.js.map