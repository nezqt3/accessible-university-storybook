import{n as e,t}from"./iframe-BTz4hujj.js";import"./createLucideIcon-DcKLIXY8.js";import{n,t as r}from"./IconButton-SM9WAguB.js";import"./InlineSpinner-BFo66JM1.js";import"./InlineSpinner-D_wmnTPd.js";import{t as i}from"./Button-BnFO23B8.js";import"./Button-D6nEBVRg.js";import{n as a}from"./Typography-DHVqXYxx.js";import"./Typography-2OgGLtZK.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./proxy-DuNJ3_xf.js";function f(e){e.values.forEach(e=>e.stop())}function p(e,t){[...t].reverse().forEach(n=>{let r=e.getVariant(n);r&&u(e,r),e.variantChildren&&e.variantChildren.forEach(e=>{p(e,t)})})}function m(e,t){if(Array.isArray(t))return p(e,t);if(typeof t==`string`)return p(e,[t]);u(e,t)}function h(){let e=!1,t=new Set,n={subscribe(e){return t.add(e),()=>void t.delete(e)},start(n,r){s(e,`controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.`);let i=[];return t.forEach(e=>{i.push(c(e,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return s(e,`controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.`),t.forEach(e=>{m(e,n)})},stop(){t.forEach(e=>{f(e)})},mount(){return e=!0,()=>{e=!1,n.stop()}}};return n}function g(){let e=l(h);return o(e.mount,[]),e}var _=g,v=class{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}cancel(){this.componentControls.forEach(e=>{e.cancel()})}stop(){this.componentControls.forEach(e=>{e.stop()})}},y=()=>new v;function b(){return l(y)}var x=e();const S=(0,x.createContext)(null);function C(){return(0,x.useContext)(S)}var w=t();function T({onClose:e}){let t=C()??e;return(0,w.jsx)(r,{className:`close-btn-minimal`,variant:`ghost`,ariaLabel:`Закрыть`,onClick:()=>void t(),children:(0,w.jsx)(n,{size:22})})}T.__docgenInfo={description:``,methods:[],displayName:`CloseButton`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};const E={top:0,bottom:.16},D={type:`spring`,stiffness:220,damping:28,mass:.95},O={type:`spring`,stiffness:260,damping:30,mass:.9},k={duration:.46,ease:[.22,1,.36,1]},A={duration:.2,ease:`easeOut`},j={duration:.12,ease:`easeIn`},M={initial:{opacity:0},animate:{opacity:1,transition:A}},N={opacity:0,transition:j};function P({onClose:e,onCloseStart:t,presentation:n}){let r=_(),[i,a]=(0,x.useState)(!1),o=(0,x.useRef)(!0);(0,x.useEffect)(()=>{o.current=!0;let e=n===`mobile`;return r.set(e?{y:window.innerHeight}:{y:20,opacity:0,scale:.97}),r.start({y:0,opacity:1,scale:1,transition:D}),()=>{o.current=!1}},[r,n]);let s=(0,x.useCallback)(()=>{i||r.start({y:0,transition:O})},[r,i]),c=(0,x.useCallback)(async()=>{i||(a(!0),t?.(),await r.start(n===`mobile`?{y:window.innerHeight,transition:k}:{y:16,opacity:0,scale:.97,transition:k}),o.current&&e())},[r,i,e,t,n]),l=(0,x.useCallback)(async(e,t)=>{if(!i){if(t.offset.y>120||t.velocity.y>650){await c();return}s()}},[c,i,s]);return(0,x.useEffect)(()=>{let e=e=>{e.key===`Escape`&&c()};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[c]),{controls:r,isClosing:i,closeModal:c,handleDragEnd:l}}var F=`(min-width: 768px)`;function I(){return typeof window<`u`&&window.matchMedia?window.matchMedia(F).matches:!1}function L(e){let[t,n]=(0,x.useState)(I);return(0,x.useEffect)(()=>{if(e!==`responsive`||!window.matchMedia)return;let t=window.matchMedia(F),r=e=>n(e.matches);return n(t.matches),t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),e===`responsive`?t?`desktop`:`mobile`:e}function R({onClose:e,onCloseStart:t,children:n,className:r=``,presentation:i=`responsive`,ariaLabel:a,ariaLabelledBy:o,ariaDescribedBy:s}){let c=L(i),{controls:l,isClosing:u,closeModal:f,handleDragEnd:p}=P({onClose:e,onCloseStart:t,presentation:c}),m=b(),h=c===`mobile`,g=(0,x.useCallback)(e=>{h&&!u&&m.start(e)},[m,u,h]);return(0,w.jsxs)(`div`,{className:`modal-backdrop modal-backdrop--${c}`,children:[(0,w.jsx)(d.div,{className:`modal-overlay`,...M,animate:u?N:M.animate,onClick:f}),(0,w.jsxs)(d.div,{className:`modal-container modal-container--${c} ${r}`,"data-presentation":c,role:`dialog`,"aria-modal":`true`,"aria-label":a,"aria-labelledby":o,"aria-describedby":s,animate:l,drag:h&&!u?`y`:!1,dragControls:m,dragDirectionLock:!0,dragListener:!1,dragConstraints:{top:0,bottom:220},dragElastic:E,onDragEnd:p,onClick:e=>e.stopPropagation(),children:[(0,w.jsx)(`div`,{className:`modal-container__handle-wrapper`,onPointerDown:g,"aria-hidden":`true`,children:(0,w.jsx)(`div`,{className:`modal-container__handle`})}),(0,w.jsx)(S.Provider,{value:f,children:(0,w.jsx)(`div`,{className:`modal-container__body`,children:n})})]})]})}R.__docgenInfo={description:``,methods:[],displayName:`ModalOverlay`,props:{onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCloseStart:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},presentation:{required:!1,tsType:{name:`union`,raw:`"responsive" | "desktop" | "mobile"`,elements:[{name:`literal`,value:`"responsive"`},{name:`literal`,value:`"desktop"`},{name:`literal`,value:`"mobile"`}]},description:`responsive автоматически выбирает desktop-окно или mobile bottom sheet.
desktop/mobile позволяют принудительно подключить нужное представление.`,defaultValue:{value:`"responsive"`,computed:!1}},ariaLabel:{required:!1,tsType:{name:`string`},description:``},ariaLabelledBy:{required:!1,tsType:{name:`string`},description:``},ariaDescribedBy:{required:!1,tsType:{name:`string`},description:``}}};var z={title:`UI/Modal`,component:R,parameters:{layout:`fullscreen`,docs:{disable:!0}}};const B={args:{onClose:()=>{},children:null},render:function(){let[e,t]=(0,x.useState)(!1);return(0,w.jsxs)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`},children:[(0,w.jsx)(i,{onClick:()=>t(!0),children:`Открыть модалку`}),e?(0,w.jsx)(R,{onClose:()=>t(!1),children:(0,w.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:`4px 2px 16px`},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,w.jsx)(`h2`,{style:{margin:0,fontSize:`1.2rem`},children:`Адаптивная модалка`}),(0,w.jsx)(T,{onClose:()=>t(!1)})]}),(0,w.jsx)(a,{size:`sm`,tone:`muted`,children:`На мобильном экране это bottom sheet с drag-to-close, на десктопе — центрированное диалоговое окно. Представление также можно выбрать явно.`}),(0,w.jsx)(i,{variant:`secondary`,shape:`rounded`,onClick:()=>t(!1),children:`Закрыть`})]})}):null]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
            }}>Адаптивная модалка</h2>
                <CloseButton onClose={() => setIsOpen(false)} />
              </div>
              <Text size="sm" tone="muted">
                На мобильном экране это bottom sheet с drag-to-close, на десктопе — центрированное
                диалоговое окно. Представление также можно выбрать явно.
              </Text>
              <Button variant="secondary" shape="rounded" onClick={() => setIsOpen(false)}>
                Закрыть
              </Button>
            </div>
          </ModalOverlay> : null}
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const V=[`Interactive`];export{B as Interactive,V as __namedExportsOrder,z as default};