import "./index.css";
import "./animation.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Home = () => (
  <>
    <div className="flip">
      <div className="content">
        <div className="front">
          <img
            src="/images/profile-removebg-preview.png"
            alt="profile"
            className="rounded-img"
          />
          <h5 className="name">Kumaran Jaisankar</h5>
        </div>
        <div className="back">
          <p>I'm &nbsp; Aspiring Front-end Developer</p>
        </div>
      </div>
    </div>
    <button className="download-btn">View my CV</button>
    <ul class="wrapper">
      <li class="icon facebook">
        <span class="tooltip">Github</span>
        <AiFillGithub color="black" size={30} />
      </li>
      <li class="icon twitter">
        <span class="tooltip">Linkedin</span>
        <span>
          <AiOutlineLinkedin color="black" size={30} />
        </span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span>
          <AiOutlineInstagram color="black" size={30} />
        </span>
      </li>
      <li class="icon whatsapp">
        <span class="tooltip">whatsapp</span>
        <span>
          <AiOutlineWhatsApp color="black" size={30} />
        </span>
      </li>
    </ul>
  </>
);
export default Home;
