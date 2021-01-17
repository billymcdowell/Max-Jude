import React, { useState, createContext, useEffect } from "react";

export const ImageListContext = createContext();

export const ImageListProvider = props => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("https://theartistmaxjude.co.uk/wp-json/wp/v2/work?_embed")
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


        return (<ImageListContext.Provider value={[data, setData]}>{props.children}</ImageListContext.Provider>);

}; 