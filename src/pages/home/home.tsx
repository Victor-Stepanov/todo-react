import style from './home.module.scss';

const HomePage = () => {
  return (
    <section className={style.container}>
      <div className={style.info}>
        <h1 className={style.info__title}>FakeTrello</h1>
        <p className={style.info__description}>
          Добро пожаловать, в FakeTrello, когда лень писать описание, можно
          просто вставить цитату
        </p>
        <blockquote>
          <p className={style.info__quote}>
            Для меня долгое время было загадкой, как что-то очень дорогое и
            технологичное может быть столь бесполезным. И вскоре я осознал, что
            компьютер — это глупая машина, обладающая способностями выполнять
            невероятно умные вещи, тогда как программисты — это умные люди, у
            которых талант делать невероятные глупости. Короче, они нашли друг
            друга.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default HomePage;
