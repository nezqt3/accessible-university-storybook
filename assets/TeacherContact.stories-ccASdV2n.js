import"./useTranslation-eDAlq15L.js";import{t as e}from"./iframe-CmBlaoL5.js";import"./createLucideIcon-xVjI36Up.js";import"./check-D8NoSuSL.js";import"./mail-Dvfmwk0t.js";import"./user-BJ31awl5.js";import{i as t}from"./motion-C4hY7hfp.js";import"./InlineSpinner-BQkqwLS5.js";import"./InlineSpinner-CtERaFhk.js";import"./IconButton-7ym-EM3C.js";import"./IconButton-C3ENirEm.js";import"./proxy-CdotowUO.js";import"./AnimatePresence-CGVxng4l.js";import"./use-reduced-motion-Cj8PTyoc.js";import"./BlurTransition-BbIl-pOB.js";import"./BlurTransition-Lagju-WE.js";import{t as n}from"./Card-lFxmNmMK.js";import"./Card-DMf2-Jiv.js";import{t as r}from"./TeacherContact-Bz9iouNa.js";var i=e(),{userEvent:a,waitFor:o,within:s}=__STORYBOOK_MODULE_TEST__,c=1500,l=e=>new Promise(t=>window.setTimeout(t,e));async function u(e){Object.defineProperty(navigator,`clipboard`,{configurable:!0,value:{writeText:async()=>void 0}});let t=s(e);await a.click(t.getByRole(`button`,{name:`Показать и скопировать email преподавателя`})),await o(()=>t.getByRole(`button`,{name:`Показать имя преподавателя`}),{timeout:c+500})}var d={title:`Schedule/TeacherContact`,component:r,decorators:[e=>(0,i.jsx)(n,{padding:`md`,children:(0,i.jsxs)(`div`,{className:`teacher-contact-story`,children:[(0,i.jsx)(`span`,{"aria-hidden":`true`,children:`•`}),(0,i.jsx)(e,{})]})})],args:{name:`Ильин А.С.`,email:`ilyin.as@fa.ru`},parameters:{docs:{description:{component:`Направленная blur-волна последовательно заменяет символы без смещения базовой линии. Иконка быстро переезжает к полной ширине целевой строки и отдельно проходит цикл Mail → Check → Person.`}}}};const f={},p={play:async({canvasElement:e})=>u(e)},m={args:{name:`А.А.`,email:`long.teacher.email@university.ru`}},h={...m,play:async({canvasElement:e})=>u(e)},g={args:{name:`Савинов Е.А.`,email:`savinov@fa.ru`}},_={args:{name:`Савинов Е.А.`,email:`easavinov@fa.ru`},globals:{theme:`dark`},parameters:{docs:{description:{story:`Строки из эталонной записи для покадрового сравнения направления, ширины blur-волны и движения иконки.`}}}},v={parameters:{docs:{description:{story:`Интерактивный сценарий для нескольких последовательных циклов Mail → Check → Person → Mail.`}}}},y={..._,play:async({canvasElement:e})=>{Object.defineProperty(navigator,`clipboard`,{configurable:!0,value:{writeText:async()=>void 0}});let n=s(e);await l(t.Emphasized),await a.click(n.getByRole(`button`,{name:`Показать и скопировать email преподавателя`})),await o(()=>n.getByRole(`button`,{name:`Показать имя преподавателя`}),{timeout:c+500}),await l(t.Emphasized),await a.click(n.getByRole(`button`,{name:`Показать имя преподавателя`})),await o(()=>n.getByRole(`button`,{name:`Показать и скопировать email преподавателя`}),{timeout:t.Emphasized+500})}},b={play:async({canvasElement:e})=>{Object.defineProperty(navigator,`clipboard`,{configurable:!0,value:{writeText:async()=>void 0}});let t=s(e).getByRole(`button`,{name:`Показать и скопировать email преподавателя`});await Promise.all([a.click(t),a.click(t),a.click(t)])}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => prepareReverseTransition(canvasElement)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: "А.А.",
    email: "long.teacher.email@university.ru"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...VeryShortToLong,
  play: async ({
    canvasElement
  }) => prepareReverseTransition(canvasElement)
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Савинов Е.А.",
    email: "savinov@fa.ru"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Савинов Е.А.",
    email: "easavinov@fa.ru"
  },
  globals: {
    theme: "dark"
  },
  parameters: {
    docs: {
      description: {
        story: "Строки из эталонной записи для покадрового сравнения направления, ширины blur-волны и движения иконки."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Интерактивный сценарий для нескольких последовательных циклов Mail → Check → Person → Mail."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...VideoRegression,
  play: async ({
    canvasElement
  }) => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => undefined
      }
    });
    const canvas = within(canvasElement);
    await pause(MotionDuration.Emphasized);
    await userEvent.click(canvas.getByRole("button", {
      name: "Показать и скопировать email преподавателя"
    }));
    await waitFor(() => canvas.getByRole("button", {
      name: "Показать имя преподавателя"
    }), {
      timeout: CONFIRMATION_DURATION + 500
    });
    await pause(MotionDuration.Emphasized);
    await userEvent.click(canvas.getByRole("button", {
      name: "Показать имя преподавателя"
    }));
    await waitFor(() => canvas.getByRole("button", {
      name: "Показать и скопировать email преподавателя"
    }), {
      timeout: MotionDuration.Emphasized + 500
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => undefined
      }
    });
    const action = within(canvasElement).getByRole("button", {
      name: "Показать и скопировать email преподавателя"
    });
    await Promise.all([userEvent.click(action), userEvent.click(action), userEvent.click(action)]);
  }
}`,...b.parameters?.docs?.source}}};const x=[`ShortToLong`,`LongToShort`,`VeryShortToLong`,`LongToVeryShort`,`SimilarWidth`,`VideoRegression`,`RepeatedCycles`,`ReferenceFullCycle`,`RapidClicks`];export{p as LongToShort,h as LongToVeryShort,b as RapidClicks,y as ReferenceFullCycle,v as RepeatedCycles,f as ShortToLong,g as SimilarWidth,m as VeryShortToLong,_ as VideoRegression,x as __namedExportsOrder,d as default};