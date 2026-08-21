import{t as e}from"./iframe-t09rk9us.js";import{n as t}from"./Typography-DX5gMH-6.js";import"./Typography-PDkJ9EAq.js";import{t as n}from"./Card--geQPkYE.js";import"./Card-D3tw1Ehr.js";import{n as r,t as i}from"./Layout-By09LlHL.js";var a=e(),o={title:`UI/Container & Section`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Container ограничивает ширину страницы, а Section задаёт вертикальный ритм, фон и заголовочную область смыслового блока.`}}}};const s={render:()=>(0,a.jsx)(i,{children:(0,a.jsx)(r,{eyebrow:`Возможности`,title:`Заголовок секции`,description:`Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.`,children:(0,a.jsx)(`div`,{style:{display:`grid`,gap:16,gridTemplateColumns:`repeat(auto-fill, minmax(240px, 1fr))`},children:[1,2,3].map(e=>(0,a.jsx)(n,{children:(0,a.jsxs)(t,{size:`sm`,tone:`muted`,children:[`Карточка `,e]})},e))})})})},c={render:()=>(0,a.jsx)(i,{size:`md`,children:(0,a.jsx)(r,{align:`center`,eyebrow:`FAQ`,title:`Частые вопросы`,description:`Вариант с центрированной шапкой для маркетинговых и пустых страниц.`})})},l={render:()=>(0,a.jsx)(r,{background:`soft`,children:(0,a.jsx)(i,{children:(0,a.jsx)(r,{spacing:`md`,eyebrow:`Как это работает`,title:`Секция на мягкой подложке`,description:`Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов.`,style:{padding:0}})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Section eyebrow="Возможности" title="Заголовок секции" description="Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.">
        <div style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))"
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
      <Section align="center" eyebrow="FAQ" title="Частые вопросы" description="Вариант с центрированной шапкой для маркетинговых и пустых страниц." />
    </Container>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Section background="soft">
      <Container>
        <Section spacing="md" eyebrow="Как это работает" title="Секция на мягкой подложке" description="Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов." style={{
        padding: 0
      }} />
      </Container>
    </Section>
}`,...l.parameters?.docs?.source}}};const u=[`Default`,`Centered`,`SoftBackground`];export{c as Centered,s as Default,l as SoftBackground,u as __namedExportsOrder,o as default};