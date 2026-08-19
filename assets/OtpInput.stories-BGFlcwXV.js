import{i as e,t}from"./iframe-sDOIPago.js";var n=e(),r=t();function i(e,t){return e.replace(/\D/g,``).slice(0,t)}const a=(0,n.forwardRef)(function({value:e,onChange:t,onComplete:n,length:a=6,label:o,loading:s=!1,disabled:c,required:l=!0,className:u=``,...d},f){let p=i(e,a),m=Array.from({length:a},(e,t)=>p[t]??``),h=Math.min(p.length,a-1),g=[`ui-otp-input`,s?`ui-otp-input--loading`:``,u].filter(Boolean).join(` `),_=e=>{let r=i(e,a);t(r),r.length===a&&n?.(r)};return(0,r.jsxs)(`label`,{className:g,children:[(0,r.jsx)(`span`,{className:`ui-otp-input__label`,children:o}),(0,r.jsx)(`input`,{...d,ref:f,className:`ui-otp-input__control`,type:`text`,placeholder:d.placeholder??o,value:p,onChange:e=>_(e.target.value),required:l,disabled:c||s,inputMode:`numeric`,pattern:`[0-9]*`,maxLength:a,autoComplete:d.autoComplete??`one-time-code`,"aria-busy":s||void 0}),(0,r.jsx)(`span`,{className:`ui-otp-input__cells`,style:{gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`},"aria-hidden":`true`,children:m.map((e,t)=>(0,r.jsx)(`span`,{className:`ui-otp-input__cell ${e?`ui-otp-input__cell--filled`:``} ${t===h?`ui-otp-input__cell--active`:``}`,style:{animationDelay:`${t*.08}s`},"data-testid":`otp-code-cell`,children:e},t))})]})});a.__docgenInfo={description:``,methods:[],displayName:`OtpInput`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},length:{required:!1,tsType:{name:`number`},description:`Количество цифр в коде.`,defaultValue:{value:`6`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`Анимирует заполненные ячейки во время проверки кода.`,defaultValue:{value:`false`,computed:!1}},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},required:{defaultValue:{value:`true`,computed:!1},required:!1},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var o={title:`UI/OtpInput`,component:a,parameters:{docs:{description:{component:`Поле одноразового цифрового кода с визуальными ячейками. Нормализует ввод, поддерживает произвольную длину, loading и onComplete.`}}},args:{value:``,onChange:()=>{},label:`Код подтверждения`,length:6}};const s={render:function(e){let[t,i]=(0,n.useState)(``);return(0,r.jsx)(a,{...e,value:t,onChange:i})}},c={args:{value:`250569`}},l={args:{value:`250569`,loading:!0}},u={args:{value:`12`,length:4}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [value, setValue] = useState("");
    return <OtpInput {...args} value={value} onChange={setValue} />;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: "250569"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: "250569",
    loading: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: "12",
    length: 4
  }
}`,...u.parameters?.docs?.source}}};const d=[`Interactive`,`Filled`,`Loading`,`FourDigits`];export{c as Filled,u as FourDigits,s as Interactive,l as Loading,d as __namedExportsOrder,o as default};