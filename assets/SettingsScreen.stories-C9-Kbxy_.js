import"./preload-helper-DGWYlufl.js";import{t as e}from"./useTranslation-CZVpUEvE.js";import{t,y as n}from"./iframe-Ow4Lrb8m.js";import"./react-dom-DyzBSA2_.js";import"./chunk-OE4NN4TA-CceNxg-m.js";/* empty css           */import"./createLucideIcon-B3UreED2.js";import"./bell-CK6aFWq2.js";import{t as r}from"./calendar-days-RV0OtRGn.js";import"./check-Y1Fq9Jt0.js";import"./chevron-down-BB112KGp.js";import"./chevron-left-jM3I3WFd.js";import"./chevron-right-rKwtEkxp.js";import"./circle-alert-c4qnadez.js";import"./circle-check-DNyOJUlI.js";import{t as i}from"./external-link-DSj2zt4h.js";import{r as a,t as o}from"./SettingsLayout-AOfnCcsq.js";import{t as s}from"./globe-8nHI6G9j.js";import"./Alert-BCXKhV4A.js";import{n as c,t as l}from"./projectLinks-DaThz0gF.js";import"./moon-bvCQAzpe.js";import"./search-0-f7zWZu.js";import{t as u}from"./send-Dxk5wjsx.js";import"./trash-2-DPXPYdXE.js";import{t as d}from"./users-BFMhryWB.js";import"./x-KjvGFWaj.js";import"./motion-BSxM25dS.js";import"./BackButton-CwqNC52F.js";import"./BackButton-DJ11xob5.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import"./IconButton-Dpu6CZ7U.js";import"./IconButton-CkfbeZNf.js";import"./CloseButton-D4R7keM6.js";import"./CloseButton-DuLuJ11g.js";import"./Pressable-DKvY6Bfh.js";import"./Pressable-B92bGPbW.js";import"./Badge-DYo_OMFx.js";import"./Badge-BilbQ7OI.js";import"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import{n as f,t as p}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./Alert-ys5X1zSQ.js";import"./EmptyState-Cg6c5RX9.js";import"./EmptyState-Ivo_4GWO.js";import"./proxy-BJb5GNu-.js";import"./ModalOverlay-D1QdAFfV.js";import"./AnimatePresence-CVzmj_JQ.js";import"./use-reduced-motion-B2DzoRdd.js";import"./useLazyAsset-bzFJy3wV.js";import"./ErrorState-ZO-_Xxmz.js";import"./PageLoadingFallback-B6vY67cH.js";import"./Spinner-DUlAzwoz.js";import"./Loader-D2d-7wkU.js";import"./PageLoadingFallback-DOdkITg4.js";import"./NotificationStatus-B-4kIe1a.js";import"./Skeleton-BoSYRP1p.js";import"./Skeleton-B4XjFKC-.js";import"./Checkbox-CRqRxJQI.js";import"./Checkbox-BPZuTt7k.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import"./Input-Aczuq6Jz.js";import"./Input-CZx1ckHV.js";import"./OtpInput-D1lZEvqz.js";import"./Switch-BT4A8Nwy.js";import"./Select-DX7TCHOU.js";import"./Modal-CZgq0ZUi.js";import"./ModalHeader-D38pGhUQ.js";import"./ModalHeader-CxQ2g3I2.js";import"./Select-Ba6AdoTw.js";import"./Switch-Ct3V3yyb.js";import"./Textarea-Dp_j7b5N.js";import"./Textarea-DC33Ir5K.js";import"./Grid-LpQH2i0V.js";import"./Inline-Bn5Qldda.js";import"./Inline-C7M9bN4S.js";import"./Layout-bf8yQI7p.js";import"./Layout-BM_IwlmX.js";import{t as m}from"./Stack-B9h0CGiv.js";import"./Stack-duc46O7L.js";import"./Pagination-ByEHeK5Q.js";import"./Pagination-CRDuVwzu.js";import"./Tabs-CJBHFrgO.js";import"./Tabs-C7Z4yjbL.js";import"./DatePickerModal-BjhwX5oP.js";import"./DatePickerModal-C9bsjxHz.js";import"./TicketCodeModal-PdsE2LuW.js";import{t as h}from"./ListRow-DD3E4KQf.js";import"./ListRow-Cq2I6Jbp.js";import"./ServiceCard-CSALaSKP.js";import"./ServiceCard-CTqOttal.js";import{r as g,t as _}from"./Theme-jpsO0ET-.js";import{t as v}from"./Radio-eYiAxufT.js";import"./Radio-CDgLFX5T.js";var y=n(),b=t();function x({currentRole:t,currentRoleOptionKey:n,selectableRoles:r,hasCurrentRoleOption:i,isRoleUpdating:o,onRoleSelect:s}){let{t:c}=e(`settings`),l=e=>e?c(`roles.${e}`,{defaultValue:e}):c(`roles.notSelected`);return r.length===0?(0,b.jsx)(f,{size:`sm`,tone:`muted`,children:c(`data.noRoles`)}):(0,b.jsxs)(`div`,{className:`settings-choice-list`,role:`radiogroup`,"aria-label":c(`data.userRole`),children:[t&&!i?(0,b.jsx)(v,{name:`settings-role`,checked:!0,disabled:!0,label:l(t),description:c(`data.currentRole`)}):null,r.map(e=>{let t=a(e),r=t===n;return(0,b.jsx)(v,{name:`settings-role`,value:t,checked:r,disabled:o||r,label:l(e.user_role),description:c(`data.profile`),onChange:()=>void s(e)},t)})]})}x.__docgenInfo={description:``,methods:[],displayName:`RoleSelector`,props:{currentRole:{required:!1,tsType:{name:`string`},description:``},currentRoleOptionKey:{required:!1,tsType:{name:`string`},description:``},selectableRoles:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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