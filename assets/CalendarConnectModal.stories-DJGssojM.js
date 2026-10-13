import"./useTranslation-Dg9GL7iP.js";import{S as e,t}from"./iframe-ClCYdshi.js";import"./react-dom-B-0JhG-l.js";import{a as n,l as r}from"./baseApi-B6u287id.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-IeeggeE6.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-GPCfgEc0.js";import"./scheduleStorage-DUygp2En.js";import"./Schedule-CcBJWk1K.js";import"./cache-6QIktaPD.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-DjL_LVMr.js";import"./calendar-plus-DCkwZp26.js";import"./check-D1DCb6VU.js";import"./circle-alert-COE9GjV-.js";import"./circle-check-huzsAyIL.js";import"./copy-bYAKlFi_.js";import"./external-link-Bqo5wb7v.js";import"./info-DAmeDkXz.js";import{t as a}from"./CalendarConnectModal-qSUi2VU0.js";import"./Alert-CJO8py1i.js";import"./x-ZpNu4unZ.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-Bdm6HvY3.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-FXbK_Go6.js";import"./Button-BA_jpygv.js";import"./IconButton-CYCj3psM.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-B3VAWntq.js";import"./CloseButton-B3dKItLN.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-E9PHxrQk.js";import"./ModalOverlay-BtyLBt8o.js";import"./AnimatePresence-C1iUx3QF.js";import"./LoaderTransitionContext-B4rL2ECO.js";import"./BlurTransition-BhIAkPL9.js";import"./BlurTransition-MGIcubQU.js";import"./Card-CtZ0kOZT.js";import"./Card-Doq15t3c.js";import"./Typography-CN1AqH8V.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-BmKS7p-F.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-2QZu83bi.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-B_kib0Sy.js";import"./FormField-C3pULiZ3.js";import"./Input-bYrISLMA.js";import"./Input-DXRPRK1S.js";import"./Modal-6HEe1p9t.js";import"./ModalHeader-8dGC3Hw_.js";import"./ModalHeader-B5wsWETS.js";import"./Stack-BvnVxhEn.js";import"./Stack-CqlUafn4.js";import"./Tabs-zivXk4hx.js";import"./Tabs-CszNVceh.js";import"./schedule-BzzS6T-2.js";import{n as s}from"./scheduleDesign.fixtures-D2xdJpmw.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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