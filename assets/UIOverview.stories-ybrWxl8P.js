import"./preload-helper-DGWYlufl.js";import"./useTranslation-BVb12BKQ.js";import{t as e}from"./iframe-VzX5uRic.js";import"./react-dom-CsJfPPDB.js";import"./BackButton-BGTxw-TG.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-uc0lRL-Y.js";import"./check-Cjl2yr0t.js";import"./Select-BGP3JGFE.js";import"./chevron-right-BuKWWVne.js";import"./circle-alert-CD3jajTK.js";import"./circle-check-DaEtuz67.js";import"./Alert--V-oUMiH.js";import"./search-BD494XgB.js";import"./IconButton-C2NhzesF.js";import"./InlineSpinner-C4UKMscH.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-D4gRX9uD.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-DcMF6ugn.js";import"./CloseButton-d9YZdAKA.js";import"./Pressable-CMyIKuyI.js";import"./Badge-5MY5NqM1.js";import"./Badge-CZmZxgAw.js";import{t}from"./Card-BGi2Ev_d.js";import"./Card-Cr5xUjgw.js";import{n,t as r}from"./Typography--4UCZ5a3.js";import"./Typography-B8MrsJDF.js";import"./EmptyState-SUn5cW5-.js";import"./proxy-B5Sw5ahD.js";import"./AnimatePresence-oChlvG3u.js";import"./ModalVariants-C-JfasdI.js";import"./ErrorState-DkhAdfL8.js";import"./Spinner-DsXhkITr.js";import"./Loader-FjSPBvpD.js";import"./PageLoadingFallback-CJADVa3Y.js";import"./NotificationStatus-Ch5LkWOs.js";import"./Skeleton-DW-UUxRD.js";import"./Checkbox-QhRmZ_Yt.js";import"./FormField-BEnACBEh.js";import"./FormField-DGr6n9zh.js";import"./Input-CwmLmJmq.js";import"./OtpInput-7Z7-pthy.js";import"./Modal-BNiAKftz.js";import"./ModalHeader-Cf3ze7Iu.js";import"./ModalHeader-TY_W7qiM.js";import"./Switch-B7suEMFi.js";import"./Textarea-igfuNCcR.js";import"./Grid-wpCsTO4p.js";import"./Inline-aB7mPPC7.js";import{n as i,t as a}from"./Layout-3zhA5Uij.js";import"./Stack-yerAgZUD.js";import"./Pagination-BHJpEq7z.js";import"./Tabs-BIQw_WxZ.js";import"./DatePickerModal-BDfQk4L8.js";import"./TicketCodeModal-CZ4D-o80.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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