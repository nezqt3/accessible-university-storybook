import"./useTranslation-D-aU4f03.js";import{S as e,t}from"./iframe-BgC4QF32.js";import"./react-dom-CL5saaxG.js";import"./createLucideIcon-B16nweCc.js";import"./x-DeThYvLg.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CBIQLgmS.js";import"./InlineSpinner-DGBp7q51.js";import{t as n}from"./Button-BWU--gB6.js";import"./Button-BA_jpygv.js";import"./IconButton-CBDZ9vXW.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BOKqPjCS.js";import"./CloseButton-CKC4LnPI.js";import"./CloseButton-CT6ApXCH.js";import"./use-reduced-motion-BiSVJF6j.js";import"./ModalOverlay-Ds_UD4_I.js";import"./LoaderTransitionContext-DKcwLzlE.js";import"./Typography-BH1B6yTK.js";import"./Typography-DVvNjpAw.js";import"./Modal-BPyHJU71.js";import"./ModalHeader-BRUlOqff.js";import"./ModalHeader-B5wsWETS.js";import{t as r}from"./TicketCodeModal-CyUzsnNb.js";var i=e(),a=t(),o={title:`Overlays/TicketCodeModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Модальное представление QR-кода или CODE128 штрих-кода электронного студенческого билета.`}}},args:{type:`barcode`,value:`250569`,onClose:()=>{}}};const s={render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать штрих-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},c={args:{type:`qr`},render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать QR-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},l={...s,args:{value:`2505692026091100000000000123456789`},globals:{textScale:`large`}},u={...c,globals:{theme:`dark`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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