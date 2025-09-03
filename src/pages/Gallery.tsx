import ImageGallery from "../components/gallery/ImageGallery";
import Hero from "../components/Hero";

const Gallery = () => {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <ImageGallery />
    </div>
  );
};

export default Gallery;
