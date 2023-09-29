import UnderlineButton from 'components/UnderlineButton';
import RadioButton, { RadioButtonProps } from '../RadioButton';
import style from './style.module.sass';

type Props = {
  description: string;
  moreInformation?: string;
  moreInformationOnClick?: (value: string) => void;
  //name inside extra options should be diffrent from the one passed to the main radio button
  extraOptions?: RadioButtonProps[];
  selectedValue?: string;
} & RadioButtonProps;

//ver como agregar un tipo que obligue a moreinformation si pasan onclick y viceversa
//y otro lo mismo con las extraoptions y selectedvalue
//y ocmo funcionaria lo de limpiar las extraoptions

const RadioGroupItem = ({
  description,
  moreInformation,
  moreInformationOnClick,
  extraOptions,
  selectedValue,
  ...radioButtonProps
}: Props) => (
  <div tabIndex={0}>
    <div className={`${style.groupItem}`}>
      <RadioButton {...radioButtonProps} />
      <p>{description}</p>
      {moreInformation && moreInformationOnClick && (
        <UnderlineButton
          className={style.moreInformation}
          onClick={() => moreInformationOnClick(radioButtonProps.value)}
        >
          {moreInformation}
        </UnderlineButton>
      )}
    </div>
    {extraOptions && (
      <div className={style.extraOptions}>
        {extraOptions.map((option) => (
          <RadioButton key={option.value} {...option} />
        ))}
      </div>
    )}
  </div>
);

export default RadioGroupItem;
