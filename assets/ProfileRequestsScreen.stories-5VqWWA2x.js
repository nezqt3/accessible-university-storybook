import"./preload-helper-DGWYlufl.js";import"./useTranslation-9ioCj5_y.js";import{S as e,t}from"./iframe-BzBaAr8M.js";import{r as n}from"./chunk-OE4NN4TA-DBEV3r21.js";import"./createLucideIcon-Tj8Azqsb.js";import"./chevron-left-CFerYi1N.js";import"./chevron-right-nQFOk9nw.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-B9fzk1hy.js";import"./BackButton-CaWBUNxE.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-DVbeSyL1.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-Bf-rdzde.js";import"./Button-BA_jpygv.js";import{t as r}from"./Badge-DkObHEAP.js";import"./Badge-XzTHhqMD.js";import"./proxy-D65zYvg1.js";import"./AnimatePresence-Bn1Cn7X5.js";import"./use-reduced-motion-tK2mHn8c.js";import"./BlurTransition-C9sh60Xg.js";import"./BlurTransition-BND0kpmE.js";import"./Card-R14i5b1C.js";import"./Card-DdYWmRlF.js";import"./Typography-C9xN84HC.js";import"./Typography-BY-iGFVZ.js";import"./AsyncContentTransition-DCu25grX.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./EmptyState-Bw-sIvix.js";import"./EmptyState-Crwa2nqk.js";import"./Skeleton-B_E0TJMV.js";import"./Skeleton-Bmw2rAog.js";import"./Grid-CM-mUQuK.js";import"./Grid-CaMwAvlD.js";import"./Inline-Db5oeu2v.js";import"./Inline-DMFGQc-V.js";import"./Stack-DDIlP6Oy.js";import"./Stack-Ca2JYwwn.js";import"./Pagination-CKz0ka4T.js";import"./Pagination-3LFmPlUP.js";import"./AppHeader-W_djsDC8.js";import"./AppHeader-DFjT42vl.js";import{t as i}from"./DetailList-BW4vqiNj.js";import"./DetailList-CIH6ae_p.js";import{a,i as o,n as s,r as c,t as l}from"./ProfileRequestsPage-DWY2pVaY.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,u as _}from"./ProfileRequestCard-DwH5qpFO.js";var v=e(),y=t(),b={id:2142,title:`Справка о периоде обучения для Александры Константиновны Степановой-Воскресенской`,createdAt:Date.parse(`2026-09-10T13:25:00+03:00`),status:`processing`,service:{name:`Заказ справок и документов для предоставления по месту требования`,description:`Готовую справку можно получить в учебном подразделении после уведомления о готовности.`},ticket:{number:`УЧЕБНЫЙ-ОТДЕЛ-2026-000000000000002142`},comment:`Просьба оформить справку для предоставления в образовательную организацию по месту требования. Контактное лицо: Александра Константиновна Степанова-Воскресенская.`,dynamicFields:[{name:`ФИО`,value:`Степанова-Воскресенская Александра Константиновна`},{name:`Адрес`,value:`Москва, улица Международного образовательного сотрудничества, дом 142, корпус 2`}],paymentRequired:!0,totalPrice:1250,remainingToPay:1250,paymentStatus:`pending`,paymentType:`Банковская карта`,payer:`Степанова-Воскресенская Александра Константиновна`};function x({state:e=`list`}){let[t,n]=(0,v.useState)(1);return e===`detailLoading`?(0,y.jsx)(o,{}):(0,y.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,y.jsx)(a,{eyebrow:e===`detail`?`Заявка #${m(b)}`:`Личный кабинет`,title:e===`detail`?_(b):`Мои заявки`,subtitle:e===`detail`?g(b):void 0,fallbackPath:`/main/profile`}),e===`detail`?(0,y.jsxs)(`section`,{className:`profile-requests-detail`,children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(r,{tone:`warning`,children:d(b)})}),(0,y.jsx)(i,{items:h(b),columns:2}),(0,y.jsx)(c,{title:`Комментарий`,text:b.comment??``}),(0,y.jsx)(c,{title:`Данные заявки`,rows:p(b)}),(0,y.jsx)(c,{title:`Оплата`,rows:f(b)}),(0,y.jsx)(c,{title:`Описание услуги`,text:u(b)??``})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{tickets:e===`empty`?[]:[b,{...b,id:2143,status:`ready`}],isLoading:e===`loading`}),(0,y.jsx)(l,{page:t,pageLabel:`Страница ${t} из 3`,canGoNext:t<3,canGoPrev:t>1,onPageChange:n})]})]})}var S={title:`Screens/Requests`,component:x,decorators:[e=>(0,y.jsx)(n,{children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:`Реальные компоненты и mapper заявок с искусственными данными. Маршрутизация ошибок покрыта существующей страницей ServerError; API не вызывается.`}}}};const C={},w={args:{state:`loading`}},T={...w,globals:{theme:`dark`}},E={args:{state:`empty`}},D={args:{state:`detail`}},O={args:{state:`detailLoading`}},k={...O,globals:{theme:`dark`}},A={...D,globals:{theme:`dark`}},j={...D,globals:{textScale:`large`}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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