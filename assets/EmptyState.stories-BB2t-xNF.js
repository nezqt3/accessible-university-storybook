import{t as e}from"./iframe-t09rk9us.js";import{t}from"./createLucideIcon-HOcYDLj_.js";import"./InlineSpinner-5wfFLpjM.js";import"./InlineSpinner-BpoKxC1k.js";import{t as n}from"./Button-CeBfassJ.js";import"./Button-CAn4DT-A.js";import{t as r}from"./EmptyState-CaDrj8gS.js";var i=t(`inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),a=t(`search-x`,[[`path`,{d:`m13.5 8.5-5 5`,key:`1cs55j`}],[`path`,{d:`m8.5 8.5 5 5`,key:`a8mexj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]]),o=e(),s={title:`UI/EmptyState`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Пустое состояние для списков и разделов без данных. Может содержать иконку, пояснение и основное действие.`}}},args:{title:`Ничего не найдено`,description:`Попробуйте изменить запрос, язык или тип доступа.`}};const c={},l={args:{icon:(0,o.jsx)(a,{size:22})}},u={args:{icon:(0,o.jsx)(i,{size:22}),title:`Заявок пока нет`,description:`Когда вы подадите первую заявку, она появится здесь.`,action:(0,o.jsx)(n,{variant:`secondary`,size:`sm`,shape:`rounded`,children:`Подать заявку`})}},d={args:{size:`sm`,description:void 0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <SearchX size={22} />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox size={22} />,
    title: "Заявок пока нет",
    description: "Когда вы подадите первую заявку, она появится здесь.",
    action: <Button variant="secondary" size="sm" shape="rounded">
        Подать заявку
      </Button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    description: undefined
  }
}`,...d.parameters?.docs?.source}}};const f=[`Default`,`WithIcon`,`WithAction`,`Compact`];export{d as Compact,c as Default,u as WithAction,l as WithIcon,f as __namedExportsOrder,s as default};