import"./preload-helper-DGWYlufl.js";import{t as e}from"./iframe-CZbR_cjA.js";import"./react-dom-TnE5niUB.js";import"./BackButton-DtoqRGeq.js";import"./BackButton-D_X6CfTA.js";import"./createLucideIcon-Bpzycvdh.js";import"./check-BFU3PnRY.js";import"./Select-COxkf5QL.js";import"./chevron-right-BNes4tjn.js";import"./circle-alert-BlQi-23u.js";import"./circle-check-DUHp48Uq.js";import"./Alert-DV0VWpMw.js";import"./search-5baPABoq.js";import"./IconButton-PYpQ6Qia.js";import"./InlineSpinner-LqY_6uni.js";import"./InlineSpinner-BpoKxC1k.js";import"./Button-BneHRs15.js";import"./Button-CAn4DT-A.js";import"./Badge-DF9ntPtF.js";import"./Badge-CZmZxgAw.js";import{n as t,t as n}from"./Typography-BJrQRF5y.js";import"./Typography-PDkJ9EAq.js";import{t as r}from"./Card-DMUoG7fl.js";import"./Checkbox-CHuVRYWe.js";import"./CloseButton-BBfRC20G.js";import"./ModalVariants-CCJ82Nxx.js";import"./proxy-C4LjvlQV.js";import"./AnimatePresence-OkpQHog0.js";import"./Modal-rKt_YpvQ.js";import"./CloseButton-Dn1yZAWY.js";import"./ModalHeader-N9ltfUjv.js";import"./ModalHeader-oiwYZXDv.js";import"./DatePickerModal-CnAioJkE.js";import"./EmptyState-9vZWLNWC.js";import"./ErrorState-owA-Ooq3.js";import"./FormField-CbB019fA.js";import"./Card-D3tw1Ehr.js";import"./Grid-CogAZZiP.js";import"./Inline-BMs9qwf0.js";import"./FormField-DpY-ZWc5.js";import"./Input-CPSHiw0c.js";import{n as i,t as a}from"./Layout-vueD_rID.js";import"./NotificationStatus-DGLZn7Nf.js";import"./OtpInput-DdXU3tpo.js";import"./Spinner-BQnzzE4w.js";import"./Loader-Bb8m4MEw.js";import"./PageLoadingFallback-BYRrEt8h.js";import"./Pagination-Co-TndiD.js";import"./Pressable-DuVGeqLH.js";import"./Skeleton-IvQnRDXu.js";import"./Stack-DCb1Tk4l.js";import"./Switch-BMRhe6Ye.js";import"./Tabs-DSEtkELG.js";import"./Textarea-Dkt0O-cG.js";import"./TicketCodeModal-BaDRcxVW.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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