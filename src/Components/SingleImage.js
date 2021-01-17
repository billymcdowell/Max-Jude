import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {DarkmodeContext} from "../Context/DarkmodeContext"
import {DataContext} from "../Context/DataContext"


export default function SingleImage({match}) {
  const data = useContext(DataContext);
  const darkmode = useContext(DarkmodeContext);


const singleData = data[0].find(function(e) {
  return e.id === `${match.params.id}`;
});

  return !singleData
    ? (() => {
        return (
          <div>
            <div className="skeleton_container">
              <div className="skeleton_text_container skeleton_loading_animation">
                <div className="skeleton_title">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
              </div>

              <div className="skeleton_img loading_animation"></div>
            </div>
          </div>
        );
      })()
    : (() => {
        return (
          <div>
            <div className="single_img_block">
              <div>
                <div style={{ position: "sticky", top: "65px"}}>
                  <h1
                    style={{ marginBottom: "1rem" }}
                  >
                    {singleData.title}
                  </h1>
                  <p>{singleData.description}</p>
                </div>
              </div>
              <div id="darkmode-img-container" className={darkmode[0] ? "darkmode-img" : ""}>
                {singleData.images.map((images, index) =>(
                    <div key={index} >

                        <picture>
                        <source srcSet={images.url + ".webp"} type="image/webp" className="single_img" id="darkmode-img" alt={images.title} />
                        <source srcSet={images.url + ".jpg"} type="image/jpeg"  className="single_img" id="darkmode-img" alt={images.title} />
                        <img src={images.url} className="single_img" id="darkmode-img" alt={images.title} />
                        </picture>
                  </div>
              ))}
            </div>
            </div>
          </div>
        );
      })();
}
