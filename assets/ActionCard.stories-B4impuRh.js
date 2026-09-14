import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./createLucideIcon-B-7CjJKR.js";import{n,t as r}from"./ActionCard-B6UVeOJA.js";import{t as i}from"./graduation-cap-Cy7625i1.js";import"./Pressable-qu7RCk4r.js";import"./Pressable-B92bGPbW.js";import"./Card-CVYhQ6r6.js";import"./Card-BTpC5DGf.js";import{n as a}from"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import{t as o}from"./Stack-BQ1EjeYw.js";import"./Stack-duc46O7L.js";import"./ListRow-lfta1RS1.js";import"./ListRow-Cq2I6Jbp.js";import"./ServiceCard-D5X44dNb.js";import"./ServiceCard-CTqOttal.js";var s=t(),c=e(),l={title:`Profile/ActionCard`,component:r,args:{icon:n,label:`Мои заявки`,variant:`requests`,onClick:()=>{}},parameters:{docs:{description:{component:`Действие профиля на общей ServiceCard. Данные и навигация остаются у вызывающего кода.`}}}};const u={},d={args:{icon:i,label:`Экзамены`,variant:`exams`}},f={args:{label:`Мои заявления и результаты рассмотрения обращений в учебный отдел`}},p={globals:{theme:`light`}},m={globals:{theme:`dark`}},h={...f,globals:{textScale:`large`}},g={render:function(e){let[t,n]=(0,s.useState)(0);return(0,c.jsxs)(o,{gap:`4`,children:[(0,c.jsx)(r,{...e,onClick:()=>n(e=>e+1)}),(0,c.jsxs)(a,{size:`sm`,role:`status`,children:[`Открытий: `,t]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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