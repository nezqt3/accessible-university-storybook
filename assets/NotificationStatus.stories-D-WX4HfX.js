import"./useTranslation-CxtuRs4o.js";import{o as e,t}from"./iframe-BM-w3o-i.js";import"./createLucideIcon-D70Gw0f6.js";import"./circle-alert-joZkadWL.js";import"./circle-check-bhuaNWX7.js";import"./IconButton-zsPGaPs_.js";import"./InlineSpinner-BC7upHmO.js";import"./InlineSpinner-D-yUgJTS.js";import{t as n}from"./Button-CO-FEFSw.js";import"./Button-DIRJwf5Q.js";import"./CloseButton-YxlYc889.js";import"./CloseButton-d9YZdAKA.js";import"./proxy-C6Zxl615.js";import"./AnimatePresence-CKwZiVJh.js";import{t as r}from"./NotificationStatus-CNroIIJZ.js";var i=e(),a=t(),o={title:`UI/NotificationStatus`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Временное уведомление поверх интерфейса. Автоматически закрывается, показывает прогресс и поддерживает success/error варианты.`}}},args:{message:`Не удалось сохранить изменения`,isVisible:!0,onClose:()=>{},duration:6e3,variant:`error`}};const s={render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать уведомление`}),(0,a.jsx)(r,{...e,isVisible:t,onClose:()=>o(!1)})]})}},c={args:{message:`Изменения сохранены`,variant:`success`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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