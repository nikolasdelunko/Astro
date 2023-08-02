import axios from "axios";
import {link} from "./url"

const token = localStorage.getItem("userInfo");

export const uploadFile = (data) => {
  const options = {
    method: "post",
    headers: {
      "auth-token": `${JSON.parse(token)}`,
    },
    data: data,
  };
  return axios(`${link}/api/upload`, options);
};

export const uploadStickers = (data) => {
  const options = {
    method: "post",
    headers: {
      "auth-token": `${JSON.parse(token)}`,
    },
    data: data,
  };
  return axios(`${link}/api/uploadStickers`, options);
};

export const getFile = (id) => {
  const options = {
    method: "get",
  };
  return axios(`${link}/image/${id}`, options);
};

export const patchFile = (id, data) => {
  const options = {
    method: "patch",
    headers: {
      "auth-token": `${JSON.parse(token)}`,
    },
    data: data,
  };
  return axios(`${link}/api/upload/${id}`, options);
};

export const deleteFile = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/upload${id}`, options);
};
