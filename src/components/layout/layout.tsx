import { Outlet } from 'react-router-dom';
import Header from '../app-header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
