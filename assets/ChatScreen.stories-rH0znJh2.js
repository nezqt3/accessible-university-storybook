import"./preload-helper-DGWYlufl.js";import"./useTranslation-DsOmfLg0.js";import{S as e,t}from"./iframe-CA1tRuLH.js";import"./react-dom-B3bHQpZ9.js";import"./api-2ovOr7ng.js";import"./createLucideIcon-B0XCVSnz.js";import"./arrow-up-right-DXWERzBB.js";import"./circle-alert-DT_LqibJ.js";import"./circle-check-hvl1kg6-.js";import"./clock-3-DB3bSNsj.js";import"./info-2XmxvIYa.js";import"./search-BGs_KSxo.js";import"./send-CQG8HVSr.js";import{c as n,l as r,n as i,r as a,s as o,t as s}from"./ChatSearchSection-DtY1AMhE.js";import"./trash-2-jNNCAzJG.js";import"./Alert-CPIzLK33.js";import"./x-BnvmefyB.js";import"./motion-C9fxwz80.js";import"./InlineSpinner-BtdkRkXG.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-rjz6uuRi.js";import"./Button-BA_jpygv.js";import"./IconButton-C3QD1e8a.js";import"./IconButton-WT9EAVsO.js";import{t as c}from"./CloseButton-D-_bl2ee.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-DX5bCrQm.js";import"./Pressable-Bg3DDMfh.js";import"./proxy-U5T6tT4W.js";import{t as l}from"./ModalOverlay-D0KBfW_-.js";import"./use-reduced-motion-CywbYQVi.js";import"./Card-Dw9Zqzk8.js";import"./Card-DdYWmRlF.js";import"./Typography-Vf11J9Je.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./EmptyState-D7rwcNuJ.js";import"./EmptyState-Crwa2nqk.js";import"./useLazyAsset-CEpeW7P1.js";import"./FormField-DYHExcHo.js";import"./FormField-00r7ntwY.js";import"./Input-DbXNNOP0.js";import"./Input-_61HGnzM.js";import"./Modal-CqUa9KYP.js";import"./Stack-CW1dR23i.js";import"./Stack-JZT35eEm.js";import"./Tabs-BTMsWcHv.js";import"./Tabs-BaxcPDxC.js";import"./ListRow-PEFMiutu.js";import"./ListRow-DjGVjjMg.js";var u=e(),d=t(),f={title:`Screens/HelpSearch`,component:s,parameters:{layout:`fullscreen`},decorators:[(e,t)=>(0,d.jsx)(l,{size:`expanded`,onClose:()=>{},children:(0,d.jsxs)(`div`,{className:`chat-modal`,children:[(0,d.jsxs)(`div`,{className:`chat-modal__top-nav`,children:[(0,d.jsx)(i,{activeTab:t.parameters.ai?n.AI:n.SEARCH,onChange:()=>{},aiEnabled:!!t.parameters.ai}),(0,d.jsx)(c,{onClose:()=>{}})]}),(0,d.jsx)(`div`,{className:`chat-modal__content`,children:(0,d.jsx)(e,{})}),t.parameters.ai?(0,d.jsx)(o,{chatQuery:``,setChatQuery:()=>{},onSend:()=>{},onStop:()=>{},isSending:!!t.parameters.sending}):null]})})],args:{searchQuery:``,setSearchQuery:()=>{},setIsSearchFocused:()=>{},recentQueries:[],onRecentQueryClick:()=>{},onRecentQueryRemove:()=>{},isSearchEmpty:!0,isSearchReady:!1,showRecentQueries:!1,isSearchLoading:!1,searchError:null,searchResults:[],searchGuideMessage:`Найдите расписание, профиль или нужный сервис по названию.`,onSearchResultClick:()=>{},getSearchResultMeta:()=>`Сервисы`,getSearchResultDescription:e=>e}};const p={},m={args:{showRecentQueries:!0,recentQueries:[`Расписание международных образовательных программ`,`Справка о периоде обучения`]}},h={args:{searchQuery:`р`,isSearchEmpty:!1}},g={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,isSearchLoading:!0}},_={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchError:`Не удалось загрузить результаты поиска. Попробуйте ещё раз.`}},v={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0}},y={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchResults:[{title:`Заказ справок и документов для предоставления в государственные учреждения`,url:`/main/profile/requests`,content:`Оформление справки об обучении, получение документов и просмотр текущего статуса обращения в учебное подразделение.`},{title:`Международные образовательные программы`,url:`/main/home/services`,content:`Подробные сведения о направлениях, подразделениях и контактах ответственных сотрудников.`}]}},b={render:()=>(0,d.jsx)(a,{chat:[]}),parameters:{ai:!0,docs:{description:{story:`Начальное состояние помощника Answer Flow.`}}}},x={parameters:{ai:!0},render:()=>(0,d.jsx)(a,{chat:[{id:`question`,type:r.USER,message:`Какие документы есть в коллекции?`},{id:`answer`,type:r.AI,message:`В коллекции есть правила обучения и другие документы университета.`,state:`done`,answerId:`answer-example`,canFeedback:!0}]})},S={parameters:{ai:!0,sending:!0},render:()=>(0,d.jsx)(a,{chat:[{id:`question`,type:r.USER,message:`Кто ректор Финансового университета?`},{id:`answer`,type:r.AI,message:``,state:`loading`}]})},C={...y,globals:{theme:`dark`}},w={...y,globals:{textScale:`large`}},T={render:function(e){let[t,n]=(0,u.useState)(``);return(0,d.jsx)(s,{...e,searchQuery:t,setSearchQuery:n,isSearchEmpty:!t,isSearchReady:t.length>=2})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showRecentQueries: true,
    recentQueries: ["Расписание международных образовательных программ", "Справка о периоде обучения"]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "р",
    isSearchEmpty: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    isSearchLoading: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    searchError: "Не удалось загрузить результаты поиска. Попробуйте ещё раз."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ChatAiSection chat={[]} />,
  parameters: {
    ai: true,
    docs: {
      description: {
        story: "Начальное состояние помощника Answer Flow."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    theme: "dark"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    textScale: "large"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function InteractiveInputExample(args) {
    const [query, setQuery] = useState("");
    return <ChatSearchSection {...args} searchQuery={query} setSearchQuery={setQuery} isSearchEmpty={!query} isSearchReady={query.length >= 2} />;
  }
}`,...T.parameters?.docs?.source}}};const E=[`Empty`,`Recent`,`ShortQuery`,`Loading`,`Error`,`NoResults`,`Results`,`AiWelcome`,`AiAnswer`,`AiLoading`,`Dark`,`LargeText`,`InteractiveInput`];export{x as AiAnswer,S as AiLoading,b as AiWelcome,C as Dark,p as Empty,_ as Error,T as InteractiveInput,w as LargeText,g as Loading,v as NoResults,m as Recent,y as Results,h as ShortQuery,E as __namedExportsOrder,f as default};