import React, { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={s.imageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
            />
          );
        })}
      </ul>
    );
  }
}
