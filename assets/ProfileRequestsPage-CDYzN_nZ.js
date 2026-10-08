import{t as e}from"./useTranslation-eDAlq15L.js";import{t}from"./iframe-CmBlaoL5.js";import{u as n}from"./chunk-OE4NN4TA-um6Alu-_.js";import{t as r}from"./BackButton-Ce7o2UJI.js";import{t as i}from"./Card-lFxmNmMK.js";import{n as a,t as o}from"./Typography-CcbGFH53.js";import{t as s}from"./AsyncContentTransition-DBlOtMg7.js";import{t as c}from"./EmptyState-DH2UxVED.js";import{t as l}from"./Skeleton-D22MI1Di.js";import{t as u}from"./Stack-DI62hkWB.js";import{t as d}from"./Pagination-Br-n8Dkg.js";import{t as f}from"./AppHeader-CpdzQit-.js";import{t as p}from"./DetailList-CbUO8whu.js";import{t as m}from"./ProfileRequestCard-BSzqAYuA.js";var h=t();function g({eyebrow:e,title:t,subtitle:n,fallbackPath:i}){return(0,h.jsx)(f,{actionsPlacement:`overlay`,eyebrow:e,title:t,description:n,actions:(0,h.jsx)(r,{fallbackPath:i})})}g.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsHero`,props:{eyebrow:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},fallbackPath:{required:!0,tsType:{name:`string`},description:``}}};function _(){let{t}=e(`profileRequests`);return(0,h.jsxs)(`div`,{className:`profile-requests-page`,children:[(0,h.jsx)(g,{eyebrow:t(`hero.eyebrow`),title:`Детали заявки`,fallbackPath:`/main/profile/requests`}),(0,h.jsxs)(i,{children:[(0,h.jsx)(l,{variant:`text`,width:`30%`}),Array.from({length:3},(e,t)=>(0,h.jsxs)(u,{gap:`2`,children:[(0,h.jsx)(l,{variant:`text`,width:`40%`}),(0,h.jsx)(l,{variant:`text`,width:`80%`})]},t))]})]})}_.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailLoading`};function v({rows:e}){return(0,h.jsx)(p,{items:e,columns:2})}v.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailRows`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}}]}}],raw:`TicketDetailRow[]`},description:``}}};function y(e){return(0,h.jsxs)(u,{gap:`3`,children:[(0,h.jsx)(o,{level:2,children:e.title}),e.rows?(0,h.jsx)(v,{rows:e.rows}):(0,h.jsx)(a,{size:`lg`,children:e.text})]})}y.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestDetailSection`};function b(){return(0,h.jsx)(u,{gap:`4`,children:Array.from({length:3}).map((e,t)=>(0,h.jsxs)(i,{children:[(0,h.jsx)(l,{variant:`title`}),(0,h.jsx)(l,{variant:`text`}),(0,h.jsx)(l,{variant:`text`,width:`70%`})]},t))})}function x(){let{t}=e(`profileRequests`);return(0,h.jsx)(c,{title:t(`list.empty.title`),description:t(`list.empty.description`)})}function S({tickets:t,isLoading:r}){let{t:i}=e(`profileRequests`),a=n();return(0,h.jsx)(`section`,{className:`profile-requests-list`,"aria-label":i(`list.ariaLabel`),children:(0,h.jsx)(s,{loading:r,skeleton:(0,h.jsx)(b,{}),contentKey:t.length?`tickets-${t.length}`:`empty`,children:t.length?(0,h.jsx)(u,{gap:`4`,children:t.map(e=>(0,h.jsx)(m,{ticket:e,onClick:()=>a(`/main/profile/requests/${e.id}`)},e.id))}):(0,h.jsx)(x,{})})})}S.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsList`,props:{tickets:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`phone`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`email`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}}]}}],raw:`ServiceTicket[]`},description:``},isLoading:{required:!0,tsType:{name:`boolean`},description:``}}};function C({page:t,pageLabel:n,canGoNext:r,canGoPrev:i,onPageChange:a}){let{t:o}=e(`profileRequests`);return(0,h.jsx)(d,{className:`profile-requests-pagination`,label:n,canGoNext:r,canGoPrevious:i,onNext:()=>a(t+1),onPrevious:()=>a(t-1),ariaLabel:o(`pagination.ariaLabel`)})}C.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestsPagination`,props:{page:{required:!0,tsType:{name:`number`},description:``},pageLabel:{required:!0,tsType:{name:`string`},description:``},canGoNext:{required:!0,tsType:{name:`boolean`},description:``},canGoPrev:{required:!0,tsType:{name:`boolean`},description:``},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``}}};export{g as a,_ as i,S as n,y as r,C as t};