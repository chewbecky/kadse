(this.webpackJsonpkadse=this.webpackJsonpkadse||[]).push([[0],{40:function(e,t,n){},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),i=n(50),a=n.n(i),c=n(3),l=(n(40),n(64),n(76)),s=Object(l.a)({textStyles:{content:{fontSize:["16px","22px"],textAlign:"right",lineHeight:"110%",color:"orange"}},components:{FormLabel:{baseStyle:{color:"darkOrange"}},Input:{variants:{outline:{field:{borderColor:"darkOrange"}}}},Button:{baseStyle:{_focus:{boxShadow:"none"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{backgroundColor:"lightLavender",_disabled:{bg:"initial"}},_active:{backgroundColor:"lavender"}},variants:{default:{display:"inline",height:"3.5rem",maxWidth:"12rem",backgroundColor:"darkOrange",color:"black",fontSize:"1.75rem",letterSpacing:"-0.05px",textAlign:"right",fontWeight:"400",borderRadius:"full",pt:"6",pr:"6"},box:{display:"block",verticalAlign:"top",minHeight:"12",width:"9.75rem",backgroundColor:"darkOrange",color:"black",fontSize:"1.75rem",letterSpacing:"-0.05px",textAlign:"right",fontWeight:"400",borderRadius:"none",pr:"4"}},sizes:{md:"14"}}},colors:{darkCoral:"#DB5F63",lightGreen:"#D5DABA",lavender:"#D695CF",purple:"#9B96FF",lightOrange:"#FFAA7A",orange:"#FF9400",lightLavender:"#E2E8F0"},fonts:{heading:"LCARSGTJ3",body:"LCARSGTJ3"},colorScheme:{darkCoral:"#DB5F63"},shadows:{outline:"0 0 0 4px #FF9400"},styles:{global:function(){return{html:{overflowX:"hidden",margin:0,fontFamily:"LCARSGTJ3",backgroundColor:"black"},h1:{fontWeight:"normal"}}}}}),d=n(85),b=n(26),h=n.p+"static/media/buttonbeep.e856bb6a.mp3";var g,j=function(e){var t=Object(b.a)(h,{volume:.25}),n=Object(c.a)(t,1)[0];return Object(o.jsx)(d.a,{size:"lg",height:"56px",maxWidth:"192px",borderRadius:"100px",backgroundColor:e.color,color:"black",fontSize:["22px","22px","28px"],letterSpacing:"-0.05px",textAlign:"right",display:"block",lineHeight:"14px",paddingTop:"20px",fontWeight:"400",onClick:e.onclick,onMouseDown:function(){n()},children:e.label})},x=n(78),f=n(81),u=n.p+"static/media/regeneration_cycle_complete.6c7a652c.mp3",p=n(79),O=n(80),m=n(86),v=n(77);!function(e){e[e.top=0]="top",e[e.bottom=1]="bottom",e[e.left=2]="left",e[e.right=3]="right"}(g||(g={}));var w=function(e,t){switch(e){case g.top:return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 32",children:Object(o.jsx)("path",{fill:Object(v.b)(s,t),fillRule:"evenodd",d:"M640,-1.95943488e-14 L624,-1.95943488e-14 C624,4 621,8 616,8 L24,8 C19,8 16,4 16,-1.95943488e-14 L0,-1.95943488e-14 L0,8 C0,21 11,32 24,32 L616,32 C628,32 640,20 640,8 L640,-1.95943488e-14 Z",transform:"matrix(1 0 0 -1 0 32)"})});case g.bottom:return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 32",children:Object(o.jsx)("path",{fill:Object(v.b)(s,t),fillRule:"evenodd",d:"M640,-1.95943488e-14 L624,-1.95943488e-14 C624,4 621,8 616,8 L24,8 C19,8 16,4 16,-1.95943488e-14 L0,-1.95943488e-14 L0,8 C0,21 11,32 24,32 L616,32 C628,32 640,20 640,8 L640,-1.95943488e-14 Z"})});case g.left:return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 640",height:"100%",width:"auto",children:Object(o.jsx)("path",{fill:Object(v.b)(s,t),fillRule:"evenodd",d:"M32,0 L32,16 C28,16 24,19 24,24 L24,616 C24,621 28,624 32,624 L32,640 L24,640 C11,640 0,629 0,616 L0,24 C0,12 12,0 24,0 L32,0 Z"})});case g.right:return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 640",children:Object(o.jsx)("path",{fill:Object(v.b)(s,t),fillRule:"evenodd",d:"M0,0 L0,16 C4,16 8,19 8,24 L8,616 C8,621 4,624 0,624 L0,640 L8,640 C21,640 32,629 32,616 L32,24 C32,12 20,0 8,0 L0,0 Z"})})}},k=function(e){var t=Object(v.b)(s,e.tint);return console.log(t,e.tint),Object(o.jsx)(x.a,{children:w(e.rotate,e.tint)})};k.defaultProps={rotate:0,tint:"orange"};var C=k;var S=function(e){return Object(o.jsxs)(x.a,{children:[Object(o.jsx)(C,{rotate:0,tint:"lightOrange"}),Object(o.jsx)(m.a,{value:e.seconds,height:"12px",colorScheme:"pink",px:"4%",width:"100%",backgroundColor:"transparent",isAnimated:!0}),Object(o.jsx)(C,{rotate:1,tint:"lightOrange"})]})},y=function(e){var t=Object(r.useState)(e.timer),n=Object(c.a)(t,2),i=n[0],a=n[1],l=Object(r.useState)(e.progressStart),s=Object(c.a)(l,2),d=s[0],b=s[1];return Object(r.useEffect)((function(){a(e.timer),b(e.progressStart)}),[e.timer,e.progressStart]),Object(o.jsxs)(p.a,{direction:"column",justifyContent:"flex-end",children:[Object(o.jsxs)(O.a,{fontWeight:"light",fontSize:"128px",color:"orange",textAlign:"right",lineHeight:"128px",children:[Object(o.jsx)(x.a,{display:"inline-block",width:"44px",children:"".concat(i?Math.floor(i/60/10):"0")}),Object(o.jsx)(x.a,{display:"inline-block",width:"44px",children:"".concat(i?Math.floor(i/60)%10:"0")}),":",Object(o.jsx)(x.a,{display:"inline-block",width:"44px",children:"".concat(i?Math.floor(i%60/10):"0")}),Object(o.jsx)(x.a,{display:"inline-block",width:"44px",children:"".concat(i?i%60%10:"0")})]}),Object(o.jsx)(S,{seconds:i&&d?Math.floor(i/d*100):0,width:"300px",alignSelf:"flex-end"}),Object(o.jsx)(O.a,{as:"h3",fontWeight:"400",fontSize:"72px",color:"orange",textAlign:"right",pt:"4",lineHeight:"72px",children:"Efficiency Mode"})]})},A=function(e){var t=Object(r.useState)(e.value),n=Object(c.a)(t,2),i=n[0],a=n[1],l=Object(r.useState)(0),s=Object(c.a)(l,2),d=s[0],h=s[1],g=Object(r.useState)(!0),j=Object(c.a)(g,2),x=j[0],f=j[1],p=Object(r.useState)(!1),O=Object(c.a)(p,2),m=O[0],v=O[1],w=Object(r.useState)(e.value),k=Object(c.a)(w,2),C=k[0],S=k[1],A=Object(b.a)(u,{volume:.25}),L=Object(c.a)(A,1)[0],M=Object(r.useRef)(0);return Object(r.useEffect)((function(){console.log("use effect init"),f(!1),M.current>0&&clearTimeout(M.current),h(0),S(e.value),a(e.value)}),[e.value,e.reset]),Object(r.useEffect)((function(){console.log("use effect toggle"),i>0?(f(!x),h(Math.floor((new Date).getTime()/1e3)+i)):f(!1)}),[e.toggleActive,m]),Object(r.useEffect)((function(){console.log("use effect timer",i,x,d),function(e){document.title="".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"))}(i),x&&d>0&&(M.current=window.setTimeout((function(){a(d-Math.floor((new Date).getTime()/1e3))}),1e3),i<=0&&(a(0),L(),v(!1),clearTimeout(M.current)))}),[i,x]),Object(o.jsx)(y,{timer:i,progressStart:C})};A.defaultProps={};var L=A,M=n(19),W=n.p+"static/media/galaxy-rotating.56c183b8.mp4",z=function(e){return Object(o.jsxs)(f.a,Object(M.a)(Object(M.a)({templateColumns:"1fr 18fr 1fr",padding:"32px",alignItems:"center"},e),{},{children:[Object(o.jsx)(C,{rotate:2,tint:"lightOrange"}),Object(o.jsx)(x.a,{as:"video",autoPlay:!0,muted:!0,loop:!0,children:Object(o.jsx)("source",{src:e.src,type:"video/mp4"})}),Object(o.jsx)(C,{rotate:3,tint:"lightOrange"})]}))};z.defaultProps={src:W};var F=n(54),R=function(e){var t=e.tint?Object(v.b)(s,e.tint):"orange",n=function(e,t,n){var o="";switch(e){case"curve":o="M".concat(t,",-7.10542736e-15 L").concat(t,",24 L200,24 C175.505067,24 156.395619,39.599346 156,64 L156,").concat(n," L0,").concat(n," L0,89.6 C0,40.1152864 40.1152864,-7.10542736e-15 89.6,-7.10542736e-15 L").concat(t,",-7.10542736e-15 Z");break;case"block":o="M0 0 h 156 v ".concat(n," h-156 Z");break;case"default":o="M0 0 h 156 v 112 h-156 Z"}return o}(e.form,e.width,e.height),r="0 0 ".concat(e.width," ").concat(e.height);return Object(o.jsx)(x.a,{transform:e.mirror?"rotateX(180deg)":"none",children:Object(o.jsx)("svg",{width:e.width,viewBox:r,version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsxs)("g",{id:"Navigation/Edge-Down-Copy",children:[Object(o.jsx)("path",{d:n,id:"Path",fill:t}),Object(o.jsx)("text",{fontFamily:"LCARSGTJ3",fontSize:"28",fontStyle:"condensed",fontWeight:"normal",fill:"#000000",textAnchor:"end",transform:e.mirror?"scale(1,-1) translate(0,-".concat(2*e.height-36,")"):"scale(1,1)",children:Object(o.jsx)("tspan",{x:"140",y:e.height-8,children:e.text})})]})})})};R.defaultProps={form:"block",width:156,height:112,tint:"orange",text:"Engange",mirror:!1};var P=R,T=function(e){var t="".concat(window.innerWidth/2.5,"px 24px 8fr 22fr 1fr");return Object(o.jsxs)(F.a,Object(M.a)(Object(M.a)({visibility:["hidden","visible"],templateRows:"120px 136px 112px 150px 48px 1fr",templateAreas:{base:"'fix1' 'fix2' 'fix3' 'fix4' 'fix5' 'fix6'",md:"'fix1 . . . . .' 'fix2 md11 md12 md13 md14 md15' 'fix3 md21 md22 md23 md24 md25' 'fix4 . . . . .' 'fix5 . . . . .' 'fix6 . . . . .'"},templateColumns:{base:"1fr",md:t},position:"absolute",width:"100vw",height:"100vh",overflow:"hidden",gap:"8px",p:"6",bg:"unset"},e),{},{children:[Object(o.jsx)(F.b,{gridArea:"fix1",children:Object(o.jsx)(P,{text:"LCARS",tint:"lavender",height:120,mirror:!0,form:"block"})}),Object(o.jsx)(F.b,{gridArea:"fix2",children:Object(o.jsx)(P,{width:window.innerWidth>=786?window.innerWidth/2.5:window.innerWidth-64,height:136,text:"NCC-74656",tint:"purple",mirror:!0,form:"curve"})}),Object(o.jsx)(F.b,{gridArea:"md11",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"orange",alignSelf:"end"}),Object(o.jsx)(F.b,{gridArea:"md12",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"lavender",alignSelf:"end"}),Object(o.jsx)(F.b,{gridArea:"md13",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"lavender",alignSelf:"end"}),Object(o.jsx)(F.b,{gridArea:"md14",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"lavender",alignSelf:"end"}),Object(o.jsx)(F.b,{gridArea:"fix3",children:Object(o.jsx)(P,{width:window.innerWidth>=786?window.innerWidth/2.5:window.innerWidth-64,text:"Captain",height:112,tint:"darkCoral",form:"curve"})}),Object(o.jsx)(F.b,{gridArea:"md21",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"darkCoral"}),Object(o.jsx)(F.b,{gridArea:"md22",display:{base:"none",md:"block"},width:"100%",height:"12px",backgroundColor:"lightOrange"}),Object(o.jsx)(F.b,{gridArea:"md23",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"lavender"}),Object(o.jsx)(F.b,{gridArea:"md24",display:{base:"none",md:"block"},width:"100%",height:"24px",backgroundColor:"lavender"}),Object(o.jsx)(F.b,{gridArea:"fix4",children:Object(o.jsx)(P,{text:"Janeway",height:150,tint:"darkCoral",form:"block",mirror:!0})}),Object(o.jsx)(F.b,{gridArea:"fix5",children:Object(o.jsx)(P,{text:"Engage",tint:"orange",form:"block",height:48,mirror:!0})}),Object(o.jsx)(F.b,{gridArea:"fix6",width:"156px",height:"100%",backgroundColor:"lightOrange"})]}))},E=function(e){return Object(o.jsxs)(x.a,{children:[Object(o.jsx)(T,{}),Object(o.jsxs)(F.a,{templateAreas:["'title' 'controls' 'contentfix' 'content'","'. title' '. controls' '. .' '. content' '. contentfix'","'. title title title' '. header header controls' '. . . .' '. content content contentfix'"],templateColumns:["1fr","180px 1fr","196px 1fr 1fr 392px"],templateRows:["96px 128px 1fr 1fr","96px 128px 88px  1fr 1fr","96px 128px 88px 1fr"],height:["unset","100vh"],maxHeight:["unset","100vh"],p:"6",justifyItems:"end",alignItems:"end",overflow:"hidden",children:[Object(o.jsx)(F.b,{gridArea:"header",display:["none","none","none","block"],width:"full",children:e.header}),Object(o.jsx)(F.b,{gridArea:"title",children:Object(o.jsx)(O.a,{fontWeight:"400",textAlign:"right",fontSize:["15vw","9vw","96px"],color:"orange",alignSelf:"end",lineHeight:"96px",children:e.title})}),Object(o.jsx)(F.b,{gridArea:"controls",w:"full",textAlign:"right",children:e.controls}),Object(o.jsx)(F.b,{gridArea:"content",w:"full",height:"full",children:e.content}),Object(o.jsx)(F.b,{gridArea:"contentfix",children:e.contentfix})]})]})},B=n(34),D=n(14),H=n(87),I=n(82);function _(){var e=Object(B.a)(["\n  0% { color: ","; }\n  56% { color: ","; }\n  57% { color: ","; }\n  68% { color: ","; }\n  69% { color: ","; }\n  84% { color: ","; }\n  85% { color: ","; }\n  100% { color: ","; }\n"]);return _=function(){return e},e}var J=Object(D.d)(_(),Object(v.b)(s,"orange"),Object(v.b)(s,"orange"),Object(v.b)(s,"lightLavender"),Object(v.b)(s,"lightLavender"),Object(v.b)(s,"orange"),Object(v.b)(s,"orange"),Object(v.b)(s,"black"),Object(v.b)(s,"black")),Z=function(e){var t=Object(r.useState)(10),n=Object(c.a)(t,2),i=n[0],a=n[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),d=s[0],b=s[1],h=Object(r.useCallback)((function(e){var t=0;null!==e&&(t=Math.floor((e.getBoundingClientRect().width-196)/36),b("36px 72px 24px repeat(".concat(t,", 36px) 32px")),a(t))}),[]),g=Object(H.a)(),j=function(e){return console.log("getting called 2"),Math.floor(Math.random()*Math.pow(10,e))};return Object(o.jsx)(F.a,{w:"full",templateColumns:d,ref:h,children:function(e){for(var t=[],n=0,r=0;r<e;r++){var a=g?void 0:"".concat(J," infinite 5s linear ").concat(r,"s alternate");t.push(Object(o.jsx)(F.b,{children:Object(o.jsx)(I.a,{animation:a,textStyle:"content",children:j(4)})},n++)),t.push(Object(o.jsx)(F.b,{children:Object(o.jsx)(I.a,{animation:a,textStyle:"content",children:j(7)})},n++)),t.push(Object(o.jsx)(F.b,{children:Object(o.jsx)(I.a,{animation:a,textStyle:"content",children:j(1)})},n++));for(var c=0;c<i;c++)t.push(Object(o.jsx)(F.b,{children:Object(o.jsx)(I.a,{animation:a,textStyle:"content",children:j(4)})},n++));t.push(Object(o.jsx)(F.b,{children:Object(o.jsx)(I.a,{animation:a,textStyle:"content",children:j(2)})},n++))}return Object(o.jsx)(o.Fragment,{children:t})}(e.numberOfLines)})};Z.defaultProps={numberOfLines:5};var G=Z,N=n(83),X=n.p+"static/media/milky-way.dfcc5602.jpeg",U=function(e){return Object(o.jsx)(x.a,Object(M.a)(Object(M.a)({},e),{},{position:"relative",borderTopWidth:"lg"===e.size?"8px":"2px",borderBottomWidth:"lg"===e.size?"8px":"2px",borderLeftWidth:"lg"===e.size?"16px":"4px",borderRightWidth:"lg"===e.size?"16px":"4px",borderColor:"".concat(Object(v.b)(s,"orange")),borderRadius:"lg"===e.size?"24px":"6px",_before:{position:"absolute",top:"lg"===e.size?"-8px":"-2px",bottom:"lg"===e.size?"-8px":"-2px",left:"lg"===e.size?"12px":"4px",right:"lg"===e.size?"12px":"4px",content:"''",background:"black"}}))};U.defaultProps={size:"lg"};var Y=U;function q(){var e=Object(B.a)(["\n        0% { transform: translate(0,0); opacity: 0%;  }\n        5% {opacity: 100%}\n        95% {opacity: 100%}\n        100%   { transform: translate(","px,","px);  opacity: 0%;}\n        "]);return q=function(){return e},e}var $=function(e){return Object(o.jsx)(x.a,{width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),position:"absolute",top:"50%",left:"50%",backgroundColor:"white",animation:e.animation,opacity:"0",borderRadius:"lg"})},K=function(){var e=Object(r.useState)(7e4),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){setTimeout((function(){i(n-1e-8)}),200)}),[n]),Object(o.jsx)(I.a,{lineHeight:"4px",color:Object(v.b)(s,"lightOrange"),children:n.toFixed(8)})},Q=function(e){var t=Object(H.a)();return Object(o.jsx)(Y,{w:"full",h:"full",padding:"4",children:Object(o.jsxs)(x.a,{width:"100%",height:"100%",maxHeight:"100%",overflow:"hidden",position:"relative",backgroundImage:"url(".concat(X,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",children:[Object(o.jsxs)(N.a,{position:"relative",top:"50%",left:"50%",transform:"translate(-12px, -12px)",alignItems:"start",children:[Object(o.jsx)(Y,{w:"24px",h:"24px",size:"sm"}),Object(o.jsxs)(N.b,{alignItems:"start",children:[Object(o.jsx)(I.a,{textStyle:"content",textAlign:"left",children:"Earth"}),Object(o.jsx)(K,{})]})]}),function(e){for(var n=[],r=0;r<e;r++){var i=r*Math.ceil(200*Math.random())*Math.pow(-1,Math.ceil(10*Math.random())),a=r*Math.ceil(200*Math.random())*Math.pow(-1,Math.ceil(10*Math.random())),c=Math.pow(-1,Math.ceil(10*Math.random()))*Math.ceil(10*Math.random()),l=Math.pow(-1,Math.ceil(10*Math.random()))*Math.ceil(10*Math.random()),s=Math.pow(-1,Math.ceil(10*Math.random()))*Math.ceil(Math.random()*e),d=Object(D.d)(q(),i,a),b=t?void 0:"".concat(d," infinite ").concat(Math.ceil(Math.random()*(e-10))+10,"s ease-in ").concat(s,"s");n.push(Object(o.jsx)($,{size:r%2+2,offsetX:c,offsetY:l,rotation:17*r,animation:b}))}return Object(o.jsx)(o.Fragment,{children:n})}(200)]})})};Q.defaultProps={numberOfLines:5},$.defaultProps={size:2,offsetX:4,offsetY:5,rotation:10,animation:"none"};var V=Q,ee=n.p+"static/media/voyager-warp-core.8adce59a.mp3";var te=function(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!1),l=Object(c.a)(a,2),s=l[0],d=l[1],h=Object(r.useState)(!1),g=Object(c.a)(h,2),u=g[0],p=g[1],O=Object(b.a)(ee,{volume:.1,loop:!0}),m=Object(c.a)(O,1)[0];Object(r.useEffect)((function(){m()}));var v=function(e){n===e?p(!u):i(e)},w=1500,k=300,C=900;return Object(o.jsx)(x.a,{bg:"black",children:Object(o.jsx)(E,{title:"Pomodoro Timer",header:Object(o.jsx)(G,{}),controls:Object(o.jsxs)(f.a,{gridTemplateColumns:["1fr 1fr","1fr 1fr","192px 192px"],gridTemplateRows:"auto",gap:"8px",maxW:"392px",children:[Object(o.jsx)(j,{label:"Pomodoro",color:"darkCoral",onclick:function(){v(w)},children:"Pomodoro"}),Object(o.jsx)(j,{label:"long break",color:"orange",onclick:function(){v(C)}}),Object(o.jsx)(j,{label:"short break",color:"orange",onclick:function(){v(k)}}),Object(o.jsx)(j,{label:"engage/stop",color:"lightGreen",onclick:function(){d(!s)}})]}),content:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(V,{})}),contentfix:Object(o.jsx)(L,{value:n,toggleActive:s,reset:u})})})},ne=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,88)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))},oe=n(84),re=(n.p,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(o.jsx)(oe.a,{theme:s,children:Object(o.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kadse",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/kadse","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ie(t,e)}))}}(),Notification.requestPermission((function(){})),ne()}},[[68,1,2]]]);
//# sourceMappingURL=main.54256e31.chunk.js.map