import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, onItemClick }) => {
  return (
    <li
      className={s.galleryItem}
      onClick={() => {
        onItemClick();
      }}
    >
      <img src={webformatURL} alt={tags} className={s.imageGalleryItem} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default ImageGalleryItem;
