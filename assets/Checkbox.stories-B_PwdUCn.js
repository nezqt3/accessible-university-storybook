import{i as e,t}from"./iframe-BUpvSL3s.js";import"./createLucideIcon-oToEMaPF.js";import"./check-Cviv4sHY.js";import{t as n}from"./Checkbox-COcu6VCQ.js";var r=e(),i=t(),a={title:`UI/Checkbox`,component:n,parameters:{docs:{description:{component:`Флажок для независимого булевого выбора. Поддерживает подпись, пояснение, ошибку и disabled-состояние.`}}},args:{label:`Запомнить меня`}};const o={},s={args:{defaultChecked:!0}},c={args:{label:`Отметить как требующее осторожности`,description:`Пост получит предупреждение для других студентов`}},l={args:{label:`Согласие с правилами`,error:`Нужно согласиться с правилами публикации`}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,i.jsx)(n,{label:`Выключен`,disabled:!0}),(0,i.jsx)(n,{label:`Выключен и отмечен`,disabled:!0,defaultChecked:!0})]})},d={render:function(){let[e,t]=(0,r.useState)(!1);return(0,i.jsx)(n,{label:e?`Подписка включена`:`Подписка выключена`,checked:e,onChange:e=>t(e.target.checked)})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Отметить как требующее осторожности",
    description: "Пост получит предупреждение для других студентов"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Согласие с правилами",
    error: "Нужно согласиться с правилами публикации"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Checkbox label="Выключен" disabled />
      <Checkbox label="Выключен и отмечен" disabled defaultChecked />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [checked, setChecked] = useState(false);
    return <Checkbox label={checked ? "Подписка включена" : "Подписка выключена"} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...d.parameters?.docs?.source}}};const f=[`Default`,`Checked`,`WithDescription`,`Error`,`Disabled`,`Controlled`];export{s as Checked,d as Controlled,o as Default,u as Disabled,l as Error,c as WithDescription,f as __namedExportsOrder,a as default};