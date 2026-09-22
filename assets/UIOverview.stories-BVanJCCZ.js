import"./preload-helper-DGWYlufl.js";import"./useTranslation-CiGZiYE0.js";import{t as e}from"./iframe-m-TOrT97.js";import"./react-dom-BB8hzMaV.js";import"./BackButton-7FEf7SH9.js";import"./BackButton-HyqOHoAP.js";import"./createLucideIcon-Dmhq-rET.js";import"./check-D6jkA5om.js";import"./Select-DplhyaCq.js";import"./chevron-right-B5vO08Gv.js";import"./circle-alert-BEucWaO8.js";import"./circle-check-Chdy0JJK.js";import"./Alert-BA4g-mTf.js";import"./search-BNZBz1gj.js";import"./IconButton-evVFIvTI.js";import"./InlineSpinner-MYACG9zM.js";import"./InlineSpinner-D-yUgJTS.js";import"./Button-NHnCd8Fn.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-8LoRllgW.js";import"./CloseButton-d9YZdAKA.js";import"./Pressable-Bm63pVWY.js";import"./Badge-BteVSzXX.js";import"./Badge-CZmZxgAw.js";import{t}from"./Card-U7VgHImU.js";import"./Card-Cr5xUjgw.js";import{n,t as r}from"./Typography-CPQ-_1yk.js";import"./Typography-B8MrsJDF.js";import"./EmptyState-BDQTIqz_.js";import"./proxy-DuaD_JCO.js";import"./AnimatePresence-CzlR45QN.js";import"./ModalVariants-DkD3dzSf.js";import"./ErrorState-BDEBQubd.js";import"./Spinner-Dko9Ju6o.js";import"./Loader-Bym5_f4b.js";import"./PageLoadingFallback-DVMBb5bB.js";import"./NotificationStatus-B3vLdf3f.js";import"./Skeleton-Rs5Rsdf_.js";import"./Checkbox-1z_y_B-9.js";import"./FormField-BFQAPAUb.js";import"./FormField-DGr6n9zh.js";import"./Input-XsZeYcCi.js";import"./OtpInput-BKZm5OI4.js";import"./Modal-BNiAKftz.js";import"./ModalHeader-66OVRlHK.js";import"./ModalHeader-TY_W7qiM.js";import"./Switch-BPwDfF1J.js";import"./Textarea-CBMg93Fs.js";import"./Grid-Cn8PS_sF.js";import"./Inline-DMetF02A.js";import{n as i,t as a}from"./Layout-C16SvVJg.js";import"./Stack-BhUaE-Fg.js";import"./Pagination-Cdo1tnUU.js";import"./Tabs-BW6Fxb0J.js";import"./DatePickerModal-BO2ZKnF4.js";import"./TicketCodeModal-BiNHWTKW.js";var o=e(),s={title:`UI/Overview`,parameters:{layout:`padded`,docs:{description:{component:`## Дизайн-система Accessible University

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