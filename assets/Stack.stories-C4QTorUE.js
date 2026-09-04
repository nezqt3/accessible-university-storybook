import{t as e}from"./iframe-BM-w3o-i.js";import{t}from"./Card-BjKyXiM7.js";import"./Card-Cr5xUjgw.js";import{n}from"./Typography-t53iKffO.js";import"./Typography-B8MrsJDF.js";import{t as r}from"./Stack-DeeA_ra7.js";var i=e(),a={title:`UI/Layout/Stack`,component:r,args:{gap:`4`,align:`stretch`},argTypes:{gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Вертикальная композиция. Используется для ритма страницы, карточки или блока формы.`}}}};const o={render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(t,{children:(0,i.jsx)(n,{children:`Первый блок`})}),(0,i.jsx)(t,{children:(0,i.jsx)(n,{children:`Второй блок`})}),(0,i.jsx)(t,{children:(0,i.jsx)(n,{children:`Третий блок`})})]})},s={args:{align:`center`,gap:`6`},render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(n,{weight:`semibold`,children:`Заголовок`}),(0,i.jsx)(n,{tone:`muted`,children:`Контент выровнен по центру, расстояние — токен space-6.`})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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