import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import pixabayApi from "../services/PixabayApi";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    galleryImages: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    prevQuery !== nextQuery && this.fetchPicturesFromApi();

    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
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
    this.setState({
      searchQuery: queryValue,
      page: 1,
      galleryImages: [],
    });
  };

  render() {
    const { error, galleryImages, loading } = this.state;

    return (
      <>
        {error && <p>Something wrong: {error.message} </p>}

        <Searchbar onSubmit={this.handleSubmitFromQuery} />

        <ImageGallery images={galleryImages} />

        {loading && <Loader />}

        {galleryImages.length > 0 && (
          <Button thisClicked={this.fetchPicturesFromApi} />
        )}
        {/* <Loader> и <Modal></Modal> */}
      </>
    );
  }
}

export default App;
