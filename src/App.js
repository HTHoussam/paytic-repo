import React, { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';
import DataTable from './components/DataTable';
import StyledButton from './components/StyledButton';
import StyledCard from './components/StyledCard';
import StyledDropDown from './components/StyledDropDown';
import StyledInput from './components/StyledInput';
import StyledRadioButton from './components/StyledRadioButton';

export const RightColumnContext = createContext('');

function App() {
  const [tableData, setTableData] = useState({});
  const [displayTable, setDisplayTable] = useState(false);

  return (
    <RightColumnContext.Provider value={{ tableData, setTableData }}>
      <div className='App'>
        <div className='bg-first backdrop-blur-sm h-screen mx-auto py-5 pt-32 px-2 text-white w-screen overflow-x-hidden'>
          <div className='flex flex-row gap-6'>
            <div className='w-1/2 bg-second shadow-sm min-h-max'>
              <Board id='board-1' className='board'>
                <center>
                  <h3>Board 1</h3>
                </center>
                <br />
                <Card id='card-1' draggable='true'>
                  <StyledCard
                    header='first header'
                    title=' first title'
                    content='first content '
                    id='card-1'
                    input={<StyledInput />}
                  />
                </Card>

                <Card id='card-2' draggable='true'>
                  <StyledCard
                    header='second header'
                    title=' second title'
                    content='second content '
                    id='card-2'
                    input={<StyledRadioButton />}
                  />
                </Card>
                <Card id='card-3' draggable='true'>
                  <StyledCard
                    header='third header'
                    title=' third title'
                    content='third content '
                    id='card-3'
                    input={<StyledDropDown />}
                  />
                </Card>
              </Board>
            </div>
            <div className='w-1/2 bg-second shadow-sm min-h-max'>
              <Board id='board-2' className='board'>
                <center>
                  <h3>Board 2</h3>
                </center>
                <br />
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
