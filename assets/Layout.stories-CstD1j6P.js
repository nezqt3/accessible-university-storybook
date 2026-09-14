import{t as e}from"./iframe-BM-w3o-i.js";import{t}from"./Card-BjKyXiM7.js";import"./Card-Cr5xUjgw.js";import{n}from"./Typography-t53iKffO.js";import"./Typography-B8MrsJDF.js";import{n as r,t as i}from"./Layout-fykE6n8v.js";var a=e(),o={title:`UI/Container & Section`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Container ограничивает ширину страницы, а Section задаёт вертикальный ритм, фон и заголовочную область смыслового блока.`}}}};const s={render:()=>(0,a.jsx)(i,{children:(0,a.jsx)(r,{eyebrow:`Возможности`,title:`Заголовок секции`,description:`Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.`,children:(0,a.jsx)(`div`,{style:{display:`grid`,gap:16,gridTemplateColumns:`repeat(auto-fill, minmax(240px, 1fr))`},children:[1,2,3].map(e=>(0,a.jsx)(t,{children:(0,a.jsxs)(n,{size:`sm`,tone:`muted`,children:[`Карточка `,e]})},e))})})})},c={render:()=>(0,a.jsx)(i,{size:`md`,children:(0,a.jsx)(r,{align:`center`,eyebrow:`FAQ`,title:`Частые вопросы`,description:`Вариант с центрированной шапкой для маркетинговых и пустых страниц.`})})},l={render:()=>(0,a.jsx)(r,{background:`soft`,children:(0,a.jsx)(i,{children:(0,a.jsx)(r,{spacing:`md`,eyebrow:`Как это работает`,title:`Секция на мягкой подложке`,description:`Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов.`,style:{padding:0}})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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