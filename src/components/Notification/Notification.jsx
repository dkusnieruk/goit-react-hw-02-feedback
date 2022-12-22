import { Component } from 'react';
import css from '../Notification/notification.module.css';
import propTypes from 'prop-types'
class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.notification} id="notification">
        <div>{this.props.message}</div>
      </div>
    );
  }
}

export default Notification;

Notification.propTypes ={
  message : propTypes.string
}