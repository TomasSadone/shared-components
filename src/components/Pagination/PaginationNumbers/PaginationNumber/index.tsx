import { AppButton } from '../../../../../';

type Props = {
  page: number;
  number: string;
  handlePageSelection: (pageNumber: number) => void;
};

const PaginationNumber = ({ page, number, handlePageSelection }: Props) => {
  const selected = page.toString() === number;

  return (
    <AppButton
      onClick={() => handlePageSelection(Number(number))}
      data-active={selected}
      title={number}
      color="green"
      text
      secondary={selected}
    />
  );
};

export default PaginationNumber;
