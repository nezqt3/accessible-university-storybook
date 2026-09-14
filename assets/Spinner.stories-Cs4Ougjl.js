import"./useTranslation-CZVpUEvE.js";import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./motion-BSxM25dS.js";import{n}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./proxy-BJb5GNu-.js";import"./use-reduced-motion-B2DzoRdd.js";import{t as r}from"./Spinner-DUlAzwoz.js";import{t as i}from"./Stack-B9h0CGiv.js";import"./Stack-duc46O7L.js";var a=t(),o=e(),s={title:`States/Spinner`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Брендированный индикатор запуска с коротким появлением. onReady вызывается один раз после появления логотипа и текста.`}}}};const c={},l={...c,globals:{theme:`light`}},u={...c,globals:{theme:`dark`}},d={...c,globals:{textScale:`large`}},f={globals:{language:`en`}},p={render:function(){let[e,t]=(0,a.useState)(0);return(0,o.jsxs)(i,{gap:`4`,style:{padding:`var(--ui-space-4)`},children:[(0,o.jsx)(r,{onReady:()=>t(e=>e+1)}),(0,o.jsxs)(n,{size:`sm`,tone:`muted`,role:`status`,children:[`onReady вызван: `,e]})]})}},m={parameters:{docs:{description:{story:`Проверьте системное prefers-reduced-motion: остаётся короткое появление без движения. onReady вызывается один раз после появления.`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    language: "en"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ReadyCallbackExample() {
    const [readyCount, setReadyCount] = useState(0);
    return <Stack gap="4" style={{
      padding: "var(--ui-space-4)"
    }}>
        <Spinner onReady={() => setReadyCount(count => count + 1)} />
        <Text size="sm" tone="muted" role="status">
          onReady вызван: {readyCount}
        </Text>
      </Stack>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Проверьте системное prefers-reduced-motion: остаётся короткое появление без движения. onReady вызывается один раз после появления."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`Light`,`Dark`,`LargeText`,`English`,`ReadyCallback`,`ReducedMotion`];export{u as Dark,c as Default,f as English,d as LargeText,l as Light,p as ReadyCallback,m as ReducedMotion,h as __namedExportsOrder,s as default};