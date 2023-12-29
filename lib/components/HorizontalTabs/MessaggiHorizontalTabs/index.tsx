import { AppButton } from '../../Button';
import { HorizontalTabs } from '../';
import { HorizontalTabsLink } from '../HorizontalTabsLink';
import style from './style.module.sass';

type Props = {
  olderMessages?: boolean;
  tabs: { to: string; text: string }[];
};

//todo: dynamic button text

export const MessaggiHorizontalTabs = ({ olderMessages, tabs }: Props) => (
  <div className={style.container}>
    <HorizontalTabs fullWidth={false}>
      {tabs.map((tab) => (
        <HorizontalTabsLink design="underlineFilled" to={tab.to}>
          {tab.text}
        </HorizontalTabsLink>
      ))}
    </HorizontalTabs>
    <div className={`${olderMessages && style.marginRight}`}>
      <AppButton
        iconProps={{
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: '#00b27a',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
        icon="list"
        color="green"
        secondary
        title="Lista Clienti"
      />
      {olderMessages && (
        <AppButton icon="plus-circle" color="green" title="Crea un nuovo messaggio" />
      )}
    </div>
  </div>
);
