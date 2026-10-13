import"./preload-helper-DGWYlufl.js";import"./useTranslation-CmLHI3t9.js";import{S as e,t}from"./iframe-CjG9XUDi.js";import"./react-dom-Bzb2Wwvd.js";import"./client-DMLkocDF.js";import"./api-DZz9UYpn.js";import"./cache-D-nsfblE.js";import{i as n}from"./chunk-OE4NN4TA-wEINCz3E.js";import"./createLucideIcon-B3I6TOCg.js";import"./arrow-up-right-BixV1wLU.js";import"./circle-alert-BOPItaYk.js";import"./circle-check-D_KhmlIR.js";import"./clock-3-g5MeN2f8.js";import"./info-DcuO-vGN.js";import"./search-BzOEJAPi.js";import"./send-B740OMn7.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./ChatHelpModal-DWphRgxk.js";import"./trash-2-C1DTdq3i.js";import"./Alert-DfTVgzFv.js";import"./x-BuL-VI8h.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-uJA94-u8.js";import"./InlineSpinner-DGBp7q51.js";import{t as u}from"./Button-Do7STLDw.js";import"./Button-BA_jpygv.js";import"./IconButton-DBmJPeP7.js";import"./IconButton-WT9EAVsO.js";import{t as d}from"./CloseButton-bHhLiBVp.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-G1UtMFgk.js";import"./Pressable-Bg3DDMfh.js";import"./use-reduced-motion-BLulvk4g.js";import{t as f}from"./ModalOverlay-DXigLfyE.js";import"./AnimatePresence-CDzv_VfZ.js";import"./BlurTransition-DHcxrdx3.js";import"./BlurTransition-Lagju-WE.js";import"./Card-CIUYoioS.js";import"./Card-DMf2-Jiv.js";import"./Typography-D6Zus2qe.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./EmptyState-BBbBPddD.js";import"./EmptyState-Q6WzCJvL.js";import"./FormField-BD4v5OwC.js";import"./FormField-DL6kMHw0.js";import"./Input-DpRj3OSG.js";import"./Input-DLJ-L1Fs.js";import"./Modal-DQLMVgUD.js";import"./Stack-CrY7xAue.js";import"./Stack-Cjv54EAV.js";import"./Tabs-tkuWzdMh.js";import"./Tabs-wkaJQrPk.js";import"./ListRow-BV_dJuBm.js";import"./ListRow-B7yOQXqt.js";import"./dom-D5QRqxAG.js";var p=e(),m=t(),h={title:`Screens/HelpSearch`,component:a,parameters:{layout:`fullscreen`},decorators:[(e,t)=>t.parameters.interactiveChat?(0,m.jsx)(n,{children:(0,m.jsx)(e,{})}):(0,m.jsx)(f,{size:`expanded`,onClose:()=>{},children:(0,m.jsxs)(`div`,{className:`chat-modal`,children:[(0,m.jsxs)(`div`,{className:`chat-modal__top-nav`,children:[(0,m.jsx)(s,{activeTab:t.parameters.ai?o.AI:o.SEARCH,onChange:()=>{},aiEnabled:!!t.parameters.ai}),(0,m.jsx)(d,{onClose:()=>{}})]}),(0,m.jsx)(`div`,{className:`chat-modal__content`,children:(0,m.jsx)(e,{})}),t.parameters.ai?(0,m.jsx)(r,{chatQuery:``,setChatQuery:()=>{},onSend:()=>{},onStop:()=>{},isSending:!!t.parameters.sending}):null]})})],args:{searchQuery:``,setSearchQuery:()=>{},setIsSearchFocused:()=>{},recentQueries:[],onRecentQueryClick:()=>{},onRecentQueryRemove:()=>{},isSearchEmpty:!0,isSearchReady:!1,showRecentQueries:!1,isSearchLoading:!1,searchError:null,searchResults:[],searchGuideMessage:`Найдите расписание, профиль или нужный сервис по названию.`,onSearchResultClick:()=>{},getSearchResultMeta:()=>`Сервисы`,getSearchResultDescription:e=>e}};const g={},_={args:{showRecentQueries:!0,recentQueries:[`Расписание международных образовательных программ`,`Справка о периоде обучения`]}},v={args:{searchQuery:`р`,isSearchEmpty:!1}},y={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,isSearchLoading:!0}},b={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchError:`Не удалось загрузить результаты поиска. Попробуйте ещё раз.`}},x={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0}},S={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchResults:[{title:`Заказ справок и документов для предоставления в государственные учреждения`,url:`/main/profile/requests`,content:`Оформление справки об обучении, получение документов и просмотр текущего статуса обращения в учебное подразделение.`},{title:`Международные образовательные программы`,url:`/main/home/services`,content:`Подробные сведения о направлениях, подразделениях и контактах ответственных сотрудников.`}]}},C={render:()=>(0,m.jsx)(i,{chat:[]}),parameters:{ai:!0,docs:{description:{story:`Начальное состояние помощника Answer Flow.`}}}},w={parameters:{ai:!0},render:()=>(0,m.jsx)(i,{chat:[{id:`question`,type:c.USER,message:`Какие документы есть в коллекции?`},{id:`answer`,type:c.AI,message:`В коллекции есть правила обучения и другие документы университета.`,state:`done`,answerId:`answer-example`,canFeedback:!0}]})},T={parameters:{ai:!0,sending:!0},render:()=>(0,m.jsx)(i,{chat:[{id:`question`,type:c.USER,message:`Кто ректор Финансового университета?`},{id:`answer`,type:c.AI,message:``,state:`loading`}]})},E={...S,globals:{theme:`dark`}},D={...S,globals:{textScale:`large`}},O={render:function(e){let[t,n]=(0,p.useState)(``);return(0,m.jsx)(a,{...e,searchQuery:t,setSearchQuery:n,isSearchEmpty:!t,isSearchReady:t.length>=2})}},k={parameters:{interactiveChat:!0,docs:{description:{story:`Реальное окно ассистента: переключение Поиск / Ответ ИИ, закрытие и повторное открытие с подготовленной иллюстрацией. Чтобы увидеть подсказку поиска, уберите фокус из поля.`}}},render:function({reducedMotion:e}){let[t,n]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{onClick:()=>n(!0),children:`Открыть ассистент`}),(0,m.jsx)(l,{isOpen:t,onClose:()=>n(!1),reducedMotion:e})]})}},A={...k,args:{reducedMotion:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    showRecentQueries: true,
    recentQueries: ["Расписание международных образовательных программ", "Справка о периоде обучения"]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "р",
    isSearchEmpty: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    isSearchLoading: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    searchError: "Не удалось загрузить результаты поиска. Попробуйте ещё раз."
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    searchResults: [{
      title: "Заказ справок и документов для предоставления в государственные учреждения",
      url: "/main/profile/requests",
      content: "Оформление справки об обучении, получение документов и просмотр текущего статуса обращения в учебное подразделение."
    }, {
      title: "Международные образовательные программы",
      url: "/main/home/services",
      content: "Подробные сведения о направлениях, подразделениях и контактах ответственных сотрудников."
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ChatAiSection chat={[]} />,
  parameters: {
    ai: true,
    docs: {
      description: {
        story: "Начальное состояние помощника Answer Flow."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    ai: true
  },
  render: () => <ChatAiSection chat={[{
    id: "question",
    type: TypeUser.USER,
    message: "Какие документы есть в коллекции?"
  }, {
    id: "answer",
    type: TypeUser.AI,
    message: "В коллекции есть правила обучения и другие документы университета.",
    state: "done",
    answerId: "answer-example",
    canFeedback: true
  }]} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    ai: true,
    sending: true
  },
  render: () => <ChatAiSection chat={[{
    id: "question",
    type: TypeUser.USER,
    message: "Кто ректор Финансового университета?"
  }, {
    id: "answer",
    type: TypeUser.AI,
    message: "",
    state: "loading"
  }]} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    theme: "dark"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    textScale: "large"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function InteractiveInputExample(args) {
    const [query, setQuery] = useState("");
    return <ChatSearchSection {...args} searchQuery={query} setSearchQuery={setQuery} isSearchEmpty={!query} isSearchReady={query.length >= 2} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    interactiveChat: true,
    docs: {
      description: {
        story: "Реальное окно ассистента: переключение Поиск / Ответ ИИ, закрытие и повторное открытие с подготовленной иллюстрацией. Чтобы увидеть подсказку поиска, уберите фокус из поля."
      }
    }
  },
  render: function GuideTabSwitchingExample({
    reducedMotion
  }) {
    const [isOpen, setIsOpen] = useState(true);
    return <>
        <Button onClick={() => setIsOpen(true)}>Открыть ассистент</Button>
        <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} reducedMotion={reducedMotion} />
      </>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...GuideTabSwitching,
  args: {
    reducedMotion: true
  }
}`,...A.parameters?.docs?.source}}};const j=[`Empty`,`Recent`,`ShortQuery`,`Loading`,`Error`,`NoResults`,`Results`,`AiWelcome`,`AiAnswer`,`AiLoading`,`Dark`,`LargeText`,`InteractiveInput`,`GuideTabSwitching`,`GuideTabSwitchingReducedMotion`];export{w as AiAnswer,T as AiLoading,C as AiWelcome,E as Dark,g as Empty,b as Error,k as GuideTabSwitching,A as GuideTabSwitchingReducedMotion,O as InteractiveInput,D as LargeText,y as Loading,x as NoResults,_ as Recent,S as Results,v as ShortQuery,j as __namedExportsOrder,h as default};