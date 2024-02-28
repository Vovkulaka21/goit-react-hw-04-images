import css from './App.module.css';

import { Component, useState, useEffect } from 'react';
import { searchImages } from 'api/gallery';

import Searchbar from './Serachbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';


const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState('')


  return (
    <>
      <Searchbar onSubmit={this.handleSearch} />
      <div className={css.app_box}>
        {this.state.error && <p>{this.state.error}</p>}
        {Boolean(this.state.images.length) && (
          <ImageGallery>
            <ImageGalleryItem showModal={this.showModal} images={this.state.images} />
          </ImageGallery>
        )}
        {this.state.loading && <Loader />}
        {Boolean(this.state.images.length) && (
          <Button onClick={this.pageRiser} />
        )}
      </div>
      {this.state.modalOpen && <Modal close={this.closeModal}><img src={this.state.largeImage} alt="img" /></Modal>}
    </>
  );
}

/* 
export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    modalOpen: false,
    largeImage: ''
  };

  async componentDidUpdate(_, prevState) {
    const { page, search } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchImages(search, page);
        const { hits } = data;
        this.setState(({ images }) => ({
          images: hits?.length ? [...images, ...hits] : images,
        }));
      } catch (error) {
        this.setState({
          error: error.message,
        });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  pageRiser = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

showModal = (largeImageURL) => 
this.setState({
  modalOpen: true,
  largeImage: largeImageURL
});

closeModal = () => {
  this.setState({
    modalOpen: false,
  });
}

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <div className={css.app_box}>
          {this.state.error && <p>{this.state.error}</p>}
          {Boolean(this.state.images.length) && (
            <ImageGallery>
              <ImageGalleryItem showModal={this.showModal} images={this.state.images} />
            </ImageGallery>
          )}
          {this.state.loading && <Loader />}
          {Boolean(this.state.images.length) && (
            <Button onClick={this.pageRiser} />
          )}
        </div>
        {this.state.modalOpen && <Modal close={this.closeModal}><img src={this.state.largeImage} alt="img" /></Modal>}
      </>
    );
  }
} */

export default App