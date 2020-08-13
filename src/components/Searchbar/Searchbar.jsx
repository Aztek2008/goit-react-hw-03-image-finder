import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  PropTypes = {
    query: PropTypes.string.isRequired,
  };

  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
