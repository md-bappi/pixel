import { useState } from "react";
import UploadForm from "../components/uploads/UploadForm";
import UploadedImages from "../components/uploads/UploadedImages";

const Uploads = () => {
  const [activeTab, setActiveTab] = useState<"new" | "my">("new");

  return (
    <div className="p-6 bg-gray-900 text-white py-5 shadow-lg min-h-[200vh]">
      <div className="w-full md:container md:mx-auto md:max-w-8/12">
        {/* Header */}
        <div className="my-6 md:my-8">
          <h2 className="text-2xl font-semibold text-indigo-400 text-center">
            Upload Your Image
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Share your photography with the PixelPort community and showcase
            your creative vision
          </p>
        </div>

        {/* Upload Tabs */}
        <div className="flex items-center justify-between max-w-56 bg-gray-800 py-1 px-1 rounded-full mx-auto ">
          {/* New Upload Tab */}
          <span
            onClick={() => setActiveTab("new")}
            className={`cursor-pointer py-1 px-2 rounded-full transition-all ${
              activeTab === "new"
                ? "bg-indigo-500 text-white"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            New Upload
          </span>

          {/* My Uploads Tab */}
          <span
            onClick={() => setActiveTab("my")}
            className={`cursor-pointer py-1 px-2 rounded-full transition-all ${
              activeTab === "my"
                ? "bg-indigo-500 text-white"
                : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            My Uploads
          </span>
        </div>

        {/* Tab Content */}
        <div className="mt-6 ">
          {activeTab === "new" && <UploadForm />}

          {activeTab === "my" && <UploadedImages />}
        </div>
      </div>
    </div>
  );
};

export default Uploads;
