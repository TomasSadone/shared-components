import { AppButton } from '../../../Button';

type Props = {
  page: number;
  number: string;
  handlePageSelection: (pageNumber: number) => void;
};

export const PaginationNumber = ({ page, number, handlePageSelection }: Props) => {
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
