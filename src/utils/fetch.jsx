// export default fetchUnsplash;
import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

const fetchUnsplash = async (query, page = 1, perPage = 10) => {
  console.log(`Fetching Unsplash API with query: ${query}`);
  console.log(`Using API Key: ${ACCESS_KEY}`); // Log the API key
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page: perPage },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    });
    console.log("Response from Unsplash API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching from Unsplash API:", error.response || error);
    throw error;
  }
};

export default fetchUnsplash;
