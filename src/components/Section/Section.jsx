import { Component } from 'react';
import css from '../Section/section.module.css';
class Section extends Component {
  render() {
    return (
      <>
        <h1 className={css.title}>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Section;
