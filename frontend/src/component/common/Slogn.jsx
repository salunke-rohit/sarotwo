import "./Slogn.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export default function Demo({ className = "" }) {
  return (
    <div className={`mainImg ${className}`}>
      <div className="avatar">
        <img src={img1} alt="img1" />
      </div>

      <div className="avatar">
        <img src={img2} alt="img2" />
      </div>

      <div className="avatar">
        <img src={img3} alt="img3" />
      </div>

      <p className="trustText">
        Your Vision. <span>My Code.</span> 
      </p>
    </div>
  );
}