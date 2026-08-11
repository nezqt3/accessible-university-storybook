import{i as e,t}from"./iframe-CibmaNwd.js";import{t as n}from"./FormField-DK2gGVIf.js";import"./FormField-UnJj622l.js";var r=e(),i=t();const a=(0,r.forwardRef)(function({label:e,error:t,helperText:a,wrapperClassName:o,id:s,className:c=``,required:l,rows:u=5,...d},f){let p=(0,r.useId)(),m=s??`ui-textarea-${p}`,h=t||a?`${m}-description`:void 0;return(0,i.jsx)(n,{htmlFor:m,label:e,required:l,error:t,helperText:a,descriptionId:h,className:o,children:(0,i.jsx)(`textarea`,{...d,ref:f,id:m,rows:u,required:l,className:[`ui-field-control`,`ui-textarea`,c].filter(Boolean).join(` `),"aria-invalid":t?!0:void 0,"aria-describedby":h})})});a.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},wrapperClassName:{required:!1,tsType:{name:`string`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1},rows:{defaultValue:{value:`5`,computed:!1},required:!1}},composes:[`TextareaHTMLAttributes`]};var o={title:`UI/Textarea`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Многострочное поле с общей разметкой label, helper/error и поддержкой стандартных атрибутов textarea.`}}},args:{label:`Описание`,placeholder:`Например: черный чехол от наушников, оставил в аудитории после пары`}};const s={},c={args:{helperText:`От 3 до 1000 символов`}},l={args:{error:`Описание слишком короткое`,defaultValue:`Че`}},u={args:{disabled:!0,defaultValue:`Недоступно для редактирования`}},d={args:{required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "От 3 до 1000 символов"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Описание слишком короткое",
    defaultValue: "Че"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Недоступно для редактирования"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...d.parameters?.docs?.source}}};const f=[`Default`,`WithHelperText`,`Error`,`Disabled`,`Required`];export{s as Default,u as Disabled,l as Error,d as Required,c as WithHelperText,f as __namedExportsOrder,o as default};