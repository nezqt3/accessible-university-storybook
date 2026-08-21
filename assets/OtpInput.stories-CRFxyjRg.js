import{i as e,t}from"./iframe-t09rk9us.js";import{t as n}from"./OtpInput-DLfgE2I6.js";var r=e(),i=t(),a={title:`UI/OtpInput`,component:n,parameters:{docs:{description:{component:`Поле одноразового цифрового кода с визуальными ячейками. Нормализует ввод, поддерживает произвольную длину, loading и onComplete.`}}},args:{value:``,onChange:()=>{},label:`Код подтверждения`,length:6}};const o={render:function(e){let[t,a]=(0,r.useState)(``);return(0,i.jsx)(n,{...e,value:t,onChange:a})}},s={args:{value:`250569`}},c={args:{value:`250569`,loading:!0}},l={args:{value:`12`,length:4}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [value, setValue] = useState("");
    return <OtpInput {...args} value={value} onChange={setValue} />;
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "250569"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: "250569",
    loading: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "12",
    length: 4
  }
}`,...l.parameters?.docs?.source}}};const u=[`Interactive`,`Filled`,`Loading`,`FourDigits`];export{s as Filled,l as FourDigits,o as Interactive,c as Loading,u as __namedExportsOrder,a as default};