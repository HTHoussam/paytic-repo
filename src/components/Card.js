import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';
function Card(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      id={props.id}
      ref={drag}
      className={props.className}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
