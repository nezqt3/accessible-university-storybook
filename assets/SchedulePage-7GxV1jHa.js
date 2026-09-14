import{t as e,y as t}from"./iframe-B4LKz5fK.js";import{C as n}from"./scheduleStorage-uD1TF8v4.js";import{t as r}from"./LessonCard-C5T32xtt.js";import{n as i}from"./motion-BSxM25dS.js";import{n as a}from"./Typography-qnf5X21q.js";import{t as o}from"./proxy-Dnaxw7vE.js";import{t as s}from"./AnimatePresence-DE1K5ELB.js";import{t as c}from"./use-reduced-motion-D1xf7gmi.js";import{t as l}from"./Skeleton-DRV_N5cr.js";var u=e();function d(){return(0,u.jsx)(`div`,{className:`schedule-skeleton-list`,"aria-label":`Загрузка расписания`,children:Array.from({length:4}).map((e,t)=>(0,u.jsxs)(`div`,{className:`schedule-skeleton-card`,children:[(0,u.jsxs)(`div`,{className:`schedule-skeleton-card__top`,children:[(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--time`}),(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--chip`})]}),(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--title`}),(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--subtitle`}),(0,u.jsxs)(`div`,{className:`schedule-skeleton-card__bottom`,children:[(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--meta`}),(0,u.jsx)(l,{className:`schedule-skeleton schedule-skeleton--meta-short`})]})]},t))})}d.__docgenInfo={description:``,methods:[],displayName:`ScheduleLessonsSkeleton`};var f=t();const p=(0,f.memo)(function({selectedDate:e,todaysLessons:t,isLessonsLoading:l,isSwiping:f=!1,studyPlace:p,onChooseLesson:m,scheduleChoose:h,onOpenLessonInformation:g,onSwipeHandlers:_,children:v}){let y=c(),b=!l&&t.length===0?h===null?`Выберите расписание`:`На сегодня нет пар`:null,x=l?`loading`:b?`empty-${b}`:n(e);return(0,u.jsxs)(`div`,{className:`schedule-lessons schedule-swipe-surface ${f?`schedule-swipe-surface--active`:``}`,"aria-busy":l,..._,children:[(0,u.jsx)(s,{initial:!1,mode:`wait`,children:(0,u.jsx)(o.div,{initial:{opacity:0,y:y?0:6},animate:{opacity:1,y:0},exit:{opacity:0,y:y?0:-6},transition:y?i.Reduced:i.Fast,children:l?(0,u.jsx)(d,{}):b?(0,u.jsx)(a,{className:`schedule-no-lessons`,tone:`soft`,align:`center`,children:b}):t.map(e=>(0,u.jsx)(r,{lesson:e,scheduleType:h?.type,studyPlace:p,setOpenLessonInformationClose:g,setChooseLesson:m},[e.discipline,e.date,e.start_time,e.end_time,e.lesson_num??``].join(`-`)))},x)}),v]})});p.__docgenInfo={description:``,methods:[],displayName:`ScheduleLessonsList`,props:{selectedDate:{required:!0,tsType:{name:`Date`},description:``},direction:{required:!1,tsType:{name:`number`},description:``},todaysLessons:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`GroupedLesson & {
  isNow: boolean;
}`,elements:[{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
  lesson_ids: string[];
  kind_of_work: TypesOfPair[];
  variants: GroupedLessonVariant[];
}`,elements:[{name:`Omit`,elements:[{name:`Lesson`},{name:`union`,raw:`"kind_of_work" | "lesson_id"`,elements:[{name:`literal`,value:`"kind_of_work"`},{name:`literal`,value:`"lesson_id"`}]}],raw:`Omit<Lesson, "kind_of_work" | "lesson_id">`},{name:`signature`,type:`object`,raw:`{
  lesson_ids: string[];
  kind_of_work: TypesOfPair[];
  variants: GroupedLessonVariant[];
}`,signature:{properties:[{key:`lesson_ids`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`kind_of_work`,value:{name:`Array`,elements:[{name:`TypesOfPair`}],raw:`TypesOfPair[]`,required:!0}},{key:`variants`,value:{name:`Array`,elements:[{name:`Pick`,elements:[{name:`Lesson`},{name:`union`,raw:`| "lesson_id"
| "lecturer"
| "lecturer_full_name"
| "lecturerFullName"
| "lecturer_email"
| "group"
| "auditorium"
| "building"
| "url1"
| "url2"
| "is_cancelled"
| "kind_of_work"
| "lesson_num"`,elements:[{name:`literal`,value:`"lesson_id"`},{name:`literal`,value:`"lecturer"`},{name:`literal`,value:`"lecturer_full_name"`},{name:`literal`,value:`"lecturerFullName"`},{name:`literal`,value:`"lecturer_email"`},{name:`literal`,value:`"group"`},{name:`literal`,value:`"auditorium"`},{name:`literal`,value:`"building"`},{name:`literal`,value:`"url1"`},{name:`literal`,value:`"url2"`},{name:`literal`,value:`"is_cancelled"`},{name:`literal`,value:`"kind_of_work"`},{name:`literal`,value:`"lesson_num"`}]}],raw:`Pick<
  Lesson,
  | "lesson_id"
  | "lecturer"
  | "lecturer_full_name"
  | "lecturerFullName"
  | "lecturer_email"
  | "group"
  | "auditorium"
  | "building"
  | "url1"
  | "url2"
  | "is_cancelled"
  | "kind_of_work"
  | "lesson_num"
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},{name:`signature`,type:`object`,raw:`{
  isNow: boolean;
}`,signature:{properties:[{key:`isNow`,value:{name:`boolean`,required:!0}}]}}]}],raw:`GroupedLessonWithStatus[]`},description:``},isLessonsLoading:{required:!0,tsType:{name:`boolean`},description:``},isSwiping:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},studyPlace:{required:!1,tsType:{name:`union`,raw:`"fin" | "kip" | "lyceum" | "mfk" | string`,elements:[{name:`literal`,value:`"fin"`},{name:`literal`,value:`"kip"`},{name:`literal`,value:`"lyceum"`},{name:`literal`,value:`"mfk"`},{name:`string`}]},description:``},onChooseLesson:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
  lesson_ids: string[];
  kind_of_work: TypesOfPair[];
  variants: GroupedLessonVariant[];
}`,elements:[{name:`Omit`,elements:[{name:`Lesson`},{name:`union`,raw:`"kind_of_work" | "lesson_id"`,elements:[{name:`literal`,value:`"kind_of_work"`},{name:`literal`,value:`"lesson_id"`}]}],raw:`Omit<Lesson, "kind_of_work" | "lesson_id">`},{name:`signature`,type:`object`,raw:`{
  lesson_ids: string[];
  kind_of_work: TypesOfPair[];
  variants: GroupedLessonVariant[];
}`,signature:{properties:[{key:`lesson_ids`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}},{key:`kind_of_work`,value:{name:`Array`,elements:[{name:`TypesOfPair`}],raw:`TypesOfPair[]`,required:!0}},{key:`variants`,value:{name:`Array`,elements:[{name:`Pick`,elements:[{name:`Lesson`},{name:`union`,raw:`| "lesson_id"
| "lecturer"
| "lecturer_full_name"
| "lecturerFullName"
| "lecturer_email"
| "group"
| "auditorium"
| "building"
| "url1"
| "url2"
| "is_cancelled"
| "kind_of_work"
| "lesson_num"`,elements:[{name:`literal`,value:`"lesson_id"`},{name:`literal`,value:`"lecturer"`},{name:`literal`,value:`"lecturer_full_name"`},{name:`literal`,value:`"lecturerFullName"`},{name:`literal`,value:`"lecturer_email"`},{name:`literal`,value:`"group"`},{name:`literal`,value:`"auditorium"`},{name:`literal`,value:`"building"`},{name:`literal`,value:`"url1"`},{name:`literal`,value:`"url2"`},{name:`literal`,value:`"is_cancelled"`},{name:`literal`,value:`"kind_of_work"`},{name:`literal`,value:`"lesson_num"`}]}],raw:`Pick<
  Lesson,
  | "lesson_id"
  | "lecturer"
  | "lecturer_full_name"
  | "lecturerFullName"
  | "lecturer_email"
  | "group"
  | "auditorium"
  | "building"
  | "url1"
  | "url2"
  | "is_cancelled"
  | "kind_of_work"
  | "lesson_num"
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},scheduleChoose:{required:!1,tsType:{name:`union`,raw:`SearchItem | null`,elements:[{name:`SearchItem`},{name:`null`}]},description:``},onOpenLessonInformation:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwipeHandlers:{required:!1,tsType:{name:`HTMLAttributes`,elements:[{name:`HTMLDivElement`}],raw:`HTMLAttributes<HTMLDivElement>`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}};function m(){return typeof window<`u`&&`PointerEvent`in window}function h({disabled:e=!1,onSwipeLeft:t,onSwipeRight:n,threshold:r=56,verticalTolerance:i=1.25}){let a=(0,f.useRef)(null),[o,s]=(0,f.useState)(!1),c=(0,f.useCallback)(()=>{a.current=null,s(!1)},[]),l=(0,f.useCallback)(t=>{e||t.pointerType===`mouse`&&t.button!==0||(a.current={pointerId:t.pointerId,x:t.clientX,y:t.clientY})},[e]),u=(0,f.useCallback)((e,t)=>{let n=a.current;if(!n)return;let r=e-n.x,i=t-n.y,o=Math.abs(r);o>10&&o>Math.abs(i)&&s(!0)},[]),d=(0,f.useCallback)(e=>{let t=a.current;!t||t.pointerId!==e.pointerId||u(e.clientX,e.clientY)},[u]),p=(0,f.useCallback)((e,o)=>{let s=a.current;if(!s)return;let l=e-s.x,u=o-s.y,d=Math.abs(l),f=Math.abs(u);if(c(),!(d<r||d<f*i)){if(l<0){t();return}n()}},[t,n,c,r,i]),h=(0,f.useCallback)(e=>{let t=a.current;!t||t.pointerId!==e.pointerId||p(e.clientX,e.clientY)},[p]),g=(0,f.useCallback)(e=>{a.current?.pointerId===e.pointerId&&c()},[c]),_=(0,f.useCallback)(t=>{if(e||m())return;let n=t.touches[0];n&&(a.current={pointerId:null,x:n.clientX,y:n.clientY})},[e]),v=(0,f.useCallback)(e=>{if(m())return;let t=e.touches[0];t&&u(t.clientX,t.clientY)},[u]);return{isSwiping:o,swipeHandlers:{onPointerCancel:g,onPointerDown:l,onPointerMove:d,onPointerUp:h,onTouchEnd:(0,f.useCallback)(e=>{if(m())return;let t=e.changedTouches[0];t&&p(t.clientX,t.clientY)},[p]),onTouchMove:v,onTouchStart:_}}}export{p as n,h as t};