import styles from './Circle.module.scss';

const Circle = ({number, isActive, onHandleRating: onRatingClickedHandler}) => {
    const classes = isActive ? styles.active : styles.default;


    return <div className={classes} onClick={() => {onRatingClickedHandler(number)}}>{number}</div>;
};

export default Circle;
