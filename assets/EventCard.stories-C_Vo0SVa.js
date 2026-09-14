import{t as e,y as t}from"./iframe-B4LKz5fK.js";import"./createLucideIcon-Cqzfk4mC.js";import"./calendar-days-gda4oukr.js";import{t as n}from"./EventCard-B83ldGC7.js";import"./map-pin-DxjWGo-S.js";import"./InlineSpinner-CyIcXxmd.js";import"./InlineSpinner-CS4GXR4f.js";import"./Badge-C2wuhY-p.js";import"./Badge-BilbQ7OI.js";import"./Card-BgVtbWy2.js";import"./Card-BTpC5DGf.js";import{n as r}from"./Typography-qnf5X21q.js";import"./Typography-BvsIeinA.js";import"./Inline-j0UFlr8H.js";import"./Inline-C7M9bN4S.js";import{t as i}from"./Stack-BEfcK43M.js";import"./Stack-duc46O7L.js";import"./events.mappers-CLp961J6.js";var a=t(),o=e(),s={id:42,title:`День открытых дверей`,shortDescription:`Встреча с преподавателями и знакомство с образовательными программами.`,status:`upcoming`,startAt:`2026-09-19T10:00:00+03:00`,endAt:`2026-09-19T15:30:00+03:00`,place:`Ленинградский проспект, 49, главный корпус`},c={title:`Events/EventCard`,component:n,args:{event:s,isOpening:!1,onOpen:()=>{}}};const l={},u={args:{isOpening:!0}},d={args:{event:{...s,status:`current`,isRegistered:!0}}},f={args:{event:{...s,externalId:`olympiad-42`,parentId:12}}},p={args:{event:{id:43}}},m={args:{event:{...s,title:`Международная научно-практическая конференция о развитии финансовых технологий и распределённых систем`,shortDescription:`Встреча с профессором Александрой Константиновной Степановой-Воскресенской и представителями образовательных подразделений университета.`,endAt:`2026-09-21T18:45:00+03:00`,place:`Москва, Ленинградский проспект, дом 49, корпус 2, конференц-зал имени выдающихся исследователей финансовой науки`}}},h={globals:{theme:`light`}},g={globals:{theme:`dark`}},_={...m,globals:{textScale:`large`}},v={render:function(e){let[t,s]=(0,a.useState)(null);return(0,o.jsxs)(i,{gap:`4`,children:[(0,o.jsx)(n,{...e,onOpen:s}),(0,o.jsx)(r,{size:`sm`,role:`status`,children:t?`Открыто: ${t.title}`:`Выберите мероприятие`})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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