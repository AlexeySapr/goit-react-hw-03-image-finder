import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props;
    return (
      <li className={s.galleryItem}>
        <img src={webformatURL} alt={tags} className={s.imageGalleryItem} />
      </li>
    );
  }
}
