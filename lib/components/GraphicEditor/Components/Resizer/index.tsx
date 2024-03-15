import { SliderInput } from 'components/Form/SliderInput';
import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { Canvas } from 'fabric/fabric-impl';
import { useEffect, useState, useSyncExternalStore } from 'react';

let zoom: number = 1;

type Dimensions = {
  zoom: number;
  width: number;
  heigth: number;
};

export const Resizer = () => {
  const canvasInstanceRef = useCanvasContext();
  const [value, setValue] = useState(1);

  const zoomOut = (value: number, canvas: fabric.Canvas): Dimensions => {
    return {
      heigth: canvas.getHeight() / value,
      width: canvas.getWidth() / value,
      zoom: canvas.getZoom() / value,
    };
  };
  const zoomIn = (value: number, canvas: fabric.Canvas): Dimensions => {
    return {
      heigth: canvas.getHeight() * value,
      width: canvas.getWidth() * value,
      zoom: canvas.getZoom() * value,
    };
  };

  const handleSliderChange = (value: number) => {
    if (!canvasInstanceRef.current) return;
    const { current: canvas } = canvasInstanceRef;
    let dimensions: Dimensions;
    if (value > zoom) {
      console.log('zoomin');
      dimensions = zoomIn(value, canvas);
    } else {
      console.log('zoomout');
      dimensions = zoomOut(value, canvas);
    }
    console.log(dimensions);
    // setDimentions(dimensions, canvas);
    // setValue(value);
    zoom = value;
  };
  const setDimentions = (dimensions: Dimensions, canvas: fabric.Canvas): void => {
    canvas.setZoom(dimensions.zoom);
    canvas.setHeight(dimensions.heigth);
    canvas.setWidth(dimensions.width);
  };
  //   if (!canvasInstanceRef.current) return <></>;
  //   const zoom = canvasInstanceRef.current.getZoom();
  //   const [value, setValue] = useState<null | number>(null);

  //   useEffect(() => {
  //     if (canvasInstanceRef.current) {
  //       setValue(canvasInstanceRef.current.getZoom());
  //     }
  //   }, []);

  return (
    <div style={{ height: '30px', backgroundColor: 'whitesmoke' }}>
      <SliderInput
        onChange={handleSliderChange}
        maxValue={5}
        minValue={0.1}
        step={0.01}
        title="size"
        value={value}
      />
      <span>{value}</span>
      <button
        onClick={() => {
          const a = zoomIn(1.2, canvasInstanceRef.current);
          setDimentions(a, canvasInstanceRef.current);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const a = zoomOut(1.2, canvasInstanceRef.current);
          setDimentions(a, canvasInstanceRef.current);
        }}
      >
        -
      </button>
    </div>
  );
};
