import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios("http://10.0.2.2:3000/api/products/");
      setData(response.data);
    } catch (error) {
      setError(error.message); // Set error message instead of the entire error object
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Dependency array is empty; effect runs only once on component mount

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
