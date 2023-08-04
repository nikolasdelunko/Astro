import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setStep } from "../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP3_SCHEMA } from "./Settings/Schemes";
// import { openModal } from "../../store/helpers/helpersSlice";
// import { addStoryInfoStep3 } from "../../store/story/storySlice";

export default function Step2() {
  // const dispatch = useDispatch();
  // const step = useSelector((state) => state.helpers.step);
	const step = 0 
	//! dispatch

  return (
    <div className="items-start pb-[166px]">
      <Formik
        initialValues={{
          CoverDesign: "",
        }}
        validationSchema={STORY_BOOK_STEP3_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
          // dispatch(addStoryInfoStep3(values));
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="w-[550px] max-[420px]:w-[90%] pb-[32px] left-0 ">
              <div className="flex flex-col start pb-[8px] pt-[32px]">
                <h2 className="font-textSec text-text-color text-[20px] pb-[8px]">
                  Book Cover Design Prompt
                </h2>
                <p className="font-textSec text-text-color text-[12px] pb-[16px]">
                  Describe your imagination about the book cover design you want
                </p>
              </div>
              <Field
                component="textarea"
                data-testid="CoverDesign"
                name="CoverDesign"
                label="CoverDesign"
                type="text"
                placeholder="Book cover design prompt. . ."
                className="w-[100%] h-[120px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="CoverDesign" component="div" />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  // dispatch(setStep(step - 1));
                }}
                className="text-regular text-[18px] text-textSec"
              >
                Back
              </button>
              <button
                className="btn flex items-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  // dispatch(
                  //   openModal({
                  //     open: true,
                  //     step: 0,
                  //   })
                  // );
                }}
              >
                Create a Book
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
