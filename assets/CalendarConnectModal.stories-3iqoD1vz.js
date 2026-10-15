import"./useTranslation-B8gTG6yd.js";import{S as e,t}from"./iframe-BKdHUONo.js";import"./react-dom-CF0G69Hq.js";import{a as n,l as r}from"./baseApi-u8JQcxbm.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-4NMPbtfv.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-Bv0My0j-.js";import"./scheduleStorage-DpjJK5Ap.js";import"./Schedule-CcBJWk1K.js";import"./cache-Dzj5rMo_.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-DwyZ2AN5.js";import"./calendar-plus-DqKRYsGm.js";import"./check-lIEX3c9z.js";import"./circle-alert-CeofWGXO.js";import"./circle-check-qqnjACcV.js";import"./copy-D3swkIWL.js";import"./external-link-B7clKKn4.js";import"./info-Biux0CiQ.js";import{t as a}from"./CalendarConnectModal-BArG0Qkv.js";import"./Alert-jBtuZwCJ.js";import"./x-CRRZ5rnt.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-C4A23dXm.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-AonKdqwj.js";import"./Button-BA_jpygv.js";import"./IconButton-CQJcGC9D.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-gq-pOmBQ.js";import"./CloseButton-CX5RAxxS.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-CrsmlH3B.js";import"./ModalOverlay-BdF8dWKd.js";import"./AnimatePresence-C6X8ztjb.js";import"./LoaderTransitionContext-n5GDSDwX.js";import"./BlurTransition-CaR6CQBE.js";import"./BlurTransition-MGIcubQU.js";import"./Card-C5UqQPnd.js";import"./Card-Doq15t3c.js";import"./Typography-CDEptj5-.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-ke0FreOk.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-B6desk2V.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-BxlEschA.js";import"./FormField-C3pULiZ3.js";import"./Input-DCMqw7KK.js";import"./Input-DXRPRK1S.js";import"./Modal--HK86fZu.js";import"./ModalHeader-A1USY7t8.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-D-QEq7Xc.js";import"./Stack-CqlUafn4.js";import"./Tabs-4kpzCdX4.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-D2xdJpmw.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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