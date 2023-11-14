import React from "react";
import { openModal } from "../../../../store/helpersStore";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_MODAL_SCHEMA } from "../Settings/Schemes";
import { SentOtp, CheckOrder } from "../../../../utils/Api/orderApi";
import {
  addEmail,
  $storyInfo2,
  $genre,
  $designPrompt,
  $theme,
  $helpersStore,
} from "../../../../store/storyStore";
// import { snackActions } from "../../../../utils/customHooks/useSnackBarUtils";
import { useStore } from "@nanostores/react";

export default function Step2() {
  const genre = useStore($genre);
  const storyInfo2 = useStore($storyInfo2);
  const helpersStore = useStore($helpersStore);
  const designPrompt = useStore($designPrompt);
  const theme = useStore($theme);

  console.log(
    "Step2",
    storyInfo2,
    genre,
    designPrompt,
    theme
  );

  return (
    <div className="w-[100%]">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={STORY_BOOK_MODAL_SCHEMA}
        onSubmit={async (values) => {
          const updateData = {
            ...storyInfo2,
            genre,
            designPrompt,
            theme,
            email: values.email,
          };
          try {
            await addEmail(values.email);
            const exist = await CheckOrder({ email: values.email });
            // snackActions.info(exist.data.message);
            const result = await SentOtp(updateData);
            // snackActions.success(result.data);
            if (result.status === 200) {
              openModal({
                open: true,
                step: 2,
              });
            } else return;
          } catch (err) {
            // snackActions.error(err);
          }
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="m-[32px] text-left">
              <h2 className="pb-[8px] font-textSec text-[18px]">
                Continue with OTP
              </h2>
              <p className="pb-[32px] font-textSec text-[14px] text-text-gray">
                We will send an OTP via email
              </p>
              <Field
                component="input"
                data-testid="email"
                name="email"
                label="email"
                type="text"
                placeholder="Email"
                className="mb-[32px] h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="email" component="div" />
              <div className="flex justify-end gap-[16px]">
                <button
                  disabled={!isValid && !dirty}
                  className="btn-modal-send flex items-center"
                  type="submit"
                >
                  Send OTP
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
