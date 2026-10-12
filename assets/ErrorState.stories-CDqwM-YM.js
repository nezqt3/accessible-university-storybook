import"./preload-helper-DGWYlufl.js";import{t as e}from"./iframe-c-OIrLS8.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-MNXeDu62.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-CgWt6cKq.js";import"./Button-BA_jpygv.js";import"./proxy-BvZS6H3-.js";import"./use-reduced-motion-CNeWwIr3.js";import"./Typography-MScSgUfP.js";import"./Typography-BY-iGFVZ.js";import"./useLazyAsset-C3BpOvnq.js";import{t}from"./ErrorState-BqjS0Eru.js";var n=e(),r={title:`States/ErrorState`,component:t,parameters:{layout:`fullscreen`,docs:{description:{component:`Полноэкранное состояние ошибки с кодом, иллюстрацией и действиями восстановления. Подходит для 403, 404 и критических ошибок страницы.`}}},args:{code:`404`,title:`Страница не найдена`,description:`Возможно, страница была перемещена или удалена.`,actions:[{label:`На главную`,onClick:()=>{}},{label:`Назад`,onClick:()=>{},tone:`secondary`}]}};const i={},a={render:e=>(0,n.jsx)(t,{...e,tone:`amber`,code:`403`,title:`Доступ ограничен`})},o={...i,globals:{theme:`light`}},s={...i,globals:{theme:`dark`}},c={...i,globals:{textScale:`large`}},l={args:{code:`503`,tone:`red`,title:`Сервис временно недоступен`,description:`Не удалось загрузить данные. Попробуйте ещё раз через несколько минут.`}},u={args:{title:`Не удалось открыть запрошенные сведения о личном кабинете`,description:`Длинное описание причины ошибки остаётся доступным на небольшом экране. При необходимости блок можно прокрутить вместе с действиями восстановления.`,topAction:{label:`Связаться с поддержкой`,onClick:()=>{}},actions:[{label:`Попробовать загрузить ещё раз`,onClick:()=>{}},{label:`Вернуться на главную страницу`,tone:`secondary`,onClick:()=>{}}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ErrorState {...args} tone="amber" code="403" title="Доступ ограничен" />
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: "503",
    tone: "red",
    title: "Сервис временно недоступен",
    description: "Не удалось загрузить данные. Попробуйте ещё раз через несколько минут."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Не удалось открыть запрошенные сведения о личном кабинете",
    description: "Длинное описание причины ошибки остаётся доступным на небольшом экране. При необходимости блок можно прокрутить вместе с действиями восстановления.",
    topAction: {
      label: "Связаться с поддержкой",
      onClick: () => {}
    },
    actions: [{
      label: "Попробовать загрузить ещё раз",
      onClick: () => {}
    }, {
      label: "Вернуться на главную страницу",
      tone: "secondary",
      onClick: () => {}
    }]
  }
}`,...u.parameters?.docs?.source}}};const d=[`Default`,`Tones`,`Light`,`Dark`,`LargeText`,`ServiceUnavailable`,`LongContent`];export{s as Dark,i as Default,c as LargeText,o as Light,u as LongContent,l as ServiceUnavailable,a as Tones,d as __namedExportsOrder,r as default};