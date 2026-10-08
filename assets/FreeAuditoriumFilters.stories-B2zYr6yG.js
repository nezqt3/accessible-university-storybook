import"./preload-helper-DGWYlufl.js";import"./useTranslation-9RT7qr1b.js";import{S as e,t}from"./iframe-DG2KGKvW.js";import"./react-dom-DYmj885q.js";import"./Schedule-BJApNQWq.js";import{n}from"./chunk-OE4NN4TA-C8HTGYng.js";import"./createLucideIcon-Bfb3zjcZ.js";import"./check-jxQiSG7z.js";import"./chevron-down-CM0IdifV.js";import"./chevron-right-DnGIDjZL.js";import"./map-pin-CPa8RuRl.js";import"./search-BBrnI3wn.js";import"./x-Bq7Qs63O.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CsT_IW0V.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-vYycdSgE.js";import"./Pressable-4oYskg3v.js";import"./proxy-BICjNce_.js";import"./ModalOverlay-W5r53p_K.js";import"./use-reduced-motion-CWStJdJS.js";import"./Card-aXTNdhwn.js";import"./Card-DMf2-Jiv.js";import"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import{t as r}from"./EmptyState-CgaiwTJ_.js";import"./EmptyState-Q6WzCJvL.js";import"./Skeleton-BTTl52FZ.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-CpUC9iGn.js";import"./FormField-DI1mxX-F.js";import"./Input-BgmiqVwQ.js";import"./Input-BJFMwxMd.js";import"./Select-D25JOtSA.js";import"./Modal-BDb8M2bR.js";import"./ModalHeader-7ahH-fNQ.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Tabs-B9B7rgPq.js";import"./Tabs-wkaJQrPk.js";import"./ListRow-DN8pCi1O.js";import"./ListRow-B7yOQXqt.js";import"./lessonTime-B6eu231o.js";import"./mapNavigation-CkiNtXgO.js";import"./AuditoriumMapLink-BZABvdHI.js";import{n as i,r as a,s as o,t as s}from"./GroupSearchModal-yxR8lned.js";import{t as c}from"./scheduleSearch.fixtures-CMF6KSzI.js";var l=e(),u=t();function d({state:e=`default`}){let[t,n]=(0,l.useState)(``),[d,f]=(0,l.useState)(e===`custom`?`custom`:`today`),[p,m]=(0,l.useState)(e===`selected-building`?`storybook-building`:`__all-buildings__`),[h,g]=(0,l.useState)(new Set([`storybook-building`])),_=[...c,{...c[0],id:`storybook-building-2`,abbr:`ЛП49/2`,name:`Ленинградский проспект, 49/2`,address:`Москва, Ленинградский проспект, 49/2`,auditoriums:c[0].auditoriums.map(e=>({...e,id:`${e.id}-second-building`}))}],v=[{value:`__all-buildings__`,label:`Все корпуса`},..._.map((e,t)=>({value:o(e,t),label:e.abbr&&e.name?`${e.abbr} · ${e.name}`:e.name||`Корпус`}))],y=p===`__all-buildings__`?_:_.filter((e,t)=>o(e,t)===p);return(0,u.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,u.jsx)(i,{auditorium:t,onAuditoriumChange:n,datePreset:d,customDateLabel:`11 сент.`,onDatePresetChange:f,building:p,buildingOptions:v,onBuildingChange:e=>{m(e),g(e===`__all-buildings__`?new Set:new Set([e]))}}),e===`loading`?(0,u.jsx)(s,{}):e===`empty`?(0,u.jsx)(r,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или выберите другой день.`}):e===`error`?(0,u.jsx)(r,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,u.jsx)(a,{buildings:y,selectedDate:`2026-09-11`,expandedBuildings:h,onSelect:()=>{},onToggle:e=>g(t=>t.has(e)?new Set:new Set([e])),displayMode:p===`__all-buildings__`?`grouped`:`rooms`})]})}var f={title:`Schedule/FreeAuditoriums`,component:d,parameters:{layout:`padded`},decorators:[e=>(0,u.jsx)(n,{children:(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})})]};const p={},m={args:{state:`selected-building`}},h={args:{state:`custom`}},g={args:{state:`loading`}},_={args:{state:`empty`}},v={args:{state:`error`}},y={parameters:{viewport:{defaultViewport:`smallMobile`}}},b={...h,globals:{theme:`dark`,textScale:`large`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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