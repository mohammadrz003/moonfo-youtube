import axios from "axios";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`/api/post-categories`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
