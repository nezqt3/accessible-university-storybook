import"./preload-helper-DGWYlufl.js";import"./useTranslation-9RT7qr1b.js";import{t as e}from"./iframe-DG2KGKvW.js";import"./react-dom-DYmj885q.js";import"./client-CVzJzv1P.js";import"./api-DdI07HHP.js";import"./api-CFUqr1b7.js";import"./cache-RKXYg0UC.js";import{n as t}from"./chunk-OE4NN4TA-C8HTGYng.js";import"./createLucideIcon-Bfb3zjcZ.js";import"./chevron-right-DnGIDjZL.js";import{t as n}from"./ExperimentalFeaturesSheet-CQeuu9iq.js";import"./x-Bq7Qs63O.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-Bnq4CHu9.js";import"./InlineSpinner-CtERaFhk.js";import"./Button-DY6ywSD3.js";import"./Button-DDTwPwQw.js";import"./IconButton-U-dSGvjx.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-CsT_IW0V.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-vYycdSgE.js";import"./Pressable-4oYskg3v.js";import"./proxy-BICjNce_.js";import"./ModalOverlay-W5r53p_K.js";import"./use-reduced-motion-CWStJdJS.js";import"./Typography-C7SnBuOn.js";import"./Typography-Q4VDshPG.js";import"./Modal-BDb8M2bR.js";import"./ModalHeader-7ahH-fNQ.js";import"./ModalHeader-CFa6Ec7J.js";import"./Switch-DwkIPTmq.js";import"./Switch-BWFqhGOl.js";import"./ListRow-DN8pCi1O.js";import"./ListRow-B7yOQXqt.js";import"./authStorage-DTFRECSE.js";import"./SettingsRow-CzZ5QgHP.js";import"./useSettingsSheetFocus-CnoxDSCM.js";var r=e(),i={enabled:!0,worker_enabled:!0,state:`running`,interval_seconds:300,started_at:`2026-10-03T09:00:00Z`,last_attempt_at:`2026-10-03T15:00:00Z`,last_success_at:`2026-10-03T15:00:00Z`,next_refresh_at:`2026-10-03T15:05:00Z`,attempts:72,successes:71,failures:1,last_duration_ms:187,total_duration_ms:13464,access_expires_at:`2026-10-03T18:00:00Z`,refresh_expires_at:`2026-10-03T18:00:00Z`,baseline_access_expires_at:`2026-10-03T12:00:00Z`,baseline_refresh_expires_at:`2026-10-03T12:00:00Z`,last_error_code:null},a={title:`Screens/Settings/Experiments`,component:n,parameters:{layout:`fullscreen`,experimentStatus:i},args:{isAuthenticated:!0,onClose:()=>{}},decorators:[e=>(0,r.jsx)(t,{children:(0,r.jsx)(e,{})})],beforeEach:e=>{let t=window.fetch,n=e.parameters.experimentStatus;return window.fetch=async(r,i)=>{if(!new URL(typeof r==`string`?r:r instanceof URL?r.href:r.url,location.origin).pathname.endsWith(`/auth/experiments/session-lifetime`))return t(r,i);if(e.parameters.experimentLoading)return new Promise(()=>{});if(e.parameters.experimentError)return new Response(JSON.stringify({success:!1,error:`Service unavailable`}),{status:503,headers:{"Content-Type":`application/json`}});if(i?.method===`PUT`&&typeof i.body==`string`){let{enabled:e}=JSON.parse(i.body);n={...n,enabled:e,state:e?`pending`:`off`}}return new Response(JSON.stringify({success:!0,data:n}),{status:200,headers:{"Content-Type":`application/json`}})},()=>{window.fetch=t}}};const o={},s={parameters:{viewport:{defaultViewport:`smallMobile`}}},c={args:{isAuthenticated:!1}},l={parameters:{experimentStatus:{...i,enabled:!1,state:`off`}}},u={parameters:{experimentStatus:{...i,enabled:!1,state:`expired`,next_refresh_at:null,last_error_code:`oidc_refresh_expired`}}},d={parameters:{experimentError:!0}},f={parameters:{experimentLoading:!0}},p={globals:{language:`en`}},m={globals:{textScale:`large`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    experimentStatus: {
      ...runningStatus,
      enabled: false,
      state: "off"
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    experimentStatus: {
      ...runningStatus,
      enabled: false,
      state: "expired",
      next_refresh_at: null,
      last_error_code: "oidc_refresh_expired"
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    experimentError: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    experimentLoading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    language: "en"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    textScale: "large"
  }
}`,...m.parameters?.docs?.source}}};const h=[`Running`,`SmallMobile320`,`Guest`,`Disabled`,`Expired`,`ServerUnavailable`,`Loading`,`English`,`LargeText`];export{l as Disabled,p as English,u as Expired,c as Guest,m as LargeText,f as Loading,o as Running,d as ServerUnavailable,s as SmallMobile320,h as __namedExportsOrder,a as default};