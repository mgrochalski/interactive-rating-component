import styles from './Card.module.scss';

const Card = (props) => (
  <div className={`${styles.main} ${props.className}`}>{props.children}</div>
);

export default Card;