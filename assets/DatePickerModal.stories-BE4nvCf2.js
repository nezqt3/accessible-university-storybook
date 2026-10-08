import"./useTranslation-Bqh59kuu.js";import{S as e,t}from"./iframe-D0TFUEDL.js";import"./react-dom-uuwrmfYG.js";import"./createLucideIcon-cfOq0vGI.js";import"./chevron-left-RsmW0QNo.js";import"./chevron-right-BRcPHbCp.js";import"./x-CAFkjvly.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as n}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import"./IconButton-KtMvhiqI.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BNnSMS-F.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-B27OI5yE.js";import"./ModalOverlay-DGegsSC0.js";import"./use-reduced-motion-DVIztM76.js";import"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";import"./Modal-9XkcOwQ7.js";import"./ModalHeader-B1C_todG.js";import"./ModalHeader-CFa6Ec7J.js";import{t as r}from"./DatePickerModal-DmMIq99B.js";var i=e(),a=t(),o={title:`Overlays/DatePickerModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Адаптивная календарная модалка для выбора одной даты или диапазона. На десктопе открывается как диалог, на мобильном — как bottom sheet.`}}},args:{selectedDate:new Date(2026,7,11),onSelect:()=>{},onClose:()=>{}}};const s={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(new Date(2026,7,11));return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o.toLocaleDateString(`ru-RU`)}),e?(0,a.jsx)(r,{selectedDate:o,onSelect:s,onClose:()=>t(!1)}):null]})}},c={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(null);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o?`${o.start.toLocaleDateString(`ru-RU`)} — ${o.end.toLocaleDateString(`ru-RU`)}`:`Выбрать период`}),e?(0,a.jsx)(r,{description:`Сначала выберите начало, затем конец периода`,onClose:()=>t(!1),onRangeSelect:s,selectedDate:o?.start??new Date(2026,7,11),selectedRange:o,selectionMode:`range`,title:`Выберите период`}):null]})}},l={...s,globals:{theme:`dark`}},u={...c,globals:{textScale:`large`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 7, 11));
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>{selectedDate.toLocaleDateString("ru-RU")}</Button>
        {isOpen ? <DatePickerModal selectedDate={selectedDate} onSelect={setSelectedDate} onClose={() => setIsOpen(false)} /> : null}
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function RangeExample() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedRange, setSelectedRange] = useState<DateRange | null>(null);
    const label = selectedRange ? \`\${selectedRange.start.toLocaleDateString("ru-RU")} — \${selectedRange.end.toLocaleDateString("ru-RU")}\` : "Выбрать период";
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>{label}</Button>
        {isOpen ? <DatePickerModal description="Сначала выберите начало, затем конец периода" onClose={() => setIsOpen(false)} onRangeSelect={setSelectedRange} selectedDate={selectedRange?.start ?? new Date(2026, 7, 11)} selectedRange={selectedRange} selectionMode="range" title="Выберите период" /> : null}
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Interactive,
  globals: {
    theme: "dark"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Range,
  globals: {
    textScale: "large"
  }
}`,...u.parameters?.docs?.source}}};const d=[`Interactive`,`Range`,`Dark`,`LargeText`];export{l as Dark,s as Interactive,u as LargeText,c as Range,d as __namedExportsOrder,o as default};