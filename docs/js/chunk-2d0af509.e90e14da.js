(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af509"],{"0e97":function(e,l,t){"use strict";t.r(l);t("b0c0");var a=t("7a23"),n={class:"form-edit-control"},o=Object(a["k"])("span",null," 至 ",-1),u={style:{margin:"12px 0"}},c=Object(a["k"])("span",null," 至 ",-1);function d(e,l,t,d,r,b){var i=Object(a["B"])("pl-checkbox"),f=Object(a["B"])("demo-line"),m=Object(a["B"])("pl-input"),j=Object(a["B"])("pl-form-item"),O=Object(a["B"])("pl-number"),k=Object(a["B"])("pl-icon"),p=Object(a["B"])("pl-radio"),s=Object(a["B"])("pl-radio-group"),V=Object(a["B"])("pl-checkbox-group"),v=Object(a["B"])("pl-select-option"),D=Object(a["B"])("pl-select"),J=Object(a["B"])("pl-button"),g=Object(a["B"])("pl-form"),_=Object(a["B"])("demo-row"),F=Object(a["C"])("tooltip");return Object(a["w"])(),Object(a["g"])("div",n,[Object(a["k"])(_,{title:"父子disabled以及readonly设置"},{default:Object(a["J"])((function(){return[Object(a["k"])(f,null,{default:Object(a["J"])((function(){return[Object(a["k"])(i,{modelValue:r.flag.disabled,"onUpdate:modelValue":l[1]||(l[1]=function(e){return r.flag.disabled=e}),label:"禁用"},null,8,["modelValue"]),Object(a["k"])(i,{modelValue:r.flag.readonly,"onUpdate:modelValue":l[2]||(l[2]=function(e){return r.flag.readonly=e}),label:"只读"},null,8,["modelValue"])]})),_:1}),Object(a["k"])(g,{disabled:r.flag.disabled,readonly:r.flag.readonly},{default:Object(a["J"])((function(){return[Object(a["k"])(j,{label:"客户名称",field:"name"},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{modelValue:r.formData.name,"onUpdate:modelValue":l[3]||(l[3]=function(e){return r.formData.name=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户员工数量",field:"type"},{suffix:Object(a["J"])((function(){return[Object(a["K"])(Object(a["k"])(k,{icon:"el-icon-question"},null,512),[[F,"整数"]])]})),default:Object(a["J"])((function(){return[Object(a["k"])(O,{modelValue:r.formData.type,"onUpdate:modelValue":l[4]||(l[4]=function(e){return r.formData.type=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户加入时间",field:"joinTime",disabled:!1},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{modelValue:r.formData.joinTime,"onUpdate:modelValue":l[5]||(l[5]=function(e){return r.formData.joinTime=e})},null,8,["modelValue"]),o,Object(a["k"])(m,{modelValue:r.formData.name,"onUpdate:modelValue":l[6]||(l[6]=function(e){return r.formData.name=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"是否老客户",field:"oldFlag",disabled:!1},{default:Object(a["J"])((function(){return[Object(a["k"])(s,{modelValue:r.formData.oldFlag,"onUpdate:modelValue":l[7]||(l[7]=function(e){return r.formData.oldFlag=e}),itemWidth:"50%"},{default:Object(a["J"])((function(){return[Object(a["k"])(p,{label:"老客户",val:"Y",disabled:""}),Object(a["k"])(p,{label:"非老客户",val:"N"})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户性质",field:"properties"},{default:Object(a["J"])((function(){return[Object(a["k"])(V,{modelValue:r.formData.properties,"onUpdate:modelValue":l[8]||(l[8]=function(e){return r.formData.properties=e}),itemWidth:"50%"},{default:Object(a["J"])((function(){return[Object(a["k"])(i,{label:"大客户",val:"large"}),Object(a["k"])(i,{label:"潜在客户",val:"potential"}),Object(a["k"])(i,{label:"长久客户",val:"long"}),Object(a["k"])(i,{label:"赢单客户",val:"order"})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户级别",field:"level"},{default:Object(a["J"])((function(){return[Object(a["k"])(D,{modelValue:r.formData.level,"onUpdate:modelValue":l[9]||(l[9]=function(e){return r.formData.level=e})},{default:Object(a["J"])((function(){return[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(r.levelData,(function(e){return Object(a["w"])(),Object(a["g"])(v,{label:e.levelName,val:e.code,key:e.code},null,8,["label","val"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"备注",field:"comments"},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{textarea:"",modelValue:r.formData.comments,"onUpdate:modelValue":l[10]||(l[10]=function(e){return r.formData.comments=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:" "},{default:Object(a["J"])((function(){return[Object(a["k"])(J,{mode:"stroke",label:"取消"}),Object(a["k"])(J,{label:"保存"})]})),_:1})]})),_:1},8,["disabled","readonly"])]})),_:1}),Object(a["k"])(_,{title:"通过disabledFields控制禁用"},{default:Object(a["J"])((function(){return[Object(a["k"])(V,{modelValue:r.formDisabledFields,"onUpdate:modelValue":l[11]||(l[11]=function(e){return r.formDisabledFields=e})},{default:Object(a["J"])((function(){return[Object(a["k"])(i,{label:"客户名称",val:"name"}),Object(a["k"])(i,{label:"客户员工数量",val:"type"}),Object(a["k"])(i,{label:"客户加入时间",val:"joinTime"}),Object(a["k"])(i,{label:"是否老客户",val:"oldFlag"}),Object(a["k"])(i,{label:"客户性质",val:"properties"}),Object(a["k"])(i,{label:"客户级别",val:"level"}),Object(a["k"])(i,{label:"备注",val:"comments"}),Object(a["k"])(i,{label:"禁用操作按钮",val:"button"})]})),_:1},8,["modelValue"]),Object(a["k"])("div",u,Object(a["D"])(b.targetFormDisabledFields),1),Object(a["k"])(g,{disabledFields:b.targetFormDisabledFields},{default:Object(a["J"])((function(){return[Object(a["k"])(j,{label:"客户名称",field:"name"},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{modelValue:r.formData.name,"onUpdate:modelValue":l[12]||(l[12]=function(e){return r.formData.name=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户员工数量",field:"type"},{suffix:Object(a["J"])((function(){return[Object(a["K"])(Object(a["k"])(k,{icon:"el-icon-question"},null,512),[[F,"整数"]])]})),default:Object(a["J"])((function(){return[Object(a["k"])(O,{modelValue:r.formData.type,"onUpdate:modelValue":l[13]||(l[13]=function(e){return r.formData.type=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户加入时间",field:"joinTime"},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{modelValue:r.formData.joinTime,"onUpdate:modelValue":l[14]||(l[14]=function(e){return r.formData.joinTime=e})},null,8,["modelValue"]),c,Object(a["k"])(m,{modelValue:r.formData.name,"onUpdate:modelValue":l[15]||(l[15]=function(e){return r.formData.name=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"是否老客户",field:"oldFlag"},{default:Object(a["J"])((function(){return[Object(a["k"])(s,{modelValue:r.formData.oldFlag,"onUpdate:modelValue":l[16]||(l[16]=function(e){return r.formData.oldFlag=e}),itemWidth:"50%"},{default:Object(a["J"])((function(){return[Object(a["k"])(p,{label:"老客户",val:"Y"}),Object(a["k"])(p,{label:"非老客户",val:"N"})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户性质",field:"properties"},{default:Object(a["J"])((function(){return[Object(a["k"])(V,{modelValue:r.formData.properties,"onUpdate:modelValue":l[17]||(l[17]=function(e){return r.formData.properties=e}),itemWidth:"50%"},{default:Object(a["J"])((function(){return[Object(a["k"])(i,{label:"大客户",val:"large"}),Object(a["k"])(i,{label:"潜在客户",val:"potential"}),Object(a["k"])(i,{label:"长久客户",val:"long"}),Object(a["k"])(i,{label:"赢单客户",val:"order"})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"客户级别",field:"level"},{default:Object(a["J"])((function(){return[Object(a["k"])(D,{modelValue:r.formData.level,"onUpdate:modelValue":l[18]||(l[18]=function(e){return r.formData.level=e})},{default:Object(a["J"])((function(){return[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(r.levelData,(function(e){return Object(a["w"])(),Object(a["g"])(v,{label:e.levelName,val:e.code,key:e.code},null,8,["label","val"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:"备注",field:"comments"},{default:Object(a["J"])((function(){return[Object(a["k"])(m,{textarea:"",modelValue:r.formData.comments,"onUpdate:modelValue":l[19]||(l[19]=function(e){return r.formData.comments=e})},null,8,["modelValue"])]})),_:1}),Object(a["k"])(j,{label:" ",field:"button"},{default:Object(a["J"])((function(){return[Object(a["k"])(J,{mode:"stroke",label:"取消"}),Object(a["k"])(J,{label:"保存"})]})),_:1})]})),_:1},8,["disabledFields"])]})),_:1})])}t("13d5");var r={name:"form-edit-control",props:{},data:function(){return{formData:{},levelData:[{levelName:"一级",code:"1"},{levelName:"二级",code:"2"},{levelName:"三级",code:"3"}],formDisabledFields:[],flag:{}}},computed:{targetFormDisabledFields:function(){return this.formDisabledFields.reduce((function(e,l){return e[l]=!0,e}),{})}},methods:{}};r.render=d;l["default"]=r}}]);
//# sourceMappingURL=chunk-2d0af509.e90e14da.js.map