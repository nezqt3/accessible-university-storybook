import"./useTranslation-9RT7qr1b.js";import{S as e,t}from"./iframe-DG2KGKvW.js";import"./react-dom-DYmj885q.js";import{a as n,l as r}from"./baseApi-CVhbRbtT.js";import"./client-CVzJzv1P.js";import"./api-DdI07HHP.js";import{c as i}from"./schedule-CgYsBZmh.js";import"./api-CFUqr1b7.js";import"./scheduleSubscriptions-Dty8NWmO.js";import"./scheduleStorage-CsT1Px4s.js";import"./Schedule-BJApNQWq.js";import"./cache-RKXYg0UC.js";import"./format-DRsuurA_.js";import"./studyPlaces-fvQXGD6t.js";import"./createLucideIcon-Bfb3zjcZ.js";import"./calendar-plus-BW1Rx5ZV.js";import"./check-jxQiSG7z.js";import"./circle-alert-CnuIC1r1.js";import"./circle-check-B7MMyo4q.js";import"./copy-D7uTVWrU.js";import"./external-link-Db3I-G5Y.js";import"./info-CiHN1iTs.js";import{t as a}from"./CalendarConnectModal-Bl2wgENN.js";import"./Alert-zchoyxLR.js";import"./x-Bq7Qs63O.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-DY6ywSD3.js";import"./Button-DDTwPwQw.js";import"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CsT_IW0V.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-BICjNce_.js";import"./ModalOverlay-W5r53p_K.js";import"./AnimatePresence-BRsQ-GJZ.js";import"./use-reduced-motion-CWStJdJS.js";import"./BlurTransition-DoFNgjyr.js";import"./BlurTransition-Lagju-WE.js";import"./Card-aXTNdhwn.js";import"./Card-DMf2-Jiv.js";import"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-C2E8TASE.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-BTTl52FZ.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-CpUC9iGn.js";import"./FormField-DI1mxX-F.js";import"./Input-BgmiqVwQ.js";import"./Input-BJFMwxMd.js";import"./Modal-BDb8M2bR.js";import"./ModalHeader-7ahH-fNQ.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-V_bmqid3.js";import"./Stack-Cjv54EAV.js";import"./Tabs-B9B7rgPq.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-hus3HJm6.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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