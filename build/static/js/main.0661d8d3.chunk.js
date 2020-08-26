(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.message,t=e.messageType;return null===n?null:r.a.createElement("div",{className:t},n)},m=t(3),s=t.n(m),d="http://localhost:3001/api/persons",f=function(){return s.a.get(d).then((function(e){return e.data}))},h=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.nameFilter,t=e.handleNameFilterChange;return r.a.createElement("input",{value:n,onChange:t})},E=function(e){var n=e.person,t=e.nameFilter,a=e.deletePerson;return-1!==n.name.toLowerCase().indexOf(t.toLowerCase())?r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n.name,"?"))&&a(n.id)}},"delete")):r.a.createElement(r.a.Fragment,null)},g=function(e){var n=e.persons,t=e.nameFilter,a=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(E,{key:e.name,person:e,nameFilter:t,deletePerson:a})})))},w=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),s=m[0],d=m[1],E=Object(a.useState)(""),O=Object(l.a)(E,2),j=O[0],C=O[1],N=Object(a.useState)(""),F=Object(l.a)(N,2),k=F[0],y=F[1],S=Object(a.useState)(null),P=Object(l.a)(S,2),T=P[0],D=P[1],x=Object(a.useState)(null),I=Object(l.a)(x,2),J=I[0],L=I[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{message:T,messageType:J}),"filter shown with",r.a.createElement(v,{nameFilter:k,handleNameFilterChange:function(e){console.log(e.target.value),y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(w,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:j});b(n.id,a).then((function(e){u(t.map((function(t){return t.name!==n.name?t:e}))),d(""),C(""),L("success"),D("Updated the phone number of '".concat(n.name,"'")),setTimeout((function(){D(null)}),5e3)})).catch((function(e){L("error"),D("Information of '".concat(n.name,"' has already been removed from the server")),setTimeout((function(){D(null)}),5e3)}))}}else h({name:s,number:j}).then((function(e){u(t.concat(e)),d(""),C(""),L("success"),D("Added '".concat(e.name,"'")),setTimeout((function(){D(null)}),5e3)}))},newName:s,handleNameChange:function(e){console.log(e.target.value),d(e.target.value)},newNumber:j,handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,nameFilter:k,deletePerson:function(e){p(e).then((function(){u(t.filter((function(n){return n.id!==e}))),L("success"),D("Deleted successfully"),setTimeout((function(){D(null)}),5e3)}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0661d8d3.chunk.js.map