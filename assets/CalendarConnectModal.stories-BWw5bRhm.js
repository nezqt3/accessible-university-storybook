import"./useTranslation-9ioCj5_y.js";import{S as e,t}from"./iframe-BzBaAr8M.js";import"./react-dom-E0rHCiz5.js";import{a as n,l as r}from"./baseApi-7sCOqnqa.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-CFB_CoFU.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-CWIzs6eR.js";import"./scheduleStorage-BFU0Q_7L.js";import"./Schedule-CcBJWk1K.js";import"./cache-B5NZVWdV.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-Tj8Azqsb.js";import"./calendar-plus-BTZSsBVx.js";import"./check-CLP7HZx7.js";import"./circle-alert-CjaD6949.js";import"./circle-check-CgeJ17g4.js";import"./copy-DaIOjVVi.js";import"./external-link-C7Mq2oXw.js";import"./info-vSHIhbIG.js";import{t as a}from"./CalendarConnectModal-CFI3x0yO.js";import"./Alert-X8FY0e5Z.js";import"./x-C2-ys5hM.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-DVbeSyL1.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-Bf-rdzde.js";import"./Button-BA_jpygv.js";import"./IconButton-D-g9cs4W.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-DyBUpUIi.js";import"./CloseButton-E9qr7WDM.js";import"./proxy-D65zYvg1.js";import"./ModalOverlay-CxRVKSie.js";import"./AnimatePresence-Bn1Cn7X5.js";import"./use-reduced-motion-tK2mHn8c.js";import"./BlurTransition-C9sh60Xg.js";import"./BlurTransition-BND0kpmE.js";import"./Card-R14i5b1C.js";import"./Card-DdYWmRlF.js";import"./Typography-C9xN84HC.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-DCu25grX.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./Skeleton-B_E0TJMV.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-DwBJl7e7.js";import"./FormField-DI1mxX-F.js";import"./Input-BWJVdVQG.js";import"./Input-BJFMwxMd.js";import"./Modal-zrkongBe.js";import"./ModalHeader-DI_hSoie.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-DDIlP6Oy.js";import"./Stack-Ca2JYwwn.js";import"./Tabs-c4jePvnI.js";import"./Tabs-CXnlj7nU.js";import"./schedule-1w8baC0U.js";import{n as s}from"./scheduleDesign.fixtures-DFE7O40F.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    schedule: {
      ...previewGroup,
      name: "Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки"
    }
  },
  globals: {
    textScale: "large"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...LongSchedule,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("tab", {
      name: "Outlook"
    }));
    await userEvent.click(canvas.getByRole("tab", {
      name: "Яндекс"
    }));
    await userEvent.click(canvas.getByRole("tab", {
      name: "Apple"
    }));
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`LongSchedule`,`Dark`,`RapidProviderSwitching`];export{h as Dark,p as Default,m as LongSchedule,g as RapidProviderSwitching,_ as __namedExportsOrder,f as default};