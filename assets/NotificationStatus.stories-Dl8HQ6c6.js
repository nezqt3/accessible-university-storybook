import"./useTranslation-BVb12BKQ.js";import{o as e,t}from"./iframe-VzX5uRic.js";import"./createLucideIcon-uc0lRL-Y.js";import"./circle-alert-CD3jajTK.js";import"./circle-check-DaEtuz67.js";import"./IconButton-C2NhzesF.js";import"./InlineSpinner-C4UKMscH.js";import"./InlineSpinner-D-yUgJTS.js";import{t as n}from"./Button-D4gRX9uD.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-DcMF6ugn.js";import"./CloseButton-d9YZdAKA.js";import"./proxy-B5Sw5ahD.js";import"./AnimatePresence-oChlvG3u.js";import{t as r}from"./NotificationStatus-Ch5LkWOs.js";var i=e(),a=t(),o={title:`UI/NotificationStatus`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Временное уведомление поверх интерфейса. Автоматически закрывается, показывает прогресс и поддерживает success/error варианты.`}}},args:{message:`Не удалось сохранить изменения`,isVisible:!0,onClose:()=>{},duration:6e3,variant:`error`}};const s={render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать уведомление`}),(0,a.jsx)(r,{...e,isVisible:t,onClose:()=>o(!1)})]})}},c={args:{message:`Изменения сохранены`,variant:`success`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [isVisible, setIsVisible] = useState(false);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsVisible(true)}>Показать уведомление</Button>
        <NotificationStatus {...args} isVisible={isVisible} onClose={() => setIsVisible(false)} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Изменения сохранены",
    variant: "success"
  }
}`,...c.parameters?.docs?.source}}};const l=[`Interactive`,`Success`];export{s as Interactive,c as Success,l as __namedExportsOrder,o as default};