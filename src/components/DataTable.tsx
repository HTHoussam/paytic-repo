import React, { useCallback, useContext, useMemo } from 'react';
import { toast } from 'react-toastify';
import { RightColumnContext } from '../App';
import { GlobalContext } from '../entities/types';
import { tableDataSchema } from '../utils/validationSchema';

interface DataTableProps {
  displayTable: boolean;
}
interface TableHeader {
  label: string;
  id: string;
}
const DataTable: React.FC<DataTableProps> = ({ displayTable }) => {
  const { tableData } = useContext<GlobalContext>(RightColumnContext);

  const tableHeaders: Array<TableHeader> = useMemo(
    () => [
      {
        label: '#',
        id: '#',
      },
      {
        label: 'isChecked',
        id: 'isChecked',
      },
      {
        label: 'inputValue',
        id: 'value 2',
      },
      {
        label: 'selectedOption',
        id: 'value 3',
      },
    ],
    [],
  );

  const handleSaveTable = useCallback(() => {
    tableDataSchema
      .validate(tableData)
      .then((valid) => {
        if (valid) {
          toast.success('Table saved successfully');
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  }, [tableData]);

  return (
    <div className='flex flex-col text-black max-w-2xl mx-auto mt-10 bg-second shadow-md rounded-lg overflow-hidden'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light'>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr>
                  {tableHeaders.map((h) => (
                    <th key={h.id} scope='col' className='px-6 py-4'>
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className='border-b dark:border-neutral-500'>
                  <td className='whitespace-nowrap px-6 py-4'>@</td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium'>
                    {displayTable && tableData.inputValue}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium'>
                    {displayTable && tableData.isChecked.toString()}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 font-medium'>
                    {displayTable && tableData.selectedValue}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className='primaryBTN' onClick={handleSaveTable}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
