import"./useTranslation-vF7qFz_t.js";import"./react-dom-B2XyM79R.js";import"./createLucideIcon-SYFtv4X6.js";import"./external-link-BQvZU39g.js";import"./globe-DWkyXDN1.js";import{t as e}from"./InformationPomoshnik-CR04olZ8.js";import"./message-circle-Bv-oWmkx.js";import"./send-DoUQn7tH.js";import"./users-CXtT5t3b.js";import"./x-DUTF6TCW.js";import"./motion-DpqGF0yE.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./CloseButton-CVpCSeVt.js";import"./CloseButton-BTHNVXIU.js";import"./Pressable-DHFzE1EG.js";import"./Pressable-C5QHV1_C.js";import"./proxy-DP15KAnr.js";import"./ModalOverlay-uRgbjjJG.js";import"./use-reduced-motion-CEbtXdw3.js";import"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./Modal-1005tHDh.js";import"./ModalHeader-0MYTR4Rr.js";import"./ModalHeader-B9JizWT5.js";import"./ListRow-B15COSLv.js";import"./ListRow-CbTu-ktQ.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},p={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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