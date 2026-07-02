import{t as e}from"./iframe-a2mGhWt8.js";import{t}from"./createLucideIcon-Dmex4IOU.js";import{t as n}from"./circle-check-BrtWh1Ir.js";import"./InlineSpinner-7iEhdoMI.js";import"./InlineSpinner-D_wmnTPd.js";import{t as r}from"./Button-zYJcuj0z.js";import"./Button-D6nEBVRg.js";var i=t(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),a=t(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),o=t(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),s=e(),c={error:(0,s.jsx)(i,{size:18}),warning:(0,s.jsx)(o,{size:18}),info:(0,s.jsx)(a,{size:18}),success:(0,s.jsx)(n,{size:18})};function l({tone:e=`info`,title:t,onRetry:n,retryLabel:i=`Повторить`,className:a=``,children:o,...l}){return(0,s.jsxs)(`div`,{...l,role:e===`error`?`alert`:`status`,className:[`ui-alert`,`ui-alert--${e}`,a].filter(Boolean).join(` `),children:[(0,s.jsx)(`span`,{className:`ui-alert__icon`,"aria-hidden":`true`,children:c[e]}),(0,s.jsxs)(`div`,{className:`ui-alert__body`,children:[t?(0,s.jsx)(`p`,{className:`ui-alert__title`,children:t}):null,o?(0,s.jsx)(`div`,{className:`ui-alert__message`,children:o}):null]}),n?(0,s.jsx)(r,{size:`sm`,variant:`secondary`,shape:`rounded`,onClick:n,children:i}):null]})}l.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{tone:{required:!1,tsType:{name:`union`,raw:`"error" | "warning" | "info" | "success"`,elements:[{name:`literal`,value:`"error"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"success"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Кнопка повтора (паттерн «Повторить» из Library/Pay)`},retryLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Повторить"`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var u={title:`UI/Alert`,component:l,parameters:{layout:`padded`},args:{tone:`error`,title:`Ресурсы временно не загрузились`,children:`Проверьте подключение и попробуйте еще раз.`}};const d={},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,s.jsx)(l,{tone:`error`,title:`Не удалось загрузить счета`,children:`Сервер не ответил. Попробуйте обновить страницу.`}),(0,s.jsx)(l,{tone:`warning`,title:`Скоро дедлайн оплаты`,children:`Срок оплаты счета истекает 25 сентября.`}),(0,s.jsx)(l,{tone:`info`,children:`Расписание обновляется каждые 30 минут.`}),(0,s.jsx)(l,{tone:`success`,title:`Заявка отправлена`})]})},p={args:{onRetry:()=>{},retryLabel:`Повторить`}},m={args:{tone:`info`,title:void 0,children:`Очень длинный текст уведомления, который должен корректно переноситься на несколько строк и не ломать выравнивание иконки и кнопки повтора даже на узких мобильных экранах.`,onRetry:()=>{}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <Alert tone="error" title="Не удалось загрузить счета">
        Сервер не ответил. Попробуйте обновить страницу.
      </Alert>
      <Alert tone="warning" title="Скоро дедлайн оплаты">
        Срок оплаты счета истекает 25 сентября.
      </Alert>
      <Alert tone="info">Расписание обновляется каждые 30 минут.</Alert>
      <Alert tone="success" title="Заявка отправлена" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onRetry: () => {},
    retryLabel: "Повторить"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "info",
    title: undefined,
    children: "Очень длинный текст уведомления, который должен корректно переноситься на несколько строк и не ломать выравнивание иконки и кнопки повтора даже на узких мобильных экранах.",
    onRetry: () => {}
  }
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`Tones`,`WithRetry`,`LongText`];export{d as Default,m as LongText,f as Tones,p as WithRetry,h as __namedExportsOrder,u as default};