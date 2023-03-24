import "./contactme.css";
import ConnectEmail from "../ConnectEmail/email";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";

const ContactMe = () => (
  <div className="contact-container pb-3" id="ContactMe">
    <h2 className="connect-me text-warning">CONTACT ME</h2>
    <h1 className="text-white text-center">Get in Touch</h1>

    <div className="container-lg container-sm ">
      <div className="row justify-content-between">
        <ConnectEmail />

        <div className="col-md-12 col-xl-4 w-75 ">
          <div className="contact-box d-flex flex-row align-items-center mt-3">
            <div className="icone-round bg-warning rounded-circle mr-4">
              <AiFillPhone color="white" size={30} />
            </div>
            <div>
              <h4 className="text-white">Call Me</h4>
              <p className="contact-details ">+91 9092296765</p>
            </div>
          </div>
          <div className="contact-box d-flex flex-row align-items-center mt-5">
            <div className="icone-round bg-warning rounded-circle mr-4">
              <MdEmail color="white" size={30} />
            </div>
            <div>
              <h4 className="text-white">E-mail</h4>
              <a href="mailto:kumaranhb5@gmail.com" className="nav-link">
                <p className="contact-details ">kumaranhb5@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="contact-box d-flex flex-row align-items-center mt-4">
            <div className="icone-round bg-warning rounded-circle mr-4">
              <MdLocationPin color="white" size={30} />
            </div>
            <div>
              <h4 className="text-white">Location</h4>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Pettai+St,+Guruswamy+Nagar,+Anakaputhur,+Chennai,+Tamil+Nadu+600070/@12.9816952,80.1274557,19.86z/data=!4m13!1m7!3m6!1s0x3a525fd9161eb467:0xf88be4328061d8e8!2sPettai+St,+Guruswamy+Nagar,+Anakaputhur,+Chennai,+Tamil+Nadu+600070!3b1!8m2!3d12.9818395!4d80.1275526!3m4!1s0x3a525fd9161eb467:0xf88be4328061d8e8!8m2!3d12.9818395!4d80.1275526"
                className="nav-link correction"
              >
                <p className="contact-details">
                  No:19, pettai street, Anakaputhur <br /> Chennai, Tamil Nadu,
                  India <br />
                  Pincode-600070
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
);
export default ContactMe;
