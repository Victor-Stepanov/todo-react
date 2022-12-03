import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import AppRoutes from '../app-routes/app-routes';

const App = () => {
  const isMobile = window.innerWidth < 600;
  console.log(isMobile);

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <AppRoutes />
    </DndProvider>
  );
};

export default App;
