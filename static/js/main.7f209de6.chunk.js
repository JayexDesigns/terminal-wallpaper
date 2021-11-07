(this["webpackJsonpterminal-wallpaper"]=this["webpackJsonpterminal-wallpaper"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),r=n(9),o=n.n(r),s=(n(14),n(7)),i=(n(15),n(2));var u=function(t){var e={content:t.content,type:t.type};return"command"===e.type&&(e.content="> ".concat(e.content)),Object(i.jsx)("div",{className:"TerminalElement",children:e.content.split("").map((function(t,n){return" "===t?Object(i.jsx)("span",{className:"Space"},n):Object(i.jsx)("p",{className:function(){switch(e.type){default:return"text-c";case"success":return"success-c";case"info":return"info-c";case"warning":return"warning-c";case"error":return"error-c"}}(),children:t},n)}))})},m=n(0);var p=n(1),f=n.n(p),l=n(3);function h(t){return new Promise((function(e){return setTimeout(e,t)}))}var d=[{name:"infinite_download.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(l.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<10)){t.next=11;break}return e((function(t){return[].concat(Object(m.a)(t),[{content:"downloading python3...",type:"text"}])})),t.next=5,h(3e3);case 5:return e((function(t){return[].concat(Object(m.a)(t),[{content:"download complete",type:"success"}])})),t.next=8,h(500);case 8:++n,t.next=1;break;case 11:case"end":return t.stop()}}),t)})))()}},{name:"is_it_wednesday.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(l.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:3===(new Date).getDay()?"yes":"no",type:"text"}])}));case 1:case"end":return t.stop()}}),t)})))()}},{name:"time.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(l.a)(f.a.mark((function t(){var n,c,a,r,o,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Date,c=n.getDate()<10?"0".concat(n.getDate()):"".concat(n.getDate()),a=n.getMonth()<10?"0".concat(n.getMonth()+1):"".concat(n.getMonth()+1),r="".concat(n.getFullYear()),o=n.getHours()<10?"0".concat(n.getHours()):"".concat(n.getHours()),s=n.getMinutes()<10?"0".concat(n.getMinutes()):"".concat(n.getMinutes()),i=n.getSeconds()<10?"0".concat(n.getSeconds()):"".concat(n.getSeconds()),e((function(t){return[].concat(Object(m.a)(t),[{content:"".concat(c,"/").concat(a,"/").concat(r," ").concat(o,":").concat(s,":").concat(i),type:"text"}])}));case 8:case"end":return t.stop()}}),t)})))()}}],b=[{name:"not found",executeCommand:function(t,e){return Object(l.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((function(e){return[].concat(Object(m.a)(e),[{content:"command: '".concat(t.content,"' not found"),type:"error"}])}));case 1:case"end":return n.stop()}}),n)})))()}},{name:"hello world",checkCommand:function(t){return"hello"===t.content||"hi"===t.content||"hello world"===t.content},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:"hello world!",type:"success"}])}));case 1:case"end":return t.stop()}}),t)})))()}},{name:"help",checkCommand:function(t){return"help"===t.content},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:"v: 0.1.5",type:"info"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"this is a simple terminal simulator made with JavaScript and ReactJS, this is still a beta version made by Jayex Designs",type:"info"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"available commands:",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'hello world'   ->   outputs 'hello world!'",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'help'   ->   shows list of commands, scripts and other info",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'ls'   ->   shows list of files in the current directory",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'clear'   ->   clears the command history",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'echo'   ->   show a message on the console",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"available scripts:",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'infinite_download.sh'   ->   a script that simulates update the system infinitely, great as a wallpaper, you can stop it with ctrl + c",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'is_it_wednesday.sh'   ->   tells you if it is wednesday",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'time.sh'   ->   display the actual day and hour",type:"text"}])}));case 14:case"end":return t.stop()}}),t)})))()}},{name:"execute script",checkCommand:function(t){if(t.content.startsWith("./")){for(var e=0;e<d.length;++e)if(d[e].checkScript(t))return!0;return!1}},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function n(){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=0;case 1:if(!(c<d.length)){n.next=10;break}if(!d[c].checkScript(t)){n.next=6;break}return n.next=5,d[c].executeScript(t,e);case 5:return n.abrupt("break",10);case 6:case 7:++c,n.next=1;break;case 10:case"end":return n.stop()}}),n)})))()}},{name:"ls",checkCommand:function(t){return"ls"===t.content||t.content.startsWith("ls ")},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function t(){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=function(t){e((function(e){return[].concat(Object(m.a)(e),[{content:"'".concat(d[t].name,"'"),type:"text"}])}))},c=0;c<d.length;++c)n(c);case 2:case"end":return t.stop()}}),t)})))()}},{name:"clear",checkCommand:function(t){return"clear"===t.content},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e([]);case 1:case"end":return t.stop()}}),t)})))()}},{name:"echo",checkCommand:function(t){return"echo"===t.content||t.content.startsWith("echo ")},executeCommand:function(t,e){return Object(l.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"echo"===t.content?e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})):e((function(e){return[].concat(Object(m.a)(e),[{content:"".concat(t.content.substring(5,t.content.length)),type:"text"}])}));case 1:case"end":return n.stop()}}),n)})))()}}];var j=function(){var t=Object(c.useState)([{content:"help",type:"command"}]),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)({content:"",type:"command"}),o=Object(s.a)(r,2),p=o[0],f=o[1],l=Object(c.useState)(!0),h=Object(s.a)(l,2),d=h[0],j=h[1];return Object(c.useEffect)((function(){d&&void 0!==n[n.length-1]&&"command"===n[n.length-1].type&&function(t,e,n,c){if(n){for(var a=1;a<b.length;++a)if(b[a].checkCommand(t))return void b[a].executeCommand(t,e).then((function(){c(!1)}));b[0].executeCommand(t,e),c(!1)}}(n[n.length-1],a,d,j)}),[n,d]),Object(i.jsx)("div",{id:"MainContainer",className:"background-b",children:Object(i.jsxs)("div",{className:"Terminal",children:[Object(i.jsx)("div",{className:"TerminalSection",onKeyDown:function(t){return function(t,e,n,c,a,r,o){switch(t.key){case"Enter":if(!r){var s=e.content;""!==(s=s.trim())&&(a([].concat(Object(m.a)(c),[{content:s,type:"command"}])),o(!0)),n({content:"",type:"command"})}break;case"Backspace":0!==e.length&&n({content:e.content.substr(0,e.content.length-1),type:"command"});break;case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":break;default:1===t.key.length&&n({content:e.content+t.key,type:"command"})}}(t,p,f,n,a,d,j)},tabIndex:"0"}),function(){if(!d)return Object(i.jsxs)("div",{className:"TerminalInput TerminalElement",children:[Object(i.jsx)("p",{className:"primary-c",children:"[root@pc]$"}),Object(i.jsx)("span",{className:"Space"}),p.content.split("").map((function(t,e){return" "===t?Object(i.jsx)("span",{className:"Space"},e):Object(i.jsx)("p",{className:"text-c",children:t},e)})),Object(i.jsx)("p",{className:"TerminalCursor cursor-c",children:"\u2588"})]})}(),Object(i.jsx)("div",{className:"TerminalHistory",children:n.map((function(t,e){return Object(i.jsx)(u,{content:t.content,type:t.type,className:"TerminalElement"},e)}))})]})})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7f209de6.chunk.js.map