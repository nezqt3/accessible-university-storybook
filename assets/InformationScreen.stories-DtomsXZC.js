import"./useTranslation-Bqh59kuu.js";import"./react-dom-uuwrmfYG.js";import"./createLucideIcon-cfOq0vGI.js";import"./external-link-DaP3YjNQ.js";import"./globe-FfqBV1Tt.js";import{t as e}from"./InformationPomoshnik-DKwIVlai.js";import"./message-circle-Dt-xh-KW.js";import"./send-BxSe-Bv4.js";import"./users-DkI3wPVW.js";import"./x-CAFkjvly.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import"./IconButton-KtMvhiqI.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BNnSMS-F.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-B6UndwMG.js";import"./Pressable-4oYskg3v.js";import"./proxy-B27OI5yE.js";import"./ModalOverlay-DGegsSC0.js";import"./use-reduced-motion-DVIztM76.js";import"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";import"./Modal-9XkcOwQ7.js";import"./ModalHeader-B1C_todG.js";import"./ModalHeader-CFa6Ec7J.js";import"./ListRow-CsV47AW6.js";import"./ListRow-B7yOQXqt.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},p={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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