import"./useTranslation-CZVpUEvE.js";import{t as e}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import"./circle-alert-c4qnadez.js";import"./circle-check-DNyOJUlI.js";import{t}from"./Alert-BCXKhV4A.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import{t as n}from"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import{t as r}from"./Badge-DYo_OMFx.js";import"./Badge-BilbQ7OI.js";import{t as i}from"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import{n as a,t as o}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./Alert-ys5X1zSQ.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import{t as s}from"./Input-Aczuq6Jz.js";import"./Input-CZx1ckHV.js";import{t as c}from"./Inline-Bn5Qldda.js";import"./Inline-C7M9bN4S.js";import{n as l,t as u}from"./Layout-bf8yQI7p.js";import"./Layout-BM_IwlmX.js";import{t as d}from"./Stack-B9h0CGiv.js";import"./Stack-duc46O7L.js";var f=e(),p={title:`Foundations/Overview`,parameters:{layout:`fullscreen`,docs:{description:{component:`## Доступный ВУЗ: единый визуальный язык

Рабочий каталог начинается с Foundations, затем Primitives и States. Экраны собираются из проверенных компонентов.

- Page large 28 / page 24 / section 19 / card 17. Основные веса 400 и 500, заголовки 600.
- Сначала информация: нейтральные поверхности, перенос названий, один акцент для действия или состояния.
- Focus находится внутри bounds; pressed и disabled не меняют геометрию. Touch target не меньше 44px.
- Цвета, интервалы, радиусы, typography и motion приходят из packages/tokens/tokens.json.
- Системные reduced-motion, Light/Dark, язык и масштаб текста проверяются до использования компонента на экране.

Для интерактивных состояний удерживайте кнопку/карточку или используйте Tab. Stories не добавляют production props ради имитации pressed.`}}}};const m={render:()=>(0,f.jsx)(u,{size:`md`,children:(0,f.jsxs)(l,{children:[(0,f.jsxs)(d,{gap:`2`,children:[(0,f.jsx)(o,{level:1,children:`Компоненты одного продукта`}),(0,f.jsx)(a,{tone:`muted`,children:`Информация задаёт композицию, tokens задают общий ритм.`})]}),(0,f.jsxs)(i,{children:[(0,f.jsxs)(i.Header,{children:[(0,f.jsx)(o,{level:3,children:`Длинное название остаётся полностью доступным`}),(0,f.jsx)(r,{tone:`neutral`,children:`В обработке`})]}),(0,f.jsx)(i.Content,{children:(0,f.jsx)(a,{size:`sm`,tone:`muted`,children:`Поверхность отделяет связанную информацию без рамки и декоративных слоёв.`})})]}),(0,f.jsxs)(l,{title:`Поля и действия`,spacing:`md`,children:[(0,f.jsx)(s,{label:`Подразделение`,placeholder:`Введите название подразделения`}),(0,f.jsxs)(c,{wrap:!0,children:[(0,f.jsx)(n,{children:`Продолжить`}),(0,f.jsx)(n,{variant:`secondary`,children:`Отмена`}),(0,f.jsx)(n,{disabled:!0,children:`Недоступно`})]})]}),(0,f.jsx)(t,{tone:`info`,children:`Проверьте эту композицию на 320px и при 125% текста.`})]})})},h={...m,globals:{theme:`light`}},g={...m,globals:{theme:`dark`}},_={...m,globals:{textScale:`large`}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Container size="md">
      <Section>
        <Stack gap="2">
          <Heading level={1}>Компоненты одного продукта</Heading>
          <Text tone="muted">Информация задаёт композицию, tokens задают общий ритм.</Text>
        </Stack>
        <Card>
          <Card.Header>
            <Heading level={3}>Длинное название остаётся полностью доступным</Heading>
            <Badge tone="neutral">В обработке</Badge>
          </Card.Header>
          <Card.Content>
            <Text size="sm" tone="muted">
              Поверхность отделяет связанную информацию без рамки и декоративных слоёв.
            </Text>
          </Card.Content>
        </Card>
        <Section title="Поля и действия" spacing="md">
          <Input label="Подразделение" placeholder="Введите название подразделения" />
          <Inline wrap>
            <Button>Продолжить</Button>
            <Button variant="secondary">Отмена</Button>
            <Button disabled>Недоступно</Button>
          </Inline>
        </Section>
        <Alert tone="info">Проверьте эту композицию на 320px и при 125% текста.</Alert>
      </Section>
    </Container>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Composition,
  globals: {
    theme: "light"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Composition,
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Composition,
  globals: {
    textScale: "large"
  }
}`,..._.parameters?.docs?.source}}};const v=[`Composition`,`Light`,`Dark`,`LargeText`];export{m as Composition,g as Dark,_ as LargeText,h as Light,v as __namedExportsOrder,p as default};