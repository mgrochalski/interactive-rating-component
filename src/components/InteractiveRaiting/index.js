import {useState} from "react";
import QuestionForm from "../QuestionForm";
import ThankYou from "../ThankYou";

const InteractiveRating = () => {
    const [rating, setRating] = useState(0);


    return (
        <div>
            {rating === 0 ?
                <QuestionForm onFormSendHandler={(rating) => {
                    setRating(rating)
                }}/>
                :
                <ThankYou/>
            }
        </div>
    )
}

export default InteractiveRating;

