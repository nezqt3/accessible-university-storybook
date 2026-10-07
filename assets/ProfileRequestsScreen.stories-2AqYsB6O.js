import"./preload-helper-DGWYlufl.js";import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import{n}from"./chunk-OE4NN4TA-DR6JmrIt.js";import"./createLucideIcon-SYFtv4X6.js";import"./chevron-left-StObO3su.js";import"./chevron-right-BpvDcQfb.js";import"./motion-DpqGF0yE.js";import"./NavigationTransitionContext-DpkfF3GW.js";import"./BackButton-DjswxgUN.js";import"./BackButton-B3kmmQB4.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import{t as r}from"./Badge-DoHBsrFO.js";import"./Badge-XDO2-fCz.js";import"./proxy-DP15KAnr.js";import"./AnimatePresence-D4WTY7ZF.js";import"./use-reduced-motion-CEbtXdw3.js";import"./BlurTransition-M4GcuL_U.js";import"./BlurTransition-COfBEOBM.js";import"./Card-CrpXwhku.js";import"./Card-DrGkw_cM.js";import"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./AsyncContentTransition-BvzI3ydq.js";import"./AsyncContentTransition-Qh_tjfb6.js";import"./EmptyState-BDVcsgSC.js";import"./EmptyState-B1snXe1q.js";import"./Skeleton-BcxclTbr.js";import"./Skeleton-Bi_JOlt_.js";import"./Inline-DjFwlOBT.js";import"./Inline-Bs-_lp1S.js";import"./Stack-Cp2I2vKb.js";import"./Stack-StniWnXU.js";import"./Pagination-BMYy1yuI.js";import"./Pagination-BPIwVG0r.js";import"./AppHeader-DW0Nowbw.js";import"./AppHeader-6bwgQYtD.js";import{t as i}from"./DetailList-DlMu7jyY.js";import"./DetailList-DoiffDbP.js";import{a,i as o,n as s,r as c,t as l}from"./ProfileRequestsPage-DXvKRS9q.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,u as _}from"./ProfileRequestCard-BrfSp6ul.js";var v=e(),y=t(),b={id:2142,title:`Справка о периоде обучения для Александры Константиновны Степановой-Воскресенской`,createdAt:Date.parse(`2026-09-10T13:25:00+03:00`),status:`processing`,service:{name:`Заказ справок и документов для предоставления по месту требования`,description:`Готовую справку можно получить в учебном подразделении после уведомления о готовности.`},ticket:{number:`УЧЕБНЫЙ-ОТДЕЛ-2026-000000000000002142`},comment:`Просьба оформить справку для предоставления в образовательную организацию по месту требования. Контактное лицо: Александра Константиновна Степанова-Воскресенская.`,dynamicFields:[{name:`ФИО`,value:`Степанова-Воскресенская Александра Константиновна`},{name:`Адрес`,value:`Москва, улица Международного образовательного сотрудничества, дом 142, корпус 2`}],paymentRequired:!0,totalPrice:1250,remainingToPay:1250,paymentStatus:`pending`,paymentType:`Банковская карта`,payer:`Степанова-Воскресенская Александра Константиновна`};function x({state:e=`list`}){let[t,n]=(0,v.useState)(1);return e===`detailLoading`?(0,y.jsx)(o,{}):(0,y.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,y.jsx)(a,{eyebrow:e===`detail`?`Заявка #${m(b)}`:`Личный кабинет`,title:e===`detail`?_(b):`Мои заявки`,subtitle:e===`detail`?g(b):void 0,fallbackPath:`/main/profile`}),e===`detail`?(0,y.jsxs)(`section`,{className:`profile-requests-detail`,children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(r,{tone:`warning`,children:d(b)})}),(0,y.jsx)(i,{items:h(b),columns:2}),(0,y.jsx)(c,{title:`Комментарий`,text:b.comment??``}),(0,y.jsx)(c,{title:`Данные заявки`,rows:p(b)}),(0,y.jsx)(c,{title:`Оплата`,rows:f(b)}),(0,y.jsx)(c,{title:`Описание услуги`,text:u(b)??``})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{tickets:e===`empty`?[]:[b,{...b,id:2143,status:`ready`}],isLoading:e===`loading`}),(0,y.jsx)(l,{page:t,pageLabel:`Страница ${t} из 3`,canGoNext:t<3,canGoPrev:t>1,onPageChange:n})]})]})}var S={title:`Screens/Requests`,component:x,decorators:[e=>(0,y.jsx)(n,{children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:`Реальные компоненты и mapper заявок с искусственными данными. Маршрутизация ошибок покрыта существующей страницей ServerError; API не вызывается.`}}}};const C={},w={args:{state:`loading`}},T={...w,globals:{theme:`dark`}},E={args:{state:`empty`}},D={args:{state:`detail`}},O={args:{state:`detailLoading`}},k={...O,globals:{theme:`dark`}},A={...D,globals:{theme:`dark`}},j={...D,globals:{textScale:`large`}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    state: "detail"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    state: "detailLoading"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...DetailLoading,
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Detail,
  globals: {
    theme: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Detail,
  globals: {
    textScale: "large"
  }
}`,...j.parameters?.docs?.source}}};const M=[`List`,`Loading`,`LoadingDark`,`Empty`,`Detail`,`DetailLoading`,`DetailLoadingDark`,`Dark`,`LargeText`];export{A as Dark,D as Detail,O as DetailLoading,k as DetailLoadingDark,E as Empty,j as LargeText,C as List,w as Loading,T as LoadingDark,M as __namedExportsOrder,S as default};