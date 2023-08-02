import axios from "axios";
import { link } from "./url";

const token = localStorage.getItem("userInfo");

export const registerUser = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`${link}/api/users`, options);
};

//check here don't forget  //users
export const getUserByToken = () => axios("/api/users");

export const getUsers = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/users`, options);
};

export const getUserById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/users/${id}`, options);
};

export const patchUser = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`${link}/api/users/${id}`, options);
};

export const deleteUserById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/users/${id}`, options);
};

export const deleteUser = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`${link}/api/users`, options);
};

export const loginUser = (data) => axios.post(`${link}/api/users/login`, data);
