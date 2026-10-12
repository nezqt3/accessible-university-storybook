import"./preload-helper-DGWYlufl.js";import"./useTranslation-CCqsX0U5.js";import{S as e,t}from"./iframe-BcEMe4bN.js";import"./react-dom-DU-3k8w7.js";import"./scheduleStorage-BnBnNgN2.js";import{r as n}from"./Schedule-CcBJWk1K.js";import"./cache-B-chMO5T.js";import"./format-Cwr2AuTk.js";import{r}from"./chunk-OE4NN4TA-DQa1z3pO.js";import"./ui-CeMFysF1.js";import"./createLucideIcon-IZGuaEMa.js";import"./check-DuZx-h3D.js";import"./chevron-down-C6XTuuav.js";import"./chevron-left-BakgoH7t.js";import"./chevron-right-CKkT5Esg.js";import"./circle-alert-DC7lUT_1.js";import"./circle-check-BlnI8afm.js";import"./external-link-ustcjU0S.js";import"./info-B3f4nuSn.js";import"./mail-_G-PrLMA.js";import"./map-pin-DGbXmBhk.js";import"./search-CEIc6wwn.js";import"./Alert-BG9LWu3I.js";import"./user-DcMXFyZV.js";import"./users-LPfP3CH4.js";import"./lessonTitle-DcJh7Jm8.js";import"./x-DfQHXYeA.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-CA1wcVh0.js";import"./BackButton-DJxEiiJS.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-Dyt5E--9.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-DTJIttLR.js";import"./Button-BA_jpygv.js";import"./IconButton-B3f5oNTI.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-C0ow8V0B.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-Cj2eDNGw.js";import"./Pressable-Bg3DDMfh.js";import"./Badge-B081RMei.js";import"./Badge-XzTHhqMD.js";import"./proxy-cZ0og6n2.js";import"./ModalOverlay-BQyoz1jD.js";import"./AnimatePresence-C2o88HWb.js";import"./use-reduced-motion-BnmImsGO.js";import"./BlurTransition-BAaQ03Hm.js";import"./BlurTransition-BND0kpmE.js";import"./Card-DkJnIcrd.js";import"./Card-DdYWmRlF.js";import"./Typography-MhBGRVCK.js";import"./Typography-BY-iGFVZ.js";import"./Alert-B3uvw3k_.js";import"./AsyncContentTransition-XVH8z2qe.js";import"./AsyncContentTransition-CPcRLyW2.js";import"./EmptyState-DiMnMpRc.js";import"./EmptyState-Crwa2nqk.js";import"./ErrorState-CN-MNpfu.js";import"./PageLoadingFallback-dHwthxDv.js";import"./Spinner-D_5VjJRg.js";import"./Loader-D70mWWb5.js";import"./Loader-B5k_qdAm.js";import"./NotificationStatus-BnEvYAOn.js";import"./PageLoadingFallback-DAZp9Y_N.js";import"./Skeleton-DPikpjd_.js";import"./Skeleton-Bmw2rAog.js";import"./Checkbox-BXsGbjTH.js";import"./Checkbox-B_eNujA8.js";import"./FormField-B9qUMIjM.js";import"./FormField-DI1mxX-F.js";import"./Input-D0nQTL0T.js";import"./Input-BJFMwxMd.js";import"./OtpInput-BI34aKA3.js";import"./OtpInput-CGERY6VR.js";import"./Select-BEXRX8hz.js";import"./Modal-Bp8p4Gzv.js";import"./ModalHeader-BXSlcaNh.js";import"./ModalHeader-CFa6Ec7J.js";import"./Select-DVp_mvaB.js";import"./Switch-Lojn719t.js";import"./Switch-BWFqhGOl.js";import"./Textarea-CuNW8eJW.js";import"./Textarea-DCLG18SR.js";import"./Grid-DyQDAyr7.js";import"./Grid-CaMwAvlD.js";import"./Inline-B8ddGuTO.js";import"./Inline-DMFGQc-V.js";import"./Layout-BqwZs6YN.js";import"./Layout-BCr6lSSi.js";import"./Stack-BQQ4uaki.js";import"./Stack-Ca2JYwwn.js";import"./Pagination-DeN_CIzQ.js";import"./Pagination-3LFmPlUP.js";import"./Tabs-CKNC8tCe.js";import"./Tabs-CXnlj7nU.js";import"./DatePickerModal-B3u9kAQU.js";import"./DatePickerModal-DuTbRRQU.js";import"./TicketCodeModal-CTQABmEb.js";import"./lessonTime-DZJgy4O-.js";import"./lessonLecturers-Cl1-2Q8f.js";import"./workWithLessons-DHed1Y29.js";import"./schedule-1w8baC0U.js";import"./normalize-o3wfT_jY.js";import"./mapNavigation-Du0jYA4O.js";import{t as i}from"./InformationAboutLesson-OFTEOPyN.js";import"./AuditoriumMapLink-CHd3mHIz.js";import"./TeacherContact-DatyliMb.js";import{t as a}from"./LessonCard-CYOlwkOP.js";import{r as o}from"./scheduleDesign.fixtures-DFE7O40F.js";var s=e(),c=t(),{userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Schedule/ScheduleCard`,component:a,decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{lesson:o,scheduleType:n.GROUP,studyPlace:`fin`,setChooseLesson:()=>{},setOpenLessonInformationClose:()=>{}},parameters:{docs:{description:{component:`Рабочая карточка занятия. Current/Cancelled/Online используют существующие данные. Next/Past остаются нейтральными. Moved проверяет текстовую заметку представления: приложение не выводит перенос без подтверждённых данных и не получает нового поля API.`}}}},d={...o,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`,variants:o.variants.map(e=>({...e,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`}))},f={...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:Array.from({length:5},(e,t)=>({...o.variants[0],lesson_id:`design-long-${t+1}`,lecturer:[`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,`Муравейко Алексей Юрьевич`,`Савинов Евгений Александрович`,`Ильин Артем Сергеевич`,`Степанова-Воскресенская Александра Михайловна`][t],lecturer_email:`teacher-${t+1}@university.example.ru`,group:`ТРПО25-${t+1}`,auditorium:`Учебно-научная лаборатория ${t+1}`,building:`4-й Вешняковский проезд, дом 4, учебный корпус`}))};const p={},m={args:{lesson:{...o,isNow:!0}}},h={args:{lesson:{...o,start_time:`10:10`,end_time:`11:40`}}},g={args:{lesson:{...o,date:`2026-09-08`}}},_={args:{lesson:{...o,is_cancelled:!0}}},v={args:{notice:`Перенесено · время занятия изменено`}},y={args:{lesson:{...o,url1:`https://example.com/webinar`}}},b={args:{lesson:{...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`}}},x={args:{lesson:{...o,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:[]}}},S={args:{lesson:d},parameters:{docs:{description:{story:`Mail копирует lecturer_email из данных занятия и проводит blur boundary слева направо. После check появляется Person; Person возвращает имя зеркальной волной справа налево.`}}}},C={args:{lesson:{...d,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`,variants:d.variants.map(e=>({...e,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`}))}},parameters:{viewport:{defaultViewport:`smallMobile`}}},w={args:{lesson:o}},T={args:{lesson:{...o,auditorium:`Учебно-научная лаборатория распределённых вычислительных систем, помещение 3305/А`,variants:[]}}},E={args:{lesson:{...o,discipline:`Военная подготовка`,auditorium:`Кас15,17/Зал военной подготовки`,lecturer:`Преподаватели В.`,lecturer_email:null,variants:[]}},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Если кабинет и преподаватель не помещаются в одну строку, teacher segment целиком переносится вниз, а разделительная точка скрывается.`}}}},D={...E,globals:{theme:`dark`}},O={...b,globals:{textScale:`large`}},k={globals:{theme:`dark`}},A={...S,globals:{theme:`dark`}},j={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await l.pointer({target:t,keys:`[MouseLeft>]`})}},M={render:function(e){let[t,n]=(0,s.useState)(o),[r,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:n,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:r,onClose:()=>l(!1),lesson:t,studyPlace:`fin`})]})}},N={args:{lesson:f},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Карточка с длинной информацией и несколькими вариантами. Окно занимает доступную высоту, а всё содержимое остаётся доступно во внутренней прокрутке.`}}},render:function(e){let[t,r]=(0,s.useState)(f),[o,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:r,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:o,onClose:()=>l(!1),lesson:t,studyPlace:`fin`,scheduleType:n.GROUP})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`.schedule-lesson-card__open`);t instanceof HTMLElement&&await l.click(t)}},P={...N,globals:{theme:`dark`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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