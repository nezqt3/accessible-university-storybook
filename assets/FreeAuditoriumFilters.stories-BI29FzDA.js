import"./preload-helper-DGWYlufl.js";import"./useTranslation-j5FBGlJS.js";import{S as e,t}from"./iframe-c-OIrLS8.js";import"./react-dom-Cw2-PvM9.js";import"./Schedule-BJApNQWq.js";import{r as n}from"./chunk-OE4NN4TA-CdnJ8bPO.js";import"./createLucideIcon-8Ffxof8e.js";import"./check-DoOfqcKO.js";import"./chevron-down-Dxa33kCK.js";import"./chevron-right-C8yZ6lzA.js";import"./map-pin-CDcesRUD.js";import"./search-B7zQheus.js";import"./x-Dvjhwf7E.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-MNXeDu62.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-EQk2MPKp.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-D_FdkAUH.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-BQqvXL8J.js";import"./Pressable-Bg3DDMfh.js";import"./proxy-BvZS6H3-.js";import"./ModalOverlay-B6h2OEHz.js";import"./use-reduced-motion-CNeWwIr3.js";import"./Card-DpUSDnGA.js";import"./Card-DdYWmRlF.js";import"./Typography-MScSgUfP.js";import"./Typography-BY-iGFVZ.js";import{t as r}from"./EmptyState-DMJiVpfI.js";import"./EmptyState-Crwa2nqk.js";import"./Skeleton-B4TsMn43.js";import"./Skeleton-BWjh8IIH.js";import"./FormField-D0o-kvvY.js";import"./FormField-00r7ntwY.js";import"./Input-Dpu-mFMX.js";import"./Input-_61HGnzM.js";import"./Select-DSUd0bAo.js";import"./Modal-Dq0yBvfL.js";import"./ModalHeader-CNf4knG0.js";import"./ModalHeader-D9TyazZT.js";import"./Select-CG-csOjS.js";import"./Tabs-qAJZKi9y.js";import"./Tabs-BaxcPDxC.js";import"./ListRow-C3MVJJur.js";import"./ListRow-DjGVjjMg.js";import"./lessonTime-Du7PbfEL.js";import"./mapNavigation-hpb-yWdq.js";import"./AuditoriumMapLink-CTWEpVin.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-C9cFJ_Bi.js";import{t as c}from"./scheduleSearch.fixtures-CmYS6TMy.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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