import"./useTranslation-Bqh59kuu.js";import{S as e,t}from"./iframe-D0TFUEDL.js";import"./react-dom-uuwrmfYG.js";import{a as n,l as r}from"./baseApi-6WAyKw_c.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-D6RV8_kF.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-Bfa8wbCD.js";import"./scheduleStorage-DNO7JVEk.js";import"./Schedule-BJApNQWq.js";import"./cache-DcfX38Qb.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-cfOq0vGI.js";import"./calendar-plus-COswVD3h.js";import"./check-DNh_A7sl.js";import"./circle-alert-m-WTEXJE.js";import"./circle-check-c2Iqda9m.js";import"./copy-BXIs7_06.js";import"./external-link-DaP3YjNQ.js";import"./info-BzAm7Awp.js";import{t as a}from"./CalendarConnectModal-CEIFAMot.js";import"./Alert-Gx6PxDza.js";import"./x-CAFkjvly.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import"./IconButton-KtMvhiqI.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BNnSMS-F.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-B27OI5yE.js";import"./ModalOverlay-DGegsSC0.js";import"./AnimatePresence-BUpu7bNm.js";import"./use-reduced-motion-DVIztM76.js";import"./BlurTransition-CmSxI2SF.js";import"./BlurTransition-Lagju-WE.js";import"./Card-Lm_APeX4.js";import"./Card-DMf2-Jiv.js";import"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-Io5YD_YJ.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-CYsxZqE9.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-ByS3qXD3.js";import"./FormField-DI1mxX-F.js";import"./Input-CpVLESgI.js";import"./Input-BJFMwxMd.js";import"./Modal-9XkcOwQ7.js";import"./ModalHeader-B1C_todG.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-Eh6LLyVX.js";import"./Stack-Cjv54EAV.js";import"./Tabs-D2hh3pq6.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-hus3HJm6.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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