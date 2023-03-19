import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.warn(e.message);
        setError("Error fetching data. Please try again");
        setLoading(false);
      });
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
