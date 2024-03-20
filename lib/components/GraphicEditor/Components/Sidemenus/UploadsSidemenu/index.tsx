import {
  handleSetSelectedItemTypeAtom,
  templateUploadsAtom,
} from 'components/GraphicEditor/CanvasContext/atoms/atoms';
import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { attachImage, createImage } from 'components/GraphicEditor/helpers/imageHandlers';
import style from '../ImagesSidemenu/style.module.sass';
import { useAtom } from 'jotai';
import { Image } from './Image';

export type OwnUpload = {
  _id: string;
  owner: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Props = {
  onOwnUploadDelete?: (image: OwnUpload) => void;
  myUploads?: OwnUpload[];
};

export const UploadsSidemenu = ({ onOwnUploadDelete, myUploads }: Props) => {
  const canvasInstanceRef = useCanvasContext();

  const [templateUploads, setTemplateUploads] = useAtom(templateUploadsAtom);
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);

  const handleCreateImage = async (src: string) => {
    if (!canvasInstanceRef.current) return;
    const image = await createImage(src, {
      height: canvasInstanceRef.current.getHeight(),
      width: canvasInstanceRef.current.getWidth(),
    });
    attachImage(image, canvasInstanceRef.current);
    setSelectedItemType('images');
  };

  const handleTemplateUploadDelete = (i: number) => {
    if (templateUploads) {
      const newTemplateUploads = [...templateUploads];
      newTemplateUploads.splice(i, 1);
      setTemplateUploads(newTemplateUploads);
    }
  };

  return (
    <div className={style.container}>
      {templateUploads && (
        <div className={style.group}>
          <p>Utilizzati in questo template</p>

          {templateUploads.map((image, i) => (
            <Image
              key={image}
              index={i}
              onClick={handleCreateImage}
              onDelete={handleTemplateUploadDelete}
              src={image}
            />
          ))}
        </div>
      )}
      {myUploads && (
        <div className={style.group}>
          <p>Caricamenti precedenti</p>
          {myUploads.map((image, i) => (
            <Image
              key={image._id}
              index={i}
              onClick={handleCreateImage}
              onDelete={() => {
                onOwnUploadDelete && onOwnUploadDelete(image);
              }}
              src={image.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};
