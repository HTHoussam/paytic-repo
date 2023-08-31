import React, { FC, useCallback } from 'react';

interface StyledButtonProps {
  setDisplayTable: React.Dispatch<React.SetStateAction<boolean>>;
  displayTable: boolean;
}

/**
 * reusable button component that toggles the display of the table
 * @param {StyledButtonProps} props
 * @returns {JSX.Element}
 */
const StyledButton: FC<StyledButtonProps> = ({ setDisplayTable, displayTable }) => {
  const handleClick = useCallback(() => {
    setDisplayTable(!displayTable);
  }, [setDisplayTable, displayTable]);

  return (
    <button onClick={handleClick} className='primaryBTN'>
      Show table data
    </button>
  );
};

export default StyledButton;
