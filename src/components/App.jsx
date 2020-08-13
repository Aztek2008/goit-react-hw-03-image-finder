import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
import pixabayApi from "../services/PixabayApi";
import PropTypes from "prop-types";

class App extends Component {
  PropTypes = {
    galleryImages: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    galleryImages: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    prevQuery !== nextQuery && this.fetchPicturesFromApi();
    prevPage !== nextPage && this.smoothScroll();
  }

  fetchPicturesFromApi = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    pixabayApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((pictures) =>
        this.setState((prevState) => ({
          galleryImages: [...prevState.galleryImages, ...pictures],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmitFromQuery = (queryValue) => {
    this.state.searchQuery !== queryValue &&
      this.setState({
        searchQuery: queryValue,
        page: 1,
        galleryImages: [],
      });
  };

  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  setLargeUrl = (link) => {
    this.setState({ largeImageURL: link });

    window.addEventListener("keydown", this.handleKeyDown);
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });

    window.removeEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown = (e) => {
    e.code === "Escape" && this.closeModal();
  };

  render() {
    const { error, galleryImages, loading, largeImageURL } = this.state;

    return (
      <>
        {error && <p>Something wrong: {error.message} </p>}

        <Searchbar onSubmit={this.handleSubmitFromQuery} />

        <ImageGallery images={galleryImages}>
          {galleryImages.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webUrl={webformatURL}
              onClick={() => this.setLargeUrl(largeImageURL)}
            />
          ))}
        </ImageGallery>

        {loading && <Loader />}

        {galleryImages.length > 0 && (
          <Button thisClicked={this.fetchPicturesFromApi} />
        )}
        {largeImageURL && (
          <Modal
            onClose={this.closeModal}
            largeImageURL={largeImageURL}
            alt=""
          />
        )}
      </>
    );
  }
}

export default App;
