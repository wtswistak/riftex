import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = (endpoint, filter) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  // console.log(data);
  filter = filter ? "&" + filter : "";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}${endpoint}?key=${API_KEY}&page=${page}${filter}`
        );
        console.log(
          `${API_URL}${endpoint}?key=${API_KEY}&page=${page}${filter}`
        );
        if (!response.data.results || filter.includes("search"))
          setData(response.data);
        else {
          setData([...data, ...response.data.results]);
        }
      } catch {
        throw Error("Failed fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, page, filter]);

  return { data, isLoading, setIsLoading, setPage, setData };
};

export default useFetch;
