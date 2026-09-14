import"./preload-helper-DGWYlufl.js";import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./Schedule-BJApNQWq.js";import{n}from"./chunk-OE4NN4TA-BQcHIZJi.js";import"./createLucideIcon-Cqzfk4mC.js";import"./calendar-range-BXuR4lgr.js";import"./chevron-down-mIZNdmnO.js";import"./clock-3-paOPI1cY.js";import{n as r,t as i}from"./GroupSearchModal-B_AUjGru.js";import"./map-pin-DxjWGo-S.js";import"./search-DCwDsx76.js";import"./x-aIX4-Ysv.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";import"./IconButton-brlandGx.js";import"./IconButton-CkfbeZNf.js";import"./Pressable-CUg6ryb7.js";import"./Pressable-B92bGPbW.js";import"./Card-BgVtbWy2.js";import"./Card-BTpC5DGf.js";import"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import{t as a}from"./EmptyState-CNjYtTfK.js";import"./EmptyState-Ivo_4GWO.js";import"./Skeleton-DRV_N5cr.js";import"./Skeleton-B4XjFKC-.js";import"./FormField-DMSh2HXx.js";import"./FormField-Dm-RTxrN.js";import"./Input-DXvu1Y6H.js";import"./Input-CZx1ckHV.js";import"./ListRow-BqlvWJF6.js";import"./ListRow-Cq2I6Jbp.js";import"./mapNavigation-Bq0rmwQ6.js";import"./AuditoriumMapLink-CVL7UzVi.js";import{t as o}from"./FreeAuditoriumSearchSkeleton-CsP-ruii.js";import{t as s}from"./scheduleSearch.fixtures-DXoBGUZd.js";var c=t(),l=e();function u({state:e=`default`}){let[t,n]=(0,c.useState)(``),[u,d]=(0,c.useState)(e===`long`),[f,p]=(0,c.useState)(new Set([`storybook-building`])),m=(0,c.useRef)(null);return(0,l.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,l.jsx)(i,{auditorium:t,onAuditoriumChange:n,rangeLabel:u?`11 сентября 2026 года — 30 сентября 2026 года`:`Сегодня`,hasRange:u,isLoading:e===`loading`,periodTriggerRef:m,onOpenPeriod:()=>d(!0),onClearPeriod:()=>d(!1),onSubmit:e=>e.preventDefault()}),e===`loading`?(0,l.jsx)(o,{}):e===`empty`?(0,l.jsx)(a,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или диапазон дат.`}):e===`error`?(0,l.jsx)(a,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,l.jsx)(r,{buildings:s,expandedBuildings:f,onSelect:()=>{},onToggle:e=>p(t=>t.has(e)?new Set:new Set([e]))})]})}var d={title:`Schedule/FreeAuditoriums`,component:u,parameters:{layout:`padded`},decorators:[e=>(0,l.jsx)(n,{children:(0,l.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,l.jsx)(e,{})})})]};const f={},p={args:{state:`long`}},m={args:{state:`loading`}},h={args:{state:`empty`}},g={args:{state:`error`}},_={...p,globals:{theme:`dark`,textScale:`large`}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "long"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LongPeriod,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`LongPeriod`,`Loading`,`Empty`,`Error`,`DarkLargeText`];export{_ as DarkLargeText,f as Default,h as Empty,g as Error,m as Loading,p as LongPeriod,v as __namedExportsOrder,d as default};