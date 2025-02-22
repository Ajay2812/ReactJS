import "./background.css"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import video1 from "../assets/video1.mp4"
export default function Background({playStatus,count}){
    const images=[image1,image2,image3]

    if(playStatus){
        return(
            <video className="bg" autoPlay loop muted>
                <source src={video1} type="video/mp4"/>
            </video>
        )
    }
    return <img src={images[count % images.length]} className="bg" alt=""/>


}