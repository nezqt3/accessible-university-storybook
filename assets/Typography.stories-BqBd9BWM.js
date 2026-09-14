import{t as e}from"./iframe-Ow4Lrb8m.js";import{n as t,t as n}from"./Typography-B07p8rVT.js";var r=e(),i={title:`Foundations/Typography`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Типографическая система Heading и Text с согласованными размерами, насыщенностью, цветами и выравниванием.`}}},args:{children:`Заголовок`}};const a={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-3)`},children:[(0,r.jsx)(n,{level:1,size:`display`,children:`Display — главный экран`}),(0,r.jsx)(n,{level:1,children:`H1 / lg — заголовок страницы`}),(0,r.jsx)(n,{level:2,size:`page`,children:`Page — заголовок вложенной страницы или sheet`}),(0,r.jsx)(n,{level:2,children:`H2 / md — заголовок секции`}),(0,r.jsx)(n,{level:3,children:`H3 / sm — заголовок карточки`})]})},o={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`,maxWidth:520},children:[(0,r.jsx)(t,{children:`Body — основной текст приложения. Используется в описаниях и параграфах.`}),(0,r.jsx)(t,{size:`sm`,tone:`soft`,children:`Body small / soft — вторичный текст в карточках.`}),(0,r.jsx)(t,{size:`sm`,tone:`muted`,children:`Body small / muted — подписи и метаданные.`}),(0,r.jsx)(t,{size:`caption`,tone:`muted`,children:`Caption — даты, счетчики, вспомогательные подписи.`}),(0,r.jsx)(t,{size:`sm`,tone:`brand`,weight:`medium`,children:`Brand — акцентный текст со смыслом действия.`}),(0,r.jsx)(t,{size:`sm`,tone:`danger`,weight:`medium`,children:`Danger — текст ошибки.`})]})},s={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`,maxWidth:560},children:[(0,r.jsx)(t,{size:`caption`,tone:`muted`,children:`Сервисы / Мероприятия`}),(0,r.jsx)(n,{level:1,children:`Мероприятия и олимпиады`}),(0,r.jsx)(t,{tone:`muted`,children:`Иерархия строится размером и насыщенностью текста, а не декоративными элементами.`})]})},c={...a,globals:{theme:`light`}},l={...a,globals:{theme:`dark`}},u={...a,globals:{textScale:`large`}},d={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-4)`,maxWidth:`24rem`},children:[(0,r.jsx)(n,{level:1,size:`page`,children:`Системы управления базами данных и распределённые вычисления`}),(0,r.jsx)(t,{size:`lg`,children:`Длинное название переносится без обрезания и сохраняет смысл.`}),(0,r.jsx)(t,{tone:`muted`,children:`https://university.example/very-long-unbroken-address-to-a-student-service`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-3)"
  }}>
      <Heading level={1} size="display">
        Display — главный экран
      </Heading>
      <Heading level={1}>H1 / lg — заголовок страницы</Heading>
      <Heading level={2} size="page">
        Page — заголовок вложенной страницы или sheet
      </Heading>
      <Heading level={2}>H2 / md — заголовок секции</Heading>
      <Heading level={3}>H3 / sm — заголовок карточки</Heading>
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-2)",
    maxWidth: 520
  }}>
      <Text>Body — основной текст приложения. Используется в описаниях и параграфах.</Text>
      <Text size="sm" tone="soft">
        Body small / soft — вторичный текст в карточках.
      </Text>
      <Text size="sm" tone="muted">
        Body small / muted — подписи и метаданные.
      </Text>
      <Text size="caption" tone="muted">
        Caption — даты, счетчики, вспомогательные подписи.
      </Text>
      <Text size="sm" tone="brand" weight="medium">
        Brand — акцентный текст со смыслом действия.
      </Text>
      <Text size="sm" tone="danger" weight="medium">
        Danger — текст ошибки.
      </Text>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-2)",
    maxWidth: 560
  }}>
      <Text size="caption" tone="muted">
        Сервисы / Мероприятия
      </Text>
      <Heading level={1}>Мероприятия и олимпиады</Heading>
      <Text tone="muted">
        Иерархия строится размером и насыщенностью текста, а не декоративными элементами.
      </Text>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Headings,
  globals: {
    theme: "light"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Headings,
  globals: {
    theme: "dark"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Headings,
  globals: {
    textScale: "large"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-4)",
    maxWidth: "24rem"
  }}>
      <Heading level={1} size="page">
        Системы управления базами данных и распределённые вычисления
      </Heading>
      <Text size="lg">Длинное название переносится без обрезания и сохраняет смысл.</Text>
      <Text tone="muted">
        https://university.example/very-long-unbroken-address-to-a-student-service
      </Text>
    </div>
}`,...d.parameters?.docs?.source}}};const f=[`Headings`,`TextVariants`,`Hierarchy`,`Light`,`Dark`,`LargeText`,`LongContent`];export{l as Dark,a as Headings,s as Hierarchy,u as LargeText,c as Light,d as LongContent,o as TextVariants,f as __namedExportsOrder,i as default};