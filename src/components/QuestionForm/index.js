import styles from './QuestionForm.module.scss';
import Card from "src/components/Card";
import Circle from "src/components/Circle";
import {useState} from "react";
import Button from "src/components/Button";
import Star from "src/components/Star";

const QuestionForm = ({onFormSendHandler}) => {

    const [rating, setRating] = useState(0);

    const handleSendButton = () => {
        onFormSendHandler(rating);
    }

    return (
        <Card>
            <Star />
            <p className={styles.header}>How did we do?</p>
            <p className={styles.body}>Please let us know how we did with your support request. All feedback is
                appreciated to help us improve our offering!</p>
            <div className={styles.rating}>
                <Circle number={1} isActive={rating === 1} onHandleRating={setRating}/>
                <Circle number={2} isActive={rating === 2} onHandleRating={setRating}/>
                <Circle number={3} isActive={rating === 3} onHandleRating={setRating}/>
                <Circle number={4} isActive={rating === 4} onHandleRating={setRating}/>
                <Circle number={5} isActive={rating === 5} onHandleRating={setRating}/>
            </div>

            <Button name='Submit' onButtonClickHandler={handleSendButton}/>
        </Card>
    )
};

export default QuestionForm;