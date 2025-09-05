import { useState, type ChangeEvent, type FormEvent } from "react";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  console.log(title);
  console.log(file);
  console.log(preview);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // Create a temporary preview URL
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Please provide both a title and an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    // Properly log FormData contents
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold text-indigo-400 text-center">
        Quick Upload
      </h2>

      {/* Image Title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-gray-300 mb-1 font-medium">
          Image Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter image title"
          className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:outline-none focus:outline focus:outline-indigo-500"
        />
      </div>

      {/* File Input */}
      <div className="flex flex-col">
        <label htmlFor="file" className="text-gray-300 mb-1 font-medium">
          Choose Image File
        </label>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleFileChange}
          className="bg-gray-800 text-gray-300 p-2 rounded-lg border border-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Image Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 w-full h-48 object-cover rounded-lg border border-gray-700"
          />
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md cursor-pointer"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
