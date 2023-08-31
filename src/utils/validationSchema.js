import { boolean, object, string } from 'yup';

export const tableDataSchema = object({
  inputValue: string().required('Please enter a value'),
  isChecked: boolean().required('Please check the box'),
  selectedValue: string().required('Please select an option'),
});
