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
  };

  showModal = imageId => {
    const currentImage = this.state.images.filter(
      image => image.id === imageId,
    );
    // console.log(...currentImage);
    // const im = currentImage
    this.setState({ modalImage: currentImage[0] });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  render() {
    // console.log(this.state.images[0]);
    const { images, modalImage } = this.state;

    return (
      <>
        <Searchbar />
        <ImageGallery images={images} showModal={this.showModal} />
        <Button closeModal={this.closeModal} />
        {this.state.modalImage && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage.largeImageURL} alt={modalImage.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
