import"./preload-helper-DGWYlufl.js";import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import"./react-dom-B2XyM79R.js";import{n}from"./chunk-OE4NN4TA-DR6JmrIt.js";import"./createLucideIcon-SYFtv4X6.js";import"./check-CAWI8-gi.js";import"./chevron-down-BFZjQFNb.js";import"./chevron-left-StObO3su.js";import"./circle-alert-myzXtI72.js";import"./circle-check-aIsoUoKZ.js";import"./info-X-p9K01q.js";import"./map-pin-DMhnO3eK.js";import"./message-circle-Bv-oWmkx.js";import{t as r}from"./plus-Ys6BIgXu.js";import{t as i}from"./refresh-ccw-DKPXjHhu.js";import"./search-CxR_pSJq.js";import"./send-DoUQn7tH.js";import{t as a}from"./Alert-C9mr_R7D.js";import"./x-DUTF6TCW.js";import"./motion-DpqGF0yE.js";import"./NavigationTransitionContext-DpkfF3GW.js";import{t as o}from"./BackButton-DjswxgUN.js";import"./BackButton-B3kmmQB4.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import{t as s}from"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import{t as c}from"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./CloseButton-CVpCSeVt.js";import"./CloseButton-BTHNVXIU.js";import"./Badge-DoHBsrFO.js";import"./Badge-XDO2-fCz.js";import"./proxy-DP15KAnr.js";import{t as l}from"./ModalOverlay-uRgbjjJG.js";import"./use-reduced-motion-CEbtXdw3.js";import"./Card-CrpXwhku.js";import"./Card-DrGkw_cM.js";import{n as u,t as d}from"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./Alert-DCFpaxu9.js";import{t as f}from"./EmptyState-BDVcsgSC.js";import"./EmptyState-B1snXe1q.js";import"./Skeleton-BcxclTbr.js";import"./Skeleton-Bi_JOlt_.js";import"./Checkbox-BrAzZn8D.js";import"./Checkbox-CT1pumIP.js";import"./FormField-ECyYr1-D.js";import"./FormField-024lH6Nq.js";import"./Input-Cj3cB7Oo.js";import"./Input-DbInxr_A.js";import"./Select-DcluAFgO.js";import"./Modal-1005tHDh.js";import{t as p}from"./ModalHeader-0MYTR4Rr.js";import"./ModalHeader-B9JizWT5.js";import"./Select-BGVfqS3V.js";import"./Textarea-BWgDJTW6.js";import"./Textarea-DeckhuJr.js";import{t as m}from"./Stack-Cp2I2vKb.js";import"./Stack-StniWnXU.js";import{t as h}from"./Tabs-DHobKIpp.js";import"./Tabs-F5PymD-K.js";import{t as g}from"./AppHeader-DW0Nowbw.js";import"./AppHeader-6bwgQYtD.js";import{i as _,n as v,r as y,t as b}from"./PoteryashkiPage-r1TrS1Xq.js";var x=e(),S=t(),C={id:101,building_key:`corpus1`,post_type:`lost`,description:`Потеряна папка с материалами международной научно-практической конференции. Оставлена в аудитории после занятия. Просьба связаться с владельцем по указанному контакту.`,contact:`Степанова-Воскресенская Александра Константиновна, alexandrastepanovavoskresenskaya@university.example, +79991234567`,dangerous_flag:!1,created_at:`2026-09-10T13:25:00+03:00`,published_at:null,media_id:null,media_type:null};function w({pending:e=!1}){let[t,n]=(0,x.useState)(!0),[r,i]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{onClick:()=>n(!0),children:`Создать объявление`}),t?(0,S.jsxs)(l,{onClose:()=>n(!1),className:`poteryashki-create-modal`,children:[(0,S.jsx)(p,{title:`Новое объявление`,onClose:()=>n(!1)}),(0,S.jsx)(y,{contactFromProfile:C.contact,isCreating:e,onSubmit:async()=>(i(!0),!0)}),(0,S.jsx)(u,{role:`status`,children:r?`Объявление отправлено в примере`:`Запись в API отключена в примере`})]}):null]})}function T({state:e=`list`}){let[t,n]=(0,x.useState)(`all`);return(0,S.jsxs)(`div`,{className:`poteryashki-page`,children:[(0,S.jsxs)(m,{gap:`4`,children:[(0,S.jsx)(g,{actionsPlacement:`overlay`,eyebrow:`Проект ИТС`,title:`Потеряшки`,actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{fallbackPath:`/main/home/itc`}),(0,S.jsx)(c,{variant:`ghost`,ariaLabel:`Обновить объявления`,spinning:e===`loading`,disabled:e===`loading`,children:(0,S.jsx)(i,{size:18})})]})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(s,{iconLeft:(0,S.jsx)(r,{size:18}),children:`Создать объявление`})})]}),(0,S.jsxs)(`section`,{className:`poteryashki-board`,children:[(0,S.jsx)(`div`,{className:`poteryashki-board__header`,children:(0,S.jsxs)(`div`,{children:[(0,S.jsx)(u,{size:`caption`,tone:`muted`,children:`Объявления`}),(0,S.jsx)(d,{level:2,children:`Вещи по корпусам`})]})}),(0,S.jsx)(h,{items:_.map(e=>({value:e.key,label:e.shortLabel})),value:t,onChange:n,size:`sm`,scrollable:!0,ariaLabel:`Фильтр по корпусам`}),e===`error`?(0,S.jsx)(a,{tone:`error`,children:`Что-то пошло не так. Попробуйте обновить страницу или повторить действие позже.`}):null,e===`loading`?(0,S.jsx)(b,{}):e===`empty`||t===`corpus8`?(0,S.jsx)(f,{title:`В этом корпусе пока нет объявлений`}):(0,S.jsxs)(`div`,{className:`poteryashki-posts`,children:[(0,S.jsx)(v,{post:C}),(0,S.jsx)(v,{post:{...C,id:102,post_type:`found`,dangerous_flag:!0}})]})]})]})}var E={title:`Screens/LostAndFound`,component:T,decorators:[e=>(0,S.jsx)(n,{children:(0,S.jsx)(e,{})})],parameters:{docs:{description:{component:`Компоненты доски и реальная форма с локальным callback. Публикация и загрузка объявлений не вызывают API.`}}}};const D={},O={args:{state:`loading`}},k={...O,globals:{theme:`dark`}},A={args:{state:`empty`}},j={args:{state:`error`}},M={render:()=>(0,S.jsx)(v,{post:C})},N={render:()=>(0,S.jsx)(v,{post:{...C,dangerous_flag:!0}})},P={render:()=>(0,S.jsx)(w,{})},F={render:()=>(0,S.jsx)(w,{pending:!0})},I={...P,globals:{theme:`dark`}},L={...P,globals:{textScale:`large`}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PoteryashkiPostCard post={post} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <PoteryashkiPostCard post={{
    ...post,
    dangerous_flag: true
  }} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <FormFixture />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <FormFixture pending />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Create,
  globals: {
    theme: "dark"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...Create,
  globals: {
    textScale: "large"
  }
}`,...L.parameters?.docs?.source}}};const R=[`Board`,`Loading`,`LoadingDark`,`Empty`,`Error`,`Post`,`Caution`,`Create`,`Creating`,`Dark`,`LargeText`];export{D as Board,N as Caution,P as Create,F as Creating,I as Dark,A as Empty,j as Error,L as LargeText,O as Loading,k as LoadingDark,M as Post,R as __namedExportsOrder,E as default};