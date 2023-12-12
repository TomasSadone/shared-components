import AppButton, { IAppButtonProps } from 'components/Button';
import Modal from 'components/Modal';
import styles from './style.module.sass';
import { ReactNode } from 'react';

type Props = {
  icon: string;
  title: string;
  date?: string;
  paragraph?: string;
  secondParagraph?: string;
  children?: ReactNode;
  buttons: IAppButtonProps[];
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  center?: boolean;
};

const MessaggiModal = ({
  icon,
  title,
  date,
  paragraph,
  secondParagraph,
  children,
  buttons,
  open,
  setOpen,
  center,
}: Props) => (
  <Modal open={open} setOpen={setOpen}>
    <div className={`${styles.messaggiModal} ${center && styles.center}`}>
      <img className={styles.img} src={icon} alt="" />
      <div className={`${styles.heading} ${!paragraph && styles.headingMarginBottomLarge}`}>
        <h1>{title}</h1>
        {date ? <p>{date}</p> : null}
      </div>
      {paragraph ? (
        <div className={`${styles.paragraph} ${children && styles.children}`}>
          <p>{paragraph}</p>
          {secondParagraph ? <p>{secondParagraph}</p> : null}
        </div>
      ) : null}
      {children}
      <div className={styles.buttons}>
        {buttons.map((button) => (
          <AppButton key={button.title} {...button} />
        ))}
      </div>
    </div>
  </Modal>
);

export default MessaggiModal;
