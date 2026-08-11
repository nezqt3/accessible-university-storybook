import{n as e,t}from"./iframe-BTz4hujj.js";import{t as n}from"./createLucideIcon-DcKLIXY8.js";var r=n(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),i=e(),a=t();const o=(0,i.forwardRef)(function({label:e,description:t,error:n,id:o,className:s=``,disabled:c,...l},u){let d=(0,i.useId)(),f=o??`ui-checkbox-${d}`,p=t||n?`${f}-description`:void 0;return(0,a.jsxs)(`label`,{className:[`ui-checkbox`,c?`ui-checkbox--disabled`:``,n?`ui-checkbox--error`:``,s].filter(Boolean).join(` `),htmlFor:f,children:[(0,a.jsx)(`input`,{...l,ref:u,id:f,type:`checkbox`,disabled:c,className:`ui-checkbox__input`,"aria-invalid":n?!0:void 0,"aria-describedby":p}),(0,a.jsx)(`span`,{className:`ui-checkbox__box`,"aria-hidden":`true`,children:(0,a.jsx)(r,{size:13,strokeWidth:3,className:`ui-checkbox__mark`})}),e||t||n?(0,a.jsxs)(`span`,{className:`ui-checkbox__content`,children:[e?(0,a.jsx)(`span`,{className:`ui-checkbox__label`,children:e}):null,n?(0,a.jsx)(`span`,{className:`ui-checkbox__description ui-checkbox__description--error`,id:p,children:n}):t?(0,a.jsx)(`span`,{className:`ui-checkbox__description`,id:p,children:t}):null]}):null]})});o.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`string`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var s={title:`UI/Checkbox`,component:o,args:{label:`Запомнить меня`}};const c={},l={args:{defaultChecked:!0}},u={args:{label:`Отметить как требующее осторожности`,description:`Пост получит предупреждение для других студентов`}},d={args:{label:`Согласие с правилами`,error:`Нужно согласиться с правилами публикации`}},f={render:()=>(0,a.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,a.jsx)(o,{label:`Выключен`,disabled:!0}),(0,a.jsx)(o,{label:`Выключен и отмечен`,disabled:!0,defaultChecked:!0})]})},p={render:function(){let[e,t]=(0,i.useState)(!1);return(0,a.jsx)(o,{label:e?`Подписка включена`:`Подписка выключена`,checked:e,onChange:e=>t(e.target.checked)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Отметить как требующее осторожности",
    description: "Пост получит предупреждение для других студентов"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Согласие с правилами",
    error: "Нужно согласиться с правилами публикации"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Checkbox label="Выключен" disabled />
      <Checkbox label="Выключен и отмечен" disabled defaultChecked />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [checked, setChecked] = useState(false);
    return <Checkbox label={checked ? "Подписка включена" : "Подписка выключена"} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...p.parameters?.docs?.source}}};const m=[`Default`,`Checked`,`WithDescription`,`Error`,`Disabled`,`Controlled`];export{l as Checked,p as Controlled,c as Default,f as Disabled,d as Error,u as WithDescription,m as __namedExportsOrder,s as default};