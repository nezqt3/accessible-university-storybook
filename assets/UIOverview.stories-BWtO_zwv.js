import"./preload-helper-DGWYlufl.js";import{t as e}from"./iframe-BUpvSL3s.js";import"./react-dom-ChKIPWj_.js";import"./BackButton-GfeXKxxU.js";import"./BackButton-D_X6CfTA.js";import"./createLucideIcon-oToEMaPF.js";import"./check-Cviv4sHY.js";import"./Select-mzOTHFf9.js";import"./chevron-right-swJsY60_.js";import"./circle-alert-l_EZh_vs.js";import"./circle-check-BFGdn-Ul.js";import"./Alert-sCYhCfEY.js";import"./search-DGC1Axzj.js";import"./IconButton-CeHgr32I.js";import"./InlineSpinner-DiTzJJvO.js";import"./InlineSpinner-BpoKxC1k.js";import"./Button-CYhWUKa6.js";import"./Button-CAn4DT-A.js";import"./Badge-CUz7ScOr.js";import"./Badge-CZmZxgAw.js";import{n as t,t as n}from"./Typography-DHGfxIpM.js";import"./Typography-PDkJ9EAq.js";import{t as r}from"./Card-BazrVLQ5.js";import"./Checkbox-COcu6VCQ.js";import"./CloseButton-DRuOpyoP.js";import"./ModalVariants-BPWdZH6z.js";import"./proxy-BAU0cDcy.js";import"./AnimatePresence-BMjjjLSl.js";import"./Modal-rKt_YpvQ.js";import"./CloseButton-Dn1yZAWY.js";import"./ModalHeader-CROiQqQA.js";import"./ModalHeader-oiwYZXDv.js";import"./DatePickerModal-DNHmvjMO.js";import"./EmptyState-CEhTantL.js";import"./ErrorState-Dx7YIdE-.js";import"./FormField-C-6dmC5e.js";import"./Card-D3tw1Ehr.js";import"./Grid-Bl8QRU0x.js";import"./Inline-X_xT7ZX-.js";import"./FormField-DpY-ZWc5.js";import"./Input-BNhe47Io.js";import{n as i,t as a}from"./Layout-4pR1764F.js";import"./NotificationStatus-C4oW7QwO.js";import"./OtpInput-BAy7yyh5.js";import"./Spinner-YD-IO7M1.js";import"./Loader-BsE-CUji.js";import"./PageLoadingFallback-BuuW9kSQ.js";import"./Pagination-MsyAxRS5.js";import"./Pressable-CpxgprMJ.js";import"./Skeleton-hBDHntN-.js";import"./Stack-Dg6ymTWx.js";import"./Switch-0x5uK7v0.js";import"./Tabs-qEc3Vu2G.js";import"./Textarea-S-P5ZNtf.js";import"./TicketCodeModal-eBPW5NvQ.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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