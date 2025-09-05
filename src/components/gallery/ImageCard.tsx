import { useState } from "react";
import { CiHeart, CiCircleInfo } from "react-icons/ci";
import { LuFileImage } from "react-icons/lu";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

type Image = (typeof images)[number];

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

type SizeKeys = "full" | "large" | "medium" | "small";

const ImageCard = ({ image }: { image: Image }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [liked, setLiked] = useState(false);
  const [size, setSize] = useState<SizeKeys | "">("");
  const [downloadSize, setDownloadSize] = useState("");

  if (!images.length) return <p>No images available</p>;

  return (
    <div>
      {/* Gallery Grid */}
      <div
        onClick={() => {
          setSelectedImage(image);
          setLiked(false);
          setSize("");
          setDownloadSize("");
        }}
        className="bg-gray-800 text-white rounded-xl shadow-xs overflow-hidden  hover:shadow-sm hover:shadow-indigo-400 transition cursor-pointer group"
      >
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
      {/* Modal */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)} // click on backdrop closes modal
        >
          <div
            className="bg-gray-900 p-4 rounded-2xl shadow-2xl relative text-white w-10/12 md:w-1/3  mx-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal itself
          >
            {/* Image */}
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            {/* Info */}
            <div className=" flex justify-between items-center">
              <h2 className="text-2xl font-bold text-indigo-400">
                {selectedImage.name}
              </h2>

              <span className=" flex items-center gap-1">
                <CiHeart />{" "}
                {liked ? selectedImage.like + 1 : selectedImage.like}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm mt-2"></div>

            {/* File Info */}
            <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm bg-gray-800 px-4 py-2 rounded-xl mt-1">
              <div className="flex items-center gap-2">
                <MdOutlineDriveFolderUpload /> {selectedImage.uploaded}
              </div>
              <div className="flex items-center gap-2">
                <LuFileImage /> {selectedImage.resolution}
              </div>
              <div className="flex items-center gap-2">
                <CiCircleInfo /> {selectedImage.fileType}
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineDownload /> {selectedImage.sizeMB}
              </div>
            </div>

            {/* Download Options */}
            <div className="flex flex-col gap-4 mt-1">
              {/* Size Selection */}
              <div className="">
                <label className="block text-gray-300 font-medium mb-2">
                  Size
                </label>
                <div className="relative">
                  <select
                    value={size}
                    onChange={(e) => {
                      const value = e.target.value as SizeKeys;
                      setSize(value);
                      const sizeMap: Record<SizeKeys, string> = {
                        full: selectedImage!.sizeMB,
                        large: "1MB",
                        medium: "0.6MB",
                        small: "0.3MB",
                      };
                      setDownloadSize(sizeMap[value]);
                    }}
                    className="appearance-none w-full p-3 pr-10 rounded-lg bg-gray-800 text-white placeholder-gray-400 cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Size
                    </option>
                    <option value="full" className="text-gray-200">
                      Full Resolution - {selectedImage!.resolution}
                    </option>
                    <option value="large" className="text-gray-200">
                      Large (1280x720)
                    </option>
                    <option value="medium" className="text-gray-200">
                      Medium (800x600)
                    </option>
                    <option value="small" className="text-gray-200">
                      Small (512x342)
                    </option>
                  </select>

                  {/* Custom arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▼
                  </div>
                </div>

                {downloadSize && (
                  <p className="text-sm text-gray-400 mt-1">
                    Download Size:{" "}
                    <span className="text-indigo-400 font-medium">
                      {downloadSize}
                    </span>
                  </p>
                )}
              </div>

              <div className=" flex justify-between items-center gap-2 ">
                {/* Like Button */}
                <button
                  onClick={() => setLiked((prev) => !prev)}
                  className={`px-4 py-2 rounded-lg cursor-pointer w-full ${
                    liked
                      ? "bg-rose-500 text-white"
                      : "bg-gray-700 text-gray-200 hover:bg-rose-500 hover:text-white"
                  }`}
                >
                  {liked ? "Liked " : "Like"}
                </button>

                {/* Download Button */}
                <button className="bg-indigo-600 hover:bg-purple-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 justify-center shadow-md cursor-pointer w-full">
                  <AiOutlineDownload /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
