import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import"./react-dom-B2XyM79R.js";import{a as n,l as r}from"./baseApi-DNVIz1D9.js";import"./client-85imv7Mb.js";import{c as i}from"./schedule-DAAP5NPD.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-DJjE_k4q.js";import"./scheduleStorage-DhqxhI0r.js";import"./Schedule-CcBJWk1K.js";import"./cache-BPD7z7HK.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-SYFtv4X6.js";import"./calendar-plus-Og21bYqN.js";import"./check-CAWI8-gi.js";import"./circle-alert-myzXtI72.js";import"./circle-check-aIsoUoKZ.js";import"./copy-klyhbax9.js";import"./external-link-BQvZU39g.js";import"./info-X-p9K01q.js";import{t as a}from"./CalendarConnectModal-B2i2vm_L.js";import"./Alert-C9mr_R7D.js";import"./x-DUTF6TCW.js";import"./motion-DpqGF0yE.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import{t as o}from"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./CloseButton-CVpCSeVt.js";import"./CloseButton-BTHNVXIU.js";import"./proxy-DP15KAnr.js";import"./ModalOverlay-uRgbjjJG.js";import"./AnimatePresence-D4WTY7ZF.js";import"./use-reduced-motion-CEbtXdw3.js";import"./BlurTransition-M4GcuL_U.js";import"./BlurTransition-COfBEOBM.js";import"./Card-CrpXwhku.js";import"./Card-DrGkw_cM.js";import"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./Alert-DCFpaxu9.js";import"./AsyncContentTransition-BvzI3ydq.js";import"./AsyncContentTransition-Qh_tjfb6.js";import"./Skeleton-BcxclTbr.js";import"./Skeleton-Bi_JOlt_.js";import"./FormField-ECyYr1-D.js";import"./FormField-024lH6Nq.js";import"./Input-Cj3cB7Oo.js";import"./Input-DbInxr_A.js";import"./Modal-1005tHDh.js";import"./ModalHeader-0MYTR4Rr.js";import"./ModalHeader-B9JizWT5.js";import"./Stack-Cp2I2vKb.js";import"./Stack-StniWnXU.js";import"./Tabs-DHobKIpp.js";import"./Tabs-F5PymD-K.js";import"./schedule-DSWhW_2N.js";import{n as s}from"./scheduleDesign.fixtures-B0WQzWcC.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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