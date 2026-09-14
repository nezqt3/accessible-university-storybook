import{t as e,y as t}from"./iframe-b1ov7CI7.js";import{n}from"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import{t as r}from"./Stack-BQ1EjeYw.js";import"./Stack-duc46O7L.js";import{t as i}from"./Radio-uobrQSU6.js";var a=t(),o=e(),s={title:`Primitives/Radio`,component:i,args:{label:`Светлая тема`,name:`theme`,value:`light`},parameters:{docs:{description:{component:`Одиночный выбор на native input type=radio. Общее name сохраняет клавиатурную группу; область касания не менее44px.`}}}};const c={},l={args:{defaultChecked:!0}},u={args:{disabled:!0,defaultChecked:!0}},d={args:{label:`Получить документы в учебном подразделении международных образовательных программ`,description:`Москва, Ленинградский проспект, дом 49, корпус 2, кабинет ответственного сотрудника`}},f={args:{error:`Выберите один из доступных вариантов`}},p={globals:{theme:`light`}},m={globals:{theme:`dark`}},h={...d,globals:{textScale:`large`}},g={render:function(){let[e,t]=(0,a.useState)(`light`);return(0,o.jsxs)(r,{gap:`3`,role:`group`,"aria-label":`Тема оформления`,children:[[{value:`light`,label:`Светлая`},{value:`dark`,label:`Тёмная`},{value:`system`,label:`Системная`,disabled:!0}].map(n=>(0,o.jsx)(i,{...n,name:`story-theme`,checked:e===n.value,onChange:e=>t(e.target.value)},n.value)),(0,o.jsxs)(n,{size:`sm`,role:`status`,children:[`Выбрано: `,e]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Получить документы в учебном подразделении международных образовательных программ",
    description: "Москва, Ленинградский проспект, дом 49, корпус 2, кабинет ответственного сотрудника"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Выберите один из доступных вариантов"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...LongLabel,
  globals: {
    textScale: "large"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function KeyboardGroupExample() {
    const [value, setValue] = useState("light");
    return <Stack gap="3" role="group" aria-label="Тема оформления">
        {[{
        value: "light",
        label: "Светлая"
      }, {
        value: "dark",
        label: "Тёмная"
      }, {
        value: "system",
        label: "Системная",
        disabled: true
      }].map(option => <Radio key={option.value} {...option} name="story-theme" checked={value === option.value} onChange={event => setValue(event.target.value)} />)}
        <Text size="sm" role="status">
          Выбрано: {value}
        </Text>
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};const _=[`Default`,`Selected`,`Disabled`,`LongLabel`,`Error`,`Light`,`Dark`,`LargeText`,`KeyboardGroup`];export{m as Dark,c as Default,u as Disabled,f as Error,g as KeyboardGroup,h as LargeText,p as Light,d as LongLabel,l as Selected,_ as __namedExportsOrder,s as default};