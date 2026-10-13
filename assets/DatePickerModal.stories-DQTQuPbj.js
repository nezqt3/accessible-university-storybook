import"./useTranslation-B-tF1GJf.js";import{S as e,t}from"./iframe-B7OPhEMi.js";import"./react-dom-D7tkLgFl.js";import"./createLucideIcon-DbDnuAYV.js";import"./chevron-left-swN0m9-Y.js";import"./chevron-right-D10KC123.js";import"./x-DQYUESx-.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-Ct9XnNTG.js";import"./InlineSpinner-DGBp7q51.js";import{t as n}from"./Button-DmdgFkXT.js";import"./Button-BA_jpygv.js";import"./IconButton-AXY1q_LQ.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bv4hitaO.js";import"./CloseButton-E9qr7WDM.js";import"./use-reduced-motion-CHTlHBRt.js";import"./ModalOverlay-D9DROLB9.js";import"./Typography-QiiFuIbu.js";import"./Typography-Q4VDshPG.js";import"./Modal-DFHXobue.js";import"./ModalHeader-GwJRNHaC.js";import"./ModalHeader-DebK5TiL.js";import{t as r}from"./DatePickerModal-DQ3PldEn.js";var i=e(),a=t(),o={title:`Overlays/DatePickerModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Адаптивная календарная модалка для выбора одной даты или диапазона. На десктопе открывается как диалог, на мобильном — как bottom sheet.`}}},args:{selectedDate:new Date(2026,7,11),onSelect:()=>{},onClose:()=>{}}};const s={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(new Date(2026,7,11));return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o.toLocaleDateString(`ru-RU`)}),e?(0,a.jsx)(r,{selectedDate:o,onSelect:s,onClose:()=>t(!1)}):null]})}},c={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(null);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o?`${o.start.toLocaleDateString(`ru-RU`)} — ${o.end.toLocaleDateString(`ru-RU`)}`:`Выбрать период`}),e?(0,a.jsx)(r,{description:`Сначала выберите начало, затем конец периода`,onClose:()=>t(!1),onRangeSelect:s,selectedDate:o?.start??new Date(2026,7,11),selectedRange:o,selectionMode:`range`,title:`Выберите период`}):null]})}},l={...s,globals:{theme:`dark`}},u={...c,globals:{textScale:`large`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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