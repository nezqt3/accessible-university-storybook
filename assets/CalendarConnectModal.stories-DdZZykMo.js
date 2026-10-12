import"./useTranslation-j5FBGlJS.js";import{S as e,t}from"./iframe-c-OIrLS8.js";import"./react-dom-Cw2-PvM9.js";import{a as n,l as r}from"./baseApi-BlHBeGmZ.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-DDNL8MYz.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-CZDz0inK.js";import"./scheduleStorage-CeUmAkah.js";import"./Schedule-BJApNQWq.js";import"./cache-oM0JVnhe.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-8Ffxof8e.js";import"./calendar-plus-PqfF-w3Q.js";import"./check-DoOfqcKO.js";import"./circle-alert-C75JKMpi.js";import"./circle-check-DCXb-FpM.js";import"./copy-D-ulJsQ4.js";import"./external-link-Ccfgmtf9.js";import"./info-CbOjvF1x.js";import{t as a}from"./CalendarConnectModal-DUzYQSKO.js";import"./Alert-DkMkhBbN.js";import"./x-Dvjhwf7E.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-MNXeDu62.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-CgWt6cKq.js";import"./Button-BA_jpygv.js";import"./IconButton-EQk2MPKp.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-D_FdkAUH.js";import"./CloseButton-E9qr7WDM.js";import"./proxy-BvZS6H3-.js";import"./ModalOverlay-B6h2OEHz.js";import"./AnimatePresence-D_riaITI.js";import"./use-reduced-motion-CNeWwIr3.js";import"./BlurTransition-CnMNU1Hq.js";import"./BlurTransition-BND0kpmE.js";import"./Card-DpUSDnGA.js";import"./Card-DdYWmRlF.js";import"./Typography-MScSgUfP.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-CUkcHAZO.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./Skeleton-B4TsMn43.js";import"./Skeleton-BWjh8IIH.js";import"./FormField-D0o-kvvY.js";import"./FormField-00r7ntwY.js";import"./Input-Dpu-mFMX.js";import"./Input-_61HGnzM.js";import"./Modal-Dq0yBvfL.js";import"./ModalHeader-CNf4knG0.js";import"./ModalHeader-D9TyazZT.js";import"./Stack-DBTuwWGP.js";import"./Stack-JZT35eEm.js";import"./Tabs-qAJZKi9y.js";import"./Tabs-BaxcPDxC.js";import"./schedule-Dab6WqO0.js";import{n as s}from"./scheduleDesign.fixtures-Bua049ul.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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