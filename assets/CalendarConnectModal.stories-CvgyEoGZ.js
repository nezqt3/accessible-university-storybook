import"./useTranslation-B-tF1GJf.js";import{S as e,t}from"./iframe-B7OPhEMi.js";import"./react-dom-D7tkLgFl.js";import{a as n,l as r}from"./baseApi-CM5VTdqj.js";import"./client-DMLkocDF.js";import{c as i}from"./schedule-CwHeBUKi.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-D_o-YBSo.js";import"./scheduleStorage-DKLrATLd.js";import"./Schedule-CcBJWk1K.js";import"./cache-CKzMGONV.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./createLucideIcon-DbDnuAYV.js";import"./calendar-plus-CLOTHLwA.js";import"./check-CvihdCaM.js";import"./circle-alert-CN9crsa3.js";import"./circle-check-Dr1jnDAS.js";import"./copy-DTcu1M7b.js";import"./external-link-C1j6WqAs.js";import"./info-8KH9P6ba.js";import{t as a}from"./CalendarConnectModal-D-Zx5iBX.js";import"./Alert-CuD7F7eA.js";import"./x-DQYUESx-.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-Ct9XnNTG.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-DmdgFkXT.js";import"./Button-BA_jpygv.js";import"./IconButton-AXY1q_LQ.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bv4hitaO.js";import"./CloseButton-E9qr7WDM.js";import"./use-reduced-motion-CHTlHBRt.js";import"./ModalOverlay-D9DROLB9.js";import"./AnimatePresence-CTVbiyrY.js";import"./BlurTransition-6xzKt1nZ.js";import"./BlurTransition-Lagju-WE.js";import"./Card-Lp0T-lMW.js";import"./Card-DMf2-Jiv.js";import"./Typography-QiiFuIbu.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-BfVgtv6p.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-Dy0g_iRD.js";import"./Skeleton-Br01A5O-.js";import"./FormField-CRGnLvnv.js";import"./FormField-DL6kMHw0.js";import"./Input-CVf4GuGL.js";import"./Input-DLJ-L1Fs.js";import"./Modal-DFHXobue.js";import"./ModalHeader-GwJRNHaC.js";import"./ModalHeader-DebK5TiL.js";import"./Stack-BfxkgPqK.js";import"./Stack-Cjv54EAV.js";import"./Tabs-Co1jNEJV.js";import"./Tabs-wkaJQrPk.js";import"./schedule-DOzideio.js";import{n as s}from"./scheduleDesign.fixtures-Dsy3h-cq.js";var c=e(),l=t(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Schedule/CalendarConnection`,component:a,parameters:{layout:`fullscreen`},args:{isOpen:!0,schedule:s,studyPlace:`fin`,onClose:()=>{}},render:function(e){let[t]=(0,c.useState)(()=>n({reducer:{[i.reducerPath]:i.reducer},middleware:e=>e().concat(i.middleware)})),[s,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{let n=!0,r=`https://example.com/calendar/very-long-university-department-schedule.ics`;return t.dispatch(i.util.upsertQueryData(`getCalendarLinks`,{entityType:`group`,entityId:e.schedule.id,entityName:e.schedule.name,studyPlace:e.studyPlace},{calendar_name:e.schedule.name,links:{ics:r,webcal:r,google:r,outlook:r,yandex:r,mail:r,apple:r}})).then(()=>{n&&u(!0)}),()=>{n=!1}},[e.schedule,e.studyPlace,t]),s?(0,l.jsxs)(r,{store:t,children:[(0,l.jsx)(o,{onClick:()=>f(!0),children:`Подключить календарь`}),(0,l.jsx)(a,{...e,isOpen:d,onClose:()=>f(!1)})]}):(0,l.jsx)(l.Fragment,{})}};const p={},m={args:{schedule:{...s,name:`Международные информационные системы и технологии — учебная группа дополнительной профессиональной подготовки`}},globals:{textScale:`large`}},h={...m,globals:{theme:`dark`,textScale:`large`}},g={play:async({canvasElement:e})=>{let t=d(e.ownerDocument.body);await u.click(await t.findByRole(`tab`,{name:`Outlook`})),await u.click(t.getByRole(`tab`,{name:`Яндекс`})),await u.click(t.getByRole(`tab`,{name:`Apple`}))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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