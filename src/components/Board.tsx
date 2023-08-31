import React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

interface BoardProps {
  id: string;
  className: string;
  sourceColumn: string;
  onCardDrop: (cardId: string) => void;
  children: React.ReactNode;
}

function Board({ id, children, className, onCardDrop }: BoardProps) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    options: {
      dropEffect: 'copy',
    },
    drop: (item: { id: string }) => {
      return onCardDrop(item.id);
    },
    collect: (monitor: DropTargetMonitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div id={id} className={className} ref={drop}>
      {children}
    </div>
  );
}

export default Board;
