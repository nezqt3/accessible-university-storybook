import"./useTranslation-Ch5uCjQR.js";import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./createLucideIcon-Cqzfk4mC.js";import"./x-aIX4-Ysv.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import{t as n}from"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";import"./IconButton-brlandGx.js";import"./IconButton-CkfbeZNf.js";import{r}from"./CloseButton-Dlth1W31.js";import"./CloseButton-DuLuJ11g.js";import{n as i}from"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./proxy-Dnaxw7vE.js";import{t as a}from"./ModalOverlay-DsbVphhP.js";import"./use-reduced-motion-D1xf7gmi.js";import"./FormField-DMSh2HXx.js";import"./FormField-Dm-RTxrN.js";import{t as o}from"./Input-DXvu1Y6H.js";import"./Input-CZx1ckHV.js";import{t as s}from"./ModalHeader-BBxKWgyV.js";import"./ModalHeader-CxQ2g3I2.js";var c=t(),l=e();function u(){let e=r();return(0,l.jsx)(n,{variant:`secondary`,onClick:()=>{e?.()},children:`Закрыть`})}function d({openInitially:e=!0,long:t=!1,presentation:r=`mobile`,expanded:d=!1}){let[f,p]=(0,c.useState)(e);return(0,l.jsxs)(`div`,{style:{padding:`var(--ui-space-4)`},children:[(0,l.jsx)(n,{onClick:()=>p(!0),children:`Открыть лист`}),f?(0,l.jsx)(a,{ariaLabel:`Пример общего листа`,presentation:r,size:d?`expanded`:`content`,onClose:()=>p(!1),children:(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-4)`},children:[(0,l.jsx)(s,{title:`Поиск расписания`,description:`Группа, преподаватель или аудитория`,onClose:()=>p(!1)}),(0,l.jsx)(o,{type:`search`,"aria-label":`Поиск`,placeholder:`Например, ТРПО25-2`}),Array.from({length:t?12:1},(e,t)=>(0,l.jsxs)(i,{tone:`soft`,children:[t+1,`. Длинное содержимое с полным названием подразделения, адресом учебного корпуса и дополнительной информацией.`]},t)),(0,l.jsx)(u,{})]})}):null]})}var f={title:`Overlays/BottomSheet`,component:d,parameters:{layout:`fullscreen`,docs:{description:{component:`Единый ModalOverlay: content/expanded, mobile/desktop. Откройте лист, потяните за handle: короткое движение возвращает его на место, длинное или быстрое закрывает. Затемнение и blur следуют позиции. Escape, backdrop, CloseButton и footer используют один close context. Reduced Motion проверяется системной настройкой браузера.`}}}};const p={},m={args:{openInitially:!1}},h={args:{long:!0}},g={args:{expanded:!0}},_={globals:{theme:`dark`}},v={args:{long:!0},globals:{theme:`dark`,textScale:`large`}},y={args:{presentation:`desktop`,long:!0}},b={},x={args:{long:!0},play:async({canvasElement:e})=>{let t=e.ownerDocument.querySelector(`.modal-container__body`);t&&(t.scrollTop=t.scrollHeight)}},S={parameters:{docs:{description:{story:`Интерактивное состояние: удерживайте handle и двигайте вниз. Позиция листа и материала вычисляются компонентом, без имитации через CSS.`}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    long: true
  },
  play: async ({
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.querySelector(".modal-container__body");
    if (body) body.scrollTop = body.scrollHeight;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Интерактивное состояние: удерживайте handle и двигайте вниз. Позиция листа и материала вычисляются компонентом, без имитации через CSS."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Interactive`,`LongContent`,`Expanded`,`Dark`,`DarkLongContent`,`ForcedDesktop`,`ForcedMobile`,`Scrolled`,`Dragging`];export{_ as Dark,v as DarkLongContent,p as Default,S as Dragging,g as Expanded,y as ForcedDesktop,b as ForcedMobile,m as Interactive,h as LongContent,x as Scrolled,C as __namedExportsOrder,f as default};