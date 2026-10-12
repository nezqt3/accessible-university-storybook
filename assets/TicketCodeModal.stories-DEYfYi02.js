import"./useTranslation-ImTl_7Xp.js";import{S as e,t}from"./iframe-CvULytDY.js";import"./react-dom-ChNaym3N.js";import"./createLucideIcon-H9I5BK5P.js";import"./x-CtK3F56K.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CKdlWLgP.js";import"./InlineSpinner-DGBp7q51.js";import{t as n}from"./Button-CeWGCXxh.js";import"./Button-BA_jpygv.js";import"./IconButton-BOf72TlE.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bk1hc0Il.js";import"./CloseButton-E9qr7WDM.js";import"./proxy-CFGHP_Wy.js";import"./ModalOverlay-CNzmzQip.js";import"./use-reduced-motion-DVAUB1l9.js";import"./Typography-DVjocI1l.js";import"./Typography-BY-iGFVZ.js";import"./Modal-DXrlKbTc.js";import"./ModalHeader-DsSVj0-W.js";import"./ModalHeader-CFa6Ec7J.js";import{t as r}from"./TicketCodeModal-CrO2PAp1.js";var i=e(),a=t(),o={title:`Overlays/TicketCodeModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Модальное представление QR-кода или CODE128 штрих-кода электронного студенческого билета.`}}},args:{type:`barcode`,value:`250569`,onClose:()=>{}}};const s={render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать штрих-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},c={args:{type:`qr`},render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать QR-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},l={...s,args:{value:`2505692026091100000000000123456789`},globals:{textScale:`large`}},u={...c,globals:{theme:`dark`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function BarcodeExample(args) {
    const [isOpen, setIsOpen] = useState(true);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>Показать штрих-код</Button>
        {isOpen ? <TicketCodeModal {...args} onClose={() => setIsOpen(false)} /> : null}
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "qr"
  },
  render: function QrCodeExample(args) {
    const [isOpen, setIsOpen] = useState(true);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>Показать QR-код</Button>
        {isOpen ? <TicketCodeModal {...args} onClose={() => setIsOpen(false)} /> : null}
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Barcode,
  args: {
    value: "2505692026091100000000000123456789"
  },
  globals: {
    textScale: "large"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...QrCode,
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}};const d=[`Barcode`,`QrCode`,`LongBarcode`,`Dark`];export{s as Barcode,u as Dark,l as LongBarcode,c as QrCode,d as __namedExportsOrder,o as default};