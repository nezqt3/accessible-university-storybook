import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./Badge-BDsePzDM.js";import"./Badge-BilbQ7OI.js";import"./Card-CVYhQ6r6.js";import"./Card-BTpC5DGf.js";import{n}from"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import"./Inline-BAM8T-hC.js";import"./Inline-C7M9bN4S.js";import{t as r}from"./Stack-BQ1EjeYw.js";import"./Stack-duc46O7L.js";import{t as i}from"./ProfileRequestCard-FjIPL-uZ.js";var a=t(),o=e(),s={id:2142,title:`Справка об обучении`,createdAt:Date.parse(`2026-09-10T13:25:00+03:00`),status:`processing`,service:{name:`Заказ справок и документов`},ticket:{number:`УО-2026-2142`}},c={title:`Requests/RequestCard`,component:i,args:{ticket:s,onClick:()=>{}}};const l={},u={args:{ticket:{...s,status:`ready`}}},d={args:{ticket:{id:2143}}},f={args:{ticket:{...s,title:`Справка о периоде обучения для Александры Константиновны Степановой-Воскресенской`,service:{title:`Оформление справок и документов для предоставления по месту требования в организации и государственные учреждения`},status:`Ожидает согласования ответственным сотрудником учебного подразделения`,ticket:{number:`УЧЕБНЫЙ-ОТДЕЛ-2026-000000000000002142`}}}},p={globals:{theme:`light`}},m={globals:{theme:`dark`}},h={...f,globals:{textScale:`large`}},g={render:function(e){let[t,s]=(0,a.useState)(0);return(0,o.jsxs)(r,{gap:`4`,children:[(0,o.jsx)(i,{...e,onClick:()=>s(e=>e+1)}),(0,o.jsxs)(n,{size:`sm`,role:`status`,children:[`Открытий заявки: `,t]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: {
      ...ticket,
      status: "ready"
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: {
      id: 2143
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ticket: {
      ...ticket,
      title: "Справка о периоде обучения для Александры Константиновны Степановой-Воскресенской",
      service: {
        title: "Оформление справок и документов для предоставления по месту требования в организации и государственные учреждения"
      },
      status: "Ожидает согласования ответственным сотрудником учебного подразделения",
      ticket: {
        number: "УЧЕБНЫЙ-ОТДЕЛ-2026-000000000000002142"
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...LongContent,
  globals: {
    textScale: "large"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [count, setCount] = useState(0);
    return <Stack gap="4">
        <ProfileRequestCard {...args} onClick={() => setCount(value => value + 1)} />
        <Text size="sm" role="status">
          Открытий заявки: {count}
        </Text>
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`Ready`,`MissingDetails`,`LongContent`,`Light`,`Dark`,`LargeText`,`Interactive`];export{m as Dark,l as Default,g as Interactive,h as LargeText,p as Light,f as LongContent,d as MissingDetails,u as Ready,_ as __namedExportsOrder,c as default};