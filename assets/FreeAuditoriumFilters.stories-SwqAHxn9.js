import"./preload-helper-DGWYlufl.js";import"./useTranslation-D-aU4f03.js";import{S as e,t}from"./iframe-BgC4QF32.js";import"./react-dom-CL5saaxG.js";import"./Schedule-CcBJWk1K.js";import{i as n}from"./chunk-OE4NN4TA-COuAeJcs.js";import"./createLucideIcon-B16nweCc.js";import"./check-v_LV27aT.js";import"./chevron-down-B4dP74wr.js";import"./chevron-right-aoKq3O8O.js";import"./map-pin-CDRQKCNy.js";import"./search-DyFcSRiq.js";import"./x-DeThYvLg.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CBIQLgmS.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-CBDZ9vXW.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BOKqPjCS.js";import"./CloseButton-CKC4LnPI.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-Ba55c0wK.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-BiSVJF6j.js";import"./ModalOverlay-Ds_UD4_I.js";import"./LoaderTransitionContext-DKcwLzlE.js";import"./Card-DpZ30Oxq.js";import"./Card-Doq15t3c.js";import"./Typography-BH1B6yTK.js";import"./Typography-DVvNjpAw.js";import{t as r}from"./EmptyState-DdzQWQcl.js";import"./EmptyState-02ql18bx.js";import"./Skeleton-ClEm9rfE.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-WG2VqsSE.js";import"./FormField-C3pULiZ3.js";import"./Input-D15hzeKy.js";import"./Input-DXRPRK1S.js";import"./Select-CcxXoXzd.js";import"./Modal-BPyHJU71.js";import"./ModalHeader-BRUlOqff.js";import"./ModalHeader-B5wsWETS.js";import"./Select-BzZ9D2tC.js";import"./Tabs-BWYKDmLJ.js";import"./Tabs-CszNVceh.js";import"./ListRow-B-Lf12yO.js";import"./ListRow-BtepeKeJ.js";import"./lessonTime-Cw9t6lsz.js";import"./mapNavigation-RCVpiUGV.js";import"./AuditoriumMapLink-BjjIKZUo.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-DtvAWj2y.js";import{t as c}from"./scheduleSearch.fixtures-5_W0gzch.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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