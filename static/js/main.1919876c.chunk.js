(this["webpackJsonpterminal-wallpaper"]=this["webpackJsonpterminal-wallpaper"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),r=n(9),o=n.n(r),i=(n(14),n(7)),u=(n(15),n(2));var s=function(t){var e={content:t.content,type:t.type};return"command"===e.type&&(e.content="> ".concat(e.content)),Object(u.jsx)("div",{className:"TerminalElement",children:e.content.split("").map((function(t,n){return" "===t?Object(u.jsx)("span",{className:"Space"},n):Object(u.jsx)("p",{className:function(){switch(e.type){default:return"text-c";case"success":return"success-c";case"info":return"info-c";case"warning":return"warning-c";case"error":return"error-c"}}(),children:t},n)}))})},m=n(0);var l=n(1),x=n.n(l),g=n(3);function p(t){return new Promise((function(e){return setTimeout(e,t)}))}function f(t,e){return d.apply(this,arguments)}function d(){return d=Object(g.a)(x.a.mark((function t(e,n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=function(t,e){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n(c?function(n){return[].concat(Object(m.a)(n.slice(0,n.length-1)),[{content:t,type:e}])}:function(n){return[].concat(Object(m.a)(n),[{content:t,type:e}])})};case 1:return c("0% [Working]","warning"),t.next=5,p(500);case 5:return c("Ign:1 http://dl.google.com/linux/chrome/deb stable InRelease","text",!0),c("0% [Connecting to us.archive.ubuntu.com (91.189.91.24)] [Connecting to security.ubuntu]","warning"),t.next=9,p(1e3);case 9:return c("0% [Waiting for headers]","warning",!0),t.next=12,p(200);case 12:return c("Hit:2 http://security.ubuntu.com/ubuntu focal-security InRelease","text",!0),c("Hit:3 http://dl.google.com/linux/chrome/deb stable Release","text"),c("0% [Waiting for headers]","warning"),t.next=17,p(300);case 17:return c("Get:5 http://us.archive.ubuntu.com/ubuntu focal InRelease [255kB]","text",!0),c("0% [5 InRelease 2,280 B/255 kB 1%]","warning"),t.next=21,p(50);case 21:return c("0% [5 InRelease 16.4 kB/255 kB 6%]","warning",!0),t.next=24,p(45);case 24:return c("0% [5 InRelease 40.9 kB/255 kB 16%]","warning",!0),t.next=27,p(55);case 27:return c("0% [5 InRelease 59.0 kB/255 kB 23%]","warning",!0),t.next=30,p(40);case 30:return c("0% [5 InRelease 147 kB/255 kB 57%]","warning",!0),t.next=33,p(60);case 33:return c("0% [5 InRelease 185 kB/255 kB 72%]","warning",!0),t.next=36,p(50);case 36:return c("0% [5 InRelease 201 kB/255 kB 79%]","warning",!0),t.next=39,p(1e3);case 39:return c("Hit:6 http://us.archive.ubuntu.com/ubuntu focal-updates InRelease","text",!0),c("0% [Working]","warning"),t.next=43,p(300);case 43:return c("0% [Waiting for headers]","warning",!0),t.next=46,p(300);case 46:return c("Hit:7 http://us.archive.ubuntu.com/ubuntu focal-backports InRelease","text",!0),c("0% [Working]","warning"),t.next=50,p(200);case 50:return c("19% [Waiting for headers]","warning",!0),t.next=53,p(200);case 53:return c("Get:8 http://us.archive.ubuntu.com/ubuntu focal/main amd64 Packages [977 kB]","text",!0),c("19% [8 Packages 8,192 B/977 kB 1%]","warning"),t.next=57,p(100);case 57:return c("20% [8 Packages 185 kB/977 kB 19%]","warning",!0),t.next=60,p(50);case 60:return c("20% [8 Packages 377 kB/977 kB 39%]","warning",!0),t.next=63,p(50);case 63:return c("20% [8 Packages 425 kB/977 kB 43%]","warning",!0),t.next=66,p(200);case 66:return c("20% [8 Packages 545 kB/977 kB 56%]","warning",!0),t.next=69,p(50);case 69:return c("21% [8 Packages 860 kB/977 kB 88%]","warning",!0),t.next=72,p(300);case 72:return c("Get:9 http://us.archive.ubuntu.com/ubuntu focal/main i386 Packages [724 kB]","text",!0),c("21% [8 Packages stor 0 B] [9 Packages 8,946 B/724 kB 1%]","warning"),t.next=76,p(100);case 76:return c("22% [9 Packages 55.3 kB/724 kB 8%]","warning",!0),t.next=79,p(100);case 79:return c("22% [9 Packages 225 kB/724 kB 31%]","warning",!0),t.next=82,p(100);case 82:return c("22% [9 Packages 388 kB/724 kB 54%]","warning",!0),t.next=85,p(50);case 85:return c("22% [9 Packages 462 kB/724 kB 64%]","warning",!0),t.next=88,p(100);case 88:return c("22% [9 Packages 627 kB/724 kB 87%]","warning",!0),t.next=91,p(50);case 91:return c("Get:10 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 Metadata [516 kB]","text",!0),c("23% [9 Packages store 0 B] [10 Components-amd64 65.5 kB/516 kB 13%]","warning"),t.next=95,p(50);case 95:return c("23% [10 Components-amd64 150 kB/516 kB 29%]","warning",!0),t.next=98,p(200);case 98:return c("23% [10 Components-amd64 325 kB/516 kB 63%]","warning",!0),t.next=101,p(100);case 101:return c("23% [10 Components-amd64 485 kB/516 kB 94%]","warning",!0),t.next=104,p(50);case 104:return c("23% [10 Components-amd64 501 kB/516 kB 97%]","warning",!0),t.next=107,p(150);case 107:return c("Get:11 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 48x48 Icons [93.6 kB]","text",!0),c("Get:12 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 64x64 Icons [164 kB]","text"),c("24% [10 Components-amd64 store 0 B] [12 icons 64x64 4,763 B/164 kB 3%]","warning"),t.next=112,p(50);case 112:return c("25% [12 icons 64x64 18.9 kB/164 kB 12%]","warning",!0),t.next=115,p(100);case 115:return c("25% [12 icons 64x64 40.8 kB/164 kB 25%]","warning",!0),t.next=118,p(100);case 118:return c("Get:13 http://us.archive.ubuntu.com/ubuntu focal/universe i386 Packages [4,633 kB]","text",!0),c("25% [12 icons 64x64 40.8 kB/164 kB 25%]","warning"),t.next=122,p(100);case 122:return c("Get:14 http://us.archive.ubuntu.com/ubuntu focal/universe amd64 Packages [8,628 kB]","text",!0),t.next=125,p(500);case 125:return c("Fetched 15,990 kB in 7s (2,284kB/s)","success"),t.next=128,p(50);case 128:return c("Reading package lists... Done","success"),t.next=131,p(50);case 131:return c("Building dependency tree","text"),t.next=134,p(50);case 134:return c("Reading state information... Done","success"),t.next=137,p(200);case 137:return c("Setting up linux-modules-extra-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),c("Setting up linux-modules-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),t.next=141,p(1e3);case 141:return c("Setting up linux-image-generic-hwe-20.04 (5.11.0.40.44~20.04.18) ...","text"),c("Setting up linux-generic-hwe-20.04 (5.11.0.40.44~20.04.18) ...","text"),t.next=145,p(650);case 145:return c("Processing triggers for desktop-file-utils (0.24-1ubuntu3) ...","text"),t.next=148,p(300);case 148:return c("Processing triggers for mime-support (3.64ubuntu1) ...","text"),c("Processing triggers for hicolor-icon-theme (0.17-2) ...","text"),t.next=152,p(400);case 152:return c("Processing triggers for gnome-menus (3.36.0-1ubuntu1) ...","text"),t.next=155,p(500);case 155:return c("Processing triggers for man-db (2.9.1-1) ...","text"),c("Processing triggers for shared-mime-info (1.15-1) ...","text"),c("Processing triggers for linux-image-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),t.next=160,p(1e3);case 160:return c("/etc/kernel/postinst.d/initramfs-tools:","text"),t.next=163,p(500);case 163:return c("update-initramfs: Generating /boot/initrd.img-5.11.0-40-generic","text"),t.next=166,p(600);case 166:return c("/etc/kernel/postinst.d/zz-update-grub:","text"),t.next=169,p(100);case 169:return c("Sourcing file `/etc/default/grub'","text"),c("Sourcing file `/etc/default/grub.d/init-select.cfg'","text"),c("Generating grub configuration file ...","text"),t.next=174,p(100);case 174:return c("Found linux image: /boot/vmlinuz-5.11.0-40-generic","text"),c("Found initrd image: /boot/initrd.img-5.11.0-40-generic","text"),c("Found linux image: /boot/vmlinuz-5.11.0-38-generic","text"),c("Found initrd image: /boot/initrd.img-5.11.0-38-generic","text"),t.next=180,p(500);case 180:return c("Found linux image: /boot/vmlinuz-5.11.0-37-generic","text"),c("Found initrd image: /boot/initrd.img-5.11.0-37-generic","text"),c("Found memtest86+ image: /boot/memtest86+.elf","text"),c("Found memtest86+ image: /boot/memtest86+.bin","text"),c("Found memtest86+ image: /boot/memtest86+.bin","text"),t.next=187,p(1e3);case 187:return c("E: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/xenial-backprots/main/binary-amd64/Packages 500 Operation not permitted [IP: 91.189.91.23 80]","error"),c("E: Retrying installation","error"),n((function(t){return t.length>=50?Object(m.a)(t.slice(t.length-50,t.length)):Object(m.a)(t)})),t.next=192,p(2e3);case 192:t.next=1;break;case 194:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}var h=[{name:"infinite_download.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(g.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t,e);case 2:case"end":return n.stop()}}),n)})))()}},{name:"is_it_wednesday.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:3===(new Date).getDay()?"yes":"no",type:"text"}])}));case 1:case"end":return t.stop()}}),t)})))()}},{name:"time.sh",checkScript:function(t){return t.content==="./".concat(this.name)||t.content.startsWith("./".concat(this.name," "))},executeScript:function(t,e){return Object(g.a)(x.a.mark((function t(){var n,c,a,r,o,i,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Date,c=n.getDate()<10?"0".concat(n.getDate()):"".concat(n.getDate()),a=n.getMonth()<10?"0".concat(n.getMonth()+1):"".concat(n.getMonth()+1),r="".concat(n.getFullYear()),o=n.getHours()<10?"0".concat(n.getHours()):"".concat(n.getHours()),i=n.getMinutes()<10?"0".concat(n.getMinutes()):"".concat(n.getMinutes()),u=n.getSeconds()<10?"0".concat(n.getSeconds()):"".concat(n.getSeconds()),e((function(t){return[].concat(Object(m.a)(t),[{content:"".concat(c,"/").concat(a,"/").concat(r," ").concat(o,":").concat(i,":").concat(u),type:"text"}])}));case 8:case"end":return t.stop()}}),t)})))()}}],b=[{name:"not found",executeCommand:function(t,e){return Object(g.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((function(e){return[].concat(Object(m.a)(e),[{content:"command: '".concat(t.content,"' not found"),type:"error"}])}));case 1:case"end":return n.stop()}}),n)})))()}},{name:"hello world",checkCommand:function(t){return"hello"===t.content||"hi"===t.content||"hello world"===t.content},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:"hello world!",type:"success"}])}));case 1:case"end":return t.stop()}}),t)})))()}},{name:"help",checkCommand:function(t){return"help"===t.content},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((function(t){return[].concat(Object(m.a)(t),[{content:"v: 0.1.8",type:"info"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"this is a simple terminal simulator made with JavaScript and ReactJS, this is still a beta version made by Jayex Designs",type:"info"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"available commands:",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'hello world'   ->   outputs 'hello world!'",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'help'   ->   shows list of commands, scripts and other info",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'ls'   ->   shows list of files in the current directory",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'clear'   ->   clears the command history",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'echo'   ->   show a message on the console",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"available scripts:",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'infinite_download.sh'   ->   a script that simulates update the system infinitely, great as a wallpaper, you can stop it with ctrl + c",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'is_it_wednesday.sh'   ->   tells you if it is wednesday",type:"text"}])})),e((function(t){return[].concat(Object(m.a)(t),[{content:"'time.sh'   ->   display the actual day and hour",type:"text"}])}));case 14:case"end":return t.stop()}}),t)})))()}},{name:"execute script",checkCommand:function(t){if(t.content.startsWith("./")){for(var e=0;e<h.length;++e)if(h[e].checkScript(t))return!0;return!1}},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function n(){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=0;case 1:if(!(c<h.length)){n.next=10;break}if(!h[c].checkScript(t)){n.next=6;break}return n.next=5,h[c].executeScript(t,e);case 5:return n.abrupt("break",10);case 6:case 7:++c,n.next=1;break;case 10:case"end":return n.stop()}}),n)})))()}},{name:"ls",checkCommand:function(t){return"ls"===t.content||t.content.startsWith("ls ")},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function t(){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=function(t){e((function(e){return[].concat(Object(m.a)(e),[{content:"'".concat(h[t].name,"'"),type:"text"}])}))},c=0;c<h.length;++c)n(c);case 2:case"end":return t.stop()}}),t)})))()}},{name:"clear",checkCommand:function(t){return"clear"===t.content},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e([]);case 1:case"end":return t.stop()}}),t)})))()}},{name:"echo",checkCommand:function(t){return"echo"===t.content||t.content.startsWith("echo ")},executeCommand:function(t,e){return Object(g.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"echo"===t.content?e((function(t){return[].concat(Object(m.a)(t),[{content:" ",type:"text"}])})):e((function(e){return[].concat(Object(m.a)(e),[{content:"".concat(t.content.substring(5,t.content.length)),type:"text"}])}));case 1:case"end":return n.stop()}}),n)})))()}}];var k={content:"help",type:"command"};var w=function(){var t=Object(c.useState)([k]),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)({content:"",type:"command"}),o=Object(i.a)(r,2),l=o[0],x=o[1],g=Object(c.useState)(""!==k.content),p=Object(i.a)(g,2),f=p[0],d=p[1];return Object(c.useEffect)((function(){f&&void 0!==n[n.length-1]&&"command"===n[n.length-1].type&&function(t,e,n,c){if(n){for(var a=1;a<b.length;++a)if(b[a].checkCommand(t))return void b[a].executeCommand(t,e).then((function(){c(!1)}));b[0].executeCommand(t,e),c(!1)}}(n[n.length-1],a,f,d)}),[n,f]),Object(u.jsx)("div",{id:"MainContainer",className:"background-b",children:Object(u.jsxs)("div",{className:"Terminal",children:[Object(u.jsx)("div",{className:"TerminalSection",onKeyDown:function(t){return function(t,e,n,c,a,r,o){switch(t.key){case"Enter":if(!r){var i=e.content;""!==(i=i.trim())&&(a([].concat(Object(m.a)(c),[{content:i,type:"command"}])),o(!0)),n({content:"",type:"command"})}break;case"Backspace":0!==e.length&&n({content:e.content.substr(0,e.content.length-1),type:"command"});break;case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":break;default:1===t.key.length&&n({content:e.content+t.key,type:"command"})}}(t,l,x,n,a,f,d)},tabIndex:"0"}),function(){if(!f)return Object(u.jsxs)("div",{className:"TerminalInput TerminalElement",children:[Object(u.jsx)("p",{className:"primary-c",children:"[root@pc]$"}),Object(u.jsx)("span",{className:"Space"}),l.content.split("").map((function(t,e){return" "===t?Object(u.jsx)("span",{className:"Space"},e):Object(u.jsx)("p",{className:"text-c",children:t},e)})),Object(u.jsx)("p",{className:"TerminalCursor cursor-c",children:"\u2588"})]})}(),Object(u.jsx)("div",{className:"TerminalHistory",children:n.map((function(t,e){return Object(u.jsx)(s,{content:t.content,type:t.type,className:"TerminalElement"},e)}))})]})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1919876c.chunk.js.map