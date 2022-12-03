import { Route, Routes } from 'react-router-dom';
import { BoardsPage, HomePage, NotFoundPage, TasksPage } from '../../pages';
import Layout from '../layout/layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='boards' element={<BoardsPage />} />
        <Route path='boards/:id' element={<TasksPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
