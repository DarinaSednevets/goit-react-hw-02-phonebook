(this["webpackJsonpreact-hw-1"]=this["webpackJsonpreact-hw-1"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=n(12),o=n(3),u=n(4),l=n(6),d=n(5),b=n(9),h=n(0),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("section",{children:["Phonebook",Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",disabled:!this.state.name||!this.state.number,children:"Add"})]})]}),Object(h.jsx)("section",{children:"Contacts"})]})}}]),n}(a.Component),m=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("label",{children:["Find contact by name",Object(h.jsx)("input",{type:"text",value:t,onChange:n})]})},f=function(e){var t=e.contacts,n=e.deleteContact;return Object(h.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsxs)("li",{children:[a,":",r,Object(h.jsx)("button",{type:"button",onClick:function(){n(t)},children:"Delete"})]},t)}))})},O=n(10),p=(n(18),n(11)),v=n.n(p),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:O,filter:""},e.addContact=function(t){var n=t.name,a=t.number;if(e.state.contacts.some((function(e){return e.name===n})))console.log(alert("".concat(n," is already in contacts")));else{var r={id:v.a.generate(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(s.a)(t))}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state.filter.toLowerCase();return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.getFilteredContacts();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(j,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(m,{value:this.state.filter,onChange:this.changeFilter}),Object(h.jsx)(f,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);n(27);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.602426fe.chunk.js.map