import React, { createContext, useCallback, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';
import StyledButton from './components/Core/StyledButton';
import DataTable from './components/DataTable';

import StyledCard from './components/Core/StyledCard';
import StyledCheckbox from './components/Core/StyledCheckbox';
import StyledDropdown from './components/Core/StyledDropDown';
import StyledInput from './components/Core/StyledInput';

export const RightColumnContext = createContext('');

function App() {
  const [tableData, setTableData] = useState({});
  const [displayTable, setDisplayTable] = useState(false);
  const [leftColumn, setLeftColumn] = useState([
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

  const [rightColumn, setRightColumn] = useState([]);

  const handleCardDropFromLeft = useCallback(
    (cardId) => {
      const cardToMove = leftColumn.find((card) => card.id === cardId);
      if (cardToMove) {
        setLeftColumn((prev) => prev.filter((card) => card.id !== cardId));
        setRightColumn((prev) => [...prev, cardToMove]);
      }
    },
    [leftColumn],
  );
  const handleCardDropFromRight = useCallback(
    (cardId) => {
      const cardToMove = rightColumn.find((card) => card.id === cardId);
      console.log('cardToMove', cardToMove);
      if (cardToMove) {
        setRightColumn((prev) => prev.filter((card) => card.id !== cardId));
        setLeftColumn((prev) => [...prev, cardToMove]);
      }
    },
    [rightColumn],
  );

  console.log('RightColumnContext', rightColumn);
  return (
    <RightColumnContext.Provider value={{ tableData, setTableData }}>
      <div className='App'>
        <div className='bg-first backdrop-blur-sm h-screen mx-auto py-5 pt-32 px-2 text-white w-screen overflow-x-hidden'>
          <div className='flex flex-row gap-6'>
            <div className='w-1/2 bg-second shadow-sm min-h-max'>
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
                  <Card key={c.id} id={c.id}>
                    <StyledCard
                      header={c.header}
                      title={c.title}
                      content={c.content}
                      id={c.id}
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
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const cardId = e.dataTransfer.getData('text/plain');
                  handleCardDropFromRight(cardId);
                }}
              >
                <center>
                  <h3>Board 2</h3>
                </center>
                <br />
                {rightColumn.map((c) => (
                  <Card key={c.id} id={c.id}>
                    <StyledCard
                      header={c.header}
                      title={c.title}
                      content={c.content}
                      id={c.id}
                      input={c.input}
                    />
                  </Card>
                ))}
                <StyledButton setDisplayTable={setDisplayTable} displayTable={displayTable} />
              </Board>
            </div>
          </div>
          <DataTable displayTable={displayTable} />
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </RightColumnContext.Provider>
  );
}

export default App;
