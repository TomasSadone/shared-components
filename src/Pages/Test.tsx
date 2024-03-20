import { useRef, useState } from 'react';
import { GraphicEditorWithContext as GraphicEditor } from '../../lib/components/GraphicEditor/CanvasContext/CanvasContext';
// import { GraphicEditor } from '../../';
import image from '../../public/logo192.png';
import image2 from '../../public/logo512.png';

const Test = () => {
  const [json, setJson] = useState<any>();
  const onSave = (obj: any) => {
    setJson(obj);
  };
  const canvasRef = useRef<{
    loadFromJSON: Function;
    isCanvasInitialized: () => boolean;
  } | null>(null);

  const onLoad = () => {
    canvasRef?.current?.loadFromJSON(json);
  };

  const onMount = () => setMount(!mount);

  const [mount, setMount] = useState(true);

  return (
    <div>
      <button onClick={onLoad}>load</button>
      <button onClick={onMount}>mount</button>

      {mount && (
        <GraphicEditor
          onOwnUploadDelete={(image) => {
            console.log(image);
          }}
          myUploads={[
            {
              url: image,
              __v: 1,
              _id: 'das',
              createdAt: 'dsa',
              owner: '123',
              updatedAt: 'dsadas',
            },
            {
              url: image,
              __v: 1,
              _id: 'das',
              createdAt: 'dsa',
              owner: '123',
              updatedAt: 'dsadas',
            },
            {
              url: image2,
              __v: 1,
              _id: 'das',
              createdAt: 'dsa',
              owner: '123',
              updatedAt: 'dsadas',
            },
          ]}
          ref={canvasRef}
          logos={[image, image2]}
          onExit={() => console.log('exit')}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default Test;
