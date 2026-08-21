import{t as e}from"./iframe-t09rk9us.js";import{t}from"./Skeleton-BJVjMvI1.js";var n=e(),r={title:`UI/Skeleton`,component:t,parameters:{layout:`padded`,docs:{description:{component:`Плейсхолдер загрузки, сохраняющий геометрию будущего контента. Используйте подходящий variant или задайте размеры вручную.`}}}};const i={render:()=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:420},children:[(0,n.jsx)(t,{variant:`title`}),(0,n.jsx)(t,{variant:`text`}),(0,n.jsx)(t,{variant:`text`,width:`80%`}),(0,n.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,n.jsx)(t,{variant:`circle`}),(0,n.jsx)(t,{variant:`button`})]}),(0,n.jsx)(t,{variant:`rect`})]})},a={render:()=>(0,n.jsx)(t,{width:240,height:64})},o={name:`Композиция: карточка`,render:()=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:10,maxWidth:380,padding:20,border:`1px solid var(--ui-color-border)`,borderRadius:16},"aria-label":`Загрузка карточки`,children:[(0,n.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,n.jsx)(t,{variant:`text`,width:90}),(0,n.jsx)(t,{variant:`text`,width:60})]}),(0,n.jsx)(t,{variant:`title`,width:`75%`}),(0,n.jsx)(t,{variant:`text`}),(0,n.jsx)(t,{variant:`text`,width:`60%`})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    maxWidth: 420
  }}>
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
      <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center"
    }}>
        <Skeleton variant="circle" />
        <Skeleton variant="button" />
      </div>
      <Skeleton variant="rect" />
    </div>
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton width={240} height={64} />
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Композиция: карточка",
  render: () => <div style={{
    display: "grid",
    gap: 10,
    maxWidth: 380,
    padding: 20,
    border: "1px solid var(--ui-color-border)",
    borderRadius: 16
  }} aria-label="Загрузка карточки">
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 12
    }}>
        <Skeleton variant="text" width={90} />
        <Skeleton variant="text" width={60} />
      </div>
      <Skeleton variant="title" width="75%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
    </div>
}`,...o.parameters?.docs?.source}}};const s=[`Variants`,`CustomSize`,`CardExample`];export{o as CardExample,a as CustomSize,i as Variants,s as __namedExportsOrder,r as default};