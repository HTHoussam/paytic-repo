export interface CardData {
  id: string;
  text: string;
  header: string;
  title: string;
  content: string;
  input: JSX.Element;
}

export interface TableData {
  inputValue: string;
  isChecked: boolean;
  selectedValue: string;
}

export interface GlobalContext {
  editMode: boolean;
  isDisplayData: boolean;
  setIsDisplayData: React.Dispatch<React.SetStateAction<boolean>>;
  tableData: TableData;
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}
