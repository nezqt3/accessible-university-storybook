import"./useTranslation-C3Z1tYTP.js";import"./motion-C9fxwz80.js";import"./use-reduced-motion-B2yEO12g.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import"./Spinner-Dj3a0oQB.js";import{t as e}from"./Loader-BOcdNsRi.js";var t={title:`States/Loader`,component:e,parameters:{layout:`fullscreen`,docs:{description:{component:`Полноэкранный лоадер: смена языков включена при первом запуске, повторные показы используют статичное название.`}}},args:{visible:!0,animateWords:!0}};const n={},r={args:{visible:!1}},i={args:{animateWords:!1}},a={...n,globals:{theme:`light`}},o={...n,globals:{theme:`dark`}},s={...n,globals:{textScale:`large`}},c={...o,parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Проверка стартового экрана на ширине 320 px: название Финансового университета остаётся в одной строке.`}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    animateWords: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Visible,
  globals: {
    theme: "light"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Visible,
  globals: {
    theme: "dark"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Visible,
  globals: {
    textScale: "large"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Dark,
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    },
    docs: {
      description: {
        story: "Проверка стартового экрана на ширине 320 px: название Финансового университета остаётся в одной строке."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const l=[`Visible`,`Hidden`,`RepeatedShow`,`Light`,`Dark`,`LargeText`,`CompactMobile`];export{c as CompactMobile,o as Dark,r as Hidden,s as LargeText,a as Light,i as RepeatedShow,n as Visible,l as __namedExportsOrder,t as default};