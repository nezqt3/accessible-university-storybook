import"./useTranslation-Bqh59kuu.js";import{S as e,t}from"./iframe-D0TFUEDL.js";import"./createLucideIcon-cfOq0vGI.js";import"./chevron-left-RsmW0QNo.js";import"./chevron-right-BRcPHbCp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import{t as n}from"./Pagination-C-Ag5T0o.js";var r=e(),i=t(),a={title:`Navigation/Pagination`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Компактная навигация назад/вперёд для страниц и временных периодов. Доступность переходов управляется отдельными флагами.`}}},args:{label:`Страница 1 из 5`,canGoPrevious:!1,canGoNext:!0,onPrevious:()=>{},onNext:()=>{}}};const o={render:function(){let[e,t]=(0,r.useState)(1);return(0,i.jsx)(n,{label:`Страница ${e} из 5`,canGoPrevious:e>1,canGoNext:e<5,onPrevious:()=>t(e=>e-1),onNext:()=>t(e=>e+1)})}},s={args:{label:`Учебный период с 1 сентября по 31 декабря 2026 года`},globals:{textScale:`large`}},c={args:{canGoPrevious:!1,canGoNext:!1}},l={...s,globals:{theme:`dark`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample() {
    const [page, setPage] = useState(1);
    return <Pagination label={\`Страница \${page} из 5\`} canGoPrevious={page > 1} canGoNext={page < 5} onPrevious={() => setPage(current => current - 1)} onNext={() => setPage(current => current + 1)} />;
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Учебный период с 1 сентября по 31 декабря 2026 года"
  },
  globals: {
    textScale: "large"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    canGoPrevious: false,
    canGoNext: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LongLabel,
  globals: {
    theme: "dark"
  }
}`,...l.parameters?.docs?.source}}};const u=[`Interactive`,`LongLabel`,`Disabled`,`Dark`];export{l as Dark,c as Disabled,o as Interactive,s as LongLabel,u as __namedExportsOrder,a as default};