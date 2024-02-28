import css from './Searchbar.module.css';

import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchbar_form}>
        <button type="submit" className={css.searchbar_form_button}>
          <span className={css.searchbar_form_button_label}>Search</span>
        </button>

        <input
          value={search}
          onChange={handleChange}
          className={css.searchbar_form_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
