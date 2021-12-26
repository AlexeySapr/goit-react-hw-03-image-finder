import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  handleClick = () => {
    const { id, onItemClick } = this.props;
    onItemClick(id);
  };

  render() {
    const { webformatURL, tags } = this.props;
    // console.log('largeImageURL ', this.props);
    return (
      <li className={s.galleryItem} onClick={this.handleClick}>
        <img src={webformatURL} alt={tags} className={s.imageGalleryItem} />
      </li>
    );
  }
}
