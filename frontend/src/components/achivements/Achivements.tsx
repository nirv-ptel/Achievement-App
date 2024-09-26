import { useEffect, useState } from "react";
import Button from "../../shared/button/Button";
import ModalPortal from "../../shared/modal/Modal";
import AddAchivementModal from "./AddAchivementModal";
import api from "../../shared/api";

const Achivements = () => {
  const [isAddAchivementModal, setIsAddAchivementModal] = useState(false);
  const [images, setImages] = useState<string[]>([]); // To store multiple images

  // Fetch images from the backend
  useEffect(() => {
    api
      .get("/getImage")
      .then((res) => {
        if (res.data) {
          setImages(res.data.map((item: any) => item.image)); // Assuming 'image' is the field containing the file name
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle file upload
  const handleUpload = (file: File | null) => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    api
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // After upload, add the new image to the list
        setImages((prev) => [...prev, res.data.image]);
      })
      .catch((err) => console.log(err));
  };

  const onCloseAddAchivement = () => {
    setIsAddAchivementModal(false);
  };

  const onClickAddAchivement = () => {
    setIsAddAchivementModal(true);
  };

  return (
    <>
      <Button
        title={"+ Add Achievement"}
        type="button"
        variant="primary"
        onClick={onClickAddAchivement}
        className="ml-auto ring-0 shadow-none hover:bg-[#eee]"
      />

      {/* Image Listing */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <img
                src={`http://localhost:3000/Image/` + image}
                alt={`Achievement ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))
        ) : (
          <p>No images uploaded yet</p>
        )}
      </div>

      {/* Modal for Uploading Achievement */}
      <ModalPortal open={isAddAchivementModal}>
        <AddAchivementModal
          onClose={onCloseAddAchivement}
          onUpload={handleUpload}
        />
      </ModalPortal>
    </>
  );
};

export default Achivements;
