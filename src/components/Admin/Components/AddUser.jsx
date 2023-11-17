import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { USER_SCHEMA } from "./Settings/Schemes";
import { registerUser, patchUser } from "../../../utils/Api/userApi";
import { setTouch, $touch } from "../../../store/helpersStore";
import { setEditAdmin, $admin } from "../../../store/adminSlice";
import { snackActions } from "../../utils/customHooks/useSnackBarUtils";
import { useStore } from "@nanostores/react";

export default function AddPostBlog({ user }) {
  const touch = useStore($touch);
  const admin = useStore($admin);

  return (
    <div className="items-start   pb-[25px] pt-[25px]">
      <Formik
        initialValues={{
          name: "" || user?.name,
          email: "" || user?.email,
          password: "",
        }}
        validationSchema={USER_SCHEMA}
        onSubmit={async (values) => {
          try {
            const resp = admin.edit
              ? await patchUser(values, admin.user.id)
              : await registerUser(values);
            snackActions.success(resp.data);
            if (admin.edit) return setTouch(!touch), setEditAdmin(!admin.edit);
            else return setTouch(!touch);
          } catch (e) {
            snackActions.error(e.response.data);
          }
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="left-0  w-[100%] pb-[32px]">
              <div className="start flex flex-col gap-[10px] pb-[17px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  name
                </h2>
              </div>
              <Field
                component="input"
                data-testid="name"
                name="name"
                label="name"
                type="text"
                placeholder="name"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="name" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[48px]">
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[20px] text-text-color">
                    email
                  </h2>
                </div>
              </div>
              <Field
                component="input"
                data-testid="email"
                name="email"
                label="email"
                type="email"
                placeholder="email"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="email" component="div" />
              <div className="start flex flex-col gap-[10px] pb-[17px] pt-[32px]">
                <h2 className="font-textSec text-[20px] text-text-color">
                  password
                </h2>
              </div>
              <Field
                component="input"
                data-testid="password"
                name="password"
                label="password"
                type="password"
                placeholder="password"
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage name="password" component="div" />
              <button
                className="btn-modal-send mt-[50px] flex items-center bg-main-color text-white"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={handleSubmit}
              >
                ADD
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
