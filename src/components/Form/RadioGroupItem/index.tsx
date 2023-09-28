import RadioButton, { RadioButtonProps } from '../RadioButton';
import style from './style.module.sass';

type Props = {
  description: string;
  moreInformation?: string;
  moreInformationOnClick?: (arg?: any) => void;
  //name inside extra options should be diffrent from the one passed to the main radio button
  extraOptions?: RadioButtonProps[];
} & RadioButtonProps;

const RadioGroupItem = ({
  description,
  moreInformation,
  moreInformationOnClick,
  extraOptions,
  ...radioButtonProps
}: Props) => {
  return (
    <div tabIndex={0}>
      <div className={`${style.groupItem}`}>
        <RadioButton {...radioButtonProps} />
        <p>{description}</p>
        {moreInformation && (
          <button className={style.moreInformation} onClick={moreInformationOnClick}>
            {moreInformation}
          </button>
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
};

export default RadioGroupItem;
