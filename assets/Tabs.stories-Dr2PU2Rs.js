import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./createLucideIcon-B-7CjJKR.js";import{t as n}from"./search-Bic9QSpq.js";import{t as r}from"./sparkles-CDk3NIMd.js";import"./motion-BSxM25dS.js";import"./proxy-BQ55LVPr.js";import"./use-reduced-motion-Pz8xRbFI.js";import{t as i}from"./Tabs-Bnacv--T.js";var a=t(),o=e(),s={title:`Primitives/Tabs`,component:i,parameters:{docs:{description:{component:`Управляемое переключение между равноправными представлениями. Есть иконки, disabled-пункты, размеры и клавиатурная навигация.`}}},args:{items:[],value:``,onChange:()=>{}}};const c={render:function(){let[e,t]=(0,a.useState)(`lost`);return(0,o.jsx)(i,{ariaLabel:`Тип поста`,items:[{value:`lost`,label:`Я потерял`},{value:`found`,label:`Я нашел`}],value:e,onChange:t})}},l={render:function(){let[e,t]=(0,a.useState)(`search`);return(0,o.jsx)(i,{ariaLabel:`Режим помощника`,items:[{value:`search`,label:`Поиск`,icon:(0,o.jsx)(n,{size:16})},{value:`ai`,label:`Ответ ИИ`,icon:(0,o.jsx)(r,{size:16})}],value:e,onChange:t})}},u={render:function(){let[e,t]=(0,a.useState)(`all`),[n,r]=(0,a.useState)(`all`),s=[{value:`all`,label:`Все`},{value:`ru`,label:`RU`},{value:`en`,label:`EN`}];return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,o.jsx)(i,{size:`sm`,ariaLabel:`Язык (sm)`,items:s,value:e,onChange:t}),(0,o.jsx)(i,{size:`md`,ariaLabel:`Язык (md)`,items:s,value:n,onChange:r})]})}},d={parameters:{layout:`padded`},render:function(){let[e,t]=(0,a.useState)(`current`);return(0,o.jsx)(i,{fullWidth:!0,ariaLabel:`Статус`,items:[{value:`current`,label:`Текущие`},{value:`upcoming`,label:`Предстоящие`},{value:`completed`,label:`Завершенные`}],value:e,onChange:t})}},f={render:function(){let[e,t]=(0,a.useState)(`invoices`);return(0,o.jsx)(i,{ariaLabel:`Разделы оплаты`,items:[{value:`invoices`,label:`Счета`},{value:`dorm`,label:`Общежитие`},{value:`other`,label:`Прочее`,disabled:!0}],value:e,onChange:t})}},p={args:{items:[{value:`schedule`,label:`Расписание`},{value:`rooms`,label:`Свободные аудитории`}],value:`schedule`,fullWidth:!0}},m={...p,args:{...p.args,value:`rooms`}},h={...p,args:{...p.args,items:[{value:`schedule`,label:`Расписание выбранного подразделения`},{value:`rooms`,label:`Свободные аудитории учебного корпуса`}]},globals:{textScale:`large`}},g={...p,globals:{theme:`dark`}},_={...p,args:{...p.args,variant:`underline`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "schedule",
      label: "Расписание"
    }, {
      value: "rooms",
      label: "Свободные аудитории"
    }],
    value: "schedule",
    fullWidth: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...FirstSelected,
  args: {
    ...FirstSelected.args,
    value: "rooms"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...FirstSelected,
  args: {
    ...FirstSelected.args,
    items: [{
      value: "schedule",
      label: "Расписание выбранного подразделения"
    }, {
      value: "rooms",
      label: "Свободные аудитории учебного корпуса"
    }]
  },
  globals: {
    textScale: "large"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...FirstSelected,
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...FirstSelected,
  args: {
    ...FirstSelected.args,
    variant: "underline"
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`WithIcons`,`Sizes`,`FullWidth`,`WithDisabledItem`,`FirstSelected`,`SecondSelected`,`LongLabels`,`Dark`,`Underline`];export{g as Dark,c as Default,p as FirstSelected,d as FullWidth,h as LongLabels,m as SecondSelected,u as Sizes,_ as Underline,f as WithDisabledItem,l as WithIcons,v as __namedExportsOrder,s as default};