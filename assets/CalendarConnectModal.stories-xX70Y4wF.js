import"./useTranslation-DYjPHpZM.js";import{S as e,t}from"./iframe-8nZf5U1I.js";import"./react-dom-Bhq1aSFJ.js";import{a as n,l as r}from"./baseApi-KqMOPwG-.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-C48QPMjb.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-DnwuTElF.js";import"./scheduleStorage-8B6oNrjg.js";import"./Schedule-CcBJWk1K.js";import"./cache-SFZmKouD.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-Ds0JKKWX.js";import"./calendar-plus-BMjorAa_.js";import"./check-DvkBxtBL.js";import"./circle-alert-CzcRFvr4.js";import"./circle-check-CkwNFpBf.js";import"./copy-BTj_Uj1k.js";import"./external-link-DFNoiFNy.js";import"./info-BLllkz6Y.js";import{t as a}from"./CalendarConnectModal-kDJ7P9B2.js";import"./Alert-CW5j4y_Y.js";import"./x-DenKBl5n.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BWaRkYpR.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-CKuRsoid.js";import"./Button-BA_jpygv.js";import"./IconButton-BaMHE2r4.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BrCg84PT.js";import"./CloseButton-QYicOSXf.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-C3jQMH2T.js";import"./ModalOverlay-fciGF-o6.js";import"./AnimatePresence-9AALF-U0.js";import"./LoaderTransitionContext-B4qziF8m.js";import"./BlurTransition-DQBLlqz2.js";import"./BlurTransition-MGIcubQU.js";import"./Card-cNktQ2pm.js";import"./Card-Doq15t3c.js";import"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-DEQ6-3ub.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-ZVZjhN6L.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-HI2u-NGi.js";import"./FormField-C3pULiZ3.js";import"./Input-aN1otRzO.js";import"./Input-DXRPRK1S.js";import"./Modal-01-XMwDs.js";import"./ModalHeader-CvKW3Jjd.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-GX4de-0N.js";import"./Stack-CqlUafn4.js";import"./Tabs-C3ZyM3u6.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-D2xdJpmw.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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