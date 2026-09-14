import"./preload-helper-DGWYlufl.js";import{t as e}from"./iframe-B4LKz5fK.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";import"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./proxy-Dnaxw7vE.js";import"./use-reduced-motion-D1xf7gmi.js";import"./useLazyAsset-CS8jW2wd.js";import{t}from"./ErrorState-CrPyC2CI.js";var n=e(),r={title:`States/ErrorState`,component:t,parameters:{layout:`fullscreen`,docs:{description:{component:`Полноэкранное состояние ошибки с кодом, иллюстрацией и действиями восстановления. Подходит для 403, 404 и критических ошибок страницы.`}}},args:{code:`404`,title:`Страница не найдена`,description:`Возможно, страница была перемещена или удалена.`,actions:[{label:`На главную`,onClick:()=>{}},{label:`Назад`,onClick:()=>{},tone:`secondary`}]}};const i={},a={render:e=>(0,n.jsx)(t,{...e,tone:`amber`,code:`403`,title:`Доступ ограничен`})},o={...i,globals:{theme:`light`}},s={...i,globals:{theme:`dark`}},c={...i,globals:{textScale:`large`}},l={args:{code:`503`,tone:`red`,title:`Сервис временно недоступен`,description:`Не удалось загрузить данные. Попробуйте ещё раз через несколько минут.`}},u={args:{title:`Не удалось открыть запрошенные сведения о личном кабинете`,description:`Длинное описание причины ошибки остаётся доступным на небольшом экране. При необходимости блок можно прокрутить вместе с действиями восстановления.`,topAction:{label:`Связаться с поддержкой`,onClick:()=>{}},actions:[{label:`Попробовать загрузить ещё раз`,onClick:()=>{}},{label:`Вернуться на главную страницу`,tone:`secondary`,onClick:()=>{}}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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