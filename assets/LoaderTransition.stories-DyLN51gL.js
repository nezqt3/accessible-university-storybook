import"./useTranslation-DYjPHpZM.js";import{S as e,t}from"./iframe-8nZf5U1I.js";import"./react-dom-Bhq1aSFJ.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-DjM86wM6.js";import"./InlineSpinner-BWaRkYpR.js";import"./InlineSpinner-DGBp7q51.js";import{t as n}from"./Button-CKuRsoid.js";import"./Button-BA_jpygv.js";import"./ModalCloseContext-BrCg84PT.js";import"./use-reduced-motion-C3jQMH2T.js";import{t as r}from"./ModalOverlay-fciGF-o6.js";import"./LoaderTransitionContext-B4qziF8m.js";import{t as i}from"./Card-cNktQ2pm.js";import"./Card-Doq15t3c.js";import{n as a,t as o}from"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import"./Spinner-ClTWeua_.js";import{t as s}from"./Loader-Cd8KKofH.js";import"./Loader-CGp4NDSc.js";import{t as c}from"./LoaderTransition-BT_3l7N4.js";import"./FormField-HI2u-NGi.js";import"./FormField-C3pULiZ3.js";import{t as l}from"./Input-aN1otRzO.js";import"./Input-DXRPRK1S.js";import"./Modal-01-XMwDs.js";var u=e(),d=t();function f({delay:e=900,reducedMotion:t,withDialog:f=!1}){let[p,m]=(0,u.useState)(!0),[h,g]=(0,u.useState)(f);return(0,u.useEffect)(()=>{if(!p)return;let t=setTimeout(()=>m(!1),e);return()=>clearTimeout(t)},[e,p]),(0,d.jsxs)(c,{reducedMotion:t,children:[p?(0,d.jsx)(s,{}):null,(0,d.jsxs)(`div`,{style:{padding:`var(--ui-space-5)`,display:`grid`,gap:`var(--ui-space-4)`},children:[(0,d.jsx)(o,{level:1,children:`Расписание`}),(0,d.jsx)(a,{tone:`accent`,children:`ТРПО25-2`}),(0,d.jsxs)(i,{children:[(0,d.jsx)(a,{tone:`muted`,children:`08:30 – 10:00`}),(0,d.jsx)(o,{level:2,children:`Системы управления базами данных`}),(0,d.jsx)(a,{tone:`accent`,children:`В4/3305`})]}),(0,d.jsx)(n,{variant:`secondary`,onClick:()=>m(!0),children:`Повторить загрузку`})]}),h?(0,d.jsxs)(r,{onClose:()=>g(!1),ariaLabel:`Окно экрана`,children:[(0,d.jsx)(o,{level:2,children:`Окно экрана`}),(0,d.jsx)(l,{"aria-label":`Черновик`,placeholder:`Текст сохраняется при загрузке`}),(0,d.jsx)(n,{onClick:()=>m(!0),children:`Повторить загрузку в диалоге`})]}):null]})}var p={title:`States/LoaderTransition`,component:f,parameters:{layout:`fullscreen`}};const m={},h={args:{delay:80}},g={args:{delay:2400}},_={globals:{theme:`dark`}},v={args:{reducedMotion:!0}},y={args:{withDialog:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 80
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 2400
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    withDialog: true
  }
}`,...y.parameters?.docs?.source}}};const b=[`Default`,`Fast`,`Slow`,`Dark`,`ReducedMotion`,`WithDialog`];export{_ as Dark,m as Default,h as Fast,v as ReducedMotion,g as Slow,y as WithDialog,b as __namedExportsOrder,p as default};