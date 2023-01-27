import styles from './Button.module.scss'

const Button = ({name, onButtonClickHandler}) => (
    <button className={styles.btn} onClick={onButtonClickHandler}>{name}</button>
);

export default Button;