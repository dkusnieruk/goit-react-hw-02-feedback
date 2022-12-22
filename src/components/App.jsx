import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    title: 'Statistics',
  };

  handleFeedback = event => {
    const { id } = event.target;
    console.log(id);

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
              totalNumber={this.countTotalFeedback() || 0}
              positivePercent={this.countPositivePercentage() || 0}
            />
          ) : (
            <Notification message={'There is no Feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalNumber: PropTypes.number,
  positivePercent: PropTypes.number,
  message: PropTypes.string,
};

export default App;
