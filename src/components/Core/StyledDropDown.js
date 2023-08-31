import { useCallback, useContext, useEffect, useState } from 'react';
import { RightColumnContext } from '../../App';
const StyledDropDown = () => {
  const [selectedOption, setSelectedOption] = useState();

  const simple = ['one', 'two', 'three', 'four', 'five'];

  const { setTableData } = useContext(RightColumnContext);

  const handleChangeSelect = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  useEffect(() => {
    setTableData((prevTableData) => ({
      ...prevTableData,
      selectedValue: selectedOption,
    }));
  }, [selectedOption, setTableData]);
  return (
    <div>
      <select
        onChange={handleChangeSelect}
        value={selectedOption}
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

export default StyledDropDown;
