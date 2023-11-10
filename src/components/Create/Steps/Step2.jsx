import React from "react";
import { setStep, $step } from "../../../store/helpersStore";
import { useStore } from "@nanostores/react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_STEP2_SCHEMA } from "./Settings/Schemes";
import QuestionIco from "../../Theme/icons/Question";
import { addStoryInfoStep2 } from "../../../store/storyStore";

export default function Step2() {
  const step = useStore($step);
  return (
    <div className="items-start pb-[166px] max-[420px]:w-[90%]">
      <Formik
        initialValues={{
          FavoriteCharter: "",
          TimeOfSettings: "",
          PlaceOfSettings: "",
          AmountCharacter: "",
          PointOfView: "",
          Conflict: "",
          AutoPlot: "",
        }}
        validationSchema={STORY_BOOK_STEP2_SCHEMA}
        onSubmit={(values) => {
          addStoryInfoStep2(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="left-0 w-[550px] pb-[32px] max-[420px]:w-[90%]">
              <div className="start flex flex-col gap-[10px] pb-[17px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Your Favorite Character
                </h2>
                <p className="font-textSec text-[12px] text-text-color">
                  Example: Harry Potter, Sherlock Holmes
                </p>
              </div>
              <Field
                component="input"
                data-testid="FavoriteCharter"
                name="FavoriteCharter"
                label="FavoriteCharter"
                type="text"
                placeholder="Favorite Character"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="FavoriteCharter" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[48px]">
                <h2 className="font-textSec text-[16px] text-text-gray">
                  Settings
                </h2>
                <h2 className="font-textSec text-[20px] text-text-color">
                  Time of Setting
                </h2>
                <p className="font-textSec text-[12px] text-text-color">
                  Example: Medieval, Modern-Day, Future, Japanese imperial era
                </p>
              </div>
              <Field
                component="input"
                data-testid="TimeOfSettings"
                name="TimeOfSettings"
                label="TimeOfSettings"
                type="text"
                placeholder="Time of Settings"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="TimeOfSettings" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[32px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Place of Setting
                </h2>
                <p className="font-textSec text-[12px] text-text-color">
                  Example: Magic World, Castle, Future, Japanese imperial era
                </p>
              </div>
              <Field
                component="input"
                data-testid="PlaceOfSettings"
                name="PlaceOfSettings"
                label="PlaceOfSettings"
                type="text"
                placeholder="Place of Settings"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="PlaceOfSettings" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[48px]">
                <h2 className="font-textSec text-[16px] text-text-gray">
                  Element of Story
                </h2>
                <h2 className="font-textSec text-[20px] text-text-color">
                  Amount Character
                </h2>
              </div>
              <Field
                component="input"
                data-testid="AmountCharacter"
                name="AmountCharacter"
                label="AmountCharacter"
                type="number"
                placeholder="0"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="AmountCharacter" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[32px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Point of View
                </h2>
                <div className="flex items-center gap-[8px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    First Person
                  </p>
                  <QuestionIco />
                </div>
                <div className="flex items-center gap-[8px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Second Person
                  </p>
                  <QuestionIco />
                </div>
                <div className="flex items-center gap-[8px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Third Person
                  </p>
                  <QuestionIco />
                </div>
              </div>
              <Field
                component="select"
                data-testid="PointOfView"
                name="PointOfView"
                label="PointOfView"
                className="h-[41px] w-[100%] cursor-pointer rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              >
                <option value="First Person">First Person</option>
                <option value="Second Person">Second Person</option>
                <option value="Third Person">Third Person</option>
              </Field>
              <div className="start flex flex-col gap-[8px] pb-[6px] pt-[32px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Conflict
                </h2>
                <p className="font-textSec text-[12px] text-text-color">
                  The problems faced by the main character.
                </p>
              </div>
              <div className="pb-[6px]">
                <div className="flex items-center gap-[8px] pb-[12px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Main Character vs Self
                  </p>
                  <QuestionIco />
                </div>
                <div className="flex items-center gap-[8px] pb-[12px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Main Character vs Other Character
                  </p>
                  <QuestionIco />
                </div>
                <div className="flex items-center gap-[8px] pb-[12px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Main Character vs Society
                  </p>
                  <QuestionIco />
                </div>
                <div className="flex items-center gap-[8px] pb-[12px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Main Character vs Nature
                  </p>
                  <QuestionIco />
                </div>
              </div>
              <Field
                component="select"
                data-testid="Conflict"
                name="Conflict"
                label="Conflict"
                className="h-[41px] w-[100%] cursor-pointer rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              >
                <option value="Main Character vs Self">
                  Main Character vs Self
                </option>
                <option value="Main Character vs Other Character">
                  Main Character vs Other Character
                </option>
                <option value="Main Character vs Society">
                  Main Character vs Society
                </option>
                <option value="Main Character vs Society">
                  Main Character vs Nature
                </option>
              </Field>
              <div className="start flex flex-col pb-[8px] pt-[32px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  Plot
                </h2>
                <div className="start flex items-center gap-[6px] pb-[17px]">
                  <p className="font-textSec text-[12px] text-text-color">
                    Description your brief plot.
                  </p>
                  <div className="cursor-pointer" onClick={() => {}}>
                    <p className="font-textSec text-[12px] text-regular">
                      Generate Auto Plot
                    </p>
                  </div>
                </div>
              </div>
              <Field
                component="textarea"
                data-testid="AutoPlot"
                name="AutoPlot"
                label="AutoPlot"
                type="text"
                placeholder="Brief plot"
                className="h-[120px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="AutoPlot" component="div" />
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
                  console.log("Submit");
                  handleSubmit();
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
