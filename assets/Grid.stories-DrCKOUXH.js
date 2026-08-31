import{t as e}from"./iframe-BUpvSL3s.js";import{n as t}from"./Typography-DHGfxIpM.js";import"./Typography-PDkJ9EAq.js";import{t as n}from"./Card-BazrVLQ5.js";import"./Card-D3tw1Ehr.js";import{t as r}from"./Grid-Bl8QRU0x.js";var i=e(),a={title:`UI/Layout/Grid`,component:r,args:{columns:1,columnsMd:2,columnsLg:3,gap:`4`},argTypes:{columns:{control:`select`,options:[1,2,3,4]},columnsMd:{control:`select`,options:[1,2,3,4]},columnsLg:{control:`select`,options:[1,2,3,4]},gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Адаптивная сетка с ограниченным набором колонок и токенизированными отступами.`}}}};const o={render:e=>(0,i.jsx)(r,{...e,children:[`Расписание`,`Оценки`,`Посещаемость`,`Библиотека`,`Сервисы`,`Новости`].map(e=>(0,i.jsx)(n,{children:(0,i.jsx)(t,{weight:`semibold`,children:e})},e))})},s={args:{columns:1,columnsMd:2,columnsLg:2,gap:`6`},render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(n,{children:(0,i.jsx)(t,{children:`Основной блок`})}),(0,i.jsx)(n,{children:(0,i.jsx)(t,{children:`Дополнительный блок`})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      {["Расписание", "Оценки", "Посещаемость", "Библиотека", "Сервисы", "Новости"].map(title => <Card key={title}>
          <Text weight="semibold">{title}</Text>
        </Card>)}
    </Grid>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 1,
    columnsMd: 2,
    columnsLg: 2,
    gap: "6"
  },
  render: args => <Grid {...args}>
      <Card>
        <Text>Основной блок</Text>
      </Card>
      <Card>
        <Text>Дополнительный блок</Text>
      </Card>
    </Grid>
}`,...s.parameters?.docs?.source}}};const c=[`ResponsiveCards`,`TwoColumns`];export{o as ResponsiveCards,s as TwoColumns,c as __namedExportsOrder,a as default};