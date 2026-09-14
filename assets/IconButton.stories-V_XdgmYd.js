import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./createLucideIcon-Cqzfk4mC.js";import{t as n}from"./bell-DRC11qAB.js";import{t as r}from"./refresh-ccw-COttQ7k4.js";import{t as i}from"./x-aIX4-Ysv.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import{t as a}from"./IconButton-brlandGx.js";var o=t(),s=e(),{userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Primitives/IconButton`,component:a,parameters:{docs:{description:{component:`Кнопка только с иконкой для компактных действий. Обязательно передавайте понятный ariaLabel.`}}},args:{ariaLabel:`Обновить`,children:(0,s.jsx)(r,{size:18})}};const u={},d={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,s.jsx)(a,{ariaLabel:`Уведомления`,variant:`default`,children:(0,s.jsx)(n,{size:18})}),(0,s.jsx)(a,{ariaLabel:`Уведомления`,variant:`outline`,children:(0,s.jsx)(n,{size:18})}),(0,s.jsx)(a,{ariaLabel:`Закрыть`,variant:`ghost`,children:(0,s.jsx)(i,{size:18})})]})},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,s.jsx)(a,{ariaLabel:`Обновить`,size:`sm`,children:(0,s.jsx)(r,{size:14})}),(0,s.jsx)(a,{ariaLabel:`Обновить`,size:`md`,children:(0,s.jsx)(r,{size:18})}),(0,s.jsx)(a,{ariaLabel:`Обновить`,size:`lg`,children:(0,s.jsx)(r,{size:22})})]})},p={args:{disabled:!0}},m={args:{loading:!0}},h={name:`Spinning (refresh-паттерн)`,render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{ariaLabel:`Обновить данные`,variant:`outline`,spinning:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1600)},children:(0,s.jsx)(r,{size:18})})}},g={...d,globals:{theme:`dark`}},_={play:async({canvasElement:e})=>{e.querySelector(`button`)?.focus()}},v={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await c.pointer({target:t,keys:`[MouseLeft>]`})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Variants,
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    canvasElement.querySelector("button")?.focus();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const target = canvasElement.querySelector("button");
    if (target) await userEvent.pointer({
      target,
      keys: "[MouseLeft>]"
    });
  }
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`Spinning`,`Dark`,`Focused`,`Pressed`];export{g as Dark,u as Default,p as Disabled,_ as Focused,m as Loading,v as Pressed,f as Sizes,h as Spinning,d as Variants,y as __namedExportsOrder,l as default};