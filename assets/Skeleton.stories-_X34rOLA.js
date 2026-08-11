import{t as e}from"./iframe-CibmaNwd.js";var t=e();function n({className:e=``,variant:n,width:r,height:i,style:a,...o}){let s=[`ui-skeleton`,n?`ui-skeleton--${n}`:``,e].filter(Boolean).join(` `),c={...a};return r!==void 0&&(c.width=typeof r==`number`?`${r}px`:r),i!==void 0&&(c.height=typeof i==`number`?`${i}px`:i),(0,t.jsx)(`div`,{...o,style:c,className:s,"aria-hidden":`true`})}n.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"text" | "title" | "circle" | "rect" | "button"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"title"`},{name:`literal`,value:`"circle"`},{name:`literal`,value:`"rect"`},{name:`literal`,value:`"button"`}]},description:`Готовая форма; без variant поведение прежнее (размер задает className)`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`HTMLAttributes`]};var r={title:`UI/Skeleton`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Плейсхолдер загрузки, сохраняющий геометрию будущего контента. Используйте подходящий variant или задайте размеры вручную.`}}}};const i={render:()=>(0,t.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:420},children:[(0,t.jsx)(n,{variant:`title`}),(0,t.jsx)(n,{variant:`text`}),(0,t.jsx)(n,{variant:`text`,width:`80%`}),(0,t.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,t.jsx)(n,{variant:`circle`}),(0,t.jsx)(n,{variant:`button`})]}),(0,t.jsx)(n,{variant:`rect`})]})},a={render:()=>(0,t.jsx)(n,{width:240,height:64})},o={name:`Композиция: карточка`,render:()=>(0,t.jsxs)(`div`,{style:{display:`grid`,gap:10,maxWidth:380,padding:20,border:`1px solid var(--ui-color-border)`,borderRadius:16},"aria-label":`Загрузка карточки`,children:[(0,t.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:12},children:[(0,t.jsx)(n,{variant:`text`,width:90}),(0,t.jsx)(n,{variant:`text`,width:60})]}),(0,t.jsx)(n,{variant:`title`,width:`75%`}),(0,t.jsx)(n,{variant:`text`}),(0,t.jsx)(n,{variant:`text`,width:`60%`})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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