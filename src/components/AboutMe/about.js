import "./about.css";
const hi = "Hi :)";

const AboutMe = () => (
  <div className="about-container" id="AboutMe">
    <h1 className="aboutme-heading">ABOUT ME</h1>
    <div className="containers">
      <div className="container_terminal"></div>
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user">WHO AM I?</p>
      </div>
      <div className="terminal_body bg-black">
        <div className="terminal_promt">
          <span className="terminal_user">kumaran@28/04/2000:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
        </div>
        <h3 className="user-text " style={{ fontWeight: "500" }}>
          {hi}
        </h3>
        <p className="user-text">
          My name is KUMARAN JAISANKAR  and I am currently working as Associate Software Developer at Vanna info tech. I
          have completed Bachelor of Engineering in Mechanical Engineering from
          Misrimal Navajee Munoth Jain Engineering, Chennai . I am much
          interested in developing new things which excite me a lot. :)
          <br /> I love exploring new technologies and being a practitioner, I
          like to stay on top of latest trends. I try to leave every line of
          code I write more readable, accessible, and modular.
          <span className="terminal_cursor"></span>
        </p>
        <span className="terminal_bling">.</span>
      </div>
    </div>
  </div>
);
export default AboutMe;
