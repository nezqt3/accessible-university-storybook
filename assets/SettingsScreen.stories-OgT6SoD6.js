import"./preload-helper-DGWYlufl.js";import{t as e}from"./useTranslation-Ch5uCjQR.js";import{t,y as n}from"./iframe-B4LKz5fK.js";import"./react-dom-BH_8jEOt.js";import"./chunk-OE4NN4TA-BQcHIZJi.js";/* empty css           */import"./createLucideIcon-Cqzfk4mC.js";import{t as r}from"./calendar-days-gda4oukr.js";import"./check-CsOPYwak.js";import"./chevron-down-mIZNdmnO.js";import"./chevron-left-DoN0lHIA.js";import"./chevron-right-D2BAxYac.js";import"./circle-alert-CLP92oOl.js";import"./circle-check-f1_yuVH9.js";import{t as i}from"./external-link-NoWmvSDQ.js";import{r as a,t as o}from"./SettingsLayout-CXzzp1Ay.js";import{t as s}from"./globe-DPz2PPMH.js";import"./Alert-BtkjF_jr.js";import{n as c,t as l}from"./projectLinks-v2S7kl9W.js";import"./moon-DdsXE5Kk.js";import"./search-DCwDsx76.js";import{t as u}from"./send-YF7PQXK-.js";import"./trash-2-D-614z31.js";import{t as d}from"./users-STItnD6R.js";import"./x-aIX4-Ysv.js";import"./motion-BSxM25dS.js";import"./BackButton-o5Fpi88d.js";import"./BackButton-DJ11xob5.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-CMQAvkJ-.js";import"./Button-BSxYERbh.js";import"./IconButton-brlandGx.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-Dlth1W31.js";import"./CloseButton-DuLuJ11g.js";import"./Pressable-CUg6ryb7.js";import"./Pressable-B92bGPbW.js";import"./Badge-C2wuhY-p.js";import"./Badge-BilbQ7OI.js";import"./Card-BgVtbWy2.js";import"./Card-BTpC5DGf.js";import{n as f,t as p}from"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./Alert-ys5X1zSQ.js";import"./EmptyState-CNjYtTfK.js";import"./EmptyState-Ivo_4GWO.js";import"./proxy-Dnaxw7vE.js";import"./ModalOverlay-DsbVphhP.js";import"./AnimatePresence-DE1K5ELB.js";import"./use-reduced-motion-D1xf7gmi.js";import"./useLazyAsset-CS8jW2wd.js";import"./ErrorState-CrPyC2CI.js";import"./PageLoadingFallback-B6vY67cH.js";import"./Spinner-Czv667lT.js";import"./Loader-t6os_2yw.js";import"./PageLoadingFallback-2oWqWu_P.js";import"./NotificationStatus-D3-kEoZH.js";import"./Skeleton-DRV_N5cr.js";import"./Skeleton-B4XjFKC-.js";import"./Checkbox-CZ98AmAD.js";import"./Checkbox-BPZuTt7k.js";import"./FormField-DMSh2HXx.js";import"./FormField-Dm-RTxrN.js";import"./Input-DXvu1Y6H.js";import"./Input-CZx1ckHV.js";import"./OtpInput-BYvEa9fZ.js";import"./Switch-BT4A8Nwy.js";import"./Select-DGahYBpE.js";import"./Modal-BNO3joPp.js";import"./ModalHeader-BBxKWgyV.js";import"./ModalHeader-CxQ2g3I2.js";import"./Select-Ba6AdoTw.js";import"./Switch-8_mfPqfI.js";import"./Textarea-B5aSFv_F.js";import"./Textarea-DC33Ir5K.js";import"./Grid-BE-uxlqd.js";import"./Inline-j0UFlr8H.js";import"./Inline-C7M9bN4S.js";import"./Layout-Bfljl2za.js";import"./Layout-BM_IwlmX.js";import{t as m}from"./Stack-BEfcK43M.js";import"./Stack-duc46O7L.js";import"./Pagination-BFTCdYW-.js";import"./Pagination-CRDuVwzu.js";import"./Tabs-Ch-Dn8gM.js";import"./Tabs-C7Z4yjbL.js";import"./DatePickerModal-CVRGAVC5.js";import"./DatePickerModal-C9bsjxHz.js";import"./TicketCodeModal-5HpvzwuA.js";import{t as h}from"./ListRow-BqlvWJF6.js";import"./ListRow-Cq2I6Jbp.js";import"./ServiceCard-DxaWhDru.js";import"./ServiceCard-CTqOttal.js";import{r as g,t as _}from"./Theme-jpsO0ET-.js";import{t as v}from"./Radio-N3GDaLXI.js";import"./Radio-CDgLFX5T.js";var y=n(),b=t();function x({currentRole:t,currentRoleOptionKey:n,selectableRoles:r,hasCurrentRoleOption:i,isRoleUpdating:o,onRoleSelect:s}){let{t:c}=e(`settings`),l=e=>e?c(`roles.${e}`,{defaultValue:e}):c(`roles.notSelected`);return r.length===0?(0,b.jsx)(f,{size:`sm`,tone:`muted`,children:c(`data.noRoles`)}):(0,b.jsxs)(`div`,{className:`settings-choice-list`,role:`radiogroup`,"aria-label":c(`data.userRole`),children:[t&&!i?(0,b.jsx)(v,{name:`settings-role`,checked:!0,disabled:!0,label:l(t),description:c(`data.currentRole`)}):null,r.map(e=>{let t=a(e),r=t===n;return(0,b.jsx)(v,{name:`settings-role`,value:t,checked:r,disabled:o||r,label:l(e.user_role),description:c(`data.profile`),onChange:()=>void s(e)},t)})]})}x.__docgenInfo={description:``,methods:[],displayName:`RoleSelector`,props:{currentRole:{required:!1,tsType:{name:`string`},description:``},currentRoleOptionKey:{required:!1,tsType:{name:`string`},description:``},selectableRoles:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  user_role?: UserRole;
  selectable?: boolean | null;
  base_profile_id?: number;
  sso_login?: string;
}`,signature:{properties:[{key:`user_role`,value:{name:`union`,raw:`"STUDENT" | "EMPLOYEE" | "APPLICANT" | "OLYMPIAD_PARTICIPANT" | string`,elements:[{name:`literal`,value:`"STUDENT"`},{name:`literal`,value:`"EMPLOYEE"`},{name:`literal`,value:`"APPLICANT"`},{name:`literal`,value:`"OLYMPIAD_PARTICIPANT"`},{name:`string`}],required:!1}},{key:`selectable`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`base_profile_id`,value:{name:`number`,required:!1}},{key:`sso_login`,value:{name:`string`,required:!1}}]}}],raw:`UserRoleInfo[]`},description:``},hasCurrentRoleOption:{required:!0,tsType:{name:`boolean`},description:``},isRoleUpdating:{required:!0,tsType:{name:`boolean`},description:``},onRoleSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(roleInfo?: UserRoleInfo) => void | Promise<void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  user_role?: UserRole;
  selectable?: boolean | null;
  base_profile_id?: number;
  sso_login?: string;
}`,signature:{properties:[{key:`user_role`,value:{name:`union`,raw:`"STUDENT" | "EMPLOYEE" | "APPLICANT" | "OLYMPIAD_PARTICIPANT" | string`,elements:[{name:`literal`,value:`"STUDENT"`},{name:`literal`,value:`"EMPLOYEE"`},{name:`literal`,value:`"APPLICANT"`},{name:`literal`,value:`"OLYMPIAD_PARTICIPANT"`},{name:`string`}],required:!1}},{key:`selectable`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`base_profile_id`,value:{name:`number`,required:!1}},{key:`sso_login`,value:{name:`string`,required:!1}}]}},name:`roleInfo`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``}}};function S(t){let{t:n}=e(`settings`);return(0,b.jsxs)(m,{gap:`4`,children:[(0,b.jsx)(p,{level:2,children:n(`sections.data`)}),(0,b.jsx)(f,{size:`sm`,tone:`muted`,children:n(`data.userRole`)}),(0,b.jsx)(x,{...t})]})}S.__docgenInfo={description:``,methods:[],displayName:`SettingsDataSection`,props:{currentRole:{required:!1,tsType:{name:`string`},description:``},currentRoleOptionKey:{required:!1,tsType:{name:`string`},description:``},selectableRoles:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  user_role?: UserRole;
  selectable?: boolean | null;
  base_profile_id?: number;
  sso_login?: string;
}`,signature:{properties:[{key:`user_role`,value:{name:`union`,raw:`"STUDENT" | "EMPLOYEE" | "APPLICANT" | "OLYMPIAD_PARTICIPANT" | string`,elements:[{name:`literal`,value:`"STUDENT"`},{name:`literal`,value:`"EMPLOYEE"`},{name:`literal`,value:`"APPLICANT"`},{name:`literal`,value:`"OLYMPIAD_PARTICIPANT"`},{name:`string`}],required:!1}},{key:`selectable`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`base_profile_id`,value:{name:`number`,required:!1}},{key:`sso_login`,value:{name:`string`,required:!1}}]}}],raw:`UserRoleInfo[]`},description:``},hasCurrentRoleOption:{required:!0,tsType:{name:`boolean`},description:``},isRoleUpdating:{required:!0,tsType:{name:`boolean`},description:``},onRoleSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(roleInfo?: UserRoleInfo) => void | Promise<void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  user_role?: UserRole;
  selectable?: boolean | null;
  base_profile_id?: number;
  sso_login?: string;
}`,signature:{properties:[{key:`user_role`,value:{name:`union`,raw:`"STUDENT" | "EMPLOYEE" | "APPLICANT" | "OLYMPIAD_PARTICIPANT" | string`,elements:[{name:`literal`,value:`"STUDENT"`},{name:`literal`,value:`"EMPLOYEE"`},{name:`literal`,value:`"APPLICANT"`},{name:`literal`,value:`"OLYMPIAD_PARTICIPANT"`},{name:`string`}],required:!1}},{key:`selectable`,value:{name:`union`,raw:`boolean | null`,elements:[{name:`boolean`},{name:`null`}],required:!1}},{key:`base_profile_id`,value:{name:`number`,required:!1}},{key:`sso_login`,value:{name:`string`,required:!1}}]}},name:`roleInfo`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``}}};function C(e){return e===`support`?(0,b.jsx)(c,{size:20}):e===`community`?(0,b.jsx)(d,{size:20}):e===`calendar`?(0,b.jsx)(r,{size:20}):e===`official`?(0,b.jsx)(s,{size:20}):(0,b.jsx)(u,{size:20})}C.__docgenInfo={description:``,methods:[],displayName:`getProjectLinkIcon`};function w(){let{t}=e(`settings`);return(0,b.jsx)(b.Fragment,{children:l.map(e=>{let n=[`support`,`community`,`official`].includes(e.kind),r=n?t(`links.${e.kind}.title`,{defaultValue:e.title}):e.title,a=n?t(`links.${e.kind}.description`,{defaultValue:e.description}):e.description;return(0,b.jsx)(`a`,{className:`settings-project-link`,href:e.url,target:`_blank`,rel:`noreferrer`,children:(0,b.jsx)(h,{title:r,description:a,leading:C(e.kind),trailing:(0,b.jsx)(i,{size:18,"aria-hidden":`true`})})},e.url)})})}w.__docgenInfo={description:``,methods:[],displayName:`ProjectLinksList`};function T(){let{t}=e(`settings`);return(0,b.jsxs)(m,{gap:`4`,children:[(0,b.jsx)(p,{level:2,children:t(`sections.information`)}),(0,b.jsx)(w,{})]})}T.__docgenInfo={description:``,methods:[],displayName:`SettingsInfoSection`};var E={title:`Screens/Settings`,component:o,parameters:{layout:`fullscreen`},args:{onClose:()=>{},isDarkTheme:!1,isColorAccessibleMode:!1,themePalette:g.CLASSIC,textScale:_.DEFAULT,language:`ru`,onToggleTheme:()=>{},onToggleColorAccessibleMode:()=>{},onThemePaletteChange:()=>{},onTextScaleChange:()=>{},onLanguageChange:()=>{},onClearCache:()=>{},onLogout:()=>{}}};const D={},O={args:{onLogout:void 0}},k={args:{isDarkTheme:!0},globals:{theme:`dark`}},A={args:{textScale:_.LARGE},globals:{textScale:`large`}},j={args:{language:`en`},globals:{language:`en`}},M={args:{children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(S,{currentRole:`STUDENT`,currentRoleOptionKey:`STUDENT:1`,selectableRoles:[{user_role:`STUDENT`,base_profile_id:1},{user_role:`EMPLOYEE`,base_profile_id:2}],hasCurrentRoleOption:!0,isRoleUpdating:!1,onRoleSelect:()=>{}}),(0,b.jsx)(T,{})]})},parameters:{docs:{description:{story:`Существующие неподключённые секции. Story не включает их в приложение.`}}}},N={render:function(e){let[t,n]=(0,y.useState)(!1),[r,i]=(0,y.useState)(!1),[a,s]=(0,y.useState)(g.CLASSIC),[c,l]=(0,y.useState)(_.DEFAULT);return(0,b.jsx)(o,{...e,isDarkTheme:t,onToggleTheme:()=>n(e=>!e),isColorAccessibleMode:r,onToggleColorAccessibleMode:()=>i(e=>!e),themePalette:a,onThemePaletteChange:s,textScale:c,onTextScaleChange:l})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onLogout: undefined
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isDarkTheme: true
  },
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    textScale: TextScale.LARGE
  },
  globals: {
    textScale: "large"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    language: "en"
  },
  globals: {
    language: "en"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <SettingsDataSection currentRole="STUDENT" currentRoleOptionKey="STUDENT:1" selectableRoles={[{
        user_role: "STUDENT",
        base_profile_id: 1
      }, {
        user_role: "EMPLOYEE",
        base_profile_id: 2
      }]} hasCurrentRoleOption isRoleUpdating={false} onRoleSelect={() => {}} />
        <SettingsInfoSection />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Существующие неподключённые секции. Story не включает их в приложение."
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [dark, setDark] = useState(false);
    const [accessible, setAccessible] = useState(false);
    const [palette, setPalette] = useState(ThemePalette.CLASSIC);
    const [scale, setScale] = useState(TextScale.DEFAULT);
    return <SettingsLayout {...args} isDarkTheme={dark} onToggleTheme={() => setDark(value => !value)} isColorAccessibleMode={accessible} onToggleColorAccessibleMode={() => setAccessible(value => !value)} themePalette={palette} onThemePaletteChange={setPalette} textScale={scale} onTextScaleChange={setScale} />;
  }
}`,...N.parameters?.docs?.source}}};const P=[`Authenticated`,`Guest`,`Dark`,`LargeText`,`English`,`OptionalSections`,`Interactive`];export{D as Authenticated,k as Dark,j as English,O as Guest,N as Interactive,A as LargeText,M as OptionalSections,P as __namedExportsOrder,E as default};