import AppButton from 'components/Button';
import usePaginationNumbers from './usePaginationNumbers';
import PaginationNumber from './PaginationNumber';

type Props = {
  width: number;
  type: 'default' | 'minimal' | 'group' | undefined;
  firstPages: string[];
  lastPages: string[];
  pages: string[];
  page: number;
  totalPages: number;
  handlePageSelection: (pageNumber: number) => void;
};

const PaginationNumbers = ({
  firstPages,
  lastPages,
  pages,
  page,
  totalPages,
  type,
  width,
  handlePageSelection,
}: Props) => {
  const { description, showMiddleNumber } = usePaginationNumbers(
    width,
    type,
    page,
    firstPages,
    lastPages,
  );

  if (description)
    return (
      <div>
        <p>{`Page ${page} of ${totalPages}`}</p>
      </div>
    );

  return (
    <div>
      {firstPages.length > 0 ? (
        <div>
          {firstPages.map((number) => (
            <PaginationNumber
              key={number}
              handlePageSelection={handlePageSelection}
              number={number}
              page={page}
            />
          ))}
          {showMiddleNumber ? (
            <AppButton color="green" text secondary title={page.toString()} />
          ) : (
            <AppButton title="..." color="green" text />
          )}
          {lastPages.map((number) => (
            <PaginationNumber
              key={number}
              handlePageSelection={handlePageSelection}
              number={number}
              page={page}
            />
          ))}
        </div>
      ) : (
        pages.map((number) => (
          <PaginationNumber
            key={number}
            handlePageSelection={handlePageSelection}
            number={number}
            page={page}
          />
        ))
      )}
    </div>
  );
};

export default PaginationNumbers;
