import"./preload-helper-DGWYlufl.js";import{t as e}from"./useTranslation-CCqsX0U5.js";import{S as t,t as n}from"./iframe-BcEMe4bN.js";import"./react-dom-DU-3k8w7.js";import"./client-DMLkocDF.js";import"./api-DZz9UYpn.js";import{r}from"./chunk-OE4NN4TA-DQa1z3pO.js";import"./ui-CeMFysF1.js";import"./createLucideIcon-IZGuaEMa.js";import"./check-DuZx-h3D.js";import"./chevron-down-C6XTuuav.js";import"./chevron-left-BakgoH7t.js";import"./chevron-right-CKkT5Esg.js";import"./circle-alert-DC7lUT_1.js";import"./circle-check-BlnI8afm.js";import"./credit-card-WiXQ2BMW.js";import"./external-link-ustcjU0S.js";import"./info-B3f4nuSn.js";import"./qr-code-DH-7knAa.js";import{c as i,d as a,f as o,h as s,l as c,m as l,o as u,p as d,s as f,u as p}from"./PayPage-PjFe2rLY.js";import"./refresh-ccw-CQkqVoai.js";import"./search-CEIc6wwn.js";import"./Alert-BG9LWu3I.js";import"./x-DfQHXYeA.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-CA1wcVh0.js";import"./BackButton-DJxEiiJS.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-Dyt5E--9.js";import"./InlineSpinner-DGBp7q51.js";import{t as m}from"./Button-DTJIttLR.js";import"./Button-BA_jpygv.js";import"./IconButton-B3f5oNTI.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-C0ow8V0B.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-Cj2eDNGw.js";import"./Pressable-Bg3DDMfh.js";import"./Badge-B081RMei.js";import"./Badge-XzTHhqMD.js";import"./proxy-cZ0og6n2.js";import"./ModalOverlay-BQyoz1jD.js";import"./AnimatePresence-C2o88HWb.js";import"./use-reduced-motion-BnmImsGO.js";import"./BlurTransition-BAaQ03Hm.js";import"./BlurTransition-BND0kpmE.js";import"./Card-DkJnIcrd.js";import"./Card-DdYWmRlF.js";import{n as h}from"./Typography-MhBGRVCK.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-XVH8z2qe.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./EmptyState-DiMnMpRc.js";import"./EmptyState-Crwa2nqk.js";import"./ErrorState-CN-MNpfu.js";import"./PageLoadingFallback-dHwthxDv.js";import"./Spinner-D_5VjJRg.js";import"./Loader-D70mWWb5.js";import"./Loader-B5k_qdAm.js";import"./NotificationStatus-BnEvYAOn.js";import"./PageLoadingFallback-DAZp9Y_N.js";import"./Skeleton-DPikpjd_.js";import"./Skeleton-Bmw2rAog.js";import"./Checkbox-BXsGbjTH.js";import"./Checkbox-B_eNujA8.js";import"./FormField-B9qUMIjM.js";import"./FormField-DI1mxX-F.js";import"./Input-D0nQTL0T.js";import"./Input-BJFMwxMd.js";import"./OtpInput-BI34aKA3.js";import"./OtpInput-CGERY6VR.js";import"./Select-BEXRX8hz.js";import"./Modal-Bp8p4Gzv.js";import"./ModalHeader-BXSlcaNh.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Switch-Lojn719t.js";import"./Switch-BWFqhGOl.js";import"./Textarea-CuNW8eJW.js";import"./Textarea-DCLG18SR.js";import"./Grid-DyQDAyr7.js";import"./Grid-CaMwAvlD.js";import"./Inline-B8ddGuTO.js";import"./Inline-DMFGQc-V.js";import"./Layout-BqwZs6YN.js";import"./Layout-BCr6lSSi.js";import"./Stack-BQQ4uaki.js";import"./Stack-Ca2JYwwn.js";import"./Pagination-DeN_CIzQ.js";import"./Pagination-3LFmPlUP.js";import"./Tabs-CKNC8tCe.js";import"./Tabs-CXnlj7nU.js";import"./DatePickerModal-B3u9kAQU.js";import"./DatePickerModal-DuTbRRQU.js";import{n as g}from"./TicketCodeModal-CTQABmEb.js";import"./ListRow-CPXpwUyk.js";import"./ListRow-EHTZJckC.js";import{t as _}from"./ServiceCard-O_SJ2fXY.js";import"./ServiceCard-BZ5WJVT3.js";import"./AppHeader-Dtry4WGI.js";import"./AppHeader-DFjT42vl.js";import"./DetailList-BVSM2mAX.js";import"./DetailList-CIH6ae_p.js";import{i as v}from"./PayInvoiceCard-CUB1dnE1.js";var y=t(),b=n();const x=(0,y.memo)(function({section:t,onClick:n}){let{t:r}=e(`pay`),i=s[t.icon];return(0,b.jsx)(_,{icon:(0,b.jsx)(i,{size:20}),title:r(t.titleKey),description:r(t.descriptionKey),onClick:()=>n(t),children:(0,b.jsx)(h,{size:`caption`,tone:`muted`,children:r(t.badgeKey)})})});x.__docgenInfo={description:``,methods:[],displayName:`PaySectionCard`,props:{section:{required:!0,tsType:{name:`PaySection`},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(section: PaySection) => void`,signature:{arguments:[{type:{name:`PaySection`},name:`section`}],return:{name:`void`}}},description:``}}};const S=(0,y.memo)(function({sections:t,onOpenSection:n}){let{t:r}=e(`pay`);return(0,b.jsxs)(`section`,{className:`pay-section`,children:[(0,b.jsx)(`div`,{className:`pay-section__heading`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{className:`pay-section__title`,children:r(`otherPayments.title`)}),(0,b.jsx)(`p`,{className:`pay-section__subtitle`,children:r(`otherPayments.description`)})]})}),(0,b.jsx)(`div`,{className:`pay-grid`,children:t.map(e=>(0,b.jsx)(x,{section:e,onClick:n},e.id))})]})});S.__docgenInfo={description:``,methods:[],displayName:`PayOtherPaymentsSection`,props:{sections:{required:!0,tsType:{name:`Array`,elements:[{name:`PaySection`}],raw:`PaySection[]`},description:``},onOpenSection:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(section: PaySection) => void`,signature:{arguments:[{type:{name:`PaySection`},name:`section`}],return:{name:`void`}}},description:``}}};var C=()=>{},w={uin:`04127059260311010120014771234567890`,totalAmount:123456789,receiveAmount:0,balanceAmount:123456789,balanceAmountHuman:`1 234 567,89`,purposePayment:`Оплата за обучение по программе информационных систем и технологий за осенний семестр`,faculty:`Факультет информационных технологий и анализа больших данных`,legalAct:`Договор об оказании образовательных услуг № 2026/123456789`,legalActDate:`2026-08-01`,paymentTerm:`2026-09-30`,levelEducation:`Бакалавриат`,status:{code:`NOT_QUOTED`,value:`Ожидает оплаты`},payeeInfo:{name:`Федеральное государственное образовательное бюджетное учреждение высшего образования «Финансовый университет при Правительстве Российской Федерации»`,inn:`0000000000`,kpp:`000000000`,accountNumber:`00000000000000000000`,bankName:`Банк получателя`}},T={...w,status:{code:`QUOTED`,value:`Оплачен`},totalAmount:106e4,totalAmountHuman:`10 600,00`,receiveAmount:106e4,receiveAmountHuman:`10 600,00`,balanceAmount:0,balanceAmountHuman:`0,00`},E={...T,status:{code:`NOT_QUOTED`,value:`Частично оплачен`},receiveAmount:56e4,receiveAmountHuman:`5 600,00`,balanceAmount:5e5,balanceAmountHuman:`5 000,00`},D={...T,receiveAmount:null,receiveAmountHuman:null},O={title:`Screens/Payments/Views`,decorators:[e=>(0,b.jsx)(r,{children:(0,b.jsx)(`div`,{style:{padding:16},children:(0,b.jsx)(e,{})})})],parameters:{layout:`fullscreen`}};function k({loading:e=!1,empty:t=!1,error:n=!1,initialSection:r=`education`,initialExternalSectionId:s=null,initialSegment:l=`unpaid`,invoiceFixture:m=w,paidInvoiceFixture:h=T}){let[g,_]=(0,y.useState)(r),[x,S]=(0,y.useState)(s),[E,D]=(0,y.useState)(l),[O,k]=(0,y.useState)(!1),A=E===`paid`?h:m;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`pay-page`,children:[(0,b.jsx)(o,{loading:e,totalElements:t?0:1,unpaidCount:t||!v(A)?0:1,outstandingMinorAmount:A.balanceAmount??0,onRefresh:C}),(0,b.jsx)(c,{activeSectionSlug:g,activeExternalSectionId:x,invoiceSections:f,externalSections:u,disabled:e,onOpenInvoiceSection:e=>{S(null),_(e)},onOpenExternalSection:e=>S(e.id)}),(0,b.jsx)(p,{activeSegmentSlug:E,segments:i,onSelect:D}),(0,b.jsx)(a,{loading:e,error:n?`Не удалось загрузить счета. Попробуйте ещё раз.`:null,invoices:t?[]:[A],section:f.find(e=>e.slug===g),segment:i.find(e=>e.slug===E),loadingInvoiceUin:null,sbpInvoiceUin:null,onOpenInvoice:()=>k(!0),onOpenSbp:C,isInvoicePayable:v})]}),(0,b.jsx)(d,{invoice:O?A:null,isInvoicePayable:v,onClose:()=>k(!1),onOpenSbp:C})]})}function A({invoiceFixture:e=w}){let[t,n]=(0,y.useState)(!0);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{onClick:()=>n(!0),children:`Открыть счёт`}),(0,b.jsx)(d,{invoice:t?e:null,isInvoicePayable:v,onClose:()=>n(!1),onOpenSbp:C})]})}const j={render:()=>(0,b.jsx)(k,{})},M={render:()=>(0,b.jsx)(k,{initialSegment:`paid`})},N={render:()=>(0,b.jsx)(k,{invoiceFixture:E})},P={render:()=>(0,b.jsx)(k,{initialSegment:`paid`,paidInvoiceFixture:D})},F={render:()=>(0,b.jsx)(k,{initialSection:`dormitory`})},I={render:()=>(0,b.jsx)(k,{initialExternalSectionId:`free-requisites`})},L={render:()=>(0,b.jsx)(k,{initialSection:`dormitory`}),play:async({canvasElement:e})=>{e.querySelector(`[role=combobox]`)?.click()}},R={render:()=>(0,b.jsx)(k,{initialSection:`dormitory`}),globals:{viewport:{value:`smallMobile`,isRotated:!1}}},z={render:()=>(0,b.jsx)(k,{initialExternalSectionId:`free-requisites`}),globals:{viewport:{value:`mobile`,isRotated:!1}}},B={render:()=>(0,b.jsx)(k,{initialExternalSectionId:`free-requisites`}),globals:{textScale:`large`}},V={render:()=>(0,b.jsx)(k,{initialSection:`dormitory`}),globals:{theme:`light`}},H={render:()=>(0,b.jsx)(k,{initialSection:`dormitory`}),globals:{theme:`dark`}},U={render:()=>(0,b.jsx)(k,{loading:!0})},W={...U,globals:{theme:`dark`}},G={render:()=>(0,b.jsx)(k,{empty:!0})},K={render:()=>(0,b.jsx)(k,{error:!0,empty:!0})},q={render:()=>(0,b.jsx)(A,{})},J={render:()=>(0,b.jsx)(A,{invoiceFixture:T})},Y={render:()=>(0,b.jsx)(A,{invoiceFixture:E})},X={render:()=>(0,b.jsx)(`div`,{className:`pay-page`,children:(0,b.jsx)(S,{sections:u,onOpenSection:C})})},Z={render:()=>(0,b.jsx)(l,{section:{...u[0],url:`about:blank`},onClose:C})};function Q(){let e=(0,y.useRef)(null),[t,n]=(0,y.useState)(null);return(0,y.useEffect)(()=>{n(e.current?.querySelector(`canvas`)?.toDataURL(`image/png`).split(`,`)[1]??null)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{hidden:!0,ref:e,children:(0,b.jsx)(g,{value:`https://example.invalid/design-fixture`,size:208,marginSize:4})}),(0,b.jsx)(d,{invoice:{...w,qrCode:t},isInvoicePayable:()=>!0,onClose:C,onOpenSbp:C})]})}const $={render:()=>(0,b.jsx)(Q,{})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSegment="paid" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview invoiceFixture={partialInvoice} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSegment="paid" paidInvoiceFixture={paidInvoiceWithoutAmount} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSection="dormitory" />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialExternalSectionId="free-requisites" />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSection="dormitory" />,
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector<HTMLButtonElement>("[role=combobox]")?.click();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSection="dormitory" />,
  globals: {
    viewport: {
      value: "smallMobile",
      isRotated: false
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialExternalSectionId="free-requisites" />,
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialExternalSectionId="free-requisites" />,
  globals: {
    textScale: "large"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSection="dormitory" />,
  globals: {
    theme: "light"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview initialSection="dormitory" />,
  globals: {
    theme: "dark"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview loading />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...Loading,
  globals: {
    theme: "dark"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview empty />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <PaymentPreview error empty />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DetailPreview />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DetailPreview invoiceFixture={paidInvoice} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DetailPreview invoiceFixture={partialInvoice} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pay-page">
      <PayOtherPaymentsSection sections={payExternalSections} onOpenSection={noop} />
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <PayExternalSectionModal section={{
    ...payExternalSections[0],
    url: "about:blank"
  }} onClose={noop} />
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <QrDetailPreview />
}`,...$.parameters?.docs?.source}}};const ee=[`Payments`,`PaidInvoices`,`PartiallyPaidInvoice`,`PaidAmountMissing`,`DormitorySelected`,`LongPaymentType`,`PaymentTypeSheetOpen`,`PaymentTypeSmallMobile`,`PaymentTypeStandardMobile`,`PaymentTypeLargeText`,`PaymentTypeLight`,`PaymentTypeDark`,`Loading`,`LoadingDark`,`Empty`,`Error`,`InvoiceDetails`,`PaidInvoiceDetails`,`PartiallyPaidInvoiceDetails`,`OtherPayments`,`ExternalSection`,`InvoiceQr`];export{F as DormitorySelected,G as Empty,K as Error,Z as ExternalSection,q as InvoiceDetails,$ as InvoiceQr,U as Loading,W as LoadingDark,I as LongPaymentType,X as OtherPayments,P as PaidAmountMissing,J as PaidInvoiceDetails,M as PaidInvoices,N as PartiallyPaidInvoice,Y as PartiallyPaidInvoiceDetails,H as PaymentTypeDark,B as PaymentTypeLargeText,V as PaymentTypeLight,L as PaymentTypeSheetOpen,R as PaymentTypeSmallMobile,z as PaymentTypeStandardMobile,j as Payments,ee as __namedExportsOrder,O as default};