import React, { FC } from 'react';

const HelperToolTip: FC = () => {
  return (
    <p
      data-te-toggle='tooltip'
      title='move all card to the left to activate edit mode, refresh table data to see the changes'
      className='text-third font-medium pointer-events-auto cursor '
    >
      Hover here please
    </p>
  );
};
export default HelperToolTip;
