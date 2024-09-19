import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import type { ReactCropperElement } from "react-cropper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import api from "../../shared/api";
import clsx from "clsx";

// Define the validation schema for Formik
const validationSchema = Yup.object().shape({
  text: Yup.string().required("Text is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
});

const GenerateAchivement = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);

  const cropperRef = useRef<ReactCropperElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for file input

  // Define the mutation for API submission
  const { mutateAsync } = useMutation(async (values: any) => {
    const formData = new FormData();
    formData.append("text", values.text);
    formData.append("gender", values.gender);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("age", values.age);

    if (croppedImage) {
      formData.append("image", croppedImage);
    } else {
      console.error("No cropped image found");
    }

    try {
      const response = await api.post("/api/images/generate-image", formData, {
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
  });

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      text: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      age: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await mutateAsync(values);
        resetForm();
        setUploadedImage(null); // Clear uploaded image
        setCroppedImageUrl(null); // Clear cropped image URL

        // Clear file input field
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset file input
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      setSubmitting(false);
    },
  });

  // Handle image upload and crop
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
      setCroppedImageUrl(null); // Reset cropped image URL when uploading a new image
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
        if (blob) {
          setCroppedImage(blob);
          const croppedImageURL = URL.createObjectURL(blob); // Create URL for cropped image
          setCroppedImageUrl(croppedImageURL); // Display the cropped image instead of cropper
        }
      });
    }
  };

  const handleEdit = () => {
    setCroppedImageUrl(null); // Hide cropped image URL to show the cropper
  };

  const downloadImage = () => {
    if (imageBlob) {
      const url = window.URL.createObjectURL(imageBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${formik.values.text}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="p-4">
      {!imageUrl && (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-[25rem]"
        >
          <div>
            <input
              type="text"
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              placeholder="Enter your name"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.text && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.text}
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              placeholder="Enter gender"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.gender && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.gender}
              </div>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.email && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Enter phone"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.phone && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Enter address"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.address && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.address}
              </div>
            )}
          </div>
          <div>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              placeholder="Enter age"
              className={clsx(
                "form-input text-sm py-2 px-4 border rounded w-full",
                { "border-red-500": formik.errors.phone }
              )}
            />
            {formik.errors.age && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.age}
              </div>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="form-input py-2 px-4 border rounded w-full"
              ref={fileInputRef} // Attach ref to the input file
            />
          </div>

          {/* Conditionally render the cropper or the cropped image */}
          {uploadedImage && !croppedImageUrl && (
            <div className="mb-4">
              <Cropper
                src={URL.createObjectURL(uploadedImage)}
                style={{ height: 300, width: "100%" }}
                initialAspectRatio={4 / 3} // Passport-size aspect ratio
                guides={true}
                viewMode={1}
                dragMode="move"
                cropBoxMovable={true}
                cropBoxResizable={true}
                autoCropArea={1}
                minCropBoxHeight={100}
                minCropBoxWidth={100}
                responsive={true}
                ref={cropperRef}
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleCrop}
                  className="btn btn-secondary py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Crop Image
                </button>
              </div>
            </div>
          )}

          {/* Show the cropped image if available */}
          {croppedImageUrl && (
            <div className="flex flex-col items-center mb-4 relative">
              <img
                src={croppedImageUrl}
                alt="Cropped Image"
                className="w-full h-auto"
              />
              <button
                type="button"
                onClick={handleEdit}
                className="btn btn-secondary py-1 px-1 bg-gray-500 text-white hover:bg-gray-600 absolute top-[-5px] right-[-8px] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                >
                  <path
                    fill="white"
                    d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"
                  />
                </svg>
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            {formik.isSubmitting ? "Generating..." : "Generate Image"}
          </button>
        </form>
      )}

      {imageUrl && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Generated Image:</h3>
          <img src={imageUrl} alt="Generated Achievement" />
          <button
            onClick={downloadImage}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateAchivement;
