import{t as e}from"./iframe-BUpvSL3s.js";import{n as t,t as n}from"./Typography-DHGfxIpM.js";var r=e(),i={title:`UI/Typography`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Типографическая система Heading и Text с согласованными размерами, насыщенностью, цветами и выравниванием.`}}},args:{children:`Заголовок`}};const a={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,r.jsx)(n,{level:1,size:`display`,children:`Display — главный экран`}),(0,r.jsx)(n,{level:1,children:`H1 / lg — заголовок страницы`}),(0,r.jsx)(n,{level:2,children:`H2 / md — заголовок секции`}),(0,r.jsx)(n,{level:3,children:`H3 / sm — заголовок карточки`})]})},o={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:8,maxWidth:520},children:[(0,r.jsx)(t,{children:`Body — основной текст приложения. Используется в описаниях и параграфах.`}),(0,r.jsx)(t,{size:`sm`,tone:`soft`,children:`Body small / soft — вторичный текст в карточках.`}),(0,r.jsx)(t,{size:`sm`,tone:`muted`,children:`Body small / muted — подписи и метаданные.`}),(0,r.jsx)(t,{size:`caption`,tone:`muted`,children:`Caption — даты, счетчики, вспомогательные подписи.`}),(0,r.jsx)(t,{size:`sm`,tone:`brand`,weight:`semibold`,children:`Brand — акцентный текст со смыслом действия.`}),(0,r.jsx)(t,{size:`sm`,tone:`danger`,weight:`medium`,children:`Danger — текст ошибки.`})]})},s={render:()=>(0,r.jsxs)(`div`,{style:{display:`grid`,gap:8,maxWidth:560},children:[(0,r.jsx)(t,{size:`caption`,tone:`brand`,weight:`semibold`,style:{textTransform:`uppercase`,letterSpacing:`0.04em`},children:`Сервисы / Мероприятия`}),(0,r.jsx)(n,{level:1,children:`Мероприятия и олимпиады`}),(0,r.jsx)(t,{tone:`muted`,children:`Иерархия строится размером и насыщенностью текста, а не декоративными элементами.`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Heading level={1} size="display">
        Display — главный экран
      </Heading>
      <Heading level={1}>H1 / lg — заголовок страницы</Heading>
      <Heading level={2}>H2 / md — заголовок секции</Heading>
      <Heading level={3}>H3 / sm — заголовок карточки</Heading>
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8,
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
      <Text size="sm" tone="brand" weight="semibold">
        Brand — акцентный текст со смыслом действия.
      </Text>
      <Text size="sm" tone="danger" weight="medium">
        Danger — текст ошибки.
      </Text>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8,
    maxWidth: 560
  }}>
      <Text size="caption" tone="brand" weight="semibold" style={{
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }}>
        Сервисы / Мероприятия
      </Text>
      <Heading level={1}>Мероприятия и олимпиады</Heading>
      <Text tone="muted">
        Иерархия строится размером и насыщенностью текста, а не декоративными элементами.
      </Text>
    </div>
}`,...s.parameters?.docs?.source}}};const c=[`Headings`,`TextVariants`,`Hierarchy`];export{a as Headings,s as Hierarchy,o as TextVariants,c as __namedExportsOrder,i as default};