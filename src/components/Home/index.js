import "./index.css";
import "./animation.css";

import SocialLink from "../SocialLinks/social";

const Home = () => (
  <div className="div-width" id="HomeSection">
    <h1 className="welcome">
      Welcome<span className="blog-title-emoji">👋</span>
    </h1>
    <div className="flip">
      <div className="content">
        <div className="front">
          <img
            src="/images/profile-removebg-preview.png"
            alt="profile"
            className="rounded-img"
          />
          <h5 className="name">
            Hi,
            <br />
            I'm <span style={{ color: "#F3B934" }}>K</span>umaran J
            <br />
          </h5>
        </div>
        <div className="back">
          <p>Associate Software Developer</p>
        </div>
      </div>
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://drive.google.com/file/d/14bu6M1g5WLH29Pz9D8IMiq7V5DNN7m05/view"
      className="nav-link"
    >
      <button className="download-btn">Download CV</button>
    </a>
    <SocialLink />
  </div>
);
export default Home;
