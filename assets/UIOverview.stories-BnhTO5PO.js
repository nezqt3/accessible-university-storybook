import"./preload-helper-DGWYlufl.js";import{t as e}from"./iframe-xmEFGyXZ.js";import"./react-dom-f2588Dpb.js";import"./BackButton-CjmghDdP.js";import"./BackButton-D_X6CfTA.js";import"./createLucideIcon-BkSwhVvX.js";import"./check-CHhgYUT1.js";import"./Select-Cr57NlLe.js";import"./chevron-right-WmavVBri.js";import"./circle-alert-DULPQNiQ.js";import"./circle-check-CDBpHmLc.js";import"./Alert-dVRuGxR8.js";import"./search-CBpnCLZI.js";import"./IconButton-CuBWJOi_.js";import"./InlineSpinner-P6IY9r2F.js";import"./InlineSpinner-BpoKxC1k.js";import"./Button-CdSxqIH_.js";import"./Button-CAn4DT-A.js";import"./Badge-BkLoNwT7.js";import"./Badge-CZmZxgAw.js";import{n as t,t as n}from"./Typography-DuL9aY15.js";import"./Typography-PDkJ9EAq.js";import{t as r}from"./Card-DhtQsrVs.js";import"./Checkbox-oXleP-AB.js";import"./CloseButton-lkffYC3C.js";import"./ModalVariants-hYhw1Ova.js";import"./proxy-Cv7iwpv3.js";import"./AnimatePresence-Dmljt9ys.js";import"./Modal-rKt_YpvQ.js";import"./CloseButton-Dn1yZAWY.js";import"./ModalHeader-BGN1Rkmb.js";import"./ModalHeader-oiwYZXDv.js";import"./DatePickerModal-DzITO1No.js";import"./EmptyState-OHUlM9IJ.js";import"./ErrorState-BqRW_o6V.js";import"./FormField-B58b2EE2.js";import"./Card-D3tw1Ehr.js";import"./Grid-CSnIjdz0.js";import"./Inline-D_8uYZm_.js";import"./FormField-DpY-ZWc5.js";import"./Input-FJ29-UGA.js";import{n as i,t as a}from"./Layout-0E6-r1HA.js";import"./NotificationStatus-CXVFIaY7.js";import"./OtpInput-ConyWMQc.js";import"./Spinner-BQ8O1JtT.js";import"./Loader-CmddaJdN.js";import"./PageLoadingFallback-BQ7Jymcr.js";import"./Pagination-N-g4FAOj.js";import"./Pressable-DfNjxrJH.js";import"./Skeleton-CYxq1Rzr.js";import"./Stack-D8bOE8dU.js";import"./Switch-Bs-QjWfX.js";import"./Tabs-DBFvi-lX.js";import"./Textarea-BgPry5NR.js";import"./TicketCodeModal-CcVVevy6.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

Storybook — рабочий каталог компонентов и их состояний. Перед созданием UI сначала найдите здесь существующий компонент, затем проверьте его props и адаптивное поведение.

### Основные правила

- Собирайте страницы из **Container → Section → Stack / Inline / Grid → content**.
- Используйте только дизайн-токены: цвета, spacing, радиусы, typography и размеры controls.
- Компоненты shared/ui не знают о сущностях, API и бизнес-правилах.
- Новый интерактивный компонент обязан иметь focus-visible, disabled и нужные loading/error/empty состояния.
- Не добавляйте градиенты, случайные hex-цвета и CSS-значения «на глаз».

### Темы и доступность

В toolbar можно проверить light/dark тему, палитру, контрастный режим и масштаб текста. Новый компонент должен оставаться читаемым и управляемым во всех этих режимах без page-specific override-стилей.

Полный гайд для разработки: frontend/README.ui.md и docs/dev-context/DESIGN_COMPONENT_GUIDELINES.md.

### Ошибки и поддержка

У ошибки должно быть объяснение и действие «Повторить», когда оно уместно. Если пользователь не может решить проблему сам, направляйте его в [поддержку расписания](https://t.me/schedulesupport).`}}}};const c={render:()=>(0,o.jsx)(a,{size:`md`,children:(0,o.jsx)(i,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-6)`},children:[(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(n,{level:1,size:`lg`,children:`Композиция вместо page-specific CSS`}),(0,o.jsx)(t,{tone:`muted`,children:`Начинайте с layout-примитивов. Они задают общий ритм, сетку и адаптивность.`})]}),(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--ui-space-4)`},children:[(0,o.jsx)(r,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(t,{weight:`semibold`,children:`Токены`}),(0,o.jsx)(t,{size:`sm`,tone:`muted`,children:`Цвета, spacing и typography — только через --ui-*.`})]})}),(0,o.jsx)(r,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(t,{weight:`semibold`,children:`Состояния`}),(0,o.jsx)(t,{size:`sm`,tone:`muted`,children:`Focus, disabled, loading и error — часть API компонента.`})]})}),(0,o.jsx)(r,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(t,{weight:`semibold`,children:`Адаптивность`}),(0,o.jsx)(t,{size:`sm`,tone:`muted`,children:`Проверьте компонент в mobile viewport и при большом тексте.`})]})})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(t,{size:`sm`,tone:`muted`,children:`Смотрите также:`}),(0,o.jsx)(t,{size:`sm`,weight:`semibold`,children:`Layout, Button, FormField, Modal и Feedback.`})]})]})})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Container size="md">
      <Section>
        <div style={{
        display: "grid",
        gap: "var(--ui-space-6)"
      }}>
          <div style={{
          display: "grid",
          gap: "var(--ui-space-2)"
        }}>
            <Heading level={1} size="lg">
              Композиция вместо page-specific CSS
            </Heading>
            <Text tone="muted">
              Начинайте с layout-примитивов. Они задают общий ритм, сетку и адаптивность.
            </Text>
          </div>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--ui-space-4)"
        }}>
            <Card>
              <div style={{
              display: "grid",
              gap: "var(--ui-space-2)"
            }}>
                <Text weight="semibold">Токены</Text>
                <Text size="sm" tone="muted">
                  Цвета, spacing и typography — только через --ui-*.
                </Text>
              </div>
            </Card>
            <Card>
              <div style={{
              display: "grid",
              gap: "var(--ui-space-2)"
            }}>
                <Text weight="semibold">Состояния</Text>
                <Text size="sm" tone="muted">
                  Focus, disabled, loading и error — часть API компонента.
                </Text>
              </div>
            </Card>
            <Card>
              <div style={{
              display: "grid",
              gap: "var(--ui-space-2)"
            }}>
                <Text weight="semibold">Адаптивность</Text>
                <Text size="sm" tone="muted">
                  Проверьте компонент в mobile viewport и при большом тексте.
                </Text>
              </div>
            </Card>
          </div>
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--ui-space-2)"
        }}>
            <Text size="sm" tone="muted">
              Смотрите также:
            </Text>
            <Text size="sm" weight="semibold">
              Layout, Button, FormField, Modal и Feedback.
            </Text>
          </div>
        </div>
      </Section>
    </Container>
}`,...c.parameters?.docs?.source}}};const l=[`Composition`];export{c as Composition,l as __namedExportsOrder,s as default};