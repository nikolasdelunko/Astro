import axios from "axios";
import { link } from "./url";

const token = localStorage.getItem("userInfo");

const GetAllBlog = () => axios.get(`${link}/api/allBlog`);

const GetAllBlogPagination = (currentPage) =>
  axios.get(`${link}/api/blog?page=${currentPage}`);

const GetBlog = (id) => axios.get(`${link}/api/blog/${id}`);

const CreateNewBlog = (el) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: el,
  };
  return axios(`${link}/api/blog`, options);
};

const UpdateBlog = (id, el) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: el,
  };
  return axios(`${link}/api/blog/${id}`, options);
};

const DeleteBlog = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/blog/${id}`, options);
};

export default {
  GetAllBlog,
  GetBlog,
  CreateNewBlog,
  UpdateBlog,
  DeleteBlog,
  GetAllBlogPagination,
};
