import{n as e,t}from"./iframe-a2mGhWt8.js";import{t as n}from"./createLucideIcon-Dmex4IOU.js";import{t as r}from"./refresh-ccw-BPwV6G3o.js";import{t as i}from"./x-lnHQ2WwQ.js";import{t as a}from"./InlineSpinner-7iEhdoMI.js";import"./InlineSpinner-D_wmnTPd.js";var o=n(`bell`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]),s=e(),c=t();const l=(0,s.forwardRef)(function({ariaLabel:e,variant:t=`default`,size:n=`md`,loading:r=!1,spinning:i=!1,type:o=`button`,disabled:s,className:l=``,children:u,...d},f){let p=[`ui-icon-button`,`ui-icon-button--${t}`,`ui-icon-button--${n}`,i?`ui-icon-button--spinning`:``,l].filter(Boolean).join(` `);return(0,c.jsx)(`button`,{...d,ref:f,type:o,className:p,"aria-label":e,title:d.title??e,disabled:s||r,"aria-busy":r||void 0,children:r?(0,c.jsx)(a,{size:n===`lg`?`md`:`sm`}):(0,c.jsx)(`span`,{className:`ui-icon-button__icon`,children:u})})});l.__docgenInfo={description:``,methods:[],displayName:`IconButton`,props:{ariaLabel:{required:!0,tsType:{name:`string`},description:`Обязательная подпись для скринридеров`},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "ghost" | "outline"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"ghost"`},{name:`literal`,value:`"outline"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Спиннер вместо иконки; размеры сохраняются`,defaultValue:{value:`false`,computed:!1}},spinning:{required:!1,tsType:{name:`boolean`},description:`Вращает переданную иконку (паттерн refresh) вместо подмены на спиннер`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},type:{defaultValue:{value:`"button"`,computed:!1},required:!1},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var u={title:`UI/IconButton`,component:l,args:{ariaLabel:`Обновить`,children:(0,c.jsx)(r,{size:18})}};const d={},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,c.jsx)(l,{ariaLabel:`Уведомления`,variant:`default`,children:(0,c.jsx)(o,{size:18})}),(0,c.jsx)(l,{ariaLabel:`Уведомления`,variant:`outline`,children:(0,c.jsx)(o,{size:18})}),(0,c.jsx)(l,{ariaLabel:`Закрыть`,variant:`ghost`,children:(0,c.jsx)(i,{size:18})})]})},p={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,c.jsx)(l,{ariaLabel:`Обновить`,size:`sm`,children:(0,c.jsx)(r,{size:14})}),(0,c.jsx)(l,{ariaLabel:`Обновить`,size:`md`,children:(0,c.jsx)(r,{size:18})}),(0,c.jsx)(l,{ariaLabel:`Обновить`,size:`lg`,children:(0,c.jsx)(r,{size:22})})]})},m={args:{disabled:!0}},h={args:{loading:!0}},g={name:`Spinning (refresh-паттерн)`,render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsx)(l,{ariaLabel:`Обновить данные`,variant:`outline`,spinning:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1600)},children:(0,c.jsx)(r,{size:18})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`Spinning`];export{d as Default,m as Disabled,h as Loading,p as Sizes,g as Spinning,f as Variants,_ as __namedExportsOrder,u as default};