import"./useTranslation-DYjPHpZM.js";import"./react-dom-Bhq1aSFJ.js";import"./createLucideIcon-Ds0JKKWX.js";import"./external-link-DFNoiFNy.js";import"./globe-D-sIyqd1.js";import{t as e}from"./InformationPomoshnik-CsuRRELU.js";import"./message-circle-BnQZwCWT.js";import"./send-BlawhIQ_.js";import"./users-DRTPWYMX.js";import"./x-DenKBl5n.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BWaRkYpR.js";import"./InlineSpinner-DGBp7q51.js";import"./IconButton-BaMHE2r4.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BrCg84PT.js";import"./CloseButton-QYicOSXf.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-CaL2LUCh.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-C3jQMH2T.js";import"./ModalOverlay-fciGF-o6.js";import"./LoaderTransitionContext-B4qziF8m.js";import"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import"./Modal-01-XMwDs.js";import"./ModalHeader-CvKW3Jjd.js";import"./ModalHeader-B5wsWETS.js";import"./ListRow-C87WjtGT.js";import"./ListRow-BtepeKeJ.js";import"./projectLinks-CCIxDlWD.js";var{expect:t,waitFor:n,within:r}=__STORYBOOK_MODULE_TEST__,i={sectionTitles:{subscriptions:`Подписки на расписание`,contact:`Связь с командой сервиса`,official:`Официальные университетские ресурсы`},resources:{telegram:{title:`Telegram для расписания`,description:`Бот для расписания и уведомлений об изменениях`},max:{title:`MAX для расписания`,description:`Бот для расписания и уведомлений об изменениях`},support:{title:`Техническая поддержка сервиса`,description:`Сообщить об ошибке или предложить улучшение`},community:{title:`ИТ-Сообщество университета`,description:`Канал профессионального сообщества`},official:{title:`Финансовый университет при Правительстве Российской Федерации`,description:`Официальный источник расписания занятий`}}},a={title:`Screens/About`,component:e,parameters:{layout:`fullscreen`},args:{isOpen:!0,onClose:()=>{}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={parameters:{viewport:{defaultViewport:`mobile`}}},l={args:{copy:i},parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}},u={globals:{theme:`dark`}},d={globals:{theme:`light`}},f={globals:{theme:`dark`,palette:`pink`}},p={play:async({canvasElement:e})=>{let i=await r(e.ownerDocument.body).findByRole(`link`,{name:/telegram/i});i.focus(),await n(()=>t(i).toHaveFocus())}},m={args:{reducedMotion:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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