import cn from 'classnames';
import { icons } from '../../constants/svgIcons';
export type IconProps = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fill?: string;
  viewBox?: string;
  onClick?: () => void;
  stroke?: string;
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel';
  strokeWidth?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  className,
  fill,
  viewBox,
  onClick,
  stroke,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
}) => {
  return (
    <svg
      className={cn(className)}
      width={size || 16}
      height={size || 16}
      viewBox={viewBox || '0 0 16 16'}
      fill={fill}
      //   stroke="10"
      onClick={onClick}
    >
      {Array.isArray(icons[name]) ? (
        (icons[name] as { path: string; fill?: string }[]).map(
          ({ path, fill: pathFill = 'none' }) => (
            <path
              stroke={stroke || '10'}
              strokeLinecap={strokeLinecap}
              strokeLinejoin={strokeLinejoin}
              strokeWidth={strokeWidth}
              key={path}
              fill={fill || pathFill}
              d={path}
            />
          ),
        )
      ) : (
        <path
          stroke={stroke || '10'}
          strokeWidth={strokeWidth}
          strokeLinejoin={strokeLinejoin}
          strokeLinecap={strokeLinecap}
          d={icons[name] as string}
        />
      )}
    </svg>
  );
};
