import React from "react";
import Variants from "./Variants";
import { setStep, $step } from "../../../store/helpersStore";
import { useStore } from '@nanostores/react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP1_SCHEMA } from "./Settings/Schemes";
import { addThemeStory } from "../../../store/storyStore";

const data = [
  "Action-Adventure",
  "Comedy",
  "Fable",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "Romance",
  "Science Fiction",
  "Slice of Life",
  "Thriller",
];

export default function Step1() {
	const step = useStore($step)
  return (
    <div className="items-start pb-[166px] max-[420px]:w-[90%]">
      <Formik
        initialValues={{
          ThemeOfStory: "",
        }}
        validationSchema={STORY_BOOK_STEP1_SCHEMA}
        onSubmit={(values) => {
          addThemeStory(values);
          console.log("Step1", values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="max-w-[550px] pb-[32px]">
              <div className="start flex items-center gap-[13px] pb-[17px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Choose Genre
                </h2>
                <p className="font-textSec text-[12px] text-regular">
                  (Select up to 2)
                </p>
              </div>
              <div className="flex flex-wrap gap-[16px]">
                {data.map((el) => (
                  <Variants text={el} key={Math.random(0, 1)} />
                ))}
              </div>
            </div>
            <div className="left-0 max-w-[550px] pb-[32px]">
              <div className="start flex flex-col gap-[10px] pb-[17px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Theme of Story
                </h2>
                <p className="font-textSec text-[12px] text-text-color">
                  Example: Cyberpunk science fiction, revenge mystery, medieval
                  fantasy, futuristic, time travel
                </p>
              </div>
              <Field
                component="input"
                data-testid="ThemeOfStory"
                name="ThemeOfStory"
                label="ThemeOfStory"
                type="text"
                placeholder="Theme of story"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="ThemeOfStory" component="div" />
            </div>
            <div className="ml-[80%] max-[420px]:ml-[70%]">
              <button
                className="btn flex items-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  console.log(step + 1);
                  setStep(step + 1);
                }}
              >
                next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
