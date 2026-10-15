import"./useTranslation-DYjPHpZM.js";import{S as e,t}from"./iframe-8nZf5U1I.js";import"./baseApi-KqMOPwG-.js";import"./client-DMLkocDF.js";import"./schedule-C48QPMjb.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-DnwuTElF.js";import"./scheduleStorage-8B6oNrjg.js";import{r as n}from"./Schedule-CcBJWk1K.js";import"./cache-SFZmKouD.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./profile-OqQZbyL9.js";import{r}from"./store-BqiM90lP.js";import"./createLucideIcon-Ds0JKKWX.js";import"./arrow-left-BEU0UZYB.js";import"./building-2-m6VNhLls.js";import"./chevron-right-KFJgsc3Z.js";import"./graduation-cap-Bx-R4nm0.js";import"./log-in-1U0pvYUe.js";import"./search-DOLlTMC_.js";import"./x-DenKBl5n.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BWaRkYpR.js";import"./InlineSpinner-DGBp7q51.js";import{t as i}from"./Button-CKuRsoid.js";import"./Button-BA_jpygv.js";import"./IconButton-BaMHE2r4.js";import"./IconButton-WT9EAVsO.js";import"./Pressable-CaL2LUCh.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-C3jQMH2T.js";import"./AnimatePresence-9AALF-U0.js";import"./LoaderTransitionContext-B4qziF8m.js";import"./BlurTransition-DQBLlqz2.js";import"./BlurTransition-MGIcubQU.js";import"./Typography-DffWu56J.js";import"./Typography-DVvNjpAw.js";import"./AsyncContentTransition-DEQ6-3ub.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Spinner-ClTWeua_.js";import{t as a}from"./Loader-Cd8KKofH.js";import"./Loader-CGp4NDSc.js";import"./Skeleton-ZVZjhN6L.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-HI2u-NGi.js";import"./FormField-C3pULiZ3.js";import"./Input-aN1otRzO.js";import"./Input-DXRPRK1S.js";import"./ListRow-C87WjtGT.js";import"./ListRow-BtepeKeJ.js";import"./SearchSchedule-DTvviVBM.js";import"./useGroupScheduleSearch-CWoIjbIF.js";import{t as o}from"./OnboardingFlow-DJ9xaV38.js";import"./best_version_manul-0e9eI4PS.js";import"./GroupSearchResultsRegion-CTpLWErl.js";var s=e(),c=t();function l(e){return(0,s.useEffect)(()=>{let e=window.fetch.bind(window);return window.fetch=(t,n)=>(typeof t==`string`?t:t instanceof URL?t.href:t.url).includes(`/api/schedule/search`)?Promise.reject(TypeError(`Failed to fetch`)):e(t,n),()=>{window.fetch=e}},[]),(0,c.jsx)(o,{...e})}function u(e){let[t,n]=(0,s.useState)(null);return t?(0,c.jsxs)(`div`,{style:{padding:`var(--ui-space-6)`,color:`var(--ui-color-text)`},children:[(0,c.jsx)(`p`,{role:`status`,children:t===`login`?`Переход к входу в аккаунт`:`Онбординг завершён без группы`}),(0,c.jsx)(i,{variant:`ghost`,size:`sm`,onClick:()=>n(null),children:`Начать снова`})]}):(0,c.jsx)(o,{...e,onLogin:()=>n(`login`),onSkip:()=>n(`skip`)})}var d={title:`Screens/Onboarding`,component:o,parameters:{layout:`fullscreen`},decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{entry:{kind:`welcome`},onLogin:()=>{},onSkip:()=>{},onComplete:()=>{}}};const f={render:()=>(0,c.jsx)(a,{})},p={},m={render:e=>(0,c.jsx)(u,{...e})},h={parameters:{viewport:{defaultViewport:`smallMobile`}}},g={parameters:{viewport:{defaultViewport:`mobile`}}},_={parameters:{viewport:{defaultViewport:`shortMobile`}}},v={globals:{theme:`dark`}},y={args:{reducedMotion:!0}},b={args:{entry:{kind:`welcome`,profileLookupFailed:!0}}},x={args:{entry:{kind:`department`}}},S={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},C={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`shortMobile`}}},w={args:{entry:{kind:`department`}},globals:{theme:`dark`}},T={args:{entry:{kind:`group`,studyPlace:`fin`}}},E={args:{entry:{kind:`group`,studyPlace:`fin`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},D={args:{entry:{kind:`group`,studyPlace:`fin`}},globals:{theme:`dark`}},O={args:{entry:{kind:`group`,studyPlace:`fin`},reducedMotion:!0}},k={args:{entry:{kind:`group`,studyPlace:`fin`,initialQuery:`ТРПО25-2`}},render:e=>(0,c.jsx)(l,{...e})},A={args:{entry:{kind:`choices`,source:`assistant`,candidates:[{studyPlace:`fin`,group:{id:`164567`,name:`ТРПО25-2`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}},{studyPlace:`mfk`,group:{id:`164568`,name:`Очень длинное название учебной группы финансового колледжа`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}}]}}},j={...A,parameters:{viewport:{defaultViewport:`smallMobile`}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Loader />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <WelcomeInteractionStory {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "shortMobile"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    reducedMotion: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "welcome",
      profileLookupFailed: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "department"
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "department"
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "department"
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "shortMobile"
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "department"
    }
  },
  globals: {
    theme: "dark"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "group",
      studyPlace: "fin"
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "group",
      studyPlace: "fin"
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "group",
      studyPlace: "fin"
    }
  },
  globals: {
    theme: "dark"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "group",
      studyPlace: "fin"
    },
    reducedMotion: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "group",
      studyPlace: "fin",
      initialQuery: "ТРПО25-2"
    }
  },
  render: args => <OfflineGroupSearchStory {...args} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    entry: {
      kind: "choices",
      source: "assistant",
      candidates: [{
        studyPlace: "fin",
        group: {
          id: "164567",
          name: "ТРПО25-2",
          type: RuzType.GROUP,
          description: "",
          guid: "",
          source: "subscription-api"
        }
      }, {
        studyPlace: "mfk",
        group: {
          id: "164568",
          name: "Очень длинное название учебной группы финансового колледжа",
          type: RuzType.GROUP,
          description: "",
          guid: "",
          source: "subscription-api"
        }
      }]
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...MultipleSubscriptions,
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...j.parameters?.docs?.source}}};const M=[`BrandLoader`,`Welcome`,`WelcomeActions`,`WelcomeSmallMobile`,`WelcomeStandardMobile`,`WelcomeShortMobile`,`WelcomeDark`,`WelcomeReducedMotion`,`ElkNeedsManualSetup`,`DepartmentSelection`,`DepartmentSmallMobile`,`DepartmentShortMobile`,`DepartmentDark`,`GroupSelection`,`GroupSelectionSmallMobile`,`GroupSelectionDark`,`GroupSelectionReducedMotion`,`ManualSearchOffline`,`MultipleSubscriptions`,`MultipleSubscriptionsSmallMobile`];export{f as BrandLoader,w as DepartmentDark,x as DepartmentSelection,C as DepartmentShortMobile,S as DepartmentSmallMobile,b as ElkNeedsManualSetup,T as GroupSelection,D as GroupSelectionDark,O as GroupSelectionReducedMotion,E as GroupSelectionSmallMobile,k as ManualSearchOffline,A as MultipleSubscriptions,j as MultipleSubscriptionsSmallMobile,p as Welcome,m as WelcomeActions,v as WelcomeDark,y as WelcomeReducedMotion,_ as WelcomeShortMobile,h as WelcomeSmallMobile,g as WelcomeStandardMobile,M as __namedExportsOrder,d as default};