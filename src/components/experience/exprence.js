import "./exprence.css";
import { Chrono } from "react-chrono";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";
// import { MagnifyingGlass } from "react-loader-spinner";

const Expirence = () => {
  return (
    <div className="skills-container">
      <h1 className="exprience">MY JOURNEY</h1>
      <Chrono
        hideControls
        timelineCircleDimension={30}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#f3b934",
          secondary: "#484545",
          cardBgColor: "#484545",
          cardForeColor: "violet",
          titleColor: "black",
          titleColorActive: "red",
        }}
      >
        <div className="chrono-icons">
          <MdOutlineWork color="#f3b934" size={40} />
          <AiFillRead color="#f3b934" size={40} />
          <MdSchool color="#f3b934" size={40} />
        </div>
        <div>
        <h1 className="course-title">
            Exprience{" "}
            <span className="badge badge-secondary p-1">
              Aug'2020 - present
            </span>
          </h1>
          <p className="discription">
          I am currently working as Associate Software Developer at Vanna info tech  (Vanna Infotech is a leading software services company specializing in application development across all major software platforms) and boosting my professional skills.
          </p>
        </div>
        <div>
          <h1 className="course-title">
            Nxtwave Disruptive Technologies{" "}
            <span className="badge badge-secondary p-1">
              May'2020 - completed
            </span>
          </h1>
          <p className="discription">
            Industry Ready Certication in Full-stack Development
          </p>
        </div>
        <div>
          <h1 className="course-title">
            Undergraduation at MNM jain Eng{" "}
            <span className="badge badge-secondary p-1">2016-2020</span>
          </h1>
          <p className="discription">
            I completed my undergraduation in MECH from MNM jain Engineering
            with overall 79.21%.
          </p>
        </div>
      </Chrono>
    </div>
  );
};
export default Expirence;
