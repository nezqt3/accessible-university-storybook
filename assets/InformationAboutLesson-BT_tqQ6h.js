import{t as e}from"./useTranslation-Bqh59kuu.js";import{S as t,g as n,n as r,t as i}from"./iframe-D0TFUEDL.js";import{L as a,O as o}from"./scheduleStorage-DNO7JVEk.js";import{r as s}from"./Schedule-BJApNQWq.js";import{t as c}from"./format-DRsuurA_.js";import{t as l}from"./check-DNh_A7sl.js";import{t as u}from"./chevron-right-BRcPHbCp.js";import{n as d,r as f,t as p}from"./lessonTitle-BisCQ1lL.js";import{n as m,r as h}from"./motion-C4hY7hfp.js";import{t as g}from"./Badge-BxiKIddT.js";import{t as _}from"./proxy-B27OI5yE.js";import{t as v}from"./ModalOverlay-DGegsSC0.js";import{t as y}from"./AnimatePresence-BUpu7bNm.js";import{t as b}from"./use-reduced-motion-DVIztM76.js";import{t as x}from"./BlurTransition-CmSxI2SF.js";import{n as S,t as C}from"./Typography-B0G6FS0A.js";import{t as w}from"./ModalHeader-B1C_todG.js";import{n as T}from"./lessonTime-B6eu231o.js";import{t as E}from"./lessonLecturers-B_FMPTZA.js";import{t as D}from"./normalize-_3mmZH6d.js";import{r as O}from"./mapNavigation-CkiNtXgO.js";import{t as k}from"./AuditoriumMapLink-BDGgNF1V.js";import{t as A}from"./TeacherContact-DcW00Koz.js";var j=i();function M({name:t,email:n,canOpenSchedule:r,isOpeningSchedule:i,onOpenSchedule:a}){let{t:o}=e(`schedule`);return(0,j.jsxs)(`div`,{className:`lesson-sheet__teacher-row${r?` lesson-sheet__teacher-row--linked`:``}`,children:[(0,j.jsx)(`span`,{className:`lesson-sheet__teacher-identity`,children:(0,j.jsx)(A,{name:t,email:n,wrapText:!0,className:`lesson-sheet__teacher-contact`})}),r?(0,j.jsx)(`button`,{type:`button`,className:`lesson-sheet__teacher-navigation`,"aria-label":o(`lesson.openTeacherAria`,{name:t}),"aria-busy":i||void 0,disabled:i,onClick:a,children:(0,j.jsx)(u,{"aria-hidden":`true`})}):null]})}M.__docgenInfo={description:``,methods:[],displayName:`LessonTeacherRow`,props:{name:{required:!0,tsType:{name:`string`},description:``},email:{required:!0,tsType:{name:`string`},description:``},canOpenSchedule:{required:!0,tsType:{name:`boolean`},description:``},isOpeningSchedule:{required:!0,tsType:{name:`boolean`},description:``},onOpenSchedule:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};function N({variant:t,animateOnMount:n,commonGroup:r,commonLocation:i,hasCommonLinks:a,isCommonCancelled:o,canOpenTeacherSchedule:s,isOpeningSchedule:c,onOpenTeacherSchedule:l}){let{t:u}=e(`schedule`);return(0,j.jsx)(`div`,{className:`lesson-sheet__variant-transition`,children:(0,j.jsx)(y,{initial:!1,mode:`wait`,children:t?(0,j.jsx)(_.div,{className:`lesson-sheet__variant-transition-content`,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:m.Fast,children:(0,j.jsx)(F,{variant:t,animateOnMount:n,commonGroup:r,commonLocation:i,hasCommonLinks:a,isCommonCancelled:o,canOpenTeacherSchedule:s,isOpeningSchedule:c,onOpenTeacherSchedule:l})},`selected-variant`):(0,j.jsx)(_.div,{initial:!1,animate:{opacity:1,filter:`blur(0px)`},exit:{opacity:0,filter:`blur(${h.Subtle})`},transition:m.Fast,children:(0,j.jsx)(S,{className:`lesson-sheet__selection-hint`,size:`sm`,tone:`muted`,children:u(`lesson.variantSelectionPrompt`)})},`selection-hint`)})})}function P({location:t,group:n,links:r}){let{t:i}=e(`schedule`);return!t&&!n&&r.length===0?null:(0,j.jsxs)(`div`,{className:`lesson-sheet__common-details`,children:[t?(0,j.jsx)(L,{location:t}):null,n?(0,j.jsx)(R,{label:i(`lesson.group`),value:n}):null,r.length>0?(0,j.jsx)(f,{links:r}):null]})}function F({variant:t,animateOnMount:n,commonGroup:r,commonLocation:i,hasCommonLinks:a,isCommonCancelled:o,canOpenTeacherSchedule:s,isOpeningSchedule:c,onOpenTeacherSchedule:l}){let{t:u}=e(`schedule`),d=!!(t.group&&!r),p=t.location?`${t.location.auditorium}\u0000${t.location.building}`:null,m=t.links.length?t.links.map(e=>e.href).join(`\0`):null;return(0,j.jsxs)(`div`,{className:`lesson-sheet__selected-details`,children:[(0,j.jsx)(I,{slot:`cancellation`,contentKey:t.isCancelled&&!o?`cancelled`:null,animateOnMount:n,children:(0,j.jsx)(g,{tone:`error`,children:u(`lesson.variantCancelled`)})}),(0,j.jsx)(I,{slot:`teacher`,contentKey:`teacher:${t.lecturerFullName}:${t.lecturerEmail}`,animateOnMount:n,children:(0,j.jsxs)(`section`,{className:`lesson-sheet__detail-section`,children:[(0,j.jsx)(S,{as:`span`,size:`caption`,tone:`muted`,children:u(`lesson.teacher`)}),(0,j.jsx)(M,{name:t.lecturerFullName,email:t.lecturerEmail,canOpenSchedule:s,isOpeningSchedule:c,onOpenSchedule:l})]})}),(0,j.jsx)(I,{slot:`location`,contentKey:i?null:p??`missing-location`,animateOnMount:n,children:t.location?(0,j.jsx)(L,{location:t.location}):(0,j.jsx)(R,{label:u(`lesson.rooms`),value:u(`common.notSpecified`)})}),(0,j.jsx)(I,{slot:`group`,contentKey:d?`group:${t.group}`:null,animateOnMount:n,children:(0,j.jsx)(R,{label:u(`lesson.group`),value:t.group})}),(0,j.jsx)(I,{slot:`links`,contentKey:a?null:m,animateOnMount:n,children:(0,j.jsx)(f,{links:t.links})})]})}function I({slot:e,contentKey:t,animateOnMount:n,children:r}){let i=!!b(),a=i?{opacity:0,filter:`blur(0px)`}:{opacity:.18,filter:`blur(${h.Content})`},o=i?m.Reduced:m.Fast;return(0,j.jsx)(y,{initial:n,children:t===null?null:(0,j.jsx)(_.div,{className:`lesson-sheet__animated-detail`,"data-lesson-detail-slot":e,initial:a,animate:{opacity:1,filter:`blur(0px)`,transition:o},exit:{...a,transition:o},children:(0,j.jsx)(x,{as:`div`,contentKey:t,animateOnMount:!1,children:r})},`visible`)})}function L({location:t}){let{t:n}=e(`schedule`),r=O(t.auditorium,t.building);return(0,j.jsxs)(`section`,{className:`lesson-sheet__detail-section`,children:[(0,j.jsx)(S,{as:`span`,size:`caption`,tone:`muted`,children:n(`lesson.location`)}),t.auditorium&&r?(0,j.jsx)(k,{room:t.auditorium,className:`lesson-sheet__room`,children:t.auditorium}):t.auditorium?(0,j.jsx)(S,{className:`lesson-sheet__room`,children:t.auditorium}):(0,j.jsx)(S,{className:`lesson-sheet__room`,children:n(`common.notSpecified`)}),t.building?(0,j.jsx)(S,{size:`sm`,tone:`soft`,className:`lesson-sheet__building`,children:t.building}):null]})}function R({label:e,value:t}){return(0,j.jsxs)(`section`,{className:`lesson-sheet__detail-section`,children:[(0,j.jsx)(S,{as:`span`,size:`caption`,tone:`muted`,children:e}),(0,j.jsx)(S,{className:`lesson-sheet__detail-value`,children:t})]})}N.__docgenInfo={description:``,methods:[],displayName:`LessonVariantDetailsTransition`,props:{variant:{required:!0,tsType:{name:`union`,raw:`LessonDetailsVariant | null`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  lecturer: string;
  lecturerFullName: string;
  lecturerEmail: string;
  group: string;
  location: LessonDetailsLocation | null;
  isCancelled: boolean;
  kind: string;
  lessonId: string;
  links: LessonWebinarLink[];
  selectorMeta: string;
  source: GroupedLessonVariant;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`lecturer`,value:{name:`string`,required:!0}},{key:`lecturerFullName`,value:{name:`string`,required:!0}},{key:`lecturerEmail`,value:{name:`string`,required:!0}},{key:`group`,value:{name:`string`,required:!0}},{key:`location`,value:{name:`union`,raw:`LessonDetailsLocation | null`,elements:[{name:`signature`,type:`object`,raw:`{
  auditorium: string;
  building: string;
}`,signature:{properties:[{key:`auditorium`,value:{name:`string`,required:!0}},{key:`building`,value:{name:`string`,required:!0}}]}},{name:`null`}],required:!0}},{key:`isCancelled`,value:{name:`boolean`,required:!0}},{key:`kind`,value:{name:`string`,required:!0}},{key:`lessonId`,value:{name:`string`,required:!0}},{key:`links`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  href: string;
  label: string;
}`,signature:{properties:[{key:`href`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`LessonWebinarLink[]`,required:!0}},{key:`selectorMeta`,value:{name:`string`,required:!0}},{key:`source`,value:{name:`Pick`,elements:[{name:`Lesson`},{name:`union`,raw:`| "lesson_id"
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
>`,required:!0}}]}},{name:`null`}]},description:``},animateOnMount:{required:!0,tsType:{name:`boolean`},description:``},commonGroup:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},commonLocation:{required:!0,tsType:{name:`union`,raw:`LessonDetailsLocation | null`,elements:[{name:`signature`,type:`object`,raw:`{
  auditorium: string;
  building: string;
}`,signature:{properties:[{key:`auditorium`,value:{name:`string`,required:!0}},{key:`building`,value:{name:`string`,required:!0}}]}},{name:`null`}]},description:``},hasCommonLinks:{required:!0,tsType:{name:`boolean`},description:``},isCommonCancelled:{required:!0,tsType:{name:`boolean`},description:``},canOpenTeacherSchedule:{required:!0,tsType:{name:`boolean`},description:``},isOpeningSchedule:{required:!0,tsType:{name:`boolean`},description:``},onOpenTeacherSchedule:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},P.__docgenInfo={description:``,methods:[],displayName:`CommonLessonDetails`,props:{location:{required:!0,tsType:{name:`union`,raw:`LessonDetailsLocation | null`,elements:[{name:`signature`,type:`object`,raw:`{
  auditorium: string;
  building: string;
}`,signature:{properties:[{key:`auditorium`,value:{name:`string`,required:!0}},{key:`building`,value:{name:`string`,required:!0}}]}},{name:`null`}]},description:``},group:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},links:{required:!0,tsType:{name:`Array`,raw:`LessonDetailsViewModel["commonLinks"]`},description:``}}};function z({variants:t,activeVariantId:n,onSelect:r}){let{t:i}=e(`schedule`),a=!!b();return(0,j.jsxs)(`section`,{className:`lesson-variant-selector`,"aria-labelledby":`lesson-variant-selector-title`,children:[(0,j.jsx)(C,{id:`lesson-variant-selector-title`,level:3,size:`sm`,children:i(`lesson.variantTitle`)}),(0,j.jsx)(`div`,{className:`lesson-variant-selector__list`,children:t.map(e=>{let t=e.id===n;return(0,j.jsxs)(`button`,{type:`button`,className:`lesson-variant-selector__row ${t?`lesson-variant-selector__row--active`:``}`,"aria-pressed":t,onClick:()=>r(e),children:[(0,j.jsx)(`span`,{className:`lesson-variant-selector__check`,"aria-hidden":`true`,children:(0,j.jsx)(y,{initial:!1,children:t?(0,j.jsx)(_.span,{className:`lesson-variant-selector__check-icon`,initial:a?{opacity:0}:{opacity:0,filter:`blur(${h.Subtle})`},animate:{opacity:1,filter:`blur(0px)`},exit:a?{opacity:0}:{opacity:0,filter:`blur(${h.Subtle})`},transition:a?m.Reduced:m.Standard,children:(0,j.jsx)(l,{})},`selected`):null})}),(0,j.jsx)(`span`,{className:`lesson-variant-selector__lecturer`,children:e.lecturer}),e.selectorMeta?(0,j.jsx)(`span`,{className:`lesson-variant-selector__meta`,title:e.selectorMeta,children:e.selectorMeta}):null,e.isCancelled?(0,j.jsx)(`span`,{className:`lesson-variant-selector__cancelled`,children:i(`lesson.cancelled`)}):null]},e.id)})})]})}z.__docgenInfo={description:``,methods:[],displayName:`LessonVariantSelector`,props:{variants:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  lecturer: string;
  lecturerFullName: string;
  lecturerEmail: string;
  group: string;
  location: LessonDetailsLocation | null;
  isCancelled: boolean;
  kind: string;
  lessonId: string;
  links: LessonWebinarLink[];
  selectorMeta: string;
  source: GroupedLessonVariant;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`lecturer`,value:{name:`string`,required:!0}},{key:`lecturerFullName`,value:{name:`string`,required:!0}},{key:`lecturerEmail`,value:{name:`string`,required:!0}},{key:`group`,value:{name:`string`,required:!0}},{key:`location`,value:{name:`union`,raw:`LessonDetailsLocation | null`,elements:[{name:`signature`,type:`object`,raw:`{
  auditorium: string;
  building: string;
}`,signature:{properties:[{key:`auditorium`,value:{name:`string`,required:!0}},{key:`building`,value:{name:`string`,required:!0}}]}},{name:`null`}],required:!0}},{key:`isCancelled`,value:{name:`boolean`,required:!0}},{key:`kind`,value:{name:`string`,required:!0}},{key:`lessonId`,value:{name:`string`,required:!0}},{key:`links`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  href: string;
  label: string;
}`,signature:{properties:[{key:`href`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`LessonWebinarLink[]`,required:!0}},{key:`selectorMeta`,value:{name:`string`,required:!0}},{key:`source`,value:{name:`Pick`,elements:[{name:`Lesson`},{name:`union`,raw:`| "lesson_id"
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
>`,required:!0}}]}}],raw:`LessonDetailsVariant[]`},description:``},activeVariantId:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(variant: LessonDetailsVariant) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  lecturer: string;
  lecturerFullName: string;
  lecturerEmail: string;
  group: string;
  location: LessonDetailsLocation | null;
  isCancelled: boolean;
  kind: string;
  lessonId: string;
  links: LessonWebinarLink[];
  selectorMeta: string;
  source: GroupedLessonVariant;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`lecturer`,value:{name:`string`,required:!0}},{key:`lecturerFullName`,value:{name:`string`,required:!0}},{key:`lecturerEmail`,value:{name:`string`,required:!0}},{key:`group`,value:{name:`string`,required:!0}},{key:`location`,value:{name:`union`,raw:`LessonDetailsLocation | null`,elements:[{name:`signature`,type:`object`,raw:`{
  auditorium: string;
  building: string;
}`,signature:{properties:[{key:`auditorium`,value:{name:`string`,required:!0}},{key:`building`,value:{name:`string`,required:!0}}]}},{name:`null`}],required:!0}},{key:`isCancelled`,value:{name:`boolean`,required:!0}},{key:`kind`,value:{name:`string`,required:!0}},{key:`lessonId`,value:{name:`string`,required:!0}},{key:`links`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  href: string;
  label: string;
}`,signature:{properties:[{key:`href`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`LessonWebinarLink[]`,required:!0}},{key:`selectorMeta`,value:{name:`string`,required:!0}},{key:`source`,value:{name:`Pick`,elements:[{name:`Lesson`},{name:`union`,raw:`| "lesson_id"
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
>`,required:!0}}]}},name:`variant`}],return:{name:`void`}}},description:``}}};function B(e){return String(e??``).trim()}function V(e){return{lesson_id:e.lesson_ids[0]??``,lecturer:e.lecturer,lecturer_full_name:e.lecturer_full_name,lecturerFullName:e.lecturerFullName,lecturer_email:e.lecturer_email,group:e.group,auditorium:e.auditorium,building:e.building,url1:e.url1,url2:e.url2,is_cancelled:e.is_cancelled,kind_of_work:e.kind_of_work[0],lesson_num:e.lesson_num}}function H(e){return[e.lecturer,e.lecturer_email,e.group,e.auditorium,e.building,e.kind_of_work,e.lesson_num,e.url1,e.url2,e.is_cancelled?`cancelled`:`active`].map(e=>B(String(e??``)).toLowerCase()).join(`|`)}function U(e){return B(e.lesson_id)||`legacy:${H(e)}`}function W(e){let t=B(e.auditorium),n=B(e.building);return t||n?{auditorium:t,building:n}:null}function G(e){return e.length===0||!e[0]||e.some(t=>t!==e[0])?null:e[0]}function K(e){return G(e.map(e=>e.location?`${e.location.auditorium}\u0000${e.location.building}`:``))?e[0].location:null}function q(e){return G(e.map(e=>e.links.map(e=>e.href).join(`\0`)))?e[0].links:[]}function J(e){let t=new Set(e.map(e=>e.location?.auditorium).filter(Boolean)),n=new Set(e.map(e=>e.group).filter(Boolean)),r=new Set(e.map(e=>e.kind).filter(Boolean));return e.map(e=>{let i=t.size>1&&e.location?.auditorium?e.location.auditorium:n.size>1&&e.group?e.group:r.size>1&&e.kind?e.kind:``;return{...e,selectorMeta:i}})}function Y(e,t=`ru`){let n=J((e.variants.length>0?e.variants:[V(e)]).map(e=>{let n=c(e.lecturer)||r.t(`schedule:lesson.teacherNotSpecified`,{lng:t});return{id:U(e),lecturer:n,lecturerFullName:E(e)||n,lecturerEmail:B(e.lecturer_email).replace(/^<(.+)>$/u,`$1`),group:B(e.group),location:W(e),isCancelled:!!e.is_cancelled,kind:D(e.kind_of_work,t),lessonId:B(e.lesson_id),links:d(e),selectorMeta:``,source:e}}));return{commonGroup:G(n.map(e=>e.group)),commonLinks:q(n),commonLocation:K(n),isCancelled:n.every(e=>e.isCancelled),variants:n}}function X(e,t){return e.length===1?e[0].id:t&&e.some(e=>e.id===t)?t:null}var Z=t();function Q({isOpen:t,onClose:r,lesson:i,scheduleType:c,studyPlace:l,scheduleGroupName:u,selectedVariantId:d,onSelectVariant:f,onOpenRelatedSchedule:m}){let{t:h,i18n:_}=e(`schedule`),b=n(_.resolvedLanguage??_.language),x=(0,Z.useMemo)(()=>Y(i,b),[i,b]),S=p({discipline:i.discipline,group:i.group,scheduleGroupName:u,studyPlace:l}),C=(0,Z.useMemo)(()=>X(x.variants,d),[x.variants,d]),[E,O]=(0,Z.useState)(C),[k,A]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{O(C),A(!1)},[C,i]);let M=x.variants.find(e=>e.id===E)??null,F=Array.from(new Set(i.kind_of_work.map(e=>D(e,b)).filter(Boolean))),I=a(i.date),L=[F.join(`, `),T(i,l)].filter(Boolean).join(` · `),R=I?`${o(I)}, ${i.day_of_week}`:i.day_of_week,B=e=>{e.id!==E&&(O(e.id),e.lessonId&&f?.(i,e.lessonId))},V=async()=>{if(!(!M||!m||k)){A(!0);try{await m(i,M.source)&&r()}finally{A(!1)}}},H=[M?.source.lecturer,M?.source.lecturer_full_name,M?.source.lecturerFullName].some(e=>!!e?.trim()),U=c!==s.PERSON&&!!m&&H;return(0,j.jsx)(y,{children:t&&(0,j.jsx)(v,{onClose:r,className:`lesson-info-wrapper lesson-sheet`,size:`content`,ariaLabelledBy:`lesson-sheet-title`,ariaDescribedBy:`lesson-sheet-summary`,children:(0,j.jsxs)(`div`,{className:`lesson-sheet__content`,children:[(0,j.jsx)(w,{titleId:`lesson-sheet-title`,descriptionId:`lesson-sheet-summary`,title:S,description:(0,j.jsxs)(`span`,{className:`lesson-sheet__summary`,children:[(0,j.jsx)(`span`,{children:L}),(0,j.jsx)(`span`,{children:R})]}),onClose:r}),x.isCancelled?(0,j.jsx)(g,{tone:`error`,className:`lesson-sheet__cancelled-badge`,children:h(`lesson.cancelled`)}):null,(0,j.jsx)(P,{location:x.commonLocation,group:c===`group`?null:x.commonGroup,links:x.commonLinks}),x.variants.length>1?(0,j.jsx)(z,{variants:x.variants,activeVariantId:E,onSelect:B}):null,(0,j.jsx)(N,{variant:M,animateOnMount:x.variants.length>1,commonGroup:x.commonGroup,commonLocation:x.commonLocation,hasCommonLinks:x.commonLinks.length>0,isCommonCancelled:x.isCancelled,canOpenTeacherSchedule:U,isOpeningSchedule:k,onOpenTeacherSchedule:()=>void V()})]})})})}Q.__docgenInfo={description:``,methods:[],displayName:`InformationAboutLesson`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isOpen:{required:!0,tsType:{name:`boolean`},description:``},lesson:{required:!0,tsType:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},description:``},scheduleType:{required:!1,tsType:{name:`RuzType`},description:``},studyPlace:{required:!1,tsType:{name:`union`,raw:`"fin" | "kip" | "lyceum" | "mfk" | string`,elements:[{name:`literal`,value:`"fin"`},{name:`literal`,value:`"kip"`},{name:`literal`,value:`"lyceum"`},{name:`literal`,value:`"mfk"`},{name:`string`}]},description:``},scheduleGroupName:{required:!1,tsType:{name:`string`},description:``},selectedVariantId:{required:!1,tsType:{name:`string`},description:``},onSelectVariant:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson, variantId: string) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`string`},name:`variantId`}],return:{name:`void`}}},description:``},onOpenRelatedSchedule:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  lesson: GroupedLesson,
  variant: GroupedLesson["variants"][number]
) => Promise<boolean> | boolean`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`intersection["variants"][number]`,raw:`GroupedLesson["variants"][number]`},name:`variant`}],return:{name:`union`,raw:`Promise<boolean> | boolean`,elements:[{name:`Promise`,elements:[{name:`boolean`}],raw:`Promise<boolean>`},{name:`boolean`}]}}},description:``}}};export{Q as t};