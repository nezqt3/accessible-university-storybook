import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import"./Schedule-CcBJWk1K.js";import"./format-Cwr2AuTk.js";import"./createLucideIcon-SYFtv4X6.js";import{t as n}from"./RenderGroupItem-CJkPK_PZ.js";import"./graduation-cap-D4wiC3qL.js";import"./trash-2-C9JRw1KY.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./Pressable-DHFzE1EG.js";import"./Pressable-C5QHV1_C.js";import{n as r}from"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./ListRow-B15COSLv.js";import"./ListRow-CbTu-ktQ.js";import{t as i}from"./schedule-DSWhW_2N.js";import{n as a,r as o}from"./scheduleSearch.fixtures-DFaquk9Y.js";var s=e(),c=t(),l={title:`Schedule/SearchScheduleRow`,component:n,parameters:{layout:`padded`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`min(100%, 316px)`,minWidth:0},children:(0,c.jsx)(e,{})})],args:{group:o,name:o.name,type:i.SEARCH,isSubscribed:!1,loading:!1,onSelect:()=>{},onToggleSubscription:()=>{}}};const u={},d={parameters:{docs:{description:{story:`Ширина контента соответствует модалке на viewport 348 px: название группы и действие остаются в одной строке.`}}}},f={args:{group:a,name:a.name,onRemove:()=>{}}},p={args:{isSubscribed:!0,type:i.SUBSCRIPTION,onRemove:()=>{}}},m={args:{loading:!0}},h={args:{removeLoading:!0,onRemove:()=>{}}},g={args:{disabled:!0,onRemove:()=>{}}},_={args:{subscriptionDisabled:!0}},v={...f,globals:{theme:`dark`,textScale:`large`}},y={render:function(e){let[t,i]=(0,s.useState)(!1),[a,o]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{...e,isSubscribed:t,onSelect:()=>o(e=>e+1),onToggleSubscription:()=>i(e=>!e)}),(0,c.jsxs)(r,{size:`caption`,tone:`muted`,"aria-live":`polite`,children:[`Открытий: `,a,`. `,t?`Подписка включена.`:`Подписка выключена.`]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Ширина контента соответствует модалке на viewport 348 px: название группы и действие остаются в одной строке."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    group: longSearchScheduleFixture,
    name: longSearchScheduleFixture.name,
    onRemove: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isSubscribed: true,
    type: GroupSearchType.SUBSCRIPTION,
    onRemove: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    removeLoading: true,
    onRemove: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onRemove: () => {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    subscriptionDisabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function InteractiveRow(args) {
    const [subscribed, setSubscribed] = useState(false);
    const [opened, setOpened] = useState(0);
    return <div>
        <RenderGroupItem {...args} isSubscribed={subscribed} onSelect={() => setOpened(count => count + 1)} onToggleSubscription={() => setSubscribed(value => !value)} />
        <Text size="caption" tone="muted" aria-live="polite">
          Открытий: {opened}. {subscribed ? "Подписка включена." : "Подписка выключена."}
        </Text>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const b=[`Default`,`CompactWidth`,`LongTitle`,`Subscribed`,`Loading`,`Removing`,`Disabled`,`SubscriptionUnavailable`,`DarkLargeText`,`IndependentActions`];export{d as CompactWidth,v as DarkLargeText,u as Default,g as Disabled,y as IndependentActions,m as Loading,f as LongTitle,h as Removing,p as Subscribed,_ as SubscriptionUnavailable,b as __namedExportsOrder,l as default};