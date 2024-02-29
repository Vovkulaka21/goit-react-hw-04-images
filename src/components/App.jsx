import css from './App.module.css';

import { useState, useEffect } from 'react';
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const { data } = await searchImages(search, page);
        const { hits } = data;
        setImages(prevImages =>
          hits?.length ? [...prevImages, ...hits] : prevImages
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchImages();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const pageRiser = () => setPage(prevPage => prevPage + 1);

  const showModal = largeImageURL => {
    setModalOpen(true);
    setLargeImage(largeImageURL);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <div className={css.app_box}>
        {error && <p>{error}</p>}
        {Boolean(images.length) && (
          <ImageGallery>
            <ImageGalleryItem showModal={showModal} images={images} />
          </ImageGallery>
        )}
        {loading && <Loader />}
        {Boolean(images.length) && <Button onClick={pageRiser} />}
      </div>
      {modalOpen && (
        <Modal close={closeModal}>
          <img src={largeImage} alt="img" />
        </Modal>
      )}
    </>
  );
};

export default App;
