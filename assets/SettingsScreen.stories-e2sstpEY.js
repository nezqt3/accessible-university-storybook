import"./preload-helper-DGWYlufl.js";import"./useTranslation-vF7qFz_t.js";import{S as e,t}from"./iframe-CMexCRad.js";import"./react-dom-B2XyM79R.js";import"./client-85imv7Mb.js";import"./api-DZz9UYpn.js";import"./cache-BPD7z7HK.js";import{n}from"./chunk-OE4NN4TA-DR6JmrIt.js";import"./createLucideIcon-SYFtv4X6.js";import{t as r}from"./building-2-Ny_OdCxh.js";import"./check-CAWI8-gi.js";import"./chevron-left-StObO3su.js";import"./chevron-right-BpvDcQfb.js";import"./external-link-BQvZU39g.js";import{i as ee,n as te,r as i,t as a}from"./SettingsLayout-CtUWQpph.js";import{t as ne}from"./globe-DWkyXDN1.js";import"./info-X-p9K01q.js";import{t as o}from"./moon-cqQ4lJ82.js";import"./ExperimentalFeaturesSheet-BJS4srst.js";import"./trash-2-C9JRw1KY.js";import"./users-CXtT5t3b.js";import"./x-DUTF6TCW.js";import"./motion-DpqGF0yE.js";import"./NavigationTransitionContext-DpkfF3GW.js";import{t as re}from"./BackButton-DjswxgUN.js";import"./BackButton-B3kmmQB4.js";import"./InlineSpinner-D5lAZbb6.js";import"./InlineSpinner-fUvjPc1Z.js";import{t as ie}from"./Button-131UZUXc.js";import"./Button-D92DtpvE.js";import"./IconButton-Cm9KI9qd.js";import"./IconButton-CHrW8rVQ.js";import"./CloseButton-CVpCSeVt.js";import"./CloseButton-BTHNVXIU.js";import"./Pressable-DHFzE1EG.js";import"./Pressable-C5QHV1_C.js";import"./proxy-DP15KAnr.js";import"./ModalOverlay-uRgbjjJG.js";import{t as ae}from"./AnimatePresence-D4WTY7ZF.js";import"./use-reduced-motion-CEbtXdw3.js";import"./Typography-C44k02G5.js";import"./Typography-DQmQzATI.js";import"./Modal-1005tHDh.js";import"./ModalHeader-0MYTR4Rr.js";import"./ModalHeader-B9JizWT5.js";import{t as oe}from"./Switch-C1hBfTWr.js";import"./Switch-CVGWgr0f.js";import"./Tabs-DHobKIpp.js";import"./Tabs-F5PymD-K.js";import"./ListRow-B15COSLv.js";import"./ListRow-CbTu-ktQ.js";import{t as se}from"./AppHeader-DW0Nowbw.js";import"./AppHeader-6bwgQYtD.js";import"./authStorage-DvLcdYuj.js";import{r as s,t as c}from"./Theme-DW2rzExc.js";import{t as l}from"./SettingsRow-C51mtf8H.js";import{n as u,t as ce}from"./SettingsChoiceSheet-PkoxAlha.js";import"./useSettingsSheetFocus-Cl80YlGA.js";var d=e(),f=t(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,le={title:`Screens/Settings/Page`,component:a,parameters:{layout:`fullscreen`},decorators:[e=>(0,f.jsx)(n,{initialEntries:[`/main/profile/settings`],children:(0,f.jsx)(`div`,{className:`screen`,children:(0,f.jsx)(e,{})})})],args:{children:(0,f.jsx)(u,{title:`Расписание`,children:(0,f.jsx)(l,{icon:(0,f.jsx)(r,{}),title:`Подразделение`,secondary:`Финансовый университет`,onClick:()=>{}})}),isDarkTheme:!1,isColorAccessibleMode:!1,themePalette:s.CLASSIC,textScale:c.DEFAULT,language:`ru`,onToggleTheme:()=>{},onToggleColorAccessibleMode:()=>{},onThemePaletteChange:()=>{},onTextScaleChange:()=>{},onLanguageChange:()=>{},onClearCache:()=>{},onLogout:()=>{}}};const _={},v={args:{onLogout:void 0}},y={},b={args:{isDarkTheme:!0},globals:{theme:`dark`}},x={globals:{theme:`light`}},S={args:{isDarkTheme:!0},globals:{theme:`dark`}},C={args:{textScale:c.LARGE},globals:{textScale:`large`}},w={args:{language:`en`},globals:{language:`en`}},T={args:{themePalette:s.BLUE}},E={args:{themePalette:s.PURPLE}},D={args:{themePalette:s.ORANGE}},O={args:{textScale:c.DEFAULT}},k={args:{textScale:c.MEDIUM}},A={args:{textScale:c.LARGE}},j={},M={args:{isColorAccessibleMode:!0},globals:{vision:`color-accessible`}},N={parameters:{viewport:{defaultViewport:`smallMobile`}}},P={parameters:{viewport:{defaultViewport:`mobile`}}},F={},I={render:()=>(0,f.jsx)(ce,{title:`Подразделение`,selectedAnnouncement:`Выбрано`,value:`fin`,options:[{value:`fin`,label:`Финансовый университет`,leading:(0,f.jsx)(r,{})},{value:`lyceum`,label:`Лицей Финансового университета`,leading:(0,f.jsx)(r,{})},{value:`long`,label:`Институт международных отношений и дополнительного профессионального образования`,leading:(0,f.jsx)(r,{})}],onChange:()=>{},onClose:()=>{}})};async function L(e,t){let n=g(e.ownerDocument.body);await m.click(await n.findByRole(`button`,{name:t}))}const R={play:async({canvasElement:e})=>L(e,/цветовая схема/i)},z={play:async({canvasElement:e})=>{let t=g(e.ownerDocument.body);await L(e,/цветовая схема/i),await m.click(await t.findByRole(`button`,{name:/закрыть/i})),await h(()=>p(t.queryByRole(`dialog`)).not.toBeInTheDocument())}},B={play:async({canvasElement:e})=>{let t=g(e.ownerDocument.body);await L(e,/цветовая схема/i),await m.click(await t.findByRole(`button`,{name:/сине-графитовая/i})),await h(()=>p(t.queryByRole(`dialog`)).not.toBeInTheDocument())}},V={play:async({canvasElement:e})=>L(e,/язык: русский/i)},H={play:async({canvasElement:e})=>L(e,/^очистить кэш$/i)},U={play:async({canvasElement:e})=>L(e,/команда проекта/i)},W={parameters:{viewport:{defaultViewport:`smallMobile`}},play:async({canvasElement:e})=>L(e,/команда проекта/i)},G={parameters:{viewport:{defaultViewport:`mobile`}},play:async({canvasElement:e})=>L(e,/команда проекта/i)},K={globals:{theme:`light`},play:async({canvasElement:e})=>L(e,/команда проекта/i)},q={args:{isDarkTheme:!0},globals:{theme:`dark`},play:async({canvasElement:e})=>L(e,/команда проекта/i)},J={parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`},play:async({canvasElement:e})=>L(e,/команда проекта/i)},Y={play:async({canvasElement:e})=>{await L(e,/команда проекта/i);let t=await g(e.ownerDocument.body).findByRole(`button`,{name:/открыть telegram: верещагин илья/i});await h(()=>p(t).toHaveFocus())}},X={play:async({canvasElement:e})=>{let t=g(e.ownerDocument.body);for(let n=0;n<2;n+=1)await L(e,/цветовая схема/i),await m.click(await t.findByRole(`button`,{name:/закрыть/i})),await h(()=>p(t.queryByRole(`dialog`)).not.toBeInTheDocument());await L(e,/цветовая схема/i)}};function ue(){let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{style:{padding:`var(--ui-space-4)`},children:[(0,f.jsx)(ie,{onClick:()=>t(!0),children:`Открыть цветовую схему`}),(0,f.jsx)(ae,{children:e?(0,f.jsx)(ce,{title:`Цветовая схема`,selectedAnnouncement:`Выбрано`,value:`classic`,options:[{value:`classic`,label:`Фирменная`,leading:(0,f.jsx)(i,{})},{value:`blue`,label:`Сине-графитовая`,leading:(0,f.jsx)(i,{})}],onChange:()=>{},onClose:()=>t(!1),reducedMotion:!0}):null})]})}const Z={render:()=>(0,f.jsx)(ue,{}),play:async({canvasElement:e})=>{await m.click(g(e).getByRole(`button`,{name:/открыть цветовую схему/i}))}},Q={render:function(e){let[t,n]=(0,d.useState)(!1),[r,ee]=(0,d.useState)(!1),[te,i]=(0,d.useState)(s.CLASSIC),[ne,o]=(0,d.useState)(c.DEFAULT);return(0,f.jsx)(a,{...e,isDarkTheme:t,onToggleTheme:()=>n(e=>!e),isColorAccessibleMode:r,onToggleColorAccessibleMode:()=>ee(e=>!e),themePalette:te,onThemePaletteChange:i,textScale:ne,onTextScaleChange:o})}};function de(){return(0,f.jsxs)(`div`,{className:`settings-page`,children:[(0,f.jsx)(se,{actionsPlacement:`overlay`,eyebrow:`Профиль`,title:`Настройки интерфейса и специальных возможностей`,actions:(0,f.jsx)(re,{fallbackPath:`/main/profile`})}),(0,f.jsx)(`div`,{className:`settings-container`,children:(0,f.jsxs)(`div`,{className:`settings-content`,children:[(0,f.jsxs)(u,{title:`Персонализация внешнего вида приложения`,children:[(0,f.jsx)(l,{icon:(0,f.jsx)(o,{}),title:`Использовать тёмное оформление интерфейса`,control:(0,f.jsx)(oe,{checked:!0,ariaLabel:`Тёмное оформление`,onChange:()=>{}})}),(0,f.jsx)(l,{icon:(0,f.jsx)(i,{}),title:`Предпочтительная цветовая схема интерфейса`,secondary:`Спокойная сине-графитовая цветовая схема`,onClick:()=>{}}),(0,f.jsx)(l,{icon:(0,f.jsx)(te,{}),title:`Размер текста во всех разделах приложения`,secondary:`Очень крупный`}),(0,f.jsx)(l,{icon:(0,f.jsx)(ee,{}),title:`Повышенная различимость элементов управления`,secondary:`Больше контраста`,control:(0,f.jsx)(oe,{checked:!0,ariaLabel:`Повышенная различимость`,onChange:()=>{}})})]}),(0,f.jsx)(u,{title:`Язык интерфейса`,children:(0,f.jsx)(l,{icon:(0,f.jsx)(ne,{}),title:`Основной язык пользовательского интерфейса`,secondary:`Русский`,onClick:()=>{}})}),(0,f.jsx)(u,{title:`Расписание`,children:(0,f.jsx)(l,{icon:(0,f.jsx)(r,{}),title:`Подразделение`,secondary:`Институт международных отношений и дополнительного профессионального образования`,onClick:()=>{}})})]})})]})}const $={render:()=>(0,f.jsx)(de,{}),parameters:{viewport:{defaultViewport:`smallMobile`}},globals:{textScale:`large`}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onLogout: undefined
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isDarkTheme: true
  },
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isDarkTheme: true
  },
  globals: {
    theme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    textScale: TextScale.LARGE
  },
  globals: {
    textScale: "large"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    language: "en"
  },
  globals: {
    language: "en"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    themePalette: ThemePalette.BLUE
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    themePalette: ThemePalette.PURPLE
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    themePalette: ThemePalette.ORANGE
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    textScale: TextScale.DEFAULT
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    textScale: TextScale.MEDIUM
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    textScale: TextScale.LARGE
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isColorAccessibleMode: true
  },
  globals: {
    vision: "color-accessible"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <SettingsChoiceSheet title="Подразделение" selectedAnnouncement="Выбрано" value="fin" options={[{
    value: "fin",
    label: "Финансовый университет",
    leading: <Building2 />
  }, {
    value: "lyceum",
    label: "Лицей Финансового университета",
    leading: <Building2 />
  }, {
    value: "long",
    label: "Институт международных отношений и дополнительного профессионального образования",
    leading: <Building2 />
  }]} onChange={() => {}} onClose={() => {}} />
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /цветовая схема/i)
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await openSettingsRow(canvasElement, /цветовая схема/i);
    await userEvent.click(await body.findByRole("button", {
      name: /закрыть/i
    }));
    await waitFor(() => expect(body.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await openSettingsRow(canvasElement, /цветовая схема/i);
    await userEvent.click(await body.findByRole("button", {
      name: /сине-графитовая/i
    }));
    await waitFor(() => expect(body.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /язык: русский/i)
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /^очистить кэш$/i)
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  },
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  },
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isDarkTheme: true
  },
  globals: {
    theme: "dark"
  },
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  },
  globals: {
    textScale: "large"
  },
  play: async ({
    canvasElement
  }) => openSettingsRow(canvasElement, /команда проекта/i)
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await openSettingsRow(canvasElement, /команда проекта/i);
    const body = within(canvasElement.ownerDocument.body);
    const firstTelegramAction = await body.findByRole("button", {
      name: /открыть telegram: верещагин илья/i
    });
    await waitFor(() => expect(firstTelegramAction).toHaveFocus());
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    for (let index = 0; index < 2; index += 1) {
      await openSettingsRow(canvasElement, /цветовая схема/i);
      await userEvent.click(await body.findByRole("button", {
        name: /закрыть/i
      }));
      await waitFor(() => expect(body.queryByRole("dialog")).not.toBeInTheDocument());
    }
    await openSettingsRow(canvasElement, /цветовая схема/i);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ReducedMotionSettingsSheetExample />,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: /открыть цветовую схему/i
    }));
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [dark, setDark] = useState(false);
    const [accessible, setAccessible] = useState(false);
    const [palette, setPalette] = useState(ThemePalette.CLASSIC);
    const [scale, setScale] = useState(TextScale.DEFAULT);
    return <SettingsLayout {...args} isDarkTheme={dark} onToggleTheme={() => setDark(value => !value)} isColorAccessibleMode={accessible} onToggleColorAccessibleMode={() => setAccessible(value => !value)} themePalette={palette} onThemePaletteChange={setPalette} textScale={scale} onTextScaleChange={setScale} />;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <LongLabelsExample />,
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  },
  globals: {
    textScale: "large"
  }
}`,...$.parameters?.docs?.source}}};const fe=`Authenticated.Guest.DarkModeOff.DarkModeOn.LightMode.DarkMode.TextScale125.English.BluePalette.PurplePalette.OrangePalette.TextSizeA.TextSizeAPlus.TextSizeAPlusPlus.HighContrastOff.HighContrastOn.SmallMobile320.StandardMobile390.AboutSectionWithProjectTeam.StudyPlacePickerOpen.ColorSchemePickerOpen.ColorSchemePickerClose.ColorSchemePickerSelectAndClose.LanguagePickerOpen.ClearCacheConfirmationOpen.ProjectTeamSheetOpen.ProjectTeamSheetSmallMobile.ProjectTeamSheetStandardMobile.ProjectTeamSheetLight.ProjectTeamSheetDark.ProjectTeamSheetLongRole.ProjectTeamSheetKeyboardFocus.RepeatedPickerOpenClose.PickerReducedMotion.Interactive.LongTranslationLabels`.split(`.`);export{F as AboutSectionWithProjectTeam,_ as Authenticated,T as BluePalette,H as ClearCacheConfirmationOpen,z as ColorSchemePickerClose,R as ColorSchemePickerOpen,B as ColorSchemePickerSelectAndClose,S as DarkMode,y as DarkModeOff,b as DarkModeOn,w as English,v as Guest,j as HighContrastOff,M as HighContrastOn,Q as Interactive,V as LanguagePickerOpen,x as LightMode,$ as LongTranslationLabels,D as OrangePalette,Z as PickerReducedMotion,q as ProjectTeamSheetDark,Y as ProjectTeamSheetKeyboardFocus,K as ProjectTeamSheetLight,J as ProjectTeamSheetLongRole,U as ProjectTeamSheetOpen,W as ProjectTeamSheetSmallMobile,G as ProjectTeamSheetStandardMobile,E as PurplePalette,X as RepeatedPickerOpenClose,N as SmallMobile320,P as StandardMobile390,I as StudyPlacePickerOpen,C as TextScale125,O as TextSizeA,k as TextSizeAPlus,A as TextSizeAPlusPlus,fe as __namedExportsOrder,le as default};