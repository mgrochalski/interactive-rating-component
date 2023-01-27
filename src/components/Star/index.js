import style from './Star.module.scss';
import starImg from 'src/images/icon-star.svg';

const Star = () => (
    <div className={style.main}>
        <img src={starImg} alt='star' />
    </div>
);

export default Star;