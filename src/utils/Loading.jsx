import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" py-20 flex justify-center items-center">
      <PuffLoader color="#36d7b7" />
      <PuffLoader color="#36d7b7" />
      <PuffLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
