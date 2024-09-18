import { SetStateAction, useState } from "react";
import api from "../../shared/api";

const GenerateArchivement = () => {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputText(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!inputText) {
      console.error("Input text is required");
      return;
    }

    const formData = new FormData();
    formData.append("text", inputText);

    if (uploadedImage) {
      formData.append("image", uploadedImage);
    }

    try {
      const response = await api.post("/generate-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      });

      const blob = new Blob([response.data], { type: "image/png" });
      const imageObjectURL = URL.createObjectURL(blob);
      setImageBlob(blob);
      setImageUrl(imageObjectURL);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const downloadImage = () => {
    if (imageBlob) {
      const url = window.URL.createObjectURL(imageBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${inputText}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 mb-4 flex-col max-w-[320px]"
      >
        <div>
          <label className="text-[#424242] font-semibold">Your Name:</label>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form_input text-sm py-[0.413rem] px-[1.063rem]"
            required // Ensure that the input is filled
          />
        </div>
        <div>
          <label className="text-[#424242] font-semibold">Your Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="form_input py-[2rem] px-[1.063rem]"
          />
        </div>
        <button
          className="btn btn-primary ring-0 shadow-none hover:bg-[#eee] py-[0.413rem] px-[1.063rem]"
          type="submit"
        >
          Generate Image
        </button>
      </form>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Generated Certificate" />
          <button
            onClick={downloadImage}
            className="btn btn-secondary mt-4 py-[0.413rem] px-[1.063rem]"
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateArchivement;
