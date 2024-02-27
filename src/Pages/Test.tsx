import { GraphicEditorWithContext as GraphicEditor } from '../../lib/components/GraphicEditor/CanvasContext/CanvasContext';

const Test = () => {
  return (
    <div>
      <GraphicEditor onExit={() => null} onSave={() => null}></GraphicEditor>
    </div>
  );
};

export default Test;
