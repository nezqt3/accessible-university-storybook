import"./preload-helper-DGWYlufl.js";import"./useTranslation-CZVpUEvE.js";import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./client-DPHXawHP.js";import"./api-DZz9UYpn.js";import"./schedule-CbZrpUwa.js";import"./Schedule-BJApNQWq.js";import"./format-DRsuurA_.js";import{n}from"./chunk-OE4NN4TA-CceNxg-m.js";import"./createLucideIcon-B3UreED2.js";import"./RenderGroupItem-DGZkyIY0.js";import"./calendar-range-Ch57oI_R.js";import"./chevron-down-BB112KGp.js";import"./clock-3-Bft3dfW9.js";import{n as r,t as i}from"./GroupSearchModal-C64n4yXs.js";import"./graduation-cap-C5X9QGSg.js";import"./map-pin-oceofVnd.js";import"./search-0-f7zWZu.js";import"./trash-2-DPXPYdXE.js";import"./x-KjvGFWaj.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import{t as a}from"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import"./IconButton-Dpu6CZ7U.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-D4R7keM6.js";import"./CloseButton-DuLuJ11g.js";import"./Pressable-DKvY6Bfh.js";import"./Pressable-B92bGPbW.js";import"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./EmptyState-Cg6c5RX9.js";import"./EmptyState-Ivo_4GWO.js";import"./proxy-BJb5GNu-.js";import{t as o}from"./ModalOverlay-D1QdAFfV.js";import"./use-reduced-motion-B2DzoRdd.js";import"./Skeleton-BoSYRP1p.js";import"./Skeleton-B4XjFKC-.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import"./Input-Aczuq6Jz.js";import"./Input-CZx1ckHV.js";import"./ModalHeader-D38pGhUQ.js";import"./ModalHeader-CxQ2g3I2.js";import"./Tabs-CJBHFrgO.js";import"./Tabs-C7Z4yjbL.js";import"./ListRow-DD3E4KQf.js";import"./ListRow-Cq2I6Jbp.js";import"./schedule-CmaZ1uVC.js";import"./SearchSchedule-CNB8w5wf.js";import"./mapNavigation-Bq0rmwQ6.js";import"./AuditoriumMapLink-fwmmVNvD.js";import{n as s,r as c,t as l}from"./scheduleSearch.fixtures-DXoBGUZd.js";import{f as u,n as d,p as f,t as p}from"./SearchResultsSection-BY6UqxZB.js";var m=t(),h=e();function g({state:e=`saved`,onClose:t=()=>{}}){let[n,a]=(0,m.useState)(`schedule`),[o,g]=(0,m.useState)([`results`,`hint`,`error`,`searching`].includes(e)?`ТРПО`:``),[_,v]=(0,m.useState)(!1),[y,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!1),[C,w]=(0,m.useState)(new Set([`storybook-building`])),T=(0,m.useRef)(null),E=(0,m.useRef)(null),D={canManageSubscriptions:!0,isSubscribed:()=>_,isSubscriptionsLoading:!1,onSelectGroup:()=>{},onToggleSubscription:()=>v(e=>!e),subscriptionActionKey:null};return(0,h.jsx)(f,{mode:n,onModeChange:a,onClose:t,children:n===`schedule`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{example:`ТРПО25-2`,inputRef:T,searchQuery:o,setSearchQuery:g}),o?(0,h.jsx)(p,{...D,isSearching:e===`searching`,searchError:e===`error`?`Не удалось выполнить поиск. Повторите попытку позже.`:null,searchHint:e===`hint`?`Введите не менее трех символов для поиска.`:null,searchResults:e===`hint`||e===`error`||e===`searching`?[]:[s,c]}):(0,h.jsx)(d,{...D,isBootstraping:e===`loading`,savedAndSubscribedSchedules:e===`empty`?[]:[c,s],onRemoveSavedSchedule:()=>{}})]}):(0,h.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,h.jsx)(i,{auditorium:y,onAuditoriumChange:b,rangeLabel:x?`11.09.2026 — 30.09.2026`:`Сегодня`,hasRange:x,isLoading:!1,periodTriggerRef:E,onOpenPeriod:()=>S(!0),onClearPeriod:()=>S(!1),onSubmit:e=>e.preventDefault()}),(0,h.jsx)(r,{buildings:l,expandedBuildings:C,onSelect:()=>{},onToggle:e=>w(t=>t.has(e)?new Set:new Set([e]))})]})})}var _={title:`Schedule/GroupSearch`,component:g,parameters:{layout:`padded`,docs:{description:{component:`Production-композиция поиска с локальными fixtures. Смена режима, ввод, очистка и подписка интерактивны; запросы к API не выполняются.`}}},decorators:[e=>(0,h.jsx)(n,{children:(0,h.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0,background:`var(--ui-color-surface)`,padding:`var(--ui-space-4)`,borderRadius:`var(--ui-radius-xl)`},children:(0,h.jsx)(e,{})})})]};const v={},y={args:{state:`empty`}},b={args:{state:`loading`}},x={args:{state:`results`}},S={args:{state:`hint`}},C={args:{state:`error`}},w={args:{state:`searching`}},T={...x,globals:{theme:`dark`,textScale:`large`}},E={render:function(){let[e,t]=(0,m.useState)(!0);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{onClick:()=>t(!0),children:`Открыть поиск`}),e?(0,h.jsx)(o,{presentation:`mobile`,className:`group-search-wrapper`,onClose:()=>t(!1),children:(0,h.jsx)(g,{onClose:()=>t(!1)})}):null]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    state: "hint"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "searching"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function SearchSheet() {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Открыть поиск</Button>
        {open ? <ModalOverlay presentation="mobile" className="group-search-wrapper" onClose={() => setOpen(false)}>
            <SearchExample onClose={() => setOpen(false)} />
          </ModalOverlay> : null}
      </>;
  }
}`,...E.parameters?.docs?.source}}};const D=[`Default`,`Empty`,`Loading`,`LongTitle`,`SearchHint`,`SearchError`,`Searching`,`DarkLargeText`,`MobileSheet`];export{T as DarkLargeText,v as Default,y as Empty,b as Loading,x as LongTitle,E as MobileSheet,C as SearchError,S as SearchHint,w as Searching,D as __namedExportsOrder,_ as default};