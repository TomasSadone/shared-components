import { AppButton } from '../button';
import useWindowDimentions from './use-window-dimensions';
import usePagination from './use-pagination';
import { PaginationNumbers } from './pagination-numbers';
import style from './style.module.sass';
import { IconButton } from '../icon-button';
import { IconProps } from '../icon';

type BaseProps = {
  totalPages: number;
  page: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageSelection: (pageNumber: number) => void;
  numbers?: 'square' | 'rounded';
  prevNextButtons?: 'outline' | 'text';
};

type PropsDefault = BaseProps & { type?: 'default'; align?: 'center' };
type PropsMinimalGroup = BaseProps & {
  type?: 'minimal' | 'group';
  align?: 'left' | 'center' | 'right';
};

type Props = PropsDefault | PropsMinimalGroup;

export const Pagination = ({
  totalPages,
  page,
  numbers = 'square',
  type = 'default',
  align = 'center',
  prevNextButtons = 'text',
  handleNextPage,
  handlePrevPage,
  handlePageSelection,
}: Props) => {
  const { width } = useWindowDimentions();

  const { pages, prevNextText, prevNextOutline, firstPages, lastPages } = usePagination(
    totalPages,
    prevNextButtons,
    width,
  );

  const iconProps: Omit<IconProps, 'name' | 'size'> = {
    viewBox: '0 0 24 24',
    stroke: `${prevNextText ? '#667085' : '#344054'}`,
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  return (
    <nav
      className={`${style.pagination} ${style[type]} ${style[numbers]} ${style[prevNextButtons]} ${style[align]}`}
    >
      {width > 850 ? (
        <AppButton
          onClick={handlePrevPage}
          color="green"
          title="Previous"
          icon="left-arrow"
          text={prevNextText}
          stroke={prevNextOutline}
          iconProps={iconProps}
        />
      ) : (
        <IconButton onClick={handlePrevPage} iconProps={iconProps} icon="left-arrow" />
      )}

      <PaginationNumbers
        handlePageSelection={handlePageSelection}
        type={type}
        width={width}
        firstPages={firstPages}
        lastPages={lastPages}
        pages={pages}
        page={page}
        totalPages={totalPages}
      />
      {width > 850 ? (
        <AppButton
          onClick={handleNextPage}
          color="green"
          title="Next"
          endIcon="right-arrow"
          text={prevNextText}
          stroke={prevNextOutline}
          endIconProps={iconProps}
        />
      ) : (
        <IconButton onClick={handleNextPage} iconProps={iconProps} icon="right-arrow" />
      )}
    </nav>
  );
};
