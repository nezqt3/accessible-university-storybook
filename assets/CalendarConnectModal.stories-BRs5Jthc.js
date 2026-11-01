import"./useTranslation-C3Z1tYTP.js";import{t as e,w as t}from"./iframe-BWQ9bya-.js";import"./react-dom-DJAx-xjr.js";import{a as n,l as r}from"./baseApi-BEp6PsLN.js";import"./client-AVrXl3O0.js";import{c as i}from"./schedule-CjwyQz-D.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-Bw27sRfw.js";import"./scheduleStorage-Im5BH6ln.js";import"./Schedule-BJApNQWq.js";import"./cache-B9pmE6cz.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-VwXisgqe.js";import"./calendar-plus-m_RvlrFk.js";import"./check-CA4ORgZD.js";import"./circle-alert-DyyghV65.js";import"./circle-check-VKsYqJXe.js";import"./copy-CWBZqHdO.js";import"./external-link-CwbhIFTU.js";import"./info-dgFy7BYg.js";import{t as a}from"./CalendarConnectModal-ZnsIzaAj.js";import"./Alert-DrLPQYRU.js";import"./x-B0zMJXD3.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BcUILXuS.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-Bts8SiHS.js";import"./Button-BA_jpygv.js";import"./IconButton-BTFOrYWb.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-hK1S3r34.js";import"./CloseButton-CLXiGdep.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-B2yEO12g.js";import"./ModalOverlay-Dawcoiog.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import"./Card-CbTvXY5j.js";import"./Card-Doq15t3c.js";import"./Typography-CZ8GAg4R.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-Cc4kVm9k.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-BfxCCHOs.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-LssLkjZA.js";import"./FormField-C3pULiZ3.js";import"./Input-BuXSbUmQ.js";import"./Input-DXRPRK1S.js";import"./Modal-LZYuD64Z.js";import"./ModalHeader-gPspNMox.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-DRPRntz9.js";import"./Stack-CqlUafn4.js";import"./Tabs-CgMJ_Ihu.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-Cs1dyDPL.js";var c=t(),l=e(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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