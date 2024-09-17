import { SetStateAction, useState } from "react";
import api from "../../shared/api";

const GenerateArchivement = () => {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await api.get(`/${inputText}`, {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "image/png" });
      const imageObjectURL = URL.createObjectURL(blob);
      setImageBlob(blob);
      setImageUrl(imageObjectURL);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const onDownloadImage = () => {
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
      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <div>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter text"
            className="form_input text-aurometalaaurus text-sm py-[0.413rem] px-[1.063rem]"
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
          <img src={imageUrl} alt="Generated" />
          <button
            onClick={onDownloadImage}
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
