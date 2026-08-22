import{t as e}from"./iframe-CZbR_cjA.js";import"./createLucideIcon-Bpzycvdh.js";import{t}from"./calendar-days-CqAftZhd.js";import{t as n}from"./map-pin-EhD4TX2I.js";import"./InlineSpinner-LqY_6uni.js";import"./InlineSpinner-BpoKxC1k.js";import{t as r}from"./Button-BneHRs15.js";import"./Button-CAn4DT-A.js";import{t as i}from"./Badge-DF9ntPtF.js";import"./Badge-CZmZxgAw.js";import{n as a,t as o}from"./Typography-BJrQRF5y.js";import"./Typography-PDkJ9EAq.js";import{t as s}from"./Card-DMUoG7fl.js";var c=e(),l={title:`UI/Card`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Контейнер связанного контента. Составные части Header, Content и Footer помогают сохранять одинаковую структуру карточек.`}}},args:{children:`Карточка`}};const u={render:()=>(0,c.jsxs)(s,{style:{maxWidth:420},children:[(0,c.jsxs)(s.Header,{children:[(0,c.jsx)(o,{level:3,children:`Экзамен по математическому анализу`}),(0,c.jsx)(i,{tone:`info`,children:`Экзамен`})]}),(0,c.jsx)(s.Content,{children:(0,c.jsx)(a,{size:`sm`,tone:`muted`,children:`Подробные сведения о времени, аудитории и преподавателе появятся ближе к сессии.`})})]})},d={render:()=>(0,c.jsxs)(s,{style:{maxWidth:420},children:[(0,c.jsxs)(s.Header,{children:[(0,c.jsx)(o,{level:3,children:`Счет на оплату обучения`}),(0,c.jsx)(i,{tone:`warning`,children:`Ожидает оплаты`})]}),(0,c.jsx)(s.Content,{children:(0,c.jsx)(a,{size:`sm`,tone:`muted`,children:`Осенний семестр, очная форма. Срок оплаты — до 25 сентября.`})}),(0,c.jsxs)(s.Footer,{children:[(0,c.jsx)(r,{size:`sm`,variant:`secondary`,shape:`rounded`,children:`Подробнее`}),(0,c.jsx)(r,{size:`sm`,shape:`rounded`,children:`Оплатить`})]})]})},f={render:()=>(0,c.jsxs)(s,{interactive:!0,onClick:()=>{},style:{maxWidth:420},"aria-label":`Открыть мероприятие`,children:[(0,c.jsxs)(s.Header,{children:[(0,c.jsx)(o,{level:3,children:`День открытых дверей`}),(0,c.jsx)(i,{tone:`brand`,children:`Мероприятие`})]}),(0,c.jsxs)(s.Content,{children:[(0,c.jsx)(a,{size:`sm`,tone:`muted`,children:`Кликабельная карточка целиком — рендерится как кнопка, с hover и focus-состояниями.`}),(0,c.jsxs)(a,{as:`span`,size:`caption`,tone:`muted`,children:[(0,c.jsx)(t,{size:14,style:{verticalAlign:`-2px`,marginRight:4}}),`12 октября ·`,` `,(0,c.jsx)(n,{size:14,style:{verticalAlign:`-2px`,marginRight:4,marginLeft:8}}),`Главный корпус`]})]})]})},p={render:()=>(0,c.jsxs)(s,{elevated:!0,padding:`lg`,style:{maxWidth:420},children:[(0,c.jsx)(o,{level:3,children:`Карточка с мягкой тенью`}),(0,c.jsx)(a,{size:`sm`,tone:`muted`,children:`Тень используется редко — только когда блок должен отделяться от подложки.`})]})},m={render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:16,maxWidth:420},children:[(0,c.jsx)(s,{padding:`sm`,children:(0,c.jsx)(a,{size:`sm`,children:`padding=sm`})}),(0,c.jsx)(s,{padding:`md`,children:(0,c.jsx)(a,{size:`sm`,children:`padding=md`})}),(0,c.jsx)(s,{padding:`lg`,children:(0,c.jsx)(a,{size:`sm`,children:`padding=lg`})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 420
  }}>
      <Card.Header>
        <Heading level={3}>Экзамен по математическому анализу</Heading>
        <Badge tone="info">Экзамен</Badge>
      </Card.Header>
      <Card.Content>
        <Text size="sm" tone="muted">
          Подробные сведения о времени, аудитории и преподавателе появятся ближе к сессии.
        </Text>
      </Card.Content>
    </Card>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 420
  }}>
      <Card.Header>
        <Heading level={3}>Счет на оплату обучения</Heading>
        <Badge tone="warning">Ожидает оплаты</Badge>
      </Card.Header>
      <Card.Content>
        <Text size="sm" tone="muted">
          Осенний семестр, очная форма. Срок оплаты — до 25 сентября.
        </Text>
      </Card.Content>
      <Card.Footer>
        <Button size="sm" variant="secondary" shape="rounded">
          Подробнее
        </Button>
        <Button size="sm" shape="rounded">
          Оплатить
        </Button>
      </Card.Footer>
    </Card>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Card interactive onClick={() => {}} style={{
    maxWidth: 420
  }} aria-label="Открыть мероприятие">
      <Card.Header>
        <Heading level={3}>День открытых дверей</Heading>
        <Badge tone="brand">Мероприятие</Badge>
      </Card.Header>
      <Card.Content>
        <Text size="sm" tone="muted">
          Кликабельная карточка целиком — рендерится как кнопка, с hover и focus-состояниями.
        </Text>
        <Text as="span" size="caption" tone="muted">
          <CalendarDays size={14} style={{
          verticalAlign: "-2px",
          marginRight: 4
        }} />
          12 октября ·{" "}
          <MapPin size={14} style={{
          verticalAlign: "-2px",
          marginRight: 4,
          marginLeft: 8
        }} />
          Главный корпус
        </Text>
      </Card.Content>
    </Card>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card elevated padding="lg" style={{
    maxWidth: 420
  }}>
      <Heading level={3}>Карточка с мягкой тенью</Heading>
      <Text size="sm" tone="muted">
        Тень используется редко — только когда блок должен отделяться от подложки.
      </Text>
    </Card>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16,
    maxWidth: 420
  }}>
      <Card padding="sm">
        <Text size="sm">padding=sm</Text>
      </Card>
      <Card padding="md">
        <Text size="sm">padding=md</Text>
      </Card>
      <Card padding="lg">
        <Text size="sm">padding=lg</Text>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}};const h=[`Default`,`WithFooter`,`Interactive`,`Elevated`,`Paddings`];export{u as Default,p as Elevated,f as Interactive,m as Paddings,d as WithFooter,h as __namedExportsOrder,l as default};