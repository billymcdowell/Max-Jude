import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {DataContext} from "../Context/DataContext"

export default function NavDrawer(props, match) {
  const [showDrawer, setShowDrawer] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const data = useContext(DataContext);

  console.log(data)

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      setShowDrawer(false);
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      setShowDrawer(true);
    }
  }

  return (
    <div
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
      onTouchEnd={() => handleTouchEnd()}
    >
      <div
        className={
          props.state
            ? "naviconcontainer icon-scrolled"
            : "naviconcontainer icon-unscrolled"
        }
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <svg width="20" height="20">
          <rect width="20" height="2"></rect>
          <rect y="7.5" width="14" height="2"></rect>
          <rect y="15" width="20" height="2"></rect>
        </svg>
      </div>
      <div
      onClick={() => setShowDrawer(!showDrawer)}
        className={
          !showDrawer
            ? "navdrawer-container navdrawer-container_shown"
            : "navdrawer-container navdrawer-container_hidden"
        }
      >
<div className="navdrawerlogocontainer" >
  <nav>
<Link to="/">
<img src="/img/Logo/Logo.png" alt="Logo" height="48" style={{ filter: "invert(1)", padding: "6px" }}/>
        </Link>

<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
</nav>
</div>
<div className="Navdrawerlist" onClick={ () => showDrawer ? setShowDrawer(true) : setShowDrawer(false) }>


{data[0].map((data, index) => (
  <div className="navdrawerlink" key={data.id}>
                <Link
                  to={`/work/${data.id}`}
                  replace
                >
                  <div>
                      {data.title}
                    </div>
                </Link>
                </div>
              ))}    
          </div>    
      </div>
    </div>
  );
}
