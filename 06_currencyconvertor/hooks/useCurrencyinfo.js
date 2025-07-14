import { useEffect, useState } from "react";

function useCurrencyinfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
        );
        const result = await res.json();

        if (result && result[baseCurrency]) {
          setData(result[baseCurrency]);
        } else {
          setData({});
        }
      } catch (err) {
        console.error("Currency API fetch error:", err);
        setData({});
      }
    };

    fetchData();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyinfo;
