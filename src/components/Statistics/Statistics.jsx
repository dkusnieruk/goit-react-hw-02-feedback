import { Component } from 'react';
import css from '../Statistics/statistics.module.css';
import propTypes from 'prop-types';
class Statistics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="stats" className={css.statisticsMenu}>
        <h1>Statistics</h1>
        <ul className={css.statisticsList}>
          <li className={css.statisticsSingle}>Good : {this.props.good}</li>
          <li className={css.statisticsSingle}>
            Neutral: {this.props.neutral}
          </li>
          <li className={css.statisticsSingle}>Bad: {this.props.bad}</li>
          <li className={css.statisticsSingle}>
            Total: {this.props.totalNumber}
          </li>
          <li className={css.statisticsSingle}>
            Positive percentage: {this.props.positivePercent} %
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes ={
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  positivePercent: propTypes.number,
  totalNumber: propTypes.number
}