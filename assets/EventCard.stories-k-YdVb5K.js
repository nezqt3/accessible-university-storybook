import"./useTranslation-eDAlq15L.js";import{S as e,t}from"./iframe-CmBlaoL5.js";import"./createLucideIcon-xVjI36Up.js";import"./calendar-days--lbbqK8X.js";import{t as n}from"./EventCard-BY4iyXSa.js";import"./map-pin-DWPsGKpe.js";import"./InlineSpinner-BQkqwLS5.js";import"./InlineSpinner-CtERaFhk.js";import"./Badge-BbHFuqkC.js";import"./Badge-DDAzEWwc.js";import"./Card-lFxmNmMK.js";import"./Card-DMf2-Jiv.js";import{n as r}from"./Typography-CcbGFH53.js";import"./Typography-Q4VDshPG.js";import"./Inline-Nbkp37tm.js";import"./Inline-5EFvp8VG.js";import{t as i}from"./Stack-DI62hkWB.js";import"./Stack-Cjv54EAV.js";import"./events.mappers-DM0RBSVr.js";var a=e(),o=t(),s={id:42,title:`День открытых дверей`,shortDescription:`Встреча с преподавателями и знакомство с образовательными программами.`,status:`upcoming`,startAt:`2026-09-19T10:00:00+03:00`,endAt:`2026-09-19T15:30:00+03:00`,place:`Ленинградский проспект, 49, главный корпус`},c={title:`Events/EventCard`,component:n,args:{event:s,isOpening:!1,onOpen:()=>{}}};const l={},u={args:{isOpening:!0}},d={args:{event:{...s,status:`current`,isRegistered:!0}}},f={args:{event:{...s,externalId:`olympiad-42`,parentId:12}}},p={args:{event:{id:43}}},m={args:{event:{...s,title:`Международная научно-практическая конференция о развитии финансовых технологий и распределённых систем`,shortDescription:`Встреча с профессором Александрой Константиновной Степановой-Воскресенской и представителями образовательных подразделений университета.`,endAt:`2026-09-21T18:45:00+03:00`,place:`Москва, Ленинградский проспект, дом 49, корпус 2, конференц-зал имени выдающихся исследователей финансовой науки`}}},h={globals:{theme:`light`}},g={globals:{theme:`dark`}},_={...m,globals:{textScale:`large`}},v={render:function(e){let[t,s]=(0,a.useState)(null);return(0,o.jsxs)(i,{gap:`4`,children:[(0,o.jsx)(n,{...e,onOpen:s}),(0,o.jsx)(r,{size:`sm`,role:`status`,children:t?`Открыто: ${t.title}`:`Выберите мероприятие`})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpening: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      ...event,
      status: "current",
      isRegistered: true
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      ...event,
      externalId: "olympiad-42",
      parentId: 12
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      id: 43
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      ...event,
      title: "Международная научно-практическая конференция о развитии финансовых технологий и распределённых систем",
      shortDescription: "Встреча с профессором Александрой Константиновной Степановой-Воскресенской и представителями образовательных подразделений университета.",
      endAt: "2026-09-21T18:45:00+03:00",
      place: "Москва, Ленинградский проспект, дом 49, корпус 2, конференц-зал имени выдающихся исследователей финансовой науки"
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...LongContent,
  globals: {
    textScale: "large"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExample(args) {
    const [selected, setSelected] = useState<EventItem | null>(null);
    return <Stack gap="4">
        <EventCard {...args} onOpen={setSelected} />
        <Text size="sm" role="status">
          {selected ? \`Открыто: \${selected.title}\` : "Выберите мероприятие"}
        </Text>
      </Stack>;
  }
}`,...v.parameters?.docs?.source}}};const y=[`Default`,`Opening`,`Registered`,`Olympiad`,`MissingDetails`,`LongContent`,`Light`,`Dark`,`LargeText`,`Interactive`];export{g as Dark,l as Default,v as Interactive,_ as LargeText,h as Light,m as LongContent,p as MissingDetails,f as Olympiad,u as Opening,d as Registered,y as __namedExportsOrder,c as default};