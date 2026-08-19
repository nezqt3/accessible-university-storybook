import{i as e,t}from"./iframe-sDOIPago.js";import{t as n}from"./createLucideIcon-CmWYsydL.js";import{t as r}from"./refresh-ccw-DZWN3b1T.js";import"./InlineSpinner-DItQ5gEw.js";import"./InlineSpinner-N8-mU2kk.js";import{t as i}from"./Button-Ba-oSXPj.js";var a=n(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),o=n(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),s=e(),c=t(),l={title:`UI/Button`,component:i,parameters:{docs:{description:{component:`Основная кнопка действий приложения. Поддерживает варианты, размеры, иконки, состояние загрузки и растягивание на ширину контейнера.`}}},args:{children:`Сохранить`}};const u={},d={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,c.jsx)(i,{variant:`primary`,children:`Primary`}),(0,c.jsx)(i,{variant:`secondary`,children:`Secondary`}),(0,c.jsx)(i,{variant:`ghost`,children:`Ghost`}),(0,c.jsx)(i,{variant:`danger`,children:`Danger`})]})},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,c.jsx)(i,{size:`sm`,children:`Small`}),(0,c.jsx)(i,{size:`md`,children:`Medium`}),(0,c.jsx)(i,{size:`lg`,children:`Large`})]})},p={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,c.jsx)(i,{disabled:!0,children:`Primary`}),(0,c.jsx)(i,{variant:`secondary`,disabled:!0,children:`Secondary`}),(0,c.jsx)(i,{variant:`ghost`,disabled:!0,children:`Ghost`})]})},m={args:{loading:!0,children:`Сохраняем...`}},h={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,c.jsx)(i,{iconLeft:(0,c.jsx)(o,{size:18}),children:`Скачать`}),(0,c.jsx)(i,{variant:`secondary`,iconRight:(0,c.jsx)(a,{size:18}),children:`Продолжить`}),(0,c.jsx)(i,{variant:`ghost`,iconLeft:(0,c.jsx)(r,{size:16}),size:`sm`,children:`Обновить`})]})},g={args:{fullWidth:!0},parameters:{layout:`padded`}},_={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsx)(i,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Отправляем...`:`Отправить`})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Сохраняем..."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      <Button iconLeft={<Download size={18} />}>Скачать</Button>
      <Button variant="secondary" iconRight={<ArrowRight size={18} />}>
        Продолжить
      </Button>
      <Button variant="ghost" iconLeft={<RefreshCcw size={16} />} size="sm">
        Обновить
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample() {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1500);
    };
    return <Button loading={loading} onClick={handleClick}>
        {loading ? "Отправляем..." : "Отправить"}
      </Button>;
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`WithIcon`,`FullWidth`,`Interactive`];export{u as Default,p as Disabled,g as FullWidth,_ as Interactive,m as Loading,f as Sizes,d as Variants,h as WithIcon,v as __namedExportsOrder,l as default};