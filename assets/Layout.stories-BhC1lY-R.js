import{t as e}from"./iframe-DysUAiE4.js";import{n as t}from"./Typography-DUVCGOuV.js";import"./Typography-C56SpnO3.js";import{t as n}from"./Card-DnpkonU1.js";var r=e();function i({size:e=`lg`,className:t=``,children:n,...i}){return(0,r.jsx)(`div`,{...i,className:[`ui-container`,`ui-container--${e}`,t].filter(Boolean).join(` `),children:n})}function a({eyebrow:e,title:t,description:n,align:i=`start`,spacing:a=`md`,background:o=`none`,className:s=``,children:c,...l}){let u=!!(e||t||n);return(0,r.jsxs)(`section`,{...l,className:[`ui-section`,`ui-section--${a}`,`ui-section--bg-${o}`,i===`center`?`ui-section--center`:``,s].filter(Boolean).join(` `),children:[u?(0,r.jsxs)(`header`,{className:`ui-section__header`,children:[e?(0,r.jsx)(`p`,{className:`ui-section__eyebrow`,children:e}):null,t?(0,r.jsx)(`h2`,{className:`ui-section__title`,children:t}):null,n?(0,r.jsx)(`p`,{className:`ui-section__description`,children:n}):null]}):null,c]})}i.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{size:{required:!1,tsType:{name:`union`,raw:`"md" | "lg"`,elements:[{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`md 960px, lg 1100px`,defaultValue:{value:`"lg"`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`HTMLAttributes`]},a.__docgenInfo={description:``,methods:[],displayName:`Section`,props:{eyebrow:{required:!1,tsType:{name:`ReactNode`},description:`Надзаголовок-eyebrow`},title:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`}]},description:``,defaultValue:{value:`"start"`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`"md" | "lg"`,elements:[{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Вертикальный ритм: md — стандартная секция, lg — крупная`,defaultValue:{value:`"md"`,computed:!1}},background:{required:!1,tsType:{name:`union`,raw:`"none" | "soft"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"soft"`}]},description:`Фон: transparent (по умолчанию) или мягкая подложка`,defaultValue:{value:`"none"`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`Omit`]};var o={title:`UI/Container & Section`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Container ограничивает ширину страницы, а Section задаёт вертикальный ритм, фон и заголовочную область смыслового блока.`}}}};const s={render:()=>(0,r.jsx)(i,{children:(0,r.jsx)(a,{eyebrow:`Возможности`,title:`Заголовок секции`,description:`Описание секции: Container ограничивает ширину контента, Section задает вертикальный ритм и шапку.`,children:(0,r.jsx)(`div`,{style:{display:`grid`,gap:16,gridTemplateColumns:`repeat(auto-fill, minmax(240px, 1fr))`},children:[1,2,3].map(e=>(0,r.jsx)(n,{children:(0,r.jsxs)(t,{size:`sm`,tone:`muted`,children:[`Карточка `,e]})},e))})})})},c={render:()=>(0,r.jsx)(i,{size:`md`,children:(0,r.jsx)(a,{align:`center`,eyebrow:`FAQ`,title:`Частые вопросы`,description:`Вариант с центрированной шапкой для маркетинговых и пустых страниц.`})})},l={render:()=>(0,r.jsx)(a,{background:`soft`,children:(0,r.jsx)(i,{children:(0,r.jsx)(a,{spacing:`md`,eyebrow:`Как это работает`,title:`Секция на мягкой подложке`,description:`Чередование белого фона и surface-soft отделяет смысловые блоки без теней и градиентов.`,style:{padding:0}})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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