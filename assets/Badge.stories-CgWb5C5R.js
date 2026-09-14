import{t as e}from"./iframe-b1ov7CI7.js";import"./createLucideIcon-B-7CjJKR.js";import{t}from"./circle-check-DZ5UW0vD.js";import{t as n}from"./clock-3-DjLoArGP.js";import{t as r}from"./heart-D3dRLEZm.js";import{t as i}from"./Badge-BDsePzDM.js";var a=e(),o={title:`Primitives/Badge`,component:i,parameters:{docs:{description:{component:`Компактная метка статуса или категории. Используйте tone для смысла, variant для визуального веса и icon для дополнительного распознавания.`}}},args:{children:`Вы записаны`,tone:`success`}};const s={},c={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,flexWrap:`wrap`},children:[(0,a.jsx)(i,{tone:`neutral`,children:`Черновик`}),(0,a.jsx)(i,{tone:`brand`,children:`Альфа-версия`}),(0,a.jsx)(i,{tone:`success`,children:`Оплачен`}),(0,a.jsx)(i,{tone:`warning`,children:`Ожидает оплаты`}),(0,a.jsx)(i,{tone:`error`,children:`Отклонено`}),(0,a.jsx)(i,{tone:`info`,children:`В обработке`})]})},l={render:()=>(0,a.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-3)`},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,flexWrap:`wrap`},children:[(0,a.jsx)(i,{tone:`success`,variant:`soft`,children:`soft`}),(0,a.jsx)(i,{tone:`success`,variant:`outline`,children:`outline`}),(0,a.jsx)(i,{tone:`success`,variant:`solid`,children:`solid`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,flexWrap:`wrap`},children:[(0,a.jsx)(i,{tone:`error`,variant:`soft`,children:`soft`}),(0,a.jsx)(i,{tone:`error`,variant:`outline`,children:`outline`}),(0,a.jsx)(i,{tone:`error`,variant:`solid`,children:`solid`})]})]})},u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,alignItems:`center`},children:[(0,a.jsx)(i,{tone:`brand`,size:`sm`,children:`Маленький`}),(0,a.jsx)(i,{tone:`brand`,size:`md`,children:`Стандартный`})]})},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,flexWrap:`wrap`},children:[(0,a.jsx)(i,{tone:`success`,icon:(0,a.jsx)(t,{size:13}),children:`Зачет`}),(0,a.jsx)(i,{tone:`warning`,icon:(0,a.jsx)(n,{size:13}),children:`Скоро дедлайн`}),(0,a.jsx)(i,{tone:`error`,icon:(0,a.jsx)(r,{size:13}),children:`12`})]})},f={...c,globals:{theme:`light`}},p={...c,globals:{theme:`dark`}},m={...c,globals:{textScale:`large`}},h={args:{tone:`warning`,children:`Ожидает подтверждения регистрации ответственным подразделением`},render:e=>(0,a.jsx)(`div`,{style:{maxWidth:`16rem`},children:(0,a.jsx)(i,{...e})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--ui-space-2)",
    flexWrap: "wrap"
  }}>
      <Badge tone="neutral">Черновик</Badge>
      <Badge tone="brand">Альфа-версия</Badge>
      <Badge tone="success">Оплачен</Badge>
      <Badge tone="warning">Ожидает оплаты</Badge>
      <Badge tone="error">Отклонено</Badge>
      <Badge tone="info">В обработке</Badge>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-3)"
  }}>
      <div style={{
      display: "flex",
      gap: "var(--ui-space-2)",
      flexWrap: "wrap"
    }}>
        <Badge tone="success" variant="soft">
          soft
        </Badge>
        <Badge tone="success" variant="outline">
          outline
        </Badge>
        <Badge tone="success" variant="solid">
          solid
        </Badge>
      </div>
      <div style={{
      display: "flex",
      gap: "var(--ui-space-2)",
      flexWrap: "wrap"
    }}>
        <Badge tone="error" variant="soft">
          soft
        </Badge>
        <Badge tone="error" variant="outline">
          outline
        </Badge>
        <Badge tone="error" variant="solid">
          solid
        </Badge>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--ui-space-2)",
    alignItems: "center"
  }}>
      <Badge tone="brand" size="sm">
        Маленький
      </Badge>
      <Badge tone="brand" size="md">
        Стандартный
      </Badge>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "var(--ui-space-2)",
    flexWrap: "wrap"
  }}>
      <Badge tone="success" icon={<CheckCircle2 size={13} />}>
        Зачет
      </Badge>
      <Badge tone="warning" icon={<Clock3 size={13} />}>
        Скоро дедлайн
      </Badge>
      <Badge tone="error" icon={<Heart size={13} />}>
        12
      </Badge>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Tones,
  globals: {
    theme: "light"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Tones,
  globals: {
    theme: "dark"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Tones,
  globals: {
    textScale: "large"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "warning",
    children: "Ожидает подтверждения регистрации ответственным подразделением"
  },
  render: args => <div style={{
    maxWidth: "16rem"
  }}>
      <Badge {...args} />
    </div>
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Tones`,`Variants`,`Sizes`,`WithIcon`,`Light`,`Dark`,`LargeText`,`LongContent`];export{p as Dark,s as Default,m as LargeText,f as Light,h as LongContent,u as Sizes,c as Tones,l as Variants,d as WithIcon,g as __namedExportsOrder,o as default};