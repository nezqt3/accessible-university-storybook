import"./preload-helper-DGWYlufl.js";import"./useTranslation-CTRUKooY.js";import{t as e}from"./iframe-B6c5s-S3.js";import"./react-dom-sJTrlW1X.js";import"./BackButton-B4biQ11D.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-iGCZoKms.js";import"./check-BRXijn6Y.js";import"./Select-D23I--QJ.js";import"./chevron-right-D5S238Pj.js";import"./circle-alert-BVBus0Ek.js";import"./circle-check-uxZcAImB.js";import"./Alert-BV3f009K.js";import"./search-CCDP6xzR.js";import"./IconButton-B4gX-abF.js";import"./InlineSpinner-CGwDU4C2.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-ItG4GnUI.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-BEk7esoe.js";import"./CloseButton-d9YZdAKA.js";import"./Pressable-BF81-xvS.js";import"./Badge-D76EvjAL.js";import"./Badge-CZmZxgAw.js";import{t}from"./Card-DgHfbQ67.js";import"./Card-Cr5xUjgw.js";import{n,t as r}from"./Typography-CFDVaaDB.js";import"./Typography-B8MrsJDF.js";import"./EmptyState-Dax-tdy_.js";import"./proxy-DcJqY3fP.js";import"./AnimatePresence-uQbzv6-b.js";import"./ModalVariants-CsrEFgR7.js";import"./ErrorState-Drfn4cce.js";import"./Spinner-TJKGGgP7.js";import"./Loader-CUMIIsF4.js";import"./PageLoadingFallback-D8TajUPO.js";import"./NotificationStatus-DMK2tHMC.js";import"./Skeleton-BQ0UtgyX.js";import"./Checkbox-CQtFdYmr.js";import"./FormField-ByZ-1q15.js";import"./FormField-DGr6n9zh.js";import"./Input-CfAHXEa-.js";import"./OtpInput-DnpApV0d.js";import"./Modal-BNiAKftz.js";import"./ModalHeader-DbQ_KfxS.js";import"./ModalHeader-TY_W7qiM.js";import"./Switch-CrMPaLNX.js";import"./Textarea-nfxGbcAY.js";import"./Grid-CouiFqkx.js";import"./Inline-BltJCvwY.js";import{n as i,t as a}from"./Layout-BF9XoMoJ.js";import"./Stack-Dzv437aw.js";import"./Pagination-DzxzfRyL.js";import"./Tabs-CBWFJdX0.js";import"./DatePickerModal-C9Cc4AO6.js";import"./TicketCodeModal-OJY3zp57.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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

У ошибки должно быть объяснение и действие «Повторить», когда оно уместно. Если пользователь не может решить проблему сам, направляйте его в [поддержку расписания](https://t.me/schedulesupport).`}}}};const c={render:()=>(0,o.jsx)(a,{size:`md`,children:(0,o.jsx)(i,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-6)`},children:[(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(r,{level:1,size:`lg`,children:`Композиция вместо page-specific CSS`}),(0,o.jsx)(n,{tone:`muted`,children:`Начинайте с layout-примитивов. Они задают общий ритм, сетку и адаптивность.`})]}),(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--ui-space-4)`},children:[(0,o.jsx)(t,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(n,{weight:`semibold`,children:`Токены`}),(0,o.jsx)(n,{size:`sm`,tone:`muted`,children:`Цвета, spacing и typography — только через --ui-*.`})]})}),(0,o.jsx)(t,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(n,{weight:`semibold`,children:`Состояния`}),(0,o.jsx)(n,{size:`sm`,tone:`muted`,children:`Focus, disabled, loading и error — часть API компонента.`})]})}),(0,o.jsx)(t,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(n,{weight:`semibold`,children:`Адаптивность`}),(0,o.jsx)(n,{size:`sm`,tone:`muted`,children:`Проверьте компонент в mobile viewport и при большом тексте.`})]})})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--ui-space-2)`},children:[(0,o.jsx)(n,{size:`sm`,tone:`muted`,children:`Смотрите также:`}),(0,o.jsx)(n,{size:`sm`,weight:`semibold`,children:`Layout, Button, FormField, Modal и Feedback.`})]})]})})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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