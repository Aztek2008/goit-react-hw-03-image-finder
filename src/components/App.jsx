import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import pixabayApi from "../services/PixabayApi";

class App extends Component {
  state = {
    galleryImages: [],
    searchQuery: "",
    page: 1,
    error: "",
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    /*DOING FETCH IF NEW DATA IN QUERY*/
    prevQuery !== nextQuery && this.fetchPicturesFromApi();
  }

  fetchPicturesFromApi = () => {
    const { searchQuery, page } = this.state;

    pixabayApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((pictures) =>
        this.setState({
          galleryImages: pictures.map((picture) => ({
            id: picture.id,
            tags: picture.tags,
            webformatURL: picture.webformatURL,
            largeImageURL: picture.largeImageURL,
          })),
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmitFromQuery = (queryValue) => {
    this.setState({
      searchQuery: queryValue,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitFromQuery} />

        <ul className="ImageGallery">
          {this.state.galleryImages.map(
            ({ id, tags, webformatURL, largeImageURL }) => (
              <li key={id} className="ImageGalleryItem">
                <img
                  src={webformatURL}
                  alt={tags}
                  className="ImageGalleryItem-image"
                />
              </li>
            )
          )}
        </ul>
      </>
    );
  }
}

export default App;
