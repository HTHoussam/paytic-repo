import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { RightColumnContext } from '../../App';

const StyledInput: FC = () => {
  const [value, setValue] = useState<string>('');
  const { setTableData, editMode, isDisplayData } = useContext(RightColumnContext);

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    setTableData((prevTableData: any) => ({
      ...prevTableData,
      inputValue: value,
    }));
  }, [editMode, setTableData, isDisplayData]);

  return (
    <div>
      <input
        type='text'
        disabled={!editMode}
        name='firstText'
        className='border-2 border-black rounded-md p-2 m-2 text-black w-72'
        placeholder='Enter your name'
        onChange={handleOnChange}
      />
    </div>
  );
};

export default StyledInput;
