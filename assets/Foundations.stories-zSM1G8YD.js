import{S as e,t}from"./iframe-D0TFUEDL.js";import{a as n,n as r,o as i,r as a,s as o,t as s}from"./motion-C4hY7hfp.js";import"./InlineSpinner-14W30Fra.js";import"./InlineSpinner-CtERaFhk.js";import{t as c}from"./Button-kx55fANy.js";import"./Button-DDTwPwQw.js";import{t as l}from"./Badge-BxiKIddT.js";import"./Badge-DDAzEWwc.js";import{t as u}from"./proxy-B27OI5yE.js";import{t as d}from"./use-reduced-motion-DVIztM76.js";import{n as f,t as p}from"./Typography-B0G6FS0A.js";import"./Typography-Q4VDshPG.js";var m=e(),h=t(),g={title:`Foundations/Tokens`,parameters:{docs:{description:{component:`Источник значений — packages/tokens/tokens.json. Из него генерируются CSS и нативные платформенные токены. Storybook проверяет их применение. Light/Dark, масштаб текста и viewport доступны в панели инструментов.`}}}},_=[`bg`,`surface`,`surface-soft`,`surface-subtle`,`text`,`text-soft`,`text-muted`,`brand-strong`,`selected`,`on-selected`,`border`,`danger`];const v={render:()=>(0,h.jsx)(`div`,{className:`foundation-grid`,children:_.map(e=>(0,h.jsxs)(`div`,{className:`foundation-token`,children:[(0,h.jsx)(`span`,{className:`foundation-swatch`,style:{background:`var(--ui-color-${e})`}}),(0,h.jsx)(f,{size:`sm`,children:e})]},e))})},y={...v,globals:{theme:`dark`}},b={render:()=>(0,h.jsx)(`div`,{className:`foundation-stack`,children:[1,2,3,4,5,6,8,10,12].map(e=>(0,h.jsxs)(`div`,{className:`foundation-line`,children:[(0,h.jsxs)(f,{size:`sm`,children:[`space-`,e]}),(0,h.jsx)(`span`,{className:`foundation-spacing`,style:{width:`var(--ui-space-${e})`}})]},e))})},x={render:()=>(0,h.jsx)(`div`,{className:`foundation-grid`,children:[`sm`,`md`,`lg`,`panel`,`sheet`].map(e=>(0,h.jsxs)(`div`,{className:`foundation-token`,children:[(0,h.jsx)(`span`,{className:`foundation-radius`,style:{borderRadius:`var(--ui-radius-${e})`}}),(0,h.jsx)(f,{size:`sm`,children:e})]},e))})},S={render:()=>(0,h.jsxs)(`div`,{className:`foundation-stack`,children:[[`surface`,`surface-soft`,`surface-subtle`].map(e=>(0,h.jsxs)(`div`,{className:`foundation-surface`,style:{background:`var(--ui-color-${e})`},children:[(0,h.jsx)(p,{level:3,children:e}),(0,h.jsx)(f,{tone:`soft`,children:`Карточки отделяются поверхностью. Тень нужна для поднятых над содержимым элементов.`})]},e)),[`sm`,`md`,`lg`].map(e=>(0,h.jsx)(`div`,{className:`foundation-surface`,style:{boxShadow:`var(--ui-shadow-${e})`},children:(0,h.jsxs)(f,{children:[`Elevation · `,e]})},e))]})},C={render:function(){let[e,t]=(0,m.useState)(!1),l=d();return(0,h.jsxs)(`div`,{className:`foundation-stack`,children:[(0,h.jsx)(p,{level:2,children:`Motion и Spring`}),(0,h.jsx)(f,{tone:`soft`,children:`Fast · 120 ms. Standard · 200 ms. Popup · 280 ms. Emphasized · 360 ms. Reduced · 100 ms. Нажмите на кнопки, чтобы проверить реакцию.`}),(0,h.jsxs)(f,{size:`sm`,tone:`muted`,children:[`Content blur · `,a.Content,`. Применяется только к сменяемой области текста.`]}),(0,h.jsxs)(f,{size:`sm`,tone:`muted`,children:[`Navigation offset · `,n.Tab,`px. Popup offset · `,n.Popup,`px. Popup scale · `,i.Popup,`.`]}),(0,h.jsx)(`div`,{className:`foundation-motion-track`,children:(0,h.jsx)(u.span,{className:`foundation-motion-dot`,animate:{x:e&&!l?`200%`:`0%`,opacity:e?1:.6},transition:l?r.Reduced:o.Responsive})}),(0,h.jsx)(c,{onClick:()=>t(e=>!e),children:`Переключить позицию`}),(0,h.jsx)(u.button,{className:`foundation-press-card`,whileTap:l?void 0:{scale:s.pressScale},transition:o.Smooth,children:`Нажмите и удерживайте карточку`}),(0,h.jsx)(f,{size:`sm`,tone:`soft`,children:`Responsive · быстрое переключение. Smooth · листы и раскрытие. Reduced Motion отключает перемещение.`})]})}},w={render:()=>(0,h.jsxs)(`div`,{className:`foundation-stack`,children:[(0,h.jsx)(p,{level:2,children:`Общие материалы`}),(0,h.jsx)(f,{tone:`soft`,children:`Навигация и закреплённый заголовок используют один нейтральный материал. Sheet и Overlay имеют общую плотность, затемнение и blur.`}),[`NavigationMaterial`,`StickyHeaderMaterial`,`SheetMaterial`,`OverlayMaterial`].map(e=>(0,h.jsxs)(`div`,{className:`foundation-material-scene`,children:[(0,h.jsxs)(`div`,{className:`foundation-material-content`,children:[`Расписание занятий`,(0,h.jsx)(`br`,{}),`Информация об учебном процессе`,(0,h.jsx)(`br`,{}),`Сервисы университета`]}),(0,h.jsx)(`div`,{className:`foundation-material foundation-material--${e}`,children:(0,h.jsx)(f,{children:e})})]},e))]})},T={...w,globals:{theme:`dark`}},E={render:()=>(0,h.jsxs)(`div`,{className:`foundation-stack`,children:[(0,h.jsx)(p,{level:1,size:`lg`,children:`Главный экран · 28 / 600`}),(0,h.jsx)(p,{level:2,size:`page`,children:`Вложенный экран · 24 / 600`}),(0,h.jsx)(p,{level:2,children:`Раздел · 19 / 600`}),(0,h.jsx)(p,{level:3,children:`Карточка · 17 / 500`}),(0,h.jsx)(f,{size:`lg`,children:`Значение поля · 16 / 400`}),(0,h.jsx)(f,{children:`Основной текст · 15 / 400`}),(0,h.jsx)(f,{size:`sm`,tone:`soft`,children:`Дополнительный текст · 14 / 400`}),(0,h.jsx)(f,{size:`caption`,tone:`muted`,children:`Примечание · 12 / 400`})]})},D={render:()=>(0,h.jsxs)(`div`,{className:`foundation-stack`,children:[(0,h.jsx)(f,{tone:`soft`,children:`Статус всегда назван текстом; цвет дополняет его значение.`}),(0,h.jsx)(l,{tone:`success`,children:`Подтверждено`}),(0,h.jsx)(l,{tone:`warning`,children:`Требует внимания`}),(0,h.jsx)(l,{tone:`error`,children:`Отменено`}),(0,h.jsx)(l,{tone:`info`,children:`Информация`})]})},O={...D,globals:{theme:`dark`}},k={...D,globals:{vision:`color-accessible`}},A={...D,globals:{vision:`color-accessible`,theme:`dark`}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-grid">
      {colors.map(name => <div className="foundation-token" key={name}>
          <span className="foundation-swatch" style={{
        background: \`var(--ui-color-\${name})\`
      }} />
          <Text size="sm">{name}</Text>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Colors,
  globals: {
    theme: "dark"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(value => <div className="foundation-line" key={value}>
          <Text size="sm">space-{value}</Text>
          <span className="foundation-spacing" style={{
        width: \`var(--ui-space-\${value})\`
      }} />
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-grid">
      {["sm", "md", "lg", "panel", "sheet"].map(value => <div key={value} className="foundation-token">
          <span className="foundation-radius" style={{
        borderRadius: \`var(--ui-radius-\${value})\`
      }} />
          <Text size="sm">{value}</Text>
        </div>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function MotionExample() {
    const [selected, setSelected] = useState(false);
    const reduced = useReducedMotion();
    return <div className="foundation-stack">
        <Heading level={2}>Motion и Spring</Heading>
        <Text tone="soft">
          Fast · 120 ms. Standard · 200 ms. Popup · 280 ms. Emphasized · 360 ms. Reduced · 100 ms.
          Нажмите на кнопки, чтобы проверить реакцию.
        </Text>
        <Text size="sm" tone="muted">
          Content blur · {MotionBlur.Content}. Применяется только к сменяемой области текста.
        </Text>
        <Text size="sm" tone="muted">
          Navigation offset · {MotionOffset.Tab}px. Popup offset · {MotionOffset.Popup}px. Popup
          scale · {MotionScale.Popup}.
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Materials,
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="foundation-stack">
      <Text tone="soft">Статус всегда назван текстом; цвет дополняет его значение.</Text>
      <Badge tone="success">Подтверждено</Badge>
      <Badge tone="warning">Требует внимания</Badge>
      <Badge tone="error">Отменено</Badge>
      <Badge tone="info">Информация</Badge>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    theme: "dark"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    vision: "color-accessible"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...StatusColors,
  globals: {
    vision: "color-accessible",
    theme: "dark"
  }
}`,...A.parameters?.docs?.source}}};const j=[`Colors`,`DarkColors`,`Spacing`,`Radius`,`SurfacesAndElevation`,`MotionAndPress`,`Materials`,`DarkMaterials`,`Typography`,`StatusColors`,`DarkStatusColors`,`AccessibleStatusColors`,`DarkAccessibleStatusColors`];export{k as AccessibleStatusColors,v as Colors,A as DarkAccessibleStatusColors,y as DarkColors,T as DarkMaterials,O as DarkStatusColors,w as Materials,C as MotionAndPress,x as Radius,b as Spacing,D as StatusColors,S as SurfacesAndElevation,E as Typography,j as __namedExportsOrder,g as default};