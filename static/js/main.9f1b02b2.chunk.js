(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),u=n(5),i=n.n(u),o=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))}),s=n(3),b=n.n(s),l=n(1),j=a.a.memo((function(e){var t=e.name,n=e.disabled,r=e.onClick;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:b.a.button,onClick:r,disabled:n,children:t})})})),m=n(4);!function(e){e.INC_NUMBER="Counter/INC-NUMBER",e.RESET_NUMBER="App/Counter/RESET-NUMBER",e.SET_ERROR_OF_VALUE="SettingBlock/SET-ERROR-OF-VALUE",e.PRESS_SET="SettingBlock/PRESS-SET",e.SET_MAX_VALUE="SettingBlock/SET-MAX-VALUE",e.SET_MIN_VALUE="SettingBlock/SET-MIN-VALUE"}(r||(r={}));var O={number:0,minValue:0,maxValue:0,error:!1,editMode:!1,greeting:!0},d=function(){return{type:r.RESET_NUMBER}},p=function(){return{type:r.SET_ERROR_OF_VALUE}},_=function(e){return{type:r.SET_MAX_VALUE,value:e}},E=function(e){return{type:r.SET_MIN_VALUE,value:e}},v=n(2),x=a.a.memo((function(){var e=Object(v.c)((function(e){return e.counter.number})),t=Object(v.c)((function(e){return e.counter.minValue})),n=Object(v.c)((function(e){return e.counter.maxValue})),r=Object(v.c)((function(e){return e.counter.error})),c=Object(v.c)((function(e){return e.counter.greeting})),a=Object(v.c)((function(e){return e.counter.editMode})),u=c,i=a&&!r,o=r||n<=t,s=!a&&!r,j="".concat(e===n?b.a.maxNumber:b.a.number);return Object(l.jsx)("div",{children:u?Object(l.jsxs)("span",{className:b.a.editMode,children:["HELLO!",Object(l.jsx)("br",{}),"enter values and press 'set'"]}):i?Object(l.jsx)("span",{className:b.a.editMode,children:"enter values and press set"}):o?Object(l.jsx)("span",{className:b.a.error,children:"Incorrect value!"}):s?Object(l.jsx)("span",{className:j,children:e}):""})})),f=a.a.memo((function(){var e=Object(v.c)((function(e){return e.counter.number})),t=Object(v.c)((function(e){return e.counter.maxValue})),n=Object(v.c)((function(e){return e.counter.error})),a=Object(v.c)((function(e){return e.counter.editMode})),u=Object(v.b)(),i=Object(c.useCallback)((function(){u({type:r.INC_NUMBER})}),[u]),o=Object(c.useCallback)((function(){return u(d())}),[u]);return Object(l.jsxs)("div",{className:b.a.container,children:[Object(l.jsx)(x,{}),Object(l.jsxs)("div",{className:b.a.buttons,children:[Object(l.jsx)(j,{name:"inc",disabled:e===t||a||n,onClick:i}),Object(l.jsx)(j,{name:"reset",disabled:!e||n,onClick:o})]})]})})),g=a.a.memo((function(e){var t=e.value,n=e.onChange,r=e.text,c=e.minValue,a=e.maxValue,u=e.greeting,i=t<0||c>=a||0===a;return Object(l.jsxs)("div",{className:b.a.spanAndInput,children:[Object(l.jsx)("span",{className:b.a.span,children:r}),Object(l.jsx)("input",{className:i&&!u?b.a.errorInput:b.a.input,type:"number",value:t,onChange:n})]})})),N=n(9),S=Object(N.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.INC_NUMBER:return Object(m.a)(Object(m.a)({},e),{},{number:e.number+1});case r.RESET_NUMBER:return Object(m.a)(Object(m.a)({},e),{},{number:e.minValue});case r.SET_ERROR_OF_VALUE:return Object(m.a)(Object(m.a)({},e),{},{error:!0});case r.PRESS_SET:return Object(m.a)(Object(m.a)({},e),{},{editMode:!1,number:e.minValue});case r.SET_MAX_VALUE:return Object(m.a)(Object(m.a)({},e),{},{maxValue:t.value,editMode:!0,greeting:!1,error:!1});case r.SET_MIN_VALUE:return Object(m.a)(Object(m.a)({},e),{},{minValue:t.value,editMode:!0,greeting:!1,error:!1});default:return e}}}),A=Object(N.b)(S,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(t){return}}());A.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("app-state",t)}catch(n){}}({counter:A.getState().counter})})),window.store=A;var h=a.a.memo((function(){var e=Object(v.c)((function(e){return e.counter.minValue})),t=Object(v.c)((function(e){return e.counter.maxValue})),n=Object(v.c)((function(e){return e.counter.error})),a=Object(v.c)((function(e){return e.counter.editMode})),u=Object(v.c)((function(e){return e.counter.greeting})),i=Object(v.b)(),o=Object(c.useCallback)((function(e){var t=e.currentTarget.valueAsNumber,n=A.getState().counter.minValue;t<=n||t<=0||n<0?(i(_(e.currentTarget.valueAsNumber)),i(p())):i(_(e.currentTarget.valueAsNumber))}),[i]),s=Object(c.useCallback)((function(e){var t=e.currentTarget.valueAsNumber,n=A.getState().counter.maxValue;n<=t||n<=0||t<0?(i(E(e.currentTarget.valueAsNumber)),i(p())):i(E(e.currentTarget.valueAsNumber))}),[i]),m=Object(c.useCallback)((function(){i({type:r.PRESS_SET})}),[i]);return Object(l.jsxs)("div",{className:b.a.container,children:[Object(l.jsx)("div",{className:b.a.number,children:Object(l.jsxs)("div",{className:b.a.input,children:[Object(l.jsx)(g,{value:t,onChange:o,text:"max value:",minValue:e,maxValue:t,greeting:u}),Object(l.jsx)(g,{value:e,onChange:s,text:"min value:",minValue:e,maxValue:t,greeting:u})]})}),Object(l.jsx)("div",{className:b.a.buttons,children:Object(l.jsx)(j,{name:"set",disabled:n||!a,onClick:m})})]})}));var T=function(){var e=Object(v.b)();return Object(c.useEffect)((function(){e(d())}),[e]),Object(l.jsxs)("div",{className:b.a.app,children:[Object(l.jsx)("div",{children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(f,{})})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{store:A,children:Object(l.jsx)(T,{})})}),document.getElementById("root")),o()},3:function(e,t,n){e.exports={app:"App_app__1ASXm",container:"App_container___eohb",number:"App_number__2EE35",buttons:"App_buttons__2C-Uu",button:"App_button__3jTzw",maxNumber:"App_maxNumber__2miTr",input:"App_input__3DFGW",error:"App_error__1sMoN",errorInput:"App_errorInput__1m5FJ",editMode:"App_editMode__cminM",span:"App_span__3oTY2",spanAndInput:"App_spanAndInput__1OONk"}}},[[20,1,2]]]);
//# sourceMappingURL=main.9f1b02b2.chunk.js.map