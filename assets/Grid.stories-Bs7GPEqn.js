import{t as e}from"./iframe-Ow4Lrb8m.js";import{t}from"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import{n}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import{t as r}from"./Grid-LpQH2i0V.js";var i=e(),a={title:`Primitives/Layout/Grid`,component:r,args:{columns:1,columnsMd:2,columnsLg:3,gap:`4`},argTypes:{columns:{control:`select`,options:[1,2,3,4]},columnsMd:{control:`select`,options:[1,2,3,4]},columnsLg:{control:`select`,options:[1,2,3,4]},gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Адаптивная сетка с ограниченным набором колонок и токенизированными отступами.`}}}};const o={render:e=>(0,i.jsx)(r,{...e,children:[`Расписание`,`Оценки`,`Посещаемость`,`Библиотека`,`Сервисы`,`Новости`].map(e=>(0,i.jsx)(t,{children:(0,i.jsx)(n,{weight:`semibold`,children:e})},e))})},s={args:{columns:1,columnsMd:2,columnsLg:2,gap:`6`},render:e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(t,{children:(0,i.jsx)(n,{children:`Основной блок`})}),(0,i.jsx)(t,{children:(0,i.jsx)(n,{children:`Дополнительный блок`})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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