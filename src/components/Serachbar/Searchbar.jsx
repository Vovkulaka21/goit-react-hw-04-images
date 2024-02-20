import css from './Searchbar.module.css';

import { Component } from 'react';

class Searchbar extends Component {
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
}

export default Searchbar;
