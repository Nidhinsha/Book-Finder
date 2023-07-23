// src/services/api.ts

import axios from "axios";

const searchBooks = async (term: string | undefined) => {
  try {
    const response = await axios.get("http://localhost:5000/api/search/", {
      params: {
        q: term, 
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching book data", error);
    return [];
  }
};

export default searchBooks;
