import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
   
  };

  handleFeedback = event => {
    const { id } = event.target;

    this.setState(state => ({
      [id]: state[id] + 1,
    }));
  };
  countTotalFeedback = () => {
    const totalNumber = this.state.good + this.state.neutral + this.state.bad;

    return totalNumber;
  };
  countPositivePercentage = () => {
    const good = this.state.good;
    const totalNumber = this.state.good + this.state.neutral + this.state.bad;
    const positivePercent = Math.round((good / totalNumber) * 100);

    return positivePercent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={'Feedback App'}>
          <FeedbackOptions
            click={this.handleFeedback}
            title={'Please leave Feedback'}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalNumber={this.countTotalFeedback() }
              positivePercent={this.countPositivePercentage()}
            />
          ) : (
            <Notification message={'There is no Feedback'} />
          )}
        </Section>
      </div>
    );
  }
}



export default App;
