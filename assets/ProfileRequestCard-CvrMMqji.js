import{t as e}from"./iframe-B4LKz5fK.js";import{t}from"./Badge-C2wuhY-p.js";import{t as n}from"./Card-BgVtbWy2.js";import{n as r,t as i}from"./Typography-qnf5X21q.js";import{t as a}from"./Inline-j0UFlr8H.js";function o(e){if(!e)return`Не указано`;let t=e<1e10?e*1e3:e,n=new Date(t);return Number.isNaN(n.getTime())?`Не указано`:n.toLocaleString(`ru-RU`,{day:`2-digit`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})}function s(e){return e==null?null:new Intl.NumberFormat(`ru-RU`,{style:`currency`,currency:`RUB`,maximumFractionDigits:0}).format(e)}function c(e){if(!e)return null;let t=o(e);return t===`Не указано`?null:t}const l={new:`Новая`,open:`Открыта`,opened:`Открыта`,pending:`Ожидает обработки`,processing:`В обработке`,in_progress:`В обработке`,inprogress:`В обработке`,work:`В работе`,active:`Активна`,confirmed:`Подтверждена`,approved:`Одобрена`,ready:`Готова`,completed:`Завершена`,complete:`Завершена`,closed:`Закрыта`,closed_successful:`Закрыта успешно`,closed_unsuccessful:`Закрыта без выполнения`,done:`Выполнена`,cancelled:`Отменена`,canceled:`Отменена`,rejected:`Отклонена`,refused:`Отклонена`,expired:`Истекла`,paid:`Оплачена`,unpaid:`Не оплачена`,wait:`Ожидает`,waiting:`Ожидает`},u={phone:`Телефон`,phone_number:`Телефон`,email:`Email`,territory:`Адрес`,department:`Факультет`,faculty:`Факультет`,form_of_study:`Форма обучения`,document_type:`Тип документа`,organization_name:`Организация`,delivery_method:`Способ получения`,delivery_place:`Место получения`,comment:`Комментарий`,note:`Примечание`,first_name:`Имя`,last_name:`Фамилия`,middle_name:`Отчество`,student_card_number:`Номер студенческого билета`},d={commercial:`Услуга`,free:`Бесплатная услуга`,event:`Мероприятие`,event_ticket:`Билет на мероприятие`},f={paid:`Оплачено`,unpaid:`Не оплачено`,pending:`Ожидает оплаты`,canceled:`Отменено`,cancelled:`Отменено`,refunded:`Возвращено`};function p(e){return e?.trim().toLowerCase().replace(/[\s-]+/g,`_`)??``}function m(e){return e.trim().replace(/[_-]+/g,` `).replace(/\s+/g,` `).replace(/^./,e=>e.toUpperCase())}function h(e,t){if(typeof e==`string`&&e.trim())return e.trim();if(!e||typeof e!=`object`)return null;let n=e;for(let e of t){let t=n[e];if(typeof t==`string`&&t.trim())return t.trim()}return null}function g(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function _(e){return e==null?!1:typeof e==`string`?e.trim().length>0:Array.isArray(e)?e.length>0:!0}function v(e){return e.replace(/\s+/g,` `).trim()}function y(e){return e?.trim()&&v(e.replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`
`).replace(/<[^>]*>/g,` `).replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`))||null}function b(e){return u[e.trim().toLowerCase()]||e.replace(/[_-]+/g,` `).replace(/\s+/g,` `).trim().replace(/^./,e=>e.toUpperCase())}function x(e,t){return t[p(e)]??e}function S(e){if(!_(e))return null;if(typeof e==`boolean`)return e?`Да`:`Нет`;if(typeof e==`number`)return String(e);if(typeof e==`string`)return v(e);if(Array.isArray(e)){let t=e.map(S).filter(Boolean);return t.length>0?t.join(`, `):null}return g(e)?h(e,[`title`,`name`,`value`,`label`]):null}function C(e,t,n,r=S){let i=r(n);i&&e.push({label:t,value:i})}function w(e){let t=e.ticket?.statuses;if(!Array.isArray(t)||t.length===0)return null;for(let e of t.slice().reverse()){let t=h(e,[`state`,`status`,`name`,`title`]);if(t)return t;if(e&&typeof e==`object`){let t=h(e.ticketState,[`name`,`title`,`state`]);if(t)return t}}return null}function T(e){return e.title?.trim()||e.service?.title?.trim()||e.service?.name?.trim()||e.ticket?.title?.trim()||`Заявка #${e.id}`}function E(e){let t=w(e)||h(e.ticket?.state,[`title`,`name`,`state`])||h(e.ticket?.stateType,[`title`,`name`,`stateType`])||e.status?.trim()||e.ticket?.status?.trim()||null;return t?l[p(t)]??m(t):`Без статуса`}function D(e){return e.ticket?.ticketNumber?.trim()||e.ticket?.number?.trim()||e.extId?.trim()||String(e.id)}function O(e){return e.service?.title?.trim()||e.service?.name?.trim()||`Сервис не указан`}function k(e){let t=E(e).toLowerCase();return t.includes(`закры`)||t.includes(`готов`)||t.includes(`closed`)?`done`:t.includes(`обработ`)||t.includes(`нов`)||t.includes(`откры`)||t.includes(`работ`)||t.includes(`ожида`)?`progress`:`neutral`}var A=e();function j({ticket:e,onClick:s}){let c=k(e);return(0,A.jsxs)(n,{interactive:!0,className:`service-ticket-card`,onClick:s,children:[(0,A.jsx)(n.Header,{children:(0,A.jsx)(t,{tone:c===`done`?`success`:c===`progress`?`warning`:`neutral`,children:E(e)})}),(0,A.jsxs)(n.Content,{children:[(0,A.jsx)(i,{level:3,children:T(e)}),(0,A.jsx)(r,{size:`sm`,tone:`muted`,children:O(e)})]}),(0,A.jsxs)(a,{gap:`2`,justify:`between`,wrap:!0,children:[(0,A.jsxs)(r,{as:`span`,size:`caption`,tone:`muted`,children:[`#`,D(e)]}),(0,A.jsx)(r,{as:`span`,size:`caption`,tone:`muted`,children:o(e.createdAt)})]})]})}j.__docgenInfo={description:``,methods:[],displayName:`ProfileRequestCard`,props:{ticket:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`name`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`phone`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`email`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}},{name:`null`}],required:!1}}]}},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};export{c as _,k as a,S as c,p as d,h as f,d as g,f as h,E as i,b as l,x as m,D as n,T as o,y as p,O as r,C as s,j as t,g as u,s as v};