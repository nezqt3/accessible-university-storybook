import"./useTranslation-CCqsX0U5.js";import"./react-dom-DU-3k8w7.js";import"./createLucideIcon-IZGuaEMa.js";import"./external-link-ustcjU0S.js";import"./globe-D_x_V9IL.js";import{t as e}from"./InformationPomoshnik-N_5EHD49.js";import"./message-circle-H2WG9p_A.js";import"./send-D9SNPLoQ.js";import"./users-LPfP3CH4.js";import"./x-DfQHXYeA.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-Dyt5E--9.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-B3f5oNTI.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-C0ow8V0B.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-Cj2eDNGw.js";import"./Pressable-Bg3DDMfh.js";import"./proxy-cZ0og6n2.js";import"./ModalOverlay-BQyoz1jD.js";import"./use-reduced-motion-BnmImsGO.js";import"./Typography-MhBGRVCK.js";import"./Typography-BY-iGFVZ.js";import"./Modal-Bp8p4Gzv.js";import"./ModalHeader-BXSlcaNh.js";import"./ModalHeader-CFa6Ec7J.js";import"./ListRow-CPXpwUyk.js";import"./ListRow-EHTZJckC.js";import"./projectLinks-DhG5HRax.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},p={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    copy: longTranslatedCopy
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  },
  globals: {
    textScale: "large"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const telegramLink = await body.findByRole("link", {
      name: /telegram/i
    });
    telegramLink.focus();
    await waitFor(() => expect(telegramLink).toHaveFocus());
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  }
}`,...p.parameters?.docs?.source}}};const m=[`Default`,`SmallMobile320`,`StandardMobile390`,`LongTranslatedLabels`,`DarkMode`,`LightMode`,`KeyboardFocus`,`ReducedMotion`];export{u as DarkMode,o as Default,f as KeyboardFocus,d as LightMode,l as LongTranslatedLabels,p as ReducedMotion,s as SmallMobile320,c as StandardMobile390,m as __namedExportsOrder,a as default};