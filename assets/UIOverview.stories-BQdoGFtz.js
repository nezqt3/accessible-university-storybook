import"./preload-helper-DGWYlufl.js";import"./useTranslation-CxtuRs4o.js";import{t as e}from"./iframe-BM-w3o-i.js";import"./react-dom-CEhf1Ikv.js";import"./BackButton-YTJdpTs2.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-D70Gw0f6.js";import"./check-CdkQYES2.js";import"./Select-9lXMBIeB.js";import"./chevron-right--KyuWBYt.js";import"./circle-alert-joZkadWL.js";import"./circle-check-bhuaNWX7.js";import"./Alert-CP_Q-d0A.js";import"./search-CMzodLpq.js";import"./IconButton-zsPGaPs_.js";import"./InlineSpinner-BC7upHmO.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-CO-FEFSw.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-YxlYc889.js";import"./CloseButton-d9YZdAKA.js";import"./Pressable-BP3mwps-.js";import"./Badge-bCubqz8t.js";import"./Badge-CZmZxgAw.js";import{t}from"./Card-BjKyXiM7.js";import"./Card-Cr5xUjgw.js";import{n,t as r}from"./Typography-t53iKffO.js";import"./Typography-B8MrsJDF.js";import"./EmptyState-DO1IC7f0.js";import"./proxy-C6Zxl615.js";import"./AnimatePresence-CKwZiVJh.js";import"./ModalVariants-WOD98ZA3.js";import"./ErrorState-CU9hrK-1.js";import"./Spinner-BUbqj6_c.js";import"./Loader-BODym6AL.js";import"./PageLoadingFallback-zSaein9l.js";import"./NotificationStatus-CNroIIJZ.js";import"./Skeleton-C2u_9svK.js";import"./Checkbox-kAOoJvqH.js";import"./FormField-CSWJVczj.js";import"./FormField-DGr6n9zh.js";import"./Input-C4FAyUZP.js";import"./OtpInput-DzBF55e0.js";import"./Modal-BNiAKftz.js";import"./ModalHeader-t6Ckc_TI.js";import"./ModalHeader-TY_W7qiM.js";import"./Switch-CGGSGU5Q.js";import"./Textarea-CrTHyOPE.js";import"./Grid-BkQ8eqOz.js";import"./Inline-CnBjKGek.js";import{n as i,t as a}from"./Layout-fykE6n8v.js";import"./Stack-DeeA_ra7.js";import"./Pagination-DNd1_agy.js";import"./Tabs-DuXwsy-Q.js";import"./DatePickerModal-D1Ccx2kK.js";import"./TicketCodeModal-tFrYlMxj.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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