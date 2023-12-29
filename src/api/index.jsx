import axios from "axios";
import { API_URLS } from "../utils/constants";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_URLS.posts());
    return response.data.items;
  } catch (error) {
    console.log("Error:", error.message);
  }
};
