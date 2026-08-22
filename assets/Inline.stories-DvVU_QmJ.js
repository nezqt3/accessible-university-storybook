import{t as e}from"./iframe-CZbR_cjA.js";import"./InlineSpinner-LqY_6uni.js";import"./InlineSpinner-BpoKxC1k.js";import{t}from"./Button-BneHRs15.js";import"./Button-CAn4DT-A.js";import{n}from"./Typography-BJrQRF5y.js";import"./Typography-PDkJ9EAq.js";import{t as r}from"./Inline-BMs9qwf0.js";var i=e(),a={title:`UI/Layout/Inline`,component:r,args:{gap:`3`,align:`center`,justify:`start`,wrap:!1},argTypes:{gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`]},wrap:{control:`boolean`},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Горизонтальная группа для действий, метаданных и контролов.`}}}};const o={render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(t,{children:`Сохранить`}),(0,i.jsx)(t,{variant:`secondary`,children:`Отмена`})]})},s={args:{justify:`between`,wrap:!0,gap:`4`},render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(n,{weight:`semibold`,children:`Расписание`}),(0,i.jsx)(n,{tone:`muted`,children:`Обновлено сегодня`})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Inline {...args}>
      <Button>Сохранить</Button>
      <Button variant="secondary">Отмена</Button>
    </Inline>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    justify: "between",
    wrap: true,
    gap: "4"
  },
  render: args => <Inline {...args}>
      <Text weight="semibold">Расписание</Text>
      <Text tone="muted">Обновлено сегодня</Text>
    </Inline>
}`,...s.parameters?.docs?.source}}};const c=[`Actions`,`ResponsiveMetadata`];export{o as Actions,s as ResponsiveMetadata,c as __namedExportsOrder,a as default};