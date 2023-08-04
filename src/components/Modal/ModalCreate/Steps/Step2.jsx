import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../store/helpers/helpersSlice";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { STORY_BOOK_MODAL_SCHEMA } from "../Settings/Schemes";
import { SentOtp, CheckOrder } from "../../../../utils/Api/orderApi";
import { addEmail } from "../../../../store/story/storySlice";
import { snackActions } from "../../../../utils/customHooks/useSnackBarUtils";

export default function Step2() {
  const data = useSelector((state) => state.story.storyBook);
  const dispatch = useDispatch();
  //!
  return (
    <div className="w-[100%]">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={STORY_BOOK_MODAL_SCHEMA}
        onSubmit={async (values) => {
          const updateData = {
            ...data,
            email: values.email,
          };
          try {
            await dispatch(addEmail(values.email));
            const exist = await CheckOrder({ email: values.email });
            // snackActions.info(exist.data.message);
            const result = await SentOtp(updateData);
            snackActions.success(result.data);
            if (result.status === 200) {
              dispatch(
                openModal({
                  open: true,
                  step: 2,
                })
              );
            } else return;
          } catch (err) {
            snackActions.error(err);
          }
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="text-left m-[32px]">
              <h2 className="text-[18px] font-textSec pb-[8px]">
                Continue with OTP
              </h2>
              <p className="pb-[32px] text-[14px] font-textSec text-text-gray">
                We will send an OTP via email
              </p>
              <Field
                component="input"
                data-testid="email"
                name="email"
                label="email"
                type="text"
                placeholder="Email"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px] mb-[32px]"
              />
              <ErrorMessage name="email" component="div" />
              <div className="flex gap-[16px] justify-end">
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
