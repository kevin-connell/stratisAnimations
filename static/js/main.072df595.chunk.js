(this["webpackJsonpanimation-practice"]=this["webpackJsonpanimation-practice"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(5),o=n.n(i),r=n(19),s=n(3),a=n.p+"static/media/iphone-539x1024.4e9c4985.png",d=(n(11),n(0)),l=function(){var e=Object(c.useState)(15),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!0),r=Object(s.a)(o,2),l=r[0],u=r[1],j=Object(c.useState)(!1),h=Object(s.a)(j,2),m=h[0],v=h[1],b=Object(c.useState)(!1),p=Object(s.a)(b,2),O=p[0],g=p[1],x=Object(c.useRef)();Object(c.useEffect)((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(v(!0),setTimeout((function(){g(!0)}),750),i(75),e.unobserve(x.current))}));e.observe(x.current)}),[]);var f=function(e){e>10&&e<260&&i(e)},N=function(e){g(!1),"true"==e.currentTarget.getAttribute("data-pos")?f(30*(Math.round(65+n/30)+.5-65)):f(30*(Math.round(65+n/30)-1.5-65))};return Object(d.jsxs)("div",{className:"tempContainer",children:[Object(d.jsx)("img",{className:"iphone",src:a,alt:"iphone"}),Object(d.jsxs)("div",{className:"thermaContainer",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"270",height:"270",viewBox:"0 0 270 270",children:Object(d.jsx)("path",{style:{fill:"none",stroke:"#68c9fc",strokeWidth:"34px",fillRule:"evenodd"},d:"M51.936,218.812a118,118,0,1,1,166.673-.544"})}),Object(d.jsxs)("div",{className:O?"controlContainer idleBlink":"controlContainer",ref:x,children:[Object(d.jsx)("div",{onClick:N,"data-pos":!1,className:m?"controlBtn":"controlBtn larger",children:Object(d.jsx)("div",{style:{paddingBottom:"5px"},children:"\u2013"})}),Object(d.jsx)("div",{onClick:N,"data-pos":!0,className:m?"controlBtn":"controlBtn larger",children:Object(d.jsx)("div",{style:{paddingBottom:"2px"},children:"+"})})]}),Object(d.jsx)("div",{className:"degreeNumContainer",children:Object(d.jsx)("span",{className:"degreeNum",children:Math.round(65+n/30)})})]}),Object(d.jsx)("div",{className:l?"sliderContainer smoothMove":"sliderContainer",style:{transform:"rotate("+(n+45)+"deg)"},children:Object(d.jsx)("figure",{onTouchStart:function(e){u(!1),g(!1);var t=e.target.parentNode.previousSibling.getBoundingClientRect().left+135,n=e.target.parentNode.previousSibling.getBoundingClientRect().top+135,c=function(e){var c=Math.atan2(e.touches[0].clientX-t,e.touches[0].clientY-n),i=Math.round(c*(180/Math.PI)*-1+100);f(i>145?i-145:i+216)};document.addEventListener("touchmove",c),document.addEventListener("touchend",(function e(t){document.removeEventListener("touchmove",c),document.removeEventListener("touchend",e),u(!0)}))},onMouseDown:function(e){u(!1),g(!1);var t=e.target.parentNode.previousSibling.getBoundingClientRect().left+135,n=e.target.parentNode.previousSibling.getBoundingClientRect().top+135,c=function(e){var c=Math.atan2(e.clientX-t,e.clientY-n),i=Math.round(c*(180/Math.PI)*-1+100);f(i>145?i-145:i+216)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e),u(!0)}))},className:"sliderDot"})})]})};n(13);var u=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{height:"800px"}}),Object(d.jsxs)(r.a,{className:"masterContainer",children:[Object(d.jsx)("div",{className:"graphicContainer",children:Object(d.jsx)(l,{})}),Object(d.jsx)("div",{className:"infoContainer",children:Object(d.jsxs)("div",{className:"textContent",children:[Object(d.jsx)("div",{className:"title",children:"HVAC"}),Object(d.jsx)("div",{className:"description",children:"Residents can control their thermostat remotely from their phone while Property Managers can control the thermostats in vacant units."}),Object(d.jsx)("button",{className:"controlMoreBtn",children:"CONTROL MORE"})]})})]})]})};n(16);o.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.072df595.chunk.js.map