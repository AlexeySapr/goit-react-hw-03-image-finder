import React from 'react';
import s from './Searchbar.module.css';

class Searchbar extends React.Component {
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.formBtn}>
            <span className={s.formBtnLabel}>Search</span>
          </button>

          <input
            className={s.formInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
