(this.webpackJsonpkadse=this.webpackJsonpkadse||[]).push([[0],{37:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(0),r=n(47),a=n.n(r),i=n(7),l=(n(37),n(58),n(73)),s=Object(l.a)({colors:{darkCoral:"#DB5F63",lightGreen:"#D5DABA",lavender:"#D695CF",purple:"#9B96FF",lightOrange:"#FFAA7A",orange:"#FF9400"},fonts:{heading:"LCARSGTJ3",body:"LCARSGTJ3"},colorScheme:{darkCoral:"#DB5F63"},styles:{global:function(){return{html:{overflowX:"hidden",margin:0,fontFamily:"LCARSGTJ3"},h1:{fontWeight:"normal"}}}}}),d=n(80),x=n(29),h=n.p+"static/media/buttonbeep.e856bb6a.mp3";var j=function(e){var t=Object(x.a)(h,{volume:.25}),n=Object(i.a)(t,1)[0];return Object(o.jsx)(d.a,{size:"lg",height:"56px",width:"192px",borderRadius:"100px",backgroundColor:e.color,color:"black",fontSize:"28px",letterSpacing:"-0.05px",textAlign:"right",display:"block",lineHeight:"14px",paddingTop:"20px",fontWeight:"400",onClick:e.onclick,onMouseDown:function(){n()},children:e.label})},b=n(77),g=n(76),p=n(78),u=n(82),f=n(21),O=n(81);var m=function(e){return Object(o.jsx)(g.a,{transform:e.rotate?"rotate(-180deg)":"rotate(0)",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 299 20",children:Object(o.jsx)("path",{fill:"#FFAA7A",fillRule:"evenodd",d:"M19,0 L19,8 L16,8 C13.8578046,8 12.1089211,9.68396847 12.0048953,11.8003597 L12,12 L12,286 C12,288.142195 13.6839685,289.891079 15.8003597,289.995105 L16,290 L19,290 L19,298 L12,298 C5.372583,298 0,292.627417 0,286 L0,12 C0,5.372583 5.372583,0 12,0 L19,0 Z",transform:"rotate(90 149 149.5)"})})})};var w=function(e){return Object(o.jsxs)(g.a,Object(f.a)(Object(f.a)({},e),{},{children:[Object(o.jsx)(m,{}),Object(o.jsx)(O.a,{value:e.seconds,height:"20px",colorScheme:"pink",px:"5%",width:"100%",backgroundColor:"transparent",isAnimated:!0}),Object(o.jsx)(m,{rotate:!0})]}))},v=n(74),k=function(e){var t=e.tint?Object(v.b)(s,e.tint):"orange",n=function(e,t,n){var o="";switch(e){case"curve":o="M".concat(t,",-7.10542736e-15 L").concat(t,",24 L200,24 C175.505067,24 156.395619,39.599346 156,64 L156,").concat(n," L0,").concat(n," L0,89.6 C0,40.1152864 40.1152864,-7.10542736e-15 89.6,-7.10542736e-15 L").concat(t,",-7.10542736e-15 Z");break;case"block":o="M0 0 h 156 v ".concat(n," h-156 Z");break;case"default":o="M0 0 h 156 v 112 h-156 Z"}return o}(e.form,e.width,e.height),c="0 0 ".concat(e.width," ").concat(e.height);return Object(o.jsx)(g.a,Object(f.a)(Object(f.a)({margin:"4px 8px"},e),{},{transform:e.mirror?"rotateX(180deg)":"none",children:Object(o.jsx)("svg",{width:e.width,viewBox:c,version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsxs)("g",{id:"Navigation/Edge-Down-Copy",children:[Object(o.jsx)("path",{d:n,id:"Path",fill:t}),Object(o.jsx)("text",{fontFamily:"LCARSGTJ3",fontSize:"28",fontStyle:"condensed",fontWeight:"normal",fill:"#000000",textAnchor:"end",transform:e.mirror?"scale(1,-1) translate(0,-".concat(2*e.height-36,")"):"scale(1,1)",children:Object(o.jsx)("tspan",{x:"140",y:e.height-8,children:e.text})})]})})}))};k.defaultProps={form:"block",width:156,height:112,tint:"orange",text:"Engange",mirror:!1};var C=k,y=n.p+"static/media/regeneration_cycle_complete.6c7a652c.mp3",L=n.p+"static/media/galaxy.fd387f8c.png";Math.floor(Date.now()/1e3);var A=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),l=Object(i.a)(a,2),s=l[0],d=l[1],h=Object(c.useState)(0),f=Object(i.a)(h,2),O=f[0],m=f[1],v=Object(c.useState)(0),k=Object(i.a)(v,2),A=k[0],S=k[1],F=Object(x.a)(y,{volume:.25}),M=Object(i.a)(F,1)[0];return Object(c.useEffect)((function(){var e=null,t=null;return s?(e=setInterval((function(){t=Math.floor((new Date).getTime()/1e3),r((function(){return O-t}))}),1e3),0===n&&(clearInterval(e),d(!s),M())):s||clearInterval(e),function(){return clearInterval(e)}}),[s,M,n]),Object(o.jsxs)(b.a,{direction:"column",backgroundColor:"black",height:"100vh",p:[1,2,4],children:[Object(o.jsxs)(b.a,{justifyContent:"space-between",width:"100%",children:[Object(o.jsxs)(b.a,{direction:"column",justifyContent:"flex-end",alignItems:"left",children:[Object(o.jsx)(C,{text:"LCARS",tint:"lavender",mirror:!0,form:"block"}),Object(o.jsx)(C,{width:window.screen.availWidth/3,text:"NCC-74656",tint:"purple",mirror:!0,form:"curve"})]}),Object(o.jsx)(b.a,{direction:"column",justifyContent:"flex-end",flex:"1",children:Object(o.jsx)(g.a,{width:"100%",height:"24px",backgroundColor:"lavender",margin:"4px 8px 4px 0px"})}),Object(o.jsxs)(b.a,{direction:"column",justifyContent:"flex-end",flex:"5",marginLeft:"8px",children:[Object(o.jsxs)(g.a,{position:"absolute",top:"20px",right:"16px",children:[Object(o.jsx)(p.a,{as:"h1",fontWeight:"400",textAlign:"right",size:"4xl",color:"orange",children:"pomodoro timer"}),Object(o.jsxs)(u.a,{gridTemplateColumns:"192px 192px",gridTemplateRows:"auto",gridGap:"8px",children:[Object(o.jsx)(j,{label:"pomodoro",color:"darkCoral",onclick:function(){r(1500),S(1500)}}),Object(o.jsx)(j,{label:"long break",color:"orange",onclick:function(){r(900),S(900)}}),Object(o.jsx)(j,{label:"short break",color:"orange",onclick:function(){r(10),S(10)}}),Object(o.jsx)(j,{label:"start/stop",color:"lightGreen",onclick:function(){return d(!s),void m(Math.floor(Date.now()/1e3)+n)}})]})]}),Object(o.jsx)(g.a,{width:"100%",height:"24px",backgroundColor:"lavender",marginY:"4px"})]})]}),Object(o.jsxs)(b.a,{justifyContent:"space-between",width:"100%",flex:"1",backgroundImage:"url(".concat(L,")"),backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",children:[Object(o.jsxs)(b.a,{direction:"column",children:[Object(o.jsx)(C,{width:window.screen.availWidth/3,text:"Captain",tint:"darkCoral",form:"curve"}),Object(o.jsx)(C,{text:"Janeway",tint:"darkCoral",form:"block",mirror:!0}),Object(o.jsx)(C,{text:"Engage",tint:"orange",form:"block",height:150,mirror:!0}),Object(o.jsx)(g.a,{backgroundColor:"lightOrange",flex:"1 1 auto",width:"156px",mx:"8px",my:"4px"})]}),Object(o.jsx)(b.a,{direction:"column",justifyContent:"flex-start",flex:"1",flexBasis:"200px",children:Object(o.jsx)(g.a,{width:"100%",height:"24px",backgroundColor:"lavender",margin:"4px 8px 4px 0px"})}),Object(o.jsxs)(b.a,{marginLeft:"8px",direction:"column",justifyContent:"space-between",flex:"5",children:[Object(o.jsx)(g.a,{height:"24px",backgroundColor:"lavender",marginY:"4px"}),Object(o.jsx)(g.a,{position:"absolute",bottom:"16px",right:"16px",children:Object(o.jsxs)(b.a,{direction:"column",justifyContent:"flex-end",children:[Object(o.jsxs)(p.a,{fontWeight:"400",size:"4xl",color:"orange",textAlign:"right",sx:{"font-variant-numeric":"tabular-nums"},children:[Object(o.jsx)(g.a,{display:"inline-block",width:"24px",children:"".concat(n?Math.floor(n/60/10):"0")}),Object(o.jsx)(g.a,{display:"inline-block",width:"24px",children:"".concat(n?Math.floor(n/60)%10:"0")}),":",Object(o.jsx)(g.a,{display:"inline-block",width:"24px",children:"".concat(n?Math.floor(n%60/10):"0")}),Object(o.jsx)(g.a,{display:"inline-block",width:"24px",children:"".concat(n?n%60%10:"0")})]}),Object(o.jsx)(w,{seconds:n&&A?Math.floor(n/A*100):0,width:"300px",alignSelf:"flex-end"}),Object(o.jsx)(p.a,{as:"h3",fontWeight:"400",size:"2xl",color:"orange",textAlign:"right",py:"16px",children:"Efficiency Mode"})]})})]})]})]})},S=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,83)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))},F=n(79);n.p;a.a.render(Object(o.jsx)(F.a,{theme:s,children:Object(o.jsx)(A,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.a2291117.chunk.js.map