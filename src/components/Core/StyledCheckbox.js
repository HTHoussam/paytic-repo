import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RightColumnContext } from '../../App';

const StyledRadioButton = () => {
  const [checked, setChecked] = useState(false);

  const { setTableData } = useContext(RightColumnContext);

  const handleChange = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  useEffect(() => {
    setTableData((prevTableData) => ({
      ...prevTableData,
      isChecked: checked,
    }));
  }, [checked, setTableData]);
  return (
    <div className='flex items-center mx-auto w-fit'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        id='myCheckbox'
        className='w-4 h-4 text-black bg-first border-second rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor='myCheckbox'
        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        Checked state
      </label>
    </div>
  );
};
export default StyledRadioButton;
