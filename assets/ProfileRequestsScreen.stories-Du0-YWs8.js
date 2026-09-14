import"./preload-helper-DGWYlufl.js";import"./useTranslation-CZVpUEvE.js";import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import{n}from"./chunk-OE4NN4TA-CceNxg-m.js";import"./createLucideIcon-B3UreED2.js";import"./chevron-left-jM3I3WFd.js";import"./chevron-right-rKwtEkxp.js";import"./motion-BSxM25dS.js";import"./BackButton-CwqNC52F.js";import"./BackButton-DJ11xob5.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import{t as r}from"./Badge-DYo_OMFx.js";import"./Badge-BilbQ7OI.js";import"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./EmptyState-Cg6c5RX9.js";import"./EmptyState-Ivo_4GWO.js";import"./Skeleton-BoSYRP1p.js";import"./Skeleton-B4XjFKC-.js";import"./Inline-Bn5Qldda.js";import"./Inline-C7M9bN4S.js";import"./Stack-B9h0CGiv.js";import"./Stack-duc46O7L.js";import"./Pagination-ByEHeK5Q.js";import"./Pagination-CRDuVwzu.js";import"./AppHeader-PumjzPjZ.js";import"./AppHeader-D1ZmB5_8.js";import{t as i}from"./DetailList-tLuQV5_I.js";import"./DetailList-CUimx4jh.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./ProfileRequestsPage-BXkzWOsu.js";import{i as m,n as h,o as g,r as _}from"./ProfileRequestCard-DuF7h6cV.js";var v=t(),y=e(),b={id:2142,title:`Справка о периоде обучения для Александры Константиновны Степановой-Воскресенской`,createdAt:Date.parse(`2026-09-10T13:25:00+03:00`),status:`processing`,service:{name:`Заказ справок и документов для предоставления по месту требования`,description:`Готовую справку можно получить в учебном подразделении после уведомления о готовности.`},ticket:{number:`УЧЕБНЫЙ-ОТДЕЛ-2026-000000000000002142`},comment:`Просьба оформить справку для предоставления в образовательную организацию по месту требования. Контактное лицо: Александра Константиновна Степанова-Воскресенская.`,dynamicFields:[{name:`ФИО`,value:`Степанова-Воскресенская Александра Константиновна`},{name:`Адрес`,value:`Москва, улица Международного образовательного сотрудничества, дом 142, корпус 2`}],paymentRequired:!0,totalPrice:1250,remainingToPay:1250,paymentStatus:`pending`,paymentType:`Банковская карта`,payer:`Степанова-Воскресенская Александра Константиновна`};function x({state:e=`list`}){let[t,n]=(0,v.useState)(1);return e===`detailLoading`?(0,y.jsx)(c,{}):(0,y.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,y.jsx)(f,{eyebrow:e===`detail`?`Заявка #${h(b)}`:`Личный кабинет`,title:e===`detail`?g(b):`Мои заявки`,subtitle:e===`detail`?_(b):`Справки, обращения и регистрации на мероприятия`,fallbackPath:`/main/profile`,isDetail:e===`detail`}),e===`detail`?(0,y.jsxs)(`section`,{className:`profile-requests-detail`,children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(r,{tone:`warning`,children:m(b)})}),(0,y.jsx)(i,{items:s(b),columns:2}),(0,y.jsx)(o,{title:`Комментарий`,text:b.comment??``}),(0,y.jsx)(o,{title:`Данные заявки`,rows:d(b)}),(0,y.jsx)(o,{title:`Оплата`,rows:a(b)}),(0,y.jsx)(o,{title:`Описание услуги`,text:u(b)??``})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{tickets:e===`empty`?[]:[b,{...b,id:2143,status:`ready`}],isLoading:e===`loading`}),(0,y.jsx)(p,{page:t,pageLabel:`Страница ${t} из 3`,canGoNext:t<3,canGoPrev:t>1,onPageChange:n})]})]})}var S={title:`Screens/Requests`,component:x,decorators:[e=>(0,y.jsx)(n,{children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:`Реальные компоненты и mapper заявок с искусственными данными. Маршрутизация ошибок покрыта существующей страницей ServerError; API не вызывается.`}}}};const C={},w={args:{state:`loading`}},T={args:{state:`empty`}},E={args:{state:`detail`}},D={args:{state:`detailLoading`}},O={...E,globals:{theme:`dark`}},k={...E,globals:{textScale:`large`}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    state: "detail"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    state: "detailLoading"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Detail,
  globals: {
    theme: "dark"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Detail,
  globals: {
    textScale: "large"
  }
}`,...k.parameters?.docs?.source}}};const A=[`List`,`Loading`,`Empty`,`Detail`,`DetailLoading`,`Dark`,`LargeText`];export{O as Dark,E as Detail,D as DetailLoading,T as Empty,k as LargeText,C as List,w as Loading,A as __namedExportsOrder,S as default};