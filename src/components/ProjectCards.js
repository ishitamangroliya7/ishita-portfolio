import { Col } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-banner" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}<a href={githubUrl} target="_blank" rel="noopener noreferrer"><FaArrowAltCircleRight /></a></span>
        </div>
      </div>
    </Col>
  )
}