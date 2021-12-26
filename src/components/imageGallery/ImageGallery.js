import React, { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  handleItemClick = id => {
    // console.log('id item: ', id);
    this.props.showModal(id);
  };

  render() {
    const { images } = this.props;
    return (
      <ul className={s.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            id={image.id}
            onItemClick={this.handleItemClick}
          />
        ))}
      </ul>
    );
  }
}
