import React, { useEffect, useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import CustomButton from "../../../../ShearComponents/CustomButton/CustomButton";
import { render } from "rsuite/esm/internals/utils";
import { motion } from "framer-motion";

const Form = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (image) {
      const render = new FileReader();
      render.onload = () => {
        setImagePreview(render.result);
      };
      render.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);
  const uploadRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="pt-5" onSubmit={handleSubmit}>
      <div className="flex items-center gap-5 ">
        <div className="flex flex-col flex-1">
          <label
            htmlFor="title"
            className="text-base font-semibold tracking-wide pb-2"
          >
            Donation Title
          </label>
          <input
            className="border-none outline-none shadow-sm px-2 py-3 rounded-md shadow-red-300 text-base"
            type="text"
            name="title"
            id="title"
            placeholder="Donation Title"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label
            htmlFor="image"
            className="text-base font-semibold tracking-wide pb-2 "
          >
            Donation Category
          </label>
          <select
            className="border-none outline-none shadow-sm px-2 py-3 rounded-md shadow-red-300 text-base"
            name="category"
            id="category"
          >
            <option value="health">Health</option>
            <option value="clothing">Clothing</option>
            <option value="education">Education</option>
            <option value="food">Food</option>
          </select>
        </div>
      </div>
      <div className="flex items-start gap-5 pt-5">
        <div className="flex flex-col flex-1">
          <label
            htmlFor="description"
            className="text-base font-semibold tracking-wide pb-2"
          >
            Donation Description
          </label>
          <textarea
            cols={4}
            rows={1}
            className="border-none outline-none shadow-sm px-2 py-3 rounded-md shadow-red-300 text-base"
            type="text"
            name="description"
            id="description"
            placeholder="Donation Description"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label
            htmlFor="image"
            className="text-base font-semibold tracking-wide pb-2 "
          >
            Donation Image
          </label>
          <div
            onClick={() => uploadRef.current.click()}
            className="border-none outline-none shadow-sm px-2 py-3 rounded-md shadow-red-300 text-base flex justify-center items-center gap-2 cursor-pointer"
          >
            <span>Upload Image</span>
            <span>
              <FaUpload />
            </span>
          </div>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            ref={uploadRef}
            className="hidden"
            type="file"
            name="image"
            id="image"
            accept=".jpg, .jpeg, .png"
          />
          {imagePreview && (
            <div className=" w-[100px] h-[100px] pt-5 rounded-full">
              <motion.img
                draggable={true}
                drag
                dragConstraints="left:0 ,right:39"
                src={imagePreview}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover ring-2 ring-red-500"
              />
            </div>
          )}
        </div>
      </div>
      <div className=" flex justify-end pt-5">
        <CustomButton type="submit" className="">
          Submit
        </CustomButton>
      </div>
    </form>
  );
};

export default Form;
