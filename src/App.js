import React from 'react';
import './App.css';
import ImageGallery from './components/imageGallery/ImageGallery';
import Searchbar from './components/searchbar/Searchbar';

class App extends React.Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}

export default App;
