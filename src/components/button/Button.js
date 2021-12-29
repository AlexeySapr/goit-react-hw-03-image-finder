import React, { Component } from 'react';
import s from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={s.button}
        onClick={this.props.loadMoreBtn}
      >
        Load more
      </button>
    );
  }
}