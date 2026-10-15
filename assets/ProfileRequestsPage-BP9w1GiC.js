import{t as e}from"./useTranslation-DYjPHpZM.js";import{t}from"./iframe-8nZf5U1I.js";import{h as n}from"./chunk-OE4NN4TA-D8eTBeQe.js";import{t as r}from"./BackButton-C0WP-Hh9.js";import{t as i}from"./Card-cNktQ2pm.js";import{n as a,t as o}from"./Typography-DffWu56J.js";import{t as s}from"./AsyncContentTransition-DEQ6-3ub.js";import{t as c}from"./EmptyState-DjfjB-Od.js";import{t as l}from"./Skeleton-ZVZjhN6L.js";import{t as u}from"./Grid-skgSAvJp.js";import{t as d}from"./Stack-GX4de-0N.js";import{t as f}from"./Pagination-CTks0g_2.js";import{t as p}from"./AppHeader-yASD55Z8.js";import{t as m}from"./DetailList-CNN7I4uC.js";import{t as h}from"./ProfileRequestCard-BjgDPFvM.js";var g=t();function _({eyebrow:e,title:t,subtitle:n,fallbackPath:i}){return(0,g.jsx)(p,{actionsPlacement:`overlay`,eyebrow:e,title:t,description:n,actions:(0,g.jsx)(r,{fallbackPath:i})})}_.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsHero`,props:{eyebrow:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},fallbackPath:{required:!0,tsType:{name:`string`},description:``}}};function v(){let{t}=e(`profileRequests`);return(0,g.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,g.jsx)(_,{eyebrow:t(`hero.eyebrow`),title:`Детали заявки`,fallbackPath:`/main/profile/requests`}),(0,g.jsxs)(i,{children:[(0,g.jsx)(l,{variant:`text`,width:`30%`}),Array.from({length:3},(e,t)=>(0,g.jsxs)(d,{gap:`2`,children:[(0,g.jsx)(l,{variant:`text`,width:`40%`}),(0,g.jsx)(l,{variant:`text`,width:`80%`})]},t))]})]})}v.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailLoading`};function y({rows:e}){return(0,g.jsx)(m,{items:e,columns:2})}y.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailRows`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`TicketDetailRow[]`},description:``}}};function b(e){return(0,g.jsxs)(d,{gap:`3`,children:[(0,g.jsx)(o,{level:2,children:e.title}),e.rows?(0,g.jsx)(y,{rows:e.rows}):(0,g.jsx)(a,{size:`lg`,children:e.text})]})}b.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailSection`};function x(){return(0,g.jsx)(u,{className:`profile-requests-grid`,columns:1,columnsLg:2,gap:`4`,children:Array.from({length:3}).map((e,t)=>(0,g.jsxs)(i,{children:[(0,g.jsx)(l,{variant:`title`}),(0,g.jsx)(l,{variant:`text`}),(0,g.jsx)(l,{variant:`text`,width:`70%`})]},t))})}function S(){let{t}=e(`profileRequests`);return(0,g.jsx)(c,{title:t(`list.empty.title`),description:t(`list.empty.description`)})}function C({tickets:t,isLoading:r}){let{t:i}=e(`profileRequests`),a=n();return(0,g.jsx)(`section`,{className:`profile-requests-list`,"aria-label":i(`list.ariaLabel`),children:(0,g.jsx)(s,{loading:r,skeleton:(0,g.jsx)(x,{}),contentKey:t.length?`tickets-${t.length}`:`empty`,children:t.length?(0,g.jsx)(u,{className:`profile-requests-grid`,columns:1,columnsLg:2,gap:`4`,children:t.map(e=>(0,g.jsx)(h,{ticket:e,onClick:()=>a(`/main/profile/requests/${e.id}`)},e.id))}):(0,g.jsx)(S,{})})})}C.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsList`,props:{tickets:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`phone`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`email`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}}]}}],raw:`ServiceTicket[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}};function w({page:t,pageLabel:n,canGoNext:r,canGoPrev:i,onPageChange:a}){let{t:o}=e(`profileRequests`);return(0,g.jsx)(f,{className:`profile-requests-pagination`,label:n,canGoNext:r,canGoPrevious:i,onNext:()=>a(t+1),onPrevious:()=>a(t-1),ariaLabel:o(`pagination.ariaLabel`)})}w.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsPagination`,props:{page:{required:!0,tsType:{name:`number`},description:``},pageLabel:{required:!0,tsType:{name:`string`},description:``},canGoNext:{required:!0,tsType:{name:`boolean`},description:``},canGoPrev:{required:!0,tsType:{name:`boolean`},description:``},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``}}};export{_ as a,v as i,C as n,b as r,w as t};