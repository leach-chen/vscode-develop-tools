(this["webpackJsonpreact-webtools-vscode"]=this["webpackJsonpreact-webtools-vscode"]||[]).push([[0],{193:function(t,e,n){},195:function(t,e,n){},468:function(t,e,n){},469:function(t,e,n){},470:function(t,e,n){},471:function(t,e,n){},581:function(t,e,n){},582:function(t,e,n){},585:function(t,e,n){"use strict";n.r(e);var a=n(8),o=n(2),s=n.n(o),c=n(9),r=n.n(c),i=(n(193),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,586)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),s(t),c(t)}))}),l=(n(194),n(114)),u=n(187),d=n(11),p=n(29),j=n(30),h=n(32),m=n(31),b=(n(195),n(183)),v=(n(10),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(115),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(116),n(117),n(214),n(215),n(85),n(216),n(84),n(217),n(14)),f=n(467);window.jsonlint=f;var O=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).instance=void 0,a.timeObj=void 0,a.state={data:'{ \n      "1":"Json will auto format",\n\n      "2":"You can click switch button close auto format",\n\n      "3":"You can use (Shift+T) format by yourself",\n\n      "4":"You can use (Ctrl+F) search" \n}',shortcutData:'{ \n      "1":"Json will auto format",\n\n      "2":"You can click switch button close auto format",\n\n      "3":"You can use (Shift+T) format by yourself",\n\n      "4":"You can use (Ctrl+F) search" \n}',isAutoFormat:!0},a.instance=null,a}return Object(j.a)(n,[{key:"updateData",value:function(t){try{var e=JSON.parse(t);this.setState({data:JSON.stringify(e,null,6)})}catch(n){}}},{key:"updateDataHandle",value:function(t){try{this.setState({data:t});var e=JSON.parse(t);this.setState({data:JSON.stringify(e,null,6)}),v.Message.success("Format success")}catch(n){try{t=t.replace(new RegExp(",","gm"),",\r\n"),this.setState({data:t}),this.setState({shortcutData:t}),f.parse(t)}catch(n){v.Message.error(n.toString())}}}},{key:"render",value:function(){var t=this,e=this.state.data;return Object(a.jsxs)("div",{className:"JsonPage",children:[Object(a.jsx)(v.Switch,{value:this.state.isAutoFormat,onText:"Auto",offText:"",style:{zIndex:10,position:"absolute",right:50,top:80},onChange:function(e){t.setState({isAutoFormat:e}),e||v.Message.info("use (Shift+T) format")}}),Object(a.jsx)(b.UnControlled,{className:"code-mirror",editorDidMount:function(e){t.instance=e},value:e,options:{mode:"application/json",gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"],theme:"rubyblue",autofocus:!0,styleActiveLine:!0,lineNumbers:!0,smartIndent:!0,lineWrapping:!0,foldGutter:!0,lint:!0,extraKeys:{"Ctrl-S":function(t){},"Ctrl-Z":function(t){t.undo()},F8:function(t){t.redo()},"Shift-T":function(e,n){t.updateDataHandle(t.state.shortcutData)}},matchBrackets:!0,autoCloseBrackets:!0},onChange:function(e,n,a){t.setState({shortcutData:a});try{var o=JSON.parse(a);JSON.stringify(o,null,6)==t.state.data&&t.setState({data:a})}catch(s){}t.state.isAutoFormat&&(t.timeObj&&clearTimeout(t.timeObj),t.timeObj=setTimeout((function(){t.updateData(a)}),1e3))}})]})}}]),n}(s.a.Component);n(468),n(469);var y=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:"https://www.leachchen.com/logo.svg",className:"App-logo",alt:"logo"}),Object(a.jsx)("p",{children:"Developing..."})]})})},x=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(y,{})}}]),n}(s.a.Component),C=(n(470),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={previewObject:{}},a.onSelect=function(t){var e;if(1==t)null===(e=a.props.history)||void 0===e||e.push({pathname:"jsonpage"});else if(2==t){var n;null===(n=a.props.history)||void 0===n||n.push({pathname:"previewpage",state:{previewObject:a.state.previewObject}})}else if(3==t){var o;null===(o=a.props.history)||void 0===o||o.push({pathname:"timepage"})}else if(4==t){var s;null===(s=a.props.history)||void 0===s||s.push({pathname:"codepage"})}console.log(a.props.history)},window.addEventListener("message",(function(t){var e;(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.content)&&a.setState({previewObject:t.data.content})})),a}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(v.Tabs,{activeName:"1",onTabClick:function(e){return t.onSelect(e.props.name)},children:[Object(a.jsx)(v.Tabs.Pane,{label:"Json",name:"1"}),Object(a.jsx)(v.Tabs.Pane,{label:"Preview",name:"2"}),Object(a.jsx)(v.Tabs.Pane,{label:"Time",name:"3"}),Object(a.jsx)(v.Tabs.Pane,{label:"Code",name:"4"})]}),this.props.children]})}}]),n}(s.a.Component)),g=(n(471),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(y,{})}}]),n}(s.a.Component)),S=n(184),w=n.n(S),k=(n(581),n(582),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(t,o){var s;return Object(p.a)(this,n),(s=e.call(this,t)).onSelect=function(t){var e=s.state.previewObject[t];if("html"==e.type){for(var n in s.setState({isHtmlContent:!0,isMDContent:!1}),e)if("type"!=n){var a=e[n];s.setState({htmlContent:a})}}else for(var o in s.setState({isHtmlContent:!1,isMDContent:!0}),e)if("type"!=o){var c=e[o];s.setState({mdContent:c})}},s._renderLeftMenu=function(){var t;return Object(a.jsxs)(v.Layout.Row,{children:[Object(a.jsx)(v.Layout.Col,{span:"3",className:"cl-col1",children:Object(a.jsx)("div",{className:"grid-content bg-purple",children:Object(a.jsx)(v.Menu,{mode:"vertical",defaultActive:"0",className:"el-menu-vertical-demo",onSelect:s.onSelect,children:Object(a.jsx)(v.Menu.ItemGroup,{title:"",children:null===(t=s.state.previewObject)||void 0===t?void 0:t.map((function(t,e){var n="";for(var o in t)if("type"!=o){n=o;break}return Object(a.jsxs)(v.Menu.Item,{index:""+e,children:[Object(a.jsx)("i",{className:"el-icon-message"}),n]},""+e)}))})})})}),!s.state.isEmptyContent&&s.state.isHtmlContent&&s._renderHtml(),!s.state.isEmptyContent&&s.state.isMDContent&&s._renderMD()]})},s._renderHtml=function(){return Object(a.jsx)(v.Layout.Col,{span:"15",children:Object(a.jsx)("div",{className:"htmlContent",children:Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:s.state.htmlContent}})})})},s._renderMD=function(){return Object(a.jsx)(v.Layout.Col,{span:"15",children:Object(a.jsx)("div",{className:"mdContent",children:Object(a.jsx)(w.a,{children:s.state.mdContent,className:"markdown-body"})})})},s.state={isEmptyContent:!1,isHtmlContent:!1,isMDContent:!1,htmlContent:"",mdContent:"",previewObject:void 0},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t,e,n,a=this,o=null===(t=this.props)||void 0===t||null===(e=t.location)||void 0===e||null===(n=e.state)||void 0===n?void 0:n.previewObject;Array.isArray(o)?this.setState({previewObject:o},(function(){a.onSelect(0)})):this.setState({previewObject:[{"\u9875\u9762\u914d\u7f6e":'# html & markdown\u6587\u4ef6\u9884\u89c8\u914d\u7f6e\n\n## \u8bf4\u660e\n\n\u672c\u9875\u9762\u63d0\u4f9b\u672c\u5730html\u3001markdown\u7c7b\u578b\u6587\u4ef6\u7684\u6279\u91cf\u9884\u89c8\u7ba1\u7406\u529f\u80fd\uff0c\n\u5f53\u4f60\u770b\u5230\u672c\u9875\u9762\u65f6\uff0c\u8bf4\u660e\u8fd8\u672a\u8fdb\u884c\u914d\u7f6e\n\n## \u914d\u7f6e\u6b65\u9aa4\n```\n1:\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efadtconfig.json\u6587\u4ef6\n\n2\uff1a\u5728\u91cc\u9762\u914d\u7f6e\u7c7b\u4f3c\u5982\u4e0b\u5185\u5bb9\uff1a\n{\n  "previewPage": [\n    {"\u6d4b\u8bd5\u9875\u97621": "zdevelop/a.html"},\n    {"\u6d4b\u8bd5\u9875\u97622": "zdevelop/b.md"},\n  ]\n}\n\n3:\u6587\u4ef6\u9884\u89c8\u53ea\u652f\u6301".html"\u3001".md"\u540e\u7f00\u7c7b\u578b\u7684\u6587\u4ef6\n\n4\uff1a\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efazdevelop\u6587\u4ef6\u5939\uff0c\u5e76\u4e14\u5728\u8be5\u76ee\u5f55\u4e0b\u521b\u5efaa.html,b.md\u4e24\u4e2a\u6587\u4ef6\u3002\n\uff08\u6587\u4ef6\u5939\u53ca\u6587\u4ef6\u540d\u79f0\u53ef\u4efb\u610f\uff0c\u8981\u4e0e\u6b65\u9aa42\u914d\u7f6e\u4e2d\u7684\u5bf9\u5e94\uff09\n\n\u6309\u7167\u4e0a\u8ff0\u6b65\u9aa4\u914d\u7f6e\uff0c\u5219\u53ef\u5bf9\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u8fdb\u884c\u9884\u89c8\u7ba1\u7406\n\n```\n',type:"md"}],isEmptyContent:!1},(function(){a.onSelect(0)}))}},{key:"_renderEmptyContent",value:function(){return Object(a.jsx)("div",{children:"please config content"})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"PreviewPage",children:[this.state.isEmptyContent&&this._renderEmptyContent(),!this.state.isEmptyContent&&this._renderLeftMenu()]})}}]),n}(s.a.Component)),N=function(){return Object(a.jsx)(u.a,{children:Object(a.jsx)(d.c,{children:Object(a.jsx)(d.a,{path:"/",component:function(t){return Object(a.jsxs)(C,Object(l.a)(Object(l.a)({},t),{},{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(a.jsx)(d.a,{exact:!0,path:"/jsonpage",component:O}),Object(a.jsx)(d.a,{exact:!0,path:"/previewpage",component:k}),Object(a.jsx)(d.a,{path:"/timepage",component:x}),Object(a.jsx)(d.a,{path:"/codepage",component:g})]}))}})})})};r.a.render(Object(a.jsx)(N,{}),document.getElementById("root")),i()}},[[585,1,2]]]);
//# sourceMappingURL=main.4fc74172.chunk.js.map