import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./Schedule-BJApNQWq.js";import"./format-DRsuurA_.js";import"./createLucideIcon-B-7CjJKR.js";import{t as n}from"./RenderGroupItem-aMDj_FkG.js";import"./graduation-cap-Cy7625i1.js";import"./trash-2-s-FGNTY_.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import"./IconButton-BHQof1qE.js";import"./IconButton-CkfbeZNf.js";import"./Pressable-qu7RCk4r.js";import"./Pressable-B92bGPbW.js";import{n as r}from"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import"./proxy-BQ55LVPr.js";import"./ListRow-lfta1RS1.js";import"./ListRow-Cq2I6Jbp.js";import{t as i}from"./schedule-CmaZ1uVC.js";import{n as a,r as o}from"./scheduleSearch.fixtures-DXoBGUZd.js";var s=t(),c=e(),l={title:`Schedule/SearchScheduleRow`,component:n,parameters:{layout:`padded`},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,c.jsx)(e,{})})],args:{group:o,name:o.name,type:i.SEARCH,isSubscribed:!1,loading:!1,onSelect:()=>{},onToggleSubscription:()=>{}}};const u={},d={args:{group:a,name:a.name,onRemove:()=>{}}},f={args:{isSubscribed:!0,type:i.SUBSCRIPTION,onRemove:()=>{}}},p={args:{loading:!0}},m={args:{removeLoading:!0,onRemove:()=>{}}},h={args:{disabled:!0,onRemove:()=>{}}},g={args:{subscriptionDisabled:!0}},_={...d,globals:{theme:`dark`,textScale:`large`}},v={render:function(e){let[t,i]=(0,s.useState)(!1),[a,o]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{...e,isSubscribed:t,onSelect:()=>o(e=>e+1),onToggleSubscription:()=>i(e=>!e)}),(0,c.jsxs)(r,{size:`caption`,tone:`muted`,"aria-live":`polite`,children:[`Открытий: `,a,`. `,t?`Подписка включена.`:`Подписка выключена.`]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    group: longSearchScheduleFixture,
    name: longSearchScheduleFixture.name,
    onRemove: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isSubscribed: true,
    type: GroupSearchType.SUBSCRIPTION,
    onRemove: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    removeLoading: true,
    onRemove: () => {}
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onRemove: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    subscriptionDisabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`LongTitle`,`Subscribed`,`Loading`,`Removing`,`Disabled`,`SubscriptionUnavailable`,`DarkLargeText`,`IndependentActions`];export{_ as DarkLargeText,u as Default,h as Disabled,v as IndependentActions,p as Loading,d as LongTitle,m as Removing,f as Subscribed,g as SubscriptionUnavailable,y as __namedExportsOrder,l as default};