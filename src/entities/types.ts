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
  tableData: TableData;
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}
