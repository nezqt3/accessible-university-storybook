import"./useTranslation-D-aU4f03.js";import{S as e,t}from"./iframe-BgC4QF32.js";import"./react-dom-CL5saaxG.js";import{a as n,l as r}from"./baseApi-DlZWa_4e.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-DBCM0gyi.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-eLOKqjyl.js";import"./scheduleStorage-DGu8OJCG.js";import"./Schedule-CcBJWk1K.js";import"./cache-DBkZzxiK.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-B16nweCc.js";import"./calendar-plus-Dqh36zE4.js";import"./check-v_LV27aT.js";import"./circle-alert-BSxUa3R5.js";import"./circle-check-C6xxfQkM.js";import"./copy-Nr_aSvXx.js";import"./external-link-BVSn5n19.js";import"./info-CktH8GD8.js";import{t as a}from"./CalendarConnectModal-DVPv4uP5.js";import"./Alert-BWh6FU8G.js";import"./x-DeThYvLg.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CBIQLgmS.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-BWU--gB6.js";import"./Button-BA_jpygv.js";import"./IconButton-CBDZ9vXW.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BOKqPjCS.js";import"./CloseButton-CKC4LnPI.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-BiSVJF6j.js";import"./ModalOverlay-Ds_UD4_I.js";import"./AnimatePresence-Bbbot8bT.js";import"./LoaderTransitionContext-DKcwLzlE.js";import"./BlurTransition-D7u-HmKI.js";import"./BlurTransition-MGIcubQU.js";import"./Card-DpZ30Oxq.js";import"./Card-Doq15t3c.js";import"./Typography-BH1B6yTK.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-CzuKe7we.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-ClEm9rfE.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-WG2VqsSE.js";import"./FormField-C3pULiZ3.js";import"./Input-D15hzeKy.js";import"./Input-DXRPRK1S.js";import"./Modal-BPyHJU71.js";import"./ModalHeader-BRUlOqff.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-D9ZD5KTR.js";import"./Stack-CqlUafn4.js";import"./Tabs-BWYKDmLJ.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-D2xdJpmw.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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