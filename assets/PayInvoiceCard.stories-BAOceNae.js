import"./preload-helper-DGWYlufl.js";import"./useTranslation-D-aU4f03.js";import"./react-dom-CL5saaxG.js";import"./client-DMLkocDF.js";import"./api-DZz9UYpn.js";import"./chunk-OE4NN4TA-COuAeJcs.js";/* empty css           */import"./createLucideIcon-B16nweCc.js";import"./check-v_LV27aT.js";import"./chevron-down-B4dP74wr.js";import"./chevron-left-f3o16TEb.js";import"./chevron-right-aoKq3O8O.js";import"./circle-alert-BSxUa3R5.js";import"./circle-check-C6xxfQkM.js";import"./info-CktH8GD8.js";import"./search-DyFcSRiq.js";import"./Alert-BWh6FU8G.js";import"./x-DeThYvLg.js";import"./motion-C9fxwz80.js";import"./NavigationTransitionContext-D79BFwWZ.js";import"./BackButton-BsD5Ih9p.js";import"./BackButton-DVkhGdk7.js";import"./InlineSpinner-CBIQLgmS.js";import"./InlineSpinner-DGBp7q51.js";import"./Button-BWU--gB6.js";import"./Button-BA_jpygv.js";import"./IconButton-CBDZ9vXW.js";import"./IconButton-WT9EAVsO.js";import"./ModalCloseContext-BOKqPjCS.js";import"./CloseButton-CKC4LnPI.js";import"./CloseButton-CT6ApXCH.js";import"./Pressable-Ba55c0wK.js";import"./Pressable-RrhW_cjo.js";import"./Badge-D8_Sf071.js";import"./Badge-Dq9LiM2w.js";import"./use-reduced-motion-BiSVJF6j.js";import"./ModalOverlay-Ds_UD4_I.js";import"./AnimatePresence-Bbbot8bT.js";import"./LoaderTransitionContext-DKcwLzlE.js";import"./BlurTransition-D7u-HmKI.js";import"./BlurTransition-MGIcubQU.js";import"./Card-DpZ30Oxq.js";import"./Card-Doq15t3c.js";import"./Typography-BH1B6yTK.js";import"./Typography-DVvNjpAw.js";import"./Alert-DFWBN98n.js";import"./AsyncContentTransition-CzuKe7we.js";import"./AsyncContentTransition-BFltYoIl.js";import"./EmptyState-DdzQWQcl.js";import"./EmptyState-02ql18bx.js";import"./ErrorState-BDptnMjG.js";import"./TopLevelTabTransition-CKMSKdW_.js";import"./Spinner-B5m1QouG.js";import"./Loader-BpLhPSR9.js";import"./Loader-CGp4NDSc.js";import"./LoaderTransition-CvqmAts_.js";import"./NotificationStatus-CcmNxgjY.js";import"./PageLoadingFallback-D9pKvbqF.js";import"./Skeleton-ClEm9rfE.js";import"./Skeleton-ChK5Iu2x.js";import"./Checkbox-Bw4w7_4G.js";import"./Checkbox-Dpzxurdj.js";import"./FormField-WG2VqsSE.js";import"./FormField-C3pULiZ3.js";import"./Input-D15hzeKy.js";import"./Input-DXRPRK1S.js";import"./OtpInput-cGbQ0X8P.js";import"./OtpInput-CaJQ6XUa.js";import"./Select-CcxXoXzd.js";import"./Modal-BPyHJU71.js";import"./ModalHeader-BRUlOqff.js";import"./ModalHeader-B5wsWETS.js";import"./Select-BzZ9D2tC.js";import"./Switch-DwvrsSFR.js";import"./Switch-BnpJ1gCp.js";import"./Textarea-BVbDn2E-.js";import"./Textarea-BJVLi_Dg.js";import"./Grid-9gEdm2Nu.js";import"./Grid-DCmehTzr.js";import"./Inline-CI3-7PLe.js";import"./Inline-Bux_RO3c.js";import"./Layout-CaqldAuC.js";import"./Layout-CrjOs2Od.js";import"./Stack-D9ZD5KTR.js";import"./Stack-CqlUafn4.js";import"./Pagination-Bsy0QvkN.js";import"./Pagination-RSV2lW4B.js";import"./Tabs-BWYKDmLJ.js";import"./Tabs-CszNVceh.js";import"./DatePickerModal-DAgxmbj7.js";import"./DatePickerModal-B7fMn1Ed.js";import"./TicketCodeModal-CyUzsnNb.js";import"./DetailList-_OG5nJYm.js";import"./DetailList-By429zX9.js";import{t as e}from"./PayInvoiceCard-CJIz8xDO.js";var t={title:`Screens/Payments/InvoiceCard`,component:e,args:{invoice:{uin:`04127059260311010120014771234567890`,balanceAmountHuman:`1 234 567,89`,purposePayment:`Оплата за обучение по программе информационных систем и технологий за осенний семестр`,faculty:`Факультет информационных технологий и анализа больших данных`,paymentTerm:`2026-09-30`,status:{code:`NOT_QUOTED`,value:`Ожидает оплаты`}},isPayable:!0,isDetailLoading:!1,isSbpLoading:!1,onOpen:()=>{},onOpenSbp:()=>{}}},n=t;const r={},i={args:{isSbpLoading:!0}},a={args:{isPayable:!1,invoice:{...t.args.invoice,status:{code:`QUOTED`,value:`Оплачен`},totalAmount:106e4,receiveAmount:106e4,balanceAmount:0,balanceAmountHuman:`0,00`}}},o={args:{invoice:{...t.args.invoice,status:{code:`NOT_QUOTED`,value:`Частично оплачен`},totalAmount:106e4,receiveAmount:56e4,balanceAmount:5e5,balanceAmountHuman:`5 000,00`}}},s={args:{isPayable:!1,invoice:{...t.args.invoice,status:{code:`QUOTED`,value:`Оплачен`},totalAmount:106e4,balanceAmount:0,balanceAmountHuman:`0,00`}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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