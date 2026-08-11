import{i as e,t}from"./iframe-CibmaNwd.js";import{t as n}from"./createLucideIcon-Bn5oGW7J.js";import{t as r}from"./search-DqTaW1qB.js";import{t as i}from"./proxy-D0u8LNn1.js";var a=n(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),o=e(),s=t();function c({items:e,value:t,onChange:n,size:r=`md`,fullWidth:a=!1,animated:c=!0,variant:l=`pill`,scrollable:u=!1,onItemRef:d,ariaLabel:f,className:p=``}){let m=(0,o.useId)(),h=e.filter(e=>!e.disabled),g=(e,r)=>{e.preventDefault();let i=h.findIndex(e=>e.value===t);i===-1||h.length===0||n(h[(i+r+h.length)%h.length].value)},_=e=>{e.key===`ArrowRight`?g(e,1):e.key===`ArrowLeft`&&g(e,-1)};return(0,s.jsx)(`div`,{role:`tablist`,"aria-label":f,className:[`ui-tabs`,`ui-tabs--${r}`,`ui-tabs--${l}`,a?`ui-tabs--full`:``,u?`ui-tabs--scrollable`:``,p].filter(Boolean).join(` `),onKeyDown:_,children:e.map(e=>{let r=e.value===t;return(0,s.jsxs)(`button`,{ref:t=>d?.(e.value,t),type:`button`,role:`tab`,"aria-selected":r,tabIndex:r?0:-1,disabled:e.disabled,className:[`ui-tabs__item`,r?`ui-tabs__item--active`:``].filter(Boolean).join(` `),onClick:()=>n(e.value),children:[r&&c?(0,s.jsx)(i.span,{layoutId:`ui-tabs-pill-${m}`,className:`ui-tabs__pill`,transition:{type:`spring`,stiffness:320,damping:30}}):null,r&&!c?(0,s.jsx)(`span`,{className:`ui-tabs__pill`}):null,e.icon?(0,s.jsx)(`span`,{className:`ui-tabs__icon`,"aria-hidden":`true`,children:e.icon}):null,(0,s.jsx)(`span`,{className:`ui-tabs__label`,children:e.label})]},e.value)})})}c.__docgenInfo={description:`Сегмент-контрол (ряд pill-кнопок с активным состоянием).
Объединяет паттерны ChatModalTabs / PaySegmentTabs / library-segments.`,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`TabItem`,elements:[{name:`TValue`}],raw:`TabItem<TValue>`}],raw:`ReadonlyArray<TabItem<TValue>>`},description:``},value:{required:!0,tsType:{name:`TValue`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: TValue) => void`,signature:{arguments:[{type:{name:`TValue`},name:`value`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},animated:{required:!1,tsType:{name:`boolean`},description:`Анимированная pill-подложка активного таба`,defaultValue:{value:`true`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"pill" | "underline"`,elements:[{name:`literal`,value:`"pill"`},{name:`literal`,value:`"underline"`}]},description:``,defaultValue:{value:`"pill"`,computed:!1}},scrollable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onItemRef:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: TValue, element: HTMLButtonElement | null) => void`,signature:{arguments:[{type:{name:`TValue`},name:`value`},{type:{name:`union`,raw:`HTMLButtonElement | null`,elements:[{name:`HTMLButtonElement`},{name:`null`}]},name:`element`}],return:{name:`void`}}},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}}}};var l={title:`UI/Tabs`,component:c,parameters:{docs:{description:{component:`Управляемое переключение между равноправными представлениями. Есть иконки, disabled-пункты, размеры и клавиатурная навигация.`}}},args:{items:[],value:``,onChange:()=>{}}};const u={render:function(){let[e,t]=(0,o.useState)(`lost`);return(0,s.jsx)(c,{ariaLabel:`Тип поста`,items:[{value:`lost`,label:`Я потерял`},{value:`found`,label:`Я нашел`}],value:e,onChange:t})}},d={render:function(){let[e,t]=(0,o.useState)(`search`);return(0,s.jsx)(c,{ariaLabel:`Режим помощника`,items:[{value:`search`,label:`Поиск`,icon:(0,s.jsx)(r,{size:16})},{value:`ai`,label:`Ответ ИИ`,icon:(0,s.jsx)(a,{size:16})}],value:e,onChange:t})}},f={render:function(){let[e,t]=(0,o.useState)(`all`),[n,r]=(0,o.useState)(`all`),i=[{value:`all`,label:`Все`},{value:`ru`,label:`RU`},{value:`en`,label:`EN`}];return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,s.jsx)(c,{size:`sm`,ariaLabel:`Язык (sm)`,items:i,value:e,onChange:t}),(0,s.jsx)(c,{size:`md`,ariaLabel:`Язык (md)`,items:i,value:n,onChange:r})]})}},p={parameters:{layout:`padded`},render:function(){let[e,t]=(0,o.useState)(`current`);return(0,s.jsx)(c,{fullWidth:!0,ariaLabel:`Статус`,items:[{value:`current`,label:`Текущие`},{value:`upcoming`,label:`Предстоящие`},{value:`completed`,label:`Завершенные`}],value:e,onChange:t})}},m={render:function(){let[e,t]=(0,o.useState)(`invoices`);return(0,s.jsx)(c,{ariaLabel:`Разделы оплаты`,items:[{value:`invoices`,label:`Счета`},{value:`dorm`,label:`Общежитие`},{value:`other`,label:`Прочее`,disabled:!0}],value:e,onChange:t})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function DefaultExample() {
    const [value, setValue] = useState("lost");
    return <Tabs ariaLabel="Тип поста" items={[{
      value: "lost",
      label: "Я потерял"
    }, {
      value: "found",
      label: "Я нашел"
    }]} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function WithIconsExample() {
    const [value, setValue] = useState("search");
    return <Tabs ariaLabel="Режим помощника" items={[{
      value: "search",
      label: "Поиск",
      icon: <Search size={16} />
    }, {
      value: "ai",
      label: "Ответ ИИ",
      icon: <Sparkles size={16} />
    }]} value={value} onChange={setValue} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function SizesExample() {
    const [a, setA] = useState("all");
    const [b, setB] = useState("all");
    const items = [{
      value: "all",
      label: "Все"
    }, {
      value: "ru",
      label: "RU"
    }, {
      value: "en",
      label: "EN"
    }];
    return <div style={{
      display: "grid",
      gap: 16,
      justifyItems: "start"
    }}>
        <Tabs size="sm" ariaLabel="Язык (sm)" items={items} value={a} onChange={setA} />
        <Tabs size="md" ariaLabel="Язык (md)" items={items} value={b} onChange={setB} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: function FullWidthExample() {
    const [value, setValue] = useState("current");
    return <Tabs fullWidth ariaLabel="Статус" items={[{
      value: "current",
      label: "Текущие"
    }, {
      value: "upcoming",
      label: "Предстоящие"
    }, {
      value: "completed",
      label: "Завершенные"
    }]} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function DisabledExample() {
    const [value, setValue] = useState("invoices");
    return <Tabs ariaLabel="Разделы оплаты" items={[{
      value: "invoices",
      label: "Счета"
    }, {
      value: "dorm",
      label: "Общежитие"
    }, {
      value: "other",
      label: "Прочее",
      disabled: true
    }]} value={value} onChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`WithIcons`,`Sizes`,`FullWidth`,`WithDisabledItem`];export{u as Default,p as FullWidth,f as Sizes,m as WithDisabledItem,d as WithIcons,h as __namedExportsOrder,l as default};