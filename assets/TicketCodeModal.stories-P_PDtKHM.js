import"./useTranslation-Ch5uCjQR.js";import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./createLucideIcon-Cqzfk4mC.js";import"./x-aIX4-Ysv.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import{t as n}from"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";import"./IconButton-brlandGx.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-Dlth1W31.js";import"./CloseButton-DuLuJ11g.js";import"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./proxy-Dnaxw7vE.js";import"./ModalOverlay-DsbVphhP.js";import"./use-reduced-motion-D1xf7gmi.js";import"./Modal-BNO3joPp.js";import"./ModalHeader-BBxKWgyV.js";import"./ModalHeader-CxQ2g3I2.js";import{t as r}from"./TicketCodeModal-5HpvzwuA.js";var i=t(),a=e(),o={title:`Overlays/TicketCodeModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Модальное представление QR-кода или CODE128 штрих-кода электронного студенческого билета.`}}},args:{type:`barcode`,value:`250569`,onClose:()=>{}}};const s={render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать штрих-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},c={args:{type:`qr`},render:function(e){let[t,o]=(0,i.useState)(!0);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать QR-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},l={...s,args:{value:`2505692026091100000000000123456789`},globals:{textScale:`large`}},u={...c,globals:{theme:`dark`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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