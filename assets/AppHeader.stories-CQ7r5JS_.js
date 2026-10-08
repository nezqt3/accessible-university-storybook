import"./preload-helper-DGWYlufl.js";import"./useTranslation-9RT7qr1b.js";import{t as e}from"./iframe-DG2KGKvW.js";import{n as t}from"./chunk-OE4NN4TA-C8HTGYng.js";import"./createLucideIcon-Bfb3zjcZ.js";import{t as n}from"./arrow-left-Cz8J4CrB.js";import"./chevron-left-PRNEcyJU.js";import{t as r}from"./refresh-ccw-CCqXHSi4.js";import{t as i}from"./refresh-cw-1QqW0ZPz.js";import"./motion-C4hY7hfp.js";import"./NavigationTransitionContext-CPpZMroA.js";import{t as a}from"./BackButton-BVJEQkCp.js";import"./BackButton-1xa1X3Rx.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import{t as o}from"./Button-DY6ywSD3.js";import"./Button-DDTwPwQw.js";import{t as s}from"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import{t as c}from"./AppHeader-BkXf_C0F.js";var l=e(),u={title:`Navigation/AppHeader`,component:c,parameters:{layout:`padded`,docs:{description:{component:`Шапка экрана без hero-карточки. Large — 28px, default — 24px. Overlay отделяет верхний actions-layer от обычного потока HeaderCopy: Back и Refresh не меняют вертикальное положение eyebrow, title и optional description.`}}},decorators:[e=>(0,l.jsx)(t,{children:(0,l.jsx)(`div`,{style:{width:`min(100%, 390px)`,minWidth:0},children:(0,l.jsx)(e,{})})})],args:{title:`Сервисы`,description:`Университетские сервисы в одном месте.`,size:`large`}};const d={},f={args:{title:`Электронные ресурсы`,eyebrow:`Библиотека`,size:`default`,leading:(0,l.jsx)(s,{ariaLabel:`Назад`,variant:`ghost`,children:(0,l.jsx)(n,{})})}},p={args:{title:`Получение справки, транскрипта, выписки из зачетной книжки`,eyebrow:`Студенческий офис`,size:`default`}},m={args:{title:`Электронные ресурсы`,description:`Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета.`}},h={args:{title:`Электронные ресурсы`,actions:(0,l.jsx)(o,{variant:`ghost`,size:`sm`,iconLeft:(0,l.jsx)(i,{}),children:`Обновить`})}};var g=(0,l.jsx)(a,{fallbackPath:`/main/home`}),_=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{fallbackPath:`/main/home`}),(0,l.jsx)(s,{variant:`ghost`,ariaLabel:`Обновить посещаемость`,children:(0,l.jsx)(r,{})})]}),v={eyebrow:`Профиль`,title:`Посещаемость`,description:void 0,size:`default`,actionsPlacement:`overlay`};const y={args:{...v,actions:_}},b={args:{...v,actions:g}},x={args:{...v,eyebrow:void 0,title:`Справочный материал`,description:`Описание сохраняется для экранов за пределами сервисного сценария.`,actions:g}},S={args:{...x.args,description:void 0}},C={args:{...v,actions:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{fallbackPath:`/main/home`}),(0,l.jsx)(s,{variant:`ghost`,ariaLabel:`Обновление посещаемости`,spinning:!0,disabled:!0,children:(0,l.jsx)(r,{})})]})}},w={args:{...v,title:`Материалы для подготовки к промежуточной аттестации`,actions:_}},T={args:{...v,eyebrow:`Сервисы / Аттестационный журнал и текущая успеваемость`,actions:_}},E={args:{...v,description:void 0,actions:g}},D={args:{...v,eyebrow:void 0,title:`Карта корпусов`,actions:g}},O={args:{title:`Карта корпусов`,description:void 0,eyebrow:void 0,actions:void 0,size:`default`,actionsPlacement:`overlay`}},k={...y,parameters:{viewport:{defaultViewport:`smallMobile`}}},A={...y,parameters:{viewport:{defaultViewport:`mobile`}}},j={args:{...v,actions:_},render:e=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-8)`},children:[(0,l.jsx)(c,{...e,"aria-label":`Без действий`,actions:void 0}),(0,l.jsx)(c,{...e,"aria-label":`Только назад`,actions:g}),(0,l.jsx)(c,{...e,"aria-label":`Назад и обновить`,actions:_})]}),parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Три одинаковых HeaderCopy позволяют визуально сравнить вертикальный ритм без actions, с Back и с Back + Refresh.`}}}},M={...y,globals:{theme:`dark`}},N={...y,globals:{theme:`light`}},P={...y,globals:{textScale:`large`}},F={args:{description:void 0,eyebrow:`Добрый день`}},I={args:{title:`Черновик заявления`,description:`Получение справки о доходах`,size:`default`,actions:(0,l.jsx)(o,{variant:`danger`,children:`Удалить`})}},L={args:{actions:(0,l.jsx)(o,{variant:`ghost`,disabled:!0,iconLeft:(0,l.jsx)(i,{}),children:`Обновить`})}},R={...w,globals:{theme:`dark`,textScale:`large`},args:w.args};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    eyebrow: "Библиотека",
    size: "default",
    leading: <IconButton ariaLabel="Назад" variant="ghost">
        <ArrowLeft />
      </IconButton>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Получение справки, транскрипта, выписки из зачетной книжки",
    eyebrow: "Студенческий офис",
    size: "default"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    description: "Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Электронные ресурсы",
    actions: <Button variant="ghost" size="sm" iconLeft={<RefreshCw />}>
        Обновить
      </Button>
  }
}`,...h.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    actions: backRefreshActions
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    actions: backAction
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    eyebrow: undefined,
    title: "Справочный материал",
    description: "Описание сохраняется для экранов за пределами сервисного сценария.",
    actions: backAction
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...TitleSubtitleBack.args,
    description: undefined
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    actions: <>
        <BackButton fallbackPath="/main/home" />
        <IconButton variant="ghost" ariaLabel="Обновление посещаемости" spinning disabled>
          <RefreshCcw />
        </IconButton>
      </>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    title: "Материалы для подготовки к промежуточной аттестации",
    actions: backRefreshActions
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    eyebrow: "Сервисы / Аттестационный журнал и текущая успеваемость",
    actions: backRefreshActions
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    description: undefined,
    actions: backAction
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    eyebrow: undefined,
    title: "Карта корпусов",
    actions: backAction
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Карта корпусов",
    description: undefined,
    eyebrow: undefined,
    actions: undefined,
    size: "default",
    actionsPlacement: "overlay"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...ServiceActions,
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...ServiceActions,
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...serviceArgs,
    actions: backRefreshActions
  },
  render: args => <div style={{
    display: "grid",
    gap: "var(--ui-space-8)"
  }}>
      <AppHeader {...args} aria-label="Без действий" actions={undefined} />
      <AppHeader {...args} aria-label="Только назад" actions={backAction} />
      <AppHeader {...args} aria-label="Назад и обновить" actions={backRefreshActions} />
    </div>,
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    },
    docs: {
      description: {
        story: "Три одинаковых HeaderCopy позволяют визуально сравнить вертикальный ритм без actions, с Back и с Back + Refresh."
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...ServiceActions,
  globals: {
    theme: "dark"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...ServiceActions,
  globals: {
    theme: "light"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...ServiceActions,
  globals: {
    textScale: "large"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined,
    eyebrow: "Добрый день"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Черновик заявления",
    description: "Получение справки о доходах",
    size: "default",
    actions: <Button variant="danger">Удалить</Button>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button variant="ghost" disabled iconLeft={<RefreshCw />}>
        Обновить
      </Button>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...ServiceLongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  },
  args: ServiceLongTitle.args
}`,...R.parameters?.docs?.source}}};const z=[`Default`,`Nested`,`LongTitle`,`LongSubtitle`,`WithAction`,`ServiceActions`,`ServiceBackOnly`,`TitleSubtitleBack`,`TitleBack`,`ServiceActionsLoading`,`ServiceLongTitle`,`ServiceLongEyebrow`,`ServiceWithoutSubtitle`,`ServiceWithoutEyebrow`,`TitleOnly`,`Mobile320`,`Mobile390`,`ActionIndependence`,`ServiceActionsDark`,`ServiceActionsLight`,`ServiceActionsLargeText`,`WithoutAction`,`Destructive`,`Disabled`,`DarkLargeText`];export{j as ActionIndependence,R as DarkLargeText,d as Default,I as Destructive,L as Disabled,m as LongSubtitle,p as LongTitle,k as Mobile320,A as Mobile390,f as Nested,y as ServiceActions,M as ServiceActionsDark,P as ServiceActionsLargeText,N as ServiceActionsLight,C as ServiceActionsLoading,b as ServiceBackOnly,T as ServiceLongEyebrow,w as ServiceLongTitle,D as ServiceWithoutEyebrow,E as ServiceWithoutSubtitle,S as TitleBack,O as TitleOnly,x as TitleSubtitleBack,h as WithAction,F as WithoutAction,z as __namedExportsOrder,u as default};