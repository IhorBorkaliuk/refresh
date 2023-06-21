import { WrapStat, StatItem } from './Statistic.styled';

const Statistic = ({
  stat,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  console.log(stat);
  return (
    <WrapStat>
          {Object.keys(stat).map((oneStat) => 
              <StatItem key={oneStat}>{oneStat}:{stat[oneStat]}</StatItem>
      )}
      <p>Total: {countTotalFeedback()} </p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </WrapStat>
  );
};

export default Statistic;
