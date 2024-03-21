import { forwardRef, useRef, useState } from 'react';
import { AppDatepicker } from '..';
import { AppButton } from '../../button';
import ReactDatePicker from 'react-datepicker';

type Props = {
  onConfirm: (date: Date) => void;
  confirmedDate: Date;
  cancelText: string;
  confirmText: string;
  openText: string;
};

const CustomButton = forwardRef<HTMLButtonElement, { text: string; onClick: () => void }>(
  ({ text, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="button green secondary">
      {text}
    </button>
  ),
);

export const MessaggiDatePicker = ({
  onConfirm,
  confirmedDate,
  cancelText,
  confirmText,
  openText,
}: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onChange = (date: Date) => setSelectedDate(date);
  const onCancel = () => {
    onChange(confirmedDate);
    closeModal();
  };
  const onConfirmHandler = () => {
    closeModal();
    onConfirm(selectedDate);
  };
  const closeModal = () => datePickerRef.current?.setOpen(false);
  const openModal = () => datePickerRef.current?.setOpen(true);

  const datePickerRef = useRef<ReactDatePicker>(null);

  return (
    <AppDatepicker
      onCalendarClose={onCancel}
      ref={datePickerRef}
      customInput={<CustomButton onClick={openModal} text={openText} />}
      onChange={onChange}
      selected={selectedDate}
    >
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'end' }}>
        <AppButton onClick={onCancel} color="green" title={cancelText} stroke />
        <AppButton onClick={onConfirmHandler} color="green" title={confirmText} />
      </div>
    </AppDatepicker>
  );
};
