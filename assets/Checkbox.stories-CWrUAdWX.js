import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import"./check-Y1Fq9Jt0.js";import{t as n}from"./Checkbox-CRqRxJQI.js";var r=t(),i=e(),a={title:`Primitives/Checkbox`,component:n,parameters:{docs:{description:{component:`Флажок для независимого булевого выбора. Поддерживает подпись, пояснение, ошибку и disabled-состояние.`}}},args:{label:`Запомнить меня`}};const o={},s={args:{defaultChecked:!0}},c={args:{label:`Отметить как требующее осторожности`,description:`Пост получит предупреждение для других студентов`}},l={args:{label:`Согласие с правилами`,error:`Нужно согласиться с правилами публикации`}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,i.jsx)(n,{label:`Выключен`,disabled:!0}),(0,i.jsx)(n,{label:`Выключен и отмечен`,disabled:!0,defaultChecked:!0})]})},d={render:function(){let[e,t]=(0,r.useState)(!1);return(0,i.jsx)(n,{label:e?`Подписка включена`:`Подписка выключена`,checked:e,onChange:e=>t(e.target.checked)})}},f={globals:{theme:`dark`}},p={args:{label:`Получать уведомления об изменениях расписания учебно-научного подразделения`},globals:{textScale:`large`}},m={play:async({canvasElement:e})=>{e.querySelector(`input`)?.focus()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Получать уведомления об изменениях расписания учебно-научного подразделения"
  },
  globals: {
    textScale: "large"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`Checked`,`WithDescription`,`Error`,`Disabled`,`Controlled`,`Dark`,`LongLabel`,`Focused`];export{s as Checked,d as Controlled,f as Dark,o as Default,u as Disabled,l as Error,m as Focused,p as LongLabel,c as WithDescription,h as __namedExportsOrder,a as default};