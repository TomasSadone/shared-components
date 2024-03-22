// import { HorizontalTabs, HorizontalTabsLink } from '../../';

const tabs = [
  { to: '/links', text: 'My details' },
  { to: '/', text: 'Profile' },
  { to: '/', text: 'Password' },
  { to: '/', text: 'Team' },
  { to: '/', text: 'Plan' },
  { to: '/', text: 'Billing' },
  { to: '/', text: 'Notifications', notifications: 2 },
];

const Links = () => (
  <div style={{ marginTop: '2rem', display: 'grid', gap: '2rem', color: 'GrayText' }}>
    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Primary
      </label>
      {/* <HorizontalTabs fullWidth={false}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="primary">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}

      <div>
        <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
          Primary full width
        </label>
        {/* <HorizontalTabs fullWidth={true}>
          {tabs.map((tab) => (
            <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="primary">
              {tab.text}
            </HorizontalTabsLink>
          ))}
        </HorizontalTabs> */}
      </div>
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Gray
      </label>
      {/* <HorizontalTabs fullWidth={false}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="gray">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Gray full width
      </label>
      {/* <HorizontalTabs fullWidth={true}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="gray">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Underline
      </label>
      {/* <HorizontalTabs fullWidth={false}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="underline">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Underline full width
      </label>
      {/* <HorizontalTabs fullWidth={true}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="underline">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Underline Filled
      </label>
      {/* <HorizontalTabs fullWidth={false}>
        {tabs.map((tab) => (
          <HorizontalTabsLink
            to={tab.to}
            notifications={tab.notifications}
            design="underlineFilled"
          >
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        Underline Filled full width
      </label>
      {/* <HorizontalTabs fullWidth={true}>
        {tabs.map((tab) => (
          <HorizontalTabsLink
            to={tab.to}
            notifications={tab.notifications}
            design="underlineFilled"
          >
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        White
      </label>
      {/* <HorizontalTabs fullWidth={false}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="white">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>

    <div>
      <label style={{ marginBottom: '8px', display: 'inline-block' }} htmlFor="">
        White full width
      </label>
      {/* <HorizontalTabs fullWidth={true}>
        {tabs.map((tab) => (
          <HorizontalTabsLink to={tab.to} notifications={tab.notifications} design="white">
            {tab.text}
          </HorizontalTabsLink>
        ))}
      </HorizontalTabs> */}
    </div>
  </div>
);

export default Links;
