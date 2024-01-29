import useEyeDropper from '../../../hooks/useEyeDropper';
import { IconButton } from '../../IconButton';

type Props = {
  onChange: (color: string) => void;
  onEyeDropError: (e: any) => void;
};

export const EyeDropper = ({ onChange, onEyeDropError }: Props) => {
  const { open } = useEyeDropper();
  const handleOpen = async () => {
    try {
      const color = await open();
      onChange(color.sRGBHex);
    } catch (e) {
      onEyeDropError(e);
    }
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        icon="eyeDropper"
        iconProps={{ viewBox: '0 0 12 13', fill: '#111e25' }}
      />
    </>
  );
};
