import"./preload-helper-DGWYlufl.js";import"./useTranslation-B5BWkoby.js";import{S as e,t}from"./iframe-DG86gVef.js";import"./react-dom-C8tt-mi_.js";import"./scheduleStorage-B8kw__rk.js";import{r as n}from"./Schedule-CcBJWk1K.js";import"./cache-CgbOk3JC.js";import"./format-Cwr2AuTk.js";import{i as r}from"./chunk-OE4NN4TA-B0YxYStl.js";/* empty css           */import"./createLucideIcon-CCMXKaSd.js";import"./check-DjviE2Es.js";import"./chevron-down-Ox4OtVW4.js";import"./chevron-left-vQw_lESj.js";import"./chevron-right-D9WhaW8c.js";import"./circle-alert-BaxDilPA.js";import"./circle-check-D-deeo6b.js";import"./external-link-ZlWk_wpt.js";import"./info-DpnwVXBC.js";import"./mail-wk6Wz8HX.js";import"./map-pin-LsQFbQS2.js";import"./search-CM7coFns.js";import"./Alert-B24AgU4F.js";import"./user-D7zZgukT.js";import"./users-B28we2BG.js";import"./lessonTitle-CzjzDDyu.js";import"./x-awPGUOQ4.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-CeHb3kOO.js";import"./BackButton-Dt9o079o.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-CEwLj941.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-DXGonF9_.js";import"./Button-BA_jpygv.js";import"./IconButton-CjjVXmd_.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bt2Uaexb.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-CLYqzT1L.js";import"./Pressable-Bg3DDMfh.js";import"./Badge-B4V9LlfT.js";import"./Badge-XzTHhqMD.js";import"./use-reduced-motion-tgZQMAxJ.js";import"./ModalOverlay-DcyGXzDp.js";import"./AnimatePresence-B9nR5ntE.js";import"./BlurTransition-Cojv3Hzh.js";import"./BlurTransition-Lagju-WE.js";import"./Card-C-eSR3ON.js";import"./Card-DMf2-Jiv.js";import"./Typography-rxFhQhBi.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-Bqgso9Fh.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./EmptyState-CSq-HU45.js";import"./EmptyState-Q6WzCJvL.js";import"./ErrorState-BDN1T5PJ.js";import"./TopLevelTabTransition-CGgUWp3x.js";import"./Spinner-DStQx-br.js";import"./Loader-BRzxjviu.js";import"./Loader-Cbt-y2ak.js";import"./NotificationStatus-DtRltlxF.js";import"./PageLoadingFallback-CadKT-CR.js";import"./Skeleton-BrOVLFjV.js";import"./Skeleton-Br01A5O-.js";import"./Checkbox-5JXeKpu9.js";import"./Checkbox-B1G37d6l.js";import"./FormField-CO6bLoAl.js";import"./FormField-DL6kMHw0.js";import"./Input-n3--7TLz.js";import"./Input-DLJ-L1Fs.js";import"./OtpInput-BBsy1GGw.js";import"./OtpInput-C-PDvYG3.js";import"./Select-DyUscjjl.js";import"./Modal-B343dXyj.js";import"./ModalHeader-B_68Btjc.js";import"./ModalHeader-DebK5TiL.js";import"./Select-CmiJdEV9.js";import"./Switch-BSuKBGTP.js";import"./Switch-B_-MH7sD.js";import"./Textarea-DpemdCgm.js";import"./Textarea-BeeSN_xz.js";import"./Grid-CPei68mO.js";import"./Grid-exqhYs8w.js";import"./Inline-BHrAd-SG.js";import"./Inline-5EFvp8VG.js";import"./Layout-RnMmm5FQ.js";import"./Layout-C8PwNoHv.js";import"./Stack-V_yNe3Q4.js";import"./Stack-Cjv54EAV.js";import"./Pagination-C7scAZaT.js";import"./Pagination-IgyfulLZ.js";import"./Tabs-ZMb8M0_2.js";import"./Tabs-wkaJQrPk.js";import"./DatePickerModal-CWT6r0Kc.js";import"./DatePickerModal-Cnm_dqxA.js";import"./TicketCodeModal-FfeLy5vl.js";import"./lessonTime-B6eu231o.js";import"./lessonLecturers-DVKhKM08.js";import"./workWithLessons-C8rBARnX.js";import"./schedule-DOzideio.js";import"./normalize-BqOEbwlt.js";import"./mapNavigation-DsxmWc7m.js";import{t as i}from"./InformationAboutLesson-D5N6vO0Y.js";import"./AuditoriumMapLink-D2-TnpJa.js";import"./TeacherContact-TpI_wB4K.js";import{t as a}from"./LessonCard-CqEIAdi5.js";import{r as o}from"./scheduleDesign.fixtures-Dsy3h-cq.js";var s=e(),c=t(),{userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Schedule/ScheduleCard`,component:a,decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{lesson:o,scheduleType:n.GROUP,studyPlace:`fin`,setChooseLesson:()=>{},setOpenLessonInformationClose:()=>{}},parameters:{docs:{description:{component:`Рабочая карточка занятия. Current/Cancelled/Online используют существующие данные. Next/Past остаются нейтральными. Moved проверяет текстовую заметку представления: приложение не выводит перенос без подтверждённых данных и не получает нового поля API.`}}}},d={...o,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`,variants:o.variants.map(e=>({...e,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`}))},f={...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:Array.from({length:5},(e,t)=>({...o.variants[0],lesson_id:`design-long-${t+1}`,lecturer:[`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,`Муравейко Алексей Юрьевич`,`Савинов Евгений Александрович`,`Ильин Артем Сергеевич`,`Степанова-Воскресенская Александра Михайловна`][t],lecturer_email:`teacher-${t+1}@university.example.ru`,group:`ТРПО25-${t+1}`,auditorium:`Учебно-научная лаборатория ${t+1}`,building:`4-й Вешняковский проезд, дом 4, учебный корпус`}))};const p={},m={args:{lesson:{...o,isNow:!0}}},h={args:{lesson:{...o,start_time:`10:10`,end_time:`11:40`}}},g={args:{lesson:{...o,date:`2026-09-08`}}},_={args:{lesson:{...o,is_cancelled:!0}}},v={args:{notice:`Перенесено · время занятия изменено`}},y={args:{lesson:{...o,url1:`https://example.com/webinar`}}},b={args:{lesson:{...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`}}},x={args:{lesson:{...o,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:[]}}},S={args:{lesson:d},parameters:{docs:{description:{story:`Mail копирует lecturer_email из данных занятия и проводит blur boundary слева направо. После check появляется Person; Person возвращает имя зеркальной волной справа налево.`}}}},C={args:{lesson:{...d,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`,variants:d.variants.map(e=>({...e,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`}))}},parameters:{viewport:{defaultViewport:`smallMobile`}}},w={args:{lesson:o}},T={args:{lesson:{...o,auditorium:`Учебно-научная лаборатория распределённых вычислительных систем, помещение 3305/А`,variants:[]}}},E={args:{lesson:{...o,discipline:`Военная подготовка`,auditorium:`Кас15,17/Зал военной подготовки`,lecturer:`Преподаватели В.`,lecturer_email:null,variants:[]}},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Если кабинет и преподаватель не помещаются в одну строку, teacher segment целиком переносится вниз, а разделительная точка скрывается.`}}}},D={...E,globals:{theme:`dark`}},O={...b,globals:{textScale:`large`}},k={globals:{theme:`dark`}},A={...S,globals:{theme:`dark`}},j={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await l.pointer({target:t,keys:`[MouseLeft>]`})}},M={render:function(e){let[t,n]=(0,s.useState)(o),[r,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:n,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:r,onClose:()=>l(!1),lesson:t,studyPlace:`fin`})]})}},N={args:{lesson:f},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Карточка с длинной информацией и несколькими вариантами. Окно занимает доступную высоту, а всё содержимое остаётся доступно во внутренней прокрутке.`}}},render:function(e){let[t,r]=(0,s.useState)(f),[o,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:r,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:o,onClose:()=>l(!1),lesson:t,studyPlace:`fin`,scheduleType:n.GROUP})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`.schedule-lesson-card__open`);t instanceof HTMLElement&&await l.click(t)}},P={...N,globals:{theme:`dark`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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