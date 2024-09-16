import { useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import Style from "../../assets/css/archivement.module.css";

const GenerateArchivement = () => {
  const certificateWrapper = useRef(null);
  const [name, setName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onDownload = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    exportComponentAsPNG(certificateWrapper, {
      html2CanvasOptions: { backgroundColor: null },
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={Style.generateArchivement}>
      <div className={Style.generateArchivementMeta}>
        <h1>ACM Certificates</h1>
        <div className="mb-3">
          <p>Enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <p>Upload image:</p>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <button onClick={onDownload}>Download</button>
      </div>

      <div className={"relative"} ref={certificateWrapper}>
        <img
          className="block shadow-lg"
          src="https://i.imgur.com/Toz3PUWh.png"
          alt="Certificate"
        />
        <div className="content rounded-[10px] overflow-hidden absolute top-0 left-0 w-[990px]">
          <p className="text-[40px] mt-[300px] ml-[85px]">{name}</p>
          {uploadedImage && (
            <img
              className="absolute right-16 top-[17rem] w-20 h-20 rounded-full"
              src={uploadedImage}
              alt="Uploaded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateArchivement;
