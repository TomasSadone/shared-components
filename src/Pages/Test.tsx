import { GraphicEditorWithContext as GraphicEditor } from '../../lib/components/GraphicEditor/CanvasContext/CanvasContext';
// import { GraphicEditor } from '../../';

const Test = () => {
  return (
    <div>
      <GraphicEditor onExit={() => null} onSave={() => null}></GraphicEditor>
    </div>
  );
};

export default Test;
