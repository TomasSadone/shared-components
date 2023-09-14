import Icon from 'components/Icon';
import styles from './IconButton.module.sass';
import { AppColors } from 'types/MainTypes';
import { icons } from 'constants/svgIcons';
import cn from 'classnames';
import Loader from 'components/Loader';

const IconButton: React.FC<{
  icon: keyof typeof icons;
  onClick?: () => void;
  color?: AppColors;
  isLoading?: boolean;
}> = ({ icon, onClick, color, isLoading }) => (
  <button
    disabled={isLoading}
    onClick={onClick}
    className={cn(styles.button, styles[color || 'default'])}
  >
    {isLoading ? (
      <Loader color={color} useColor className={styles.loader} />
    ) : (
      <Icon name={icon} size={20} />
    )}
  </button>
);

export default IconButton;
