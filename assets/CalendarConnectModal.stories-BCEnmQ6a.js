import"./useTranslation-r4xO1t1U.js";import{S as e,t}from"./iframe-kF-APqyp.js";import"./react-dom-jYzeVFdR.js";import{a as n,l as r}from"./baseApi-CP_lV8aw.js";import"./client-C20P11so.js";import"./api-2ovOr7ng.js";import{c as i}from"./schedule-BVQNuTIb.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-CayoTKK3.js";import"./scheduleStorage-BFwts-7S.js";import"./Schedule-BJApNQWq.js";import"./cache-Bsu39zI5.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-D1UjONYr.js";import"./calendar-plus-DmB7xgnR.js";import"./check-D6LgMK2O.js";import"./circle-alert-BjxbLB1M.js";import"./circle-check-BaSJpN6v.js";import"./copy-Dfhd9TJ-.js";import"./external-link-CmXPKfkx.js";import"./info-Cednekog.js";import{t as a}from"./CalendarConnectModal-DHDHQeF5.js";import"./Alert-B29qfMWR.js";import"./x-DEosaj9j.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BVLlDt8J.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-weYjeSKY.js";import"./Button-DDTwPwQw.js";import"./IconButton-Ospn9fJu.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BboE_dUN.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-BQAo5aAS.js";import"./ModalOverlay-_iYqSxT_.js";import"./AnimatePresence-CNpM86Yv.js";import"./use-reduced-motion-DErL7L4T.js";import"./BlurTransition-CoZN5TAY.js";import"./BlurTransition-Lagju-WE.js";import"./Card-D4mjlvRe.js";import"./Card-DMf2-Jiv.js";import"./Typography-xWKebxyx.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-HOVfr-yx.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-BFAyqa6j.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-D2Mg6Hxr.js";import"./FormField-DI1mxX-F.js";import"./Input-CVafAwFC.js";import"./Input-BJFMwxMd.js";import"./Modal-NXLRbw5m.js";import"./ModalHeader-EWM89jpv.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-BcD5kRk1.js";import"./Stack-Cjv54EAV.js";import"./Tabs-B9PNZ4Gg.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-hus3HJm6.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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