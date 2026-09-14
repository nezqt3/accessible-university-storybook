import{t as e}from"./iframe-Ow4Lrb8m.js";import{t}from"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import{n}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import{n as r,t as i}from"./Layout-bf8yQI7p.js";var a=e(),o={title:`Primitives/Layout/Container & Section`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Container ограничивает ширину страницы, а Section задаёт вертикальный ритм, фон и заголовочную область смыслового блока.`}}}};const s={render:()=>(0,a.jsx)(i,{children:(0,a.jsx)(r,{eyebrow:`Возможности`,title:`Заголовок секции`,description:`Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.`,children:(0,a.jsx)(`div`,{style:{display:`grid`,gap:`var(--ui-space-4)`,gridTemplateColumns:`repeat(auto-fill, minmax(min(100%, 15rem), 1fr))`},children:[1,2,3].map(e=>(0,a.jsx)(t,{children:(0,a.jsxs)(n,{size:`sm`,tone:`muted`,children:[`Карточка `,e]})},e))})})})},c={render:()=>(0,a.jsx)(i,{size:`md`,children:(0,a.jsx)(r,{align:`center`,eyebrow:`FAQ`,title:`Частые вопросы`,description:`Центрированная шапка использует ту же типографику и ритм секций.`})})},l={render:()=>(0,a.jsx)(r,{background:`soft`,children:(0,a.jsx)(i,{children:(0,a.jsx)(r,{spacing:`md`,eyebrow:`Как это работает`,title:`Секция на мягкой подложке`,description:`Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов.`,style:{padding:0}})})})},u={...s,globals:{theme:`light`}},d={...s,globals:{theme:`dark`}},f={...s,globals:{textScale:`large`}},p={render:()=>(0,a.jsx)(i,{size:`md`,children:(0,a.jsx)(r,{title:`Подробная информация о мероприятии межфакультетской научно-практической конференции`,description:`Заголовок секции использует section token и остаётся компактнее заголовка страницы. Длинные строки переносятся при увеличенном тексте.`,children:(0,a.jsx)(n,{children:`https://university.example/very-long-unbroken-address-to-a-student-service`})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Section eyebrow="Возможности" title="Заголовок секции" description="Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.">
        <div style={{
        display: "grid",
        gap: "var(--ui-space-4)",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))"
      }}>
          {[1, 2, 3].map(index => <Card key={index}>
              <Text size="sm" tone="muted">
                Карточка {index}
              </Text>
            </Card>)}
        </div>
      </Section>
    </Container>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Container size="md">
      <Section align="center" eyebrow="FAQ" title="Частые вопросы" description="Центрированная шапка использует ту же типографику и ритм секций." />
    </Container>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Section background="soft">
      <Container>
        <Section spacing="md" eyebrow="Как это работает" title="Секция на мягкой подложке" description="Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов." style={{
        padding: 0
      }} />
      </Container>
    </Section>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Container size="md">
      <Section title="Подробная информация о мероприятии межфакультетской научно-практической конференции" description="Заголовок секции использует section token и остаётся компактнее заголовка страницы. Длинные строки переносятся при увеличенном тексте.">
        <Text>https://university.example/very-long-unbroken-address-to-a-student-service</Text>
      </Section>
    </Container>
}`,...p.parameters?.docs?.source}}};const m=[`Default`,`Centered`,`SoftBackground`,`Light`,`Dark`,`LargeText`,`LongContent`];export{c as Centered,d as Dark,s as Default,f as LargeText,u as Light,p as LongContent,l as SoftBackground,m as __namedExportsOrder,o as default};