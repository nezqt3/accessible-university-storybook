import{n as e,t}from"./iframe-D0TFUEDL.js";import{t as n}from"./Badge-BxiKIddT.js";import{t as r}from"./Card-Lm_APeX4.js";import{n as i,t as a}from"./Typography-B0G6FS0A.js";import{t as o}from"./Inline-BJ7BNq02.js";function s(t,n=e.resolvedLanguage??e.language,r=e.getFixedT(null,`profileRequests`)){if(!t)return r(`common.notSpecified`);let i=t<1e10?t*1e3:t,a=new Date(i);return Number.isNaN(a.getTime())?r(`common.notSpecified`):new Intl.DateTimeFormat(n,{day:`2-digit`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(a)}function c(t,n=e.resolvedLanguage??e.language){return t==null?null:new Intl.NumberFormat(n,{style:`currency`,currency:`RUB`,maximumFractionDigits:0}).format(t)}function l(t,n=e.resolvedLanguage??e.language){if(!t)return null;let r=t<1e10?t*1e3:t,i=new Date(r);return Number.isNaN(i.getTime())?null:new Intl.DateTimeFormat(n,{day:`2-digit`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(i)}const u={new:`statuses.new`,open:`statuses.open`,opened:`statuses.open`,pending:`statuses.pending`,processing:`statuses.processing`,in_progress:`statuses.processing`,inprogress:`statuses.processing`,work:`statuses.work`,in_work:`statuses.work`,active:`statuses.active`,confirmed:`statuses.confirmed`,approved:`statuses.approved`,ready:`statuses.ready`,completed:`statuses.completed`,complete:`statuses.completed`,closed:`statuses.closed`,closed_successful:`statuses.closedSuccessful`,closed_unsuccessful:`statuses.closedUnsuccessful`,done:`statuses.done`,cancelled:`statuses.cancelled`,canceled:`statuses.cancelled`,rejected:`statuses.rejected`,refused:`statuses.rejected`,expired:`statuses.expired`,paid:`statuses.paid`,unpaid:`statuses.unpaid`,wait:`statuses.waiting`,waiting:`statuses.waiting`,waiting_for_signing:`statuses.waitingForSigning`},d={phone:`fields.phone`,phone_number:`fields.phone`,email:`fields.email`,territory:`fields.address`,department:`fields.faculty`,faculty:`fields.faculty`,form_of_study:`fields.studyForm`,document_type:`fields.documentType`,organization_name:`fields.organization`,delivery_method:`fields.deliveryMethod`,delivery_place:`fields.deliveryPlace`,comment:`fields.comment`,note:`fields.note`,first_name:`fields.firstName`,last_name:`fields.lastName`,middle_name:`fields.middleName`,student_card_number:`fields.studentCardNumber`},f={commercial:`serviceTypes.commercial`,free:`serviceTypes.free`,event:`serviceTypes.event`,event_ticket:`serviceTypes.eventTicket`},p={paid:`paymentStatuses.paid`,unpaid:`paymentStatuses.unpaid`,pending:`paymentStatuses.pending`,canceled:`paymentStatuses.cancelled`,cancelled:`paymentStatuses.cancelled`,refunded:`paymentStatuses.refunded`};function m(e){return e?.trim().toLowerCase().replace(/[\s-]+/g,`_`)??``}function h(e){return e.trim().replace(/[_-]+/g,` `).replace(/\s+/g,` `).replace(/^./,e=>e.toUpperCase())}function g(e,t){if(typeof e==`string`&&e.trim())return e.trim();if(!e||typeof e!=`object`)return null;let n=e;for(let e of t){let t=n[e];if(typeof t==`string`&&t.trim())return t.trim()}return null}function _(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function v(e){return e==null?!1:typeof e==`string`?e.trim().length>0:Array.isArray(e)?e.length>0:!0}function y(e){return e.replace(/\s+/g,` `).trim()}function b(e){return e?.trim()&&y(e.replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`
`).replace(/<[^>]*>/g,` `).replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`))||null}function x(t,n=e.getFixedT(null,`profileRequests`)){let r=d[t.trim().toLowerCase()];return r?n(r):t.replace(/[_-]+/g,` `).replace(/\s+/g,` `).trim().replace(/^./,e=>e.toUpperCase())}function S(t,n,r=e.getFixedT(null,`profileRequests`)){let i=n[m(t)];return i?r(i):t}function C(t,n=e.getFixedT(null,`profileRequests`)){if(!v(t))return null;if(typeof t==`boolean`)return n(t?`common.yes`:`common.no`);if(typeof t==`number`)return String(t);if(typeof t==`string`)return y(t);if(Array.isArray(t)){let e=t.map(e=>C(e,n)).filter(e=>!!e);return e.length>0?e.join(`, `):null}return _(t)?g(t,[`title`,`name`,`value`,`label`]):null}function w(t,n,r,i=e.getFixedT(null,`profileRequests`),a){let o=a?a(r):C(r,i);o&&t.push({label:n,value:o})}function T(e){let t=e.ticket?.statuses;if(!Array.isArray(t)||t.length===0)return null;for(let e of t.slice().reverse()){let t=g(e,[`state`,`status`,`name`,`title`]);if(t)return t;if(e&&typeof e==`object`){let t=g(e.ticketState,[`name`,`title`,`state`]);if(t)return t}}return null}function E(e){return T(e)||g(e.ticket?.state,[`title`,`name`,`state`])||g(e.ticket?.stateType,[`title`,`name`,`stateType`])||e.status?.trim()||e.ticket?.status?.trim()||null}function D(t,n=e.getFixedT(null,`profileRequests`)){return t.title?.trim()||t.service?.title?.trim()||t.service?.name?.trim()||t.ticket?.title?.trim()||n(`ticket.titleFallback`,{number:t.id})}function O(t,n=e.getFixedT(null,`profileRequests`)){let r=E(t);if(!r)return n(`ticket.statusFallback`);let i=u[m(r)];return i?n(i):h(r)}function k(e){return e.ticket?.ticketNumber?.trim()||e.ticket?.number?.trim()||e.extId?.trim()||String(e.id)}function A(t,n=e.getFixedT(null,`profileRequests`)){return t.service?.title?.trim()||t.service?.name?.trim()||n(`ticket.serviceFallback`)}function j(e){let t=E(e);if(!t)return`neutral`;let n=m(t);return new Set([`ready`,`completed`,`complete`,`closed`,`closed_successful`,`done`,`paid`]).has(n)?`done`:new Set([`new`,`open`,`opened`,`pending`,`processing`,`in_progress`,`inprogress`,`work`,`in_work`,`active`,`confirmed`,`approved`,`wait`,`waiting`,`waiting_for_signing`]).has(n)?`progress`:`neutral`}function M(t,n=e.resolvedLanguage??e.language){return typeof t==`number`?l(t,n):null}function N(e){return typeof e==`number`&&e>0}function P(e){return/^pe-\d+$/i.test(e.trim())||/^\d+$/.test(e.trim())}function F(e){if(typeof e!=`string`)return null;let t=e.trim();return!t||P(t)?null:t}function I(t,n=e.getFixedT(null,`profileRequests`)){if(typeof t!=`string`)return null;let r=f[m(t)];return r?n(r):null}function L(t,n=e.getFixedT(null,`profileRequests`),r=e.resolvedLanguage??e.language){let i=[],a=t.ticket?.serviceType||t.service?.type;return w(i,n(`detail.fields.createdAt`),t.createdAt,n,e=>M(e,r)),w(i,n(`detail.fields.requestNumber`),k(t),n),w(i,n(`detail.fields.service`),A(t,n),n),w(i,n(`detail.fields.type`),a,n,e=>I(e,n)),w(i,n(`detail.fields.readyAt`),t.readyTime,n,e=>M(e,r)),w(i,n(`detail.fields.closedAt`),t.closedAt,n,e=>M(e,r)),w(i,n(`detail.fields.confirmedAt`),t.confirmedAt,n,e=>M(e,r)),i}function R(t,n=e.getFixedT(null,`profileRequests`),r=e.resolvedLanguage??e.language){let i=[];return w(i,n(`detail.fields.paymentRequired`),t.paymentRequired===!0?n(`detail.values.required`):null,n),w(i,n(`detail.fields.freeOfCharge`),t.freeOfCharge===!0?n(`detail.values.free`):null,n),w(i,n(`detail.fields.amount`),N(t.totalPrice)?t.totalPrice:null,n,e=>typeof e==`number`?c(e,r):null),w(i,n(`detail.fields.amountRemaining`),N(t.remainingToPay)?t.remainingToPay:null,n,e=>typeof e==`number`?c(e,r):null),w(i,n(`detail.fields.paymentStatus`),t.paymentStatus,n,e=>typeof e==`string`?S(e,p,n):null),w(i,n(`detail.fields.paymentMethod`),t.paymentType,n),w(i,n(`detail.fields.payer`),t.payer,n,F),i}function z(t,n=e.getFixedT(null,`profileRequests`)){return Array.isArray(t.dynamicFields)?t.dynamicFields.reduce((e,t,r)=>{if(!_(t))return w(e,n(`detail.fields.field`,{number:r+1}),t,n),e;let i=g(t.name,[`name`,`title`,`label`])??n(`detail.fields.field`,{number:r+1}),a=C(t.value??t.values,n);return a&&e.push({label:x(i,n),value:a}),e},[]):[]}function B(e){let t=b(e.service?.description);return!t||/^(описание|description)$/i.test(t)?null:t}var V=t();function H({ticket:e,onClick:t}){let c=j(e);return(0,V.jsxs)(r,{interactive:!0,className:`service-ticket-card`,onClick:t,children:[(0,V.jsx)(r.Header,{children:(0,V.jsx)(n,{tone:c===`done`?`success`:c===`progress`?`warning`:`neutral`,children:O(e)})}),(0,V.jsxs)(r.Content,{children:[(0,V.jsx)(a,{level:3,children:D(e)}),(0,V.jsx)(i,{size:`sm`,tone:`muted`,children:A(e)})]}),(0,V.jsxs)(o,{gap:`2`,justify:`between`,wrap:!0,children:[(0,V.jsxs)(i,{as:`span`,size:`caption`,tone:`muted`,children:[`#`,k(e)]}),(0,V.jsx)(i,{as:`span`,size:`caption`,tone:`muted`,children:s(e.createdAt)})]})]})}H.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestCard`,props:{ticket:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`phone`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`email`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}}]}},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};export{B as a,O as c,R as i,j as l,z as n,k as o,L as r,A as s,H as t,D as u};