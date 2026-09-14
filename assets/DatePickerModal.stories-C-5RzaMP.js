import"./useTranslation-QvKtmgQC.js";import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./createLucideIcon-B-7CjJKR.js";import"./chevron-left-CFoWz1qN.js";import"./chevron-right-TeIxAxjT.js";import"./x-uXlYzy0q.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import{t as n}from"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import"./IconButton-BHQof1qE.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-CF7KZhtd.js";import"./CloseButton-DuLuJ11g.js";import"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import"./proxy-BQ55LVPr.js";import"./ModalOverlay-5fLQRiIu.js";import"./use-reduced-motion-Pz8xRbFI.js";import"./Modal-DC6UI6Li.js";import"./ModalHeader-u8wb2ZUc.js";import"./ModalHeader-CxQ2g3I2.js";import{t as r}from"./DatePickerModal-Bmpvu7rb.js";var i=t(),a=e(),o={title:`Overlays/DatePickerModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Адаптивная календарная модалка для выбора одной даты или диапазона. На десктопе открывается как диалог, на мобильном — как bottom sheet.`}}},args:{selectedDate:new Date(2026,7,11),onSelect:()=>{},onClose:()=>{}}};const s={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(new Date(2026,7,11));return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o.toLocaleDateString(`ru-RU`)}),e?(0,a.jsx)(r,{selectedDate:o,onSelect:s,onClose:()=>t(!1)}):null]})}},c={render:function(){let[e,t]=(0,i.useState)(!0),[o,s]=(0,i.useState)(null);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>t(!0),children:o?`${o.start.toLocaleDateString(`ru-RU`)} — ${o.end.toLocaleDateString(`ru-RU`)}`:`Выбрать период`}),e?(0,a.jsx)(r,{description:`Сначала выберите начало, затем конец периода`,onClose:()=>t(!1),onRangeSelect:s,selectedDate:o?.start??new Date(2026,7,11),selectedRange:o,selectionMode:`range`,title:`Выберите период`}):null]})}},l={...s,globals:{theme:`dark`}},u={...c,globals:{textScale:`large`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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