import { Component } from 'react';

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
    return Math.round(good/this.countTotalFeedback()*100)
  }

  handleIncrement = stat => {
    this.setState(prevState => {
      return { [stat]: prevState[stat] + 1 };
    });
  };

  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleIncrement('good')}>Good</button>
        <button onClick={() => this.handleIncrement('neutral')}>Neutral</button>
        <button onClick={() => this.handleIncrement('bad')}>Bad</button>
        <h1>Statistic</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
      </div>
    );
  }
}
