import"./useTranslation-sVHVO_Qe.js";import{t as e}from"./iframe-C2TMhgpW.js";import"./createLucideIcon-FeGR8gI-.js";import"./circle-alert-CAW07WGx.js";import"./circle-check-B5emQnoy.js";import{t}from"./Alert-CkV_fGCt.js";import"./InlineSpinner-B8Lj1vR8.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-BlEcxLT4.js";import"./Button-DIRJwf5Q.js";var n=e(),r={title:`UI/Alert`,component:t,parameters:{layout:`padded`,docs:{description:{component:`Контекстное сообщение о результате или состоянии операции. Поддерживает четыре тона, заголовок и действие повторной попытки.`}}},args:{tone:`error`,title:`Ресурсы временно не загрузились`,children:`Проверьте подключение и попробуйте еще раз.`}};const i={},a={render:()=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,n.jsx)(t,{tone:`error`,title:`Не удалось загрузить счета`,children:`Сервер не ответил. Попробуйте обновить страницу.`}),(0,n.jsx)(t,{tone:`warning`,title:`Скоро дедлайн оплаты`,children:`Срок оплаты счета истекает 25 сентября.`}),(0,n.jsx)(t,{tone:`info`,children:`Расписание обновляется каждые 30 минут.`}),(0,n.jsx)(t,{tone:`success`,title:`Заявка отправлена`})]})},o={args:{onRetry:()=>{},retryLabel:`Повторить`}},s={args:{tone:`info`,title:void 0,children:`Очень длинный текст уведомления, который должен корректно переноситься на несколько строк и не ломать выравнивание иконки и кнопки повтора даже на узких мобильных экранах.`,onRetry:()=>{}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onRetry: () => {},
    retryLabel: "Повторить"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "info",
    title: undefined,
    children: "Очень длинный текст уведомления, который должен корректно переноситься на несколько строк и не ломать выравнивание иконки и кнопки повтора даже на узких мобильных экранах.",
    onRetry: () => {}
  }
}`,...s.parameters?.docs?.source}}};const c=[`Default`,`Tones`,`WithRetry`,`LongText`];export{i as Default,s as LongText,a as Tones,o as WithRetry,c as __namedExportsOrder,r as default};