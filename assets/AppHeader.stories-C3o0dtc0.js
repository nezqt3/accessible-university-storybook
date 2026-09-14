import{t as e}from"./iframe-b1ov7CI7.js";import{t}from"./createLucideIcon-B-7CjJKR.js";import{t as n}from"./refresh-cw-CB4k6uvV.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import{t as r}from"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import{t as i}from"./IconButton-BHQof1qE.js";import"./IconButton-CkfbeZNf.js";import"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import{t as a}from"./AppHeader-B7kx1hsq.js";var o=t(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),s=e(),c={title:`Navigation/AppHeader`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Шапка экрана без hero-карточки. Large — 28px, default — 24px. Текст переносится полностью, действия переходят на следующую строку при нехватке места. Проверьте тему, палитру, масштаб и ширину в toolbar.`}}},decorators:[e=>(0,s.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,s.jsx)(e,{})})],args:{title:`Сервисы`,description:`Университетские сервисы в одном месте.`,size:`large`}};const l={},u={args:{title:`Электронные ресурсы`,eyebrow:`Библиотека`,size:`default`,leading:(0,s.jsx)(i,{ariaLabel:`Назад`,variant:`ghost`,children:(0,s.jsx)(o,{})})}},d={args:{title:`Получение справки, транскрипта, выписки из зачетной книжки`,eyebrow:`Студенческий офис`,size:`default`}},f={args:{title:`Электронные ресурсы`,description:`Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета.`}},p={args:{title:`Электронные ресурсы`,actions:(0,s.jsx)(r,{variant:`ghost`,size:`sm`,iconLeft:(0,s.jsx)(n,{}),children:`Обновить`})}},m={args:{description:void 0,eyebrow:`Добрый день`}},h={args:{title:`Черновик заявления`,description:`Получение справки о доходах`,size:`default`,actions:(0,s.jsx)(r,{variant:`danger`,children:`Удалить`})}},g={args:{actions:(0,s.jsx)(r,{variant:`ghost`,disabled:!0,iconLeft:(0,s.jsx)(n,{}),children:`Обновить`})}},_={...d,globals:{theme:`dark`,textScale:`large`},args:{...d.args,actions:(0,s.jsx)(r,{variant:`ghost`,size:`sm`,children:`Назад`})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    eyebrow: "Библиотека",
    size: "default",
    leading: <IconButton ariaLabel="Назад" variant="ghost">
        <ArrowLeft />
      </IconButton>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Получение справки, транскрипта, выписки из зачетной книжки",
    eyebrow: "Студенческий офис",
    size: "default"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    description: "Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    actions: <Button variant="ghost" size="sm" iconLeft={<RefreshCw />}>
        Обновить
      </Button>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined,
    eyebrow: "Добрый день"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Черновик заявления",
    description: "Получение справки о доходах",
    size: "default",
    actions: <Button variant="danger">Удалить</Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="ghost" disabled iconLeft={<RefreshCw />}>
        Обновить
      </Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  },
  args: {
    ...LongTitle.args,
    actions: <Button variant="ghost" size="sm">
        Назад
      </Button>
  }
}`,..._.parameters?.docs?.source}}};const v=[`Default`,`Nested`,`LongTitle`,`LongSubtitle`,`WithAction`,`WithoutAction`,`Destructive`,`Disabled`,`DarkLargeText`];export{_ as DarkLargeText,l as Default,h as Destructive,g as Disabled,f as LongSubtitle,d as LongTitle,u as Nested,p as WithAction,m as WithoutAction,v as __namedExportsOrder,c as default};