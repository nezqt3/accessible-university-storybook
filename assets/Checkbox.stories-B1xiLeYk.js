import{i as e,t}from"./iframe-C5GxCcZY.js";import"./createLucideIcon-CzzZxVLe.js";import{t as n}from"./check-CGM07p43.js";var r=e(),i=t();const a=(0,r.forwardRef)(function({label:e,description:t,error:a,id:o,className:s=``,disabled:c,...l},u){let d=(0,r.useId)(),f=o??`ui-checkbox-${d}`,p=t||a?`${f}-description`:void 0;return(0,i.jsxs)(`label`,{className:[`ui-checkbox`,c?`ui-checkbox--disabled`:``,a?`ui-checkbox--error`:``,s].filter(Boolean).join(` `),htmlFor:f,children:[(0,i.jsx)(`input`,{...l,ref:u,id:f,type:`checkbox`,disabled:c,className:`ui-checkbox__input`,"aria-invalid":a?!0:void 0,"aria-describedby":p}),(0,i.jsx)(`span`,{className:`ui-checkbox__box`,"aria-hidden":`true`,children:(0,i.jsx)(n,{size:13,strokeWidth:3,className:`ui-checkbox__mark`})}),e||t||a?(0,i.jsxs)(`span`,{className:`ui-checkbox__content`,children:[e?(0,i.jsx)(`span`,{className:`ui-checkbox__label`,children:e}):null,a?(0,i.jsx)(`span`,{className:`ui-checkbox__description ui-checkbox__description--error`,id:p,children:a}):t?(0,i.jsx)(`span`,{className:`ui-checkbox__description`,id:p,children:t}):null]}):null]})});a.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`string`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var o={title:`UI/Checkbox`,component:a,parameters:{docs:{description:{component:`Флажок для независимого булевого выбора. Поддерживает подпись, пояснение, ошибку и disabled-состояние.`}}},args:{label:`Запомнить меня`}};const s={},c={args:{defaultChecked:!0}},l={args:{label:`Отметить как требующее осторожности`,description:`Пост получит предупреждение для других студентов`}},u={args:{label:`Согласие с правилами`,error:`Нужно согласиться с правилами публикации`}},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,i.jsx)(a,{label:`Выключен`,disabled:!0}),(0,i.jsx)(a,{label:`Выключен и отмечен`,disabled:!0,defaultChecked:!0})]})},f={render:function(){let[e,t]=(0,r.useState)(!1);return(0,i.jsx)(a,{label:e?`Подписка включена`:`Подписка выключена`,checked:e,onChange:e=>t(e.target.checked)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Отметить как требующее осторожности",
    description: "Пост получит предупреждение для других студентов"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Согласие с правилами",
    error: "Нужно согласиться с правилами публикации"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Checkbox label="Выключен" disabled />
      <Checkbox label="Выключен и отмечен" disabled defaultChecked />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [checked, setChecked] = useState(false);
    return <Checkbox label={checked ? "Подписка включена" : "Подписка выключена"} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...f.parameters?.docs?.source}}};const p=[`Default`,`Checked`,`WithDescription`,`Error`,`Disabled`,`Controlled`];export{c as Checked,f as Controlled,s as Default,d as Disabled,u as Error,l as WithDescription,p as __namedExportsOrder,o as default};