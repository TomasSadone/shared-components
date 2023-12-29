import { Icon, IconProps } from '../../../Icon';
import style from './style.module.sass';

type IconWithOnClick = IconProps & {
  onClick: NonNullable<IconProps['onClick']>;
};

type Props = {
  icons?: IconWithOnClick[];
};

export const ActionIcons = ({ icons }: Props) => (
  <div className={style.actionIcons}>
    {icons?.map((icon) => (
      <Icon key={icon.name} size={20} {...icon} />
    ))}
  </div>
);
