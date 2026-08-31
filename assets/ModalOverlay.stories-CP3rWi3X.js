import{i as e,t}from"./iframe-BUpvSL3s.js";import"./createLucideIcon-oToEMaPF.js";import"./IconButton-CeHgr32I.js";import"./InlineSpinner-DiTzJJvO.js";import"./InlineSpinner-BpoKxC1k.js";import{t as n}from"./Button-CYhWUKa6.js";import"./Button-CAn4DT-A.js";import{n as r}from"./Typography-DHGfxIpM.js";import"./Typography-PDkJ9EAq.js";import{t as i}from"./CloseButton-DRuOpyoP.js";import{n as a,r as o,t as s}from"./ModalVariants-BPWdZH6z.js";import"./proxy-BAU0cDcy.js";import"./CloseButton-Dn1yZAWY.js";var c=e(),l=t(),u={title:`UI/Modal`,component:o,parameters:{layout:`fullscreen`,docs:{description:{component:`Единая модалка с responsive-режимом: центрированный dialog на desktop и bottom sheet с drag-to-close на mobile. DesktopModal и MobileModal позволяют зафиксировать представление явно.`}}}};const d={args:{onClose:()=>{},children:null},render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,l.jsx)(n,{onClick:()=>t(!0),children:`Открыть модалку`}),e?(0,l.jsx)(o,{onClose:()=>t(!1),children:(0,l.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:`4px 2px 16px`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,l.jsx)(`h2`,{style:{margin:0,fontSize:`1.2rem`},children:`Адаптивная модалка`}),(0,l.jsx)(i,{onClose:()=>t(!1)})]}),(0,l.jsx)(r,{size:`sm`,tone:`muted`,children:`На мобильном экране это bottom sheet с drag-to-close, на десктопе — центрированное диалоговое окно. Представление также можно выбрать явно.`}),(0,l.jsx)(n,{variant:`secondary`,shape:`rounded`,onClick:()=>t(!1),children:`Закрыть`})]})}):null]})}},f={args:{onClose:()=>{},children:null},render:()=>(0,l.jsx)(s,{onClose:()=>{},ariaLabel:`Desktop modal example`,children:(0,l.jsx)(`div`,{style:{padding:20},children:`Всегда центрированное desktop-окно`})})},p={args:{onClose:()=>{},children:null},render:()=>(0,l.jsx)(a,{onClose:()=>{},ariaLabel:`Mobile modal example`,children:(0,l.jsx)(`div`,{style:{padding:20},children:`Всегда мобильный bottom sheet`})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: () => {},
    children: null
  },
  render: function InteractiveExample() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>Открыть модалку</Button>

        {isOpen ? <ModalOverlay onClose={() => setIsOpen(false)}>
            <div style={{
          display: "grid",
          gap: 12,
          padding: "4px 2px 16px"
        }}>
              <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
                <h2 style={{
              margin: 0,
              fontSize: "1.2rem"
            }}>Адаптивная модалка</h2>
                <CloseButton onClose={() => setIsOpen(false)} />
              </div>
              <Text size="sm" tone="muted">
                На мобильном экране это bottom sheet с drag-to-close, на десктопе — центрированное
                диалоговое окно. Представление также можно выбрать явно.
              </Text>
              <Button variant="secondary" shape="rounded" onClick={() => setIsOpen(false)}>
                Закрыть
              </Button>
            </div>
          </ModalOverlay> : null}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: () => {},
    children: null
  },
  render: () => <DesktopModal onClose={() => {}} ariaLabel="Desktop modal example">
      <div style={{
      padding: 20
    }}>Всегда центрированное desktop-окно</div>
    </DesktopModal>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: () => {},
    children: null
  },
  render: () => <MobileModal onClose={() => {}} ariaLabel="Mobile modal example">
      <div style={{
      padding: 20
    }}>Всегда мобильный bottom sheet</div>
    </MobileModal>
}`,...p.parameters?.docs?.source}}};const m=[`Interactive`,`ForcedDesktop`,`ForcedMobile`];export{f as ForcedDesktop,p as ForcedMobile,d as Interactive,m as __namedExportsOrder,u as default};