import { Component } from 'react';
import css from '../Notification/notification.module.css';
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
