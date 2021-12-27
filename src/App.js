import React from 'react';
import './App.css';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Modal from './components/modal/Modal';
import Searchbar from './components/searchbar/Searchbar';
// import initData from './data/Data.json';
import { searchService } from './services/searchAPI.js';

class App extends React.Component {
  state = {
    images: [],
    modalImage: null,
  };

  handleImages = imagesQuery => {
    if (imagesQuery) {
      console.log('imagesQuery: ', imagesQuery);
      searchService.resetPage();
      searchService.searchQuery = imagesQuery;
      searchService.fetchSearch().then(images => {
        this.setState({ images: images.hits });
      });
    } else {
      console.log('emty');
      this.setState({ images: [] });
    }
  };

  showModal = imageId => {
    const currentImage = this.state.images.filter(
      image => image.id === imageId,
    );
    this.setState({ modalImage: currentImage[0] });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  loadMore = () => {
    searchService.fetchSearch().then(images => {
      this.setState(prevState => {
        return { images: [...prevState.images, ...images.hits] };
      });
    });
  };

  render() {
    const { images, modalImage } = this.state;

    return (
      <>
        <Searchbar handleImages={this.handleImages} />
        <ImageGallery images={images} showModal={this.showModal} />
        {images.length > 0 && <Button loadMoreBtn={this.loadMore} />}
        {modalImage && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage.largeImageURL} alt={modalImage.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
