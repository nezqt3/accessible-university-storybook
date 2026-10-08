import"./useTranslation-r4xO1t1U.js";import{S as e,t}from"./iframe-kF-APqyp.js";import"./createLucideIcon-D1UjONYr.js";import"./circle-alert-BjxbLB1M.js";import"./circle-check-BaSJpN6v.js";import"./x-DEosaj9j.js";import"./motion-C4hY7hfp.js";import"./InlineSpinner-BVLlDt8J.js";import"./InlineSpinner-CtERaFhk.js";import{t as n}from"./Button-weYjeSKY.js";import"./Button-DDTwPwQw.js";import"./IconButton-Ospn9fJu.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BboE_dUN.js";import"./CloseButton-VeyMhf3w.js";import"./proxy-BQAo5aAS.js";import"./AnimatePresence-CNpM86Yv.js";import"./use-reduced-motion-DErL7L4T.js";import{t as r}from"./NotificationStatus-pF05l1g4.js";var i=e(),a=t(),o={title:`States/NotificationStatus`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Временное уведомление поверх интерфейса. Автоматически закрывается, показывает прогресс и поддерживает success/error варианты.`}}},args:{message:`Не удалось сохранить изменения`,isVisible:!0,onClose:()=>{},duration:6e3,variant:`error`}};const s={render:function(e){let[t,o]=(0,i.useState)(!1);return(0,a.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,a.jsx)(n,{onClick:()=>o(!0),children:`Показать уведомление`}),(0,a.jsx)(r,{...e,isVisible:t,onClose:()=>o(!1)})]})}},c={args:{message:`Изменения сохранены`,variant:`success`}},l={},u={...l,globals:{theme:`light`}},d={...l,globals:{theme:`dark`}},f={...l,globals:{textScale:`large`}},p={args:{message:`Не удалось загрузить сведения для выбранного подразделения. Проверьте соединение и повторите попытку. https://university.example/very-long-service-address`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "light"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    theme: "dark"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  globals: {
    textScale: "large"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Не удалось загрузить сведения для выбранного подразделения. Проверьте соединение и повторите попытку. https://university.example/very-long-service-address"
  }
}`,...p.parameters?.docs?.source}}};const m=[`Interactive`,`Success`,`Default`,`Light`,`Dark`,`LargeText`,`LongContent`];export{d as Dark,l as Default,s as Interactive,f as LargeText,u as Light,p as LongContent,c as Success,m as __namedExportsOrder,o as default};