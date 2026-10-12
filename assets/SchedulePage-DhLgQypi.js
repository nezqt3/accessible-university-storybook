import{t as e}from"./useTranslation-CCqsX0U5.js";import{S as t,t as n}from"./iframe-BcEMe4bN.js";import{k as r}from"./scheduleStorage-BnBnNgN2.js";import{a as i,n as a,r as o}from"./motion-C9fxwz80.js";import{t as s}from"./proxy-cZ0og6n2.js";import{t as c}from"./use-reduced-motion-BnmImsGO.js";import{t as l}from"./BlurTransition-BAaQ03Hm.js";import{n as u}from"./Typography-MhBGRVCK.js";import{t as d}from"./AsyncContentTransition-XVH8z2qe.js";import{t as f}from"./Skeleton-DPikpjd_.js";import{n as p}from"./ScheduleWeekSwitcher-KdMylSav.js";import{t as m}from"./LessonCard-CYOlwkOP.js";var h=t(),g=n(),_=[];function v({snapshot:e,isPrevious:t,revealCurrent:n,shouldReduceMotion:r,getItemKey:c,renderItem:l,onPreviousExit:u,onCurrentReveal:d}){let f=r?{opacity:0}:{opacity:0,filter:`blur(${o.Subtle})`,y:i.Card},m=r?{opacity:1}:{opacity:1,filter:`blur(0px)`,y:0},h={opacity:0,filter:`blur(0px)`,y:0};return(0,g.jsx)(`div`,{className:`schedule-day-transition__list schedule-day-transition__list--${t?`previous`:`current`}`,"data-schedule-day-list":t?`previous`:`current`,"aria-hidden":t||void 0,inert:t||void 0,children:e.items.map((i,o)=>(0,g.jsx)(s.div,{className:`schedule-day-transition__card schedule-day-transition__card--${t?`previous`:`current`}`,"data-schedule-day-layer":t?`previous`:`current`,initial:t?!1:n?f:!1,animate:t?h:m,transition:r?a.Reduced:t?p.cardExit:{...p.cardReveal,delay:p.cardRevealDelay+Math.min(o*p.cardStagger,p.cardStaggerCap)},onAnimationComplete:t&&o===0?u:!t&&n&&o===e.items.length-1?d:void 0,children:l(i,o)},c(i,o)))})}function y({contentKey:e,items:t,getItemKey:n,renderItem:r,emptyContent:i,loading:a=!1,loadingContent:o=null,reducedMotion:s,animateOnMount:u=!1}){let d=c(),f=s??!!d,p={contentKey:e,items:a?_:t,layerKey:0},[m,y]=(0,h.useState)({current:p,previous:null,revision:0,revealCurrent:u&&p.items.length>0,loading:a}),b=m;if(m.current.contentKey!==e||a&&!m.loading&&m.current.items.length>0)b={current:{...p,layerKey:m.revision+1},previous:!m.revealCurrent&&m.current.items.length>0?m.current:a||m.loading?m.previous:null,revision:m.revision+1,revealCurrent:p.items.length>0,loading:a},y(b);else if(m.current.items!==p.items||m.loading!==a){let e=m.current.items.length===0&&p.items.length>0;b={...m,current:{...p,layerKey:m.current.layerKey},revision:e?m.revision+1:m.revision,revealCurrent:e,loading:a},y(b)}let x=b.revealCurrent,S=b.revision,C=b.previous,w=()=>{y(e=>e.previous===C?{...e,previous:null}:e)},T=()=>{y(e=>e.revision===S?{...e,revealCurrent:!1}:e)};return(0,g.jsxs)(`div`,{className:`schedule-day-transition`,"data-reduced-motion":f||void 0,children:[(0,g.jsxs)(`div`,{className:`schedule-day-transition__cards${a&&b.previous&&b.current.items.length===0?` schedule-day-transition__cards--pending`:``}`,children:[b.previous?(0,g.jsx)(v,{snapshot:b.previous,isPrevious:!0,revealCurrent:!1,shouldReduceMotion:f,getItemKey:n,renderItem:r,onPreviousExit:w,onCurrentReveal:T},b.previous.layerKey):null,(0,g.jsx)(v,{snapshot:b.current,isPrevious:!1,revealCurrent:x,shouldReduceMotion:f,getItemKey:n,renderItem:r,onPreviousExit:w,onCurrentReveal:T},b.current.layerKey)]}),(0,g.jsx)(l,{as:`div`,variant:`standard`,contentKey:a?`loading-${String(b.current.contentKey)}`:b.current.items.length===0?`empty-${String(b.current.contentKey)}`:`lessons`,reducedMotion:f,className:`schedule-day-transition__empty`,children:b.current.items.length===0?a?b.previous?null:o:i:null})]})}y.__docgenInfo={description:`Replaces cached schedule-day content card by card. A stable outgoing snapshot is capped at one;
an interrupted incoming snapshot is dropped so rapid changes never enter a transition queue.`,methods:[],displayName:`ScheduleDayTransition`,props:{contentKey:{required:!0,tsType:{name:`Key`},description:``},items:{required:!0,tsType:{name:`unknown`},description:``},getItemKey:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item: TItem, index: number) => Key`,signature:{arguments:[{type:{name:`TItem`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`Key`}}},description:``},renderItem:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item: TItem, index: number) => ReactNode`,signature:{arguments:[{type:{name:`TItem`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`ReactNode`}}},description:``},emptyContent:{required:!0,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loadingContent:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`null`,computed:!1}},reducedMotion:{required:!1,tsType:{name:`boolean`},description:``},animateOnMount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};function b(){let{t}=e(`schedule`);return(0,g.jsx)(`div`,{className:`schedule-skeleton-list`,"aria-label":t(`lesson.loadingAria`),children:Array.from({length:4}).map((e,t)=>(0,g.jsxs)(`div`,{className:`schedule-skeleton-card`,children:[(0,g.jsxs)(`div`,{className:`schedule-skeleton-card__top`,children:[(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--time`}),(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--chip`})]}),(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--title`}),(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--subtitle`}),(0,g.jsxs)(`div`,{className:`schedule-skeleton-card__bottom`,children:[(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--meta`}),(0,g.jsx)(f,{className:`schedule-skeleton schedule-skeleton--meta-short`})]})]},t))})}b.__docgenInfo={description:``,methods:[],displayName:`ScheduleLessonsSkeleton`};function x(e){return e.lesson_ids.length>0?e.lesson_ids.join(`|`):[e.discipline,e.date,e.start_time,e.end_time,e.lesson_num??``].join(`-`)}const S=(0,h.memo)(function({selectedDate:t,todaysLessons:n,isLessonsLoading:i,isSwiping:a=!1,studyPlace:o,onChooseLesson:s,scheduleChoose:c,onOpenLessonInformation:l,onSwipeHandlers:f,children:p,reducedMotion:_}){let{t:v}=e(`schedule`),S=r(t),[C,w]=(0,h.useState)(!i);!C&&!i&&w(!0);let T=!i&&n.length===0?v(c===null?`lesson.noSchedule`:`lesson.noLessonsToday`):null;return(0,g.jsxs)(`div`,{className:`schedule-lessons schedule-swipe-surface ${a?`schedule-swipe-surface--active`:``}`,"data-schedule-lesson-list":!0,"aria-busy":i,...f,children:[(0,g.jsx)(d,{loading:i&&!C,skeleton:(0,g.jsx)(b,{}),contentKey:`lessons`,reducedMotion:_,children:(0,g.jsx)(y,{contentKey:S,items:n,loading:i,loadingContent:(0,g.jsx)(b,{}),getItemKey:x,emptyContent:T?(0,g.jsx)(u,{className:`schedule-no-lessons`,tone:`soft`,align:`center`,children:T}):null,reducedMotion:_,renderItem:e=>(0,g.jsx)(m,{lesson:e,scheduleType:c?.type,studyPlace:o,scheduleGroupName:c?.type===`group`?c.name:void 0,setOpenLessonInformationClose:l,setChooseLesson:s})})}),p]})});S.__docgenInfo={description:``,methods:[],displayName:`ScheduleLessonsList`,props:{selectedDate:{required:!0,tsType:{name:`Date`},description:``},direction:{required:!1,tsType:{name:`number`},description:``},todaysLessons:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`GroupedLesson & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},scheduleChoose:{required:!1,tsType:{name:`union`,raw:`SearchItem | null`,elements:[{name:`SearchItem`},{name:`null`}]},description:``},onOpenLessonInformation:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSwipeHandlers:{required:!1,tsType:{name:`HTMLAttributes`,elements:[{name:`HTMLDivElement`}],raw:`HTMLAttributes<HTMLDivElement>`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},reducedMotion:{required:!1,tsType:{name:`boolean`},description:``}}};export{S as t};