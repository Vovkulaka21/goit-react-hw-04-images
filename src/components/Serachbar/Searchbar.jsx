import css from './Searchbar.module.css';

import { useState } from 'react';


const Searchbar = ({onSubmit}) => {

  const [search, setSearch] = useState('');
  
  const handleChange = ({ target }) => {
    const {value} = target;
    setSearch({
      search: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...search});
    setSearch({
      search: '',
    });
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
}

/* class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const {value} = target;
    this.setState({
      search: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state});
    this.setState({
      search: '',
    });
  };

  render() {

    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchbar_form}>
          <button type="submit" className={css.searchbar_form_button}>
            <span className={css.searchbar_form_button_label}>Search</span>
          </button>

          <input
            value={this.state.search}
            onChange={this.handleChange}
            className={css.searchbar_form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
} */

export default Searchbar;
