(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{1:function(e,t){},"2gKu":function(e,t,a){var i={"./basic.json":"M6RT","./date.json":"Oy2R","./demo.json":"Ms4j","./format.json":"qxVl","./function.json":"oDRH","./input.json":"O3HV","./new-feature.json":"m5a3","./select.json":"PzsA","./simplest.json":"dRiI","./test.json":"NxqF"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id="2gKu"},BASV:function(e,t,a){"use strict";a.r(t);a("JAqG");var i=a("DH6M"),r=a.n(i),n=(a("bsRf"),a("rVaU")),o=a.n(n),l=(a("3UVQ"),a("5GXF")),s=a.n(l),m=(a("7pPZ"),a("qPIi")),p=a.n(m),c=(a("1Wva"),a("FAat")),u=a.n(c),d=a("q1tI"),h=a.n(d),g=a("0Owb"),y=a("PpiC"),b=a("k1fw"),f=(a("eosf"),a("j7zX")),v=a.n(f),w=a("f66B"),j=a.n(w),x=a("WFfL"),C=a.n(x),O=a("KwRa"),E=a("tjUo"),N=a("/zZa"),S=a.n(N);function D(e){return h.a.createElement(S.a,{disabled:e.disabled||e.readOnly,onChange:t=>e.onChange(e.name,t),checked:e.value})}var k=a("+ceO");function T(e){var t=e.schema||{},a=t.items,i=void 0===a?{}:a,r=i&&i.enum?i:t,n=r.enum,o=r.enumNames,l=e.value&&Array.isArray(e.value)?e.value:[];return h.a.createElement(S.a.Group,{disabled:e.disabled||e.readOnly,value:l,onChange:t=>e.onChange(e.name,t)},Object(k["f"])(n,[!0,!1]).map(((e,t)=>h.a.createElement(S.a,{value:e,key:t},h.a.createElement("span",{dangerouslySetInnerHTML:{__html:o&&Array.isArray(o)?o[t]:e}})))))}var A=a("1Y7K"),R=a.n(A),V=a("ypy7"),B=a.n(V),J=(a("rNQX"),a("aSns")),P=a.n(J);function W(e){var t=e.schema.format,a="#ffffff",i=t=>{if(!e.disabled&&!e.readOnly){var a=t.color,i=t.alpha;100!==i&&(a=P()(a).alpha(i/100).string()),e.onChange(e.name,a)}},r=t=>{e.onChange(e.name,t)};return h.a.createElement("div",{className:"fr-color-picker"},h.a.createElement(B.a,{type:t,animation:"slide-up",color:e.value||a,onClose:i}),e.readOnly?h.a.createElement("span",null,e.value||a):h.a.createElement(R.a,{style:{width:"100%"},placeholder:a,disabled:e.disabled,value:e.value,onChange:r}))}var L=a("Q6Pe"),X=a.n(L),M=a("sZP3"),q=a.n(M),F=a("wd/R"),I=a.n(F),z=a("bTOI"),H=q.a.MonthPicker,U=q.a.YearPicker,Z=q.a.WeekPicker;function Q(e){var t=e.schema.format,a=void 0===t?"dateTime":t;e.options.format&&(a=e.options.format);var i=Object(k["h"])(a),r=e.options.picker,n=t=>{var a=t?I()(t).format(i):"";e.onChange(e.name,a)},o=q.a;if("time"===a)o=X.a;else switch(r){case"month":o=H;break;case"week":o=Z;break;case"year":o=U;break;default:o=q.a;break}return Object(z["a"])(e,n,o)}var K=a("/1T1"),$=q.a.RangePicker;function G(e){var t=e.schema.format,a=void 0===t?"dateTime":t,i=Object(k["h"])(a),r=t=>{if(Array.isArray(t)){var a=t.map((e=>e?I()(e).format(i):""));e.onChange(e.name,a)}};return Object(K["a"])(e,r,$)}var Y=a("8V+Y"),_=a.n(Y),ee=a("JbmJ"),te=a.n(ee),ae=a("048J"),ie=(e,t)=>"image"!==e?null:h.a.createElement(_.a,{trigger:h.a.createElement(te.a,{type:"picture"}),className:"fr-preview",align:"tl"},Object(ae["a"])(e,t));function re(e){var t=e.options,a=void 0===t?{}:t,i=e.invalid,r=e.schema,n=i?{borderColor:"#ff4d4f",boxShadow:"0 0 0 2px rgba(255,77,79,.2)",width:"100%"}:{width:"100%"},o=a.addonBefore,l=a.addonAfter,s=Object(y["a"])(a,["addonBefore","addonAfter"]),m=r.format,p=void 0===m?"text":m,c=r.maxLength,u=t=>e.onChange(e.name,t),d=Object(b["a"])(Object(b["a"])({},s),{},{maxLength:c,hasLimitHint:!!c});return h.a.createElement(R.a,Object(g["default"])({style:n},d,{value:e.value,disabled:e.disabled||e.readOnly,addonTextBefore:o||"",addonTextAfter:l||ie(p,e.value),onChange:u}))}var ne=a("J+Zn"),oe=a.n(ne),le=a("l4jN"),se=a.n(le),me=a("tJVT"),pe=a("Qs3Q"),ce=a.n(pe),ue=a("wJ74"),de=a.n(ue),he=a("FPll");function ge(e){var t,a=e.icon,i=e.children,r=e.type,n=Object(y["a"])(e,["icon","children","type"]);switch(a){case"delete":t="ashbin";break;default:t=a;break}var o="dashed"===r?n:Object(b["a"])(Object(b["a"])({},n),{},{type:r});return h.a.createElement(de.a,o,t?h.a.createElement(te.a,{type:t}):null,i)}var ye=Object(he["a"])(ge,ce.a),be=e=>{var t=e||{},a=t.options,i=t.schema,r=t.value,n=r&&r.length||0,o=Object(d["useState"])(!1),l=Object(me["default"])(o,2),s=l[0],m=l[1],p=()=>m((e=>!e));if(a&&a.modal){var c=Object(k["p"])(a.modal)?a.modal:{},u=c.text;return h.a.createElement("div",null,h.a.createElement("a",{className:"pointer link",onClick:p},u&&"string"===typeof u?"+ "+u:"+ \u914d\u7f6e"),h.a.createElement("span",{style:{fontSize:14}},"\uff08",n,"\u6761\u6570\u636e\uff09"),h.a.createElement(se.a,Object(g["default"])({className:"fr-wrapper",title:i&&i.title||"\u5b50\u914d\u7f6e",visible:s,onClose:p,footerActions:["ok"],onOk:p,height:"80%"},c,{style:Object(b["a"])({maxWidth:800,width:"80%",overflow:"auto"},c.style)}),h.a.createElement("div",{className:"fr-wrapper"},h.a.createElement(ye,e))))}if(a&&a.drawer){var y=Object(k["p"])(a.drawer)?a.drawer:{},f=y.text;return h.a.createElement("div",null,h.a.createElement("a",{className:"pointer link",onClick:p},f&&"string"===typeof f?"+ "+f:"+ \u914d\u7f6e"),h.a.createElement(oe.a,Object(g["default"])({title:i&&i.title||"\u5b50\u914d\u7f6e",visible:s,onClose:p,width:"80%"},y),h.a.createElement("div",{className:"fr-wrapper"},h.a.createElement(ye,e))))}return h.a.createElement(ye,e)},fe=be,ve=a("M4UT"),we=e=>{var t=e||{},a=t.options,i=void 0===a?{}:a,r=t.schema,n=Object(d["useState"])(!1),o=Object(me["default"])(n,2),l=o[0],s=o[1],m=()=>s((e=>!e));if(i&&i.modal){var p=Object(k["p"])(i.modal)?i.modal:{},c=p.text;return h.a.createElement("div",null,h.a.createElement("a",{className:"pointer link",onClick:m},c&&"string"===typeof c?"+ "+c:"+ \u914d\u7f6e"),h.a.createElement(se.a,Object(g["default"])({title:r&&r.title||"\u5b50\u914d\u7f6e",visible:l,onClose:m,footer:!1},p,{style:Object(b["a"])({maxWidth:800,width:"80%",maxHeight:"80%",overflow:"auto"},p.style)}),h.a.createElement(ve["a"],e)))}if(i&&i.drawer){var u=Object(k["p"])(i.drawer)?i.drawer:{},y=u.text;return h.a.createElement("div",null,h.a.createElement("a",{className:"pointer link",onClick:m},y&&"string"===typeof y?"+ "+y:"+ \u914d\u7f6e"),h.a.createElement(oe.a,Object(g["default"])({title:r&&r.title||"\u5b50\u914d\u7f6e",visible:l,onClose:m,width:"80%"},u),h.a.createElement(ve["a"],e)))}return h.a.createElement(ve["a"],e)},je=we,xe=a("acC9"),Ce=a.n(xe),Oe=a("p3nB"),Ee=Object(Oe["a"])(Ce.a),Ne=a("S/s9"),Se=a.n(Ne),De=a("mvbw"),ke=Object(De["a"])(Se.a),Te=a("XX/b"),Ae=a.n(Te),Re=a("U7zu"),Ve=e=>{var t=e.schema||{},a=(t.enum,t.enumNames,t=>e.onChange(e.name,t));return h.a.createElement(Re["a"],Object(g["default"])({},e,{onChange:a,Radio:Ae.a}))},Be=Ve,Je=a("0oPH"),Pe=Object(Je["a"])(Ce.a),We=a("MMZ8"),Le=a.n(We),Xe=a("RWyr"),Me=Object(Xe["a"])(Le.a,Se.a),qe=a("KyEn"),Fe=a.n(qe);function Ie(e){return h.a.createElement(Fe.a,{disabled:e.disabled||e.readOnly,onChange:t=>e.onChange(e.name,t),checked:!!e.value})}var ze=R.a.TextArea;function He(e){var t=e.options,a=e.invalid,i=e.schema,r=void 0===i?{}:i,n=r.maxLength,o=a?{borderColor:"#ff4d4f",boxShadow:"0 0 0 2px rgba(255,77,79,.2)",width:"100%"}:{width:"100%"},l=t=>e.onChange(e.name,t),s=Object(b["a"])(Object(b["a"])({},t),{},{maxLength:n,hasLimitHint:!!n});return h.a.createElement(ze,Object(g["default"])({style:o},s,{disabled:e.disabled||e.readOnly,value:e.value,onChange:l}))}var Ue=a("MBWn"),Ze=a.n(Ue),Qe=a("rG7N"),Ke=a.n(Qe);function $e(e){var t={name:"file",listType:"text",action:e.action||e.options&&e.options.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(t){var a=t[0];a&&a.response&&"done"===a.response.status?(Ke.a.success("".concat(a.name," \u4e0a\u4f20\u6210\u529f")),e.onChange(e.name,a.response.url)):a&&a.response&&"error"===a.response.status&&Ke.a.error("".concat(a.file.name," \u4e0a\u4f20\u5931\u8d25"))},onRemove(){e.onChange(e.name,"")}};return h.a.createElement("div",{className:"fr-upload-mod"},h.a.createElement(Ze.a,Object(g["default"])({},t,{className:"fr-upload-file"}),h.a.createElement(de.a,null,h.a.createElement(te.a,{type:"upload"})," \u4e0a\u4f20")),e.value&&h.a.createElement("a",{href:e.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5730\u5740\u67e5\u770b"))}var Ge,Ye,_e=a("XkXX"),et=_e["a"],tt={checkbox:D,checkboxes:T,color:W,date:Q,dateRange:G,input:re,list:fe,map:je,multiSelect:Ee,number:ke,radio:Be,select:Pe,slider:Me,switch:Ie,textarea:He,upload:$e,html:et},at={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes"},it=(e,t)=>{var a=e.mapping,i=void 0===a?{}:a,r=e.widgets,n=void 0===r?{}:r,o=Object(y["a"])(e,["mapping","widgets"]);return h.a.createElement(E["a"],Object(g["default"])({mapping:Object(b["a"])(Object(b["a"])({},at),i),widgets:Object(b["a"])(Object(b["a"])({},tt),n)},o,{forwardedRef:t}))},rt=Object(d["forwardRef"])(it),nt=(a("q1nH"),a("dRiI")),ot=a("2HEe"),lt=a.n(ot),st=a("s4NR"),mt=a.n(st),pt=u.a.Option;function ct(e,t){function a(){var a=mt.a.encode({code:"utf-8",q:e});lt()("https://suggest.taobao.com/sug?".concat(a)).then((e=>e.json())).then((a=>{if(Ye===e){var i=a.result,r=[];i.forEach((e=>{r.push({value:e[0],text:e[0]})})),t(r)}}))}Ge&&(clearTimeout(Ge),Ge=null),Ye=e,Ge=setTimeout(a,300)}class ut extends h.a.Component{constructor(){super(...arguments),this.state={data:[]},this.handleSearch=e=>{e?ct(e,(e=>this.setState({data:e}))):this.setState({data:[]})},this.handleChange=e=>{var t=this.props,a=t.onChange,i=t.name;a(i,e)}}render(){var e=this.props,t=e.value,a=e.options,i=this.state.data.map((e=>h.a.createElement(pt,{key:e.value},e.text)));return h.a.createElement(u.a,Object(g["default"])({},a,{style:{width:"100%"},showSearch:!0,value:t||void 0,defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onSearch:this.handleSearch,onChange:this.handleChange,notFoundContent:null}),i)}}var dt=ut,ht=a("8Ppc"),gt=a.n(ht),yt=a("jHpe"),bt=(a("y1X9"),a("QWvX"),a("UCJS"),e=>{var t=e.value,a=e.onChange;return h.a.createElement(gt.a,{value:t,onValueChange:a,highlight:e=>Object(yt["highlight"])(e,yt["languages"].js),padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:16}})}),ft=bt,vt=v.a.TabPane,wt=e=>JSON.stringify(e,null,2)||"";class jt extends h.a.Component{constructor(){super(...arguments),this.state={schemaStr:wt(nt),error:""},this.getSchemaString=()=>{var e=this.props.schemaName,t=a("2gKu")("./".concat(e,".json"));return wt(t)},this.tryParse=e=>{var t={};try{return t=C()(e),"object"!==typeof t?void this.setState({error:"schema\u975e\u6b63\u786ejson"}):(this.setState({error:""}),t)}catch(a){this.setState({error:String(a)})}},this.handleCodeChange=e=>{this.setState({schemaStr:e}),this.tryParse(e)},this.handleDataChange=e=>{var t=this.state.schemaStr,a=this.tryParse(t);a&&"object"===typeof e&&(j()(a.formData,e)||(a=Object(b["a"])(Object(b["a"])({},a),{},{formData:e}),this.setState({schemaStr:wt(a)})))},this.handleValidate=e=>{console.log("\u6ca1\u6709\u901a\u8fc7\u7684\u6821\u9a8c:",e)}}componentDidUpdate(e){var t=this.props.schemaName;if(e.schemaName!==t){var i=a("2gKu")("./".concat(t,".json"));this.setState({schemaStr:wt(i)})}}render(){var e=this.props,t=e.theme,a=Object(y["a"])(e,["theme"]),i=this.state.schemaStr,r="antd"===t?O["default"]:rt,n={};try{n=C()(i)}catch(m){console.log(m)}var o=n,l=o.formData,s=void 0===l?{}:l;return h.a.createElement("div",{className:"flex-auto flex"},h.a.createElement("div",{className:"w-50 h-100 pl2 flex flex-column"},h.a.createElement(v.a,{defaultActiveKey:"1",onChange:()=>{},className:"flex flex-column",style:{overflow:"auto"}},h.a.createElement(vt,{tab:"Schema",key:"1"},h.a.createElement(ft,{value:i,onChange:this.handleCodeChange})),h.a.createElement(vt,{tab:"Data",key:"2"},h.a.createElement(ft,{value:wt(s),readOnly:!0})))),h.a.createElement("div",{className:"w-50 h-100 flex flex-column pa2"},h.a.createElement("div",{className:"h-100 overflow-auto pa3 pt4 flex-auto",style:{borderLeft:"1px solid #ddd"}},this.state.error?h.a.createElement("div",null,this.state.error):h.a.createElement(r,Object(g["default"])({},a,n,{formData:s,onChange:this.handleDataChange,onValidate:this.handleValidate,widgets:{asyncSelect:dt}})))))}}var xt=jt;a("NqJu");window.copyMe=(e,t)=>{var a=e[t];return e.splice(t,0,a),e};var Ct=u.a.Option,Ot=p.a.Group,Et=(s.a.Panel,[{label:"antd\u4e3b\u9898",value:"antd"},{label:"fusion\u4e3b\u9898",value:"fusion"}]);class Nt extends d["Component"]{constructor(){super(...arguments),this.state={schemaName:"simplest",theme:"antd",column:1,displayType:"column",showDescIcon:!1,readOnly:!1,labelWidth:110},this.onThemeChange=e=>{this.setState({theme:e.target.value})},this.onColumnNumberChange=e=>{this.setState({column:e})},this.onDisplayChange=e=>{this.setState({displayType:e,showDescIcon:"row"===e})},this.onShowDescChange=e=>{this.setState({showDescIcon:e})},this.onReadOnlyChange=e=>this.setState({readOnly:e}),this.onSchemaChange=e=>{this.setState({schemaName:e.target.value})},this.onLabelWidthChange=e=>{this.setState({labelWidth:e})}}render(){var e=this.state,t=e.showDescIcon,a=e.readOnly,i=e.labelWidth;return h.a.createElement("div",{className:"fr-playground"},h.a.createElement("div",{className:"w-100 flex setting-container"},h.a.createElement(p.a.Group,{name:"schemaName",defaultValue:"simplest",className:"w-50 flex items-center flex-wrap z-999",onChange:this.onSchemaChange},h.a.createElement(p.a,{value:"simplest"},"\u6700\u7b80\u6837\u4f8b"),h.a.createElement(p.a,{value:"basic"},"\u57fa\u7840\u63a7\u4ef6"),h.a.createElement(p.a,{value:"format"},"\u6821\u9a8c"),h.a.createElement(p.a,{value:"new-feature"},"\u65b0\u529f\u80fd"),h.a.createElement(p.a,{value:"function"},"\u590d\u6742\u8054\u52a8"),h.a.createElement(p.a,{value:"input"},"\u4e2a\u6027\u8f93\u5165\u6846"),h.a.createElement(p.a,{value:"select"},"\u4e2a\u6027\u9009\u62e9\u6846"),h.a.createElement(p.a,{value:"date"},"\u65e5\u671f"),h.a.createElement(p.a,{value:"demo"},"\u5b8c\u6574\u4f8b\u5b50")),h.a.createElement("div",{className:"w-50 flex items-center flex-wrap z-999"},h.a.createElement(Ot,{options:Et,value:this.state.theme,onChange:this.onThemeChange}),h.a.createElement(u.a,{style:{marginRight:8},onChange:this.onColumnNumberChange,defaultValue:"1"},h.a.createElement(Ct,{value:"1"},"\u4e00\u884c\u4e00\u5217"),h.a.createElement(Ct,{value:"2"},"\u4e00\u884c\u4e8c\u5217"),h.a.createElement(Ct,{value:"3"},"\u4e00\u884c\u4e09\u5217")),h.a.createElement(u.a,{style:{marginRight:8},onChange:this.onDisplayChange,defaultValue:"column"},h.a.createElement(Ct,{value:"column"},"\u4e0a\u4e0b\u6392\u5217"),h.a.createElement(Ct,{value:"row"},"\u5de6\u53f3\u6392\u5217")),h.a.createElement(o.a,{style:{marginRight:8},checkedChildren:"\u5173\u63cf\u8ff0",onChange:this.onShowDescChange,unCheckedChildren:"\u5f00\u63cf\u8ff0",checked:t}),h.a.createElement(o.a,{style:{marginRight:8},checkedChildren:"\u7f16\u8f91",onChange:this.onReadOnlyChange,unCheckedChildren:"\u53ea\u8bfb",checked:a}),h.a.createElement("div",{style:{width:42}},"\u6807\u7b7e\uff1a"),h.a.createElement(r.a,{style:{width:80},max:200,min:20,value:i,onChange:this.onLabelWidthChange}))),h.a.createElement(xt,this.state))}}t["default"]=Nt},M6RT:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"AllString":{"title":"string\u7c7b","type":"object","properties":{"input":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string","ui:options":{"placeholder":"\u6635\u79f0"}},"textarea":{"title":"\u7b80\u5355\u6587\u672c\u7f16\u8f91\u6846","type":"string","format":"textarea"},"color":{"title":"\u989c\u8272\u9009\u62e9","type":"string","format":"color"},"date":{"title":"\u65e5\u671f\u9009\u62e9","type":"string","format":"date"},"image":{"title":"\u56fe\u7247\u5c55\u793a","type":"string","format":"image"},"uploader":{"title":"\u4e0a\u4f20\u6587\u4ef6","type":"string","format":"upload","ui:options":{"action":"https://www.mocky.io/v2/5cc8019d300000980a055e76"}}}},"allNumber":{"title":"number\u7c7b","type":"object","properties":{"number1":{"title":"\u6570\u5b57\u8f93\u5165\u6846","description":"1 - 1000","type":"number","min":1,"max":1000},"number2":{"title":"\u5e26\u6ed1\u52a8\u6761","type":"number","ui:widget":"slider"}}},"allBoolean":{"title":"boolean\u7c7b","type":"object","properties":{"radio":{"title":"\u662f\u5426\u901a\u8fc7","type":"boolean"},"switch":{"title":"\u5f00\u5173\u63a7\u5236","type":"boolean","ui:widget":"switch"}}},"allRange":{"title":"range\u7c7b","type":"object","properties":{"dateRange":{"title":"\u65e5\u671f\u8303\u56f4","type":"range","format":"dateTime","ui:options":{"placeholder":["\u5f00\u59cb\u65f6\u95f4","\u7ed3\u675f\u65f6\u95f4"]}}}},"allEnum":{"title":"\u9009\u62e9\u7c7b","type":"object","properties":{"select":{"title":"\u5355\u9009","type":"string","enum":["a","b","c"],"enumNames":["\u65e9","\u4e2d","\u665a"]},"radio":{"title":"\u5355\u9009","type":"string","enum":["a","b","c"],"enumNames":["\u65e9","\u4e2d","\u665a"],"ui:widget":"radio"},"multiSelect":{"title":"\u591a\u9009","description":"\u4e0b\u62c9\u591a\u9009","type":"array","items":{"type":"string"},"enum":["A","B","C","D"],"enumNames":["\u676d\u5dde","\u6b66\u6c49","\u6e56\u5dde","\u8d35\u9633"],"ui:widget":"multiSelect"},"boxes":{"title":"\u591a\u9009","description":"checkbox","type":"array","items":{"type":"string"},"enum":["A","B","C","D"],"enumNames":["\u676d\u5dde","\u6b66\u6c49","\u6e56\u5dde","\u8d35\u9633"]}}},"obj1":{"title":"\u53ef\u6298\u53e0\u5bf9\u8c61","description":"\u8fd9\u662f\u4e2a\u5bf9\u8c61\u7c7b\u578b","type":"object","ui:options":{"collapsed":true},"properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}},"listName2":{"title":"\u5bf9\u8c61\u6570\u7ec4","description":"\u5bf9\u8c61\u6570\u7ec4\u5d4c\u5957\u529f\u80fd","type":"array","minItems":1,"maxItems":3,"ui:displayType":"row","items":{"type":"object","properties":{"input1":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"},"selet1":{"title":"\u5355\u9009","type":"string","enum":["a","b","c"],"enumNames":["\u65e9","\u4e2d","\u665a"]}}}}},"required":[]},"formData":{"AllString":{"image":"http://placekitten.com/200/300"}}}')},Ms4j:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"inputDemo":{"title":"\u957f\u5ea6","type":"string","pattern":"^[A-Za-z0-9]+$","message":{"pattern":"\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f"}},"numberDemo":{"title":"\u6570\u5b57","description":"\u6570\u5b57\u8f93\u5165\u6846","type":"number","min":10,"max":100,"step":10},"textareaDemo":{"title":"\u8f93\u5165\u6846","type":"string"},"imgDemo":{"title":"\u56fe\u7247","type":"string","format":"image","default":"https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png"},"uploadDemo":{"title":"\u6587\u4ef6\u4e0a\u4f20","type":"string","default":"https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png"},"disabledDemo":{"title":"\u4e0d\u53ef\u7528","type":"string","default":"\u6211\u662f\u4e00\u4e2a\u88ab disabled \u7684\u503c"},"enumDemo":{"title":"\u679a\u4e3e","type":"string","enum":["A","B"],"enumNames":["\u517b\u6210","<span style=\'background-color: black;display: inline-block;vertical-align: text-top;width: 48px;height: 24px;margin-top:-2px;color:white; border: 1px solid #ddd;\'>\u8bd5\u8bd5</span>"]},"dateDemo":{"title":"\u65f6\u95f4","format":"dateTime","type":"string"},"objDemo":{"title":"\u5355\u4e2a\u5bf9\u8c61","description":"\u8fd9\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b","type":"object","properties":{"isLike":{"title":"\u662f\u5426\u663e\u793a\u989c\u8272\u9009\u62e9","type":"boolean","default":true},"background":{"title":"\u989c\u8272\u9009\u62e9","description":"\u7279\u6b8a\u9762\u677f","format":"color","type":"string"},"wayToTravel":{"title":"\u65c5\u884c\u65b9\u5f0f","type":"string","enum":["self","group"],"enumNames":["\u81ea\u9a7e","\u8ddf\u56e2"]},"canDrive":{"title":"\u662f\u5426\u62e5\u6709\u9a7e\u7167","type":"boolean","default":false}},"required":["background"]},"multiSelectDemo":{"title":"\u591a\u9009\u7ec4\u4ef6","description":"\u591a\u9009\u529f\u80fd","type":"array","items":{"type":"string"},"enum":["A","B","C","D"],"enumNames":["\u676d\u5dde","\u6b66\u6c49","\u6e56\u5dde","\u8d35\u9633"]},"custom":{"properties":{"payType":{"title":"\u652f\u4ed8\u65b9\u5f0f","description":"","type":"array","items":{"type":"string"},"enum":["1","5","6"],"enumNames":["\u9884\u4ed8","\u9762\u4ed8","\u4fe1\u7528\u4f4f"]}},"type":"object","required":["payType"],"title":"\u9152\u5e97\u884c\u4e1a\u9650\u5236","name":"custom"},"arrDemo":{"title":"\u5bf9\u8c61\u6570\u7ec4","description":"\u5bf9\u8c61\u6570\u7ec4\u5d4c\u5957\u529f\u80fd","type":"array","minItems":1,"maxItems":3,"items":{"type":"object","properties":{"num":{"title":"\u6570\u5b57\u53c2\u6570","description":"number\u7c7b\u578b","type":"number"},"name":{"title":"\u5b57\u7b26\u540d\u79f0","description":"string\u7c7b\u578b","type":"string","pattern":"^[A-Za-z0-9]+$"}}}}},"required":["textareaDemo","dateDemo","multiSelectDemo"]},"uiSchema":{"inputDemo":{"ui:className":"input-with-px","ui:options":{"addonAfter":"px"}},"textareaDemo":{"ui:widget":"textarea","ui:button":{"text":"\u6d4b\u8bd5","icon":"","callback":"clg"}},"disabledDemo":{"ui:disabled":true},"enumDemo":{"ui:width":"50%"},"dateDemo":{"ui:widget":"date","ui:width":"50%"},"uploadDemo":{"ui:widget":"upload","ui:action":"https://www.mocky.io/v2/5cc8019d300000980a055e76"},"objDemo":{"background":{"ui:hidden":"{{rootValue.isLike === false}}","ui:widget":"color"},"wayToTravel":{"ui:widget":"radio"},"canDrive":{"ui:hidden":"{{rootValue.wayToTravel !== \'self\'}}"}},"multiSelectDemo":{"ui:widget":"multiSelect"},"arrDemo":{"ui:options":{"foldable":true,"hideDelete":"{{rootValue.length === 1}}","buttons":[{"text":"\u590d\u5236","icon":"CopyOutlined","callback":"copyLast"}]},"items":{"name":{"ui:disabled":"{{rootValue.num === 3}}"}}}},"formData":{"inputDemo":"750","textareaDemo":"FormRender\\nHello World!","imgDemo":"https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png","enumDemo":"A","dateDemo":"2018-11-22","isLike":true,"objDemo":{"isLike":true,"background":"#ffff00"},"multiSelectDemo":["C","D"],"arrDemo":[{"name":"\u8868\u5355\u6e32\u67d3","num":10},{}]}}')},NqJu:function(e,t,a){},NxqF:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"listName":{"title":"\u5bf9\u8c61\u6570\u7ec4","description":"\u5bf9\u8c61\u6570\u7ec4\u5d4c\u5957\u529f\u80fd","type":"array","items":{"type":"object","properties":{"inputName":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"}}}}},"required":[]},"formData":{}}')},O3HV:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"string":{"title":"\u5b57\u7b26\u4e32","description":"\u5e26\u6e05\u7a7ax\u6309\u94ae","type":"string","default":"hello world","ui:options":{"allowClear":true},"ui:width":"50%"},"string2":{"title":"\u590d\u6742\u6821\u9a8c","description":"pattern\u548cmessage\u7684\u7528\u6cd5","type":"string","pattern":"^[A-Za-z0-9]+$","message":{"pattern":"\u8bf7\u8f93\u5165\u6570\u5b57\u6216\u82f1\u6587\u5b57\u6bcd"},"ui:options":{"placeholder":"\u8bf7\u8f93\u5165\u6570\u5b57\u6216\u82f1\u6587"},"ui:width":"50%"},"string3":{"title":"\u957f\u5ea6\u63a7\u5236","description":"\u957f\u5ea6\u57285-15\u4e2a\u5b57\u4e4b\u95f4","type":"string","minLength":5,"maxLength":15,"ui:width":"50%"},"string4":{"title":"\u524d\u7f6e/\u540e\u7f6e\u6807\u7b7e","type":"string","ui:options":{"addonBefore":"\u957f\u5ea6","addonAfter":"px"},"ui:width":"50%"},"string5":{"title":"\u524d\u540e\u7f00","type":"string","pattern":"^[0-9]+$","message":{"pattern":"\u8bf7\u8f93\u5165\u6570\u5b57"},"ui:options":{"prefix":"\uffe5","suffix":"RMB"},"ui:width":"50%"},"string6":{"title":"\u7f6e\u7070\u7684\u8f93\u5165\u6846","type":"string","ui:disabled":true,"default":"hello world","ui:width":"50%"},"string7":{"title":"\u6587\u672c\u6846","description":"\u56fa\u5b9a\u9ad8\u5ea6","type":"string","format":"textarea","ui:options":{"row":4}},"string8":{"title":"\u6587\u672c\u6846","description":"\u81ea\u52a8\u9ad8\u5ea6","type":"string","format":"textarea","ui:options":{"autoSize":{"minRows":3,"maxRows":5},"placeholder":"\u6839\u636e\u5185\u5bb9\u7f29\u653e"}}},"required":["string4","string5"]},"formData":{}}')},Oy2R:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"date1":{"title":"\u65f6\u95f4\u9009\u62e9","type":"string","format":"time"},"date2":{"title":"\u65e5\u671f\u9009\u62e9","type":"string","format":"date","ui:options":{"format":"YY/MM/DD"}},"date3":{"title":"\u65e5\u671f\u9009\u62e9","description":"\u7cbe\u786e\u5230\u79d2","type":"string","format":"dateTime"},"data4":{"title":"\u65e5\u671f\u8303\u56f4","type":"range","format":"date"}}}}')},PzsA:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"select":{"title":"\u5e26\u641c\u7d22\u7684\u5355\u9009\u6846","type":"string","enum":["a","b","c"],"enumNames":["jack","steve","david"],"ui:options":{"filterOption":true,"showSearch":true,"optionFilterProp":"children"}},"multiSelect":{"title":"\u6807\u7b7e\u6a21\u5f0f","description":"\u9664\u4e86\u53ef\u9009\u7684\u6807\u7b7e\uff0c\u8fd8\u53ef\u8f93\u5165\u81ea\u5b9a\u4e49\u7684\u6807\u7b7e","type":"array","enum":["\u65c5\u884c\u8fbe\u4eba","\u5de5\u4f5c\u72c2","\u8001\u53f8\u673a","\u5c0f\u8d44"],"ui:widget":"select","ui:options":{"mode":"tags"}}},"required":[]}}')},UCJS:function(e,t,a){},dRiI:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"string":{"title":"\u5b57\u7b26\u4e32","type":"string"},"select":{"title":"\u5355\u9009","type":"string","enum":["a","b","c"],"enumNames":["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}}}')},m5a3:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"modal":{"title":"\u5f39\u5c42\u9690\u85cf\u90e8\u5206\u914d\u7f6e","description":"\u76ee\u524d\u652f\u6301modal/drawer","type":"object","properties":{"obj1":{"title":"object + modal","type":"object","ui:options":{"modal":true},"properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}},"list1":{"title":"list + modal","type":"array","ui:options":{"buttons":[{"text":"Excel\u5bfc\u5165","icon":"copy","callback":"someCallback"}],"modal":{"text":"\u914d\u7f6e\u5b8c\u5168\u53c2\u8003antd/fusion\u6587\u6863","mask":false,"width":400}},"items":{"type":"object","properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}}},"list3":{"title":"list\u5957list","type":"array","items":{"type":"object","properties":{"input1":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"},"list4":{"title":"\u6570\u7ec4","type":"array","items":{"type":"object","properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}},"ui:options":{"drawer":true}}}}}}},"html":{"title":"html\u5143\u7d20\u7684\u4f7f\u7528","type":"object","properties":{"html1":{"title":"\u7eaf\u5b57\u7b26\u4e32","type":"html","default":"hello world"},"html2":{"title":"\u4f7f\u7528formData","type":"html","default":"hello world"},"input":{"title":"\u653e\u5728\u5c3e\u90e8","type":"string","ui:width":"70%"},"html3":{"type":"html","default":"<a>\u6ce8\u610f\u4e8b\u9879</a>","ui:width":"30%"}}},"customItemButtons":{"title":"\u6570\u7ec4item\u81ea\u5b9a\u4e49button","type":"array","items":{"type":"object","properties":{"a":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"},"b":{"title":"\u662f\u5426\u5224\u65ad","type":"boolean"},"c":{"title":"\u5f00\u5173","type":"boolean","ui:widget":"switch"}}},"default":[{"a":"happy","b":false,"c":false},{}],"ui:options":{"foldable":true,"itemButtons":[{"text":"\u590d\u5236","icon":"UpCircleOutlined","callback":"copyMe"}]}},"labelDemo":{"title":"\u6807\u7b7e\u957f\u5ea6\u81ea\u5b9a\u4e49","description":"\u5728object\u4e0a\u5b9a\u4e49labelWidth\u4f1a\u5f71\u54cd\u6240\u6709\u5b50\u5143\u7d20","type":"object","ui:labelWidth":200,"properties":{"inputName":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"},"dateName":{"title":"\u65f6\u95f4\u9009\u62e9","type":"string","format":"date"},"colorName":{"title":"\u989c\u8272\u9009\u62e9","type":"string","format":"color","ui:labelWidth":80}}},"objectName":{"title":"\u5bf9\u8c61","description":"\u8fd9\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b","type":"object","properties":{"inputDemo":{"title":"\u524d\u540e\u7f00","type":"string","pattern":"^[A-Za-z0-9]+$","message":{"pattern":"\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f"},"ui:width":"50%","ui:options":{"addonBefore":"\u753b\u5e03\u957f\u5ea6","addonAfter":"px"}},"numberDemo":{"title":"\u6570\u5b57","description":"\u6570\u5b57\u8f93\u5165\u6846","type":"number","min":10,"max":100,"step":10,"ui:width":"50%","ui:widget":"slider"},"dateRange":{"title":"\u65e5\u671f\u8303\u56f4","type":"range","format":"dateTime","ui:options":{"placeholder":["\u5f00\u59cb","\u7ed3\u675f"]}}}},"customizedWidgets":{"title":"\u81ea\u5b9a\u4e49\u7ec4\u4ef6","type":"object","properties":{"asyncSelect":{"title":"\u5f02\u6b65\u52a0\u8f7d\u7684\u4e0b\u62c9\u6846","type":"string","ui:labelWidth":130,"ui:widget":"asyncSelect","ui:options":{"placeholder":"\u641c\u7d22\u6dd8\u5b9d\u5546\u54c1"}}}},"complexArray":{"title":"\u590d\u6742\u7ed3\u6784\u6570\u7ec4","description":"\u6570\u7ec4item\u4e2d\u542b\u6709\u6570\u7ec4\u7b49","type":"array","ui:options":{"foldable":true,"hideIndex":true},"items":{"type":"object","properties":{"age":{"title":"\u586b\u5199\u5e74\u9f84","type":"number","ui:hidden":"{{rootValue.movieType === \'a\' || rootValue.movieType === \'c\'}}"},"movieType":{"title":"\u77ed\u7247\u7c7b\u578b","type":"string","enum":["a","b","c"],"enumNames":["\u6559\u80b2","\u6050\u6016","\u6545\u4e8b"]},"movieList":{"title":"\u7535\u5f71\u5217\u8868","type":"array","items":{"type":"object","properties":{"movieName":{"title":"\u7535\u5f71\u540d","type":"string"}}}},"when":{"title":"\u4f55\u65f6\u89c2\u770b","description":"\u591a\u9009","type":"array","items":{"type":"string"},"enum":["A","B","C","D"],"enumNames":["\u65e9\u4e0a","\u4e2d\u5348","\u4e0b\u5348","\u665a\u4e0a"]}},"required":["age"]}}}},"formData":{"html":{"html2":"hello from <span style=\'color: red\'>formData</span>!"},"complexArray":[{"age":"","movieType":"b","movieList":[]}]}}')},oDRH:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"case1":{"title":"\u6574\u4f53\u9690\u85cf","type":"object","properties":{"showMore":{"title":"\u663e\u793a\u66f4\u591a","type":"boolean"},"x1":{"title":"\u8f93\u5165\u68461","type":"string","ui:hidden":"{{rootValue.showMore === false}}"},"x2":{"title":"\u8f93\u5165\u68462","type":"string","ui:hidden":"{{rootValue.showMore === false}}"}}},"case2":{"title":"\u9009\u9879\u8054\u52a8","type":"object","properties":{"bi":{"title":"\u6c47\u6b3e\u5e01\u79cd","type":"string","enum":["rmb","dollar"],"enumNames":["\u4eba\u6c11\u5e01","\u7f8e\u5143"]},"inputName":{"title":"\u91d1\u989d","description":"{{rootValue.bi === \'dollar\' ? \'\u4e00\u6b21\u6c47\u6b3e\u4e0d\u8d85\u8fc7150\u7f8e\u5143\':\'\u4e00\u6b21\u6c47\u6b3e\u4e0d\u8d85\u8fc71000\u5143\'}}","type":"string","ui:options":{"addonBefore":"{{rootValue.bi === \'rmb\'? \'\uffe5\':\'$\'}}","addonAfter":"{{rootValue.bi === \'rmb\'? \'\u5143\':\'\u7f8e\u5143\'}}"}}}},"case3":{"title":"\u5217\u8868/\u663e\u793a\u4e0d\u540c\u7ec4\u4ef6","type":"object","properties":{"ruleList":{"title":"\u7403\u5458\u7b5b\u9009","type":"array","items":{"type":"object","properties":{"attr":{"title":"\u6807\u51c6","type":"string","enum":["goal","league"],"enumNames":["\u5165\u7403\u6570","\u6240\u5728\u8054\u76df"],"ui:width":"40%"},"relation":{"title":"-","type":"string","enum":[">","<","="],"ui:hidden":"{{rootValue.attr === \'league\'}}","ui:width":"20%"},"goal":{"title":"\u5165\u7403\u6570","type":"string","pattern":"^[0-9]+$","message":{"pattern":"\u8f93\u5165\u6b63\u786e\u5f97\u5206"},"ui:hidden":"{{rootValue.attr !== \'goal\'}}","ui:width":"40%"},"league":{"title":"\u540d\u79f0","type":"string","enum":["a","b","c"],"enumNames":["\u897f\u7532","\u82f1\u8d85","\u4e2d\u8d85"],"ui:hidden":"{{rootValue.attr !== \'league\'}}","ui:width":"40%"}}}}}}}}}')},qxVl:function(e){e.exports=JSON.parse('{"schema":{"ui:labelWidth":130,"type":"object","properties":{"inputName":{"title":"url\u8f93\u5165\u6846","type":"string","format":"url"},"imageName":{"title":"\u56fe\u7247\u5c55\u793a","type":"string","format":"image"},"inputName2":{"title":"email\u8f93\u5165\u6846","type":"string","format":"email"},"string":{"title":"\u6b63\u5219\u6821\u9a8c\u5b57\u7b26\u4e32","type":"string","pattern":"^[A-Za-z0-9]+$","message":{"pattern":"\u683c\u5f0f\u4e0d\u5bf9\u54e6~"}},"string1":{"title":"\u524d\u540e\u6709\u7a7a\u683c\u4e0d\u6821\u9a8c","type":"string","ui:options":{"noTrim":true}},"string2":{"title":"\u6b63\u5e38\u7684\u4f1a\u6821\u9a8c\u7a7a\u683c","type":"string"}}}}')}}]);