import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {DarkmodeContext} from "../Context/DarkmodeContext"
import {DataContext} from "../Context/DataContext"

export default function ImageList() {
  const darkmode = useContext(DarkmodeContext);
  const data = useContext(DataContext);

  const isChrome = navigator.userAgent.indexOf("Chrome") !== -1

 return (
   
<>
{!data ? (() => {
        return (
          
          <div>
            <div className="grid-container skeleton_loading_animation">
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
            </div>
          </div>


        );
      })() : (() => {
        return (
          
          <div>
            <div id="darkmode-img-container"  className={darkmode[0] ? "grid-container darkmode-img" : "grid-container"}>
              {data[0].map((data, index) => (
                <Link
                  to={`work/${data.id}`}
                  style={{
                    backgroundImage: `url(${isChrome ? data.images[0].url + ".webp" : data.images[0].url + ".jpg"})`
                  }}
                  
                  id="darkmode-img"
                  key={data.id}
                >
                  <div>
                    <div className="link-new">
                      {data.title}
                      <span>&#8594;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          
          
        );
      })()}

</>

 )}
