import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("QUERY IN SEARCHBAR", this.state.query);

    this.props.onSubmit(this.state.query);

    this.setState({
      query: "",
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            onSubmit={this.handleSubmit}
          >
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
