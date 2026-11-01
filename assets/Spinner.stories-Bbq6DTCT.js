import"./useTranslation-C3Z1tYTP.js";import{t as e,w as t}from"./iframe-BWQ9bya-.js";import"./motion-C9fxwz80.js";import"./use-reduced-motion-B2yEO12g.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import{n}from"./Typography-CZ8GAg4R.js";import"./Typography-DVvNjpAw.js";import{t as r}from"./Spinner-Dj3a0oQB.js";import{t as i}from"./Stack-DRPRntz9.js";import"./Stack-CqlUafn4.js";var a=t(),o=e(),s={title:`States/Spinner`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Название университета отображается на языке интерфейса без смены переводов.`}}},args:{animateWords:!0}};const c={},l={args:{animateWords:!1}},u={...c,globals:{theme:`light`}},d={...c,globals:{theme:`dark`}},f={...c,globals:{textScale:`large`}},p={globals:{language:`en`}},m={render:function(){let[e,t]=(0,a.useState)(0);return(0,o.jsxs)(i,{gap:`4`,style:{padding:`var(--ui-space-4)`},children:[(0,o.jsx)(r,{animateWords:!0,onReady:()=>t(e=>e+1)}),(0,o.jsxs)(n,{size:`sm`,tone:`muted`,role:`status`,children:[`onReady вызван: `,e]})]})}},h={parameters:{docs:{description:{story:`Проверьте системное prefers-reduced-motion: остаётся короткое появление без движения. onReady вызывается один раз после появления.`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    animateWords: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    language: "en"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ReadyCallbackExample() {
    const [readyCount, setReadyCount] = useState(0);
    return <Stack gap="4" style={{
      padding: "var(--ui-space-4)"
    }}>
        <Spinner animateWords onReady={() => setReadyCount(count => count + 1)} />
        <Text size="sm" tone="muted" role="status">
          onReady вызван: {readyCount}
        </Text>
      </Stack>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Проверьте системное prefers-reduced-motion: остаётся короткое появление без движения. onReady вызывается один раз после появления."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`RepeatedShow`,`Light`,`Dark`,`LargeText`,`English`,`ReadyCallback`,`ReducedMotion`];export{d as Dark,c as Default,p as English,f as LargeText,u as Light,m as ReadyCallback,h as ReducedMotion,l as RepeatedShow,g as __namedExportsOrder,s as default};