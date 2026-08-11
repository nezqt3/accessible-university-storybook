import{n as e,t}from"./iframe-BTz4hujj.js";import{t as n}from"./createLucideIcon-DcKLIXY8.js";import{t as r}from"./FormField-DjQaxpZJ.js";var i=n(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),a=e(),o=t();const s=(0,a.forwardRef)(function({label:e,error:t,helperText:n,options:s,placeholder:c,wrapperClassName:l,id:u,className:d=``,required:f,children:p,...m},h){let g=(0,a.useId)(),_=u??`ui-select-${g}`,v=t||n?`${_}-description`:void 0,y=!p&&(s?.length??0)===0;return(0,o.jsx)(r,{htmlFor:_,label:e,required:f,error:t,helperText:n,descriptionId:v,className:l,children:(0,o.jsxs)(`span`,{className:[`ui-select`,d].filter(Boolean).join(` `),children:[(0,o.jsxs)(`select`,{...m,ref:h,id:_,required:f,disabled:m.disabled||y,className:`ui-field-control ui-select__control`,"aria-invalid":t?!0:void 0,"aria-describedby":v,children:[c?(0,o.jsx)(`option`,{value:``,disabled:!0,children:c}):null,y?(0,o.jsx)(`option`,{value:``,disabled:!0,children:`Нет доступных вариантов`}):null,s?.map(e=>(0,o.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value)),p]}),(0,o.jsx)(`span`,{className:`ui-select__chevron`,"aria-hidden":`true`,children:(0,o.jsx)(i,{size:18})})]})})});s.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},options:{required:!1,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:`Список опций; альтернатива — children с <option>`},placeholder:{required:!1,tsType:{name:`string`},description:`Текст плейсхолдер-опции (рендерится disabled)`},wrapperClassName:{required:!1,tsType:{name:`string`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`SelectHTMLAttributes`]};var c=[{value:`corpus1`,label:`Главный корпус`},{value:`corpus2`,label:`Корпус №2`},{value:`library`,label:`Библиотека`},{value:`dorm`,label:`Общежитие`}],l={title:`UI/Select`,component:s,parameters:{layout:`padded`},args:{label:`Корпус`,options:c,defaultValue:`corpus1`}};const u={},d={args:{placeholder:`Выберите корпус`,defaultValue:``}},f={args:{error:`Выберите корпус из списка`,defaultValue:``,placeholder:`Выберите корпус`}},p={args:{disabled:!0}},m={args:{options:[],defaultValue:void 0,helperText:`Опции не загружены`}},h={render:function(){let[e,t]=(0,a.useState)(`corpus1`);return(0,o.jsx)(s,{label:`Корпус`,options:c,value:e,helperText:`Выбрано: ${c.find(t=>t.value===e)?.label}`,onChange:e=>t(e.target.value)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Выберите корпус",
    defaultValue: ""
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Выберите корпус из списка",
    defaultValue: "",
    placeholder: "Выберите корпус"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    defaultValue: undefined,
    helperText: "Опции не загружены"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState("corpus1");
    return <Select label="Корпус" options={buildings} value={value} helperText={\`Выбрано: \${buildings.find(item => item.value === value)?.label}\`} onChange={event => setValue(event.target.value)} />;
  }
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`WithPlaceholder`,`Error`,`Disabled`,`EmptyOptions`,`Controlled`];export{h as Controlled,u as Default,p as Disabled,m as EmptyOptions,f as Error,d as WithPlaceholder,g as __namedExportsOrder,l as default};