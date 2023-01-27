import styles from './ThankYou.module.scss'
import Card from "src/components/Card";
import ThankYouImg from "src/images/illustration-thank-you.svg"

const ThankYou = ({number}) => (
    <Card className={styles.center}>
        <img src={ThankYouImg} className={styles.img} alt="Thank You"/>
            <div className={styles.box}>You selected {number} out of 5</div>

        <p className={styles.header}>Thank you!</p>

        <p className={styles.body}>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
    </Card>
)

export default ThankYou;