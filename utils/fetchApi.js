import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": process.env.BAYUT_HOST,
      "X-RapidAPI-Key": process.env.BAYUT_KEY,
    },
  });
  return data;
};