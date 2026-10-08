import"./preload-helper-DGWYlufl.js";import"./useTranslation-r4xO1t1U.js";import{S as e,t}from"./iframe-kF-APqyp.js";import"./react-dom-jYzeVFdR.js";import"./scheduleStorage-BFwts-7S.js";import{r as n}from"./Schedule-BJApNQWq.js";import"./cache-Bsu39zI5.js";import"./format-DRsuurA_.js";import{n as r}from"./chunk-OE4NN4TA-DyjQiUlt.js";import"./ui-C4rTQPPa.js";import"./createLucideIcon-D1UjONYr.js";import"./check-D6LgMK2O.js";import"./chevron-down-DYFIW2ua.js";import"./chevron-left-D8ILP0D4.js";import"./chevron-right-DsQuY3lx.js";import"./circle-alert-BjxbLB1M.js";import"./circle-check-BaSJpN6v.js";import"./external-link-CmXPKfkx.js";import"./info-Cednekog.js";import"./mail-lX0G5yCh.js";import"./map-pin-BoBkvuDK.js";import"./search-LHo-5S2n.js";import"./Alert-B29qfMWR.js";import"./user-C1PMR3dz.js";import"./users-D8bP9xZl.js";import"./lessonTitle-Df9MHt1Z.js";import"./x-DEosaj9j.js";import"./motion-C4hY7hfp.js";import"./NavigationTransitionContext-COeQ5XTZ.js";import"./BackButton-C2p4Kr5Z.js";import"./BackButton-1xa1X3Rx.js";import"./InlineSpinner-BVLlDt8J.js";import"./InlineSpinner-CtERaFhk.js";import"./Button-weYjeSKY.js";import"./Button-DDTwPwQw.js";import"./IconButton-Ospn9fJu.js";import"./IconButton-C3ENirEm.js";import"./CloseButton-BboE_dUN.js";import"./CloseButton-VeyMhf3w.js";import"./Pressable-BOcl3Inx.js";import"./Pressable-4oYskg3v.js";import"./Badge-miktNqLW.js";import"./Badge-DDAzEWwc.js";import"./proxy-BQAo5aAS.js";import"./ModalOverlay-_iYqSxT_.js";import"./AnimatePresence-CNpM86Yv.js";import"./use-reduced-motion-DErL7L4T.js";import"./BlurTransition-CoZN5TAY.js";import"./BlurTransition-Lagju-WE.js";import"./Card-D4mjlvRe.js";import"./Card-DMf2-Jiv.js";import"./Typography-xWKebxyx.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-HOVfr-yx.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./EmptyState-BfzuH-_n.js";import"./EmptyState-Q6WzCJvL.js";import"./useLazyAsset-B2BrTUAw.js";import"./ErrorState-CkdAPd-j.js";import"./PageLoadingFallback-dHwthxDv.js";import"./Spinner-CkyC87aJ.js";import"./Loader-Cv5z_WAZ.js";import"./Loader-B5k_qdAm.js";import"./NotificationStatus-pF05l1g4.js";import"./PageLoadingFallback-C1aaV4HW.js";import"./Skeleton-BFAyqa6j.js";import"./Skeleton-Bmw2rAog.js";import"./Checkbox-hL4mKjfO.js";import"./Checkbox-B_eNujA8.js";import"./FormField-D2Mg6Hxr.js";import"./FormField-DI1mxX-F.js";import"./Input-CVafAwFC.js";import"./Input-BJFMwxMd.js";import"./OtpInput-t0EdsfHf.js";import"./OtpInput-CGERY6VR.js";import"./Select-BIgCzt0i.js";import"./Modal-NXLRbw5m.js";import"./ModalHeader-EWM89jpv.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Switch-CtGakLgK.js";import"./Switch-BWFqhGOl.js";import"./Textarea-hvoZsiQl.js";import"./Textarea-DCLG18SR.js";import"./Grid-BG7ZV7_3.js";import"./Inline-JpgvU4-7.js";import"./Inline-5EFvp8VG.js";import"./Layout-xHGULGDn.js";import"./Layout-C8PwNoHv.js";import"./Stack-BcD5kRk1.js";import"./Stack-Cjv54EAV.js";import"./Pagination-ByfZtucD.js";import"./Pagination-IgyfulLZ.js";import"./Tabs-B9PNZ4Gg.js";import"./Tabs-wkaJQrPk.js";import"./DatePickerModal-BtiPDJvI.js";import"./DatePickerModal-Cnm_dqxA.js";import"./TicketCodeModal-CWz-fFBW.js";import"./lessonTime-B6eu231o.js";import"./lessonLecturers-B_FMPTZA.js";import"./workWithLessons-CrwqNk3G.js";import"./schedule-DOzideio.js";import"./normalize-D3l3FGwQ.js";import"./mapNavigation-CkiNtXgO.js";import{t as i}from"./InformationAboutLesson-BfIc_a6H.js";import"./AuditoriumMapLink-Cyh2jLte.js";import"./TeacherContact-uhIrIR11.js";import{t as a}from"./LessonCard-Dl4X9TBg.js";import{r as o}from"./scheduleDesign.fixtures-hus3HJm6.js";var s=e(),c=t(),{userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Schedule/ScheduleCard`,component:a,decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{lesson:o,scheduleType:n.GROUP,studyPlace:`fin`,setChooseLesson:()=>{},setOpenLessonInformationClose:()=>{}},parameters:{docs:{description:{component:`Рабочая карточка занятия. Current/Cancelled/Online используют существующие данные. Next/Past остаются нейтральными. Moved проверяет текстовую заметку представления: приложение не выводит перенос без подтверждённых данных и не получает нового поля API.`}}}},d={...o,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`,variants:o.variants.map(e=>({...e,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`}))},f={...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:Array.from({length:5},(e,t)=>({...o.variants[0],lesson_id:`design-long-${t+1}`,lecturer:[`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,`Муравейко Алексей Юрьевич`,`Савинов Евгений Александрович`,`Ильин Артем Сергеевич`,`Степанова-Воскресенская Александра Михайловна`][t],lecturer_email:`teacher-${t+1}@university.example.ru`,group:`ТРПО25-${t+1}`,auditorium:`Учебно-научная лаборатория ${t+1}`,building:`4-й Вешняковский проезд, дом 4, учебный корпус`}))};const p={},m={args:{lesson:{...o,isNow:!0}}},h={args:{lesson:{...o,start_time:`10:10`,end_time:`11:40`}}},g={args:{lesson:{...o,date:`2026-09-08`}}},_={args:{lesson:{...o,is_cancelled:!0}}},v={args:{notice:`Перенесено · время занятия изменено`}},y={args:{lesson:{...o,url1:`https://example.com/webinar`}}},b={args:{lesson:{...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`}}},x={args:{lesson:{...o,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:[]}}},S={args:{lesson:d},parameters:{docs:{description:{story:`Mail копирует lecturer_email из данных занятия и проводит blur boundary слева направо. После check появляется Person; Person возвращает имя зеркальной волной справа налево.`}}}},C={args:{lesson:{...d,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`,variants:d.variants.map(e=>({...e,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`}))}},parameters:{viewport:{defaultViewport:`smallMobile`}}},w={args:{lesson:o}},T={args:{lesson:{...o,auditorium:`Учебно-научная лаборатория распределённых вычислительных систем, помещение 3305/А`,variants:[]}}},E={args:{lesson:{...o,discipline:`Военная подготовка`,auditorium:`Кас15,17/Зал военной подготовки`,lecturer:`Преподаватели В.`,lecturer_email:null,variants:[]}},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Если кабинет и преподаватель не помещаются в одну строку, teacher segment целиком переносится вниз, а разделительная точка скрывается.`}}}},D={...E,globals:{theme:`dark`}},O={...b,globals:{textScale:`large`}},k={globals:{theme:`dark`}},A={...S,globals:{theme:`dark`}},j={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await l.pointer({target:t,keys:`[MouseLeft>]`})}},M={render:function(e){let[t,n]=(0,s.useState)(o),[r,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:n,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:r,onClose:()=>l(!1),lesson:t,studyPlace:`fin`})]})}},N={args:{lesson:f},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Карточка с длинной информацией и несколькими вариантами. Окно занимает доступную высоту, а всё содержимое остаётся доступно во внутренней прокрутке.`}}},render:function(e){let[t,r]=(0,s.useState)(f),[o,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:r,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:o,onClose:()=>l(!1),lesson:t,studyPlace:`fin`,scheduleType:n.GROUP})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`.schedule-lesson-card__open`);t instanceof HTMLElement&&await l.click(t)}},P={...N,globals:{theme:`dark`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      isNow: true
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      start_time: "10:10",
      end_time: "11:40"
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      date: "2026-09-08"
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      is_cancelled: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    notice: "Перенесено · время занятия изменено"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      url1: "https://example.com/webinar"
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      discipline: "Проектирование и администрирование распределённых информационных систем управления образовательными процессами"
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      lecturer: "Александрова-Константинопольская-Рождественская Анастасия Анатольевна",
      variants: []
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: lessonWithTeacherEmail
  },
  parameters: {
    docs: {
      description: {
        story: "Mail копирует lecturer_email из данных занятия и проводит blur boundary слева направо. После check появляется Person; Person возвращает имя зеркальной волной справа налево."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lessonWithTeacherEmail,
      lecturer_email: "alexandra.stepanova-voskresenskaya@fa.ru",
      variants: lessonWithTeacherEmail.variants.map(variant => ({
        ...variant,
        lecturer_email: "alexandra.stepanova-voskresenskaya@fa.ru"
      }))
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    lesson
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      auditorium: "Учебно-научная лаборатория распределённых вычислительных систем, помещение 3305/А",
      variants: []
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: {
      ...lesson,
      discipline: "Военная подготовка",
      auditorium: "Кас15,17/Зал военной подготовки",
      lecturer: "Преподаватели В.",
      lecturer_email: null,
      variants: []
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    },
    docs: {
      description: {
        story: "Если кабинет и преподаватель не помещаются в одну строку, teacher segment целиком переносится вниз, а разделительная точка скрывается."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...WrappedTeacher,
  globals: {
    theme: "dark"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...LongSubjectName,
  globals: {
    textScale: "large"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...TeacherEmailInteraction,
  globals: {
    theme: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector("button");
    if (card) await userEvent.pointer({
      target: card,
      keys: "[MouseLeft>]"
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function LessonExample(args) {
    const [chosen, setChosen] = useState<GroupedLesson>(lesson);
    const [open, setOpen] = useState(false);
    return <>
        <LessonCard {...args} setChooseLesson={setChosen} setOpenLessonInformationClose={setOpen} />
        <InformationAboutLesson isOpen={open} onClose={() => setOpen(false)} lesson={chosen} studyPlace="fin" />
      </>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    lesson: lessonWithLongDetails
  },
  parameters: {
    viewport: {
      defaultViewport: "smallMobile"
    },
    docs: {
      description: {
        story: "Карточка с длинной информацией и несколькими вариантами. Окно занимает доступную высоту, а всё содержимое остаётся доступно во внутренней прокрутке."
      }
    }
  },
  render: function LongLessonExample(args) {
    const [chosen, setChosen] = useState<GroupedLesson>(lessonWithLongDetails);
    const [open, setOpen] = useState(false);
    return <>
        <LessonCard {...args} setChooseLesson={setChosen} setOpenLessonInformationClose={setOpen} />
        <InformationAboutLesson isOpen={open} onClose={() => setOpen(false)} lesson={chosen} studyPlace="fin" scheduleType={RuzType.GROUP} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector(".schedule-lesson-card__open");
    if (card instanceof HTMLElement) await userEvent.click(card);
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...InteractiveLongDetails,
  globals: {
    theme: "dark"
  }
}`,...P.parameters?.docs?.source}}};const F=[`Default`,`Current`,`Next`,`Past`,`Cancelled`,`Moved`,`Online`,`LongSubjectName`,`LongTeacherName`,`TeacherEmailInteraction`,`LongTeacherEmail`,`WithoutTeacherEmail`,`LongRoomName`,`WrappedTeacher`,`WrappedTeacherDark`,`LargeText`,`Dark`,`TeacherEmailDark`,`Pressed`,`Interactive`,`InteractiveLongDetails`,`InteractiveLongDetailsDark`];export{_ as Cancelled,m as Current,k as Dark,p as Default,M as Interactive,N as InteractiveLongDetails,P as InteractiveLongDetailsDark,O as LargeText,T as LongRoomName,b as LongSubjectName,C as LongTeacherEmail,x as LongTeacherName,v as Moved,h as Next,y as Online,g as Past,j as Pressed,A as TeacherEmailDark,S as TeacherEmailInteraction,w as WithoutTeacherEmail,E as WrappedTeacher,D as WrappedTeacherDark,F as __namedExportsOrder,u as default};