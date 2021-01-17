import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = props => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("/Data.json")
              .then(async (response) => {
                const data = await response.json();
                if (!response.ok) {
                  const error = (data && data.message) || response.statusText;
                  return Promise.reject(error);
                }
                setData(data);
              })
              .catch((error) => {
                console.error("There was an error!", error);
              });
          }, []);


        return (<DataContext.Provider value={[data, setData]}>{props.children}</DataContext.Provider>);

}; 