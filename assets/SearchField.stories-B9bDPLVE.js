import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import{t as n}from"./search-0-f7zWZu.js";import{t as r}from"./x-KjvGFWaj.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import{t as i}from"./IconButton-Dpu6CZ7U.js";import"./IconButton-CkfbeZNf.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import{t as a}from"./Input-Aczuq6Jz.js";var o=t(),s=e(),c={title:`Primitives/SearchField`,component:a,parameters:{docs:{description:{component:`Поиск — конфигурация общего Input, а не второй компонент поля. Focus, error, disabled и внутренние отступы задаёт Input/FormField.`}}},args:{type:`search`,"aria-label":`Поиск расписания`,placeholder:`Найти группу или преподавателя`,iconLeft:(0,s.jsx)(n,{})}};const l={},u={play:async({canvasElement:e})=>{e.querySelector(`input`)?.focus()}},d={args:{defaultValue:`ТРПО25-2`}},f={args:{defaultValue:`ТРПО-ИНФОРМАЦИОННЫЕ-СИСТЕМЫ-2026-ВЕЧЕРНЕЕ-ОТДЕЛЕНИЕ-12`},globals:{textScale:`large`}},p={args:{error:`Не удалось выполнить поиск`}},m={args:{disabled:!0}},h={globals:{theme:`dark`},...u},g={render:e=>(0,s.jsx)(`div`,{style:{overflow:`hidden`},children:(0,s.jsx)(a,{...e})}),play:u.play},_={render:function(e){let[t,n]=(0,o.useState)(``);return(0,s.jsx)(a,{...e,value:t,onChange:e=>n(e.target.value),actionRight:t?(0,s.jsx)(i,{size:`sm`,variant:`ghost`,ariaLabel:`Очистить поиск`,onClick:()=>n(``),children:(0,s.jsx)(r,{})}):null})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("input")?.focus();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "ТРПО25-2"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "ТРПО-ИНФОРМАЦИОННЫЕ-СИСТЕМЫ-2026-ВЕЧЕРНЕЕ-ОТДЕЛЕНИЕ-12"
  },
  globals: {
    textScale: "large"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Не удалось выполнить поиск"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  ...Focused
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    overflow: "hidden"
  }}>
      <Input {...args} />
    </div>,
  play: Focused.play
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function SearchExample(args) {
    const [value, setValue] = useState("");
    return <Input {...args} value={value} onChange={event => setValue(event.target.value)} actionRight={value ? <IconButton size="sm" variant="ghost" ariaLabel="Очистить поиск" onClick={() => setValue("")}>
              <X />
            </IconButton> : null} />;
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`Focused`,`Filled`,`LongValue`,`Error`,`Disabled`,`Dark`,`ClippedContainer`,`Interactive`];export{g as ClippedContainer,h as Dark,l as Default,m as Disabled,p as Error,d as Filled,u as Focused,_ as Interactive,f as LongValue,v as __namedExportsOrder,c as default};