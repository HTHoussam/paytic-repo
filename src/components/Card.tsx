import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

interface CardProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ id, children, className }: CardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      id={id}
      ref={drag}
      className={className}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
