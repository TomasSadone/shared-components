import cn from 'classnames';

import { icons } from 'constants/svgIcons';

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fill?: string;
  viewBox?: string;
  onClick?: () => void;
};
const Icon: React.FC<IconProps> = ({ name, size, className, fill, viewBox, onClick }) => {
  return (
    <svg
      className={cn(className)}
      width={size || 16}
      height={size || 16}
      viewBox={viewBox || '0 0 16 16'}
      fill={fill}
      stroke="10"
      onClick={onClick}
    >
      {Array.isArray(icons[name]) ? (
        (icons[name] as { path: string; fill?: string }[]).map(({ path, fill: pathFill }) => (
          <path stroke="10" key={path} d={path} fill={pathFill} />
        ))
      ) : (
        <path d={icons[name] as string} />
      )}
    </svg>
  );
};

export default Icon;
