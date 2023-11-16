import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { USER_SCHEMA } from "./Settings/Schemes";
import { registerUser, patchUser } from "../../utils/Api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setTouch } from "../../store/helpers/helpersSlice";
import { setEditAdmin } from "../../store/admin/adminSlice";
import { snackActions } from "../../utils/customHooks/useSnackBarUtils";

export default function AddPostBlog({ user }) {
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.helpers.touch);
  const admin = useSelector((state) => state.admin);

  return (
    <div className="items-start   pt-[25px] pb-[25px]">
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
            if (admin.edit)
              return (
                dispatch(setTouch(!touch)), dispatch(setEditAdmin(!admin.edit))
              );
            else return dispatch(setTouch(!touch));
          } catch (e) {
            snackActions.error(e.response.data);
          }
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="w-[100%]  pb-[32px] left-0">
              <div className="flex flex-col gap-[10px] start pb-[17px]">
                <h2 className="font-textSec text-text-color text-[20px]">
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
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="name" component="div" />
              <div className="flex flex-col gap-[10px] start pb-[17px] pt-[48px]">
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[20px]">
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
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="email" component="div" />
              <div className="flex flex-col gap-[10px] start pb-[17px] pt-[32px]">
                <h2 className="font-textSec text-text-color text-[20px]">
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
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="password" component="div" />
              <button
                className="btn-modal-send flex items-center bg-main-color text-white mt-[50px]"
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
