(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cb69346","chunk-bf3f7bee"],{"1c45":function(t,i,n){},3307:function(t,i,n){"use strict";var e=n("1c45"),o=n.n(e);o.a},"3edc":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"demo-list"},[n("demo-list-child"),n("div",{ref:"wrapper"})],1)},o=[],c=n("bc9d"),r={name:"demo-list",components:{DemoListChild:c["default"]},mounted:function(){this.ins=this.$plain.newInstance(c["default"],this.$refs.wrapper)}},s=r,a=n("17cc"),l=Object(a["a"])(s,e,o,!1,null,null,null);i["default"]=l.exports},bc9d:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"demo-list-child"},[n("im-demo-row",{attrs:{title:"基本用法：设置动画"}},[n("im-button-group",[n("im-button",{on:{click:t.add}},[t._v("add")]),n("im-button",{on:{click:t.remove}},[t._v("remove")]),n("im-button",{on:{click:t.shuffle}},[t._v("shuffle")])],1),n("im-button-group",[n("im-button",{attrs:{active:"top"===t.direction},on:{click:function(i){t.direction="top"}}},[t._v("top")]),n("im-button",{attrs:{active:"left"===t.direction},on:{click:function(i){t.direction="left"}}},[t._v("left")]),n("im-button",{attrs:{active:"right"===t.direction},on:{click:function(i){t.direction="right"}}},[t._v("right")]),n("im-button",{attrs:{active:"bottom"===t.direction},on:{click:function(i){t.direction="bottom"}}},[t._v("bottom")]),n("im-button",{attrs:{active:"top-left"===t.direction},on:{click:function(i){t.direction="top-left"}}},[t._v("top-left")]),n("im-button",{attrs:{active:"top-right"===t.direction},on:{click:function(i){t.direction="top-right"}}},[t._v("top-right\n            ")]),n("im-button",{attrs:{active:"bottom-left"===t.direction},on:{click:function(i){t.direction="bottom-left"}}},[t._v("bottom-left\n            ")]),n("im-button",{attrs:{active:"bottom-right"===t.direction},on:{click:function(i){t.direction="bottom-right"}}},[t._v("bottom-right\n            ")])],1)],1),n("im-demo-row",[n("im-list",{attrs:{direction:t.direction,draggable:"",dragList:t.cities}},t._l(t.cities,function(i,e){return n("im-item",{key:i.name,staticClass:"test-item",on:{click:function(n){return t.handleClick(i,e)}}},[t._v(t._s(i.name)+"\n            ")])}),1)],1)],1)},o=[],c={name:"demo-list-child",data:function(){return{direction:"top",cities:[{name:"广州市"},{name:"上海市"},{name:"北京市"},{name:"深圳市"},{name:"长沙市"},{name:"南京市"}]}},methods:{randomIndex:function(){return Math.floor(Math.random()*this.cities.length)},handleClick:function(t,i){this.cities.splice(i,1)},add:function(){this.cities.splice(this.randomIndex(),0,{name:(new Date).getTime()})},remove:function(){this.cities.splice(this.randomIndex(),1)},shuffle:function(){this.cities=this.$plain.$utils.shuffle(this.cities)}}},r=c,s=(n("3307"),n("17cc")),a=Object(s["a"])(r,e,o,!1,null,null,null);i["default"]=a.exports}}]);
//# sourceMappingURL=chunk-0cb69346.d9c9fd4c.js.map