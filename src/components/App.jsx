import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import pixabayApi from "../services/PixabayApi";

class App extends Component {
  state = {
    galleryImages: [],
    searchQuery: "",
    page: 1,
    error: "",
    // loading: false,
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
        // console.log("pictures: ", pictures)
        this.setState({
          galleryImages: pictures,
          // .map((picture) => ({
          //   id: picture.id,
          //   webformatURL: picture.webformatURL,
          //   largeImageURL: picture.largeImageURL,
          // })),
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmitFromQuery = (queryValue) => {
    console.log("value", queryValue);
    this.setState({
      searchQuery: queryValue,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitFromQuery} />

        <ul className="ImageGallery">
          <li className="ImageGalleryItem">
            <img src="" alt="" className="ImageGalleryItem-image" />
          </li>
        </ul>
      </>
    );

    // <Searchbar>,
    // <ImageGallery>,
    // <ImageGalleryItem>,
    // <Loader>,
    // <Button> и <Modal></Modal>
  }
}

export default App;
