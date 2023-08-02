import axios from "axios";
import { link } from "./url";

const token = localStorage.getItem("userInfo");

const SentOtp = (data) => {
  const options = {
    method: "post",
    data: data,
  };
  return axios(`${link}/api/sent-otp`, options);
};

const CheckOtp = (data) => {
  const options = {
    method: "post",
    data: data,
  };
  return axios(`${link}/api/verify-otp`, options);
};

const GetOrder = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/order/${id}`, options);
};

const GetOrders = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`${link}/api/orders`, options);
};

const PatchOrderPay = (email) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: email,
  };
  return axios(`${link}/api/order`, options);
};



const PatchOrderStatus = (email) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: email,
  };
  return axios(`${link}/api/order-status`, options);
};

const DeleteOrder = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };

  return axios(`${link}/api/order/${id}`, options);
};

//! new

const CheckOrder = (data) => {
  const options = {
    method: "post",
    data: data,
  };

  return axios(`${link}/api/check-order`, options);
};

const SendNextOrder = (data) => {
  const options = {
    method: "post",
    data: data,
  };
  return axios(`${link}/api/sent-next-order`, options);
};

export {
  SentOtp,
  CheckOtp,
  GetOrder,
  GetOrders,
  PatchOrderPay,
  PatchOrderStatus,
  DeleteOrder,
  CheckOrder,
  SendNextOrder,
};
