import"./useTranslation-5YtSZpFC.js";import{S as e,t}from"./iframe-DPTPUGSQ.js";import"./react-dom-K2VKBQA_.js";import{a as n,l as r}from"./baseApi-sGsvwXa1.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-B6obFNZz.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-ChzQw0ww.js";import"./scheduleStorage-B3peMIKz.js";import"./Schedule-CcBJWk1K.js";import"./cache-BA3wEMad.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-BWiwbG5R.js";import"./calendar-plus-ChcJgrr0.js";import"./check-DgaQ-g9Z.js";import"./circle-alert-Cz97_TO6.js";import"./circle-check-tKTIJ9QI.js";import"./copy-BuPE15l0.js";import"./external-link-CWeMXfyH.js";import"./info-D_yzd_kR.js";import{t as a}from"./CalendarConnectModal-57b6jIcv.js";import"./Alert-B2uxChxS.js";import"./x-BNiF9Eo_.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-D0Bs9YLH.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-COxhzMDW.js";import"./Button-BA_jpygv.js";import"./IconButton-BoNKYF5G.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-D0V4xfP-.js";import"./CloseButton-Pu8jwsmX.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-Cv57RTRX.js";import"./ModalOverlay-CBjWwBuT.js";import"./AnimatePresence-CXi1-cJS.js";import"./LoaderTransitionContext-BjkgqnwC.js";import"./BlurTransition-Bb5gkZF5.js";import"./BlurTransition-MGIcubQU.js";import"./Card-BVeQUh2_.js";import"./Card-Doq15t3c.js";import"./Typography-D3unIxzR.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-CMOLkmz7.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-BKB6TRkV.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-DqtYaEuH.js";import"./FormField-C3pULiZ3.js";import"./Input-BS6i8ro2.js";import"./Input-DXRPRK1S.js";import"./Modal-D-kQESPt.js";import"./ModalHeader-BFoHjK_G.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-Bg93u7QL.js";import"./Stack-CqlUafn4.js";import"./Tabs-DjFJJibM.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-D2xdJpmw.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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