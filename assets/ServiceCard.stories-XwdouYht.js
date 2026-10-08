import{t as e}from"./iframe-DG2KGKvW.js";import"./createLucideIcon-Bfb3zjcZ.js";import{t}from"./book-open-a0mc6cSE.js";import{t as n}from"./chevron-right-DnGIDjZL.js";import{t as r}from"./file-text-C-WSg63E.js";import{t as i}from"./trash-2-CtbBjj4k.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import{t as a}from"./Button-DY6ywSD3.js";import"./Button-DDTwPwQw.js";import{t as o}from"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./Pressable-vYycdSgE.js";import"./Pressable-4oYskg3v.js";import"./Card-aXTNdhwn.js";import"./Card-DMf2-Jiv.js";import{n as s}from"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import"./ListRow-DN8pCi1O.js";import"./ListRow-B7yOQXqt.js";import{t as c}from"./ServiceCard-FdIudCP1.js";var l=e(),u={title:`Services/ServiceCard`,component:c,parameters:{layout:`padded`,docs:{description:{component:`Компактная карточка каталога на Card + ListRow. Без фиксированной высоты, контейнера вокруг иконки и декоративной стрелки. Действия children находятся вне основной кнопки. Маршруты и загрузка данных принадлежат feature.`}}},decorators:[e=>(0,l.jsx)(`div`,{style:{width:`min(100%, 320px)`,minWidth:0},children:(0,l.jsx)(e,{})})],args:{title:`Электронные ресурсы`,description:`ЭБС, научные базы и архивы журналов.`,icon:(0,l.jsx)(t,{}),onClick:()=>{}}},d=u;const f={args:{trailing:(0,l.jsx)(n,{size:18,"aria-hidden":`true`})}},p={args:{title:`Получение справки, транскрипта, выписки из зачетной книжки`,description:`Оформление учебных документов и выписок`,icon:(0,l.jsx)(r,{})}},m={args:{description:`Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета. Длинное описание остается доступным при увеличении текста.`}},h={args:{onClick:void 0,children:(0,l.jsx)(a,{variant:`ghost`,size:`sm`,children:`Открыть`})}},g={args:{onClick:void 0}},_={args:{title:`Мое расписание`,description:`ТРПО25-2 (подгруппа 1)`,trailing:(0,l.jsx)(o,{ariaLabel:`Удалить расписание`,variant:`ghost`,children:(0,l.jsx)(i,{})})}},v={args:{disabled:!0,children:(0,l.jsx)(s,{size:`caption`,tone:`muted`,children:`Временно недоступно`})}},y={...p,globals:{theme:`dark`,textScale:`large`}},b={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,l.jsx)(c,{...u.args}),(0,l.jsx)(c,{...u.args,...p.args}),(0,l.jsx)(c,{title:`Материалы для подготовки`,description:`Конспекты и учебные материалы по курсам и преподавателям.`,icon:(0,l.jsx)(r,{}),onClick:()=>{}})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    trailing: <ChevronRight size={18} aria-hidden="true" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Получение справки, транскрипта, выписки из зачетной книжки",
    description: "Оформление учебных документов и выписок",
    icon: <FileText />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Каталог подключенных ЭБС, архивов журналов, научных баз и профильных платформ Финансового университета. Длинное описание остается доступным при увеличении текста."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: undefined,
    children: <Button variant="ghost" size="sm">
        Открыть
      </Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Мое расписание",
    description: "ТРПО25-2 (подгруппа 1)",
    trailing: <IconButton ariaLabel="Удалить расписание" variant="ghost">
        <Trash2 />
      </IconButton>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <Text size="caption" tone="muted">
        Временно недоступно
      </Text>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...LongTitle,
  globals: {
    theme: "dark",
    textScale: "large"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "var(--ui-space-2)"
  }}>
      <ServiceCard {...meta.args} />
      <ServiceCard {...meta.args} {...LongTitle.args} />
      <ServiceCard title="Материалы для подготовки" description="Конспекты и учебные материалы по курсам и преподавателям." icon={<FileText />} onClick={() => {}} />
    </div>
}`,...b.parameters?.docs?.source}}};const x=[`Default`,`LongTitle`,`LongSubtitle`,`WithAction`,`WithoutAction`,`Destructive`,`Disabled`,`DarkLargeText`,`Catalog`];export{b as Catalog,y as DarkLargeText,f as Default,_ as Destructive,v as Disabled,m as LongSubtitle,p as LongTitle,h as WithAction,g as WithoutAction,x as __namedExportsOrder,d as default};