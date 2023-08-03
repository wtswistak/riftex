import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = (endpoint, filter) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}${endpoint}?key=${API_KEY}&page=${page}&${filter}`
        );
        setData([...data, ...response.data.results]);
      } catch {
        throw Error("Failed fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, page]);

  return { data, isLoading, setPage };
};

export default useFetch;
