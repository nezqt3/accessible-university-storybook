import"./useTranslation-sVHVO_Qe.js";import{o as e,t}from"./iframe-C2TMhgpW.js";import"./createLucideIcon-FeGR8gI-.js";import"./IconButton-Bc-x9w7d.js";import"./InlineSpinner-B8Lj1vR8.js";import"./InlineSpinner-D-yUgJTS.js";import{t as n}from"./Button-BlEcxLT4.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-BDoB7VXo.js";import"./ModalVariants-CMDN034p.js";import"./proxy-CcVOb4qJ.js";import"./Modal-m0gwBJUB.js";import"./CloseButton-B0UpMFpm.js";import{t as r}from"./TicketCodeModal-DyP-avOB.js";var i=e(),a=t(),o={title:`UI/TicketCodeModal`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Модальное представление QR-кода или CODE128 штрих-кода электронного студенческого билета.`}}},args:{type:`barcode`,value:`250569`,onClose:()=>{}}};const s={render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать штрих-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}},c={args:{type:`qr`},render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать QR-код`}),t?(0,a.jsx)(r,{...e,onClose:()=>o(!1)}):null]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function BarcodeExample(args) {
    const [isOpen, setIsOpen] = useState(false);
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
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>Показать QR-код</Button>
        {isOpen ? <TicketCodeModal {...args} onClose={() => setIsOpen(false)} /> : null}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const l=[`Barcode`,`QrCode`];export{s as Barcode,c as QrCode,l as __namedExportsOrder,o as default};