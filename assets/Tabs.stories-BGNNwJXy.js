import{i as e,t}from"./iframe-QcmIdhIq.js";import{t as n}from"./createLucideIcon-D9IbRd1j.js";import{t as r}from"./search-BzD35Jjt.js";import"./proxy-DlbRuMBW.js";import{t as i}from"./Tabs-DHN0iqFj.js";var a=n(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),o=e(),s=t(),c={title:`UI/Tabs`,component:i,parameters:{docs:{description:{component:`Управляемое переключение между равноправными представлениями. Есть иконки, disabled-пункты, размеры и клавиатурная навигация.`}}},args:{items:[],value:``,onChange:()=>{}}};const l={render:function(){let[e,t]=(0,o.useState)(`lost`);return(0,s.jsx)(i,{ariaLabel:`Тип поста`,items:[{value:`lost`,label:`Я потерял`},{value:`found`,label:`Я нашел`}],value:e,onChange:t})}},u={render:function(){let[e,t]=(0,o.useState)(`search`);return(0,s.jsx)(i,{ariaLabel:`Режим помощника`,items:[{value:`search`,label:`Поиск`,icon:(0,s.jsx)(r,{size:16})},{value:`ai`,label:`Ответ ИИ`,icon:(0,s.jsx)(a,{size:16})}],value:e,onChange:t})}},d={render:function(){let[e,t]=(0,o.useState)(`all`),[n,r]=(0,o.useState)(`all`),a=[{value:`all`,label:`Все`},{value:`ru`,label:`RU`},{value:`en`,label:`EN`}];return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:16,justifyItems:`start`},children:[(0,s.jsx)(i,{size:`sm`,ariaLabel:`Язык (sm)`,items:a,value:e,onChange:t}),(0,s.jsx)(i,{size:`md`,ariaLabel:`Язык (md)`,items:a,value:n,onChange:r})]})}},f={parameters:{layout:`padded`},render:function(){let[e,t]=(0,o.useState)(`current`);return(0,s.jsx)(i,{fullWidth:!0,ariaLabel:`Статус`,items:[{value:`current`,label:`Текущие`},{value:`upcoming`,label:`Предстоящие`},{value:`completed`,label:`Завершенные`}],value:e,onChange:t})}},p={render:function(){let[e,t]=(0,o.useState)(`invoices`);return(0,s.jsx)(i,{ariaLabel:`Разделы оплаты`,items:[{value:`invoices`,label:`Счета`},{value:`dorm`,label:`Общежитие`},{value:`other`,label:`Прочее`,disabled:!0}],value:e,onChange:t})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const m=[`Default`,`WithIcons`,`Sizes`,`FullWidth`,`WithDisabledItem`];export{l as Default,f as FullWidth,d as Sizes,p as WithDisabledItem,u as WithIcons,m as __namedExportsOrder,c as default};