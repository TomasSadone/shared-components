import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.sass';
import { ReactDatePickerProps } from 'react-datepicker';

import es from 'date-fns/locale/es';
import it from 'date-fns/locale/it';
import en from 'date-fns/locale/en-US';
import { forwardRef } from 'react';

const AppDatepicker = forwardRef<DatePicker, ReactDatePickerProps>(
  ({ ...DatePickerProps }: ReactDatePickerProps, ref) => {
    //add more languages in the same way if needed
    const languages: { [key: string]: Locale } = {
      es,
      it,
      en,
    };
    const localLanguage = navigator.language ? navigator.language.split('-')[0] : 'en';

    registerLocale(localLanguage, languages[localLanguage]);

    return (
      <>
        <DatePicker
          locale={localLanguage}
          ref={ref}
          shouldCloseOnSelect={false}
          withPortal
          {...DatePickerProps}
        />
      </>
    );
  },
);

export default AppDatepicker;
