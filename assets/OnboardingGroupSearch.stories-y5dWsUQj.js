import"./useTranslation-eDAlq15L.js";import{S as e,t}from"./iframe-CmBlaoL5.js";import{r as n}from"./Schedule-BJApNQWq.js";import"./createLucideIcon-xVjI36Up.js";import{t as r}from"./chevron-right-DIU5HY7U.js";import{t as i}from"./graduation-cap-CRZc4MEk.js";import"./search-BMroy_Ql.js";import"./x-D2llTaRH.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BQkqwLS5.js";import"./InlineSpinner-CtERaFhk.js";import{t as a}from"./Button-DBi7TZPC.js";import"./Button-DDTwPwQw.js";import"./IconButton-7ym-EM3C.js";import"./IconButton-C3ENirEm.js";import"./Pressable-BCRUH-HG.js";import"./Pressable-4oYskg3v.js";import"./proxy-CdotowUO.js";import"./AnimatePresence-CGVxng4l.js";import"./use-reduced-motion-Cj8PTyoc.js";import"./BlurTransition-BbIl-pOB.js";import"./BlurTransition-Lagju-WE.js";import"./Typography-CcbGFH53.js";import"./Typography-Q4VDshPG.js";import"./AsyncContentTransition-DBlOtMg7.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./Skeleton-D22MI1Di.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-6mKwwxb-.js";import"./FormField-DI1mxX-F.js";import"./Input-ttMuKZ_h.js";import"./Input-BJFMwxMd.js";import{t as o}from"./ListRow-DHNW6PFT.js";import"./ListRow-B7yOQXqt.js";import{n as s,t as c}from"./GroupSearchResultsRegion-CyiZqgsj.js";var l=e(),u=t(),d=[{id:`164567`,name:`ТРПО25-2`,description:`Факультет информационных технологий и анализа больших данных`,type:n.GROUP,guid:``,source:`storybook`},{id:`164568`,name:`Очень длинное название учебной группы финансового колледжа`,description:`Центр инновационных образовательных и языковых стратегий`,type:n.GROUP,guid:``,source:`storybook`}];function f({state:e,count:t=2,reducedMotion:n=!1,initiallySelected:f=!1}){let[p,m]=(0,l.useState)(e===`idle`?``:`ТРПО`),[h,g]=(0,l.useState)(`idle`),[_,v]=(0,l.useState)(f?d[0].name:``),[y,b]=(0,l.useState)(t),x=(0,l.useRef)(null),S=e===`cycle`?h:e;return(0,l.useEffect)(()=>{if(e!==`cycle`||!p)return;g(`typing`);let t=window.setTimeout(()=>g(`searching`),300),n=window.setTimeout(()=>g(`results`),800);return()=>{window.clearTimeout(t),window.clearTimeout(n)}},[p,e]),(0,u.jsx)(`div`,{style:{width:`min(100%, 390px)`,marginInline:`auto`},children:(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-3)`},children:[(0,u.jsx)(s,{example:`ТРПО25-2`,inputRef:x,searchQuery:p,setSearchQuery:m,ariaLabel:`Поиск группы`}),(0,u.jsx)(c,{status:S,query:p,results:S===`results`?d.slice(0,y):[],hint:S===`idle`&&p?`Введите минимум 2 символа.`:null,emptyMessage:`Группа не найдена`,reducedMotion:n,renderResult:e=>(0,u.jsx)(o,{title:e.name,description:e.description,leading:(0,u.jsx)(i,{size:18}),trailing:(0,u.jsx)(r,{size:16}),trailingInside:!0,onClick:()=>v(e.name)})}),_?(0,u.jsxs)(`span`,{role:`status`,children:[`Выбрано: `,_]}):null,e===`cycle`?(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`var(--ui-space-2)`,flexWrap:`wrap`},children:[(0,u.jsx)(a,{variant:`ghost`,size:`sm`,onClick:()=>m(e=>`${e}А`),children:`Новый запрос`}),(0,u.jsx)(a,{variant:`ghost`,size:`sm`,onClick:()=>b(y===1?2:1),children:y===1?`Два результата`:`Один результат`})]}):null]})})}var p={title:`Screens/Onboarding/Group search`,component:f,parameters:{layout:`padded`},args:{state:`idle`}};const m={},h={args:{state:`typing`}},g={args:{state:`searching`}},_={args:{state:`results`,count:1}},v={args:{state:`results`,count:2}},y={args:{state:`empty`}},b={args:{state:`error`}},x={args:{state:`results`,count:1,initiallySelected:!0}},S={args:{state:`cycle`}},C={args:{state:`cycle`,reducedMotion:!0}},w={args:{state:`results`,count:2},parameters:{viewport:{defaultViewport:`smallMobile`}}},T={args:{state:`results`,count:2},globals:{theme:`dark`}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "typing"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "searching"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results",
    count: 1
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results",
    count: 2
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results",
    count: 1,
    initiallySelected: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    state: "cycle"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    state: "cycle",
    reducedMotion: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results",
    count: 2
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: "results",
    count: 2
  },
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source}}};const E=[`Idle`,`Typing`,`SearchingSkeleton`,`OneResult`,`MultipleResults`,`Empty`,`Error`,`SelectedResult`,`RapidQueryChanges`,`ReducedMotion`,`LongNamesSmallMobile`,`Dark`];export{T as Dark,y as Empty,b as Error,m as Idle,w as LongNamesSmallMobile,v as MultipleResults,_ as OneResult,S as RapidQueryChanges,C as ReducedMotion,g as SearchingSkeleton,x as SelectedResult,h as Typing,E as __namedExportsOrder,p as default};