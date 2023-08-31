import React, { FC, ReactNode } from 'react';

interface StyledCardProps {
  header?: string;
  title?: string;
  content?: string;
  input?: ReactNode;
}

/**
 * Styled Card component that is reused in the Board component
 * @param {StyledCardProps} props
 * @returns {JSX.Element}
 */
const StyledCard: FC<StyledCardProps> = ({
  header = 'header',
  title = 'title',
  content = 'content',
  input = '',
}) => {
  return (
    <div className='block min-w-[23rem] max-w-xl rounded-lg bg-third shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
      <div className='border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50'>
        {header}
      </div>
      <div className='p-6'>
        <h5 className='mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50'>
          {title}
        </h5>
        <p className='text-base text-white dark:text-neutral-50'>{content}</p>
        {input}
      </div>
    </div>
  );
};

export default StyledCard;
