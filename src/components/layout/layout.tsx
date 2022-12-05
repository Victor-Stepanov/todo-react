import { Outlet } from 'react-router-dom';
import Header from '../app-header/header';
import Main from '../main/main';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
