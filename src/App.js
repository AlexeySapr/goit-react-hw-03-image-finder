import React from 'react';
import './App.css';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Modal from './components/modal/Modal';
import Searchbar from './components/searchbar/Searchbar';
import initData from './data/Data.json';

class App extends React.Component {
  state = {
    images: initData.hits,
    modalImage: null,
    // modalImage: initData.hits[2],
  };

  showModal = imageId => {
    const currentImage = this.state.images.filter(
      image => image.id === imageId,
    );
    // console.log(...currentImage);
    // const im = currentImage
    this.setState({ modalImage: currentImage[0] });
  };

  render() {
    // console.log(this.state.images[0]);

    return (
      <>
        <Searchbar />
        <ImageGallery images={this.state.images} showModal={this.showModal} />
        <Button />
        {this.state.modalImage && <Modal image={this.state.modalImage} />}
      </>
    );
  }
}

export default App;
