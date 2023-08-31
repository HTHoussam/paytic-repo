import React, { useCallback } from 'react';

/**
 * reusable button component that toggles the display of the table
 * @param {*} param0
 * @returns
 */
const StyledButton = ({ setDisplayTable, displayTable }) => {
  const handleClick = useCallback(() => {
    setDisplayTable(!displayTable);
  }, [displayTable]);
  return (
    <button onClick={handleClick} className='primaryBTN'>
      Show table
    </button>
  );
};
export default StyledButton;
