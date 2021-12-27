import React from 'react';
import './App.css';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    loading: false,
  };

  handleImages = imagesQuery => {
    if (imagesQuery) {
      this.setState({ loading: true });
      searchService.resetPage();
      searchService.searchQuery = imagesQuery;
      searchService
        .fetchSearch()
        .then(images => {
          if (images.hits.length === 0) {
            toast.error('No images with this query!');
          }
          this.setState({ images: images.hits });
        })
        .catch(error => console.log(error.code))
        .finally(() => {
          this.setState({ loading: false });
        });
    } else {
      toast.warn('Enter some query!');
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
    this.setState({ loading: true });
    searchService
      .fetchSearch()
      .then(images => {
        this.setState(prevState => {
          return { images: [...prevState.images, ...images.hits] };
        });
      })
      .catch(error => console.log(error.code))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { images, modalImage, loading } = this.state;

    return (
      <>
        <Searchbar handleImages={this.handleImages} />
        <ImageGallery images={images} showModal={this.showModal} />
        {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            style={{ textAlign: 'center' }}
          />
        )}
        {images.length > 0 && <Button loadMoreBtn={this.loadMore} />}
        {modalImage && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage.largeImageURL} alt={modalImage.tags} />
          </Modal>
        )}
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }
}

export default App;
