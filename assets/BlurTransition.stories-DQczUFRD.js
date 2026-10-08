import{S as e,t}from"./iframe-D0TFUEDL.js";import{i as n}from"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as r}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import"./proxy-B27OI5yE.js";import"./AnimatePresence-BUpu7bNm.js";import"./use-reduced-motion-DVIztM76.js";import{t as i}from"./BlurTransition-CmSxI2SF.js";import{t as a}from"./Card-Lm_APeX4.js";import"./Card-DMf2-Jiv.js";import{n as o,t as s}from"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";var c=e(),l=t(),u=`Ильин А.С.`,d=`ilyin.as@fa.ru`,f=`А.А.`,p=`long.teacher.email@university.ru`,m=`Савинов Е.А.`,h=`savinov@hse.ru`;function g(e){return e===`left-to-right`?`right-to-left`:`left-to-right`}function _({variant:e,direction:t=`left-to-right`,first:n=u,second:f=d,reducedMotion:p}){let[m,h]=(0,c.useState)(!1);return(0,l.jsxs)(a,{className:`blur-transition-story`,padding:`md`,children:[(0,l.jsx)(a.Header,{children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(s,{level:2,size:`md`,children:`Смена текстового состояния`}),(0,l.jsx)(o,{size:`sm`,tone:`muted`,children:`Типографика, поверхность и timing совпадают с приложением.`})]})}),(0,l.jsx)(a.Content,{children:(0,l.jsx)(i,{contentKey:m?`second`:`first`,variant:e,direction:m?t:g(t),reducedMotion:p,"aria-live":`polite`,className:`blur-transition-story__value`,children:(0,l.jsx)(o,{as:`span`,size:`lg`,weight:`medium`,children:m?f:n})})}),(0,l.jsx)(a.Footer,{children:(0,l.jsx)(r,{variant:`secondary`,onClick:()=>h(e=>!e),children:`Сменить текст`})})]})}function v(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(a,{className:`blur-transition-story`,padding:`md`,children:[(0,l.jsxs)(a.Content,{children:[(0,l.jsx)(o,{size:`caption`,tone:`muted`,children:e?`Email преподавателя`:`Преподаватель`}),(0,l.jsx)(i,{contentKey:e?`email`:`name`,variant:`horizontal`,direction:e?`left-to-right`:`right-to-left`,"aria-live":`polite`,className:`blur-transition-story__value`,children:(0,l.jsx)(o,{as:`span`,size:`lg`,weight:`medium`,children:e?d:u})})]}),(0,l.jsx)(a.Footer,{children:(0,l.jsx)(r,{variant:`secondary`,onClick:()=>t(e=>!e),children:e?`Показать имя`:`Показать email`})})]})}function y(){let e=[`Савинов Е.А.`,`e.savinov@fa.ru`,`Александрова-Рождественская А.А.`,`a.rozhdestvenskaya@fa.ru`],[t,s]=(0,c.useState)(0),u=(0,c.useRef)([]);(0,c.useEffect)(()=>()=>{u.current.forEach(e=>window.clearTimeout(e))},[]);let d=()=>{u.current.forEach(e=>window.clearTimeout(e)),u.current=e.slice(1).map((e,t)=>window.setTimeout(()=>s(t+1),t*Math.max(n.Fast/3,1)))};return(0,l.jsxs)(a,{className:`blur-transition-story`,padding:`md`,children:[(0,l.jsx)(a.Content,{children:(0,l.jsx)(i,{as:`div`,contentKey:e[t],variant:`horizontal`,direction:t%2==0?`right-to-left`:`left-to-right`,"aria-live":`polite`,className:`blur-transition-story__value`,children:(0,l.jsx)(o,{as:`span`,size:`lg`,weight:`medium`,children:e[t]})})}),(0,l.jsx)(a.Footer,{children:(0,l.jsx)(r,{variant:`secondary`,onClick:d,children:`Запустить быстрые переключения`})})]})}var b={title:`Primitives/Motion/BlurTransition`,component:i,parameters:{docs:{description:{component:`Единый primitive для замены небольших областей текста. Standard сохраняет controlled blur. Horizontal проводит по строке посимвольную blur-волну с нелинейным directional easing; системный reduced motion оставляет короткую opacity-смену.`}}},args:{contentKey:`preview`,children:u}};const x={render:()=>(0,l.jsx)(_,{variant:`standard`})},S={render:()=>(0,l.jsx)(_,{variant:`horizontal`,direction:`left-to-right`})},C={render:()=>(0,l.jsx)(_,{variant:`horizontal`,direction:`right-to-left`,first:d,second:u})},w={render:()=>(0,l.jsx)(v,{})},T={render:()=>(0,l.jsx)(_,{variant:`horizontal`,first:u,second:d})},E={render:()=>(0,l.jsx)(_,{variant:`horizontal`,direction:`right-to-left`,first:d,second:u})},D={render:()=>(0,l.jsx)(_,{variant:`horizontal`,first:f,second:p})},O={render:()=>(0,l.jsx)(_,{variant:`horizontal`,first:m,second:h})},k={render:()=>(0,l.jsx)(_,{variant:`horizontal`,first:`Диреева Д.И.`,second:`asvoskovs@fa.ru`}),parameters:{docs:{description:{story:`Регрессионный пример для близких по ширине строк: левый край и базовая линия остаются на месте, а старое и новое состояния разделяет локальная blur-граница.`}}}},A={render:()=>(0,l.jsx)(y,{})},j={render:()=>(0,l.jsx)(_,{variant:`horizontal`,reducedMotion:!0})},M={...w,globals:{theme:`light`}},N={...w,globals:{theme:`dark`}},P={...T,globals:{textScale:`large`}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="standard" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" direction="left-to-right" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" direction="right-to-left" first={EMAIL_TEXT} second={SHORT_TEXT} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <BidirectionalExample />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" first={SHORT_TEXT} second={EMAIL_TEXT} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" direction="right-to-left" first={EMAIL_TEXT} second={SHORT_TEXT} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" first={VERY_SHORT_TEXT} second={LONG_EMAIL_TEXT} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" first={SIMILAR_NAME_TEXT} second={SIMILAR_EMAIL_TEXT} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" first="Диреева Д.И." second="asvoskovs@fa.ru" />,
  parameters: {
    docs: {
      description: {
        story: "Регрессионный пример для близких по ширине строк: левый край и базовая линия остаются на месте, а старое и новое состояния разделяет локальная blur-граница."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <RapidChangesExample />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionExample variant="horizontal" reducedMotion />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...BidirectionalInteraction,
  globals: {
    theme: "light"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...BidirectionalInteraction,
  globals: {
    theme: "dark"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...ShortToLong,
  globals: {
    textScale: "large"
  }
}`,...P.parameters?.docs?.source}}};const F=[`StandardBlur`,`HorizontalLeftToRight`,`HorizontalRightToLeft`,`BidirectionalInteraction`,`ShortToLong`,`LongToShort`,`VeryShortToLong`,`SimilarWidth`,`NoOverlapCorridor`,`RapidSequentialChanges`,`ReducedMotion`,`Light`,`Dark`,`LargeText`];export{w as BidirectionalInteraction,N as Dark,S as HorizontalLeftToRight,C as HorizontalRightToLeft,P as LargeText,M as Light,E as LongToShort,k as NoOverlapCorridor,A as RapidSequentialChanges,j as ReducedMotion,T as ShortToLong,O as SimilarWidth,x as StandardBlur,D as VeryShortToLong,F as __namedExportsOrder,b as default};