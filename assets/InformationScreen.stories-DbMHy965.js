import"./useTranslation-ImTl_7Xp.js";import"./react-dom-ChNaym3N.js";import"./createLucideIcon-H9I5BK5P.js";import"./external-link-CfZkPhWa.js";import"./globe-D39Z4uPm.js";import{t as e}from"./InformationPomoshnik-ODY_ACth.js";import"./message-circle-CAkiD9g9.js";import"./send-Bg5kJZM2.js";import"./users-jovslSfT.js";import"./x-CtK3F56K.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CKdlWLgP.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-BOf72TlE.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bk1hc0Il.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-BxXrQNFG.js";import"./Pressable-Bg3DDMfh.js";import"./proxy-CFGHP_Wy.js";import"./ModalOverlay-CNzmzQip.js";import"./use-reduced-motion-DVAUB1l9.js";import"./Typography-DVjocI1l.js";import"./Typography-BY-iGFVZ.js";import"./Modal-DXrlKbTc.js";import"./ModalHeader-DsSVj0-W.js";import"./ModalHeader-CFa6Ec7J.js";import"./ListRow-CVp0j7A9.js";import"./ListRow-EHTZJckC.js";import"./projectLinks-DhG5HRax.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},p={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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