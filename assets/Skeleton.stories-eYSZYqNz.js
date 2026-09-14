import{t as e}from"./iframe-Ow4Lrb8m.js";import{t}from"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import{t as n}from"./Skeleton-BoSYRP1p.js";import{t as r}from"./Inline-Bn5Qldda.js";import"./Inline-C7M9bN4S.js";var i=e(),a={title:`States/Skeleton`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Плейсхолдер загрузки, сохраняющий геометрию будущего контента. Используйте подходящий variant или задайте размеры вручную.`}}}};const o={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-3)`,maxWidth:420},children:[(0,i.jsx)(n,{variant:`title`}),(0,i.jsx)(n,{variant:`text`}),(0,i.jsx)(n,{variant:`text`,width:`80%`}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-3)`,alignItems:`center`},children:[(0,i.jsx)(n,{variant:`circle`}),(0,i.jsx)(n,{variant:`button`})]}),(0,i.jsx)(n,{variant:`rect`})]})},s={render:()=>(0,i.jsx)(n,{width:240,height:64})},c={name:`Композиция: карточка`,render:()=>(0,i.jsxs)(t,{style:{maxWidth:`24rem`},"aria-label":`Загрузка карточки`,children:[(0,i.jsxs)(r,{justify:`between`,gap:`3`,children:[(0,i.jsx)(n,{variant:`text`,width:90}),(0,i.jsx)(n,{variant:`text`,width:60})]}),(0,i.jsx)(n,{variant:`title`,width:`75%`}),(0,i.jsx)(n,{variant:`text`}),(0,i.jsx)(n,{variant:`text`,width:`60%`})]})},l={...c,globals:{theme:`light`}},u={...c,globals:{theme:`dark`}},d={...c,globals:{textScale:`large`}},f={...c,parameters:{docs:{description:{story:`При системном prefers-reduced-motion пульсация отключена, геометрия плейсхолдеров сохраняется.`}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-3)",
    maxWidth: 420
  }}>
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
      <div style={{
      display: "flex",
      gap: "var(--ui-space-3)",
      alignItems: "center"
    }}>
        <Skeleton variant="circle" />
        <Skeleton variant="button" />
      </div>
      <Skeleton variant="rect" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton width={240} height={64} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Композиция: карточка",
  render: () => <Card style={{
    maxWidth: "24rem"
  }} aria-label="Загрузка карточки">
      <Inline justify="between" gap="3">
        <Skeleton variant="text" width={90} />
        <Skeleton variant="text" width={60} />
      </Inline>
      <Skeleton variant="title" width="75%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
    </Card>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...CardExample,
  globals: {
    theme: "light"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...CardExample,
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...CardExample,
  globals: {
    textScale: "large"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...CardExample,
  parameters: {
    docs: {
      description: {
        story: "При системном prefers-reduced-motion пульсация отключена, геометрия плейсхолдеров сохраняется."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const p=[`Variants`,`CustomSize`,`CardExample`,`Light`,`Dark`,`LargeText`,`ReducedMotion`];export{c as CardExample,s as CustomSize,u as Dark,d as LargeText,l as Light,f as ReducedMotion,o as Variants,p as __namedExportsOrder,a as default};