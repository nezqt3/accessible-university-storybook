import"./preload-helper-DGWYlufl.js";import"./useTranslation-B5BWkoby.js";import"./react-dom-C8tt-mi_.js";import"./client-DMLkocDF.js";import"./api-DZz9UYpn.js";import"./chunk-OE4NN4TA-B0YxYStl.js";/* empty css           */import"./createLucideIcon-CCMXKaSd.js";import"./check-DjviE2Es.js";import"./chevron-down-Ox4OtVW4.js";import"./chevron-left-vQw_lESj.js";import"./chevron-right-D9WhaW8c.js";import"./circle-alert-BaxDilPA.js";import"./circle-check-D-deeo6b.js";import"./info-DpnwVXBC.js";import"./search-CM7coFns.js";import"./Alert-B24AgU4F.js";import"./x-awPGUOQ4.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-CeHb3kOO.js";import"./BackButton-Dt9o079o.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-CEwLj941.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-DXGonF9_.js";import"./Button-BA_jpygv.js";import"./IconButton-CjjVXmd_.js";import"./IconButton-WT9EAVsO.js";import"./CloseButton-Bt2Uaexb.js";import"./CloseButton-E9qr7WDM.js";import"./Pressable-CLYqzT1L.js";import"./Pressable-Bg3DDMfh.js";import"./Badge-B4V9LlfT.js";import"./Badge-XzTHhqMD.js";import"./use-reduced-motion-tgZQMAxJ.js";import"./ModalOverlay-DcyGXzDp.js";import"./AnimatePresence-B9nR5ntE.js";import"./BlurTransition-Cojv3Hzh.js";import"./BlurTransition-Lagju-WE.js";import"./Card-C-eSR3ON.js";import"./Card-DMf2-Jiv.js";import"./Typography-rxFhQhBi.js";import"./Typography-Q4VDshPG.js";import"./Alert-BtpqdEE_.js";import"./AsyncContentTransition-Bqgso9Fh.js";import"./AsyncContentTransition-C2rBoNq9.js";import"./EmptyState-CSq-HU45.js";import"./EmptyState-Q6WzCJvL.js";import"./ErrorState-BDN1T5PJ.js";import"./TopLevelTabTransition-CGgUWp3x.js";import"./Spinner-DStQx-br.js";import"./Loader-BRzxjviu.js";import"./Loader-Cbt-y2ak.js";import"./NotificationStatus-DtRltlxF.js";import"./PageLoadingFallback-CadKT-CR.js";import"./Skeleton-BrOVLFjV.js";import"./Skeleton-Br01A5O-.js";import"./Checkbox-5JXeKpu9.js";import"./Checkbox-B1G37d6l.js";import"./FormField-CO6bLoAl.js";import"./FormField-DL6kMHw0.js";import"./Input-n3--7TLz.js";import"./Input-DLJ-L1Fs.js";import"./OtpInput-BBsy1GGw.js";import"./OtpInput-C-PDvYG3.js";import"./Select-DyUscjjl.js";import"./Modal-B343dXyj.js";import"./ModalHeader-B_68Btjc.js";import"./ModalHeader-DebK5TiL.js";import"./Select-CmiJdEV9.js";import"./Switch-BSuKBGTP.js";import"./Switch-B_-MH7sD.js";import"./Textarea-DpemdCgm.js";import"./Textarea-BeeSN_xz.js";import"./Grid-CPei68mO.js";import"./Grid-exqhYs8w.js";import"./Inline-BHrAd-SG.js";import"./Inline-5EFvp8VG.js";import"./Layout-RnMmm5FQ.js";import"./Layout-C8PwNoHv.js";import"./Stack-V_yNe3Q4.js";import"./Stack-Cjv54EAV.js";import"./Pagination-C7scAZaT.js";import"./Pagination-IgyfulLZ.js";import"./Tabs-ZMb8M0_2.js";import"./Tabs-wkaJQrPk.js";import"./DatePickerModal-CWT6r0Kc.js";import"./DatePickerModal-Cnm_dqxA.js";import"./TicketCodeModal-FfeLy5vl.js";import"./DetailList-B0byXQLs.js";import"./DetailList-DiQO6khH.js";import{t as e}from"./PayInvoiceCard-D1LjKtBr.js";var t={title:`Screens/Payments/InvoiceCard`,component:e,args:{invoice:{uin:`04127059260311010120014771234567890`,balanceAmountHuman:`1 234 567,89`,purposePayment:`Оплата за обучение по программе информационных систем и технологий за осенний семестр`,faculty:`Факультет информационных технологий и анализа больших данных`,paymentTerm:`2026-09-30`,status:{code:`NOT_QUOTED`,value:`Ожидает оплаты`}},isPayable:!0,isDetailLoading:!1,isSbpLoading:!1,onOpen:()=>{},onOpenSbp:()=>{}}},n=t;const r={},i={args:{isSbpLoading:!0}},a={args:{isPayable:!1,invoice:{...t.args.invoice,status:{code:`QUOTED`,value:`Оплачен`},totalAmount:106e4,receiveAmount:106e4,balanceAmount:0,balanceAmountHuman:`0,00`}}},o={args:{invoice:{...t.args.invoice,status:{code:`NOT_QUOTED`,value:`Частично оплачен`},totalAmount:106e4,receiveAmount:56e4,balanceAmount:5e5,balanceAmountHuman:`5 000,00`}}},s={args:{isPayable:!1,invoice:{...t.args.invoice,status:{code:`QUOTED`,value:`Оплачен`},totalAmount:106e4,balanceAmount:0,balanceAmountHuman:`0,00`}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isSbpLoading: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isPayable: false,
    invoice: {
      ...meta.args.invoice,
      status: {
        code: "QUOTED",
        value: "Оплачен"
      },
      totalAmount: 1060000,
      receiveAmount: 1060000,
      balanceAmount: 0,
      balanceAmountHuman: "0,00"
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    invoice: {
      ...meta.args.invoice,
      status: {
        code: "NOT_QUOTED",
        value: "Частично оплачен"
      },
      totalAmount: 1060000,
      receiveAmount: 560000,
      balanceAmount: 500000,
      balanceAmountHuman: "5 000,00"
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isPayable: false,
    invoice: {
      ...meta.args.invoice,
      status: {
        code: "QUOTED",
        value: "Оплачен"
      },
      totalAmount: 1060000,
      balanceAmount: 0,
      balanceAmountHuman: "0,00"
    }
  }
}`,...s.parameters?.docs?.source}}};const c=[`LongContent`,`Loading`,`Paid`,`PartiallyPaid`,`PaidAmountMissing`];export{i as Loading,r as LongContent,a as Paid,s as PaidAmountMissing,o as PartiallyPaid,c as __namedExportsOrder,n as default};