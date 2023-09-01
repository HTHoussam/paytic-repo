import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { RightColumnContext } from '../../App';

const StyledRadioButton: FC = () => {
  const [selectedOption, setSelectedOption] = useState('one');

  const simple = ['one', 'two', 'three', 'four', 'five'];

  const { setTableData, editMode, isDisplayData } = useContext(RightColumnContext);

  const handleChangeSelect = useCallback((e: any) => {
    setSelectedOption(e.target.value);
  }, []);

  useEffect(() => {
    setTableData((prevTableData) => ({
      ...prevTableData,
      selectedValue: selectedOption,
    }));
  }, [editMode, setTableData, isDisplayData]);

  return (
    <div className='flex items-center mx-auto w-fit'>
      <select
        onChange={handleChangeSelect}
        value={selectedOption}
        disabled={!editMode}
        className='border-2 border-gray-400 rounded-md p-2 m-2 text-black w-72'
      >
        {simple.map((data) => {
          return (
            <option key={data} value={data}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StyledRadioButton;
