import{t as e}from"./iframe-BM-w3o-i.js";import{t}from"./InlineSpinner-BC7upHmO.js";var n=e(),r={title:`UI/InlineSpinner`,component:t,parameters:{docs:{description:{component:`Небольшой индикатор загрузки внутри кнопок, полей и локальных блоков. Не перекрывает страницу целиком.`}}}};const i={},a={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,color:`var(--ui-color-brand-strong)`},children:[(0,n.jsx)(t,{size:`sm`}),(0,n.jsx)(t,{size:`md`}),(0,n.jsx)(t,{size:`lg`})]})},o={args:{label:`Загружаем данные`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center",
    color: "var(--ui-color-brand-strong)"
  }}>
      <InlineSpinner size="sm" />
      <InlineSpinner size="md" />
      <InlineSpinner size="lg" />
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Загружаем данные"
  }
}`,...o.parameters?.docs?.source}}};const s=[`Default`,`Sizes`,`WithLabel`];export{i as Default,a as Sizes,o as WithLabel,s as __namedExportsOrder,r as default};