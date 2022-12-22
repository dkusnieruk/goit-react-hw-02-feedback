import { Component } from 'react';
import css from '../FeedbackOptions/feedbackOptions.module.css';
class FeedbackOptions extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={css.buttonMenu}>
        <h1>Please leave Feedback</h1>
        <div>
          <button className={css.button} id="good" onClick={this.props.click}>
            Good
          </button>
          <button
            className={css.button}
            id="neutral"
            onClick={this.props.click}
          >
            Neutral
          </button>
          <button className={css.button} id="bad" onClick={this.props.click}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
