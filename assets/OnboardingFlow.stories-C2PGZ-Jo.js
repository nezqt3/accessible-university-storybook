import"./useTranslation-5YtSZpFC.js";import{S as e,t}from"./iframe-DPTPUGSQ.js";import"./baseApi-sGsvwXa1.js";import"./client-DMLkocDF.js";import"./schedule-B6obFNZz.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-ChzQw0ww.js";import"./scheduleStorage-B3peMIKz.js";import{r as n}from"./Schedule-CcBJWk1K.js";import"./cache-BA3wEMad.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./profile-OqQZbyL9.js";import{r}from"./store-B01qglCx.js";import"./createLucideIcon-BWiwbG5R.js";import"./arrow-left-DTas1gpc.js";import"./building-2-CA0glve9.js";import"./chevron-right-B2ZCVUiK.js";import"./graduation-cap-XN5RsZTt.js";import"./log-in-Wa58DeY0.js";import"./search-BANm0G1C.js";import"./x-BNiF9Eo_.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-D0Bs9YLH.js";import"./InlineSpinner-DGBp7q51.js";import{t as i}from"./Button-COxhzMDW.js";import"./Button-BA_jpygv.js";import"./IconButton-BoNKYF5G.js";import"./IconButton-WT9EAVsO.js";import"./Pressable-su_vAzww.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-Cv57RTRX.js";import"./AnimatePresence-CXi1-cJS.js";import"./LoaderTransitionContext-BjkgqnwC.js";import"./BlurTransition-Bb5gkZF5.js";import"./BlurTransition-MGIcubQU.js";import"./Typography-D3unIxzR.js";import"./Typography-DVvNjpAw.js";import"./AsyncContentTransition-CMOLkmz7.js";import"./AsyncContentTransition-BFltYoIl.js";import"./Spinner-_Z5MHEWS.js";import{t as a}from"./Loader-C1nvFP3x.js";import"./Loader-CGp4NDSc.js";import"./Skeleton-BKB6TRkV.js";import"./Skeleton-ChK5Iu2x.js";import"./FormField-DqtYaEuH.js";import"./FormField-C3pULiZ3.js";import"./Input-BS6i8ro2.js";import"./Input-DXRPRK1S.js";import"./ListRow-pQKNoU8S.js";import"./ListRow-BtepeKeJ.js";import"./SearchSchedule-CkVe3gIL.js";import"./useGroupScheduleSearch-DrWe8qbr.js";import{t as o}from"./OnboardingFlow-DDKxbIaz.js";import"./best_version_manul-0e9eI4PS.js";import"./GroupSearchResultsRegion-Ih2QPZaR.js";var s=e(),c=t();function l(e){return(0,s.useEffect)(()=>{let e=window.fetch.bind(window);return window.fetch=(t,n)=>(typeof t==`string`?t:t instanceof URL?t.href:t.url).includes(`/api/schedule/search`)?Promise.reject(TypeError(`Failed to fetch`)):e(t,n),()=>{window.fetch=e}},[]),(0,c.jsx)(o,{...e})}function u(e){let[t,n]=(0,s.useState)(null);return t?(0,c.jsxs)(`div`,{style:{padding:`var(--ui-space-6)`,color:`var(--ui-color-text)`},children:[(0,c.jsx)(`p`,{role:`status`,children:t===`login`?`Переход к входу в аккаунт`:`Онбординг завершён без группы`}),(0,c.jsx)(i,{variant:`ghost`,size:`sm`,onClick:()=>n(null),children:`Начать снова`})]}):(0,c.jsx)(o,{...e,onLogin:()=>n(`login`),onSkip:()=>n(`skip`)})}var d={title:`Screens/Onboarding`,component:o,parameters:{layout:`fullscreen`},decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{entry:{kind:`welcome`},onLogin:()=>{},onSkip:()=>{},onComplete:()=>{}}};const f={render:()=>(0,c.jsx)(a,{})},p={},m={render:e=>(0,c.jsx)(u,{...e})},h={parameters:{viewport:{defaultViewport:`smallMobile`}}},g={parameters:{viewport:{defaultViewport:`mobile`}}},_={parameters:{viewport:{defaultViewport:`shortMobile`}}},v={globals:{theme:`dark`}},y={args:{reducedMotion:!0}},b={args:{entry:{kind:`welcome`,profileLookupFailed:!0}}},x={args:{entry:{kind:`department`}}},S={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},C={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`shortMobile`}}},w={args:{entry:{kind:`department`}},globals:{theme:`dark`}},T={args:{entry:{kind:`group`,studyPlace:`fin`}}},E={args:{entry:{kind:`group`,studyPlace:`fin`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},D={args:{entry:{kind:`group`,studyPlace:`fin`}},globals:{theme:`dark`}},O={args:{entry:{kind:`group`,studyPlace:`fin`},reducedMotion:!0}},k={args:{entry:{kind:`group`,studyPlace:`fin`,initialQuery:`ТРПО25-2`}},render:e=>(0,c.jsx)(l,{...e})},A={args:{entry:{kind:`choices`,source:`assistant`,candidates:[{studyPlace:`fin`,group:{id:`164567`,name:`ТРПО25-2`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}},{studyPlace:`mfk`,group:{id:`164568`,name:`Очень длинное название учебной группы финансового колледжа`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}}]}}},j={...A,parameters:{viewport:{defaultViewport:`smallMobile`}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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