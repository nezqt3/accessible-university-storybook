import"./preload-helper-DGWYlufl.js";import"./useTranslation-DT8Kd1QK.js";import{S as e,t}from"./iframe-CG-xQPqP.js";import"./react-dom-D3wgKqEx.js";import"./Schedule-BJApNQWq.js";import{n}from"./chunk-OE4NN4TA-DR_BVhB8.js";import"./createLucideIcon-MKlZX7_p.js";import"./check-X_2Z78iv.js";import"./chevron-down-DcgftUSC.js";import"./chevron-right-BzixqlJ-.js";import"./map-pin-BBhDmzuK.js";import"./search-Ctr6O0mR.js";import"./x-DbUNg-QN.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-DIQt-3z1.js";import"./InlineSpinner-CtERaFhk.js";import"./IconButton-S4AysGu9.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CKyOm4DY.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-CkpGvFN1.js";import"./Pressable-4oYskg3v.js";import"./proxy-Bd5eAUpW.js";import"./ModalOverlay-Chebjwzd.js";import"./use-reduced-motion-Tx53gskP.js";import"./Card-CtL_l-Gn.js";import"./Card-DMf2-Jiv.js";import"./Typography-Cflu5Aq4.js";import"./Typography-Q4VDshPG.js";import{t as r}from"./EmptyState-DiChq990.js";import"./EmptyState-Q6WzCJvL.js";import"./Skeleton-Do7LKvof.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-BMcmZhW3.js";import"./FormField-DI1mxX-F.js";import"./Input-BnrWz7Yx.js";import"./Input-BJFMwxMd.js";import"./Select-tLhRUMAP.js";import"./Modal-BpL2jAih.js";import"./ModalHeader-BDLf5v5F.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Tabs-BYyoW3om.js";import"./Tabs-wkaJQrPk.js";import"./ListRow-ChilnGUc.js";import"./ListRow-B7yOQXqt.js";import"./lessonTime-B6eu231o.js";import"./mapNavigation-DsxmWc7m.js";import"./AuditoriumMapLink-DAUtzm29.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-CvFkVw3j.js";import{t as c}from"./scheduleSearch.fixtures-Dppg_THL.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "selected-building"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "custom"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...CustomDate,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...b.parameters?.docs?.source}}};const x=[`FullDayAndIntervals`,`SelectedBuildingRoomsOnly`,`CustomDate`,`Loading`,`Empty`,`Error`,`CompactMobile`,`DarkLargeText`];export{y as CompactMobile,h as CustomDate,b as DarkLargeText,_ as Empty,v as Error,p as FullDayAndIntervals,g as Loading,m as SelectedBuildingRoomsOnly,x as __namedExportsOrder,f as default};