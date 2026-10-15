import"./preload-helper-DGWYlufl.js";import"./useTranslation-DYjPHpZM.js";import{S as e,t}from"./iframe-8nZf5U1I.js";import"./react-dom-Bhq1aSFJ.js";import"./Schedule-CcBJWk1K.js";import{i as n}from"./chunk-OE4NN4TA-D8eTBeQe.js";import"./createLucideIcon-Ds0JKKWX.js";import"./check-DvkBxtBL.js";import"./chevron-down-BpbPqpa0.js";import"./chevron-right-KFJgsc3Z.js";import"./map-pin-D7lqga1S.js";import"./search-DOLlTMC_.js";import"./x-DenKBl5n.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BWaRkYpR.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-BaMHE2r4.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BrCg84PT.js";import"./CloseButton-QYicOSXf.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-CaL2LUCh.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-C3jQMH2T.js";import"./ModalOverlay-fciGF-o6.js";import"./LoaderTransitionContext-B4qziF8m.js";import"./Card-cNktQ2pm.js";import"./Card-Doq15t3c.js";import"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import{t as r}from"./EmptyState-DjfjB-Od.js";import"./EmptyState-02ql18bx.js";import"./Skeleton-ZVZjhN6L.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-HI2u-NGi.js";import"./FormField-C3pULiZ3.js";import"./Input-aN1otRzO.js";import"./Input-DXRPRK1S.js";import"./Select-BLxWlr7i.js";import"./Modal-01-XMwDs.js";import"./ModalHeader-CvKW3Jjd.js";import"./ModalHeader-B5wsWETS.js";import"./Select-BzZ9D2tC.js";import"./Tabs-C3ZyM3u6.js";import"./Tabs-CszNVceh.js";import"./ListRow-C87WjtGT.js";import"./ListRow-BtepeKeJ.js";import"./lessonTime-Cw9t6lsz.js";import"./mapNavigation-RCVpiUGV.js";import"./AuditoriumMapLink-DPpoih8e.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-COCn7bQs.js";import{t as c}from"./scheduleSearch.fixtures-5_W0gzch.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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