import{i as e,t}from"./iframe-Cso2wjox.js";var n=e(),r=t();const i=(0,n.forwardRef)(function({checked:e,onChange:t,ariaLabel:n,label:i,size:a=`md`,disabled:o,className:s=``,...c},l){let u=(0,r.jsx)(`button`,{...c,ref:l,type:`button`,role:`switch`,"aria-checked":e,"aria-label":i?void 0:n,disabled:o,className:[`ui-switch`,`ui-switch--${a}`,e?`ui-switch--checked`:``,i?``:s].filter(Boolean).join(` `),onClick:()=>t(!e),children:(0,r.jsx)(`span`,{className:`ui-switch__thumb`})});return i?(0,r.jsxs)(`span`,{className:[`ui-switch-row`,o?`ui-switch-row--disabled`:``,s].filter(Boolean).join(` `),children:[(0,r.jsx)(`span`,{className:`ui-switch-row__label`,children:i}),u]}):u});i.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{checked:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:`Обязательная подпись, если нет видимого label`},label:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var a={title:`UI/Switch`,component:i,parameters:{docs:{description:{component:`Переключатель настройки, применяемой сразу. Поддерживает подпись, размеры и управляемое checked-состояние.`}}},args:{checked:!1,ariaLabel:`Темная тема`,onChange:()=>{}}};const o={render:function(){let[e,t]=(0,n.useState)(!1);return(0,r.jsx)(i,{checked:e,onChange:t,ariaLabel:`Темная тема`})}},s={render:function(){let[e,t]=(0,n.useState)(!0);return(0,r.jsx)(`div`,{style:{width:280},children:(0,r.jsx)(i,{label:`Уведомления об изменениях расписания`,checked:e,onChange:t})})}},c={render:function(){let[e,t]=(0,n.useState)(!0),[a,o]=(0,n.useState)(!0);return(0,r.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,r.jsx)(i,{size:`sm`,checked:e,onChange:t,ariaLabel:`Маленький`}),(0,r.jsx)(i,{size:`md`,checked:a,onChange:o,ariaLabel:`Стандартный`})]})}},l={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,r.jsx)(i,{checked:!1,onChange:()=>{},ariaLabel:`Выключен`,disabled:!0}),(0,r.jsx)(i,{checked:!0,onChange:()=>{},ariaLabel:`Включен и заблокирован`,disabled:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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