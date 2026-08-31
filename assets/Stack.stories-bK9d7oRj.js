import{t as e}from"./iframe-QcmIdhIq.js";import{n as t}from"./Typography-DNNQODWJ.js";import"./Typography-PDkJ9EAq.js";import{t as n}from"./Card-mgXg1GZO.js";import"./Card-D3tw1Ehr.js";import{t as r}from"./Stack-CDyjYJT_.js";var i=e(),a={title:`UI/Layout/Stack`,component:r,args:{gap:`4`,align:`stretch`},argTypes:{gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Вертикальная композиция. Используется для ритма страницы, карточки или блока формы.`}}}};const o={render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(n,{children:(0,i.jsx)(t,{children:`Первый блок`})}),(0,i.jsx)(n,{children:(0,i.jsx)(t,{children:`Второй блок`})}),(0,i.jsx)(n,{children:(0,i.jsx)(t,{children:`Третий блок`})})]})},s={args:{align:`center`,gap:`6`},render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(t,{weight:`semibold`,children:`Заголовок`}),(0,i.jsx)(t,{tone:`muted`,children:`Контент выровнен по центру, расстояние — токен space-6.`})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <Card>
        <Text>Первый блок</Text>
      </Card>
      <Card>
        <Text>Второй блок</Text>
      </Card>
      <Card>
        <Text>Третий блок</Text>
      </Card>
    </Stack>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    align: "center",
    gap: "6"
  },
  render: args => <Stack {...args}>
      <Text weight="semibold">Заголовок</Text>
      <Text tone="muted">Контент выровнен по центру, расстояние — токен space-6.</Text>
    </Stack>
}`,...s.parameters?.docs?.source}}};const c=[`Default`,`Centered`];export{s as Centered,o as Default,c as __namedExportsOrder,a as default};