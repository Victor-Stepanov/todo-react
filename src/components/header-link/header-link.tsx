import { NavLink } from 'react-router-dom';
import style from './header-link.module.scss';
import { IHeaderLinkProps } from './header-link.props';

const HeaderLink = ({
  path,
  icon,
  children,
  active,
  ...props
}: IHeaderLinkProps) => {
  return (
    <NavLink
      className={`${style.nav__link} ${active ? style.nav__link_active : null}`}
      to={path}
      {...props}
    >
      {icon}
      {children}
    </NavLink>
  );
};

export default HeaderLink;
