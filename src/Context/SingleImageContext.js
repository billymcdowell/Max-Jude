import React, { useState, createContext, useEffect, useParams } from "react";

export const SingleImageContext = createContext();

export const SingleImageProvider = props => {
        const [data, setData] = useState([]);
        const [path, setPath] = useState('');


        useEffect(() => {
            
            fetch(`https://theartistmaxjude.co.uk/wp-json/wp/v2/work/${path}`)
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


        return (<SingleImageContext.Provider value={{data, setPath}}>{props.children}</SingleImageContext.Provider>);

}; 