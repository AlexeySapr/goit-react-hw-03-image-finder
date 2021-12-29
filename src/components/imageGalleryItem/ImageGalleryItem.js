import s from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
