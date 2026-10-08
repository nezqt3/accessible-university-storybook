import"./preload-helper-DGWYlufl.js";import"./useTranslation-eDAlq15L.js";import{S as e,t}from"./iframe-CmBlaoL5.js";import"./react-dom-C20388Je.js";import"./Schedule-BJApNQWq.js";import{n}from"./chunk-OE4NN4TA-um6Alu-_.js";import"./createLucideIcon-xVjI36Up.js";import"./check-D8NoSuSL.js";import"./chevron-down-DGrjA0Qi.js";import"./chevron-right-DIU5HY7U.js";import"./map-pin-DWPsGKpe.js";import"./search-BMroy_Ql.js";import"./x-D2llTaRH.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BQkqwLS5.js";import"./InlineSpinner-CtERaFhk.js";import"./IconButton-7ym-EM3C.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-D44lpI2E.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-BCRUH-HG.js";import"./Pressable-4oYskg3v.js";import"./proxy-CdotowUO.js";import"./ModalOverlay-DZH1wCO3.js";import"./use-reduced-motion-Cj8PTyoc.js";import"./Card-lFxmNmMK.js";import"./Card-DMf2-Jiv.js";import"./Typography-CcbGFH53.js";import"./Typography-Q4VDshPG.js";import{t as r}from"./EmptyState-DH2UxVED.js";import"./EmptyState-Q6WzCJvL.js";import"./Skeleton-D22MI1Di.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-6mKwwxb-.js";import"./FormField-DI1mxX-F.js";import"./Input-ttMuKZ_h.js";import"./Input-BJFMwxMd.js";import"./Select-DiW7w1v7.js";import"./Modal-B_kGhp1g.js";import"./ModalHeader-Dad9yihs.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Tabs-yM_j3Fym.js";import"./Tabs-wkaJQrPk.js";import"./ListRow-DHNW6PFT.js";import"./ListRow-B7yOQXqt.js";import"./lessonTime-B6eu231o.js";import"./mapNavigation-CkiNtXgO.js";import"./AuditoriumMapLink-C3b8KunI.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-B1G_1-MU.js";import{t as c}from"./scheduleSearch.fixtures-CMF6KSzI.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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