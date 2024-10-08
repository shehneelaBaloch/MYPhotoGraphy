import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoGallery.css';

// Import images manually
import img1 from '../assets/PhotoGallery/1.jpg';
import img2 from  '../assets/PhotoGallery/2.jpg';
import img3 from  '../assets/PhotoGallery/3.jpg';
import img4 from  '../assets/PhotoGallery/4.jpg';
import img5 from '../assets/PhotoGallery/5.jpg';
import img6 from '../assets/PhotoGallery/6.jpg';
import img7 from '../assets/PhotoGallery/7.jpg';
import img8 from '../assets/PhotoGallery/8.jpg';
import img9 from '../assets/PhotoGallery/9.jpg';
import img10 from '../assets/PhotoGallery/10.jpg';
import img11 from '../assets/PhotoGallery/11.jpg';
const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Array of imported images
  const photos = [
    img1,
    img2,img3,img4,img5,img6,img6,img7,img8,img9,img10,img11
  ];

  const fallbackImageUrl = '/images/fallback-image.jpg'; // Place the fallback image in the public folder

  // Open lightbox with selected image
  const openLightbox = (photo) => {
    setCurrentImage(photo);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="photo-gallery">
      <div className="gallery-grid">
        {photos.length === 0 ? (
          <p>No photos available</p>
        ) : (
          photos.map((photo, index) => (
            <div key={index} className="gallery-item">
              <Link to="#" onClick={() => openLightbox(photo)}>
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  loading="lazy"
                  onError={(e) => { e.target.src = fallbackImageUrl; }}
                />
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Lightbox for full-screen image view */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img src={currentImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
