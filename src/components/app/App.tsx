import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Button } from '../../ui';
import './app.scss';

const App = () => {
  //TODO:Добавить компоненты
  const isMobile = window.innerWidth < 600;
  return (
    <div className='container'>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <header>
          
        </header>
      </DndProvider>
    </div>
  );
};

export default App;
