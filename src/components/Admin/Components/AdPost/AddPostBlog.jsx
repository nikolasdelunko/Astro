import React, { useState } from "react";
import Upload from "./UploadImage";
import Form from "./Form";

export default function AddPostBlog({ post, link }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    step === 1 ? setStep(2) : setStep(1);
  };

  return (
    <div>
      {step === 1 && <Upload />}
      {step === 2 && <Form post={post} />}

      <button
        className="btn-modal-send flex items-center border-main-color border-[2px]  text-main-color mt-[50px]"
        onClick={nextStep}
      >
        {step === 1 ? "next step" : "prev step"}
      </button>
    </div>
  );
}
