import{h as y,i as C,r as t,o as e,c as h,w as n,d as o,f as p,t as A,b as u,e as r}from"./app.9781c06a.js";const _=p(" Test "),m=y({__name:"index",setup(c){const s=C(!1);return(D,a)=>{const d=t("m-button"),F=t("m-navigation-drawer"),i=t("m-card");return e(),h(i,{style:{position:"relative",overflow:"hidden",height:"500px"}},{default:n(()=>[o(d,{onClick:a[0]||(a[0]=l=>s.value=!s.value)},{default:n(()=>[p(A(s.value?"Close Drawer":"Open Drawer"),1)]),_:1}),o(F,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l),location:"left",title:"Pedido",closeButton:"",padding:"24px 40px"},{default:n(()=>[_]),_:1},8,["modelValue"])]),_:1})}}}),g=r("",4),v=r("",7),b=JSON.parse('{"title":"NavigationDrawer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Slots","slug":"slots"}],"relativePath":"components/navigationdrawer.md","lastUpdated":1660994231000}'),f={name:"components/navigationdrawer.md"},E=Object.assign(f,{setup(c){return(s,D)=>{const a=t("DemoContainer");return e(),u("div",null,[g,o(a,null,{default:n(()=>[o(m)]),_:1}),v])}}});export{b as __pageData,E as default};