import { useCallback, useContext, useEffect, useState } from 'react';
import { RightColumnContext } from '../App';
/**
 * reusable input component that updates
 */
const StyledInput = () => {
  const [value, setValue] = useState('');
  const { tableData, setTableData } = useContext(RightColumnContext);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  useEffect(() => {
    setTableData((prevTableData) => ({
      ...prevTableData,
      inputValue: value,
    }));
  }, [value, setTableData]);
  return (
    <div>
      <input
        type='text'
        name='firstText'
        className='border-2 border-black rounded-md p-2 m-2 text-black w-72'
        placeholder='Enter your name'
        onChange={handleOnChange}
      />
    </div>
  );
};
export default StyledInput;
