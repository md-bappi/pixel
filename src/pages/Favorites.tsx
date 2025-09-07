import { CiSearch } from "react-icons/ci";
import Title from "../ui/Title";
import ImageCard from "../components/gallery/ImageCard";
import { useState } from "react";

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
    category: "Nature",
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
    category: "People",
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
    category: "Animals",
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
    category: "Nature",
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
    category: "People",
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
    category: "Animals",
  },
];

const Favorites = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("date-added");

  // Filter images by search only
  let filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort images by filter selection
  if (filter === "date-added") {
    filteredImages = filteredImages.sort((a, b) => b.id - a.id);
  } else if (filter === "most-liked") {
    filteredImages = filteredImages.sort((a, b) => b.like - a.like);
  } else if (filter === "title-a-z") {
    filteredImages = filteredImages.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className=" w-full container mx-auto ">
        <Title
          title="Your Favorites"
          count={4}
          des="images saved to your favorites collection"
        />

        <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-4 mt-6">
          {/* Search */}
          <form
            className="flex items-center bg-gray-800 rounded-lg p-2 w-full md:col-span-5 "
            onSubmit={(e) => e.preventDefault()}
          >
            <CiSearch className="text-gray-400 mr-2 text-xl" />
            <input
              type="text"
              placeholder="Search favorites..."
              className="bg-gray-800 text-white placeholder-gray-400 outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Filter Section */}
          <select
            className="w-full bg-gray-800 text-white rounded-lg col-span-1 p-2 border border-gray-700 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="date-added">Date Added</option>
            <option value="most-liked">Most Liked</option>
            <option value="title-a-z">Title A-Z</option>
          </select>
        </div>
      </div>

      {/* favourites images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredImages.map((image) => (
          <ImageCard image={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
