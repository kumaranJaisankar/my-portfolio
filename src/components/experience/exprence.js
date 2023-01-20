import "./exprence.css";
import { Chrono } from "react-chrono";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";
import { MagnifyingGlass } from "react-loader-spinner";

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
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#f3b934"
          />
          <p style={{ color: "white" }}>Searching...</p>
        </div>
        <div>
          <h1 className="course-title">
            Nxtwave Disruptive Technologies{" "}
            <span className="badge badge-secondary p-1">
              May'2022 - Ongoing
            </span>
          </h1>
          <p className="discription">
            Industry Ready Certication in Full-stack Development
          </p>
        </div>
        <div>
          <h1 className="course-title">
            Undergraduation at MNM jain Eng{" "}
            <span className="badge badge-secondary p-1">2017-2021</span>
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
