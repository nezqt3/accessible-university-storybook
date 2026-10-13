import"./preload-helper-DGWYlufl.js";import"./useTranslation-9ioCj5_y.js";import{S as e,t}from"./iframe-BzBaAr8M.js";import"./react-dom-E0rHCiz5.js";import{r as n}from"./chunk-OE4NN4TA-DBEV3r21.js";import"./createLucideIcon-Tj8Azqsb.js";import"./check-CLP7HZx7.js";import"./chevron-down-BWzVf_YF.js";import"./chevron-left-CFerYi1N.js";import"./circle-alert-CjaD6949.js";import"./circle-check-CgeJ17g4.js";import"./info-vSHIhbIG.js";import"./map-pin-BrlgygG2.js";import"./message-circle-CezOj1sy.js";import{t as r}from"./plus-CdJzp9Za.js";import{t as i}from"./refresh-ccw-DjQ5UVIf.js";import"./search-HzkXTV4h.js";import"./send-C_luT_bt.js";import{t as a}from"./Alert-X8FY0e5Z.js";import"./x-C2-ys5hM.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-B9fzk1hy.js";import{t as o}from"./BackButton-CaWBUNxE.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-DVbeSyL1.js";import"./InlineSpinner-DGBp7q51.js";import{t as s}from"./Button-Bf-rdzde.js";import"./Button-BA_jpygv.js";import{t as c}from"./IconButton-D-g9cs4W.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-DyBUpUIi.js";import"./CloseButton-E9qr7WDM.js";import"./Badge-DkObHEAP.js";import"./Badge-XzTHhqMD.js";import"./proxy-D65zYvg1.js";import{t as l}from"./ModalOverlay-CxRVKSie.js";import"./use-reduced-motion-tK2mHn8c.js";import"./Card-R14i5b1C.js";import"./Card-DdYWmRlF.js";import{n as u,t as d}from"./Typography-C9xN84HC.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import{t as f}from"./EmptyState-Bw-sIvix.js";import"./EmptyState-Crwa2nqk.js";import"./Skeleton-B_E0TJMV.js";import"./Skeleton-Bmw2rAog.js";import"./Checkbox-CrVpioqV.js";import"./Checkbox-B_eNujA8.js";import"./FormField-DwBJl7e7.js";import"./FormField-DI1mxX-F.js";import"./Input-BWJVdVQG.js";import"./Input-BJFMwxMd.js";import"./Select-3szG_thR.js";import"./Modal-zrkongBe.js";import{t as p}from"./ModalHeader-DI_hSoie.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Textarea-BSYbqqmi.js";import"./Textarea-DCLG18SR.js";import{t as m}from"./Stack-DDIlP6Oy.js";import"./Stack-Ca2JYwwn.js";import{t as h}from"./Tabs-c4jePvnI.js";import"./Tabs-CXnlj7nU.js";import{t as g}from"./AppHeader-W_djsDC8.js";import"./AppHeader-DFjT42vl.js";import{i as _,n as v,r as y,t as b}from"./PoteryashkiPage-CB2qVqPp.js";var x=e(),S=t(),C={id:101,building_key:`corpus1`,post_type:`lost`,description:`Потеряна папка с материалами международной научно-практической конференции. Оставлена в аудитории после занятия. Просьба связаться с владельцем по указанному контакту.`,contact:`Степанова-Воскресенская Александра Константиновна, alexandrastepanovavoskresenskaya@university.example, +79991234567`,dangerous_flag:!1,created_at:`2026-09-10T13:25:00+03:00`,published_at:null,media_id:null,media_type:null};function w({pending:e=!1}){let[t,n]=(0,x.useState)(!0),[r,i]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{onClick:()=>n(!0),children:`Создать объявление`}),t?(0,S.jsxs)(l,{onClose:()=>n(!1),className:`poteryashki-create-modal`,children:[(0,S.jsx)(p,{title:`Новое объявление`,onClose:()=>n(!1)}),(0,S.jsx)(y,{contactFromProfile:C.contact,isCreating:e,onSubmit:async()=>(i(!0),!0)}),(0,S.jsx)(u,{role:`status`,children:r?`Объявление отправлено в примере`:`Запись в API отключена в примере`})]}):null]})}function T({state:e=`list`}){let[t,n]=(0,x.useState)(`all`);return(0,S.jsxs)(`div`,{className:`poteryashki-page`,children:[(0,S.jsxs)(m,{gap:`4`,children:[(0,S.jsx)(g,{actionsPlacement:`overlay`,eyebrow:`Проект ИТС`,title:`Потеряшки`,actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{fallbackPath:`/main/home/itc`}),(0,S.jsx)(c,{variant:`ghost`,ariaLabel:`Обновить объявления`,spinning:e===`loading`,disabled:e===`loading`,children:(0,S.jsx)(i,{size:18})})]})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(s,{iconLeft:(0,S.jsx)(r,{size:18}),children:`Создать объявление`})})]}),(0,S.jsxs)(`section`,{className:`poteryashki-board`,children:[(0,S.jsx)(`div`,{className:`poteryashki-board__header`,children:(0,S.jsxs)(`div`,{children:[(0,S.jsx)(u,{size:`caption`,tone:`muted`,children:`Объявления`}),(0,S.jsx)(d,{level:2,children:`Вещи по корпусам`})]})}),(0,S.jsx)(h,{items:_.map(e=>({value:e.key,label:e.shortLabel})),value:t,onChange:n,size:`sm`,scrollable:!0,ariaLabel:`Фильтр по корпусам`}),e===`error`?(0,S.jsx)(a,{tone:`error`,children:`Что-то пошло не так. Попробуйте обновить страницу или повторить действие позже.`}):null,e===`loading`?(0,S.jsx)(b,{}):e===`empty`||t===`corpus8`?(0,S.jsx)(f,{title:`В этом корпусе пока нет объявлений`}):(0,S.jsxs)(`div`,{className:`poteryashki-posts`,children:[(0,S.jsx)(v,{post:C}),(0,S.jsx)(v,{post:{...C,id:102,post_type:`found`,dangerous_flag:!0}})]})]})]})}var E={title:`Screens/LostAndFound`,component:T,decorators:[e=>(0,S.jsx)(n,{children:(0,S.jsx)(e,{})})],parameters:{docs:{description:{component:`Компоненты доски и реальная форма с локальным callback. Публикация и загрузка объявлений не вызывают API.`}}}};const D={},O={args:{state:`loading`}},k={...O,globals:{theme:`dark`}},A={args:{state:`empty`}},j={args:{state:`error`}},M={render:()=>(0,S.jsx)(v,{post:C})},N={render:()=>(0,S.jsx)(v,{post:{...C,dangerous_flag:!0}})},P={render:()=>(0,S.jsx)(w,{})},F={render:()=>(0,S.jsx)(w,{pending:!0})},I={...P,globals:{theme:`dark`}},L={...P,globals:{textScale:`large`}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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