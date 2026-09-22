import"./preload-helper-DGWYlufl.js";import"./useTranslation-Dx4dYRAX.js";import{t as e}from"./iframe-aYO-Nl_i.js";import"./react-dom-CWWBdt3H.js";import"./BackButton-gRQJULiD.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-xEFH6M9o.js";import"./check-CjHh56Xz.js";import"./Select-BSzfnxDa.js";import"./chevron-right-BHhhMrB3.js";import"./circle-alert-BWxSvCp_.js";import"./circle-check-3XAKy9ux.js";import"./Alert-IERIKq_R.js";import"./search-xLb223ex.js";import"./IconButton-DoWINMX5.js";import"./InlineSpinner-BbxBsnon.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-yrAkSmaj.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-BejS1vzF.js";import"./CloseButton-d9YZdAKA.js";import"./Pressable-DCTsP44k.js";import"./Badge-BqQq7_Pn.js";import"./Badge-CZmZxgAw.js";import{t}from"./Card-BU_a_Tw9.js";import"./Card-Cr5xUjgw.js";import{n,t as r}from"./Typography-BEB1skgx.js";import"./Typography-B8MrsJDF.js";import"./EmptyState-DxRIKM4v.js";import"./proxy-BHm2-Naa.js";import"./AnimatePresence-D-oG5RI3.js";import"./ModalVariants-CuojM_Se.js";import"./ErrorState-DFGwWKzB.js";import"./Spinner-DezJ9Mxv.js";import"./Loader-CluYGA4O.js";import"./PageLoadingFallback-CddrHdqS.js";import"./NotificationStatus-CDgtUzpa.js";import"./Skeleton-DF9paBa3.js";import"./Checkbox-CKkD80AO.js";import"./FormField-Q_Omhn5B.js";import"./FormField-DGr6n9zh.js";import"./Input-BywLEn6S.js";import"./OtpInput-Crkezcp8.js";import"./Modal-BNiAKftz.js";import"./ModalHeader-C2Q-PJP_.js";import"./ModalHeader-TY_W7qiM.js";import"./Switch-DPlWwyoH.js";import"./Textarea-BuBcb4ln.js";import"./Grid-BWstcyNd.js";import"./Inline-C4a-YeU7.js";import{n as i,t as a}from"./Layout-DSl9mTXW.js";import"./Stack-CPc_gfyN.js";import"./Pagination-BQFL44Od.js";import"./Tabs-CylAdpKL.js";import"./DatePickerModal-DCjr3-U1.js";import"./TicketCodeModal-Dj99aVlp.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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