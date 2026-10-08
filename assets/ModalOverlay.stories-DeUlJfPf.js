import"./useTranslation-Bqh59kuu.js";import{S as e,t}from"./iframe-D0TFUEDL.js";import"./react-dom-uuwrmfYG.js";import"./createLucideIcon-cfOq0vGI.js";import"./x-CAFkjvly.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as n}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import"./IconButton-KtMvhiqI.js";import"./IconButton-C3ENirEm.js";import{r}from"./CloseButton-BNnSMS-F.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-B27OI5yE.js";import{t as i}from"./ModalOverlay-DGegsSC0.js";import"./use-reduced-motion-DVIztM76.js";import{n as a}from"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";import"./FormField-ByS3qXD3.js";import"./FormField-DI1mxX-F.js";import{t as o}from"./Input-CpVLESgI.js";import"./Input-BJFMwxMd.js";import{t as s}from"./ModalHeader-B1C_todG.js";import"./ModalHeader-CFa6Ec7J.js";var c=e(),l=t();function u(){let e=r();return(0,l.jsx)(n,{variant:`secondary`,onClick:()=>{e?.()},children:`Закрыть`})}function d({openInitially:e=!0,long:t=!1,presentation:r=`mobile`,expanded:d=!1,motionPreset:f=`standard`,reducedMotion:p=!1}){let[m,h]=(0,c.useState)(e);return(0,l.jsxs)(`div`,{style:{padding:`var(--ui-space-4)`},children:[(0,l.jsx)(n,{onClick:()=>h(!0),children:`Открыть лист`}),m?(0,l.jsx)(i,{ariaLabel:`Пример общего листа`,presentation:r,size:d?`expanded`:`content`,motionPreset:f,reducedMotion:p,onClose:()=>h(!1),children:(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-4)`},children:[(0,l.jsx)(s,{title:`Поиск расписания`,description:`Группа, преподаватель или аудитория`,onClose:()=>h(!1)}),(0,l.jsx)(o,{type:`search`,"aria-label":`Поиск`,placeholder:`Например, ТРПО25-2`}),Array.from({length:t?12:1},(e,t)=>(0,l.jsxs)(a,{tone:`soft`,children:[t+1,`. Длинное содержимое с полным названием подразделения, адресом учебного корпуса и дополнительной информацией.`]},t)),(0,l.jsx)(u,{})]})}):null]})}var f={title:`Overlays/BottomSheet`,component:d,parameters:{layout:`fullscreen`,docs:{description:{component:`Единый ModalOverlay: content/expanded, mobile/desktop. Откройте лист, потяните за handle: короткое движение возвращает его на место, длинное или быстрое закрывает. Затемнение и blur следуют позиции. Escape, backdrop, CloseButton и footer используют один close context. Reduced Motion проверяется системной настройкой браузера.`}}}};const p={},m={args:{openInitially:!1}},h={args:{long:!0}},g={args:{expanded:!0}},_={globals:{theme:`dark`}},v={args:{long:!0},globals:{theme:`dark`,textScale:`large`}},y={args:{presentation:`desktop`,long:!0}},b={},x={args:{motionPreset:`anchored-popup`,expanded:!0}},S={args:{motionPreset:`anchored-popup`,expanded:!0,reducedMotion:!0}},C={args:{long:!0},play:async({canvasElement:e})=>{let t=e.ownerDocument.querySelector(`.modal-container__body`);t&&(t.scrollTop=t.scrollHeight)}},w={parameters:{docs:{description:{story:`Интерактивное состояние: удерживайте handle и двигайте вниз. Позиция листа и материала вычисляются компонентом, без имитации через CSS.`}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    openInitially: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    long: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    long: true
  },
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    presentation: "desktop",
    long: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    motionPreset: "anchored-popup",
    expanded: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    motionPreset: "anchored-popup",
    expanded: true,
    reducedMotion: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    long: true
  },
  play: async ({
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.querySelector(".modal-container__body");
    if (body) body.scrollTop = body.scrollHeight;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Интерактивное состояние: удерживайте handle и двигайте вниз. Позиция листа и материала вычисляются компонентом, без имитации через CSS."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const T=[`Default`,`Interactive`,`LongContent`,`Expanded`,`Dark`,`DarkLongContent`,`ForcedDesktop`,`ForcedMobile`,`AnchoredPopup`,`AnchoredPopupReducedMotion`,`Scrolled`,`Dragging`];export{x as AnchoredPopup,S as AnchoredPopupReducedMotion,_ as Dark,v as DarkLongContent,p as Default,w as Dragging,g as Expanded,y as ForcedDesktop,b as ForcedMobile,m as Interactive,h as LongContent,C as Scrolled,T as __namedExportsOrder,f as default};