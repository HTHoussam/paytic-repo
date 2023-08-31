import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

function Board(props) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    options: {
      dropEffect: 'copy',
    },
    drop: (item) => {
      return props.onCardDrop(item.id, props.sourceColumn);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div id={props.id} className={props.className} ref={drop}>
      {props.children}
    </div>
  );
}

export default Board;
