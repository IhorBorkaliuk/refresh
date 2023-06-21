import { FeedbackWrapper, Button } from './Feedback.styled';


const Feedback = ({ handleIncrement }) => {
  return (
    <FeedbackWrapper>
      <Button onClick={() => handleIncrement('good')}>Good</Button>
      <Button onClick={() => handleIncrement('neutral')}>Neutral</Button>
      <Button onClick={() => handleIncrement('bad')}>Bad</Button>
    </FeedbackWrapper>
  );
};

export default Feedback