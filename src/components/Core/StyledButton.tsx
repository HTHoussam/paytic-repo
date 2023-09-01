import React, { FC, useCallback, useContext } from 'react';
import { RightColumnContext } from '../../App';

/**
 * reusable button component that toggles the display of the table
 * @returns {JSX.Element}
 */
const StyledButton: FC = () => {
  const { setIsDisplayData, isDisplayData } = useContext(RightColumnContext);

  const handleClick = useCallback(() => {
    setIsDisplayData(!isDisplayData);
  }, [isDisplayData, setIsDisplayData]);

  return (
    <button onClick={handleClick} className='primaryBTN'>
      refresh table data
    </button>
  );
};

export default StyledButton;
