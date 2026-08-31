import"./preload-helper-DGWYlufl.js";import"./useTranslation-sVHVO_Qe.js";import{t as e}from"./iframe-C2TMhgpW.js";import"./react-dom-BTL4yL8g.js";import"./BackButton-CdpTejp7.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-FeGR8gI-.js";import"./check-C6dm6nZa.js";import"./Select-DwTFOMVj.js";import"./chevron-right-DQtxWMvI.js";import"./circle-alert-CAW07WGx.js";import"./circle-check-B5emQnoy.js";import"./Alert-CkV_fGCt.js";import"./search-BMH1t3Xf.js";import"./IconButton-Bc-x9w7d.js";import"./InlineSpinner-B8Lj1vR8.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-BlEcxLT4.js";import"./Button-DIRJwf5Q.js";import"./Badge-DCr6en1D.js";import"./Badge-DMl4baAh.js";import{n as t,t as n}from"./Typography-CnFS94N7.js";import"./Typography-C7gb1wqM.js";import{t as r}from"./Card-jbJimQKu.js";import"./Checkbox-DFHu6aBt.js";import"./CloseButton-BDoB7VXo.js";import"./ModalVariants-CMDN034p.js";import"./proxy-CcVOb4qJ.js";import"./AnimatePresence-uPADdqh8.js";import"./Modal-m0gwBJUB.js";import"./CloseButton-B0UpMFpm.js";import"./ModalHeader-kCJtIR_v.js";import"./ModalHeader-mPNiZXgr.js";import"./DatePickerModal-xjm9rkfj.js";import"./EmptyState-FJ1wTPjx.js";import"./ErrorState-C9GzpU_W.js";import"./FormField-DfmXYCG3.js";import"./Card-9ItLxeA_.js";import"./Grid-C2zlUX2e.js";import"./Inline-C2wa3kn8.js";import"./FormField-BwUOpWoX.js";import"./Input-B0Fis-fK.js";import{n as i,t as a}from"./Layout-dLwUROVC.js";import"./NotificationStatus-ufeoW9RA.js";import"./OtpInput-B1y7-0zN.js";import"./Spinner-C1cjXJ0P.js";import"./Loader-BUMY3rVE.js";import"./PageLoadingFallback-CnWoyEaD.js";import"./Pagination-B5GaJg1U.js";import"./Pressable-Ch_R48oB.js";import"./Skeleton-DZHRUSaP.js";import"./Stack-CdbZ2-f1.js";import"./Switch-CV9UBVJT.js";import"./Tabs-DeMfoG-P.js";import"./Textarea-CplLSa7I.js";import"./TicketCodeModal-DyP-avOB.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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