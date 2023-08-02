import axios from "axios";
import { link } from "./url";

const makePay = (el) => axios.post(`${link}/api/payment`, el);

const payStickers = (el) => axios.post(`${link}/api/buy-stickers`, el);

export default { makePay, payStickers };
