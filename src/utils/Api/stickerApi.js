import axios from "axios";
import { stickerPageLink, link } from "./url";

const token = localStorage.getItem("userInfo");

const GetSticker = () => {
  const options = {
    method: "get",
  };
  return axios(`${stickerPageLink}`, options);
};

const GetUSerSticker = () => {
	const options = {
		method: "get",
		headers: { "auth-token": `${JSON.parse(token)}` },
	}
	return axios(`${link}/api/stickers`, options)
}

const DeleteUserSticker = (id) => {
	const options = {
		method: "delete",
		headers: { "auth-token": `${JSON.parse(token)}` },
	}
	return axios(`${link}/api/stickers/${id}`, options)
}

const DeletePhoto = (path) => {
	const options = {
		method: "delete",
	}
	return axios(`${link}/api${path}`, options)
}

const postStickers = (data) => {
	const options = {
		method: "post",
		data: data,
	}
	return axios(`${link}/api/stickers`, options)
}

export { GetSticker, DeletePhoto, postStickers, GetUSerSticker, DeleteUserSticker };