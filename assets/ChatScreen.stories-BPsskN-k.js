import"./preload-helper-DGWYlufl.js";import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./ChatHelpModal-AxVE0-N-.js";import"./useTranslation-C3Z1tYTP.js";import{t as s,w as c}from"./iframe-BWQ9bya-.js";import"./react-dom-DJAx-xjr.js";import"./client-AVrXl3O0.js";import"./api-CFUqr1b7.js";import"./cache-B9pmE6cz.js";import{i as l}from"./chunk-OE4NN4TA-CDL938BT.js";import"./createLucideIcon-VwXisgqe.js";import"./arrow-up-right-77L6gMj_.js";import"./circle-alert-DyyghV65.js";import"./circle-check-VKsYqJXe.js";import"./clock-3-De-EuQ3d.js";import"./info-dgFy7BYg.js";import"./search-DNrccIGH.js";import"./send-D8yqCcrs.js";import"./trash-2-Oe2AamYm.js";import"./Alert-DrLPQYRU.js";import"./x-B0zMJXD3.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BcUILXuS.js";import"./InlineSpinner-DGBp7q51.js";import{t as u}from"./Button-Bts8SiHS.js";import"./Button-BA_jpygv.js";import"./IconButton-BTFOrYWb.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-hK1S3r34.js";import{t as d}from"./CloseButton-CLXiGdep.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-BKGs8ya5.js";import"./Pressable-RrhW_cjo.js";import"./use-reduced-motion-B2yEO12g.js";import{t as f}from"./ModalOverlay-Dawcoiog.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import"./Card-CbTvXY5j.js";import"./Card-Doq15t3c.js";import"./Typography-CZ8GAg4R.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./EmptyState-CugtQnK7.js";import"./EmptyState-02ql18bx.js";import"./FormField-LssLkjZA.js";import"./FormField-C3pULiZ3.js";import"./Input-BuXSbUmQ.js";import"./Input-DXRPRK1S.js";import"./Modal-LZYuD64Z.js";import"./Textarea-CYrSj0Dz.js";import"./Textarea-BJVLi_Dg.js";import"./Stack-DRPRntz9.js";import"./Stack-CqlUafn4.js";import"./Tabs-CgMJ_Ihu.js";import"./Tabs-CszNVceh.js";import"./ListRow-MRBFi3kq.js";import"./ListRow-BtepeKeJ.js";import"./Radio-dAvDcSKw.js";import"./Radio-Dj7CdtHj.js";import"./dom-0nUtllgd.js";var p=c(),m=s(),h={title:`Screens/HelpSearch`,component:n,parameters:{layout:`fullscreen`},decorators:[(t,n)=>n.parameters.interactiveChat?(0,m.jsx)(l,{children:(0,m.jsx)(t,{})}):(0,m.jsx)(f,{size:`expanded`,onClose:()=>{},children:(0,m.jsxs)(`div`,{className:`chat-modal`,children:[(0,m.jsxs)(`div`,{className:`chat-modal__top-nav`,children:[(0,m.jsx)(i,{activeTab:n.parameters.ai?r.AI:r.SEARCH,onChange:()=>{},aiEnabled:!!n.parameters.ai}),(0,m.jsx)(d,{onClose:()=>{}})]}),(0,m.jsx)(`div`,{className:`chat-modal__content`,children:(0,m.jsx)(t,{})}),n.parameters.ai?(0,m.jsx)(e,{chatQuery:``,setChatQuery:()=>{},onSend:()=>{},onStop:()=>{},isSending:!!n.parameters.sending}):null]})})],args:{searchQuery:``,setSearchQuery:()=>{},setIsSearchFocused:()=>{},recentQueries:[],onRecentQueryClick:()=>{},onRecentQueryRemove:()=>{},isSearchEmpty:!0,isSearchReady:!1,showRecentQueries:!1,isSearchLoading:!1,searchError:null,searchResults:[],searchGuideMessage:`Найдите расписание, профиль или нужный сервис по названию.`,onSearchResultClick:()=>{},getSearchResultMeta:()=>`Сервисы`,getSearchResultDescription:e=>e}};const g={},_={args:{showRecentQueries:!0,recentQueries:[`Расписание международных образовательных программ`,`Справка о периоде обучения`]}},v={args:{searchQuery:`р`,isSearchEmpty:!1}},y={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,isSearchLoading:!0}},b={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchError:`Не удалось загрузить результаты поиска. Попробуйте ещё раз.`}},x={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0}},S={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchResults:[{title:`Заказ справок и документов для предоставления в государственные учреждения`,url:`/main/profile/requests`,content:`Оформление справки об обучении, получение документов и просмотр текущего статуса обращения в учебное подразделение.`},{title:`Международные образовательные программы`,url:`/main/home/services`,content:`Подробные сведения о направлениях, подразделениях и контактах ответственных сотрудников.`}]}},C={render:()=>(0,m.jsx)(t,{chat:[]}),parameters:{ai:!0,docs:{description:{story:`Начальное состояние помощника Answer Flow.`}}}},w={parameters:{ai:!0},render:()=>(0,m.jsx)(t,{chat:[{id:`question`,type:a.USER,message:`Какие документы есть в коллекции?`},{id:`answer`,type:a.AI,message:`В коллекции есть правила обучения и другие документы университета.`,state:`done`,answerId:`answer-example`,canFeedback:!0}]})},T={parameters:{ai:!0,sending:!0},render:()=>(0,m.jsx)(t,{chat:[{id:`question`,type:a.USER,message:`Кто ректор Финансового университета?`},{id:`answer`,type:a.AI,message:``,state:`loading`}]})},E={...S,globals:{theme:`dark`}},D={...S,globals:{textScale:`large`}},O={render:function(e){let[t,r]=(0,p.useState)(``);return(0,m.jsx)(n,{...e,searchQuery:t,setSearchQuery:r,isSearchEmpty:!t,isSearchReady:t.length>=2})}},k={parameters:{interactiveChat:!0,docs:{description:{story:`Реальное окно ассистента: переключение Поиск / Ответ ИИ, закрытие и повторное открытие с подготовленной иллюстрацией. Чтобы увидеть подсказку поиска, уберите фокус из поля.`}}},render:function({reducedMotion:e}){let[t,n]=(0,p.useState)(!0);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{onClick:()=>n(!0),children:`Открыть ассистент`}),(0,m.jsx)(o,{isOpen:t,onClose:()=>n(!1),reducedMotion:e})]})}},A={...k,args:{reducedMotion:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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