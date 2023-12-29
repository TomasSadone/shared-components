import { ReactNode } from 'react';
import './styles.sass';
export type Test = 'string';

type Props = {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
};

export const Modal = ({ children, open, setOpen }: Props) => {
  const handleOutsideClick = () => {
    setOpen && setOpen(false);
  };

  return (
    <>
      <div onClick={handleOutsideClick} className={` ${open && 'open'} backdrop`}>
        <div onClick={(e) => e.stopPropagation()} className={`modal`}>
          {children}
        </div>
      </div>
    </>
  );
};
