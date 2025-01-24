import React, { useRef, useState } from "react";
import Popup from "reactjs-popup";
import emailjs from "@emailjs/browser";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import "./email.css";

const ConnectEmail = () => {
  const form = useRef();
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState(false);

  const closingTime = (close) => {
    setTimeout(() => close(), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmited(false);
    setIsError(false);

    emailjs
      .sendForm(
        "service_pq5bka9",
        "template_79e0149",
        form.current,
        "uhvAnMujmqCodJswt"
      )
      .then(
        (result) => {
          setIsError(false);
          setIsSubmited(true);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          setIsError(true);
          setIsSubmited(false);
          console.log(`error ${error.text}`);
        }
      )
      .catch((e) => console.log(`failes ${e}`));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="col-md-12 col-xl-5 w-75 mb-5"
    >
      <label>Name</label>
      <input
        type="text"
        className="form-control h-25"
        name="from_name"
        placeholder="Your Name"
      />
      <label>Email</label>
      <input
        className="form-control h-25"
        type="email"
        name="reply_to"
        placeholder="Your Mail Id"
      />
      <label>Message</label>

      <textarea
        rows={5}
        className="form-control"
        name="message"
        placeholder="Write Something to convey to me"
      />
      <button
        type="submit"
        className="btn-warning form-control h-25 rounded-pill font-weight-bold btn-size mt-2"
      >
        send
      </button>
      <Popup open={isSubmited} modal>
        {(close) => {
          closingTime(close);
          return (
            <div className="feedback-container bg-dark p-4 rounded-sm d-flex align-items-center">
              <BsFillCheckCircleFill color="green" size={20} />
              <h6 className="text-white ml-2">
                Message Submitted, Within 24hours you get reply
              </h6>
            </div>
          );
        }}
      </Popup>
      <Popup open={isError} modal>
        {(close) => {
          closingTime(close);
          return (
            <div className="error-container bg-dark p-4 rounded-sm d-flex align-items-center">
              <BiErrorCircle color="red" size={20} />
              <h6 className="text-white ml-2">Something Wrong!</h6>
            </div>
          );
        }}
      </Popup>
    </form>
  );
};

export default ConnectEmail;
