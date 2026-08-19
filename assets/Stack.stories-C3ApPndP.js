import{t as e}from"./iframe-sDOIPago.js";import{n as t}from"./Typography-p9syuprK.js";import"./Typography-ClcRsyq_.js";import{t as n}from"./Card-DMP8u2eT.js";import"./Card-CMnYWI2r.js";var r=e();function i({gap:e=`4`,align:t=`stretch`,className:n,children:i,...a}){return(0,r.jsx)(`div`,{...a,className:[`ui-stack`,`ui-stack--gap-${e}`,`ui-stack--align-${t}`,n].filter(Boolean).join(` `),children:i})}i.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{gap:{required:!1,tsType:{name:`union`,raw:`"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "12"`,elements:[{name:`literal`,value:`"0"`},{name:`literal`,value:`"1"`},{name:`literal`,value:`"2"`},{name:`literal`,value:`"3"`},{name:`literal`,value:`"4"`},{name:`literal`,value:`"5"`},{name:`literal`,value:`"6"`},{name:`literal`,value:`"8"`},{name:`literal`,value:`"12"`}]},description:``,defaultValue:{value:`"4"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch" | "baseline"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`},{name:`literal`,value:`"baseline"`}]},description:``,defaultValue:{value:`"stretch"`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]};var a={title:`UI/Layout/Stack`,component:i,args:{gap:`4`,align:`stretch`},argTypes:{gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Вертикальная композиция. Используется для ритма страницы, карточки или блока формы.`}}}};const o={render:e=>(0,r.jsxs)(i,{...e,children:[(0,r.jsx)(n,{children:(0,r.jsx)(t,{children:`Первый блок`})}),(0,r.jsx)(n,{children:(0,r.jsx)(t,{children:`Второй блок`})}),(0,r.jsx)(n,{children:(0,r.jsx)(t,{children:`Третий блок`})})]})},s={args:{align:`center`,gap:`6`},render:e=>(0,r.jsxs)(i,{...e,children:[(0,r.jsx)(t,{weight:`semibold`,children:`Заголовок`}),(0,r.jsx)(t,{tone:`muted`,children:`Контент выровнен по центру, расстояние — токен space-6.`})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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