import{t as e}from"./iframe-B4LKz5fK.js";import{u as t}from"./chunk-OE4NN4TA-BQcHIZJi.js";import{t as n}from"./BackButton-o5Fpi88d.js";import{t as r}from"./Card-BgVtbWy2.js";import{n as i,t as a}from"./Typography-qnf5X21q.js";import{t as o}from"./EmptyState-CNjYtTfK.js";import{t as s}from"./Skeleton-DRV_N5cr.js";import{t as c}from"./Stack-BEfcK43M.js";import{t as l}from"./Pagination-BFTCdYW-.js";import{t as u}from"./AppHeader-Ce4m7oXL.js";import{t as d}from"./DetailList-DAbxqejp.js";import{_ as f,c as p,d as m,f as h,g,h as _,l as v,m as y,n as b,p as x,r as S,s as C,t as w,u as T,v as E}from"./ProfileRequestCard-CvrMMqji.js";var D=e();function O(){return(0,D.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,D.jsxs)(c,{gap:`3`,children:[(0,D.jsx)(s,{variant:`text`,width:`40%`}),(0,D.jsx)(s,{variant:`title`}),(0,D.jsx)(s,{variant:`text`})]}),(0,D.jsxs)(r,{children:[(0,D.jsx)(s,{variant:`text`,width:`30%`}),Array.from({length:6},(e,t)=>(0,D.jsxs)(c,{gap:`2`,children:[(0,D.jsx)(s,{variant:`text`,width:`40%`}),(0,D.jsx)(s,{variant:`text`,width:`80%`})]},t))]})]})}O.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailLoading`};function k({rows:e}){return(0,D.jsx)(d,{items:e,columns:2})}k.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailRows`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`TicketDetailRow[]`},description:``}}};function A(e){return(0,D.jsxs)(c,{gap:`3`,children:[(0,D.jsx)(a,{level:2,children:e.title}),e.rows?(0,D.jsx)(k,{rows:e.rows}):(0,D.jsx)(i,{size:`lg`,children:e.text})]})}A.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailSection`};function j({eyebrow:e,title:t,subtitle:r,fallbackPath:i,isDetail:a=!1}){return(0,D.jsx)(u,{eyebrow:e,title:t,description:r,size:a?`default`:`large`,leading:(0,D.jsx)(n,{fallbackPath:i})})}j.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsHero`,props:{eyebrow:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!0,tsType:{name:`string`},description:``},fallbackPath:{required:!0,tsType:{name:`string`},description:``},isDetail:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};function M(e){return typeof e==`number`?f(e):null}function N(e){return typeof e==`number`?E(e):null}function P(e){return typeof e==`number`&&e>0}function F(e){return/^pe-\d+$/i.test(e.trim())||/^\d+$/.test(e.trim())}function I(e){if(typeof e!=`string`)return null;let t=e.trim();return!t||F(t)?null:t}function L(e){return typeof e==`string`?g[m(e)]??null:null}function R(e){let t=[],n=e.ticket?.serviceType||e.service?.type;return C(t,`Дата создания`,e.createdAt,M),C(t,`Номер заявки`,b(e)),C(t,`Услуга`,S(e)),C(t,`Тип`,n,L),C(t,`Готовность`,e.readyTime,M),C(t,`Закрыта`,e.closedAt,M),C(t,`Подтверждена`,e.confirmedAt,M),t}function z(e){let t=[];return C(t,`Оплата`,e.paymentRequired===!0?`Требуется`:null),C(t,`Стоимость`,e.freeOfCharge===!0?`Бесплатно`:null),C(t,`Сумма`,P(e.totalPrice)?e.totalPrice:null,N),C(t,`Осталось оплатить`,P(e.remainingToPay)?e.remainingToPay:null,N),C(t,`Статус оплаты`,e.paymentStatus,e=>typeof e==`string`?y(e,_):null),C(t,`Способ оплаты`,e.paymentType),C(t,`Плательщик`,e.payer,I),t}function B(e){return Array.isArray(e.dynamicFields)?e.dynamicFields.reduce((e,t,n)=>{if(!T(t))return C(e,`Поле ${n+1}`,t),e;let r=h(t.name,[`name`,`title`,`label`])??`Поле ${n+1}`,i=p(t.value??t.values);return i&&e.push({label:v(r),value:i}),e},[]):[]}function V(e){let t=x(e.service?.description);return!t||/^(описание|description)$/i.test(t)?null:t}function H(){return(0,D.jsx)(D.Fragment,{children:Array.from({length:4}).map((e,t)=>(0,D.jsxs)(r,{children:[(0,D.jsx)(s,{variant:`title`}),(0,D.jsx)(s,{variant:`text`}),(0,D.jsx)(s,{variant:`text`,width:`70%`})]},t))})}function U(){return(0,D.jsx)(o,{title:`Заявок пока нет`,description:`Когда появятся справки, обращения или регистрации, они будут здесь.`})}function W({tickets:e,isLoading:n}){let r=t();return(0,D.jsx)(`section`,{className:`profile-requests-list`,"aria-label":`Список заявок`,children:n?(0,D.jsx)(H,{}):e.length?e.map(e=>(0,D.jsx)(w,{ticket:e,onClick:()=>r(`/main/profile/requests/${e.id}`)},e.id)):(0,D.jsx)(U,{})})}W.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsList`,props:{tickets:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: number;
  createdAt?: number | null;
  extId?: string | null;
  title?: string | null;
  ticket?: ServiceTicketInnerTicket | null;
  serviceId?: number | null;
  service?: ServiceTicketService | null;
  status?: string | null;
  confirmedAt?: number | null;
  paymentStatus?: string | null;
  paymentType?: string | null;
  payer?: string | null;
  freeOfCharge?: boolean | null;
  comment?: string | null;
  userId?: number | null;
  readyTime?: number | null;
  totalPrice?: number | null;
  expireAt?: number | null;
  dynamicFields?: unknown[] | null;
  metadata?: unknown | null;
  paymentRequired?: boolean | null;
  remainingToPay?: number | null;
  closedAt?: number | null;
  parentId?: number | null;
  customer?: ServiceTicketCustomer | null;
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`createdAt`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`extId`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`ticket`,value:{name:`union`,raw:`ServiceTicketInnerTicket | null`,elements:[{name:`signature`,type:`object`,raw:`{
  id?: number | null;
  createdAt?: number | null;
  ticketNumber?: string | null;
  number?: string | null;
  title?: string | null;
  status?: string | null;
  state?:
    | string
    | {
        id?: number | null;
        name?: string | null;
        title?: string | null;
        type?: string | null;
      }
    | null;
  stateType?:
    | string
    | {
        id?: number | null;
        name?: string | null;
        title?: string | null;
        comments?: string | null;
      }
    | null;
  statuses?: Array<Record<string, unknown>> | null;
  serviceType?: string | null;
  serviceId?: number | null;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`createdAt`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`ticketNumber`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`number`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`status`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`state`,value:{name:`union`,raw:`| string
| {
    id?: number | null;
    name?: string | null;
    title?: string | null;
    type?: string | null;
  }
| null`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  id?: number | null;
  name?: string | null;
  title?: string | null;
  type?: string | null;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`type`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}},{key:`stateType`,value:{name:`union`,raw:`| string
| {
    id?: number | null;
    name?: string | null;
    title?: string | null;
    comments?: string | null;
  }
| null`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{
  id?: number | null;
  name?: string | null;
  title?: string | null;
  comments?: string | null;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`comments`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}},{key:`statuses`,value:{name:`union`,raw:`Array<Record<string, unknown>> | null`,elements:[{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`Array<Record<string, unknown>>`},{name:`null`}],required:!1}},{key:`serviceType`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`serviceId`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}},{key:`serviceId`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`service`,value:{name:`union`,raw:`ServiceTicketService | null`,elements:[{name:`signature`,type:`object`,raw:`{
  id?: number | null;
  name?: string | null;
  title?: string | null;
  type?: string | null;
  description?: string | null;
  images?: string[] | null;
  freeOfCharge?: boolean | null;
  available?: boolean | null;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`title`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`type`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`description`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`images`,value:{name:`union`,raw:`string[] | null`,elements:[{name:`Array`,elements:[{name:`string`}],raw:`string[]`},{name:`null`}],required:!1}},{key:`freeOfCharge`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`available`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}},{key:`status`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`confirmedAt`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`paymentStatus`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`paymentType`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`payer`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`freeOfCharge`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`comment`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`userId`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`readyTime`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`totalPrice`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`expireAt`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`dynamicFields`,value:{name:`union`,raw:`unknown[] | null`,elements:[{name:`Array`,elements:[{name:`unknown`}],raw:`unknown[]`},{name:`null`}],required:!1}},{key:`metadata`,value:{name:`union`,raw:`unknown | null`,elements:[{name:`unknown`},{name:`null`}],required:!1}},{key:`paymentRequired`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`remainingToPay`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`closedAt`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`parentId`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!1}},{key:`customer`,value:{name:`union`,raw:`ServiceTicketCustomer | null`,elements:[{name:`signature`,type:`object`,raw:`{
  name?: string | null;
  phone?: string | null;
  email?: string | null;
}`,signature:{properties:[{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`phone`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`email`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}}]}}],raw:`ServiceTicket[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}};function G({page:e,pageLabel:t,canGoNext:n,canGoPrev:r,onPageChange:i}){return(0,D.jsx)(l,{className:`profile-requests-pagination`,label:t,canGoNext:n,canGoPrevious:r,onNext:()=>i(e+1),onPrevious:()=>i(e-1),ariaLabel:`Страницы заявок`})}G.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsPagination`,props:{page:{required:!0,tsType:{name:`number`},description:``},pageLabel:{required:!0,tsType:{name:`string`},description:``},canGoNext:{required:!0,tsType:{name:`boolean`},description:``},canGoPrev:{required:!0,tsType:{name:`boolean`},description:``},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``}}};export{z as a,A as c,R as i,O as l,W as n,V as o,B as r,j as s,G as t};