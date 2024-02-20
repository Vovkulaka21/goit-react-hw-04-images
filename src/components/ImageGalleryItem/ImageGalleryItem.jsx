import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({showModal, images }) => {
  const elements = images.map(({id, webformatURL, largeImageURL}) => (
    <li onClick={() => showModal(largeImageURL)} key={id} className={css.gallery_item}>
      <img
        className={css.gallery_item_image}
        src={webformatURL}
        alt="img"
      />
    </li>
  ));
  return <>{elements}</>;
};

export default ImageGalleryItem;
