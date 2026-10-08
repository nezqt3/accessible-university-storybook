import"./useTranslation-Bqh59kuu.js";import{S as e,t}from"./iframe-D0TFUEDL.js";import"./createLucideIcon-cfOq0vGI.js";import"./circle-alert-m-WTEXJE.js";import"./circle-check-c2Iqda9m.js";import"./info-BzAm7Awp.js";import{t as n}from"./Alert-Gx6PxDza.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as r}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import"./proxy-B27OI5yE.js";import"./AnimatePresence-BUpu7bNm.js";import"./use-reduced-motion-DVIztM76.js";import"./BlurTransition-CmSxI2SF.js";import"./BlurTransition-Lagju-WE.js";import{t as i}from"./Card-Lm_APeX4.js";import"./Card-DMf2-Jiv.js";import{n as a,t as o}from"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import{t as s}from"./AsyncContentTransition-Io5YD_YJ.js";import{t as c}from"./EmptyState-nNRMUBdQ.js";import"./EmptyState-Q6WzCJvL.js";import{t as l}from"./Skeleton-CYsxZqE9.js";import"./Skeleton-Bmw2rAog.js";var u=e(),d=t();function f({layout:e}){return e===`statistics`?(0,d.jsx)(`div`,{className:`async-transition-story__stats`,children:[0,1].map(e=>(0,d.jsxs)(`div`,{className:`async-transition-story__stat`,children:[(0,d.jsx)(l,{variant:`text`,width:`70%`}),(0,d.jsx)(l,{variant:`title`,width:`45%`})]},e))}):e===`list`?(0,d.jsx)(i,{padding:`md`,className:`async-transition-story__list`,children:[0,1,2].map(e=>(0,d.jsxs)(`div`,{className:`async-transition-story__row`,children:[(0,d.jsx)(l,{variant:`title`,width:`${72-e*8}%`}),(0,d.jsx)(l,{variant:`text`,width:`88%`})]},e))}):(0,d.jsxs)(i,{padding:`md`,className:`async-transition-story__skeleton-card`,children:[(0,d.jsx)(l,{variant:`title`,width:`58%`}),(0,d.jsx)(l,{variant:`text`}),(0,d.jsx)(l,{variant:`text`,width:`76%`}),(0,d.jsx)(l,{variant:`button`,width:132})]})}function p({layout:e,result:t}){return t===`empty`?(0,d.jsx)(c,{title:`Ничего не найдено`,description:`Попробуйте изменить фильтры.`}):t===`error`?(0,d.jsx)(n,{tone:`error`,title:`Не удалось загрузить данные`,children:`Повторите попытку.`}):e===`statistics`?(0,d.jsxs)(`div`,{className:`async-transition-story__stats`,children:[(0,d.jsxs)(`div`,{className:`async-transition-story__stat`,children:[(0,d.jsx)(a,{size:`sm`,tone:`muted`,children:`Всего заявок`}),(0,d.jsx)(o,{level:3,children:`24`})]}),(0,d.jsxs)(`div`,{className:`async-transition-story__stat`,children:[(0,d.jsx)(a,{size:`sm`,tone:`muted`,children:`Новых сегодня`}),(0,d.jsx)(o,{level:3,children:`6`})]})]}):e===`list`?(0,d.jsx)(i,{padding:`md`,className:`async-transition-story__list`,children:[`Прикладная информатика`,`Экономика`,`Юриспруденция`].map(e=>(0,d.jsxs)(`div`,{className:`async-transition-story__row`,children:[(0,d.jsx)(a,{weight:`medium`,children:e}),(0,d.jsx)(a,{size:`sm`,tone:`muted`,children:`Данные загружены и готовы к просмотру`})]},e))}):(0,d.jsxs)(i,{padding:`md`,className:`async-transition-story__card`,children:[(0,d.jsx)(o,{level:3,children:`Материалы по дисциплине`}),(0,d.jsx)(a,{tone:`muted`,children:`Три файла доступны для просмотра и скачивания.`}),(0,d.jsx)(r,{size:`sm`,variant:`secondary`,children:`Открыть`})]})}function m({layout:e=`card`,result:t=`success`,responseMs:n=520,reducedMotion:i=!1,initialLoading:a=!0}){let[o,c]=(0,u.useState)(a),l=(0,u.useRef)(null),m=(0,u.useCallback)(()=>{l.current!==null&&window.clearTimeout(l.current)},[]),h=(0,u.useCallback)(()=>{m(),c(!0),l.current=window.setTimeout(()=>c(!1),n)},[m,n]);return(0,u.useEffect)(()=>(a&&h(),m),[m,a,h]),(0,d.jsxs)(`div`,{className:`async-transition-story`,children:[(0,d.jsx)(s,{loading:o,skeleton:(0,d.jsx)(f,{layout:e}),contentKey:`${e}-${t}`,reducedMotion:i,children:(0,d.jsx)(p,{layout:e,result:t})}),(0,d.jsx)(`div`,{className:`async-transition-story__actions`,children:(0,d.jsx)(r,{variant:`secondary`,onClick:h,children:`Replay`})})]})}function h(){return(0,d.jsxs)(`div`,{className:`async-transition-story__independent`,children:[(0,d.jsx)(m,{layout:`statistics`,responseMs:250}),(0,d.jsx)(m,{layout:`list`,responseMs:900})]})}var g={title:`States/AsyncContentTransition`,component:s,args:{loading:!0,skeleton:(0,d.jsx)(f,{layout:`card`}),children:(0,d.jsx)(p,{layout:`card`,result:`success`})},parameters:{docs:{description:{component:`Системный переход от существующего skeleton к success, empty или error. Skeleton растворяется в локальной поверхности, а крупный content block появляется через системный subtle blur без изменения data-fetching логики.`}}}};const _={render:()=>(0,d.jsx)(s,{loading:!0,skeleton:(0,d.jsx)(f,{layout:`card`}),children:(0,d.jsx)(p,{layout:`card`,result:`success`})})},v={render:()=>(0,d.jsx)(m,{})},y={render:()=>(0,d.jsx)(m,{initialLoading:!1})},b={render:()=>(0,d.jsx)(m,{result:`empty`})},x={render:()=>(0,d.jsx)(m,{result:`error`})},S={render:()=>(0,d.jsx)(m,{layout:`card`})},C={render:()=>(0,d.jsx)(m,{layout:`statistics`})},w={render:()=>(0,d.jsx)(m,{layout:`list`})},T={render:()=>(0,d.jsx)(h,{})},E={render:()=>(0,d.jsx)(m,{responseMs:50})},D={render:()=>(0,d.jsx)(m,{responseMs:1400})},O={render:()=>(0,d.jsx)(m,{reducedMotion:!0})},k={render:()=>(0,d.jsx)(m,{layout:`statistics`}),globals:{theme:`light`}},A={render:()=>(0,d.jsx)(m,{layout:`statistics`}),globals:{theme:`dark`}},j={render:()=>(0,d.jsx)(m,{layout:`list`}),globals:{viewport:{value:`smallMobile`,isRotated:!1}}},M={render:()=>(0,d.jsx)(m,{layout:`list`}),globals:{viewport:{value:`mobile`,isRotated:!1}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AsyncContentTransition loading skeleton={<DemoSkeleton layout="card" />}>
      <DemoContent layout="card" result="success" />
    </AsyncContentTransition>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo initialLoading={false} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo result="empty" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo result="error" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="card" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="statistics" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="list" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IndependentBlocksDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo responseMs={50} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo responseMs={1400} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo reducedMotion />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="statistics" />,
  globals: {
    theme: "light"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="statistics" />,
  globals: {
    theme: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="list" />,
  globals: {
    viewport: {
      value: "smallMobile",
      isRotated: false
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ReplayableDemo layout="list" />,
  globals: {
    viewport: {
      value: "mobile",
      isRotated: false
    }
  }
}`,...M.parameters?.docs?.source}}};const N=[`StaticSkeleton`,`SkeletonToContent`,`ReloadCycle`,`SkeletonToEmpty`,`SkeletonToError`,`CardSkeletonToCard`,`StatisticsSkeletonToStatistics`,`ListSkeletonToList`,`IndependentBlocks`,`FastResponse`,`SlowResponse`,`ReducedMotion`,`Light`,`Dark`,`Mobile320`,`Mobile390`];export{S as CardSkeletonToCard,A as Dark,E as FastResponse,T as IndependentBlocks,k as Light,w as ListSkeletonToList,j as Mobile320,M as Mobile390,O as ReducedMotion,y as ReloadCycle,v as SkeletonToContent,b as SkeletonToEmpty,x as SkeletonToError,D as SlowResponse,_ as StaticSkeleton,C as StatisticsSkeletonToStatistics,N as __namedExportsOrder,g as default};