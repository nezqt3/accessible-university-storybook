import{t as e,y as t}from"./iframe-Ow4Lrb8m.js";import{n,r,t as i}from"./motion-BSxM25dS.js";import"./InlineSpinner-B_tlR_Us.js";import"./InlineSpinner-CS4GXR4f.js";import{t as a}from"./Button-DXERo49s.js";import"./Button-BSxYERbh.js";import{t as o}from"./Badge-DYo_OMFx.js";import"./Badge-BilbQ7OI.js";import{n as s,t as c}from"./Typography-B07p8rVT.js";import"./Typography-BvsIeinA.js";import{t as l}from"./proxy-BJb5GNu-.js";import{t as u}from"./use-reduced-motion-B2DzoRdd.js";var d=t(),f=e(),p={title:`Foundations/Tokens`,parameters:{docs:{description:{component:`Источник значений — packages/tokens/tokens.json. Из него генерируются CSS и нативные платформенные токены. Storybook проверяет их применение. Light/Dark, масштаб текста и viewport доступны в панели инструментов.`}}}},m=[`bg`,`surface`,`surface-soft`,`surface-subtle`,`text`,`text-soft`,`text-muted`,`brand-strong`,`selected`,`on-selected`,`border`,`danger`];const h={render:()=>(0,f.jsx)(`div`,{className:`foundation-grid`,children:m.map(e=>(0,f.jsxs)(`div`,{className:`foundation-token`,children:[(0,f.jsx)(`span`,{className:`foundation-swatch`,style:{background:`var(--ui-color-${e})`}}),(0,f.jsx)(s,{size:`sm`,children:e})]},e))})},g={...h,globals:{theme:`dark`}},_={render:()=>(0,f.jsx)(`div`,{className:`foundation-stack`,children:[1,2,3,4,5,6,8,10,12].map(e=>(0,f.jsxs)(`div`,{className:`foundation-line`,children:[(0,f.jsxs)(s,{size:`sm`,children:[`space-`,e]}),(0,f.jsx)(`span`,{className:`foundation-spacing`,style:{width:`var(--ui-space-${e})`}})]},e))})},v={render:()=>(0,f.jsx)(`div`,{className:`foundation-grid`,children:[`sm`,`md`,`lg`,`panel`,`sheet`].map(e=>(0,f.jsxs)(`div`,{className:`foundation-token`,children:[(0,f.jsx)(`span`,{className:`foundation-radius`,style:{borderRadius:`var(--ui-radius-${e})`}}),(0,f.jsx)(s,{size:`sm`,children:e})]},e))})},y={render:()=>(0,f.jsxs)(`div`,{className:`foundation-stack`,children:[[`surface`,`surface-soft`,`surface-subtle`].map(e=>(0,f.jsxs)(`div`,{className:`foundation-surface`,style:{background:`var(--ui-color-${e})`},children:[(0,f.jsx)(c,{level:3,children:e}),(0,f.jsx)(s,{tone:`soft`,children:`Карточки отделяются поверхностью. Тень нужна для поднятых над содержимым элементов.`})]},e)),[`sm`,`md`,`lg`].map(e=>(0,f.jsx)(`div`,{className:`foundation-surface`,style:{boxShadow:`var(--ui-shadow-${e})`},children:(0,f.jsxs)(s,{children:[`Elevation · `,e]})},e))]})},b={render:function(){let[e,t]=(0,d.useState)(!1),o=u();return(0,f.jsxs)(`div`,{className:`foundation-stack`,children:[(0,f.jsx)(c,{level:2,children:`Motion и Spring`}),(0,f.jsx)(s,{tone:`soft`,children:`Fast · 120 ms. Standard · 200 ms. Emphasized · 360 ms. Reduced · 100 ms. Нажмите на кнопки, чтобы проверить реакцию.`}),(0,f.jsx)(`div`,{className:`foundation-motion-track`,children:(0,f.jsx)(l.span,{className:`foundation-motion-dot`,animate:{x:e&&!o?`200%`:`0%`,opacity:e?1:.6},transition:o?n.Reduced:r.Responsive})}),(0,f.jsx)(a,{onClick:()=>t(e=>!e),children:`Переключить позицию`}),(0,f.jsx)(l.button,{className:`foundation-press-card`,whileTap:o?void 0:{scale:i.pressScale},transition:r.Smooth,children:`Нажмите и удерживайте карточку`}),(0,f.jsx)(s,{size:`sm`,tone:`soft`,children:`Responsive · быстрое переключение. Smooth · листы и раскрытие. Reduced Motion отключает перемещение.`})]})}},x={render:()=>(0,f.jsxs)(`div`,{className:`foundation-stack`,children:[(0,f.jsx)(c,{level:2,children:`Общие материалы`}),(0,f.jsx)(s,{tone:`soft`,children:`Навигация и закреплённый заголовок используют один нейтральный материал. Sheet и Overlay имеют общую плотность, затемнение и blur.`}),[`NavigationMaterial`,`StickyHeaderMaterial`,`SheetMaterial`,`OverlayMaterial`].map(e=>(0,f.jsxs)(`div`,{className:`foundation-material-scene`,children:[(0,f.jsxs)(`div`,{className:`foundation-material-content`,children:[`Расписание занятий`,(0,f.jsx)(`br`,{}),`Информация об учебном процессе`,(0,f.jsx)(`br`,{}),`Сервисы университета`]}),(0,f.jsx)(`div`,{className:`foundation-material foundation-material--${e}`,children:(0,f.jsx)(s,{children:e})})]},e))]})},S={...x,globals:{theme:`dark`}},C={render:()=>(0,f.jsxs)(`div`,{className:`foundation-stack`,children:[(0,f.jsx)(c,{level:1,size:`lg`,children:`Главный экран · 28 / 600`}),(0,f.jsx)(c,{level:2,size:`page`,children:`Вложенный экран · 24 / 600`}),(0,f.jsx)(c,{level:2,children:`Раздел · 19 / 600`}),(0,f.jsx)(c,{level:3,children:`Карточка · 17 / 500`}),(0,f.jsx)(s,{size:`lg`,children:`Значение поля · 16 / 400`}),(0,f.jsx)(s,{children:`Основной текст · 15 / 400`}),(0,f.jsx)(s,{size:`sm`,tone:`soft`,children:`Дополнительный текст · 14 / 400`}),(0,f.jsx)(s,{size:`caption`,tone:`muted`,children:`Примечание · 12 / 400`})]})},w={render:()=>(0,f.jsxs)(`div`,{className:`foundation-stack`,children:[(0,f.jsx)(s,{tone:`soft`,children:`Статус всегда назван текстом; цвет дополняет его значение.`}),(0,f.jsx)(o,{tone:`success`,children:`Подтверждено`}),(0,f.jsx)(o,{tone:`warning`,children:`Требует внимания`}),(0,f.jsx)(o,{tone:`error`,children:`Отменено`}),(0,f.jsx)(o,{tone:`info`,children:`Информация`})]})},T={...w,globals:{theme:`dark`}},E={...w,globals:{vision:`color-accessible`}},D={...w,globals:{vision:`color-accessible`,theme:`dark`}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-grid">
      {colors.map(name => <div className="foundation-token" key={name}>
          <span className="foundation-swatch" style={{
        background: \`var(--ui-color-\${name})\`
      }} />
          <Text size="sm">{name}</Text>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Colors,
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(value => <div className="foundation-line" key={value}>
          <Text size="sm">space-{value}</Text>
          <span className="foundation-spacing" style={{
        width: \`var(--ui-space-\${value})\`
      }} />
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-grid">
      {["sm", "md", "lg", "panel", "sheet"].map(value => <div key={value} className="foundation-token">
          <span className="foundation-radius" style={{
        borderRadius: \`var(--ui-radius-\${value})\`
      }} />
          <Text size="sm">{value}</Text>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      {["surface", "surface-soft", "surface-subtle"].map(value => <div key={value} className="foundation-surface" style={{
      background: \`var(--ui-color-\${value})\`
    }}>
          <Heading level={3}>{value}</Heading>
          <Text tone="soft">
            Карточки отделяются поверхностью. Тень нужна для поднятых над содержимым элементов.
          </Text>
        </div>)}
      {["sm", "md", "lg"].map(value => <div key={value} className="foundation-surface" style={{
      boxShadow: \`var(--ui-shadow-\${value})\`
    }}>
          <Text>Elevation · {value}</Text>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function MotionExample() {
    const [selected, setSelected] = useState(false);
    const reduced = useReducedMotion();
    return <div className="foundation-stack">
        <Heading level={2}>Motion и Spring</Heading>
        <Text tone="soft">
          Fast · 120 ms. Standard · 200 ms. Emphasized · 360 ms. Reduced · 100 ms. Нажмите на
          кнопки, чтобы проверить реакцию.
        </Text>
        <div className="foundation-motion-track">
          <motion.span className="foundation-motion-dot" animate={{
          x: selected && !reduced ? "200%" : "0%",
          opacity: selected ? 1 : 0.6
        }} transition={reduced ? Motion.Reduced : Spring.Responsive} />
        </div>
        <Button onClick={() => setSelected(value => !value)}>Переключить позицию</Button>
        <motion.button className="foundation-press-card" whileTap={reduced ? undefined : {
        scale: Interaction.pressScale
      }} transition={Spring.Smooth}>
          Нажмите и удерживайте карточку
        </motion.button>
        <Text size="sm" tone="soft">
          Responsive · быстрое переключение. Smooth · листы и раскрытие. Reduced Motion отключает
          перемещение.
        </Text>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      <Heading level={2}>Общие материалы</Heading>
      <Text tone="soft">
        Навигация и закреплённый заголовок используют один нейтральный материал. Sheet и Overlay
        имеют общую плотность, затемнение и blur.
      </Text>
      {["NavigationMaterial", "StickyHeaderMaterial", "SheetMaterial", "OverlayMaterial"].map(name => <div key={name} className="foundation-material-scene">
            <div className="foundation-material-content">
              Расписание занятий
              <br />
              Информация об учебном процессе
              <br />
              Сервисы университета
            </div>
            <div className={\`foundation-material foundation-material--\${name}\`}>
              <Text>{name}</Text>
            </div>
          </div>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Materials,
  globals: {
    theme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      <Heading level={1} size="lg">
        Главный экран · 28 / 600
      </Heading>
      <Heading level={2} size="page">
        Вложенный экран · 24 / 600
      </Heading>
      <Heading level={2}>Раздел · 19 / 600</Heading>
      <Heading level={3}>Карточка · 17 / 500</Heading>
      <Text size="lg">Значение поля · 16 / 400</Text>
      <Text>Основной текст · 15 / 400</Text>
      <Text size="sm" tone="soft">
        Дополнительный текст · 14 / 400
      </Text>
      <Text size="caption" tone="muted">
        Примечание · 12 / 400
      </Text>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      <Text tone="soft">Статус всегда назван текстом; цвет дополняет его значение.</Text>
      <Badge tone="success">Подтверждено</Badge>
      <Badge tone="warning">Требует внимания</Badge>
      <Badge tone="error">Отменено</Badge>
      <Badge tone="info">Информация</Badge>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    vision: "color-accessible"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    vision: "color-accessible",
    theme: "dark"
  }
}`,...D.parameters?.docs?.source}}};const O=[`Colors`,`DarkColors`,`Spacing`,`Radius`,`SurfacesAndElevation`,`MotionAndPress`,`Materials`,`DarkMaterials`,`Typography`,`StatusColors`,`DarkStatusColors`,`AccessibleStatusColors`,`DarkAccessibleStatusColors`];export{E as AccessibleStatusColors,h as Colors,D as DarkAccessibleStatusColors,g as DarkColors,S as DarkMaterials,T as DarkStatusColors,x as Materials,b as MotionAndPress,v as Radius,_ as Spacing,w as StatusColors,y as SurfacesAndElevation,C as Typography,O as __namedExportsOrder,p as default};