import{n as e,t}from"./iframe-a2mGhWt8.js";import"./createLucideIcon-Dmex4IOU.js";import{t as n}from"./x-lnHQ2WwQ.js";import"./InlineSpinner-7iEhdoMI.js";import"./InlineSpinner-D_wmnTPd.js";import{t as r}from"./Button-zYJcuj0z.js";import"./Button-D6nEBVRg.js";import{n as i}from"./Typography-BR6zqMF6.js";import"./Typography-2OgGLtZK.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./proxy-Bj0FKSUt.js";function d(e){e.values.forEach(e=>e.stop())}function f(e,t){[...t].reverse().forEach(n=>{let r=e.getVariant(n);r&&l(e,r),e.variantChildren&&e.variantChildren.forEach(e=>{f(e,t)})})}function p(e,t){if(Array.isArray(t))return f(e,t);if(typeof t==`string`)return f(e,[t]);l(e,t)}function m(){let e=!1,t=new Set,n={subscribe(e){return t.add(e),()=>void t.delete(e)},start(n,r){o(e,`controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.`);let i=[];return t.forEach(e=>{i.push(s(e,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return o(e,`controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.`),t.forEach(e=>{p(e,n)})},stop(){t.forEach(e=>{d(e)})},mount(){return e=!0,()=>{e=!1,n.stop()}}};return n}function h(){let e=c(m);return a(e.mount,[]),e}var g=h,_=class{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}cancel(){this.componentControls.forEach(e=>{e.cancel()})}stop(){this.componentControls.forEach(e=>{e.stop()})}},v=()=>new _;function y(){return c(v)}var b=e();const x=(0,b.createContext)(null);function S(){return(0,b.useContext)(x)}var C=t();function w({onClose:e}){let t=S()??e;return(0,C.jsx)(`button`,{className:`close-btn-minimal`,type:`button`,onClick:()=>void t(),children:(0,C.jsx)(n,{size:22})})}w.__docgenInfo={description:``,methods:[],displayName:`CloseButton`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};const T={top:0,bottom:.16},E={type:`spring`,stiffness:220,damping:28,mass:.95},D={type:`spring`,stiffness:260,damping:30,mass:.9},O={duration:.46,ease:[.22,1,.36,1]},k={duration:.2,ease:`easeOut`},A={duration:.12,ease:`easeIn`},j={initial:{opacity:0},animate:{opacity:1,transition:k}},M={opacity:0,transition:A};function N({onClose:e,onCloseStart:t}){let n=g(),[r,i]=(0,b.useState)(!1),a=(0,b.useRef)(!0);(0,b.useEffect)(()=>(a.current=!0,n.set({y:window.innerHeight}),n.start({y:0,transition:E}),()=>{a.current=!1}),[n]);let o=(0,b.useCallback)(()=>{r||n.start({y:0,transition:D})},[n,r]),s=(0,b.useCallback)(async()=>{r||(i(!0),t?.(),await n.start({y:window.innerHeight,transition:O}),a.current&&e())},[n,r,e,t]),c=(0,b.useCallback)(async(e,t)=>{if(!r){if(t.offset.y>120||t.velocity.y>650){await s();return}o()}},[s,r,o]);return(0,b.useEffect)(()=>{let e=e=>{e.key===`Escape`&&s()};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[s]),{controls:n,isClosing:r,closeModal:s,handleDragEnd:c}}function P({onClose:e,onCloseStart:t,children:n,className:r=``}){let{controls:i,isClosing:a,closeModal:o,handleDragEnd:s}=N({onClose:e,onCloseStart:t}),c=y(),l=(0,b.useCallback)(e=>{a||c.start(e)},[c,a]);return(0,C.jsxs)(`div`,{className:`modal-backdrop`,children:[(0,C.jsx)(u.div,{className:`modal-overlay`,...j,animate:a?M:j.animate,onClick:o}),(0,C.jsxs)(u.div,{className:`modal-container ${r}`,role:`dialog`,"aria-modal":`true`,animate:i,drag:a?!1:`y`,dragControls:c,dragDirectionLock:!0,dragListener:!1,dragConstraints:{top:0,bottom:220},dragElastic:T,onDragEnd:s,onClick:e=>e.stopPropagation(),children:[(0,C.jsx)(`div`,{className:`modal-container__handle-wrapper`,onPointerDown:l,children:(0,C.jsx)(`div`,{className:`modal-container__handle`})}),(0,C.jsx)(x.Provider,{value:o,children:(0,C.jsx)(`div`,{className:`modal-container__body`,children:n})})]})]})}P.__docgenInfo={description:``,methods:[],displayName:`ModalOverlay`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCloseStart:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}}}};var F={title:`UI/Modal (существующий)`,component:P,parameters:{layout:`fullscreen`,docs:{disable:!0}}};const I={args:{onClose:()=>{},children:null},render:function(){let[e,t]=(0,b.useState)(!1);return(0,C.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,C.jsx)(r,{onClick:()=>t(!0),children:`Открыть модалку`}),e?(0,C.jsx)(P,{onClose:()=>t(!1),children:(0,C.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:`4px 2px 16px`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,C.jsx)(`h2`,{style:{margin:0,fontSize:`1.2rem`},children:`Bottom-sheet модалка`}),(0,C.jsx)(w,{onClose:()=>t(!1)})]}),(0,C.jsx)(i,{size:`sm`,tone:`muted`,children:`Существующий компонент ModalOverlay: drag-to-close за ручку, закрытие по клику на подложку. Поведение не менялось — story документирует текущий контракт.`}),(0,C.jsx)(r,{variant:`secondary`,shape:`rounded`,onClick:()=>t(!1),children:`Закрыть`})]})}):null]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: () => {},
    children: null
  },
  render: function InteractiveExample() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center"
    }}>
        <Button onClick={() => setIsOpen(true)}>Открыть модалку</Button>

        {isOpen ? <ModalOverlay onClose={() => setIsOpen(false)}>
            <div style={{
          display: "grid",
          gap: 12,
          padding: "4px 2px 16px"
        }}>
              <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
                <h2 style={{
              margin: 0,
              fontSize: "1.2rem"
            }}>Bottom-sheet модалка</h2>
                <CloseButton onClose={() => setIsOpen(false)} />
              </div>
              <Text size="sm" tone="muted">
                Существующий компонент ModalOverlay: drag-to-close за ручку, закрытие по клику на
                подложку. Поведение не менялось — story документирует текущий контракт.
              </Text>
              <Button variant="secondary" shape="rounded" onClick={() => setIsOpen(false)}>
                Закрыть
              </Button>
            </div>
          </ModalOverlay> : null}
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const L=[`Interactive`];export{I as Interactive,L as __namedExportsOrder,F as default};