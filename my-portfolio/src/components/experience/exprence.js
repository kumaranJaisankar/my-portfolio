import "./exprence.css";
import { Chrono } from "react-chrono";
import { MdSchool } from "react-icons/md";

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
          <img
            src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/about.png"
            alt="twitter"
          />
          <MdSchool color="#f3b934" size={40} />
        </div>
        <div style={{ backgroundColor: "red" }}>
          <h1>school</h1>
        </div>
        <div>
          <h1>school</h1>
        </div>
        <div>
          <h1>school</h1>
        </div>
      </Chrono>
    </div>
  );
};
export default Expirence;
