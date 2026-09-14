import{t as e}from"./iframe-Ow4Lrb8m.js";import{t}from"./FormField-l9e-dAxF.js";var n={title:`Primitives/FormField`,component:t,parameters:{layout:`padded`,docs:{description:{component:`Каркас кастомного поля: связывает label с контролом и резервирует место для helper/error. Input, Select и Textarea используют тот же паттерн.`}}},args:{htmlFor:`storybook-custom-field`,label:`Номер зачётной книжки`,helperText:`Указан в профиле студента`,children:(0,e().jsx)(`input`,{id:`storybook-custom-field`,className:`ui-field-control`,style:{minHeight:`var(--ui-control-height-md)`,paddingInline:`var(--ui-space-3)`},placeholder:`123456`})}};const r={},i={args:{required:!0}},a={args:{error:`Поле заполнено неверно`,helperText:void 0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Поле заполнено неверно",
    helperText: undefined
  }
}`,...a.parameters?.docs?.source}}};const o=[`Default`,`Required`,`Error`];export{r as Default,a as Error,i as Required,o as __namedExportsOrder,n as default};