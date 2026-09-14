import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import{t as n}from"./search-0-f7zWZu.js";import{t as r}from"./user-ClfCE6vH.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import{t as i}from"./Input-Aczuq6Jz.js";var a=t(),o=e(),s={title:`Primitives/Input`,component:i,parameters:{layout:`padded`,docs:{description:{component:`Текстовое поле с общей разметкой label, helper/error и иконками. Передаёт стандартные HTML-атрибуты input.`}}},args:{label:`Email`,placeholder:`Введите email`}};const c={},l={args:{helperText:`Используйте корпоративную почту`}},u={args:{error:`Некорректный email`,defaultValue:`user@`}},d={args:{disabled:!0,defaultValue:`user@university.ru`}},f={args:{required:!0}},p={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,o.jsx)(i,{label:`Логин`,placeholder:`Логин или почта`,iconLeft:(0,o.jsx)(r,{size:18})}),(0,o.jsx)(i,{label:`Поиск`,type:`search`,placeholder:`Найти ресурс`,iconLeft:(0,o.jsx)(n,{size:18})})]})},m={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,o.jsx)(i,{label:`Размер md`,placeholder:`44px`,fieldSize:`md`}),(0,o.jsx)(i,{label:`Размер lg`,placeholder:`48px`,fieldSize:`lg`})]})},h={render:function(){let[e,t]=(0,a.useState)(``);return(0,o.jsx)(i,{label:`Email`,placeholder:`Введите email`,value:e,error:e.length>0&&!e.includes(`@`)?`Нужен символ @`:void 0,helperText:`Подсказка исчезает при ошибке`,onChange:e=>t(e.target.value)})}},g={play:async({canvasElement:e})=>{e.querySelector(`input`)?.focus()}},_={args:{defaultValue:`student@university.ru`}},v={args:{label:`Подразделение`,defaultValue:`Институт международных отношений и социально-политических наук — учебно-методический отдел`},globals:{textScale:`large`}},y={render:e=>(0,o.jsx)(`div`,{style:{overflow:`hidden`},children:(0,o.jsx)(i,{...e})}),play:g.play},b={globals:{theme:`dark`}},x={args:{error:`Проверьте введённое значение`,defaultValue:`user@`},play:g.play},S={args:{"aria-invalid":!0,defaultValue:`Значение, которое требует проверки`},play:g.play},C={args:{type:`file`,label:`Фото найденной вещи`,accept:`image/*`,multiple:!0}},w={...C,args:{...C.args,disabled:!0}},T={...C,globals:{theme:`dark`,textScale:`large`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "Используйте корпоративную почту"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Некорректный email",
    defaultValue: "user@"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "user@university.ru"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Логин" placeholder="Логин или почта" iconLeft={<User size={18} />} />
      <Input label="Поиск" type="search" placeholder="Найти ресурс" iconLeft={<Search size={18} />} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Размер md" placeholder="44px" fieldSize="md" />
      <Input label="Размер lg" placeholder="48px" fieldSize="lg" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState("");
    const error = value.length > 0 && !value.includes("@") ? "Нужен символ @" : undefined;
    return <Input label="Email" placeholder="Введите email" value={value} error={error} helperText="Подсказка исчезает при ошибке" onChange={event => setValue(event.target.value)} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "student@university.ru"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Подразделение",
    defaultValue: "Институт международных отношений и социально-политических наук — учебно-методический отдел"
  },
  globals: {
    textScale: "large"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    overflow: "hidden"
  }}>
      <Input {...args} />
    </div>,
  play: Focused.play
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Проверьте введённое значение",
    defaultValue: "user@"
  },
  play: Focused.play
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    defaultValue: "Значение, которое требует проверки"
  },
  play: Focused.play
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: "file",
    label: "Фото найденной вещи",
    accept: "image/*",
    multiple: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...FileUpload,
  args: {
    ...FileUpload.args,
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...FileUpload,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...T.parameters?.docs?.source}}};const E=[`Default`,`WithHelperText`,`Error`,`Disabled`,`Required`,`WithIcon`,`Sizes`,`Controlled`,`Focused`,`Filled`,`LongValue`,`FocusInsideClippedParent`,`Dark`,`ErrorFocused`,`ExternalInvalidState`,`FileUpload`,`FileUploadDisabled`,`FileUploadDark`];export{h as Controlled,b as Dark,c as Default,d as Disabled,u as Error,x as ErrorFocused,S as ExternalInvalidState,C as FileUpload,T as FileUploadDark,w as FileUploadDisabled,_ as Filled,y as FocusInsideClippedParent,g as Focused,v as LongValue,f as Required,m as Sizes,l as WithHelperText,p as WithIcon,E as __namedExportsOrder,s as default};