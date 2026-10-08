import"./useTranslation-eDAlq15L.js";import{S as e,t}from"./iframe-CmBlaoL5.js";import"./react-dom-C20388Je.js";import{a as n,l as r}from"./baseApi-CTRWQw6F.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-D7KsXRm4.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-DalU8njz.js";import"./scheduleStorage-Cssr5hXn.js";import"./Schedule-BJApNQWq.js";import"./cache-DjoTd7xk.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-xVjI36Up.js";import"./calendar-plus-BKrlq6co.js";import"./check-D8NoSuSL.js";import"./circle-alert-CDayPzEG.js";import"./circle-check-D3Pf7Nmj.js";import"./copy-62SBMChh.js";import"./external-link-DG0qEG3k.js";import"./info-DsQSihQE.js";import{t as a}from"./CalendarConnectModal-DDEGynRX.js";import"./Alert-DwW9sWC8.js";import"./x-D2llTaRH.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BQkqwLS5.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-DBi7TZPC.js";import"./Button-DDTwPwQw.js";import"./IconButton-7ym-EM3C.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-D44lpI2E.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-CdotowUO.js";import"./ModalOverlay-DZH1wCO3.js";import"./AnimatePresence-CGVxng4l.js";import"./use-reduced-motion-Cj8PTyoc.js";import"./BlurTransition-BbIl-pOB.js";import"./BlurTransition-Lagju-WE.js";import"./Card-lFxmNmMK.js";import"./Card-DMf2-Jiv.js";import"./Typography-CcbGFH53.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-DBlOtMg7.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-D22MI1Di.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-6mKwwxb-.js";import"./FormField-DI1mxX-F.js";import"./Input-ttMuKZ_h.js";import"./Input-BJFMwxMd.js";import"./Modal-B_kGhp1g.js";import"./ModalHeader-Dad9yihs.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-DI62hkWB.js";import"./Stack-Cjv54EAV.js";import"./Tabs-yM_j3Fym.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-hus3HJm6.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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