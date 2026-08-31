import"./useTranslation-sVHVO_Qe.js";import{o as e,t}from"./iframe-C2TMhgpW.js";import"./react-dom-BTL4yL8g.js";import"./createLucideIcon-FeGR8gI-.js";import"./check-C6dm6nZa.js";import{t as n}from"./Select-DwTFOMVj.js";import"./search-BMH1t3Xf.js";import"./IconButton-Bc-x9w7d.js";import"./InlineSpinner-B8Lj1vR8.js";import"./InlineSpinner-D-yUgJTS.js";import"./CloseButton-BDoB7VXo.js";import"./ModalVariants-CMDN034p.js";import"./proxy-CcVOb4qJ.js";import"./Modal-m0gwBJUB.js";import"./CloseButton-B0UpMFpm.js";import"./ModalHeader-kCJtIR_v.js";import"./ModalHeader-mPNiZXgr.js";import"./FormField-DfmXYCG3.js";import"./FormField-BwUOpWoX.js";import"./Input-B0Fis-fK.js";var r=e(),i=t(),a=[{value:`corpus1`,label:`Главный корпус`},{value:`corpus2`,label:`Корпус №2`},{value:`library`,label:`Библиотека`},{value:`dorm`,label:`Общежитие`}],o={title:`UI/Select`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Адаптивный выбор из списка: красивый dropdown на desktop и mobile bottom sheet на телефоне. Сохраняет нативное form/onChange API, поддерживает placeholder, helper/error и disabled-опции.`}}},args:{label:`Корпус`,options:a,defaultValue:`corpus1`}};const s={},c={args:{placeholder:`Выберите корпус`,defaultValue:``}},l={args:{error:`Выберите корпус из списка`,defaultValue:``,placeholder:`Выберите корпус`}},u={args:{disabled:!0}},d={args:{options:[],defaultValue:void 0,helperText:`Опции не загружены`}},f={render:function(){let[e,t]=(0,r.useState)(`corpus1`);return(0,i.jsx)(n,{label:`Корпус`,options:a,value:e,helperText:`Выбрано: ${a.find(t=>t.value===e)?.label}`,onChange:e=>t(e.target.value)})}},p={args:{options:[...a,{value:`archive`,label:`Архивный корпус`,disabled:!0}]}},m={args:{searchable:!0,searchPlaceholder:`Найти корпус`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Выберите корпус",
    defaultValue: ""
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Выберите корпус из списка",
    defaultValue: "",
    placeholder: "Выберите корпус"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    defaultValue: undefined,
    helperText: "Опции не загружены"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState("corpus1");
    return <Select label="Корпус" options={buildings} value={value} helperText={\`Выбрано: \${buildings.find(item => item.value === value)?.label}\`} onChange={event => setValue(event.target.value)} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: [...buildings, {
      value: "archive",
      label: "Архивный корпус",
      disabled: true
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    searchPlaceholder: "Найти корпус"
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`WithPlaceholder`,`Error`,`Disabled`,`EmptyOptions`,`Controlled`,`WithDisabledOption`,`Searchable`];export{f as Controlled,s as Default,u as Disabled,d as EmptyOptions,l as Error,m as Searchable,p as WithDisabledOption,c as WithPlaceholder,h as __namedExportsOrder,o as default};