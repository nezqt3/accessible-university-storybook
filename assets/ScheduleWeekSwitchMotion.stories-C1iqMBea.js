import"./preload-helper-DGWYlufl.js";import"./useTranslation-C3Z1tYTP.js";import{t as e,w as t}from"./iframe-BWQ9bya-.js";import{M as n,k as r}from"./scheduleStorage-Im5BH6ln.js";import"./Schedule-BJApNQWq.js";import"./cache-B9pmE6cz.js";import"./format-DRsuurA_.js";import{i}from"./chunk-OE4NN4TA-CDL938BT.js";import"./createLucideIcon-VwXisgqe.js";import"./check-CA4ORgZD.js";import"./chevron-down-BN0gH5gI.js";import"./chevron-left-CfoDP7Az.js";import"./chevron-right-BYfSCFr4.js";import"./external-link-CwbhIFTU.js";import"./mail-B7kqKI5V.js";import"./map-pin-D-2ov0Ne.js";import"./user-gr3mD8Zp.js";import"./users-CH0e9r_L.js";import"./lessonTitle-BufUSuQF.js";import{i as a}from"./motion-C9fxwz80.js";import"./InlineSpinner-BcUILXuS.js";import"./InlineSpinner-DGBp7q51.js";import{t as o}from"./Button-Bts8SiHS.js";import"./Button-BA_jpygv.js";import"./IconButton-BTFOrYWb.js";import"./IconButton-WT9EAVsO.js";import"./Pressable-BKGs8ya5.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-B2yEO12g.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import"./Typography-CZ8GAg4R.js";import"./Typography-DVvNjpAw.js";import"./AsyncContentTransition-Cc4kVm9k.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Skeleton-BfxCCHOs.js";import"./Skeleton-ChK5Iu2x.js";import"./Inline-DcVU74Ba.js";import"./Inline-Bux_RO3c.js";import"./lessonTime-Cw9t6lsz.js";import"./lessonLecturers-CGwbwfNX.js";import"./workWithLessons-BjPjarnd.js";import"./schedule-BzzS6T-2.js";import"./normalize-utxfYNV9.js";import{r as s,t as c}from"./ScheduleWeekSwitcher-CJSkqFNv.js";import"./AuditoriumMapLink-DHRkCN97.js";import"./TeacherContact-BO1Ry3Zs.js";import"./LessonCard-CdqWdUTg.js";import{t as l}from"./SchedulePage-CPTuhRSy.js";import{n as u,r as d,t as f}from"./scheduleDesign.fixtures-Cs1dyDPL.js";import{n as p,t as m}from"./ScheduleDayTransition.stories-yLQSwmcy.js";var h=t(),g=e(),{expect:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=2,x=[`Системы управления базами данных`,`Информационная безопасность`,`Сетевые технологии`,`Проектирование интерфейсов`,`Архитектура программных систем`,`Анализ данных`],S=()=>{};function C(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function w(e){return C(f,(e-b)*7)}function T(e,t,i){let a=n(t).find(e=>e.date.toDateString()===t.toDateString());return Array.from({length:e},(e,n)=>({...d,date:r(t),day_of_week:a?.dayOfWeek??d.day_of_week,discipline:x[n%x.length],lesson_num:String(n+1),start_time:`${String(8+n*2).padStart(2,`0`)}:30`,end_time:`${String(10+n*2).padStart(2,`0`)}:00`,lesson_ids:[`week-${i}-${n}`],variants:[{...d.variants[0],date:r(t),lesson_id:`week-${i}-${n}`}]}))}function E({initialWeekIndex:e,lessonCounts:t,loadingOnSwitch:r=!1,reducedMotion:a=!1,debugControls:d=!1,slowMotion:_=!1,teacherExitDemo:v=!1}){let[y,x]=(0,h.useState)(e),[E,D]=(0,h.useState)(()=>w(e)),[O,k]=(0,h.useState)(0),[A,j]=(0,h.useState)(!1),[M,N]=(0,h.useState)(_),P=(0,h.useRef)(null),F=(0,h.useMemo)(()=>n(E),[E]),I=(0,h.useMemo)(()=>{let n=T(t[y]??0,E,y);return v&&y===e?p([n])[0]:n},[e,t,E,v,y]);m(M),(0,h.useEffect)(()=>()=>{P.current&&window.clearTimeout(P.current)},[]);let L=(0,h.useCallback)(()=>{r&&(P.current&&window.clearTimeout(P.current),j(!0),P.current=window.setTimeout(()=>{j(!1),P.current=null},520))},[r]),R=(0,h.useCallback)(e=>{let n=Math.max(0,Math.min(t.length-1,y+e));n!==y&&(k(Math.sign(n-y)),x(n),D(e=>C(e,(n-y)*7)),L())},[t.length,L,y]),z=(0,h.useCallback)(e=>{k(Math.sign(e.getTime()-E.getTime())),D(e)},[E]),B=(0,h.useCallback)(()=>{k(Math.sign(b-y)),x(b),D(f),L()},[L,y]);return(0,g.jsx)(i,{initialEntries:[`/main/schedule`],children:(0,g.jsxs)(`main`,{className:`schedule-page schedule-day-transition-story`,children:[(0,g.jsx)(c,{days:F,direction:O,selectedDate:E,currentTime:f,weekKey:F[0].date.getTime(),weekVariants:s,onChangeWeek:R,onOpenDatePicker:S,onSelectDate:z,onToday:B}),d?(0,g.jsxs)(`div`,{className:`schedule-day-transition-story__controls`,children:[(0,g.jsx)(o,{size:`sm`,variant:`secondary`,onClick:()=>R(y<t.length-1?1:-1),children:`Replay`}),(0,g.jsxs)(o,{size:`sm`,variant:`ghost`,onClick:()=>N(e=>!e),children:[`Slow motion: `,M?`on`:`off`]})]}):null,(0,g.jsx)(l,{selectedDate:E,todaysLessons:I,isLessonsLoading:A,scheduleChoose:u,studyPlace:`fin`,onChooseLesson:S,onOpenLessonInformation:S,reducedMotion:a})]})})}var D=e=>new Promise(t=>window.setTimeout(t,e));async function O(e,t,n=180){await D(n),await v.click(y(e).getByRole(`button`,{name:t}))}var k={title:`Schedule/Week Switch Motion`,component:E,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile`},docs:{description:{component:`Интерактивная timeline переключения недели: один shared selected indicator, разнесённые opacity-кривые без читаемого double exposure и карточный reveal после 160ms. Visual Debug добавляет Replay и Storybook-only slow motion.`}}},args:{initialWeekIndex:b,lessonCounts:[4,3,3,4,2,6],loadingOnSwitch:!1,reducedMotion:!1,debugControls:!1,slowMotion:!1,teacherExitDemo:!1}};const A={args:{lessonCounts:[3,3,3,3,3]},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},j={play:async({canvasElement:e})=>O(e,`Предыдущая неделя`)},M={play:async({canvasElement:e})=>{await O(e,`Следующая неделя`);let t=n(C(f,7))[4],r=await y(e).findByRole(`button`,{name:RegExp(`пт\\s*${t.date.getDate()}$`,`i`)});await v.click(r),await _(r).toHaveAttribute(`aria-pressed`,`true`)}},N={args:{debugControls:!0,slowMotion:!0}},P={args:{teacherExitDemo:!0,slowMotion:!0},play:async({canvasElement:e})=>{await v.click(y(e).getByRole(`button`,{name:`Показать и скопировать email преподавателя`})),await D(a.Feedback+60),await O(e,`Следующая неделя`,20)}},F={args:{lessonCounts:[3,2,6,3,3],initialWeekIndex:1},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},I={args:{lessonCounts:[3,6,1,3,3],initialWeekIndex:1},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},L={args:{lessonCounts:[3,4,3,0,2]},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},R={args:{lessonCounts:[3,3,0,4,2]},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},z={play:async({canvasElement:e})=>O(e,`Следующая неделя`,60)},B={args:{loadingOnSwitch:!0},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},V={args:{initialWeekIndex:0,lessonCounts:[2,3,4,5,6]},play:async({canvasElement:e})=>{for(let t=0;t<3;t+=1)await O(e,`Следующая неделя`,35)}},H={play:async({canvasElement:e})=>{await O(e,`Следующая неделя`,35),await O(e,`Предыдущая неделя`,35)}},U={args:{reducedMotion:!0},play:async({canvasElement:e})=>O(e,`Следующая неделя`)},W={parameters:{viewport:{defaultViewport:`smallMobile`}}},G={parameters:{viewport:{defaultViewport:`mobile`}}},K={globals:{theme:`dark`}},q={globals:{theme:`light`}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 3, 3, 3, 3]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Предыдущая неделя")
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await clickWeek(canvasElement, "Следующая неделя");
    const friday = buildWeek(shiftDate(date, 7))[4];
    const day = await within(canvasElement).findByRole("button", {
      name: new RegExp(\`пт\\\\s*\${friday.date.getDate()}$\`, "i")
    });
    await userEvent.click(day);
    await expect(day).toHaveAttribute("aria-pressed", "true");
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    debugControls: true,
    slowMotion: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 2, 6, 3, 3],
    initialWeekIndex: 1
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 6, 1, 3, 3],
    initialWeekIndex: 1
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 4, 3, 0, 2]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    lessonCounts: [3, 3, 0, 4, 2]
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя", 60)
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    loadingOnSwitch: true
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await clickWeek(canvasElement, "Следующая неделя", 35);
    await clickWeek(canvasElement, "Предыдущая неделя", 35);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  },
  play: async ({
    canvasElement
  }) => clickWeek(canvasElement, "Следующая неделя")
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...q.parameters?.docs?.source}}};const J=[`SameLessonCount`,`PreviousWeek`,`DifferentSelectedWeekday`,`VisualDebug`,`TeacherEmailFrozenOnWeekExit`,`TwoToSix`,`SixToOne`,`WeekToEmpty`,`EmptyToPopulated`,`CachedWeek`,`LoadingWeek`,`RapidNextNextNext`,`RapidNextPrevious`,`ReducedMotion`,`Mobile320`,`Mobile390`,`Dark`,`Light`];export{z as CachedWeek,K as Dark,M as DifferentSelectedWeekday,R as EmptyToPopulated,q as Light,B as LoadingWeek,W as Mobile320,G as Mobile390,j as PreviousWeek,V as RapidNextNextNext,H as RapidNextPrevious,U as ReducedMotion,A as SameLessonCount,I as SixToOne,P as TeacherEmailFrozenOnWeekExit,F as TwoToSix,N as VisualDebug,L as WeekToEmpty,J as __namedExportsOrder,k as default};