import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import{S as n}from"./scheduleStorage-kAcDSTmO.js";import{r}from"./Schedule-BJApNQWq.js";import{t as i}from"./format-DRsuurA_.js";import{t as a}from"./createLucideIcon-B3UreED2.js";import{t as o}from"./arrow-right-CP5DwSqX.js";import{t as s}from"./book-open-D_y_FZg3.js";import{t as c}from"./external-link-DSj2zt4h.js";import{t as l}from"./loader-circle-D_0ATBU9.js";import{t as u}from"./mail-BAj7UOhd.js";import{t as d}from"./map-pin-oceofVnd.js";import{t as f}from"./user-ClfCE6vH.js";import{t as p}from"./users-BFMhryWB.js";import{r as m,t as h}from"./motion-BSxM25dS.js";import{t as g}from"./Button-DXERo49s.js";import{t as _}from"./Pressable-DKvY6Bfh.js";import{t as v}from"./Badge-DYo_OMFx.js";import{t as y}from"./Card-BkRNXU5D.js";import{n as b,t as x}from"./Typography-B07p8rVT.js";import{t as S}from"./proxy-BJb5GNu-.js";import{t as C}from"./ModalOverlay-D1QdAFfV.js";import{t as w}from"./AnimatePresence-CVzmj_JQ.js";import{t as T}from"./use-reduced-motion-B2DzoRdd.js";import{t as E}from"./ModalHeader-D38pGhUQ.js";import{t as D}from"./Inline-Bn5Qldda.js";import{i as O}from"./normalize-CzNGT-t1.js";import{n as k,t as A}from"./lessonTime-CFIlxYI5.js";import{t as j}from"./DetailList-tLuQV5_I.js";import{r as M}from"./mapNavigation-Bq0rmwQ6.js";import{t as N}from"./AuditoriumMapLink-fwmmVNvD.js";var P=a(`video`,[[`path`,{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,key:`ftymec`}],[`rect`,{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`,key:`158x01`}]]);const F=e=>String(e||``).trim().toLowerCase(),I=e=>F(i(e));function L(e){let t=String(e.lecturer_full_name||e.lecturerFullName||``).trim();if(t)return t;let n=String(e.lecturer||``).trim();return R(n)?n:``}function R(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.length>=3&&t.every(e=>!e.includes(`.`)&&/[A-Za-zА-Яа-яЁё]/.test(e))}var z=t(),B=e();function V({lesson:e,scheduleType:t,selectedLecturer:n,onClose:i,onSelectLecturer:a,onResetLecturer:o,onOpenRelatedSchedule:s}){let[c,l]=(0,z.useState)(null),u=(0,z.useMemo)(()=>I(n),[n]),d=e.variants.length>1&&!!a,f=!!s,p=!!(u&&t!==r.PERSON),m=p?e.variants.filter(e=>I(e.lecturer)===u):e.variants,h=t!==r.PERSON&&d&&!n,_=G(e,h,p),v=K(h,f,t,p),y=async(n,o,c)=>{if(h){a?.(e,n.lecturer);return}if(!f){d&&a?.(e,n.lecturer);return}if(d&&!c&&t!==r.PERSON){a?.(e,n.lecturer);return}let u=W(n,o);l(u);try{await s?.(e,n)&&i?.()}finally{l(e=>e===u?null:e)}};return(0,B.jsxs)(`div`,{className:`lesson-sheet-variants`,children:[(0,B.jsxs)(`div`,{className:`lesson-sheet-variants__header`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(x,{level:3,children:_}),v?(0,B.jsx)(b,{size:`sm`,tone:`muted`,className:`lesson-sheet-variants__hint`,children:v}):null]}),d&&n?(0,B.jsx)(g,{className:`lesson-sheet-variants__reset`,variant:`ghost`,size:`sm`,onClick:()=>o?.(e),children:`Сбросить`}):null]}),(0,B.jsx)(`div`,{className:`lesson-sheet-variants__list`,children:m.map((n,r)=>{let i=W(n,r),a=q(n,e,t,u);return(0,B.jsx)(H,{variant:n,isActive:a,isPending:c===i,canNavigateVariant:f,onClick:()=>void y(n,r,a)},i)})})]})}function H({variant:e,isActive:t,isPending:n,canNavigateVariant:r,onClick:a}){return(0,B.jsxs)(y,{interactive:!0,padding:`sm`,className:`lesson-sheet-variant ${t?`lesson-sheet-variant--active`:``}`,onClick:a,children:[(0,B.jsxs)(`div`,{className:`lesson-sheet-variant__top`,children:[(0,B.jsx)(v,{children:O(e.kind_of_work)}),e.is_cancelled?(0,B.jsx)(v,{tone:`error`,children:`Отменено`}):null]}),(0,B.jsxs)(`div`,{className:`lesson-sheet-variant__row`,children:[(0,B.jsx)(f,{size:`var(--ui-icon-size-sm)`}),(0,B.jsx)(`span`,{children:i(e.lecturer)||`Не указан`})]}),e.lecturer_email?(0,B.jsxs)(`div`,{className:`lesson-sheet-variant__row`,children:[(0,B.jsx)(u,{size:`var(--ui-icon-size-sm)`}),(0,B.jsx)(`span`,{children:e.lecturer_email})]}):null,e.group?(0,B.jsxs)(`div`,{className:`lesson-sheet-variant__row`,children:[(0,B.jsx)(s,{size:`var(--ui-icon-size-sm)`}),(0,B.jsx)(`span`,{children:e.group})]}):null,r&&t?(0,B.jsx)(U,{isPending:n}):null]})}function U({isPending:e}){return(0,B.jsx)(`span`,{className:`lesson-sheet-variant__action`,children:e?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l,{size:`var(--ui-icon-size-sm)`,className:`lesson-sheet-variant__spinner`}),`Открываю`]}):(0,B.jsxs)(B.Fragment,{children:[`Перейти`,(0,B.jsx)(o,{size:`var(--ui-icon-size-sm)`})]})})}function W(e,t){return`${e.lesson_id}-${e.lecturer}-${e.group}-${t}`}function G(e,t,n){return n?`Выбранный вариант`:e.variants.length===1?`Расписание`:t?`Выберите вариант пары`:`Варианты пары`}function K(e,t,n,i){return i?`Остался выбранный вариант. Нажмите «Сбросить», чтобы снова показать все подгруппы.`:e?`Сначала выберите нужного преподавателя или подгруппу. После выбора можно перейти в связанное расписание.`:t?n===r.PERSON?`Нажмите на вариант, чтобы открыть расписание группы.`:`Нажмите на активный вариант, чтобы открыть расписание преподавателя.`:``}function q(e,t,n,i){return n===r.PERSON||!!(i&&I(e.lecturer)===i)||t.variants.length===1}V.__docgenInfo={description:``,methods:[],displayName:`LessonVariantsSection`,props:{lesson:{required:!0,tsType:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},description:``},scheduleType:{required:!1,tsType:{name:`RuzType`},description:``},selectedLecturer:{required:!0,tsType:{name:`string`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSelectLecturer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson, lecturer: string) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`string`},name:`lecturer`}],return:{name:`void`}}},description:``},onResetLecturer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},onOpenRelatedSchedule:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  lesson: GroupedLesson,
  variant: LessonVariant
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`intersection["variants"][number]`,raw:`GroupedLesson["variants"][number]`},name:`variant`}],return:{name:`union`,raw:`Promise<boolean> | boolean`,elements:[{name:`Promise`,elements:[{name:`boolean`}],raw:`Promise<boolean>`},{name:`boolean`}]}}},description:``}}};function J({links:e,compact:t=!1}){return e.length===0?null:(0,B.jsx)(D,{gap:`2`,wrap:!0,className:`lesson-webinar-links ${t?`lesson-webinar-links--compact`:``}`,children:e.map(e=>(0,B.jsxs)(`a`,{className:`lesson-webinar-links__link`,href:e.href,target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(P,{size:`var(--ui-icon-size-sm)`,"aria-hidden":`true`}),(0,B.jsx)(`span`,{children:e.label}),(0,B.jsx)(c,{size:`var(--ui-icon-size-sm)`,"aria-hidden":`true`})]},e.href))})}J.__docgenInfo={description:``,methods:[],displayName:`LessonWebinarLinks`,props:{links:{required:!0,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`object`,raw:`{
  href: string;
  label: string;
}`,signature:{properties:[{key:`href`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`ReadonlyArray<LessonWebinarLink>`},description:``},compact:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};function Y(e){if(!e?.trim())return null;try{let t=new URL(e.trim());return t.protocol===`https:`||t.protocol===`http:`?t.toString():null}catch{return null}}function X(e){let t=new Set;[e,...e.variants??[]].forEach(e=>{[e.url1,e.url2].forEach(e=>{let n=Y(e);n&&t.add(n)})});let n=Array.from(t);return n.map((e,t)=>({href:e,label:n.length===1?`Подключиться к вебинару`:`Вебинар ${t+1}`}))}function Z({isOpen:e,onClose:t,lesson:r,scheduleType:a,studyPlace:o,selectedLecturer:s=``,onSelectLecturer:c,onResetLecturer:l,onOpenRelatedSchedule:u}){let d=(0,z.useMemo)(()=>r?Array.isArray(r.kind_of_work)?r.kind_of_work:[r.kind_of_work]:[],[r]),f=(0,z.useMemo)(()=>Array.from(new Set((r?.variants??[]).map(e=>i(e.lecturer)).filter(Boolean))),[r]),p=(0,z.useMemo)(()=>{let e=r?.variants??[],t=I(s),n=t?e.filter(e=>I(e.lecturer)===t):e,i=new Map;return n.forEach(e=>{let t=e.auditorium?.trim()??``,n=e.building?.trim()??``;!t&&!n||i.set(`${t}::${n}`,{auditorium:t,building:n})}),Array.from(i.values())},[r,s]),m=(0,z.useMemo)(()=>r?X(r):[],[r]);if(!r)return null;let h=s||f[0]||i(r.lecturer)||`Не указан`,g=f.length>0,_=f.length>1,y=s?h:f.join(`, `);return(0,B.jsx)(w,{children:e&&(0,B.jsx)(C,{onClose:t,className:`lesson-info-wrapper lesson-sheet`,ariaLabelledBy:`lesson-sheet-title`,ariaDescribedBy:`lesson-sheet-description`,children:(0,B.jsxs)(`div`,{className:`lesson-sheet__content`,children:[(0,B.jsx)(E,{titleId:`lesson-sheet-title`,descriptionId:`lesson-sheet-description`,title:r.discipline,description:`Детальная информация о занятии`,onClose:t}),(0,B.jsxs)(`div`,{className:`lesson-sheet__details`,children:[(0,B.jsx)(`div`,{className:`lesson-sheet__types`,children:d.map(e=>(0,B.jsx)(v,{children:O(e)},e))}),(0,B.jsx)(j,{items:[{label:k(o)&&r.lesson_num?`Пара`:`Время`,value:(0,B.jsx)(`span`,{className:`lesson-sheet__time`,children:A(r,o)})},{label:`Дата`,value:`${n(new Date(r.date))}, ${r.day_of_week}`},...g?[{label:`Преподаватели`,value:_?y:h}]:[],{label:`Аудитории`,value:p.length>0?(0,B.jsx)(`div`,{className:`lesson-sheet__locations`,children:p.map(e=>(0,B.jsxs)(`div`,{className:`lesson-sheet__location`,children:[e.auditorium?(0,B.jsx)(`span`,{className:`lesson-sheet__room`,children:e.auditorium}):null,e.building?(0,B.jsx)(`span`,{className:`lesson-sheet__building`,children:e.building}):null]},`${e.auditorium}-${e.building}`))}):`Не указано`},...m.length>0?[{label:`Вебинар`,value:(0,B.jsx)(J,{links:m})}]:[]]}),_&&r.variants.length>0&&(0,B.jsx)(V,{lesson:r,scheduleType:a,selectedLecturer:s,onClose:t,onSelectLecturer:c,onResetLecturer:l,onOpenRelatedSchedule:u})]})]})})})}Z.__docgenInfo={description:``,methods:[],displayName:`InformationAboutLesson`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isOpen:{required:!0,tsType:{name:`boolean`},description:``},lesson:{required:!0,tsType:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},description:``},scheduleType:{required:!1,tsType:{name:`RuzType`},description:``},studyPlace:{required:!1,tsType:{name:`union`,raw:`"fin" | "kip" | "lyceum" | "mfk" | string`,elements:[{name:`literal`,value:`"fin"`},{name:`literal`,value:`"kip"`},{name:`literal`,value:`"lyceum"`},{name:`literal`,value:`"mfk"`},{name:`string`}]},description:``},selectedLecturer:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},onSelectLecturer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson, lecturer: string) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`string`},name:`lecturer`}],return:{name:`void`}}},description:``},onResetLecturer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},onOpenRelatedSchedule:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`},{type:{name:`intersection["variants"][number]`,raw:`GroupedLesson["variants"][number]`},name:`variant`}],return:{name:`union`,raw:`Promise<boolean> | boolean`,elements:[{name:`Promise`,elements:[{name:`boolean`}],raw:`Promise<boolean>`},{name:`boolean`}]}}},description:``}}};function Q(e){return(Array.isArray(e)?e:[e]).reduce((e,t)=>(typeof t==`string`&&t.trim().length>0&&e.push(t),e),[])}function ee(e,t){let n=(0,z.useMemo)(()=>Array.from(new Set([e.lecturer,...e.variants.map(e=>e.lecturer)].map(i).filter(Boolean))),[e]),a=(0,z.useMemo)(()=>Array.from(new Set([e.group,...e.variants.map(e=>e.group)].map(e=>e?.trim()).filter(Boolean))),[e]),o=(0,z.useMemo)(()=>Array.from(new Set([e,...e.variants].map(e=>[e.auditorium,e.building].filter(Boolean).join(` • `)).filter(Boolean))),[e]),s=t===r.PERSON,c=t===r.AUDITORIUM,l=c?a:o,u=s?a:n;return{isTeacherSchedule:s,isAuditoriumSchedule:c,primaryValue:l.length===1?l[0]:``,secondaryValue:s?a.join(`, `):u.length===1?u[0]:``}}const $=(0,z.memo)(function({lesson:e,notice:t,scheduleType:n,studyPlace:r,setChooseLesson:a,setOpenLessonInformationClose:o}){let s=T(),c=(0,z.useRef)(null),l=(0,z.useRef)(null),u=(0,z.useRef)(!1),f=(0,z.useRef)(null),g=(0,z.useMemo)(()=>Q(e.kind_of_work),[e.kind_of_work]),v=e.variants.length>1,y=(0,z.useMemo)(()=>X(e),[e]),{isTeacherSchedule:x,isAuditoriumSchedule:C,primaryValue:w,secondaryValue:E}=ee(e,n);(0,z.useEffect)(()=>()=>{f.current&&window.clearTimeout(f.current)},[]);let D=(0,z.useCallback)(e=>{c.current={x:e.clientX,y:e.clientY},l.current=e.pointerType,u.current=!1},[]),k=(0,z.useCallback)(e=>{let t=c.current;if(!t)return;let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y);(n>8||r>8)&&(u.current=!0)},[]),j=(0,z.useCallback)(t=>{if(u.current){t.preventDefault(),u.current=!1,c.current=null,l.current=null;return}f.current&&window.clearTimeout(f.current);let n=()=>{o(!0),a(e),c.current=null,l.current=null,f.current=null};if(l.current!==`touch`){n();return}f.current=window.setTimeout(n,45)},[e,a,o]);return(0,B.jsxs)(S.div,{initial:!1,whileTap:s?void 0:{scale:h.pressScale},transition:m.Responsive,onClick:j,onPointerDown:D,onPointerMove:k,onPointerCancel:()=>{c.current=null,l.current=null,u.current=!1},className:`schedule-lesson-card
      ${e.isNow?`current`:``}
      ${e.is_cancelled?`cancelled`:``}`,children:[(0,B.jsx)(_,{className:`schedule-lesson-card__open`,"aria-label":`${e.discipline}, ${A(e,r)}`}),(0,B.jsxs)(`div`,{className:`schedule-lesson-card__header`,children:[(0,B.jsxs)(`div`,{className:`schedule-lesson-card__time-block`,children:[e.lesson_num?(0,B.jsx)(`span`,{className:`schedule-chip schedule-chip--number`,children:e.lesson_num}):null,(0,B.jsx)(`span`,{className:`schedule-lesson-card__time`,children:A(e,r)})]}),(0,B.jsxs)(`div`,{className:`schedule-lesson-card__tags`,children:[g.map(e=>(0,B.jsx)(`span`,{className:`schedule-chip schedule-chip--kind ${e.toLowerCase()}`,children:O(e)},e)),e.is_cancelled&&(0,B.jsx)(`span`,{className:`schedule-chip schedule-chip--cancelled`,children:`Отменено`})]})]}),(0,B.jsxs)(`div`,{className:`schedule-lesson-card__body`,children:[(0,B.jsx)(`h3`,{className:`schedule-lesson-card__title`,children:e.discipline}),t?(0,B.jsx)(b,{size:`caption`,tone:`soft`,children:t}):null,w||E?(0,B.jsxs)(`div`,{className:`schedule-lesson-card__location`,children:[(0,B.jsx)(`span`,{className:`schedule-lesson-card__location-icon`,children:C||!w?(0,B.jsx)(p,{size:15}):(0,B.jsx)(d,{size:15})}),(0,B.jsxs)(B.Fragment,{children:[w?C?(0,B.jsx)(`span`,{className:`schedule-lesson-card__value`,children:w}):M(e.building)?(0,B.jsxs)(N,{room:e.auditorium,className:`schedule-auditorium-map-link`,children:[(0,B.jsx)(`span`,{className:`auditorium`,children:e.auditorium}),(0,B.jsx)(`span`,{className:`schedule-auditorium-map-link__hint`,children:`На карте`})]}):(0,B.jsx)(`span`,{className:`auditorium`,children:e.auditorium}):null,w&&E?(0,B.jsx)(`span`,{className:`separator`,children:`•`}):null,E?(0,B.jsx)(`div`,{className:`schedule-lesson-card__row`,children:(0,B.jsx)(`span`,{className:`schedule-lesson-card__value`,children:E})}):null]})]}):null,v&&(0,B.jsx)(`div`,{className:`schedule-lesson-card__subgroups-list`,children:e.variants.map((e,t)=>(0,B.jsxs)(`div`,{className:`schedule-card-row ${e.is_cancelled?`cancelled`:``}`,children:[e.is_cancelled&&(0,B.jsx)(`div`,{className:`schedule-sublesson-card__header`,children:(0,B.jsx)(`span`,{className:`schedule-sublesson-card__cancelled`,children:`Отменено`})}),(0,B.jsxs)(`div`,{className:`schedule-sublesson-card__location`,children:[(0,B.jsx)(`span`,{className:`schedule-sublesson-card__icon`,children:C?(0,B.jsx)(p,{size:14}):(0,B.jsx)(d,{size:14})}),C?(0,B.jsx)(`span`,{className:`schedule-sublesson-card__value`,children:e.group}):M(e.building)?(0,B.jsxs)(N,{room:e.auditorium,className:`schedule-auditorium-map-link`,children:[(0,B.jsx)(`span`,{className:`auditorium`,children:e.auditorium}),(0,B.jsx)(`span`,{className:`schedule-auditorium-map-link__hint`,children:`На карте`})]}):(0,B.jsx)(`span`,{className:`auditorium`,children:e.auditorium})]}),(0,B.jsx)(`span`,{className:`separator`,children:`•`}),(0,B.jsx)(`div`,{className:`schedule-sublesson-card__row`,children:(0,B.jsx)(`span`,{className:`schedule-sublesson-card__value`,children:x?e.group:i(e.lecturer)})})]},`${e.lesson_id}-${t}`))}),(0,B.jsx)(J,{links:y,compact:!0})]})]})});$.displayName=`LessonCard`,$.__docgenInfo={description:``,methods:[],displayName:`LessonCard`,props:{notice:{required:!1,tsType:{name:`string`},description:`Optional presentation note; does not infer a change from schedule data.`},lesson:{required:!0,tsType:{name:`intersection`,raw:`GroupedLesson & { isNow: boolean }`,elements:[{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},{name:`signature`,type:`object`,raw:`{ isNow: boolean }`,signature:{properties:[{key:`isNow`,value:{name:`boolean`,required:!0}}]}}]},description:``},scheduleType:{required:!1,tsType:{name:`RuzType`},description:``},studyPlace:{required:!1,tsType:{name:`union`,raw:`"fin" | "kip" | "lyceum" | "mfk" | string`,elements:[{name:`literal`,value:`"fin"`},{name:`literal`,value:`"kip"`},{name:`literal`,value:`"lyceum"`},{name:`literal`,value:`"mfk"`},{name:`string`}]},description:``},setChooseLesson:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(lesson: GroupedLesson) => void`,signature:{arguments:[{type:{name:`intersection`,raw:`Omit<Lesson, "kind_of_work" | "lesson_id"> & {
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
>`}],raw:`GroupedLessonVariant[]`,required:!0}}]}}]},name:`lesson`}],return:{name:`void`}}},description:``},setOpenLessonInformationClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:``}}};export{I as i,Z as n,L as r,$ as t};