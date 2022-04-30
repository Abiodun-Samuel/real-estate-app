import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "69f8240de8msh05ff963d8efc61fp1fcc05jsne26ffc8ea8f2",
    },
  });
  return data;
};
