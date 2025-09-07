import { CiHeart } from "react-icons/ci";

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

const UploadedImages = () => {
  // if (!images.length) return <p>No images available</p>;
  return (
    <div className=" bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <div className="bg-gray-800  text-white rounded-xl shadow-xs overflow-hidden  hover:shadow-sm hover:shadow-indigo-400 transition cursor-pointer group">
          <img
            src={image.url}
            alt={image.name}
            className="w-full h-60 object-cover "
          />
          <div className=" ">
            <h2 className=" p-2 text-xl capitalize font-semibold">
              {image.name}
            </h2>

            <div className="p-2 flex justify-between items-center text-md text-gray-300">
              <span className="flex items-center gap-1">
                <p>{image.uploaded}</p>
              </span>
              <span className="flex items-center gap-1">
                <CiHeart /> {image.like}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadedImages;
