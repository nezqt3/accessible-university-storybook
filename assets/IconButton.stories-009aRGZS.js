import{i as e,t}from"./iframe-DLJRFI4j.js";import{t as n}from"./createLucideIcon-RIE-g2pU.js";import{t as r}from"./refresh-ccw-5EGUDkLA.js";import{n as i,t as a}from"./IconButton-NhiYMBbz.js";import"./InlineSpinner-Ch1xzYIa.js";import"./InlineSpinner-BpoKxC1k.js";var o=n(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),s=e(),c=t(),l={title:`UI/IconButton`,component:a,parameters:{docs:{description:{component:`Кнопка только с иконкой для компактных действий. Обязательно передавайте понятный ariaLabel.`}}},args:{ariaLabel:`Обновить`,children:(0,c.jsx)(r,{size:18})}};const u={},d={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(a,{ariaLabel:`Уведомления`,variant:`default`,children:(0,c.jsx)(o,{size:18})}),(0,c.jsx)(a,{ariaLabel:`Уведомления`,variant:`outline`,children:(0,c.jsx)(o,{size:18})}),(0,c.jsx)(a,{ariaLabel:`Закрыть`,variant:`ghost`,children:(0,c.jsx)(i,{size:18})})]})},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,c.jsx)(a,{ariaLabel:`Обновить`,size:`sm`,children:(0,c.jsx)(r,{size:14})}),(0,c.jsx)(a,{ariaLabel:`Обновить`,size:`md`,children:(0,c.jsx)(r,{size:18})}),(0,c.jsx)(a,{ariaLabel:`Обновить`,size:`lg`,children:(0,c.jsx)(r,{size:22})})]})},p={args:{disabled:!0}},m={args:{loading:!0}},h={name:`Spinning (refresh-паттерн)`,render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsx)(a,{ariaLabel:`Обновить данные`,variant:`outline`,spinning:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1600)},children:(0,c.jsx)(r,{size:18})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <IconButton ariaLabel="Уведомления" variant="default">
        <Bell size={18} />
      </IconButton>
      <IconButton ariaLabel="Уведомления" variant="outline">
        <Bell size={18} />
      </IconButton>
      <IconButton ariaLabel="Закрыть" variant="ghost">
        <X size={18} />
      </IconButton>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <IconButton ariaLabel="Обновить" size="sm">
        <RefreshCcw size={14} />
      </IconButton>
      <IconButton ariaLabel="Обновить" size="md">
        <RefreshCcw size={18} />
      </IconButton>
      <IconButton ariaLabel="Обновить" size="lg">
        <RefreshCcw size={22} />
      </IconButton>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Spinning (refresh-паттерн)",
  render: function SpinningExample() {
    const [spinning, setSpinning] = useState(false);
    const refresh = () => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 1600);
    };
    return <IconButton ariaLabel="Обновить данные" variant="outline" spinning={spinning} onClick={refresh}>
        <RefreshCcw size={18} />
      </IconButton>;
  }
}`,...h.parameters?.docs?.source}}};const g=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`Spinning`];export{u as Default,p as Disabled,m as Loading,f as Sizes,h as Spinning,d as Variants,g as __namedExportsOrder,l as default};