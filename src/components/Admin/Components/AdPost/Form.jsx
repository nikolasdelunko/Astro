import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { BLOG_POST_SCHEMA } from "../Settings/Schemes";
import blogAPI from "../../../utils/Api/blogAPI";
import { useDispatch, useSelector } from "react-redux";
import { setTouch } from "../../../store/helpers/helpersSlice";
import { setEditAdmin } from "../../../store/admin/adminSlice";
import { snackActions } from "../../../utils/customHooks/useSnackBarUtils";

export default function AddPostBlog({ post }) {
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.helpers.touch);
  const admin = useSelector((state) => state.admin);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let mdy = date.getMonth() + "_" + date.getDate() + "_" + date.getFullYear();

  return (
    <div className="items-start   pt-[25px] pb-[25px]">
      <Formik
        initialValues={{
          title: "" || post?.title,
          author: "" || post?.author,
          date: mdy,
          time: hours + ":" + minutes,
          thumbnail: admin.post?.thumbnail || post?.author,
          content: "" || post?.content,
        }}
        validationSchema={BLOG_POST_SCHEMA}
        onSubmit={async (values) => {
          try {
            const resp = admin.edit
              ? await blogAPI.UpdateBlog(admin.post._id, values)
              : await blogAPI.CreateNewBlog(values);
            snackActions.success(resp.data);
            if (admin.edit)
              return (
                dispatch(setTouch(!touch)), dispatch(setEditAdmin(!admin.edit))
              );
            else return dispatch(setTouch(!touch));
          } catch (e) {
            snackActions.error(e.name);
          }
        }}
      >
        {({ handleSubmit, isValid, dirty, errors, touched }) => (
          <Form>
            <div className="w-[100%]  pb-[32px] left-0">
              <div className="flex flex-col gap-[10px] start pb-[17px]">
                <h2 className="font-textSec text-text-color text-[20px]">
                  title of blog
                </h2>
              </div>
              <Field
                component="input"
                data-testid="title"
                name="title"
                label="title"
                type="text"
                placeholder="title"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="title" component="div" />
              <div className="flex flex-col gap-[10px] start pb-[17px] pt-[48px]">
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[20px]">
                    author
                  </h2>
                </div>
              </div>
              <Field
                component="input"
                data-testid="author"
                name="author"
                label="author"
                type="text"
                placeholder="author"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="author" component="div" />
              <div className="flex flex-col gap-[10px] start pb-[17px] pt-[48px]">
                <h2 className="font-textSec text-text-gray text-[16px]">
                  content
                </h2>
              </div>
              <Field
                component="textarea"
                data-testid="content"
                name="content"
                label="content"
                type="number"
                placeholder="write here you want"
                className="w-[100%] h-[100px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage name="content" component="div" />
              {errors.thumbnail && touched.thumbnail ? (
                <div className="pt-[12px]">
                  <p className="font-textSec text-[red] text-[22px]">
                    !!!pls return and upload image!!!
                  </p>
                </div>
              ) : null}
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
