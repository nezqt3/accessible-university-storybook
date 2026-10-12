import"./useTranslation-DT8Kd1QK.js";import{S as e,t}from"./iframe-CG-xQPqP.js";import"./react-dom-D3wgKqEx.js";import{a as n,l as r}from"./baseApi-DC7_9TmO.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-5WLGRs8X.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-CMnwCRCh.js";import"./scheduleStorage-Cf1cy5cj.js";import"./Schedule-BJApNQWq.js";import"./cache-DEMJylV6.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-MKlZX7_p.js";import"./calendar-plus-CSovuIDh.js";import"./check-X_2Z78iv.js";import"./circle-alert-D-RqaOVU.js";import"./circle-check-BLSrtyV9.js";import"./copy-DBJkqdu2.js";import"./external-link-DK9_Bhyj.js";import"./info-DzlxgnlW.js";import{t as a}from"./CalendarConnectModal-CvdfbxUC.js";import"./Alert-CmEjPcsl.js";import"./x-DbUNg-QN.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-DIQt-3z1.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-DWntXXX9.js";import"./Button-DDTwPwQw.js";import"./IconButton-S4AysGu9.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CKyOm4DY.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-Bd5eAUpW.js";import"./ModalOverlay-Chebjwzd.js";import"./AnimatePresence-D_NWCjzt.js";import"./use-reduced-motion-Tx53gskP.js";import"./BlurTransition-D6j1APYJ.js";import"./BlurTransition-Lagju-WE.js";import"./Card-CtL_l-Gn.js";import"./Card-DMf2-Jiv.js";import"./Typography-Cflu5Aq4.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-De9TtYHY.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-Do7LKvof.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-BMcmZhW3.js";import"./FormField-DI1mxX-F.js";import"./Input-BnrWz7Yx.js";import"./Input-BJFMwxMd.js";import"./Modal-BpL2jAih.js";import"./ModalHeader-BDLf5v5F.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-CjJkh-Iz.js";import"./Stack-Ca2JYwwn.js";import"./Tabs-BYyoW3om.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-Dk63VHWl.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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