import"./useTranslation-Ch5uCjQR.js";import{t as e}from"./iframe-B4LKz5fK.js";import"./createLucideIcon-Cqzfk4mC.js";import"./circle-alert-CLP92oOl.js";import"./circle-check-f1_yuVH9.js";import{t}from"./Alert-BtkjF_jr.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";var n=e(),r={title:`States/Alert`,component:t,parameters:{layout:`padded`,docs:{description:{component:`Контекстное сообщение о результате или состоянии операции. Поддерживает четыре тона, заголовок и действие повторной попытки.`}}},args:{tone:`error`,title:`Ресурсы временно не загрузились`,children:`Проверьте подключение и попробуйте еще раз.`}};const i={},a={render:()=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-3)`},children:[(0,n.jsx)(t,{tone:`error`,title:`Не удалось загрузить счета`,children:`Сервер не ответил. Попробуйте обновить страницу.`}),(0,n.jsx)(t,{tone:`warning`,title:`Скоро дедлайн оплаты`,children:`Срок оплаты счета истекает 25 сентября.`}),(0,n.jsx)(t,{tone:`info`,children:`Расписание обновляется каждые 30 минут.`}),(0,n.jsx)(t,{tone:`success`,title:`Заявка отправлена`})]})},o={args:{onRetry:()=>{},retryLabel:`Повторить`}},s={args:{tone:`info`,title:void 0,children:`Очень длинный текст уведомления, который должен корректно переноситься на несколько строк и не ломать выравнивание иконки и кнопки повтора даже на узких мобильных экранах.`,onRetry:()=>{}}},c={...i,globals:{theme:`light`}},l={...i,globals:{theme:`dark`}},u={...i,globals:{textScale:`large`}},d={args:{...s.args,title:`Изменения не удалось сохранить в выбранном подразделении`,retryLabel:`Повторить загрузку данных`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-3)"
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...LongText.args,
    title: "Изменения не удалось сохранить в выбранном подразделении",
    retryLabel: "Повторить загрузку данных"
  }
}`,...d.parameters?.docs?.source}}};const f=[`Default`,`Tones`,`WithRetry`,`LongText`,`Light`,`Dark`,`LargeText`,`LongContent`];export{l as Dark,i as Default,u as LargeText,c as Light,d as LongContent,s as LongText,a as Tones,o as WithRetry,f as __namedExportsOrder,r as default};