import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        // API URL to fetch currency data for the specified currency
        let api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
        
        // Fetching data from the API
        const response = await fetch(api_url);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        
        // Parsing the JSON response
        const result = await response.json();
        
        // Setting the fetched data to the state
        setData(result[currency] || {});
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyInfo();
  }, [currency]); // Dependency array, re-fetch when `currency` changes

  return data; // Returning the fetched data
}

export default useCurrencyInfo;
