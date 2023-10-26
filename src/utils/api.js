import axios from "axios";
import { API_URL } from "./config";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

const _get = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.log("axios get error:", error);
  }
};

const _post = async (endpoint, payload) => {
  try {
    const response = await instance.post(endpoint, payload);
    return response.data;
  } catch (error) {
    console.log("axios post error:", error);
  }
};

const _delete = async (endpoint) => {
  try {
    const response = await instance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.log("axios delete error:", error);
  }
};

const _put = async (endpoint, payload) => {
  try {
    const response = await instance.put(endpoint, payload);
    return response.data;
  } catch (error) {
    console.log("axios put error:", error);
  }
};

export const admin = {
  login: async (payload) => await _post("/AdminLogin/Login", payload),
};

export const user = {
  login: async (payload) => await _post("/Authentication/login", payload),
  register: async (payload) => await _post("/Authentication/register", payload),
};

export const medicines = {
  list: async () => await _get("/Medicines"),
};

export const cart = {
  getCarts: async () => await _get("/Cart"),
  createCart: async (payload) => await _post("/Cart", payload),
  deleteCart: async (id) => await _delete(`/Cart/${id}`),
  addItemToCart: async (cartId, payload) =>
    await _post(`/Cart/${cartId}/items`, payload),
  removeItemFromCart: async (cartId, itemId) =>
    await _delete(`/Cart/${cartId}/items/${itemId}`),
};
