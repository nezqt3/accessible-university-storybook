import{S as e,t}from"./iframe-CMexCRad.js";import"./createLucideIcon-SYFtv4X6.js";import{t as n}from"./calendar-days-DJ3Q5_yA.js";import{t as r}from"./chevron-right-BpvDcQfb.js";import{t as i}from"./trash-2-C9JRw1KY.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import{t as a}from"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import{t as o}from"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./Pressable-DHFzE1EG.js";import"./Pressable-C5QHV1_C.js";import{n as s}from"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import{t as c}from"./ListRow-B15COSLv.js";var l=e(),u=t(),d={title:`Primitives/ListRow`,component:c,parameters:{layout:`padded`,docs:{description:{component:`Основной текст имеет приоритет и переносится полностью. Нажатие строки и trailing action — соседние элементы, поэтому кнопки не вкладываются друг в друга. Disabled блокирует основное действие; состояния trailing задаются явно.`}}},decorators:[e=>(0,u.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,u.jsx)(e,{})})],args:{title:`ТРПО25-2`,description:`Финансовый университет`,leading:(0,u.jsx)(n,{}),onClick:()=>{}}};const f={args:{trailing:(0,u.jsx)(r,{"aria-hidden":`true`,size:18})}},p={args:{title:`ТРПО25-2 (подгруппа 1) · информационные системы и программирование`,trailing:(0,u.jsx)(o,{ariaLabel:`Удалить расписание`,variant:`ghost`,children:(0,u.jsx)(i,{})})}},m={args:{description:`Финансовый университет при Правительстве Российской Федерации, 4-й Вешняковский проезд, 4`}},h={args:{trailing:(0,u.jsx)(a,{variant:`ghost`,children:`Подписаться`})}},g={args:{onClick:void 0}},_={args:{title:`Удалить расписание`,description:`ТРПО25-2 (подгруппа 1)`,leading:(0,u.jsx)(i,{}),tone:`danger`}},v={args:{disabled:!0}},y={...p,globals:{theme:`dark`,textScale:`large`}},b={render:function(e){let[t,n]=(0,l.useState)(0),[r,i]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(c,{...e,onClick:()=>n(e=>e+1),trailing:(0,u.jsx)(a,{variant:`ghost`,onClick:()=>i(e=>!e),children:r?`Отписаться`:`Подписаться`})}),(0,u.jsxs)(s,{size:`caption`,tone:`muted`,"aria-live":`polite`,children:[`Открытий: `,t,`. `,r?`Подписка включена.`:`Подписка выключена.`]})]})}},x={decorators:[e=>(0,u.jsx)(`div`,{style:{overflow:`hidden`,borderRadius:`var(--ui-radius-lg)`},children:(0,u.jsx)(e,{})})]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trailing: <ChevronRight aria-hidden="true" size={18} />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "ТРПО25-2 (подгруппа 1) · информационные системы и программирование",
    trailing: <IconButton ariaLabel="Удалить расписание" variant="ghost">
        <Trash2 />
      </IconButton>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Финансовый университет при Правительстве Российской Федерации, 4-й Вешняковский проезд, 4"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    trailing: <Button variant="ghost">Подписаться</Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Удалить расписание",
    description: "ТРПО25-2 (подгруппа 1)",
    leading: <Trash2 />,
    tone: "danger"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function IndependentActionsExample(args) {
    const [opened, setOpened] = useState(0);
    const [subscribed, setSubscribed] = useState(false);
    return <div>
        <ListRow {...args} onClick={() => setOpened(count => count + 1)} trailing={<Button variant="ghost" onClick={() => setSubscribed(value => !value)}>
              {subscribed ? "Отписаться" : "Подписаться"}
            </Button>} />
        <Text size="caption" tone="muted" aria-live="polite">
          Открытий: {opened}. {subscribed ? "Подписка включена." : "Подписка выключена."}
        </Text>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    overflow: "hidden",
    borderRadius: "var(--ui-radius-lg)"
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};const S=[`Default`,`LongTitle`,`LongSubtitle`,`WithAction`,`WithoutAction`,`Destructive`,`Disabled`,`DarkLargeText`,`IndependentActions`,`FocusAtContainerEdge`];export{y as DarkLargeText,f as Default,_ as Destructive,v as Disabled,x as FocusAtContainerEdge,b as IndependentActions,m as LongSubtitle,p as LongTitle,h as WithAction,g as WithoutAction,S as __namedExportsOrder,d as default};