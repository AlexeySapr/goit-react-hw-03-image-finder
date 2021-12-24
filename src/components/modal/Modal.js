import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
