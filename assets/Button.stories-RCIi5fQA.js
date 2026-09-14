import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import{t as n}from"./arrow-right-CP5DwSqX.js";import{t as r}from"./download-CTChRhgw.js";import{t as i}from"./refresh-ccw-BRgFP7ZI.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import{t as a}from"./Button-DXERo49s.js";var o=t(),s=e(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Primitives/Button`,component:a,parameters:{docs:{description:{component:`Основная кнопка действий приложения. Поддерживает варианты, размеры, иконки, состояние загрузки и растягивание на ширину контейнера.`}}},args:{children:`Сохранить`}};const f={},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{variant:`primary`,children:`Primary`}),(0,s.jsx)(a,{variant:`secondary`,children:`Secondary`}),(0,s.jsx)(a,{variant:`ghost`,children:`Ghost`}),(0,s.jsx)(a,{variant:`danger`,children:`Danger`})]})},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,s.jsx)(a,{size:`sm`,children:`Small`}),(0,s.jsx)(a,{size:`md`,children:`Medium`}),(0,s.jsx)(a,{size:`lg`,children:`Large`})]})},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{disabled:!0,children:`Primary`}),(0,s.jsx)(a,{variant:`secondary`,disabled:!0,children:`Secondary`}),(0,s.jsx)(a,{variant:`ghost`,disabled:!0,children:`Ghost`})]})},g={args:{loading:!0,children:`Сохраняем...`},play:async({canvasElement:e})=>{let t=u(e).getByRole(`button`,{name:`Сохраняем...`});await c(t).toBeDisabled(),await c(t).toHaveAttribute(`aria-busy`,`true`)}},_={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,s.jsx)(a,{iconLeft:(0,s.jsx)(r,{size:18}),children:`Скачать`}),(0,s.jsx)(a,{variant:`secondary`,iconRight:(0,s.jsx)(n,{size:18}),children:`Продолжить`}),(0,s.jsx)(a,{variant:`ghost`,iconLeft:(0,s.jsx)(i,{size:16}),size:`sm`,children:`Обновить`})]})},v={args:{fullWidth:!0},parameters:{layout:`padded`}},y={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(a,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:e?`Отправляем...`:`Отправить`})}},b={args:{children:`Подписаться на изменения расписания выбранного подразделения`,fullWidth:!0},globals:{textScale:`large`}},x={...p,globals:{theme:`dark`}},S={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await l.pointer({target:t,keys:`[MouseLeft>]`})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Сохраняем..."
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: "Сохраняем..."
    });
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute("aria-busy", "true");
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: "padded"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Подписаться на изменения расписания выбранного подразделения",
    fullWidth: true
  },
  globals: {
    textScale: "large"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Variants,
  globals: {
    theme: "dark"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector("button");
    if (button) await userEvent.pointer({
      target: button,
      keys: "[MouseLeft>]"
    });
  }
}`,...S.parameters?.docs?.source}}};const C=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`WithIcon`,`FullWidth`,`Interactive`,`LongLabel`,`Dark`,`Pressed`];export{x as Dark,f as Default,h as Disabled,v as FullWidth,y as Interactive,g as Loading,b as LongLabel,S as Pressed,m as Sizes,p as Variants,_ as WithIcon,C as __namedExportsOrder,d as default};