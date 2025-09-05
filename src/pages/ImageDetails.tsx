import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlineClose,
} from "react-icons/ai";
import { CiCircleInfo, CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { LuFileImage } from "react-icons/lu";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

// Sample images
const images = [
  {
    id: 1,
    name: "Image 1",
    like: 20,
    comment: 5,
    url: "/images/img1.jpg",
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
    url: "/images/img2.jpg",
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
    url: "/images/img3.jpg",
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
    url: "/images/img4.jpg",
    uploaded: "2 hours ago",
    resolution: "1920x1080",
    fileType: "JPEG",
    sizeMB: "1.5MB",
  },
];

type SizeKeys = "full" | "large" | "medium" | "small";
type FormatKeys = "original" | "png" | "webp" | "pdf";

const ImageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const image = images.find((img) => img.id === Number(id));

  const [liked, setLiked] = useState(false);
  const [format, setFormat] = useState<FormatKeys>("original");
  const [size, setSize] = useState<SizeKeys | "">("");
  const [downloadSize, setDownloadSize] = useState<string>("");

  if (!image) return <div className="text-white p-6">Image not found.</div>;

  const sizeOptions: Record<SizeKeys, { label: string; size: string }> = {
    full: {
      label: `Full Resolution - ${image.resolution}`,
      size: image.sizeMB || "Unknown",
    },
    large: { label: "Large (1280x720)", size: "1MB" },
    medium: { label: "Medium (800x600)", size: "0.6MB" },
    small: { label: "Small (512x342)", size: "0.3MB" },
  };

  const handleSizeChange = (value: SizeKeys) => {
    setSize(value);
    setDownloadSize(sizeOptions[value].size);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl relative text-white overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <AiOutlineClose size={28} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left: Image */}
          <div className="bg-gray-800 p-4 flex items-center justify-center">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="p-6 flex flex-col gap-6">
            {/* Title & Stats */}
            <div>
              <h2 className="text-2xl font-bold text-indigo-400 mb-2">
                {image.name}
              </h2>
              <div className="flex items-center gap-5 text-gray-300 text-sm">
                <span
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1 cursor-pointer transition ${
                    liked ? "text-pink-400" : "hover:text-pink-300"
                  }`}
                >
                  <CiHeart size={20} /> {liked ? image.like + 1 : image.like}
                </span>
                <span className="flex items-center gap-1 hover:text-indigo-300 cursor-pointer">
                  <FiMessageSquare size={20} /> {image.comment}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <IoEyeOutline size={20} /> 1.2k
                </span>
                <AiOutlineShareAlt className="ml-auto cursor-pointer hover:text-indigo-300 transition" />
              </div>
            </div>

            {/* File Info */}
            <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm bg-gray-800 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <MdOutlineDriveFolderUpload /> {image.uploaded}
              </div>
              <div className="flex items-center gap-2">
                <LuFileImage /> {image.resolution}
              </div>
              <div className="flex items-center gap-2">
                <CiCircleInfo /> {image.fileType}
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineDownload /> {image.sizeMB}
              </div>
            </div>

            {/* Download Options */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Format */}
              <div>
                <label className="text-gray-300 font-medium mb-1 block">
                  Format
                </label>
                <div className="relative">
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as FormatKeys)}
                    className="appearance-none w-full bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 transition"
                  >
                    {["original", "png", "webp", "pdf"].map((f) => (
                      <option
                        key={f}
                        value={f}
                        className="bg-gray-700 text-white"
                      >
                        {f === "original"
                          ? `Original (JPG) - ${image.sizeMB}`
                          : f.toUpperCase()}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    ▼
                  </span>
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="text-gray-300 font-medium mb-1 block">
                  Size
                </label>
                <div className="relative">
                  <select
                    value={size}
                    onChange={(e) =>
                      handleSizeChange(e.target.value as SizeKeys)
                    }
                    className="appearance-none w-full bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 transition"
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    {Object.entries(sizeOptions).map(([key, option]) => (
                      <option
                        key={key}
                        value={key}
                        className="bg-gray-700 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    ▼
                  </span>
                </div>
                {downloadSize && (
                  <p className="text-sm text-gray-400 mt-1">
                    Download Size:{" "}
                    <span className="text-indigo-400">{downloadSize}</span>
                  </p>
                )}
              </div>

              {/* Download Button */}
              <button className="bg-indigo-600 hover:bg-purple-600 transition text-white rounded-lg px-4 py-2 flex items-center gap-2 justify-center shadow-md">
                <AiOutlineDownload /> Download Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
