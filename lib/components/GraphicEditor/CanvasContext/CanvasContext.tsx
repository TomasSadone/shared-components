import { createContext, forwardRef, useContext, useRef } from 'react';
import { fabric } from 'fabric';
import { GraphicEditor, Props } from '../';

const CanvasContext = createContext<React.MutableRefObject<fabric.Canvas | null> | null>(null);

export const useCanvasContext = () => {
  const canvasContext = useContext(CanvasContext);
  if (!canvasContext) {
    throw new Error('useCanvasContext has to be used within <CanvasContextProvider/>');
  }
  return canvasContext;
};

export const GraphicEditorWithContext = forwardRef((props: Props, ref) => {
  const canvasInstanceRef = useRef<fabric.Canvas | null>(null);
  return (
    <CanvasContext.Provider value={canvasInstanceRef}>
      <GraphicEditor ref={ref} {...props} />
    </CanvasContext.Provider>
  );
});
