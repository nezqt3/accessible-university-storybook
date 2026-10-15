import{S as e,t}from"./iframe-DPTPUGSQ.js";import"./createLucideIcon-BWiwbG5R.js";import{t as n}from"./bell-D8HyEOWu.js";import{t as r}from"./calendar-plus-ChcJgrr0.js";import{t as i}from"./info-D_yzd_kR.js";import{t as a}from"./refresh-ccw-fFJ-MzB-.js";import{t as o}from"./x-BNiF9Eo_.js";import"./InlineSpinner-D0Bs9YLH.js";import"./InlineSpinner-DGBp7q51.js";import{t as s}from"./IconButton-BoNKYF5G.js";var c=e(),l=t(),{userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Primitives/IconButton`,component:s,parameters:{docs:{description:{component:`Кнопка только с иконкой для компактных действий. Обязательно передавайте понятный ariaLabel.`}}},args:{ariaLabel:`Обновить`,children:(0,l.jsx)(a,{size:18})}};const f={},p={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--ui-space-2)`},children:[(0,l.jsx)(s,{ariaLabel:`Обновить`,variant:`ghost`,tone:`accent`,children:(0,l.jsx)(a,{})}),(0,l.jsx)(s,{ariaLabel:`Подключить календарь`,variant:`ghost`,tone:`accent`,children:(0,l.jsx)(r,{})}),(0,l.jsx)(s,{ariaLabel:`Информация`,variant:`ghost`,tone:`accent`,children:(0,l.jsx)(i,{})}),(0,l.jsx)(s,{ariaLabel:`Уведомления`,variant:`outline`,tone:`accent`,children:(0,l.jsx)(n,{})}),(0,l.jsx)(s,{ariaLabel:`Недоступно`,tone:`accent`,disabled:!0,children:(0,l.jsx)(a,{})}),(0,l.jsx)(s,{ariaLabel:`Закрыть`,variant:`ghost`,children:(0,l.jsx)(o,{})})]})},m={...p,globals:{theme:`dark`,palette:`blue`}},h={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,l.jsx)(s,{ariaLabel:`Уведомления`,variant:`default`,children:(0,l.jsx)(n,{size:18})}),(0,l.jsx)(s,{ariaLabel:`Уведомления`,variant:`outline`,children:(0,l.jsx)(n,{size:18})}),(0,l.jsx)(s,{ariaLabel:`Закрыть`,variant:`ghost`,children:(0,l.jsx)(o,{size:18})})]})},g={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,l.jsx)(s,{ariaLabel:`Обновить`,size:`sm`,children:(0,l.jsx)(a,{size:14})}),(0,l.jsx)(s,{ariaLabel:`Обновить`,size:`md`,children:(0,l.jsx)(a,{size:18})}),(0,l.jsx)(s,{ariaLabel:`Обновить`,size:`lg`,children:(0,l.jsx)(a,{size:22})})]})},_={args:{disabled:!0}},v={args:{loading:!0}},y={name:`Spinning (refresh-паттерн)`,render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsx)(s,{ariaLabel:`Обновить данные`,variant:`outline`,spinning:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1600)},children:(0,l.jsx)(a,{size:18})})}},b={...h,globals:{theme:`dark`}},x={play:async({canvasElement:e})=>{e.querySelector(`button`)?.focus()}},S={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await u.pointer({target:t,keys:`[MouseLeft>]`})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--ui-space-2)"
  }}>
      <IconButton ariaLabel="Обновить" variant="ghost" tone="accent">
        <RefreshCcw />
      </IconButton>
      <IconButton ariaLabel="Подключить календарь" variant="ghost" tone="accent">
        <CalendarPlus />
      </IconButton>
      <IconButton ariaLabel="Информация" variant="ghost" tone="accent">
        <Info />
      </IconButton>
      <IconButton ariaLabel="Уведомления" variant="outline" tone="accent">
        <Bell />
      </IconButton>
      <IconButton ariaLabel="Недоступно" tone="accent" disabled>
        <RefreshCcw />
      </IconButton>
      <IconButton ariaLabel="Закрыть" variant="ghost">
        <X />
      </IconButton>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Accent,
  globals: {
    theme: "dark",
    palette: "blue"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Variants,
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("button")?.focus();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const target = canvasElement.querySelector("button");
    if (target) await userEvent.pointer({
      target,
      keys: "[MouseLeft>]"
    });
  }
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Accent`,`AccentDark`,`Variants`,`Sizes`,`Disabled`,`Loading`,`Spinning`,`Dark`,`Focused`,`Pressed`];export{p as Accent,m as AccentDark,b as Dark,f as Default,_ as Disabled,x as Focused,v as Loading,S as Pressed,g as Sizes,y as Spinning,h as Variants,C as __namedExportsOrder,d as default};