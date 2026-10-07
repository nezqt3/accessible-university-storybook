# Storybook — рабочая среда UI-системы «Доступного вуза»

Сначала меняются tokens и reusable components, затем их stories и проверки,
после этого — композиции экранов. Storybook показывает реальные production-компоненты;
отдельные CSS-версии их состояний запрещены.

## Запуск

Из каталога frontend: `npm run storybook` — http://localhost:6006.
Для сборки без изменения опубликованной директории:
`npm run build-storybook -- --output-dir /tmp/nomissed-storybook`.

## Источники истины

- `packages/tokens/tokens.json` — значения typography, colors, spacing, radius, controls,
  interaction, materials и motion. `npm run build --prefix packages/tokens` генерирует outputs.
- `src/app/styles/tokens.scss` подключает generated CSS и совместимые aliases.
- `src/shared/config/motion.ts` получает значения из того же JSON для Framer Motion.
- `src/shared/ui` — общие primitives и composites. Сначала проверьте существующий компонент.
- Domain-компоненты расписания остаются в `pages/schedule/components` и имеют собственные stories.

## Каталог

| Раздел      | Содержание                                                                        |
| ----------- | --------------------------------------------------------------------------------- |
| Foundations | Colors, Typography, Spacing, Radius, Surfaces, Elevation, Motion, Materials       |
| Primitives  | Button, IconButton, Input, SearchField, Select, Tabs, Badge, Card, формы и layout |
| Navigation  | AppHeader, BottomNavigation, Pagination                                           |
| Schedule    | ScheduleCard, GroupSelector, WeekSelector, поиск расписания                       |
| Services    | ServiceCard и каталог                                                             |
| Overlays    | BottomSheet/Modal, ModalHeader, DatePicker, TicketCode                            |
| States      | EmptyState, Skeleton, Alert, ErrorState, notifications и loaders                  |
| Screens     | Композиции экранов из проверенных компонентов                                     |

SearchField — конфигурация существующего Input с type=search. Card выполняет роль Surface.
Статусы используют Badge/Text. Отдельные дубли этих компонентов не нужны.

## Проверка компонента перед переносом на экран

1. Light и Dark; стандартный и крупный125% текст. Toolbar сохраняет дополнительные палитры,
   режим контрастности и русский/английский язык.
2. Viewports320,390,430px; для overlays дополнительно малая высота/landscape.
3. Long title, subtitle, group, department, discipline, lecturer, address; действия не вытесняют
   основной текст, primary values не обрезаются ellipsis без необходимости.
4. Default, focus, filled, error, disabled, loading. Для кнопок — длинная подпись и press;
   для выбора — все selected позиции, disabled items и клавиатура.
5. Focus проверяется внутри overflow:hidden parent: внутренний stroke2, offset−2,
   без изменения размеров и внешнего glow.
6. Interaction: press, tab indicator, input focus, sheet open/close/drag/cancel,
   bottom-navigation selection. Reduced Motion отключает большие перемещения.
7. Нет реальных API/платежей/форм публикации в fixtures. Демонстрационные данные изолированы.

Default компоненты используют weights400/500/600, neutral surfaces, target44 и icon16–20.
Tokens определяют основные визуальные значения; локальные styles отвечают за композицию.
Доступный native button и независимые trailing actions обязательны для кликабельных строк.

Аудит и результаты проверок находятся в `documentation/design` в корне проекта.
