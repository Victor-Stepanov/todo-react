import style from './main.module.scss';
import { IMainProps } from './main.props';

const Main = ({ children }: IMainProps) => {
  return <main className={style.conntainer}>{children}</main>;
};

export default Main;
