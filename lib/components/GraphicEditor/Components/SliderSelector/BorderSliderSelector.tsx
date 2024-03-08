import { SliderSelector } from '.';
import { ColorSelector } from '../ColorSelector';

export const BorderSliderSelector = ({ activeObject }: { activeObject: fabric.Object }) => (
  <SliderSelector
    sliderProps={{
      title: 'Spessore bordo',
      step: 1,
      maxValue: 200,
    }}
    valueUnit={' px'}
    multiplier={1}
    childrenAbove={
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '45px',
        }}
      >
        <span>Colore bordo</span>
        <ColorSelector
          valueToWatch="stroke"
          section="border-color"
          object={activeObject}
          border
        />
      </div>
    }
    key={'border'}
    valueToWatch="strokeWidth"
    icon="border"
    activeObject={activeObject}
    title="border width"
  />
);
