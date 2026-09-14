import{t as e}from"./iframe-Ow4Lrb8m.js";import{t}from"./InlineSpinner-B_tlR_Us.js";var n=e(),r={title:`Primitives/InlineSpinner`,component:t,parameters:{docs:{description:{component:`Небольшой индикатор загрузки внутри кнопок, полей и локальных блоков. Не перекрывает страницу целиком.`}}}};const i={},a={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-4)`,alignItems:`center`,color:`var(--ui-color-brand-strong)`},children:[(0,n.jsx)(t,{size:`sm`}),(0,n.jsx)(t,{size:`md`}),(0,n.jsx)(t,{size:`lg`})]})},o={args:{label:`Загружаем данные`}},s={...o,globals:{theme:`light`}},c={...o,globals:{theme:`dark`}},l={...o,globals:{textScale:`large`}},u={...o,parameters:{docs:{description:{story:`При системном prefers-reduced-motion вращение отключено. Подпись role=status остаётся доступной.`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--ui-space-4)",
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...WithLabel,
  globals: {
    theme: "light"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...WithLabel,
  globals: {
    theme: "dark"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...WithLabel,
  globals: {
    textScale: "large"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...WithLabel,
  parameters: {
    docs: {
      description: {
        story: "При системном prefers-reduced-motion вращение отключено. Подпись role=status остаётся доступной."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const d=[`Default`,`Sizes`,`WithLabel`,`Light`,`Dark`,`LargeText`,`ReducedMotion`];export{c as Dark,i as Default,l as LargeText,s as Light,u as ReducedMotion,a as Sizes,o as WithLabel,d as __namedExportsOrder,r as default};