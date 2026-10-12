import"./useTranslation-DsOmfLg0.js";import{S as e,t}from"./iframe-CA1tRuLH.js";import"./react-dom-B3bHQpZ9.js";import{a as n,l as r}from"./baseApi-CB2wT-LA.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-D0evEriP.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-FZwXzOGH.js";import"./scheduleStorage-WiblNwqT.js";import"./Schedule-BJApNQWq.js";import"./cache-dVxcjW0P.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-B0XCVSnz.js";import"./calendar-plus-CGTmIpol.js";import"./check-irl1GvcT.js";import"./circle-alert-DT_LqibJ.js";import"./circle-check-hvl1kg6-.js";import"./copy-BJzCWPny.js";import"./external-link-7W1_OD1I.js";import"./info-2XmxvIYa.js";import{t as a}from"./CalendarConnectModal-BIKVULkS.js";import"./Alert-CPIzLK33.js";import"./x-BnvmefyB.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BtdkRkXG.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-rjz6uuRi.js";import"./Button-BA_jpygv.js";import"./IconButton-C3QD1e8a.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-D-_bl2ee.js";import"./CloseButton-E9qr7WDM.js";import"./proxy-U5T6tT4W.js";import"./ModalOverlay-D0KBfW_-.js";import"./AnimatePresence-B8PQDe-T.js";import"./use-reduced-motion-CywbYQVi.js";import"./BlurTransition-DzjJuHnH.js";import"./BlurTransition-BND0kpmE.js";import"./Card-Dw9Zqzk8.js";import"./Card-DdYWmRlF.js";import"./Typography-Vf11J9Je.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-BH9wO796.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./Skeleton-K_qgqhhL.js";import"./Skeleton-BWjh8IIH.js";import"./FormField-DYHExcHo.js";import"./FormField-00r7ntwY.js";import"./Input-DbXNNOP0.js";import"./Input-_61HGnzM.js";import"./Modal-CqUa9KYP.js";import"./ModalHeader-Ck1PWgJI.js";import"./ModalHeader-D9TyazZT.js";import"./Stack-CW1dR23i.js";import"./Stack-JZT35eEm.js";import"./Tabs-BTMsWcHv.js";import"./Tabs-BaxcPDxC.js";import"./schedule-Dab6WqO0.js";import{n as s}from"./scheduleDesign.fixtures-Bua049ul.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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