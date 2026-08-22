import{i as e,t}from"./iframe-CZbR_cjA.js";import{t as n}from"./createLucideIcon-Bpzycvdh.js";import{t as r}from"./search-5baPABoq.js";import"./FormField-CbB019fA.js";import"./FormField-DpY-ZWc5.js";import{t as i}from"./Input-CPSHiw0c.js";var a=n(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),o=e(),s=t(),c={title:`UI/Input`,component:i,parameters:{layout:`padded`,docs:{description:{component:`Текстовое поле с общей разметкой label, helper/error и иконками. Передаёт стандартные HTML-атрибуты input.`}}},args:{label:`Email`,placeholder:`Введите email`}};const l={},u={args:{helperText:`Используйте корпоративную почту`}},d={args:{error:`Некорректный email`,defaultValue:`user@`}},f={args:{disabled:!0,defaultValue:`user@university.ru`}},p={args:{required:!0}},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsx)(i,{label:`Логин`,placeholder:`Логин или почта`,iconLeft:(0,s.jsx)(a,{size:18})}),(0,s.jsx)(i,{label:`Поиск`,type:`search`,placeholder:`Найти ресурс`,iconLeft:(0,s.jsx)(r,{size:18})})]})},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,s.jsx)(i,{label:`Размер md`,placeholder:`44px`,fieldSize:`md`}),(0,s.jsx)(i,{label:`Размер lg`,placeholder:`48px`,fieldSize:`lg`})]})},g={render:function(){let[e,t]=(0,o.useState)(``);return(0,s.jsx)(i,{label:`Email`,placeholder:`Введите email`,value:e,error:e.length>0&&!e.includes(`@`)?`Нужен символ @`:void 0,helperText:`Подсказка исчезает при ошибке`,onChange:e=>t(e.target.value)})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "Используйте корпоративную почту"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Некорректный email",
    defaultValue: "user@"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "user@university.ru"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Логин" placeholder="Логин или почта" iconLeft={<User size={18} />} />
      <Input label="Поиск" type="search" placeholder="Найти ресурс" iconLeft={<Search size={18} />} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      <Input label="Размер md" placeholder="44px" fieldSize="md" />
      <Input label="Размер lg" placeholder="48px" fieldSize="lg" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState("");
    const error = value.length > 0 && !value.includes("@") ? "Нужен символ @" : undefined;
    return <Input label="Email" placeholder="Введите email" value={value} error={error} helperText="Подсказка исчезает при ошибке" onChange={event => setValue(event.target.value)} />;
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`WithHelperText`,`Error`,`Disabled`,`Required`,`WithIcon`,`Sizes`,`Controlled`];export{g as Controlled,l as Default,f as Disabled,d as Error,p as Required,h as Sizes,u as WithHelperText,m as WithIcon,_ as __namedExportsOrder,c as default};