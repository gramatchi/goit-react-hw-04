import axios from "axios";

export const fetchPhoto = async (query, page) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      per_page: 5,
      page,
      client_id: "oVlIOsaX75GGNo4uFhQZvWzCTPnyPqNUnzW0wEoqoF4",
    },
  });
  return res.data.results;
};
