import"./preload-helper-DGWYlufl.js";import"./useTranslation-C3Z1tYTP.js";import{t as e,w as t}from"./iframe-BWQ9bya-.js";import"./react-dom-DJAx-xjr.js";import"./scheduleStorage-Im5BH6ln.js";import{r as n}from"./Schedule-BJApNQWq.js";import"./cache-B9pmE6cz.js";import"./format-DRsuurA_.js";import{i as r}from"./chunk-OE4NN4TA-CDL938BT.js";/* empty css           */import"./createLucideIcon-VwXisgqe.js";import"./check-CA4ORgZD.js";import"./chevron-down-BN0gH5gI.js";import"./chevron-left-CfoDP7Az.js";import"./chevron-right-BYfSCFr4.js";import"./circle-alert-DyyghV65.js";import"./circle-check-VKsYqJXe.js";import"./external-link-CwbhIFTU.js";import"./info-dgFy7BYg.js";import"./mail-B7kqKI5V.js";import"./map-pin-D-2ov0Ne.js";import"./search-DNrccIGH.js";import"./Alert-DrLPQYRU.js";import"./user-gr3mD8Zp.js";import"./users-CH0e9r_L.js";import"./lessonTitle-BufUSuQF.js";import"./x-B0zMJXD3.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-j34AYP9R.js";import"./BackButton-C5DIydLB.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-BcUILXuS.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-Bts8SiHS.js";import"./Button-BA_jpygv.js";import"./IconButton-BTFOrYWb.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-hK1S3r34.js";import"./CloseButton-CLXiGdep.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-BKGs8ya5.js";import"./Pressable-RrhW_cjo.js";import"./Badge-BCEa6ed0.js";import"./Badge-Dq9LiM2w.js";import"./use-reduced-motion-B2yEO12g.js";import"./ModalOverlay-Dawcoiog.js";import"./AnimatePresence-vFx6k_H6.js";import"./LoaderTransitionContext-Cr1kAYNh.js";import"./BlurTransition-BbnWv7YB.js";import"./BlurTransition-MGIcubQU.js";import"./Card-CbTvXY5j.js";import"./Card-Doq15t3c.js";import"./Typography-CZ8GAg4R.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-Cc4kVm9k.js";import"./AsyncContentTransition-BFltYoIl.js";import"./EmptyState-CugtQnK7.js";import"./EmptyState-02ql18bx.js";import"./ErrorState-CmXn2yhn.js";import"./TopLevelTabTransition-CVqzwdi4.js";import"./Spinner-Dj3a0oQB.js";import"./Loader-BOcdNsRi.js";import"./Loader-CGp4NDSc.js";import"./LoaderTransition-D0Cxc3hd.js";import"./NotificationStatus-zuv7wJxr.js";import"./PageLoadingFallback-jAA5w4tv.js";import"./Skeleton-BfxCCHOs.js";import"./Skeleton-ChK5Iu2x.js";import"./Checkbox-kI_C5uhU.js";import"./Checkbox-Dpzxurdj.js";import"./FormField-LssLkjZA.js";import"./FormField-C3pULiZ3.js";import"./Input-BuXSbUmQ.js";import"./Input-DXRPRK1S.js";import"./OtpInput-DEvQZQ-T.js";import"./OtpInput-CaJQ6XUa.js";import"./Select-DVTly-RD.js";import"./Modal-LZYuD64Z.js";import"./ModalHeader-gPspNMox.js";import"./ModalHeader-B5wsWETS.js";import"./Select-BzZ9D2tC.js";import"./Switch-D7f0QSAD.js";import"./Switch-BnpJ1gCp.js";import"./Textarea-CYrSj0Dz.js";import"./Textarea-BJVLi_Dg.js";import"./Grid-kDsrFCar.js";import"./Grid-DCmehTzr.js";import"./Inline-DcVU74Ba.js";import"./Inline-Bux_RO3c.js";import"./Layout-DC1lJLkp.js";import"./Layout-CrjOs2Od.js";import"./Stack-DRPRntz9.js";import"./Stack-CqlUafn4.js";import"./Pagination-XyulXCaI.js";import"./Pagination-RSV2lW4B.js";import"./Tabs-CgMJ_Ihu.js";import"./Tabs-CszNVceh.js";import"./DatePickerModal-PIcd9Ktc.js";import"./DatePickerModal-B7fMn1Ed.js";import"./TicketCodeModal-CcfxOerQ.js";import"./lessonTime-Cw9t6lsz.js";import"./lessonLecturers-CGwbwfNX.js";import"./workWithLessons-BjPjarnd.js";import"./schedule-BzzS6T-2.js";import"./normalize-utxfYNV9.js";import{t as i}from"./InformationAboutLesson-BM7juexa.js";import"./AuditoriumMapLink-DHRkCN97.js";import"./TeacherContact-BO1Ry3Zs.js";import{t as a}from"./LessonCard-CdqWdUTg.js";import{r as o}from"./scheduleDesign.fixtures-Cs1dyDPL.js";var s=t(),c=e(),{userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Schedule/ScheduleCard`,component:a,decorators:[e=>(0,c.jsx)(r,{children:(0,c.jsx)(e,{})})],args:{lesson:o,scheduleType:n.GROUP,studyPlace:`fin`,setChooseLesson:()=>{},setOpenLessonInformationClose:()=>{}},parameters:{docs:{description:{component:`Рабочая карточка занятия. Current/Cancelled/Online используют существующие данные. Next/Past остаются нейтральными. Moved проверяет текстовую заметку представления: приложение не выводит перенос без подтверждённых данных и не получает нового поля API.`}}}},d={...o,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`,variants:o.variants.map(e=>({...e,lecturer:`Ильин Артем Сергеевич`,lecturer_email:`ilyin.as@fa.ru`}))},f={...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:Array.from({length:5},(e,t)=>({...o.variants[0],lesson_id:`design-long-${t+1}`,lecturer:[`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,`Муравейко Алексей Юрьевич`,`Савинов Евгений Александрович`,`Ильин Артем Сергеевич`,`Степанова-Воскресенская Александра Михайловна`][t],lecturer_email:`teacher-${t+1}@university.example.ru`,group:`ТРПО25-${t+1}`,auditorium:`Учебно-научная лаборатория ${t+1}`,building:`4-й Вешняковский проезд, дом 4, учебный корпус`}))};const p={},m={args:{lesson:{...o,isNow:!0}}},h={args:{lesson:{...o,start_time:`10:10`,end_time:`11:40`}}},g={args:{lesson:{...o,date:`2026-09-08`}}},_={args:{lesson:{...o,is_cancelled:!0}}},v={args:{notice:`Перенесено · время занятия изменено`}},y={args:{lesson:{...o,url1:`https://example.com/webinar`}}},b={args:{lesson:{...o,discipline:`Проектирование и администрирование распределённых информационных систем управления образовательными процессами`}}},x={args:{lesson:{...o,lecturer:`Александрова-Константинопольская-Рождественская Анастасия Анатольевна`,variants:[]}}},S={args:{lesson:d},parameters:{docs:{description:{story:`Mail копирует lecturer_email из данных занятия и проводит blur boundary слева направо. После check появляется Person; Person возвращает имя зеркальной волной справа налево.`}}}},C={args:{lesson:{...d,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`,variants:d.variants.map(e=>({...e,lecturer_email:`alexandra.stepanova-voskresenskaya@fa.ru`}))}},parameters:{viewport:{defaultViewport:`smallMobile`}}},w={args:{lesson:o}},T={args:{lesson:{...o,auditorium:`Учебно-научная лаборатория распределённых вычислительных систем, помещение 3305/А`,variants:[]}}},E={args:{lesson:{...o,discipline:`Военная подготовка`,auditorium:`Кас15,17/Зал военной подготовки`,lecturer:`Преподаватели В.`,lecturer_email:null,variants:[]}},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Если кабинет и преподаватель не помещаются в одну строку, teacher segment целиком переносится вниз, а разделительная точка скрывается.`}}}},D={...E,globals:{theme:`dark`}},O={...b,globals:{textScale:`large`}},k={globals:{theme:`dark`}},A={...S,globals:{theme:`dark`}},j={play:async({canvasElement:e})=>{let t=e.querySelector(`button`);t&&await l.pointer({target:t,keys:`[MouseLeft>]`})}},M={render:function(e){let[t,n]=(0,s.useState)(o),[r,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:n,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:r,onClose:()=>l(!1),lesson:t,studyPlace:`fin`})]})}},N={args:{lesson:f},parameters:{viewport:{defaultViewport:`smallMobile`},docs:{description:{story:`Карточка с длинной информацией и несколькими вариантами. Окно занимает доступную высоту, а всё содержимое остаётся доступно во внутренней прокрутке.`}}},render:function(e){let[t,r]=(0,s.useState)(f),[o,l]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{...e,setChooseLesson:r,setOpenLessonInformationClose:l}),(0,c.jsx)(i,{isOpen:o,onClose:()=>l(!1),lesson:t,studyPlace:`fin`,scheduleType:n.GROUP})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`.schedule-lesson-card__open`);t instanceof HTMLElement&&await l.click(t)}},P={...N,globals:{theme:`dark`}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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