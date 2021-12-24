import React from 'react';
import './App.css';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Searchbar from './components/searchbar/Searchbar';
import initData from './data/Data.json';

class App extends React.Component {
  state = {
    images: initData.hits,
  };
  render() {
    // console.log(initData.hits);

    return (
      <>
        <Searchbar />
        <ImageGallery images={this.state.images} />
        <Button />
      </>
    );
  }
}

export default App;
