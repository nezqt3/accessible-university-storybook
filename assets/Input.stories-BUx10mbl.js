import{i as e,t}from"./iframe-CibmaNwd.js";import{t as n}from"./createLucideIcon-Bn5oGW7J.js";import{t as r}from"./search-DqTaW1qB.js";import{t as i}from"./FormField-DK2gGVIf.js";import"./FormField-UnJj622l.js";var a=n(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),o=e(),s=t();const c=(0,o.forwardRef)(function({label:e,error:t,helperText:n,iconLeft:r,actionRight:a,fieldSize:c=`md`,wrapperClassName:l,id:u,className:d=``,required:f,...p},m){let h=(0,o.useId)(),g=u??`ui-input-${h}`,_=t||n?`${g}-description`:void 0;return(0,s.jsx)(i,{htmlFor:g,label:e,required:f,error:t,helperText:n,descriptionId:_,className:l,children:(0,s.jsxs)(`span`,{className:[`ui-input`,`ui-input--${c}`,r?`ui-input--with-icon`:``,a?`ui-input--with-action`:``,d].filter(Boolean).join(` `),children:[r?(0,s.jsx)(`span`,{className:`ui-input__icon`,"aria-hidden":`true`,children:r}):null,(0,s.jsx)(`input`,{...p,ref:m,id:g,required:f,className:`ui-field-control ui-input__control`,"aria-invalid":t?!0:void 0,"aria-describedby":_}),a?(0,s.jsx)(`span`,{className:`ui-input__action`,children:a}):null]})})});c.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},iconLeft:{required:!1,tsType:{name:`ReactNode`},description:``},actionRight:{required:!1,tsType:{name:`ReactNode`},description:``},fieldSize:{required:!1,tsType:{name:`union`,raw:`"md" | "lg"`,elements:[{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Размер контрола: md 44px, lg 48px`,defaultValue:{value:`"md"`,computed:!1}},wrapperClassName:{required:!1,tsType:{name:`string`},description:`className внешней обертки поля`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`InputHTMLAttributes`]};var l={title:`UI/Input`,component:c,parameters:{layout:`padded`,docs:{description:{component:`Текстовое поле с общей разметкой label, helper/error и иконками. Передаёт стандартные HTML-атрибуты input.`}}},args:{label:`Email`,placeholder:`Введите email`}};const u={},d={args:{helperText:`Используйте корпоративную почту`}},f={args:{error:`Некорректный email`,defaultValue:`user@`}},p={args:{disabled:!0,defaultValue:`user@university.ru`}},m={args:{required:!0}},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsx)(c,{label:`Логин`,placeholder:`Логин или почта`,iconLeft:(0,s.jsx)(a,{size:18})}),(0,s.jsx)(c,{label:`Поиск`,type:`search`,placeholder:`Найти ресурс`,iconLeft:(0,s.jsx)(r,{size:18})})]})},g={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsx)(c,{label:`Размер md`,placeholder:`44px`,fieldSize:`md`}),(0,s.jsx)(c,{label:`Размер lg`,placeholder:`48px`,fieldSize:`lg`})]})},_={render:function(){let[e,t]=(0,o.useState)(``);return(0,s.jsx)(c,{label:`Email`,placeholder:`Введите email`,value:e,error:e.length>0&&!e.includes(`@`)?`Нужен символ @`:void 0,helperText:`Подсказка исчезает при ошибке`,onChange:e=>t(e.target.value)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "Используйте корпоративную почту"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Некорректный email",
    defaultValue: "user@"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "user@university.ru"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Логин" placeholder="Логин или почта" iconLeft={<User size={18} />} />
      <Input label="Поиск" type="search" placeholder="Найти ресурс" iconLeft={<Search size={18} />} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Размер md" placeholder="44px" fieldSize="md" />
      <Input label="Размер lg" placeholder="48px" fieldSize="lg" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState("");
    const error = value.length > 0 && !value.includes("@") ? "Нужен символ @" : undefined;
    return <Input label="Email" placeholder="Введите email" value={value} error={error} helperText="Подсказка исчезает при ошибке" onChange={event => setValue(event.target.value)} />;
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`WithHelperText`,`Error`,`Disabled`,`Required`,`WithIcon`,`Sizes`,`Controlled`];export{_ as Controlled,u as Default,p as Disabled,f as Error,m as Required,g as Sizes,d as WithHelperText,h as WithIcon,v as __namedExportsOrder,l as default};