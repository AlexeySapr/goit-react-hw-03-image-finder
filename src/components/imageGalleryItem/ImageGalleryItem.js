import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.galleryItem}>
        <img src="" alt="" className={s.imageGalleryItem} />
      </li>
    );
  }
}
