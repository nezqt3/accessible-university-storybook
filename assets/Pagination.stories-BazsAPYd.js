import"./useTranslation-CZVpUEvE.js";import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import"./chevron-left-jM3I3WFd.js";import"./chevron-right-rKwtEkxp.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import{t as n}from"./Pagination-ByEHeK5Q.js";var r=t(),i=e(),a={title:`Navigation/Pagination`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Компактная навигация назад/вперёд для страниц и временных периодов. Доступность переходов управляется отдельными флагами.`}}},args:{label:`Страница 1 из 5`,canGoPrevious:!1,canGoNext:!0,onPrevious:()=>{},onNext:()=>{}}};const o={render:function(){let[e,t]=(0,r.useState)(1);return(0,i.jsx)(n,{label:`Страница ${e} из 5`,canGoPrevious:e>1,canGoNext:e<5,onPrevious:()=>t(e=>e-1),onNext:()=>t(e=>e+1)})}},s={args:{label:`Учебный период с 1 сентября по 31 декабря 2026 года`},globals:{textScale:`large`}},c={args:{canGoPrevious:!1,canGoNext:!1}},l={...s,globals:{theme:`dark`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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