import React from 'react';
import s from './Searchbar.module.css';

import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class Searchbar extends React.Component {
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
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
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
