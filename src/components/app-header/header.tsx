import { FC } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import { HomeIcon, LogoIcon } from '../../ui';
import HeaderLink from '../header-link/header-link';
import style from './header.module.scss';

const Header: FC = () => {
  const { pathname } = useLocation();
  const homeRoute = useMatch('/')?.pathname;
  const boardsMatch = useMatch('boards/')?.pathname;
  const isHome: boolean = homeRoute === pathname;
  const isBoards: boolean = boardsMatch === pathname;

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <menu className={style.nav__list}>
            <li className={style.nav__item}>
              <HeaderLink active={isHome} path='/' icon={<HomeIcon />} />
            </li>
            <li className={style.nav__item}>
              <HeaderLink
                active={isBoards}
                path='boards/'
                icon={<LogoIcon />}
                children='Доски'
              />
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
