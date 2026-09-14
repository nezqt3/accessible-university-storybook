import"./FormField-DMSh2HXx.js";import"./FormField-Dm-RTxrN.js";import{t as e}from"./Textarea-B5aSFv_F.js";var t={title:`Primitives/Textarea`,component:e,parameters:{layout:`padded`,docs:{description:{component:`Многострочное поле с общей разметкой label, helper/error и поддержкой стандартных атрибутов textarea.`}}},args:{label:`Описание`,placeholder:`Например: черный чехол от наушников, оставил в аудитории после пары`}};const n={},r={args:{helperText:`От 3 до 1000 символов`}},i={args:{error:`Описание слишком короткое`,defaultValue:`Че`}},a={args:{disabled:!0,defaultValue:`Недоступно для редактирования`}},o={args:{required:!0}},s={globals:{theme:`dark`}},c={args:{defaultValue:`Проектирование распределённых информационных систем управления образовательными процессами. `.repeat(8)},globals:{textScale:`large`}},l={play:async({canvasElement:e})=>{e.querySelector(`textarea`)?.focus()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "От 3 до 1000 символов"
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Описание слишком короткое",
    defaultValue: "Че"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Недоступно для редактирования"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Проектирование распределённых информационных систем управления образовательными процессами. ".repeat(8)
  },
  globals: {
    textScale: "large"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("textarea")?.focus();
  }
}`,...l.parameters?.docs?.source}}};const u=[`Default`,`WithHelperText`,`Error`,`Disabled`,`Required`,`Dark`,`LongValue`,`Focused`];export{s as Dark,n as Default,a as Disabled,i as Error,l as Focused,c as LongValue,o as Required,r as WithHelperText,u as __namedExportsOrder,t as default};