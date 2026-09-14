import{t as e,y as t}from"./iframe-b1ov7CI7.js";import{t as n}from"./OtpInput-CFclY1Am.js";var r=t(),i=e(),a={title:`Primitives/OtpInput`,component:n,parameters:{docs:{description:{component:`Поле одноразового цифрового кода с визуальными ячейками. Нормализует ввод, поддерживает произвольную длину, loading и onComplete.`}}},args:{value:``,onChange:()=>{},label:`Код подтверждения`,length:6}};const o={render:function(e){let[t,a]=(0,r.useState)(``);return(0,i.jsx)(n,{...e,value:t,onChange:a})}},s={args:{value:`250569`}},c={args:{value:`250569`,loading:!0}},l={args:{value:`12`,length:4}},u={globals:{theme:`dark`}},d={args:{disabled:!0,value:`123456`}},f={args:{"aria-invalid":!0,value:`123456`}},p={play:async({canvasElement:e})=>{e.querySelector(`input`)?.focus()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "123456"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    value: "123456"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
}`,...p.parameters?.docs?.source}}};const m=[`Interactive`,`Filled`,`Loading`,`FourDigits`,`Dark`,`Disabled`,`Error`,`Focused`];export{u as Dark,d as Disabled,f as Error,s as Filled,p as Focused,l as FourDigits,o as Interactive,c as Loading,m as __namedExportsOrder,a as default};