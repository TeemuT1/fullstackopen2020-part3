(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.message,t=e.messageType;return null===n?null:r.a.createElement("div",{className:t},n)},m=t(3),s=t.n(m),d="/api/persons",f=function(){return s.a.get(d).then((function(e){return e.data}))},h=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.nameFilter,t=e.handleNameFilterChange;return r.a.createElement("input",{value:n,onChange:t})},v=function(e){var n=e.person,t=e.nameFilter,a=e.deletePerson;return-1!==n.name.toLowerCase().indexOf(t.toLowerCase())?r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n.name,"?"))&&a(n.id)}},"delete")):r.a.createElement(r.a.Fragment,null)},g=function(e){var n=e.persons,t=e.nameFilter,a=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(v,{key:e.name,person:e,nameFilter:t,deletePerson:a})})))},O=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),s=m[0],d=m[1],v=Object(a.useState)(""),w=Object(l.a)(v,2),j=w[0],N=w[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),y=S[0],F=S[1],k=Object(a.useState)(null),P=Object(l.a)(k,2),T=P[0],J=P[1],D=Object(a.useState)(null),x=Object(l.a)(D,2),L=x[0],A=x[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{message:T,messageType:L}),"filter shown with",r.a.createElement(E,{nameFilter:y,handleNameFilterChange:function(e){F(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(O,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:j});b(n.id,a).then((function(e){u(t.map((function(t){return t.name!==n.name?t:e}))),d(""),N(""),A("success"),J("Updated the phone number of '".concat(n.name,"'")),setTimeout((function(){J(null)}),5e3)})).catch((function(e){A("error"),J(JSON.stringify(e.response.data)),setTimeout((function(){J(null)}),5e3)}))}}else h({name:s,number:j}).then((function(e){u(t.concat(e)),d(""),N(""),A("success"),J("Added '".concat(e.name,"'")),setTimeout((function(){J(null)}),5e3)})).catch((function(e){A("error"),J(JSON.stringify(e.response.data)),setTimeout((function(){J(null)}),5e3)}))},newName:s,handleNameChange:function(e){d(e.target.value)},newNumber:j,handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,nameFilter:y,deletePerson:function(e){p(e).then((function(){u(t.filter((function(n){return n.id!==e}))),A("success"),J("Deleted successfully"),setTimeout((function(){J(null)}),5e3)}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.23b50c53.chunk.js.map