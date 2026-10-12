import"./useTranslation-CafRpypV.js";import{S as e,t}from"./iframe-DN1E7RpG.js";import"./react-dom-CukuyTFA.js";import{a as n,l as r}from"./baseApi-DWntR_KC.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-8EDbidSg.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-Ba4FU2xQ.js";import"./scheduleStorage-D7VCBMgJ.js";import"./Schedule-CcBJWk1K.js";import"./cache-B1pyJju8.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-CDfd7eGn.js";import"./calendar-plus-BhcqzbN3.js";import"./check-B5mVuwUS.js";import"./circle-alert-BdhwRM1e.js";import"./circle-check-o7TibLov.js";import"./copy-BQEOnOwY.js";import"./external-link-CEuQSgm9.js";import"./info-nQCdEEZI.js";import{t as a}from"./CalendarConnectModal-CNBwBIF6.js";import"./Alert-D9nxRb9F.js";import"./x-C9EZ3p_n.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-DVoFvLHW.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-sdFnzCqF.js";import"./Button-BA_jpygv.js";import"./IconButton-CWxSSWnN.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-CZxQJFfs.js";import"./CloseButton-E9qr7WDM.js";import"./proxy-C9vGvs78.js";import"./ModalOverlay-rl1qb3NW.js";import"./AnimatePresence-DnbKgtnD.js";import"./use-reduced-motion-CN9Dfouk.js";import"./BlurTransition-BIuL8dSL.js";import"./BlurTransition-BND0kpmE.js";import"./Card-BhTk1hMQ.js";import"./Card-DdYWmRlF.js";import"./Typography-BBW_MkNq.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-DERQwxjh.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./Skeleton-CMdoNTIE.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-BfYEaJC7.js";import"./FormField-DI1mxX-F.js";import"./Input-CrKq4O6X.js";import"./Input-BJFMwxMd.js";import"./Modal-BVVi_Lcv.js";import"./ModalHeader-RyBon5Ab.js";import"./ModalHeader-CFa6Ec7J.js";import"./Stack-_x0g0iqp.js";import"./Stack-Ca2JYwwn.js";import"./Tabs-BLSJDMjw.js";import"./Tabs-CXnlj7nU.js";import"./schedule-1w8baC0U.js";import{n as s}from"./scheduleDesign.fixtures-DFE7O40F.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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