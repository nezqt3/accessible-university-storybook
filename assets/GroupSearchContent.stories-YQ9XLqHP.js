import"./preload-helper-DGWYlufl.js";import"./useTranslation-QvKtmgQC.js";import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./react-dom-D1mdwjAE.js";import"./client-DPHXawHP.js";import"./api-DZz9UYpn.js";import"./schedule-CbZrpUwa.js";import"./Schedule-BJApNQWq.js";import"./format-DRsuurA_.js";import{n}from"./chunk-OE4NN4TA-DcYecFGT.js";import"./createLucideIcon-B-7CjJKR.js";import"./RenderGroupItem-aMDj_FkG.js";import"./calendar-range-bfLTu8YU.js";import"./check-CguIO69w.js";import"./chevron-down-D5fXjT2z.js";import"./clock-3-DjLoArGP.js";import{n as r,t as i}from"./GroupSearchModal-DB_yGR72.js";import"./graduation-cap-Cy7625i1.js";import"./map-pin-B3jMd2LB.js";import"./search-Bic9QSpq.js";import"./trash-2-s-FGNTY_.js";import"./x-uXlYzy0q.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import{t as a}from"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import"./IconButton-BHQof1qE.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-CF7KZhtd.js";import"./CloseButton-DuLuJ11g.js";import"./Pressable-qu7RCk4r.js";import"./Pressable-B92bGPbW.js";import"./Card-CVYhQ6r6.js";import"./Card-BTpC5DGf.js";import"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import"./EmptyState-p20joec-.js";import"./EmptyState-Ivo_4GWO.js";import"./proxy-BQ55LVPr.js";import{t as o}from"./ModalOverlay-5fLQRiIu.js";import"./use-reduced-motion-Pz8xRbFI.js";import"./Skeleton-D1uGFIww.js";import"./Skeleton-B4XjFKC-.js";import"./FormField-Bpm6jzpY.js";import"./FormField-Dm-RTxrN.js";import"./Input-D937cDJi.js";import"./Input-CZx1ckHV.js";import{t as s}from"./Select-CiMmnxMp.js";import"./Modal-DC6UI6Li.js";import"./ModalHeader-u8wb2ZUc.js";import"./ModalHeader-CxQ2g3I2.js";import"./Select-Ba6AdoTw.js";import"./Tabs-Bnacv--T.js";import"./Tabs-C7Z4yjbL.js";import"./ListRow-lfta1RS1.js";import"./ListRow-Cq2I6Jbp.js";import"./schedule-CmaZ1uVC.js";import"./SearchSchedule-CNB8w5wf.js";import"./mapNavigation-Bq0rmwQ6.js";import"./AuditoriumMapLink-Q9vKg44n.js";import{n as c,r as l,t as u}from"./scheduleSearch.fixtures-DXoBGUZd.js";import{f as d,n as f,p,t as m}from"./SearchResultsSection-DNyBeNRl.js";var h=t(),g=e();function _({state:e=`saved`,onClose:t=()=>{}}){let[n,a]=(0,h.useState)(`schedule`),[o,_]=(0,h.useState)([`results`,`hint`,`error`,`searching`].includes(e)?`ТРПО`:``),[v,y]=(0,h.useState)(!1),[b,x]=(0,h.useState)(`fin`),[S,C]=(0,h.useState)(``),[w,T]=(0,h.useState)(!1),[E,D]=(0,h.useState)(new Set([`storybook-building`])),O=(0,h.useRef)(null),k=(0,h.useRef)(null),A={canManageSubscriptions:!0,isSubscribed:()=>v,isSubscriptionsLoading:!1,onSelectGroup:()=>{},onToggleSubscription:()=>y(e=>!e),subscriptionActionKey:null};return(0,g.jsx)(p,{mode:n,onModeChange:a,onClose:t,contextControl:(0,g.jsx)(s,{label:`Подразделение`,value:b,options:[{value:`fin`,label:`Финансовый университет`},{value:`lyceum`,label:`Лицей Финансового университета`}],"aria-label":`Подразделение для расписания`,onChange:e=>x(e.target.value)}),children:n===`schedule`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{example:`ТРПО25-2`,inputRef:O,searchQuery:o,setSearchQuery:_}),o?(0,g.jsx)(m,{...A,isSearching:e===`searching`,searchError:e===`error`?`Не удалось выполнить поиск. Повторите попытку позже.`:null,searchHint:e===`hint`?`Введите не менее трех символов для поиска.`:null,searchResults:e===`hint`||e===`error`||e===`searching`?[]:[c,l]}):(0,g.jsx)(f,{...A,isBootstraping:e===`loading`,savedAndSubscribedSchedules:e===`empty`?[]:[l,c],onRemoveSavedSchedule:()=>{}})]}):(0,g.jsxs)(`section`,{className:`free-auditoriums`,children:[(0,g.jsx)(i,{auditorium:S,onAuditoriumChange:C,rangeLabel:w?`11.09.2026 — 30.09.2026`:`Сегодня`,hasRange:w,isLoading:!1,periodTriggerRef:k,onOpenPeriod:()=>T(!0),onClearPeriod:()=>T(!1),onSubmit:e=>e.preventDefault()}),(0,g.jsx)(r,{buildings:u,expandedBuildings:E,onSelect:()=>{},onToggle:e=>D(t=>t.has(e)?new Set:new Set([e]))})]})})}var v={title:`Schedule/GroupSearch`,component:_,parameters:{layout:`padded`,docs:{description:{component:`Production-композиция поиска с локальными fixtures. Смена режима, ввод, очистка и подписка интерактивны; запросы к API не выполняются.`}}},decorators:[e=>(0,g.jsx)(n,{children:(0,g.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0,background:`var(--ui-color-surface)`,padding:`var(--ui-space-4)`,borderRadius:`var(--ui-radius-xl)`},children:(0,g.jsx)(e,{})})})]};const y={},b={args:{state:`empty`}},x={args:{state:`loading`}},S={args:{state:`results`}},C={args:{state:`hint`}},w={args:{state:`error`}},T={args:{state:`searching`}},E={...S,globals:{theme:`dark`,textScale:`large`}},D={render:function(){let[e,t]=(0,h.useState)(!0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{onClick:()=>t(!0),children:`Открыть поиск`}),e?(0,g.jsx)(o,{presentation:`mobile`,className:`group-search-wrapper`,size:`expanded`,onClose:()=>t(!1),children:(0,g.jsx)(_,{onClose:()=>t(!1)})}):null]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    state: "hint"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: "searching"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function SearchSheet() {
    const [open, setOpen] = useState(true);
    return <>
        <Button onClick={() => setOpen(true)}>Открыть поиск</Button>
        {open ? <ModalOverlay presentation="mobile" className="group-search-wrapper" size="expanded" onClose={() => setOpen(false)}>
            <SearchExample onClose={() => setOpen(false)} />
          </ModalOverlay> : null}
      </>;
  }
}`,...D.parameters?.docs?.source}}};const O=[`Default`,`Empty`,`Loading`,`LongTitle`,`SearchHint`,`SearchError`,`Searching`,`DarkLargeText`,`MobileSheet`];export{E as DarkLargeText,y as Default,b as Empty,x as Loading,S as LongTitle,D as MobileSheet,w as SearchError,C as SearchHint,T as Searching,O as __namedExportsOrder,v as default};