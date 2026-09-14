import{t as e,y as t}from"./iframe-b1ov7CI7.js";import"./createLucideIcon-B-7CjJKR.js";import"./arrow-right-D_NvZvCP.js";import{r as n,t as r}from"./AuthPage-TfjUKE-A.js";import"./user-CWue0KSM.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-BikkIcdx.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CVlnf8vi.js";import"./Button-BSxYERbh.js";import{n as i,t as a}from"./Typography-DU2Y6fZX.js";import"./Typography-BvsIeinA.js";import"./proxy-BQ55LVPr.js";import"./use-reduced-motion-Pz8xRbFI.js";import"./FormField-Bpm6jzpY.js";import"./FormField-Dm-RTxrN.js";import"./Input-D937cDJi.js";import"./Input-CZx1ckHV.js";import"./OtpInput-CFclY1Am.js";import"./Switch-BT4A8Nwy.js";import"./Switch-BCaDSaR6.js";import{t as o}from"./Stack-BQ1EjeYw.js";import"./Stack-duc46O7L.js";import"./DetailList-8T4Q68O7.js";import"./DetailList-CUimx4jh.js";var s=t(),c=e(),l={actionCooldownSeconds:30,actionInFlight:null,challengeActions:[{action_id:`email`,label:`Отправить новый код на корпоративную электронную почту`}],challengeLabel:`Код подтверждения входа в личный кабинет`,isSubmitting:!1,onChallengeAction:()=>{},onOtpCodeChange:()=>{},onReset:()=>{},onSubmit:e=>e.preventDefault(),otpCode:``},u={title:`Screens/Auth`,component:n,decorators:[(e,t)=>(0,c.jsxs)(`div`,{className:`auth-card`,children:[(0,c.jsx)(a,{level:1,size:`page`,children:t.parameters.authStep===`otp`?`Подтвердите вход`:`С возвращением`}),(0,c.jsx)(i,{tone:`muted`,children:t.parameters.authStep===`otp`?`Введите код, отправленный на корпоративную электронную почту`:`Войдите в свой аккаунт студента`}),(0,c.jsx)(e,{})]})],args:{isSubmitting:!1,onPasswordChange:()=>{},onRememberUsernameChange:()=>{},onSubmit:e=>e.preventDefault(),onUsernameChange:()=>{},password:``,rememberUsername:!1,username:``}};const d={},f={args:{isSubmitting:!0}},p={parameters:{authStep:`otp`},render:()=>(0,c.jsx)(r,{...l})},m={parameters:{authStep:`otp`},render:()=>(0,c.jsx)(r,{...l,otpCode:`123456`,isSubmitting:!0})},h={parameters:{authStep:`otp`},render:()=>(0,c.jsx)(r,{...l,actionCooldownSeconds:0})},g={parameters:{authStep:`otp`},render:()=>(0,c.jsx)(r,{...l,actionCooldownSeconds:0,actionInFlight:`email`})},_={...p,globals:{theme:`dark`}},v={...p,globals:{textScale:`large`}},y={render:function(e){let[t,r]=(0,s.useState)(``),[a,l]=(0,s.useState)(``),[u,d]=(0,s.useState)(!1),[f,p]=(0,s.useState)(!1);return(0,c.jsxs)(o,{gap:`4`,children:[(0,c.jsx)(n,{...e,username:t,password:a,rememberUsername:u,onUsernameChange:r,onPasswordChange:l,onRememberUsernameChange:d,onSubmit:e=>{e.preventDefault(),p(!0)}}),(0,c.jsx)(i,{size:`sm`,role:`status`,children:f?`Форма отправлена в примере`:`Ожидается заполнение`})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isSubmitting: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} otpCode="123456" isSubmitting />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    authStep: "otp"
  },
  render: () => <AuthOtpForm {...otp} actionCooldownSeconds={0} actionInFlight="email" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Otp,
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Otp,
  globals: {
    textScale: "large"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const b=[`Login`,`Submitting`,`Otp`,`OtpSubmitting`,`OtpReady`,`OtpActionPending`,`Dark`,`LargeText`,`InteractiveLogin`];export{_ as Dark,y as InteractiveLogin,v as LargeText,d as Login,p as Otp,g as OtpActionPending,h as OtpReady,m as OtpSubmitting,f as Submitting,b as __namedExportsOrder,u as default};