import { Link } from 'react-router-dom';
import style from './not-found.module.scss';

const NotFoundPage = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h3 className={style.content__title}>Oops....</h3>
        <p className={style.content__subtitle}>Page not found </p>
        <p className={style.content__description}>
          This Page doesn`t exist or was removed! We suggest you back to home.
        </p>
        <Link className={style.link} to='/'>
          <span className={style.link__text}>Back to home</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
