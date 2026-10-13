import"./useTranslation-CmLHI3t9.js";import"./react-dom-Bzb2Wwvd.js";import"./createLucideIcon-B3I6TOCg.js";import"./external-link-B2PU6Rgm.js";import"./globe-Dex9gBwL.js";import{t as e}from"./InformationPomoshnik-BTUtPBxY.js";import"./message-circle-BL49YdTv.js";import"./send-B740OMn7.js";import"./users-BrmXnbWH.js";import"./x-BuL-VI8h.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-uJA94-u8.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-DBmJPeP7.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-bHhLiBVp.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-G1UtMFgk.js";import"./Pressable-Bg3DDMfh.js";import"./use-reduced-motion-BLulvk4g.js";import"./ModalOverlay-DXigLfyE.js";import"./Typography-D6Zus2qe.js";import"./Typography-Q4VDshPG.js";import"./Modal-DQLMVgUD.js";import"./ModalHeader-BmcelA-A.js";import"./ModalHeader-DebK5TiL.js";import"./ListRow-BV_dJuBm.js";import"./ListRow-B7yOQXqt.js";import"./projectLinks-B31B8pf2.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={globals:{theme:`dark`,palette:`pink`}},p={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},m={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  globals: {
    theme: "dark",
    palette: "pink"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`SmallMobile320`,`StandardMobile390`,`LongTranslatedLabels`,`DarkMode`,`LightMode`,`PinkAccents`,`KeyboardFocus`,`ReducedMotion`];export{u as DarkMode,o as Default,p as KeyboardFocus,d as LightMode,l as LongTranslatedLabels,f as PinkAccents,m as ReducedMotion,s as SmallMobile320,c as StandardMobile390,h as __namedExportsOrder,a as default};