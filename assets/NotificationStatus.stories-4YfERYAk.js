import"./useTranslation-CTRUKooY.js";import{o as e,t}from"./iframe-B6c5s-S3.js";import"./createLucideIcon-iGCZoKms.js";import"./circle-alert-BVBus0Ek.js";import"./circle-check-uxZcAImB.js";import"./IconButton-B4gX-abF.js";import"./InlineSpinner-CGwDU4C2.js";import"./InlineSpinner-D-yUgJTS.js";import{t as n}from"./Button-ItG4GnUI.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-BEk7esoe.js";import"./CloseButton-d9YZdAKA.js";import"./proxy-DcJqY3fP.js";import"./AnimatePresence-uQbzv6-b.js";import{t as r}from"./NotificationStatus-DMK2tHMC.js";var i=e(),a=t(),o={title:`UI/NotificationStatus`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Временное уведомление поверх интерфейса. Автоматически закрывается, показывает прогресс и поддерживает success/error варианты.`}}},args:{message:`Не удалось сохранить изменения`,isVisible:!0,onClose:()=>{},duration:6e3,variant:`error`}};const s={render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать уведомление`}),(0,a.jsx)(r,{...e,isVisible:t,onClose:()=>o(!1)})]})}},c={args:{message:`Изменения сохранены`,variant:`success`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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