import{t as e}from"./iframe-DysUAiE4.js";import{t}from"./createLucideIcon-f6F9StUt.js";import"./InlineSpinner-DmEOgWO7.js";import"./InlineSpinner-tBXolJtQ.js";import{t as n}from"./Button-B0E6xdlf.js";import"./Button--iBZAzrS.js";var r=t(`inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),i=t(`search-x`,[[`path`,{d:`m13.5 8.5-5 5`,key:`1cs55j`}],[`path`,{d:`m8.5 8.5 5 5`,key:`a8mexj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]]),a=e();function o({icon:e,title:t,description:n,action:r,size:i=`md`,className:o=``,...s}){return(0,a.jsxs)(`div`,{...s,className:[`ui-empty-state`,`ui-empty-state--${i}`,o].filter(Boolean).join(` `),children:[e?(0,a.jsx)(`span`,{className:`ui-empty-state__icon`,"aria-hidden":`true`,children:e}):null,(0,a.jsx)(`p`,{className:`ui-empty-state__title`,children:t}),n?(0,a.jsx)(`p`,{className:`ui-empty-state__description`,children:n}):null,r?(0,a.jsx)(`div`,{className:`ui-empty-state__action`,children:r}):null]})}o.__docgenInfo={description:``,methods:[],displayName:`EmptyState`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:`Действие, например <Button variant="secondary">Сбросить фильтры</Button>`},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var s={title:`UI/EmptyState`,component:o,parameters:{layout:`padded`,docs:{description:{component:`Пустое состояние для списков и разделов без данных. Может содержать иконку, пояснение и основное действие.`}}},args:{title:`Ничего не найдено`,description:`Попробуйте изменить запрос, язык или тип доступа.`}};const c={},l={args:{icon:(0,a.jsx)(i,{size:22})}},u={args:{icon:(0,a.jsx)(r,{size:22}),title:`Заявок пока нет`,description:`Когда вы подадите первую заявку, она появится здесь.`,action:(0,a.jsx)(n,{variant:`secondary`,size:`sm`,shape:`rounded`,children:`Подать заявку`})}},d={args:{size:`sm`,description:void 0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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