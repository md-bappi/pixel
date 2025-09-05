import Title from "../../ui/Title";
import { CiFilter } from "react-icons/ci";
import ImageCard from "./ImageCard";

const images = [
  {
    id: 1,
    name: "Image 1",
    like: 20,
    comment: 5,
    url: "/public/images/img1.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
  {
    id: 2,
    name: "Image 2",
    like: 30,
    comment: 10,
    url: "/public/images/img2.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
  {
    id: 3,
    name: "Image 3",
    like: 40,
    comment: 15,
    url: "/public/images/img3.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
  {
    id: 4,
    name: "Image 4",
    like: 50,
    comment: 20,
    url: "/public/images/img4.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
  {
    id: 5,
    name: "Image 4",
    like: 50,
    comment: 20,
    url: "/public/images/img4.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
  {
    id: 6,
    name: "Image 4",
    like: 50,
    comment: 20,
    url: "/public/images/img4.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
];

const ImageGallery = () => {
  return (
    <div className="p-6 bg-gray-900 text-white py-5 shadow-lg">
      <Title
        title="Image Gallery"
        des="Discover stunning photography from our community of creators"
        count={120}
      />

      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-6">
        {/* Search Input */}
        <form className="flex-1">
          <input
            type="text"
            placeholder="Search images..."
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </form>

        {/* Filter + Sort */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-300 hover:text-indigo-400 transition">
            <CiFilter size={20} />
            <span className="hidden md:inline text-sm">Filter</span>
          </button>

          <select className="border border-gray-700 bg-gray-800 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {images.map((image) => (
          <ImageCard image={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
