import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useCanvasContext } from '../../CanvasContext/useCanvasContext';
import style from './style.module.sass';
import { useOnOutsideClick } from '../../../../hooks/useOnOutsideClick';
import {
  selectedItemTypeAtom,
  threePointsMenuPositionAtom,
} from '../../CanvasContext/atoms/atoms';
import { useAtom } from 'jotai';
import Trash from '../../assets/trash.svg';
import ThreeDots from '../../assets/threedots.svg';
import { Transform } from 'fabric/fabric-impl';
import { renderIcon } from 'components/GraphicEditor/helpers/renderIcon';
import { FirstLevelThreePointsMenu } from '../ThreePointsMenu';

const trashImage = new Image();
trashImage.src = Trash;
trashImage.onload = function () {};

const threeDotsImage = new Image();
threeDotsImage.src = ThreeDots;
threeDotsImage.onload = function () {};

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 10,
  offsetX: -50,
  cursorStyle: 'pointer',
  mouseUpHandler: removeObject,
  render: renderIcon(trashImage),
  //   cornerSize: 24,
  sizeX: 24,
  sizeY: 24,
});
fabric.Object.prototype.controls.threePointsControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 10,
  offsetX: -10,
  cursorStyle: 'pointer',
  //   mouseUpHandler: openThreePointsMenu,
  render: renderIcon(threeDotsImage),
  //   cornerSize: 24,
  sizeX: 24,
  sizeY: 24,
});

function removeObject(_e: MouseEvent, transform: Transform) {
  const target = transform.target;
  if (!target.canvas) return false;
  const canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
  return false;
}

const Canvas = () => {
  const canvasDomRef = useRef<HTMLCanvasElement | null>(null);
  // this ref exists because fabric wraps our canvas in other elements,
  // and that creates unexpected behaviors with outsideclick if we pass it that ref:
  const libraryWrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasInstanceRef = useCanvasContext();
  const [selectedItemType, setSelectedItemType] = useAtom(selectedItemTypeAtom);
  const [positionThreePointsMenu, setPositionThreePointsMenu] = useAtom(
    threePointsMenuPositionAtom,
  );

  const onThreePointsClick = (e: MouseEvent) => {
    if (
      !canvasInstanceRef ||
      !canvasInstanceRef.current?.height ||
      !canvasInstanceRef.current?.width
    )
      return false;
    let pointer = canvasInstanceRef.current!.getPointer(e);
    let posX =
      canvasInstanceRef.current!.height > pointer.x + 160 ? pointer.x - 10 : pointer.x - 160;
    let posY =
      canvasInstanceRef.current!.width > pointer.y + 250 ? pointer.y + 10 : pointer.y - 250;

    if (positionThreePointsMenu !== null) {
      setPositionThreePointsMenu(null);
      return false;
    }
    setPositionThreePointsMenu({ x: posX, y: posY });
    return false;
  };

  const onOutsideClick = () => {
    if (selectedItemType === 'canvas') {
      setSelectedItemType('');
    }
  };

  useOnOutsideClick([libraryWrapperRef], onOutsideClick, [selectedItemType]);

  useEffect(() => {
    canvasInstanceRef.current = initCanvas();
  }, []);
  useEffect(() => {
    fabric.Object.prototype.controls.threePointsControl.mouseUpHandler = onThreePointsClick;
  }, [positionThreePointsMenu]);

  function initCanvas() {
    return new fabric.Canvas(canvasDomRef.current, {
      width: 600,
      height: 600,
      backgroundColor: 'white',
      preserveObjectStacking: true,
    });
  }
  console.log(positionThreePointsMenu);
  return (
    <div className={style.canvasContainer}>
      <div className={style.libraryWrapper} ref={libraryWrapperRef}>
        <canvas
          ref={canvasDomRef}
          className={`${style.canvas} ${selectedItemType === 'canvas' && style.active}`}
        />
        {positionThreePointsMenu && (
          <FirstLevelThreePointsMenu position={positionThreePointsMenu} z={20} />
        )}
      </div>
    </div>
  );
};

export { Canvas };
