import"./useTranslation-5YtSZpFC.js";import{t as e}from"./iframe-DPTPUGSQ.js";import"./createLucideIcon-BWiwbG5R.js";import"./circle-alert-Cz97_TO6.js";import"./circle-check-tKTIJ9QI.js";import"./info-D_yzd_kR.js";import{t}from"./Alert-B2uxChxS.js";import"./InlineSpinner-D0Bs9YLH.js";import"./InlineSpinner-DGBp7q51.js";import{t as n}from"./Button-COxhzMDW.js";import"./Button-BA_jpygv.js";import{t as r}from"./Badge-CQLb1sJ6.js";import"./Badge-Dq9LiM2w.js";import{t as i}from"./Card-BVeQUh2_.js";import"./Card-Doq15t3c.js";import{n as a,t as o}from"./Typography-D3unIxzR.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./FormField-DqtYaEuH.js";import"./FormField-C3pULiZ3.js";import{t as s}from"./Input-BS6i8ro2.js";import"./Input-DXRPRK1S.js";import{t as c}from"./Inline-lw_Pdmz8.js";import"./Inline-Bux_RO3c.js";import{n as l,t as u}from"./Layout-Cltx4-AV.js";import"./Layout-CrjOs2Od.js";import{t as d}from"./Stack-Bg93u7QL.js";import"./Stack-CqlUafn4.js";var f=e(),p={title:`Foundations/Overview`,parameters:{layout:`fullscreen`,docs:{description:{component:`## Доступный ВУЗ: единый визуальный язык

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