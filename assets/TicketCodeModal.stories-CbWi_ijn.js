import"./useTranslation-9RT7qr1b.js";import{S as e,t}from"./iframe-DG2KGKvW.js";import"./react-dom-DYmj885q.js";import"./createLucideIcon-Bfb3zjcZ.js";import"./x-Bq7Qs63O.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import{t as n}from"./Button-DY6ywSD3.js";import"./Button-DDTwPwQw.js";import"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CsT_IW0V.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-BICjNce_.js";import"./ModalOverlay-W5r53p_K.js";import"./use-reduced-motion-CWStJdJS.js";import"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import"./Modal-BDb8M2bR.js";import"./ModalHeader-7ahH-fNQ.js";import"./ModalHeader-CFa6Ec7J.js";import{t as r}from"./TicketCodeModal-Bg9i1uIK.js";var i=e(),a=t(),o={title:`Overlays/TicketCodeModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Модальное представление QR-кода или CODE128 штрих-кода электронного студенческого билета.`}}},args:{type:`barcode`,value:`250569`,onClose:()=>{}}};const s={render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать штрих-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},c={args:{type:`qr`},render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать QR-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},l={...s,args:{value:`2505692026091100000000000123456789`},globals:{textScale:`large`}},u={...c,globals:{theme:`dark`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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