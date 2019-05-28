(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),u=n.n(l),c=n(2),i=n(11),o=n(1),s=n.n(o),m=n(3),p=n(4),d=n(5),h=n(7),f=n(6),b=n(8),v=n(12),g=(n(20),function(e){var t=e.name,n=e.label,a=e.value,l=Object(v.a)(e,["name","label","value"]);return r.a.createElement("div",{className:"textInput"},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({type:"text",autoComplete:"off",name:t,value:a},l)))}),E=(n(21),function(){var e=Object(m.a)(s.a.mark(function e(t,n,a){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./server/",{method:"POST",body:JSON.stringify({min:t,max:n,count:a})});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()),x=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={inputs:{min:"",max:"",count:""},result:{},loading:!1},n.onSubmit=function(){var e=Object(m.a)(s.a.mark(function e(t){var a,r,l,u,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state.inputs,r=a.min,l=a.max,u=a.count,![r,l,u].includes("")){e.next=5;break}return alert("Please fill in all the fields"),e.abrupt("return");case 5:if(r=parseFloat(r),l=parseFloat(l),u=parseInt(u),!(r>l)){e.next=11;break}return alert("Max must be greater or equal to Min"),e.abrupt("return");case 11:if(u){e.next=14;break}return alert("Count must be greater than 0"),e.abrupt("return");case 14:return n.setState({loading:!0}),e.next=17,E(r,l,u);case 17:c=e.sent,n.setState({result:c,loading:!1});case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.isValid=function(e,t){switch(e){case"min":case"max":return/^[+-]?(\d+)?(\.)?(\d+)?$/.test(t);case"count":return/^[0-9\b]+$/.test(t);default:return!0}},n.onChange=function(e){var t=e.target,a=t.name,r=t.value;(""===r||n.isValid(a,r))&&n.setState({inputs:Object(i.a)({},n.state.inputs,Object(c.a)({},a,r))})},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.inputs,t=e.min,n=e.max,a=e.count,l=this.state.result,u=l.average,c=l.standardDeviation,i=l.mode,o=l.median,s=this.state.loading;return r.a.createElement("div",{className:"appStat"},r.a.createElement("h1",null,"App Statistic"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(g,{label:"Min",name:"min",value:t,onChange:this.onChange,onBlur:this.onChange}),r.a.createElement(g,{label:"Max",name:"max",value:n,onChange:this.onChange,onBlur:this.onChange}),r.a.createElement(g,{label:"Count",name:"count",value:a,onChange:this.onChange,onBlur:this.onChange}),r.a.createElement("button",{className:"submit"},s?"Wait...":"Get Result")),r.a.createElement("table",{className:"result"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:2},"Result"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Average"),r.a.createElement("td",null,u)),r.a.createElement("tr",null,r.a.createElement("td",null,"Standard Deviation"),r.a.createElement("td",null,c)),r.a.createElement("tr",null,r.a.createElement("td",null,"Mode"),r.a.createElement("td",null,i)),r.a.createElement("tr",null,r.a.createElement("td",null,"Median"),r.a.createElement("td",null,o)))))}}]),t}(r.a.Component),O=(n(22),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return new Promise(function(n,a){var r=new Image,l=Date.now(),u=e.includes("?")?"&":"?";r.onload=r.onerror=function(){n(Date.now()-l)},r.src="".concat(e).concat(u,"no-cache-key=").concat(Math.random()),setTimeout(function(){return a("timeout")},t)})}),S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={serverName:"",time:"",loading:!1},n.onSubmit=function(){var e=Object(m.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state.serverName){e.next=4;break}return e.abrupt("return");case 4:n.setState({loading:!0}),O(a).then(function(e){return n.setState({time:"".concat(e," ms"),loading:!1})}).catch(function(e){return n.setState({time:e,loading:!1})});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(c.a)({},a,r.trim()))},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.serverName,n=e.time,a=e.loading;return r.a.createElement("div",{className:"appPing"},r.a.createElement("h1",null,"App Ping"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement(g,{name:"serverName",value:t,onChange:this.onChange,onBlur:this.onChange}),r.a.createElement("button",{className:"submit"},a?"Wait...":"Ping")),r.a.createElement("div",{className:"result"},"Time: ",n))}}]),t}(r.a.Component);u.a.render(r.a.createElement(x,null),document.getElementById("appStat")),u.a.render(r.a.createElement(S,null),document.getElementById("appPing"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f0d3644f.chunk.js.map