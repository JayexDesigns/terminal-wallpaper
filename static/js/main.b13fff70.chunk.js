(this["webpackJsonpterminal-wallpaper"]=this["webpackJsonpterminal-wallpaper"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),r=n(9),o=n.n(r),i=(n(14),n(7)),u=(n(15),n(2));var s=function(e){var t={content:e.content,type:e.type};return"command"===t.type&&(t.content="> ".concat(t.content)),Object(u.jsx)("div",{className:"TerminalElement",children:t.content.split("").map((function(e,n){return" "===e?Object(u.jsx)("span",{className:"Space"},n):Object(u.jsx)("p",{className:function(){switch(t.type){default:return"text-c";case"success":return"success-c";case"info":return"info-c";case"warning":return"warning-c";case"error":return"error-c"}}(),children:e},n)}))})},m=n(0);var l=n(1),x=n.n(l),g=n(3);function f(e){return new Promise((function(t){return setTimeout(t,e)}))}function p(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(g.a)(x.a.mark((function e(t,n,c){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=!0,r=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a&&(n(r?function(n){return[].concat(Object(m.a)(n.slice(0,n.length-1)),[{content:e,type:t}])}:function(n){return[].concat(Object(m.a)(n),[{content:e,type:t}])}),c((function(e){return e||(a=!1,e)})))};case 2:if(!a){e.next=195;break}return r("0% [Working]","warning"),e.next=6,f(500);case 6:return r("Ign:1 http://dl.google.com/linux/chrome/deb stable InRelease","text",!0),r("0% [Connecting to us.archive.ubuntu.com (91.189.91.24)] [Connecting to security.ubuntu]","warning"),e.next=10,f(1e3);case 10:return r("0% [Waiting for headers]","warning",!0),e.next=13,f(200);case 13:return r("Hit:2 http://security.ubuntu.com/ubuntu focal-security InRelease","text",!0),r("Hit:3 http://dl.google.com/linux/chrome/deb stable Release","text"),r("0% [Waiting for headers]","warning"),e.next=18,f(300);case 18:return r("Get:5 http://us.archive.ubuntu.com/ubuntu focal InRelease [255kB]","text",!0),r("0% [5 InRelease 2,280 B/255 kB 1%]","warning"),e.next=22,f(50);case 22:return r("0% [5 InRelease 16.4 kB/255 kB 6%]","warning",!0),e.next=25,f(45);case 25:return r("0% [5 InRelease 40.9 kB/255 kB 16%]","warning",!0),e.next=28,f(55);case 28:return r("0% [5 InRelease 59.0 kB/255 kB 23%]","warning",!0),e.next=31,f(40);case 31:return r("0% [5 InRelease 147 kB/255 kB 57%]","warning",!0),e.next=34,f(60);case 34:return r("0% [5 InRelease 185 kB/255 kB 72%]","warning",!0),e.next=37,f(50);case 37:return r("0% [5 InRelease 201 kB/255 kB 79%]","warning",!0),e.next=40,f(1e3);case 40:return r("Hit:6 http://us.archive.ubuntu.com/ubuntu focal-updates InRelease","text",!0),r("0% [Working]","warning"),e.next=44,f(300);case 44:return r("0% [Waiting for headers]","warning",!0),e.next=47,f(300);case 47:return r("Hit:7 http://us.archive.ubuntu.com/ubuntu focal-backports InRelease","text",!0),r("0% [Working]","warning"),e.next=51,f(200);case 51:return r("19% [Waiting for headers]","warning",!0),e.next=54,f(200);case 54:return r("Get:8 http://us.archive.ubuntu.com/ubuntu focal/main amd64 Packages [977 kB]","text",!0),r("19% [8 Packages 8,192 B/977 kB 1%]","warning"),e.next=58,f(100);case 58:return r("20% [8 Packages 185 kB/977 kB 19%]","warning",!0),e.next=61,f(50);case 61:return r("20% [8 Packages 377 kB/977 kB 39%]","warning",!0),e.next=64,f(50);case 64:return r("20% [8 Packages 425 kB/977 kB 43%]","warning",!0),e.next=67,f(200);case 67:return r("20% [8 Packages 545 kB/977 kB 56%]","warning",!0),e.next=70,f(50);case 70:return r("21% [8 Packages 860 kB/977 kB 88%]","warning",!0),e.next=73,f(300);case 73:return r("Get:9 http://us.archive.ubuntu.com/ubuntu focal/main i386 Packages [724 kB]","text",!0),r("21% [8 Packages stor 0 B] [9 Packages 8,946 B/724 kB 1%]","warning"),e.next=77,f(100);case 77:return r("22% [9 Packages 55.3 kB/724 kB 8%]","warning",!0),e.next=80,f(100);case 80:return r("22% [9 Packages 225 kB/724 kB 31%]","warning",!0),e.next=83,f(100);case 83:return r("22% [9 Packages 388 kB/724 kB 54%]","warning",!0),e.next=86,f(50);case 86:return r("22% [9 Packages 462 kB/724 kB 64%]","warning",!0),e.next=89,f(100);case 89:return r("22% [9 Packages 627 kB/724 kB 87%]","warning",!0),e.next=92,f(50);case 92:return r("Get:10 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 Metadata [516 kB]","text",!0),r("23% [9 Packages store 0 B] [10 Components-amd64 65.5 kB/516 kB 13%]","warning"),e.next=96,f(50);case 96:return r("23% [10 Components-amd64 150 kB/516 kB 29%]","warning",!0),e.next=99,f(200);case 99:return r("23% [10 Components-amd64 325 kB/516 kB 63%]","warning",!0),e.next=102,f(100);case 102:return r("23% [10 Components-amd64 485 kB/516 kB 94%]","warning",!0),e.next=105,f(50);case 105:return r("23% [10 Components-amd64 501 kB/516 kB 97%]","warning",!0),e.next=108,f(150);case 108:return r("Get:11 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 48x48 Icons [93.6 kB]","text",!0),r("Get:12 http://us.archive.ubuntu.com/ubuntu focal/main amd64 DEP-11 64x64 Icons [164 kB]","text"),r("24% [10 Components-amd64 store 0 B] [12 icons 64x64 4,763 B/164 kB 3%]","warning"),e.next=113,f(50);case 113:return r("25% [12 icons 64x64 18.9 kB/164 kB 12%]","warning",!0),e.next=116,f(100);case 116:return r("25% [12 icons 64x64 40.8 kB/164 kB 25%]","warning",!0),e.next=119,f(100);case 119:return r("Get:13 http://us.archive.ubuntu.com/ubuntu focal/universe i386 Packages [4,633 kB]","text",!0),r("25% [12 icons 64x64 40.8 kB/164 kB 25%]","warning"),e.next=123,f(100);case 123:return r("Get:14 http://us.archive.ubuntu.com/ubuntu focal/universe amd64 Packages [8,628 kB]","text",!0),e.next=126,f(500);case 126:return r("Fetched 15,990 kB in 7s (2,284kB/s)","success"),e.next=129,f(50);case 129:return r("Reading package lists... Done","success"),e.next=132,f(50);case 132:return r("Building dependency tree","text"),e.next=135,f(50);case 135:return r("Reading state information... Done","success"),e.next=138,f(200);case 138:return r("Setting up linux-modules-extra-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),r("Setting up linux-modules-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),e.next=142,f(1e3);case 142:return r("Setting up linux-image-generic-hwe-20.04 (5.11.0.40.44~20.04.18) ...","text"),r("Setting up linux-generic-hwe-20.04 (5.11.0.40.44~20.04.18) ...","text"),e.next=146,f(650);case 146:return r("Processing triggers for desktop-file-utils (0.24-1ubuntu3) ...","text"),e.next=149,f(300);case 149:return r("Processing triggers for mime-support (3.64ubuntu1) ...","text"),r("Processing triggers for hicolor-icon-theme (0.17-2) ...","text"),e.next=153,f(400);case 153:return r("Processing triggers for gnome-menus (3.36.0-1ubuntu1) ...","text"),e.next=156,f(500);case 156:return r("Processing triggers for man-db (2.9.1-1) ...","text"),r("Processing triggers for shared-mime-info (1.15-1) ...","text"),r("Processing triggers for linux-image-5.11.0-40-generic (5.11.0-40.44~20.04.2) ...","text"),e.next=161,f(1e3);case 161:return r("/etc/kernel/postinst.d/initramfs-tools:","text"),e.next=164,f(500);case 164:return r("update-initramfs: Generating /boot/initrd.img-5.11.0-40-generic","text"),e.next=167,f(600);case 167:return r("/etc/kernel/postinst.d/zz-update-grub:","text"),e.next=170,f(100);case 170:return r("Sourcing file `/etc/default/grub'","text"),r("Sourcing file `/etc/default/grub.d/init-select.cfg'","text"),r("Generating grub configuration file ...","text"),e.next=175,f(100);case 175:return r("Found linux image: /boot/vmlinuz-5.11.0-40-generic","text"),r("Found initrd image: /boot/initrd.img-5.11.0-40-generic","text"),r("Found linux image: /boot/vmlinuz-5.11.0-38-generic","text"),r("Found initrd image: /boot/initrd.img-5.11.0-38-generic","text"),e.next=181,f(500);case 181:return r("Found linux image: /boot/vmlinuz-5.11.0-37-generic","text"),r("Found initrd image: /boot/initrd.img-5.11.0-37-generic","text"),r("Found memtest86+ image: /boot/memtest86+.elf","text"),r("Found memtest86+ image: /boot/memtest86+.bin","text"),r("Found memtest86+ image: /boot/memtest86+.bin","text"),e.next=188,f(1e3);case 188:return r("E: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/xenial-backprots/main/binary-amd64/Packages 500 Operation not permitted [IP: 91.189.91.23 80]","error"),r("E: Retrying installation","error"),n((function(e){return e.length>=50?Object(m.a)(e.slice(e.length-50,e.length)):Object(m.a)(e)})),e.next=193,f(2e3);case 193:e.next=2;break;case 195:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var h=[{name:"infinite_download.sh",checkScript:function(e){return e.content==="./".concat(this.name)||e.content.startsWith("./".concat(this.name," "))},executeScript:function(e,t,n){return Object(g.a)(x.a.mark((function c(){return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,p(e,t,n);case 2:case"end":return c.stop()}}),c)})))()}},{name:"is_it_wednesday.sh",checkScript:function(e){return e.content==="./".concat(this.name)||e.content.startsWith("./".concat(this.name," "))},executeScript:function(e,t,n){return Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((function(e){return[].concat(Object(m.a)(e),[{content:3===(new Date).getDay()?"yes":"no",type:"text"}])}));case 1:case"end":return e.stop()}}),e)})))()}},{name:"time.sh",checkScript:function(e){return e.content==="./".concat(this.name)||e.content.startsWith("./".concat(this.name," "))},executeScript:function(e,t,n){return Object(g.a)(x.a.mark((function e(){var n,c,a,r,o,i,u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Date,c=n.getDate()<10?"0".concat(n.getDate()):"".concat(n.getDate()),a=n.getMonth()<10?"0".concat(n.getMonth()+1):"".concat(n.getMonth()+1),r="".concat(n.getFullYear()),o=n.getHours()<10?"0".concat(n.getHours()):"".concat(n.getHours()),i=n.getMinutes()<10?"0".concat(n.getMinutes()):"".concat(n.getMinutes()),u=n.getSeconds()<10?"0".concat(n.getSeconds()):"".concat(n.getSeconds()),t((function(e){return[].concat(Object(m.a)(e),[{content:"".concat(c,"/").concat(a,"/").concat(r," ").concat(o,":").concat(i,":").concat(u),type:"text"}])}));case 8:case"end":return e.stop()}}),e)})))()}}],b=[{name:"not found",executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t((function(t){return[].concat(Object(m.a)(t),[{content:"command: '".concat(e.content,"' not found"),type:"error"}])}));case 1:case"end":return n.stop()}}),n)})))()}},{name:"hello world",checkCommand:function(e){return"hello"===e.content||"hi"===e.content||"hello world"===e.content},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((function(e){return[].concat(Object(m.a)(e),[{content:"hello world!",type:"success"}])}));case 1:case"end":return e.stop()}}),e)})))()}},{name:"help",checkCommand:function(e){return"help"===e.content},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((function(e){return[].concat(Object(m.a)(e),[{content:"v: 0.1.8",type:"info"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"this is a simple terminal simulator made with JavaScript and ReactJS, this is still a beta version made by Jayex Designs",type:"info"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:" ",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"available commands:",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'hello world'   ->   outputs 'hello world!'",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'help'   ->   shows list of commands, scripts and other info",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'ls'   ->   shows list of files in the current directory",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'clear'   ->   clears the command history",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'echo'   ->   show a message on the console",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:" ",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"available scripts:",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'infinite_download.sh'   ->   a script that simulates update the system infinitely, great as a wallpaper, you can stop it with ctrl + c",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'is_it_wednesday.sh'   ->   tells you if it is wednesday",type:"text"}])})),t((function(e){return[].concat(Object(m.a)(e),[{content:"'time.sh'   ->   display the actual day and hour",type:"text"}])}));case 14:case"end":return e.stop()}}),e)})))()}},{name:"execute script",checkCommand:function(e){if(e.content.startsWith("./")){for(var t=0;t<h.length;++t)if(h[t].checkScript(e))return!0;return!1}},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function c(){var a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:a=0;case 1:if(!(a<h.length)){c.next=10;break}if(!h[a].checkScript(e)){c.next=6;break}return c.next=5,h[a].executeScript(e,t,n);case 5:return c.abrupt("break",10);case 6:case 7:++a,c.next=1;break;case 10:case"end":return c.stop()}}),c)})))()}},{name:"ls",checkCommand:function(e){return"ls"===e.content||e.content.startsWith("ls ")},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function e(){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=function(e){t((function(t){return[].concat(Object(m.a)(t),[{content:"'".concat(h[e].name,"'"),type:"text"}])}))},c=0;c<h.length;++c)n(c);case 2:case"end":return e.stop()}}),e)})))()}},{name:"clear",checkCommand:function(e){return"clear"===e.content},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t([]);case 1:case"end":return e.stop()}}),e)})))()}},{name:"echo",checkCommand:function(e){return"echo"===e.content||e.content.startsWith("echo ")},executeCommand:function(e,t,n){return Object(g.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"echo"===e.content?t((function(e){return[].concat(Object(m.a)(e),[{content:" ",type:"text"}])})):t((function(t){return[].concat(Object(m.a)(t),[{content:"".concat(e.content.substring(5,e.content.length)),type:"text"}])}));case 1:case"end":return n.stop()}}),n)})))()}}];var k={content:"help",type:"command"};var w=function(){var e=Object(c.useState)([k]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({content:"",type:"command"}),o=Object(i.a)(r,2),l=o[0],x=o[1],g=Object(c.useState)(""!==k.content),f=Object(i.a)(g,2),p=f[0],d=f[1];return Object(c.useEffect)((function(){p&&void 0!==n[n.length-1]&&"command"===n[n.length-1].type&&function(e,t,n,c){if(n){for(var a=1;a<b.length;++a)if(b[a].checkCommand(e))return void b[a].executeCommand(e,t,c).then((function(){c(!1)}));b[0].executeCommand(e,t,c),c(!1)}}(n[n.length-1],a,p,d)}),[n,p]),Object(u.jsx)("div",{id:"MainContainer",className:"background-b",children:Object(u.jsxs)("div",{className:"Terminal",children:[Object(u.jsx)("div",{className:"TerminalSection",onKeyDown:function(e){return function(e,t,n,c,a,r,o){if(e.ctrlKey&&"c"===e.key)o(!1);else switch(e.key){case"Enter":if(!r){var i=t.content;""!==(i=i.trim())&&(a([].concat(Object(m.a)(c),[{content:i,type:"command"}])),o(!0)),n({content:"",type:"command"})}break;case"Backspace":0!==t.length&&n({content:t.content.substr(0,t.content.length-1),type:"command"});break;case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":break;default:1===e.key.length&&n({content:t.content+e.key,type:"command"})}}(e,l,x,n,a,p,d)},tabIndex:"0"}),function(){if(!p)return Object(u.jsxs)("div",{className:"TerminalInput TerminalElement",children:[Object(u.jsx)("p",{className:"primary-c",children:"[root@pc]$"}),Object(u.jsx)("span",{className:"Space"}),l.content.split("").map((function(e,t){return" "===e?Object(u.jsx)("span",{className:"Space"},t):Object(u.jsx)("p",{className:"text-c",children:e},t)})),Object(u.jsx)("p",{className:"TerminalCursor cursor-c",children:"\u2588"})]})}(),Object(u.jsx)("div",{className:"TerminalHistory",children:n.map((function(e,t){return Object(u.jsx)(s,{content:e.content,type:e.type,className:"TerminalElement"},t)}))})]})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b13fff70.chunk.js.map