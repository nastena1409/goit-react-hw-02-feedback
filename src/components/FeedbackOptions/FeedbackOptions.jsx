import PropTypes from "prop-types";
import { Wrapper, Button } from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrapper>
            {options.map(option => (
                <Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>    
            ))}
        </Wrapper>   
    )   
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired    
};

           