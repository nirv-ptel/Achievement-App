import { useEffect, useState } from "react";

import api from "../../shared/api";

const Achivements = () => {
  const [file, setFiles] = useState<File | null>(null);
  const [images, setImages] = useState();

  console.log(images);

  const handleUpload = () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // 'file' must match the name attribute in <input type="file" />

    api
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure this header is set
        },
      })
      .then((res) => setImages(res.data[0].images))
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    api
      .get("/getImage")
      .then((res) => setImages(res.data[1].images))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="flex gap-4">
      <input
        type="file"
        name="file"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFiles(e.target.files[0]);
          }
        }}
      />
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
      <img src={`${api}/Images/` + images} alt="" />
    </div>
  );
};

export default Achivements;
