import"./preload-helper-DGWYlufl.js";import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import{M as n,k as r}from"./scheduleStorage-DhqxhI0r.js";import"./Schedule-CcBJWk1K.js";import"./cache-BPD7z7HK.js";import"./format-Cwr2AuTk.js";import{n as i}from"./chunk-OE4NN4TA-DR6JmrIt.js";import"./createLucideIcon-SYFtv4X6.js";import"./check-CAWI8-gi.js";import"./chevron-down-BFZjQFNb.js";import"./chevron-left-StObO3su.js";import"./chevron-right-BpvDcQfb.js";import"./external-link-BQvZU39g.js";import"./mail-DmRGxEOD.js";import"./map-pin-DMhnO3eK.js";import"./user-DdNTXqgW.js";import"./users-CXtT5t3b.js";import"./lessonTitle-f2RDUXlo.js";import{i as a}from"./motion-DpqGF0yE.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import{t as o}from"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./Pressable-DHFzE1EG.js";import"./Pressable-C5QHV1_C.js";import"./proxy-DP15KAnr.js";import"./AnimatePresence-D4WTY7ZF.js";import"./use-reduced-motion-CEbtXdw3.js";import"./BlurTransition-M4GcuL_U.js";import"./BlurTransition-COfBEOBM.js";import"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./AsyncContentTransition-BvzI3ydq.js";import"./AsyncContentTransition-Qh_tjfb6.js";import"./Skeleton-BcxclTbr.js";import"./Skeleton-Bi_JOlt_.js";import"./Inline-DjFwlOBT.js";import"./Inline-Bs-_lp1S.js";import"./lessonTime-o_RJ83_6.js";import"./lessonLecturers-BDED0hzo.js";import"./workWithLessons-9wSY8YFd.js";import"./schedule-DSWhW_2N.js";import"./normalize-PmvcoRwN.js";import"./mapNavigation-DQYA2EBw.js";import{r as s,t as c}from"./ScheduleWeekSwitcher-vtSY1ZJU.js";import"./AuditoriumMapLink-B_CAEaCC.js";import"./TeacherContact-BoBRW1Wl.js";import"./LessonCard-Dp_anvrE.js";import{t as l}from"./SchedulePage-ClcAu0FL.js";import{n as u,r as d,t as f}from"./scheduleDesign.fixtures-B0WQzWcC.js";import{n as p,t as m}from"./ScheduleDayTransition.stories-D-3crI5G.js";var h=e(),g=t(),{userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=2,b=[`Системы управления базами данных`,`Информационная безопасность`,`Сетевые технологии`,`Проектирование интерфейсов`,`Архитектура программных систем`,`Анализ данных`],x=()=>{};function S(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function C(e){return S(f,(e-y)*7)}function w(e,t,i){let a=n(t).find(e=>e.date.toDateString()===t.toDateString());return Array.from({length:e},(e,n)=>({...d,date:r(t),day_of_week:a?.dayOfWeek??d.day_of_week,discipline:b[n%b.length],lesson_num:String(n+1),start_time:`${String(8+n*2).padStart(2,`0`)}:30`,end_time:`${String(10+n*2).padStart(2,`0`)}:00`,lesson_ids:[`week-${i}-${n}`],variants:[{...d.variants[0],date:r(t),lesson_id:`week-${i}-${n}`}]}))}function T({initialWeekIndex:e,lessonCounts:t,loadingOnSwitch:r=!1,reducedMotion:a=!1,debugControls:d=!1,slowMotion:_=!1,teacherExitDemo:v=!1}){let[b,T]=(0,h.useState)(e),[E,D]=(0,h.useState)(()=>C(e)),[O,k]=(0,h.useState)(0),[A,j]=(0,h.useState)(!1),[M,N]=(0,h.useState)(_),P=(0,h.useRef)(null),F=(0,h.useMemo)(()=>n(E),[E]),I=(0,h.useMemo)(()=>{let n=w(t[b]??0,E,b);return v&&b===e?p([n])[0]:n},[e,t,E,v,b]);m(M),(0,h.useEffect)(()=>()=>{P.current&&window.clearTimeout(P.current)},[]);let L=(0,h.useCallback)(()=>{r&&(P.current&&window.clearTimeout(P.current),j(!0),P.current=window.setTimeout(()=>{j(!1),P.current=null},520))},[r]),R=(0,h.useCallback)(e=>{let n=Math.max(0,Math.min(t.length-1,b+e));n!==b&&(k(Math.sign(n-b)),T(n),D(e=>S(e,(n-b)*7)),L())},[t.length,L,b]),z=(0,h.useCallback)(e=>{k(Math.sign(e.getTime()-E.getTime())),D(e)},[E]),B=(0,h.useCallback)(()=>{k(Math.sign(y-b)),T(y),D(f),L()},[L,b]);return(0,g.jsx)(i,{initialEntries:[`/main/schedule`],children:(0,g.jsxs)(`main`,{className:`schedule-page schedule-day-transition-story`,children:[(0,g.jsx)(c,{days:F,direction:O,selectedDate:E,currentTime:f,weekKey:F[0].date.getTime(),weekVariants:s,onChangeWeek:R,onOpenDatePicker:x,onSelectDate:z,onToday:B}),d?(0,g.jsxs)(`div`,{className:`schedule-day-transition-story__controls`,children:[(0,g.jsx)(o,{size:`sm`,variant:`secondary`,onClick:()=>R(b<t.length-1?1:-1),children:`Replay`}),(0,g.jsxs)(o,{size:`sm`,variant:`ghost`,onClick:()=>N(e=>!e),children:[`Slow motion: `,M?`on`:`off`]})]}):null,(0,g.jsx)(l,{selectedDate:E,todaysLessons:I,isLessonsLoading:A,scheduleChoose:u,studyPlace:`fin`,onChooseLesson:x,onOpenLessonInformation:x,reducedMotion:a})]})})}var E=e=>new Promise(t=>window.setTimeout(t,e));async function D(e,t,n=180){await E(n),await _.click(v(e).getByRole(`button`,{name:t}))}var O={title:`Schedule/Week Switch Motion`,component:T,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile`},docs:{description:{component:`Интерактивная timeline переключения недели: один shared selected indicator, разнесённые opacity-кривые без читаемого double exposure и карточный reveal после 160ms. Visual Debug добавляет Replay и Storybook-only slow motion.`}}},args:{initialWeekIndex:y,lessonCounts:[4,3,3,4,2,6],loadingOnSwitch:!1,reducedMotion:!1,debugControls:!1,slowMotion:!1,teacherExitDemo:!1}};const k={args:{lessonCounts:[3,3,3,3,3]},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},A={play:async({canvasElement:e})=>D(e,`Предыдущая неделя`)},j={play:async({canvasElement:e})=>{await D(e,`Следующая неделя`),await E(220);let t=e.querySelectorAll(`.schedule-day-chip`);t[4]&&await _.click(t[4])}},M={args:{debugControls:!0,slowMotion:!0}},N={args:{teacherExitDemo:!0,slowMotion:!0},play:async({canvasElement:e})=>{await _.click(v(e).getByRole(`button`,{name:`Показать и скопировать email преподавателя`})),await E(a.Feedback+60),await D(e,`Следующая неделя`,20)}},P={args:{lessonCounts:[3,2,6,3,3],initialWeekIndex:1},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},F={args:{lessonCounts:[3,6,1,3,3],initialWeekIndex:1},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},I={args:{lessonCounts:[3,4,3,0,2]},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},L={args:{lessonCounts:[3,3,0,4,2]},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},R={play:async({canvasElement:e})=>D(e,`Следующая неделя`,60)},z={args:{loadingOnSwitch:!0},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},B={args:{initialWeekIndex:0,lessonCounts:[2,3,4,5,6]},play:async({canvasElement:e})=>{for(let t=0;t<3;t+=1)await D(e,`Следующая неделя`,35)}},V={play:async({canvasElement:e})=>{await D(e,`Следующая неделя`,35),await D(e,`Предыдущая неделя`,35)}},H={args:{reducedMotion:!0},play:async({canvasElement:e})=>D(e,`Следующая неделя`)},U={parameters:{viewport:{defaultViewport:`smallMobile`}}},W={parameters:{viewport:{defaultViewport:`mobile`}}},G={globals:{theme:`dark`}},K={globals:{theme:`light`}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 3, 3, 3, 3]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Предыдущая неделя")
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await clickWeek(canvasElement, "Следующая неделя");
    await pause(220);
    const days = canvasElement.querySelectorAll<HTMLElement>(".schedule-day-chip");
    if (days[4]) await userEvent.click(days[4]);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    debugControls: true,
    slowMotion: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    teacherExitDemo: true,
    slowMotion: true
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Показать и скопировать email преподавателя"
    }));
    await pause(MotionDuration.Feedback + 60);
    await clickWeek(canvasElement, "Следующая неделя", 20);
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 2, 6, 3, 3],
    initialWeekIndex: 1
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 6, 1, 3, 3],
    initialWeekIndex: 1
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 4, 3, 0, 2]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 3, 0, 4, 2]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя", 60)
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    loadingOnSwitch: true
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    initialWeekIndex: 0,
    lessonCounts: [2, 3, 4, 5, 6]
  },
  play: async ({
    canvasElement
  }) => {
    for (let index = 0; index < 3; index += 1) {
      await clickWeek(canvasElement, "Следующая неделя", 35);
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await clickWeek(canvasElement, "Следующая неделя", 35);
    await clickWeek(canvasElement, "Предыдущая неделя", 35);
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...K.parameters?.docs?.source}}};const q=[`SameLessonCount`,`PreviousWeek`,`DifferentSelectedWeekday`,`VisualDebug`,`TeacherEmailFrozenOnWeekExit`,`TwoToSix`,`SixToOne`,`WeekToEmpty`,`EmptyToPopulated`,`CachedWeek`,`LoadingWeek`,`RapidNextNextNext`,`RapidNextPrevious`,`ReducedMotion`,`Mobile320`,`Mobile390`,`Dark`,`Light`];export{R as CachedWeek,G as Dark,j as DifferentSelectedWeekday,L as EmptyToPopulated,K as Light,z as LoadingWeek,U as Mobile320,W as Mobile390,A as PreviousWeek,B as RapidNextNextNext,V as RapidNextPrevious,H as ReducedMotion,k as SameLessonCount,F as SixToOne,N as TeacherEmailFrozenOnWeekExit,P as TwoToSix,M as VisualDebug,I as WeekToEmpty,q as __namedExportsOrder,O as default};