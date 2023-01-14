import "./index.css";
import "./animation.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Home = () => (
  <div className="div-width" id="HomeSection">
    <h1 className="welcome">Welcome</h1>
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
          <p>I'm &nbsp; Aspiring Front-end Developer</p>
        </div>
      </div>
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://drive.google.com/file/d/10xSSCbc9-D-ReyrD30iAMNVVhIWHTQGg/view?usp=drivesdk"
      className="nav-link"
    >
      <button className="download-btn">Download CV</button>
    </a>
    <ul class="wrapper">
      <li class="icon instagram">
        <span class="tooltip">Mail</span>
        <span>
          <a
            className="d-xl-none d-sm-block"
            href="mailto:kumaranhb5@gmail.com"
          >
            <AiOutlineMail color="black" size={30} />
          </a>
          <a
            className="d-none d-xl-block"
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwTLFhTtbZTPndPQSZrcGTGQWqzbKjWVcRrkhMHPLnbSNpzpgrDXdJXcmxNqvqmmBsbkB"
          >
            <AiOutlineMail color="black" size={30} />
          </a>
        </span>
      </li>
      <li class="icon facebook">
        <span class="tooltip">Github</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kumaranJaisankar"
        >
          <AiFillGithub color="black" size={30} />
        </a>
      </li>
      <li class="icon twitter">
        <span class="tooltip">Linkedin</span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kumaran28/"
          >
            <AiOutlineLinkedin color="black" size={30} />
          </a>
        </span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/_the_sn_of_god?igshid=YmMyMTA2M2Y="
          >
            <AiOutlineInstagram color="black" size={30} />
          </a>
        </span>
      </li>
      <li class="icon whatsapp">
        <span class="tooltip">whatsapp</span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/message/QHOZJZT53PYTC1"
          >
            <AiOutlineWhatsApp color="black" size={30} />
          </a>
        </span>
      </li>
    </ul>
  </div>
);
export default Home;
