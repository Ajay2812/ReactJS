import { useEffect, useState } from "react";

import Background from "./Components/background";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import arrow_btn from "./assets/arrow_btn.png";
import pause_icon from "./assets/pause_icon.png"
import play_icon from "./assets/play_icon.png"


export default function App() {
  const images = [image1, image2, image3];

  let heroData = [
    { text1: "Dive into", text2: "What you love?" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [playStatus, setPlayStatus] = useState(false);
  const [count, setCount] = useState(0);
  const c=count%images.length
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCount(prev=>prev+1 % images.length)
    },3000);
    return ()=>clearInterval(interval)
},[])
  return (
    <div className="main-container">
      <Background playStatus={playStatus} count={count} />
      <div className="header">
        <div className="title">
          <h2>EV-olution</h2>
        </div>
        <div className="items">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">About</a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
      </div>


      <div className="main">
        <div className="info">
          <h2>
            {heroData[c].text1}
            <br />
            {heroData[c].text2}
          </h2>
          <button className="explore">
            Explore the features <img src={arrow_btn} />
          </button>
        </div>
        <div className="bottom">
        </div>
      </div>


      <div className="bottom">
        <div>
        <div onClick={()=>setCount(0)} className={c===0? "red":"circle"}></div>
        <div onClick={()=>setCount(1)} className={c===1? "red":"circle"}></div>
        <div onClick={()=>setCount(2)} className={c===2? "red":"circle"}></div>
      </div>
      <div  className="vc">
        <img onClick={()=> setPlayStatus(prev=> !prev)} src={!playStatus?play_icon:pause_icon} alt=""/>
        <p>See the Video</p>
      </div>
      </div>

      
    </div>
  );
}
