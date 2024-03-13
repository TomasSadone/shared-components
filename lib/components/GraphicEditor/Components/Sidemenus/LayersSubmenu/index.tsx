import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';
import { EventName, Object } from 'fabric/fabric-impl';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useAtom } from 'jotai';
import { handleSetSelectedItemTypeAtom } from 'components/GraphicEditor/CanvasContext/atoms/atoms';
import style from './style.module.sass';
import { Icon } from '../../../../Icon';
import { LayerContent } from './LayerContent';
import { elementSectionTypes } from 'components/GraphicEditor/constants/elementSectionTypes';

export const LayersSubmenu = () => {
  const canvasInstanceRef = useCanvasContext();

  if (!canvasInstanceRef.current) return <></>;

  const event: EventName = 'after:render';
  const { _objects, backgroundColor } = useCanvasAsState(canvasInstanceRef.current, event, [
    '_objects',
    'backgroundColor',
  ]);
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);

  // TODO borrar uuid en los objetosy desisntalar libreria con sus devdependencies, hook useid
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const objectsCopy = Array.from(_objects);
    const [removed] = objectsCopy.splice(_objects.length - result.source.index - 1, 1);
    objectsCopy.splice(_objects.length - result.destination.index - 1, 0, removed);
    //since comparisor for useSyncExternalStore is "Object.is", mutating the array reference returns the expected result
    canvasInstanceRef.current!._objects = objectsCopy;
    canvasInstanceRef?.current?.fire(event);
    canvasInstanceRef?.current?.renderAll();
  };

  const handleClick = (object: Object) => {
    canvasInstanceRef.current?.setActiveObject(object);
    canvasInstanceRef.current?.renderAll();
    if (!object.type) return;
    if (object.type === 'i-text') {
      setSelectedItemType('text');
    } else if (elementSectionTypes.includes(object.type)) {
      setSelectedItemType('elements');
    }
  };

  return (
    <div className={style.layers}>
      <p>Trascina per cambiare la posizione</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key={'droppable'} droppableId="layersDroppable">
          {(provided) => (
            <ul
              className={style.layers}
              id="layer-list-element"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {_objects.toReversed().map((object, i) => (
                <Draggable draggableId={String(object.name)} index={i} key={object.name}>
                  {(provided) => (
                    <li
                      className={style.draggable}
                      style={{ padding: '2rem', display: 'inline-block' }}
                      id="layer-list-element"
                      onClick={() => handleClick(_objects[_objects.length - i - 1])}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className={style.draggableContent}>
                        <Icon
                          className={style.icon}
                          name="drag-indicator"
                          size={24}
                          viewBox="0 0 24 24"
                          fill="#667085"
                        />
                        <LayerContent object={object} />
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div title="Sfondo" className={style.draggable} id="canva-layer">
        <li
          className={[style.draggableContent, style.canvasLayer].join(' ')}
          style={{ backgroundColor: backgroundColor as string }}
        />
      </div>
    </div>
  );
};
