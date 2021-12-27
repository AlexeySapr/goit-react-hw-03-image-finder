import React from 'react';
import s from './Searchbar.module.css';

import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, value } = event.target.query;
    this.setState({ [name]: value });

    this.props.handleImages(value);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.formBtn}>
            <IconContext.Provider value={{ className: `${s.searchIcon}` }}>
              <FaSearch />
            </IconContext.Provider>
          </button>

          <input
            className={s.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
