import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';
import { EventName } from 'fabric/fabric-impl';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

export const LayersSubmenu = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <></>;
  const event: EventName = 'after:render';
  const { _objects } = useCanvasAsState(canvasInstanceRef.current, event, ['_objects']);
  // TODO borrar uuid en los objetosy desisntalar libreria con sus devdependencies
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const arr = Array.from(_objects);
    const [removed] = arr.splice(_objects.length - result.source.index - 1, 1);
    arr.splice(_objects.length - result.destination.index - 1, 0, removed);
    //as comparisor for useSyncExternalStore is Object.is, mutating the array reference returns the expected result
    canvasInstanceRef.current!._objects = arr;
    canvasInstanceRef?.current?.fire(event);
    canvasInstanceRef?.current?.renderAll();
  };
  const reversedObjects = _objects.toReversed();
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable key={'droppable'} droppableId="layersDroppable">
          {(provided) => (
            <ul id="layer-list-element" {...provided.droppableProps} ref={provided.innerRef}>
              {reversedObjects.map((object, i) => (
                <Draggable draggableId={String(object.name)} index={i} key={object.name}>
                  {(provided) => (
                    <div
                      style={{ padding: '2rem', display: 'inline-block' }}
                      id="layer-list-element"
                      //   id={String(i)}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      - Id: {object.toString()}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
