import{t as e}from"./iframe-sDOIPago.js";import{n as t}from"./Typography-p9syuprK.js";import"./Typography-ClcRsyq_.js";import{t as n}from"./Card-DMP8u2eT.js";import"./Card-CMnYWI2r.js";var r=e();function i({columns:e=1,columnsMd:t,columnsLg:n,gap:i=`4`,className:a,children:o,...s}){let c={"--ui-grid-columns":e,"--ui-grid-columns-md":t??e,"--ui-grid-columns-lg":n??t??e};return(0,r.jsx)(`div`,{...s,style:{...c,...s.style},className:[`ui-grid`,`ui-grid--gap-${i}`,a].filter(Boolean).join(` `),children:o})}i.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{columns:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``,defaultValue:{value:`1`,computed:!1}},columnsMd:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``},columnsLg:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``},gap:{required:!1,tsType:{name:`union`,raw:`"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "12"`,elements:[{name:`literal`,value:`"0"`},{name:`literal`,value:`"1"`},{name:`literal`,value:`"2"`},{name:`literal`,value:`"3"`},{name:`literal`,value:`"4"`},{name:`literal`,value:`"5"`},{name:`literal`,value:`"6"`},{name:`literal`,value:`"8"`},{name:`literal`,value:`"12"`}]},description:``,defaultValue:{value:`"4"`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]};var a={title:`UI/Layout/Grid`,component:i,args:{columns:1,columnsMd:2,columnsLg:3,gap:`4`},argTypes:{columns:{control:`select`,options:[1,2,3,4]},columnsMd:{control:`select`,options:[1,2,3,4]},columnsLg:{control:`select`,options:[1,2,3,4]},gap:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`8`,`12`]},children:{control:!1,table:{disable:!0}}},parameters:{docs:{description:{component:`Адаптивная сетка с ограниченным набором колонок и токенизированными отступами.`}}}};const o={render:e=>(0,r.jsx)(i,{...e,children:[`Расписание`,`Оценки`,`Посещаемость`,`Библиотека`,`Сервисы`,`Новости`].map(e=>(0,r.jsx)(n,{children:(0,r.jsx)(t,{weight:`semibold`,children:e})},e))})},s={args:{columns:1,columnsMd:2,columnsLg:2,gap:`6`},render:e=>(0,r.jsxs)(i,{...e,children:[(0,r.jsx)(n,{children:(0,r.jsx)(t,{children:`Основной блок`})}),(0,r.jsx)(n,{children:(0,r.jsx)(t,{children:`Дополнительный блок`})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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