import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP3_SCHEMA } from "./Settings/Schemes";
import { setStep, $step, openModal } from "../../../store/helpersStore";
import { useStore } from "@nanostores/react";
import { addStoryInfoStep3 } from "../../../store/storyStore";

export default function Step2() {
  const step = useStore($step);
  return (
    <div className="items-start pb-[166px]">
      <Formik
        initialValues={{
          CoverDesign: "",
        }}
        validationSchema={STORY_BOOK_STEP3_SCHEMA}
        onSubmit={(values) => {
          console.log("Step3", values);
          addStoryInfoStep3(values.CoverDesign);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="left-0 w-[550px] pb-[32px] max-[420px]:w-[90%] ">
              <div className="start flex flex-col pb-[8px] pt-[32px]">
                <h2 className="pb-[8px] font-textSec text-[20px] text-text-color">
                  Book Cover Design Prompt
                </h2>
                <p className="pb-[16px] font-textSec text-[12px] text-text-color">
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
                className="h-[120px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="CoverDesign" component="div" />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
                className="text-textSec text-[18px] text-regular"
              >
                Back
              </button>
              <button
                className="btn flex items-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  openModal({
                    open: true,
                    step: 0,
                  });
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
