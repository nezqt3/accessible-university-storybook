import{t as e}from"./useTranslation-9RT7qr1b.js";import{S as t,g as n,t as r}from"./iframe-DG2KGKvW.js";import{r as i}from"./Schedule-BJApNQWq.js";import{t as a}from"./format-DRsuurA_.js";import{t as o}from"./map-pin-CPa8RuRl.js";import{t as s}from"./users-Btn7XYP4.js";import{n as c,r as l,t as u}from"./lessonTitle-My3QRfQf.js";import{s as d,t as f}from"./motion-C4hY7hfp.js";import{t as p}from"./Pressable-vYycdSgE.js";import{t as m}from"./proxy-BICjNce_.js";import{t as h}from"./use-reduced-motion-CWStJdJS.js";import{n as g}from"./Typography-C7SnBuOn.js";import{n as _}from"./lessonTime-B6eu231o.js";import{t as v}from"./normalize-DuEPOjvR.js";import{r as y}from"./mapNavigation-CkiNtXgO.js";import{t as b}from"./AuditoriumMapLink-BZABvdHI.js";import{t as x}from"./TeacherContact-DlSiA53d.js";var S=t(),C=r();function w({children:e,showSeparator:t}){let n=(0,S.useRef)(null),[r,i]=(0,S.useState)(!1);return(0,S.useLayoutEffect)(()=>{let e=n.current,r=e?.parentElement;if(!e||!r)return;if(!t){i(!1);return}let a=!0,o=()=>{let t=e.dataset.stacked;delete e.dataset.stacked;let n=e.previousElementSibling,r=e.getBoundingClientRect(),a=n?.getBoundingClientRect(),o=!!(a&&Math.abs(r.top+r.height/2-(a.top+a.height/2))>1);t&&(e.dataset.stacked=t),i(e=>e===o?e:o)};o();let s=typeof ResizeObserver>`u`?null:new ResizeObserver(o);return s?.observe(r),s?.observe(e),document.fonts?.ready.then(()=>{a&&o()}),()=>{a=!1,s?.disconnect()}},[t]),(0,C.jsxs)(`div`,{ref:n,className:`schedule-lesson-card__teacher-segment ${t?`schedule-lesson-card__teacher-segment--separated`:``}`,"data-stacked":r?`true`:void 0,children:[t?(0,C.jsx)(`span`,{className:`schedule-lesson-card__teacher-separator`,"aria-hidden":`true`,children:`•`}):null,e]})}w.__docgenInfo={description:``,methods:[],displayName:`LessonCardTeacherSegment`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},showSeparator:{required:!0,tsType:{name:`boolean`},description:``}}};function T(e){return(Array.isArray(e)?e:[e]).filter(e=>typeof e==`string`&&e.trim().length>0)}function E(e,t){let n=(0,S.useMemo)(()=>Array.from(new Set([e.lecturer,...e.variants.map(e=>e.lecturer)].map(a).filter(Boolean))),[e]),r=(0,S.useMemo)(()=>Array.from(new Set([e.group,...e.variants.map(e=>e.group)].map(e=>e?.trim()).filter(Boolean))),[e]),o=(0,S.useMemo)(()=>Array.from(new Set([e,...e.variants].map(e=>[e.auditorium,e.building].filter(Boolean).join(` • `)).filter(Boolean))),[e]),s=t===i.PERSON,c=t===i.AUDITORIUM,l=c?r:o,u=s?r:n;return{isTeacherSchedule:s,isAuditoriumSchedule:c,primaryValue:l.length===1?l[0]:``,secondaryValue:s?r.join(`, `):u.length===1?u[0]:``}}const D=(0,S.memo)(function({lesson:t,notice:r,scheduleType:i,studyPlace:D,scheduleGroupName:O,setChooseLesson:k,setOpenLessonInformationClose:A}){let{t:j,i18n:M}=e(`schedule`),N=n(M.resolvedLanguage??M.language),P=u({...t,scheduleGroupName:O,studyPlace:D}),F=h(),I=(0,S.useRef)(null),L=(0,S.useRef)(null),R=(0,S.useRef)(!1),z=(0,S.useRef)(null),B=(0,S.useMemo)(()=>T(t.kind_of_work),[t.kind_of_work]),V=t.variants.length>1,H=(0,S.useMemo)(()=>c(t),[t]),{isTeacherSchedule:U,isAuditoriumSchedule:W,primaryValue:G,secondaryValue:K}=E(t,i);(0,S.useEffect)(()=>()=>window.clearTimeout(z.current??void 0),[]);let q=(0,S.useCallback)(e=>{I.current={x:e.clientX,y:e.clientY},L.current=e.pointerType,R.current=!1},[]),J=(0,S.useCallback)(e=>{let t=I.current;if(!t)return;let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y);(n>8||r>8)&&(R.current=!0)},[]),Y=(0,S.useCallback)(e=>{if(R.current){e.preventDefault(),R.current=!1,I.current=null,L.current=null;return}z.current&&window.clearTimeout(z.current);let n=()=>{A(!0),k(t),I.current=null,L.current=null,z.current=null};if(L.current!==`touch`){n();return}z.current=window.setTimeout(n,45)},[t,k,A]);return(0,C.jsxs)(m.div,{initial:!1,whileTap:F?void 0:{scale:f.pressScale},transition:d.Responsive,onClick:Y,onPointerDown:q,onPointerMove:J,onPointerCancel:()=>{I.current=null,L.current=null,R.current=!1},className:`schedule-lesson-card
      ${t.isNow?`current`:``}
      ${t.is_cancelled?`cancelled`:``}`,children:[(0,C.jsx)(p,{className:`schedule-lesson-card__open`,"aria-label":`${P}, ${_(t,D)}`}),(0,C.jsxs)(`div`,{className:`schedule-lesson-card__header`,children:[(0,C.jsxs)(`div`,{className:`schedule-lesson-card__time-block`,children:[t.lesson_num?(0,C.jsx)(`span`,{className:`schedule-chip schedule-chip--number`,children:t.lesson_num}):null,(0,C.jsx)(`span`,{className:`schedule-lesson-card__time`,children:_(t,D)})]}),(0,C.jsxs)(`div`,{className:`schedule-lesson-card__tags`,children:[B.map(e=>(0,C.jsx)(`span`,{className:`schedule-chip schedule-chip--kind ${e.toLowerCase()}`,children:v(e,N)},e)),t.is_cancelled&&(0,C.jsx)(`span`,{className:`schedule-chip schedule-chip--cancelled`,children:j(`lesson.cancelled`)})]})]}),(0,C.jsxs)(`div`,{className:`schedule-lesson-card__body`,children:[(0,C.jsx)(`h3`,{className:`schedule-lesson-card__title`,children:P}),r?(0,C.jsx)(g,{size:`caption`,tone:`soft`,children:r}):null,G||K?(0,C.jsxs)(`div`,{className:`schedule-lesson-card__location`,children:[(0,C.jsx)(`span`,{className:`schedule-lesson-card__location-icon`,children:W||!G?(0,C.jsx)(s,{size:15}):(0,C.jsx)(o,{size:15})}),(0,C.jsxs)(C.Fragment,{children:[G?W?(0,C.jsx)(`span`,{className:`schedule-lesson-card__value`,children:G}):y(t.building)?(0,C.jsxs)(b,{room:t.auditorium,className:`schedule-auditorium-map-link`,children:[(0,C.jsx)(`span`,{className:`auditorium`,children:t.auditorium}),(0,C.jsx)(`span`,{className:`schedule-auditorium-map-link__hint`,children:j(`common.onMap`)})]}):(0,C.jsx)(`span`,{className:`auditorium`,children:t.auditorium}):null,K?(0,C.jsx)(w,{showSeparator:!!G,children:(0,C.jsx)(`div`,{className:`schedule-lesson-card__row ${U?``:`schedule-lesson-card__teacher-row`}`,children:U?(0,C.jsx)(`span`,{className:`schedule-lesson-card__value`,children:K}):(0,C.jsx)(x,{name:K,email:t.lecturer_email})})}):null]})]}):null,V&&(0,C.jsx)(`div`,{className:`schedule-lesson-card__subgroups-list`,children:t.variants.map((e,t)=>(0,C.jsxs)(`div`,{className:`schedule-card-row ${e.is_cancelled?`cancelled`:``}`,children:[e.is_cancelled&&(0,C.jsx)(`div`,{className:`schedule-sublesson-card__header`,children:(0,C.jsx)(`span`,{className:`schedule-sublesson-card__cancelled`,children:j(`lesson.cancelled`)})}),(0,C.jsxs)(`div`,{className:`schedule-sublesson-card__location`,children:[(0,C.jsx)(`span`,{className:`schedule-sublesson-card__icon`,children:W?(0,C.jsx)(s,{size:14}):(0,C.jsx)(o,{size:14})}),W?(0,C.jsx)(`span`,{className:`schedule-sublesson-card__value`,children:e.group}):y(e.building)?(0,C.jsxs)(b,{room:e.auditorium,className:`schedule-auditorium-map-link`,children:[(0,C.jsx)(`span`,{className:`auditorium`,children:e.auditorium}),(0,C.jsx)(`span`,{className:`schedule-auditorium-map-link__hint`,children:j(`common.onMap`)})]}):(0,C.jsx)(`span`,{className:`auditorium`,children:e.auditorium})]}),(0,C.jsx)(w,{showSeparator:!!(W?e.group:e.auditorium),children:(0,C.jsx)(`div`,{className:`schedule-sublesson-card__row ${U?``:`schedule-lesson-card__teacher-row`}`,children:U?(0,C.jsx)(`span`,{className:`schedule-sublesson-card__value`,children:e.group}):(0,C.jsx)(x,{name:a(e.lecturer),email:e.lecturer_email})})})]},`${e.lesson_id}-${t}`))}),(0,C.jsx)(l,{links:H,compact:!0})]})]})});D.displayName=`LessonCard`,D.__docgenInfo={description:``,methods:[],displayName:`LessonCard`,props:{notice:{required:!1,tsType:{name:`string`},description:``},lesson:{required:!0,tsType:{name:`intersection`,raw:`GroupedLesson & { isNow: boolean }`,elements:[{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},{name:`signature`,type:`object`,raw:`{ isNow: boolean }`,signature:{properties:[{key:`isNow`,value:{name:`boolean`,required:!0}}]}}]},description:``},scheduleType:{required:!1,tsType:{name:`RuzType`},description:``},studyPlace:{required:!1,tsType:{name:`union`,raw:`"fin" | "kip" | "lyceum" | "mfk" | string`,elements:[{name:`literal`,value:`"fin"`},{name:`literal`,value:`"kip"`},{name:`literal`,value:`"lyceum"`},{name:`literal`,value:`"mfk"`},{name:`string`}]},description:``},scheduleGroupName:{required:!1,tsType:{name:`string`},description:``},setChooseLesson:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},setOpenLessonInformationClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:``}}};export{D as t};