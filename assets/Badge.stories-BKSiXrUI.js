import{t as e}from"./iframe-C5GxCcZY.js";import{t}from"./createLucideIcon-CzzZxVLe.js";import{t as n}from"./circle-check-DqdFPec6.js";import{t as r}from"./Badge-BXcLy6MN.js";var i=t(`clock-3`,[[`path`,{d:`M12 6v6h4`,key:`135r8i`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),a=t(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),o=e(),s={title:`UI/Badge`,component:r,parameters:{docs:{description:{component:`Компактная метка статуса или категории. Используйте tone для смысла, variant для визуального веса и icon для дополнительного распознавания.`}}},args:{children:`Вы записаны`,tone:`success`}};const c={},l={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,o.jsx)(r,{tone:`neutral`,children:`Черновик`}),(0,o.jsx)(r,{tone:`brand`,children:`Альфа-версия`}),(0,o.jsx)(r,{tone:`success`,children:`Оплачен`}),(0,o.jsx)(r,{tone:`warning`,children:`Ожидает оплаты`}),(0,o.jsx)(r,{tone:`error`,children:`Отклонено`}),(0,o.jsx)(r,{tone:`info`,children:`В обработке`})]})},u={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,o.jsx)(r,{tone:`success`,variant:`soft`,children:`soft`}),(0,o.jsx)(r,{tone:`success`,variant:`outline`,children:`outline`}),(0,o.jsx)(r,{tone:`success`,variant:`solid`,children:`solid`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,o.jsx)(r,{tone:`error`,variant:`soft`,children:`soft`}),(0,o.jsx)(r,{tone:`error`,variant:`outline`,children:`outline`}),(0,o.jsx)(r,{tone:`error`,variant:`solid`,children:`solid`})]})]})},d={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,o.jsx)(r,{tone:`brand`,size:`sm`,children:`Маленький`}),(0,o.jsx)(r,{tone:`brand`,size:`md`,children:`Стандартный`})]})},f={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,o.jsx)(r,{tone:`success`,icon:(0,o.jsx)(n,{size:13}),children:`Зачет`}),(0,o.jsx)(r,{tone:`warning`,icon:(0,o.jsx)(i,{size:13}),children:`Скоро дедлайн`}),(0,o.jsx)(r,{tone:`error`,icon:(0,o.jsx)(a,{size:13}),children:`12`})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }}>
      <Badge tone="neutral">Черновик</Badge>
      <Badge tone="brand">Альфа-версия</Badge>
      <Badge tone="success">Оплачен</Badge>
      <Badge tone="warning">Ожидает оплаты</Badge>
      <Badge tone="error">Отклонено</Badge>
      <Badge tone="info">В обработке</Badge>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 8
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
      gap: 8
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <Badge tone="brand" size="sm">
        Маленький
      </Badge>
      <Badge tone="brand" size="md">
        Стандартный
      </Badge>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
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
}`,...f.parameters?.docs?.source}}};const p=[`Default`,`Tones`,`Variants`,`Sizes`,`WithIcon`];export{c as Default,d as Sizes,l as Tones,u as Variants,f as WithIcon,p as __namedExportsOrder,s as default};