import"./useTranslation-ImTl_7Xp.js";import{S as e,t}from"./iframe-CvULytDY.js";import"./baseApi-B-FKZ_uf.js";import"./client-DMLkocDF.js";import"./schedule-B27neKZF.js";import"./api-DZz9UYpn.js";import"./scheduleSubscriptions-BCYyK4Ur.js";import"./scheduleStorage-DaiXbZLi.js";import{r as n}from"./Schedule-CcBJWk1K.js";import"./cache-pW2ThNwz.js";import"./format-Cwr2AuTk.js";import"./studyPlaces-BnJuXiA6.js";import"./profile-OqQZbyL9.js";import{r}from"./store-DWQGNh1d.js";import"./createLucideIcon-H9I5BK5P.js";import"./arrow-left-qJgVWsXK.js";import"./building-2-DXu3_y77.js";import"./chevron-right-BLxs7Xtu.js";import"./graduation-cap-ja7TmkoQ.js";import"./log-in-CNBkXTFE.js";import"./search-B77je79z.js";import"./x-CtK3F56K.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-CKdlWLgP.js";import"./InlineSpinner-DGBp7q51.js";import{t as i}from"./Button-CeWGCXxh.js";import"./Button-BA_jpygv.js";import"./IconButton-BOf72TlE.js";import"./IconButton-WT9EAVsO.js";import"./Pressable-BxXrQNFG.js";import"./Pressable-Bg3DDMfh.js";import"./proxy-CFGHP_Wy.js";import"./AnimatePresence-Bdp1SscX.js";import"./use-reduced-motion-DVAUB1l9.js";import"./BlurTransition-8fJsukzJ.js";import"./BlurTransition-BND0kpmE.js";import"./Typography-DVjocI1l.js";import"./Typography-BY-iGFVZ.js";import"./AsyncContentTransition-Cr1r4ple.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./Spinner-C-uuZ0Db.js";import{t as a}from"./Loader-mzgUF8L7.js";import"./Loader-B5k_qdAm.js";import"./Skeleton-Ci-dYQkT.js";import"./Skeleton-Bmw2rAog.js";import"./FormField-BHKJPb7o.js";import"./FormField-DI1mxX-F.js";import"./Input-C4qxriiC.js";import"./Input-BJFMwxMd.js";import"./ListRow-CVp0j7A9.js";import"./ListRow-EHTZJckC.js";import"./SearchSchedule-B4IKloxT.js";import"./useGroupScheduleSearch-Z303T54y.js";import{t as o}from"./OnboardingFlow-CqOUONbZ.js";import"./best_version_manul-DXnwwi-Z.js";import"./GroupSearchResultsRegion-De6gkhYj.js";var s=e(),c=t();function l(e){return(0,s.useEffect)(()=>{let e=window.fetch.bind(window);return window.fetch=(t,n)=>(typeof t==`string`?t:t instanceof URL?t.href:t.url).includes(`/api/schedule/search`)?Promise.reject(TypeError(`Failed to fetch`)):e(t,n),()=>{window.fetch=e}},[]),(0,c.jsx)(o,{...e})}function u(e){let[t,n]=(0,s.useState)(null);return t?(0,c.jsxs)(`div`,{style:{padding:`var(--ui-space-6)`,color:`var(--ui-color-text)`},children:[(0,c.jsx)(`p`,{role:`status`,children:t===`login`?`Переход к входу в аккаунт`:`Онбординг завершён без группы`}),(0,c.jsx)(i,{variant:`ghost`,size:`sm`,onClick:()=>n(null),children:`Начать снова`})]}):(0,c.jsx)(o,{...e,onLogin:()=>n(`login`),onSkip:()=>n(`skip`)})}var d={title:`Screens/Onboarding`,component:o,parameters:{layout:`fullscreen`},decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{entry:{kind:`welcome`},onLogin:()=>{},onSkip:()=>{},onComplete:()=>{}}};const f={render:()=>(0,c.jsx)(a,{})},p={},m={render:e=>(0,c.jsx)(u,{...e})},h={parameters:{viewport:{defaultViewport:`smallMobile`}}},g={parameters:{viewport:{defaultViewport:`mobile`}}},_={parameters:{viewport:{defaultViewport:`shortMobile`}}},v={globals:{theme:`dark`}},y={args:{reducedMotion:!0}},b={args:{entry:{kind:`welcome`,profileLookupFailed:!0}}},x={args:{entry:{kind:`department`}}},S={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},C={args:{entry:{kind:`department`}},parameters:{viewport:{defaultViewport:`shortMobile`}}},w={args:{entry:{kind:`department`}},globals:{theme:`dark`}},T={args:{entry:{kind:`group`,studyPlace:`fin`}}},E={args:{entry:{kind:`group`,studyPlace:`fin`}},parameters:{viewport:{defaultViewport:`smallMobile`}}},D={args:{entry:{kind:`group`,studyPlace:`fin`}},globals:{theme:`dark`}},O={args:{entry:{kind:`group`,studyPlace:`fin`},reducedMotion:!0}},k={args:{entry:{kind:`group`,studyPlace:`fin`,initialQuery:`ТРПО25-2`}},render:e=>(0,c.jsx)(l,{...e})},A={args:{entry:{kind:`choices`,source:`assistant`,candidates:[{studyPlace:`fin`,group:{id:`164567`,name:`ТРПО25-2`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}},{studyPlace:`mfk`,group:{id:`164568`,name:`Очень длинное название учебной группы финансового колледжа`,type:n.GROUP,description:``,guid:``,source:`subscription-api`}}]}}},j={...A,parameters:{viewport:{defaultViewport:`smallMobile`}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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