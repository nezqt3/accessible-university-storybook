import"./preload-helper-DGWYlufl.js";import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./Schedule-BJApNQWq.js";import{n}from"./chunk-OE4NN4TA-DcYecFGT.js";import"./createLucideIcon-B-7CjJKR.js";import"./calendar-range-bfLTu8YU.js";import"./chevron-down-D5fXjT2z.js";import"./clock-3-DjLoArGP.js";import{n as r,t as i}from"./GroupSearchModal-DB_yGR72.js";import"./map-pin-B3jMd2LB.js";import"./search-Bic9QSpq.js";import"./x-uXlYzy0q.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import"./IconButton-BHQof1qE.js";import"./IconButton-CkfbeZNf.js";import"./Pressable-qu7RCk4r.js";import"./Pressable-B92bGPbW.js";import"./Card-CVYhQ6r6.js";import"./Card-BTpC5DGf.js";import"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import{t as a}from"./EmptyState-p20joec-.js";import"./EmptyState-Ivo_4GWO.js";import"./Skeleton-D1uGFIww.js";import"./Skeleton-B4XjFKC-.js";import"./FormField-Bpm6jzpY.js";import"./FormField-Dm-RTxrN.js";import"./Input-D937cDJi.js";import"./Input-CZx1ckHV.js";import"./ListRow-lfta1RS1.js";import"./ListRow-Cq2I6Jbp.js";import"./mapNavigation-Bq0rmwQ6.js";import"./AuditoriumMapLink-Q9vKg44n.js";import{t as o}from"./FreeAuditoriumSearchSkeleton-CDpCxcJG.js";import{t as s}from"./scheduleSearch.fixtures-DXoBGUZd.js";var c=t(),l=e();function u({state:e=`default`}){let[t,n]=(0,c.useState)(``),[u,d]=(0,c.useState)(e===`long`),[f,p]=(0,c.useState)(new Set([`storybook-building`])),m=(0,c.useRef)(null);return(0,l.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,l.jsx)(i,{auditorium:t,onAuditoriumChange:n,rangeLabel:u?`11 сентября 2026 года — 30 сентября 2026 года`:`Сегодня`,hasRange:u,isLoading:e===`loading`,periodTriggerRef:m,onOpenPeriod:()=>d(!0),onClearPeriod:()=>d(!1),onSubmit:e=>e.preventDefault()}),e===`loading`?(0,l.jsx)(o,{}):e===`empty`?(0,l.jsx)(a,{size:`sm`,title:`Аудитории не найдены`,description:`Измените номер аудитории или диапазон дат.`}):e===`error`?(0,l.jsx)(a,{size:`sm`,title:`Не удалось выполнить поиск`,description:`Не удалось найти свободные аудитории.`}):(0,l.jsx)(r,{buildings:s,expandedBuildings:f,onSelect:()=>{},onToggle:e=>p(t=>t.has(e)?new Set:new Set([e]))})]})}var d={title:`Schedule/FreeAuditoriums`,component:u,parameters:{layout:`padded`},decorators:[e=>(0,l.jsx)(n,{children:(0,l.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,l.jsx)(e,{})})})]};const f={},p={args:{state:`long`}},m={args:{state:`loading`}},h={args:{state:`empty`}},g={args:{state:`error`}},_={...p,globals:{theme:`dark`,textScale:`large`}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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