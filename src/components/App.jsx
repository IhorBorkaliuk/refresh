import { Component } from 'react';
import Statistic from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good+neutral+bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = Math.round((good / total) * 100);
    const finalResult = total === 0? 0 : result
    return finalResult;
  }

  handleIncrement = stat => {
    this.setState(prevState => {
      return { [stat]: prevState[stat] + 1 };
    });
  };

  render() {
    return (
      <div>
        <Section title={'Please, leave your feedback'}>
          <Feedback handleIncrement={this.handleIncrement} />
        </Section>

        <Section title={'Statictic'}>
          <Statistic
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
            stat={this.state}
          />
        </Section>
      </div>
    );
  }
}
