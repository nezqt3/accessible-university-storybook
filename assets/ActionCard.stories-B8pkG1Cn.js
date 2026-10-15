import{S as e,t}from"./iframe-8nZf5U1I.js";import"./createLucideIcon-Ds0JKKWX.js";import{n,t as r}from"./ActionCard-DDl5ZMd-.js";import{t as i}from"./graduation-cap-Bx-R4nm0.js";import"./Pressable-CaL2LUCh.js";import"./Pressable-RrhW_cjo.js";import"./Card-cNktQ2pm.js";import"./Card-Doq15t3c.js";import{n as a}from"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import{t as o}from"./Stack-GX4de-0N.js";import"./Stack-CqlUafn4.js";import"./ListRow-C87WjtGT.js";import"./ListRow-BtepeKeJ.js";import"./ServiceCard-Ce7AhIWw.js";import"./ServiceCard-BPeYE39s.js";var s=e(),c=t(),l={title:`Profile/ActionCard`,component:r,args:{icon:n,label:`Мои заявки`,variant:`requests`,onClick:()=>{}},parameters:{docs:{description:{component:`Действие профиля на общей ServiceCard. Данные и навигация остаются у вызывающего кода.`}}}};const u={},d={args:{icon:i,label:`Экзамены`,variant:`exams`}},f={args:{label:`Мои заявления и результаты рассмотрения обращений в учебный отдел`}},p={globals:{theme:`light`}},m={globals:{theme:`dark`}},h={...f,globals:{textScale:`large`}},g={render:function(e){let[t,n]=(0,s.useState)(0);return(0,c.jsxs)(o,{gap:`4`,children:[(0,c.jsx)(r,{...e,onClick:()=>n(e=>e+1)}),(0,c.jsxs)(a,{size:`sm`,role:`status`,children:[`Открытий: `,t]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: GraduationCap,
    label: "Экзамены",
    variant: "exams"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Мои заявления и результаты рассмотрения обращений в учебный отдел"
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
        <ActionCard {...args} onClick={() => setCount(value => value + 1)} />
        <Text size="sm" role="status">
          Открытий: {count}
        </Text>
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`Exams`,`LongContent`,`Light`,`Dark`,`LargeText`,`Interactive`];export{m as Dark,u as Default,d as Exams,g as Interactive,h as LargeText,p as Light,f as LongContent,_ as __namedExportsOrder,l as default};