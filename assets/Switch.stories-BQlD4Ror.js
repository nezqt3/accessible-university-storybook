import{i as e,t}from"./iframe-QcmIdhIq.js";import{t as n}from"./Switch-zN8tfesu.js";var r=e(),i=t(),a={title:`UI/Switch`,component:n,parameters:{docs:{description:{component:`Переключатель настройки, применяемой сразу. Поддерживает подпись, размеры и управляемое checked-состояние.`}}},args:{checked:!1,ariaLabel:`Темная тема`,onChange:()=>{}}};const o={render:function(){let[e,t]=(0,r.useState)(!1);return(0,i.jsx)(n,{checked:e,onChange:t,ariaLabel:`Темная тема`})}},s={render:function(){let[e,t]=(0,r.useState)(!0);return(0,i.jsx)(`div`,{style:{width:280},children:(0,i.jsx)(n,{label:`Уведомления об изменениях расписания`,checked:e,onChange:t})})}},c={render:function(){let[e,t]=(0,r.useState)(!0),[a,o]=(0,r.useState)(!0);return(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,i.jsx)(n,{size:`sm`,checked:e,onChange:t,ariaLabel:`Маленький`}),(0,i.jsx)(n,{size:`md`,checked:a,onChange:o,ariaLabel:`Стандартный`})]})}},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,i.jsx)(n,{checked:!1,onChange:()=>{},ariaLabel:`Выключен`,disabled:!0}),(0,i.jsx)(n,{checked:!0,onChange:()=>{},ariaLabel:`Включен и заблокирован`,disabled:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function DefaultExample() {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} ariaLabel="Темная тема" />;
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function WithLabelExample() {
    const [checked, setChecked] = useState(true);
    return <div style={{
      width: 280
    }}>
        <Switch label="Уведомления об изменениях расписания" checked={checked} onChange={setChecked} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function SizesExample() {
    const [a, setA] = useState(true);
    const [b, setB] = useState(true);
    return <div style={{
      display: "flex",
      gap: 16,
      alignItems: "center"
    }}>
        <Switch size="sm" checked={a} onChange={setA} ariaLabel="Маленький" />
        <Switch size="md" checked={b} onChange={setB} ariaLabel="Стандартный" />
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>
      <Switch checked={false} onChange={() => {}} ariaLabel="Выключен" disabled />
      <Switch checked onChange={() => {}} ariaLabel="Включен и заблокирован" disabled />
    </div>
}`,...l.parameters?.docs?.source}}};const u=[`Default`,`WithLabel`,`Sizes`,`Disabled`];export{o as Default,l as Disabled,c as Sizes,s as WithLabel,u as __namedExportsOrder,a as default};