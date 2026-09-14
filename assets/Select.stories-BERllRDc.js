import"./useTranslation-Ch5uCjQR.js";import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./react-dom-BH_8jEOt.js";import"./createLucideIcon-Cqzfk4mC.js";import"./check-CsOPYwak.js";import"./chevron-down-mIZNdmnO.js";import"./search-DCwDsx76.js";import"./x-aIX4-Ysv.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./IconButton-brlandGx.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-Dlth1W31.js";import"./CloseButton-DuLuJ11g.js";import"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./proxy-Dnaxw7vE.js";import"./ModalOverlay-DsbVphhP.js";import"./use-reduced-motion-D1xf7gmi.js";import"./FormField-DMSh2HXx.js";import"./FormField-Dm-RTxrN.js";import"./Input-DXvu1Y6H.js";import"./Input-CZx1ckHV.js";import{t as n}from"./Select-DGahYBpE.js";import"./Modal-BNO3joPp.js";import"./ModalHeader-BBxKWgyV.js";import"./ModalHeader-CxQ2g3I2.js";var r=t(),i=e(),a=[{value:`corpus1`,label:`Главный корпус`},{value:`corpus2`,label:`Корпус №2`},{value:`library`,label:`Библиотека`},{value:`dorm`,label:`Общежитие`}],o={title:`Primitives/Select`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Адаптивный выбор из списка: красивый dropdown на desktop и mobile bottom sheet на телефоне. Сохраняет нативное form/onChange API, поддерживает placeholder, helper/error и disabled-опции.`}}},args:{label:`Корпус`,options:a,defaultValue:`corpus1`}};const s={},c={args:{placeholder:`Выберите корпус`,defaultValue:``}},l={args:{error:`Выберите корпус из списка`,defaultValue:``,placeholder:`Выберите корпус`}},u={args:{disabled:!0}},d={args:{options:[],defaultValue:void 0,helperText:`Опции не загружены`}},f={render:function(){let[e,t]=(0,r.useState)(`corpus1`);return(0,i.jsx)(n,{label:`Корпус`,options:a,value:e,helperText:`Выбрано: ${a.find(t=>t.value===e)?.label}`,onChange:e=>t(e.target.value)})}},p={args:{options:[...a,{value:`archive`,label:`Архивный корпус`,disabled:!0}]}},m={args:{searchable:!0,searchPlaceholder:`Найти корпус`}},h={args:{label:`Подразделение`,options:[{value:`long`,label:`Департамент информационных технологий и комплексной защиты информации`},{value:`other`,label:`Институт международных отношений и социально-политических наук`}],defaultValue:`long`},globals:{textScale:`large`}},g={play:async({canvasElement:e})=>{e.querySelector(`[role=combobox]`)?.focus()}},_={...h,globals:{theme:`dark`}},v={play:async({canvasElement:e})=>{e.querySelector(`[role=combobox]`)?.click()}},y={...v,args:{label:`Подразделение`,searchable:!0,options:Array.from({length:16},(e,t)=>({value:`department-${t}`,label:`Подразделение ${t+1}: международные отношения, прикладные информационные технологии и комплексная защита информации`})),defaultValue:`department-0`},globals:{textScale:`large`}},b={...y,globals:{theme:`dark`,textScale:`large`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Подразделение",
    options: [{
      value: "long",
      label: "Департамент информационных технологий и комплексной защиты информации"
    }, {
      value: "other",
      label: "Институт международных отношений и социально-политических наук"
    }],
    defaultValue: "long"
  },
  globals: {
    textScale: "large"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>("[role=combobox]")?.focus();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LongSelectedValue,
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>("[role=combobox]")?.click();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...OpenOptions,
  args: {
    label: "Подразделение",
    searchable: true,
    options: Array.from({
      length: 16
    }, (_, index) => ({
      value: \`department-\${index}\`,
      label: \`Подразделение \${index + 1}: международные отношения, прикладные информационные технологии и комплексная защита информации\`
    })),
    defaultValue: "department-0"
  },
  globals: {
    textScale: "large"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...LongOptions,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...b.parameters?.docs?.source}}};const x=[`Default`,`WithPlaceholder`,`Error`,`Disabled`,`EmptyOptions`,`Controlled`,`WithDisabledOption`,`Searchable`,`LongSelectedValue`,`Focused`,`Dark`,`OpenOptions`,`LongOptions`,`DarkOptions`];export{f as Controlled,_ as Dark,b as DarkOptions,s as Default,u as Disabled,d as EmptyOptions,l as Error,g as Focused,y as LongOptions,h as LongSelectedValue,v as OpenOptions,m as Searchable,p as WithDisabledOption,c as WithPlaceholder,x as __namedExportsOrder,o as default};