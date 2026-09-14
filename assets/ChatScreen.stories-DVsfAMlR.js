import"./preload-helper-DGWYlufl.js";import"./useTranslation-CZVpUEvE.js";import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import"./createLucideIcon-B3UreED2.js";import"./arrow-up-right-mP2_K46Z.js";import"./circle-alert-c4qnadez.js";import"./circle-check-DNyOJUlI.js";import"./Alert-BCXKhV4A.js";import"./search-0-f7zWZu.js";import"./sparkles-RngOVsi5.js";import"./user-ClfCE6vH.js";import"./x-KjvGFWaj.js";import"./motion-BSxM25dS.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import"./IconButton-Dpu6CZ7U.js";import"./IconButton-CkfbeZNf.js";import{t as n}from"./CloseButton-D4R7keM6.js";import"./CloseButton-DuLuJ11g.js";import"./Pressable-DKvY6Bfh.js";import"./Pressable-B92bGPbW.js";import"./Card-BkRNXU5D.js";import"./Card-BTpC5DGf.js";import"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import"./Alert-ys5X1zSQ.js";import"./EmptyState-Cg6c5RX9.js";import"./EmptyState-Ivo_4GWO.js";import"./proxy-BJb5GNu-.js";import{t as r}from"./ModalOverlay-D1QdAFfV.js";import"./use-reduced-motion-B2DzoRdd.js";import"./useLazyAsset-bzFJy3wV.js";import"./FormField-l9e-dAxF.js";import"./FormField-Dm-RTxrN.js";import"./Input-Aczuq6Jz.js";import"./Input-CZx1ckHV.js";import"./Modal-CZgq0ZUi.js";import"./Stack-B9h0CGiv.js";import"./Stack-duc46O7L.js";import"./Tabs-CJBHFrgO.js";import"./Tabs-C7Z4yjbL.js";import"./ListRow-DD3E4KQf.js";import"./ListRow-Cq2I6Jbp.js";import{i,n as a,r as o,t as s}from"./ChatHelpModal-Bix1LUsj.js";var c=t(),l=e(),u={title:`Screens/HelpSearch`,component:s,parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsx)(r,{size:`expanded`,onClose:()=>{},children:(0,l.jsxs)(`div`,{className:`chat-modal`,children:[(0,l.jsxs)(`div`,{className:`chat-modal__top-nav`,children:[(0,l.jsx)(a,{activeTab:i.SEARCH,onChange:()=>{},aiEnabled:!1}),(0,l.jsx)(n,{onClose:()=>{}})]}),(0,l.jsx)(`div`,{className:`chat-modal__content`,children:(0,l.jsx)(e,{})})]})})],args:{searchQuery:``,setSearchQuery:()=>{},setIsSearchFocused:()=>{},recentQueries:[],onRecentQueryClick:()=>{},isSearchEmpty:!0,isSearchReady:!1,showRecentQueries:!1,isSearchLoading:!1,searchError:null,searchResults:[],searchGuideMessage:`Найдите расписание, профиль или нужный сервис по названию.`,onSearchResultClick:()=>{},getSearchResultMeta:()=>`Сервисы`,getSearchResultDescription:e=>e}};const d={},f={args:{showRecentQueries:!0,recentQueries:[`Расписание международных образовательных программ`,`Справка о периоде обучения`]}},p={args:{searchQuery:`р`,isSearchEmpty:!1}},m={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,isSearchLoading:!0}},h={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchError:`Не удалось загрузить результаты поиска. Попробуйте ещё раз.`}},g={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0}},_={args:{searchQuery:`справка`,isSearchEmpty:!1,isSearchReady:!0,searchResults:[{title:`Заказ справок и документов для предоставления в государственные учреждения`,url:`/main/profile/requests`,content:`Оформление справки об обучении, получение документов и просмотр текущего статуса обращения в учебное подразделение.`},{title:`Международные образовательные программы`,url:`/main/home/services`,content:`Подробные сведения о направлениях, подразделениях и контактах ответственных сотрудников.`}]}},v={render:()=>(0,l.jsx)(o,{chat:[]}),parameters:{docs:{description:{story:`Существующий скрытый AI-вид. aiEnabled в приложении остаётся false.`}}}},y={..._,globals:{theme:`dark`}},b={..._,globals:{textScale:`large`}},x={render:function(e){let[t,n]=(0,c.useState)(``);return(0,l.jsx)(s,{...e,searchQuery:t,setSearchQuery:n,isSearchEmpty:!t,isSearchReady:t.length>=2})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showRecentQueries: true,
    recentQueries: ["Расписание международных образовательных программ", "Справка о периоде обучения"]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "р",
    isSearchEmpty: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    isSearchLoading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true,
    searchError: "Не удалось загрузить результаты поиска. Попробуйте ещё раз."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    searchQuery: "справка",
    isSearchEmpty: false,
    isSearchReady: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ChatAiSection chat={[]} />,
  parameters: {
    docs: {
      description: {
        story: "Существующий скрытый AI-вид. aiEnabled в приложении остаётся false."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    theme: "dark"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Results,
  globals: {
    textScale: "large"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function InteractiveInputExample(args) {
    const [query, setQuery] = useState("");
    return <ChatSearchSection {...args} searchQuery={query} setSearchQuery={setQuery} isSearchEmpty={!query} isSearchReady={query.length >= 2} />;
  }
}`,...x.parameters?.docs?.source}}};const S=[`Empty`,`Recent`,`ShortQuery`,`Loading`,`Error`,`NoResults`,`Results`,`AiUnavailable`,`Dark`,`LargeText`,`InteractiveInput`];export{v as AiUnavailable,y as Dark,d as Empty,h as Error,x as InteractiveInput,b as LargeText,m as Loading,g as NoResults,f as Recent,_ as Results,p as ShortQuery,S as __namedExportsOrder,u as default};