import React, { Component } from "react";
import pixabayApi from "../services/PixabayApi";

class App extends Component {
  state = {
    id: null,
    webformatURL: "",
    largeImageURL: "",
  };

  responseFromAPI = (query) => {
    pixabayApi
      .fetchImagesWithQuery(query)
      .then((response) => response[0].webformatURL);
  };

  render() {
    const webImage = this.responseFromAPI("cats");
    console.log("webImage", webImage);

    return (
      <div>
        <img src={webImage} alt="" />
      </div>
    );

    // <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal></Modal>

    // fetchImagesWithQuery

    // В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

    // id - уникальный идентификатор
    // webformatURL - ссылка на маленькое изображение для списка карточек
    // largeImageURL - ссылка на большое изображение для модального окна
  }
}

export default App;
