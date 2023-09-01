import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';
import StyledButton from './components/Core/StyledButton';
import DataTable from './components/DataTable';

import HelperToolTip from './components/Core/HelperToolTip';
import StyledCard from './components/Core/StyledCard';
import StyledCheckbox from './components/Core/StyledCheckbox';
import StyledDropdown from './components/Core/StyledDropDown';
import StyledInput from './components/Core/StyledInput';
import { CardData, GlobalContext, TableData } from './entities/types';

export const RightColumnContext = createContext<GlobalContext>({
  isDisplayData: false,
  editMode: false,
  setIsDisplayData: () => {},
  setTableData: () => {},
  tableData: {
    inputValue: '',
    isChecked: false,
    selectedValue: '',
  },
});

function App() {
  const [tableData, setTableData] = useState<TableData>({
    inputValue: '',
    isChecked: false,
    selectedValue: '',
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isDisplayData, setIsDisplayData] = useState<boolean>(false);

  const [leftColumn, setLeftColumn] = useState<CardData[]>([
    {
      id: 'card-1',
      text: 'Write a cool JS library',
      header: 'first header',
      title: 'first title',
      content: 'first content',
      input: <StyledInput />,
    },
    {
      id: 'card-2',
      text: 'Make it generic enough',
      header: 'second header',
      title: 'second title',
      content: 'second content',
      input: <StyledCheckbox />,
    },
    {
      id: 'card-3',
      text: 'Write README',
      header: 'third header',
      title: 'third title',
      content: 'third content',
      input: <StyledDropdown />,
    },
  ]);

  const [rightColumn, setRightColumn] = useState<CardData[]>([]);

  const handleCardDropFromLeft = useCallback(
    (cardId: string) => {
      const cardToMove = leftColumn.find((card) => card.id === cardId);
      if (cardToMove) {
        setLeftColumn((prev) => prev.filter((card) => card.id !== cardId));
        setRightColumn((prev) => [...prev, cardToMove]);
      }
    },
    [leftColumn],
  );

  const handleCardDropFromRight = useCallback(
    (cardId: string) => {
      const cardToMove = leftColumn.find((card) => card.id === cardId);
      if (cardToMove) {
        setRightColumn((prev) => prev.filter((card) => card.id !== cardId));
        setLeftColumn((prev) => [...prev, cardToMove]);
      }
    },
    [rightColumn],
  );
  useEffect(() => {
    setEditMode(rightColumn.length === 3);
  }, [rightColumn.length]);
  return (
    <RightColumnContext.Provider
      value={{ tableData, setTableData, isDisplayData, setIsDisplayData, editMode }}
    >
      <div className='App'>
        <div className='bg-first backdrop-blur-sm h-screen mx-auto py-5 pt-32 px-2 text-white w-screen overflow-x-hidden'>
          <div className='flex flex-row gap-6'>
            <div className='w-1/2 bg-second shadow-sm min-h-max'>
              <HelperToolTip />
              <Board
                id='board-1'
                sourceColumn={'right'}
                onCardDrop={handleCardDropFromRight}
                className='board'
              >
                <center>
                  <h3>Board 1</h3>
                </center>
                <br />
                {leftColumn.map((c) => (
                  <Card key={c.id} id={c.id} className={''}>
                    <StyledCard
                      header={c.header}
                      title={c.title}
                      content={c.content}
                      input={c.input}
                    />
                  </Card>
                ))}
              </Board>
            </div>
            <div className='w-1/2 bg-second shadow-sm min-h-max'>
              <Board
                id='board-2'
                sourceColumn={'left'}
                className='board'
                onCardDrop={handleCardDropFromLeft}
              >
                <center>
                  <h3>Board 2</h3>
                </center>
                <br />
                {rightColumn.map((c) => (
                  <Card key={c.id} id={c.id} className={''}>
                    <StyledCard
                      header={c.header}
                      title={c.title}
                      content={c.content}
                      input={c.input}
                    />
                  </Card>
                ))}
                <StyledButton />
              </Board>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </RightColumnContext.Provider>
  );
}

export default App;
