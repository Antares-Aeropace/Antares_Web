import { useState } from "react";
import "../styles/components/ProjectCard.css";


type Props = {
    title: string,
    img: string,
    text: string
}

const ProjectCard = ({title, img, text}:Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`${isHover?"project-card-hover":"project-card"}`}>
        <img src={img} alt="proyecto imagen"  className={`${isHover ? "hover-img":"project-card-img"}`}/>
        <div className="project-card-content">
            <h3 className={`${isHover?"hover-title":""}`}>{title}</h3>
            <p className={`${isHover?"project-card-text-hidden":""}`}>{text}</p>
            <button
            className="project-card-btn"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
            Conocer mas...
            </button>
        </div>
    </div>
  );
};

export default ProjectCard;
