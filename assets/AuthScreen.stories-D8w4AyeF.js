import"./useTranslation-r4xO1t1U.js";import{S as e,t}from"./iframe-kF-APqyp.js";import"./createLucideIcon-D1UjONYr.js";import"./arrow-right-CpmzX7k6.js";import"./circle-alert-BjxbLB1M.js";import"./circle-check-BaSJpN6v.js";import{t as n}from"./AuthPage-Mlc0QUTt.js";import"./user-C1PMR3dz.js";import"./x-DEosaj9j.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BVLlDt8J.js";import"./InlineSpinner-CtERaFhk.js";import"./Button-weYjeSKY.js";import"./Button-DDTwPwQw.js";import"./IconButton-Ospn9fJu.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BboE_dUN.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-BQAo5aAS.js";import"./AnimatePresence-CNpM86Yv.js";import"./use-reduced-motion-DErL7L4T.js";import"./BlurTransition-CoZN5TAY.js";import"./BlurTransition-Lagju-WE.js";import{n as r,t as i}from"./Typography-xWKebxyx.js";import"./Typography-Q4VDshPG.js";import{t as a}from"./NotificationStatus-pF05l1g4.js";import"./FormField-D2Mg6Hxr.js";import"./FormField-DI1mxX-F.js";import"./Input-CVafAwFC.js";import"./Input-BJFMwxMd.js";import"./OtpInput-t0EdsfHf.js";import"./OtpInput-CGERY6VR.js";import"./Switch-CtGakLgK.js";import"./Switch-BWFqhGOl.js";import{t as o}from"./Stack-BcD5kRk1.js";import"./Stack-Cjv54EAV.js";import{t as s}from"./AuthOtpForm-DM6qGR-P.js";var c=e(),l=t(),u={actionCooldownSeconds:11,challengeActionState:{phase:`idle`},challengeActions:[{action_id:`resend_max`,label:`MAX`},{action_id:`resend_email`,label:`E-mail`}],challengeLabel:`Код подтверждения входа в личный кабинет`,verificationState:{phase:`entering`},onChallengeAction:()=>{},onOtpCodeChange:()=>{},onOtpCodeComplete:()=>{},onSubmit:e=>e.preventDefault(),otpCode:``};function d(){let[e,t]=(0,c.useState)(``),[n,r]=(0,c.useState)({phase:`entering`}),i=(0,c.useRef)(null);return(0,c.useEffect)(()=>()=>{i.current!==null&&window.clearTimeout(i.current)},[]),(0,l.jsx)(s,{...u,actionCooldownSeconds:8,otpCode:e,verificationState:n,onOtpCodeChange:e=>{t(e),n.phase===`error`&&r({phase:`entering`})},onOtpCodeComplete:()=>{r({phase:`verifying`}),i.current=window.setTimeout(()=>{i.current=null,r({phase:`error`,message:`Неверный код. Попробуйте ещё раз.`})},1500)}})}var f={title:`Screens/Auth`,component:n,decorators:[(e,t)=>(0,l.jsxs)(`div`,{className:`auth-card`,children:[(0,l.jsx)(i,{level:1,size:`page`,children:t.parameters.authStep===`otp`?`Подтвердите вход`:`С возвращением`}),(0,l.jsx)(r,{tone:`muted`,children:t.parameters.authStep===`otp`?`Введите код, отправленный на корпоративную электронную почту`:`Войдите в свой аккаунт студента`}),(0,l.jsx)(e,{})]})],args:{isSubmitting:!1,onPasswordChange:()=>{},onRememberUsernameChange:()=>{},onSubmit:e=>e.preventDefault(),onUsernameChange:()=>{},password:``,rememberUsername:!1,username:``}};const p={},m={args:{isSubmitting:!0}},h={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u})},g={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:1})},_={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`123`})},v={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`verifying`}})},y={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`verifying`}})},b={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(d,{})},x={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`error`,message:`Неверный код. Попробуйте ещё раз.`}})},S={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`12345`,verificationState:{phase:`entering`}})},C={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0})},w={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0,challengeActionState:{phase:`sending`,actionId:`resend_max`}})},T={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0,challengeActionState:{phase:`sending`,actionId:`resend_email`}})},E={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:30,challengeActionState:{phase:`success`,actionId:`resend_max`}})},D={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:30,challengeActionState:{phase:`success`,actionId:`resend_email`}})},O={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:30})},k={parameters:{authStep:`otp`},render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{...u,actionCooldownSeconds:0}),(0,l.jsx)(a,{isVisible:!0,duration:6e4,message:`Проверьте подключение к интернету и попробуйте ещё раз.`,onClose:()=>{}})]})},A={parameters:{authStep:`otp`},render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{...u,actionCooldownSeconds:0}),(0,l.jsx)(a,{isVisible:!0,duration:6e4,message:`Не удалось отправить код. Попробуйте ещё раз.`,onClose:()=>{}})]})},j={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:8,otpCode:`123456`,verificationState:{phase:`verifying`}})},M={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0,otpCode:`123456`,verificationState:{phase:`verifying`}})},N={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`verifying`},reducedMotion:!0})},P={parameters:{authStep:`otp`,viewport:{defaultViewport:`smallMobile`}},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`verifying`}})},F={parameters:{authStep:`otp`,viewport:{defaultViewport:`mobile`}},render:()=>(0,l.jsx)(s,{...u,otpCode:`123456`,verificationState:{phase:`verifying`}})},I={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0}),globals:{theme:`dark`}},L={parameters:{authStep:`otp`},render:()=>(0,l.jsx)(s,{...u,actionCooldownSeconds:0}),globals:{theme:`light`}},R={...h,globals:{textScale:`large`}},z={render:function(e){let[t,i]=(0,c.useState)(``),[a,s]=(0,c.useState)(``),[u,d]=(0,c.useState)(!1),[f,p]=(0,c.useState)(!1);return(0,l.jsxs)(o,{gap:`4`,children:[(0,l.jsx)(n,{...e,username:t,password:a,rememberUsername:u,onUsernameChange:i,onPasswordChange:s,onRememberUsernameChange:d,onSubmit:e=>{e.preventDefault(),p(!0)}}),(0,l.jsx)(r,{size:`sm`,role:`status`,children:f?`Форма отправлена в примере`:`Ожидается заполнение`})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isSubmitting: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={1} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <OtpVerificationSequencePreview />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "error",
    message: "Неверный код. Попробуйте ещё раз."
  }} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="12345" verificationState={{
    phase: "entering"
  }} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} challengeActionState={{
    phase: "sending",
    actionId: "resend_max"
  }} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} challengeActionState={{
    phase: "sending",
    actionId: "resend_email"
  }} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={30} challengeActionState={{
    phase: "success",
    actionId: "resend_max"
  }} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={30} challengeActionState={{
    phase: "success",
    actionId: "resend_email"
  }} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={30} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <>
      <AuthOtpForm {...otp} actionCooldownSeconds={0} />
      <NotificationStatus isVisible duration={60_000} message="Проверьте подключение к интернету и попробуйте ещё раз." onClose={() => {}} />
    </>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <>
      <AuthOtpForm {...otp} actionCooldownSeconds={0} />
      <NotificationStatus isVisible duration={60_000} message="Не удалось отправить код. Попробуйте ещё раз." onClose={() => {}} />
    </>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={8} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "verifying"
  }} reducedMotion />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp",
    viewport: {
      defaultViewport: "smallMobile"
    }
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp",
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" verificationState={{
    phase: "verifying"
  }} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} />,
  globals: {
    theme: "dark"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} />,
  globals: {
    theme: "light"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...OtpCooldown,
  globals: {
    textScale: "large"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function InteractiveLoginExample(args) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return <Stack gap="4">
        <AuthLoginForm {...args} username={username} password={password} rememberUsername={remember} onUsernameChange={setUsername} onPasswordChange={setPassword} onRememberUsernameChange={setRemember} onSubmit={event => {
        event.preventDefault();
        setSubmitted(true);
      }} />
        <Text size="sm" role="status">
          {submitted ? "Форма отправлена в примере" : "Ожидается заполнение"}
        </Text>
      </Stack>;
  }
}`,...z.parameters?.docs?.source}}};const B=`Login.Submitting.OtpCooldown.OtpLastSecond.OtpEntering.OtpVerifying.OtpVerifyingLong.OtpVerificationSequence.OtpInvalidCode.OtpRetryAfterError.OtpReady.OtpSendingMax.OtpSendingEmail.OtpSuccessMax.OtpSuccessEmail.OtpRestartedCooldown.OtpNetworkError.OtpResendError.OtpVerifyingDuringCooldown.OtpVerifyingWhenReady.OtpReducedMotion.OtpSmallMobile.OtpStandardMobile.Dark.Light.LargeText.InteractiveLogin`.split(`.`);export{I as Dark,z as InteractiveLogin,R as LargeText,L as Light,p as Login,h as OtpCooldown,_ as OtpEntering,x as OtpInvalidCode,g as OtpLastSecond,k as OtpNetworkError,C as OtpReady,N as OtpReducedMotion,A as OtpResendError,O as OtpRestartedCooldown,S as OtpRetryAfterError,T as OtpSendingEmail,w as OtpSendingMax,P as OtpSmallMobile,F as OtpStandardMobile,D as OtpSuccessEmail,E as OtpSuccessMax,b as OtpVerificationSequence,v as OtpVerifying,j as OtpVerifyingDuringCooldown,y as OtpVerifyingLong,M as OtpVerifyingWhenReady,m as Submitting,B as __namedExportsOrder,f as default};