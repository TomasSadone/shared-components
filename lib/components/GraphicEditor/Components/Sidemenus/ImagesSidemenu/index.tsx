import { ChangeEvent, useRef } from 'react';
import { AppButton } from '../../../../Button';
import { fabric } from 'fabric';
import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';

export const ImagesSidemenu = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <></>;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    // if (!e.target) return;
    // const file = e.target.files[0];
    // if (file.size > 5000000) {
    //   return new Error(
    //     'Errore: non è stato possibile salvare la tua board.Questo file non può essere caricato poiché supera i 5 MB.',
    //   );
    // }
    // const reader = new FileReader();
    // // Load the selected image file
    // reader.onload = function (event) {
    //   const imgObj = new Image();
    //   imgObj.src = event.target.result;
    //   // When the image is loaded, add it to the canvas
    //   imgObj.onload = function () {
    //     const fabricImage = new fabric.Image(imgObj);
    //     // Optionally, you can resize the image to fit within the canvas
    //     if (
    //       fabricImage.width > canvasInstanceRef.current.width ||
    //       fabricImage.height > canvasInstanceRef.current.height
    //     ) {
    //       fabricImage.scaleToWidth(canvasInstanceRef.current.width);
    //       fabricImage.scaleToHeight(canvasInstanceRef.current.height);
    //     }
    //     canvasInstanceRef.current.add(fabricImage);
    //     canvasInstanceRef.current.renderAll();
    //   };
    // };
    // reader.readAsDataURL(file);
  };
  return (
    <div className="mt-4">
      <AppButton title="Aggiungi" color="white" onClick={handleButtonClick} />
      <input
        type="file"
        onChange={handleUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};
