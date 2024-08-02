import "./project.css";
import { BiLinkExternal } from "react-icons/bi";
import Lottie from "react-lottie";
import animationData from "../../lottie/Animation - 1722505523448.json";

const MyProject = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <article id="Myproject">
      <h1 className="text-center text-white mb-0 my-project mt-5">
        MY PROJECTS
      </h1>

      <div className="row-2">
        <a
          href="https://kumskitchen.ccbp.tech/"
          rel="noreferrer"
          target="_blank"
          className="nav-link cards   mb-3 mr-3"
        >
          <div className="cards-img tasty-kitchen">
            <h1 className="text-dark mt-3 ml-3">Tasty Kitchen</h1>
          </div>
          <div className="cards-info">
            <p className="text-title">Tasty Kitchen</p>
            <p className="text-white">
              Online Food Ordering System like Swiggy/Zomato where users can see
              popular restaurants with sort by rating, specic restaurant
              details, adding or removing food items to cart, and payments
              section.
              <b className="text-danger">USERNAME:rahul,PASSWORD :rahul@2021</b>
            </p>
            <a
              href="https://kumskitchen.ccbp.tech/"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              <button className="cards-button">
                View <BiLinkExternal />
              </button>
            </a>
          </div>
        </a>
        <a
          href="https://kum-gen-ai.vercel.app/"
          className="nav-link  mb-3 mr-3 p-0"
          target="_blank"
          rel="noreferrer"
        >
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <Lottie options={defaultOptions} height={400} width={400} />
            <div className="gen_ai ">
              <p
                style={{
                  textAlign: "center",
                  padding: 0,
                  margin: 0,
                  color: "#e9b013",
                }}
              >
                Visit
              </p>
              <h1
                style={{
                  textAlign: "center",
                  padding: 0,
                  margin: 0,
                  color: "#e9b013",
                }}
              >
                Kum's GenAI
              </h1>
            </div>
          </div>
        </a>
        <a
          href="https://kumjobby.ccbp.tech/login"
          rel="noreferrer"
          target="_blank"
          className="nav-link cards  mb-3  mr-3"
        >
          <div className="">
            <div className="cards-img job-app">
              <h1 className="text-dark mt-3 ml-3">Jobby App</h1>
            </div>
            <div className="cards-info">
              <p className="text-title">Jobby App</p>
              <p className="text-white">
                Jobby App where users can log in and can see a list of jobs with
                search by Job title, lters based on Salary range and Employment
                type, etc{" "}
                <b className="text-danger">
                  USERNAME:rahul,PASSWORD :rahul@2021
                </b>
              </p>
              <a
                href="https://kumjobby.ccbp.tech/"
                rel="noreferrer"
                target="_blank"
                className="nav-link"
              >
                <button className="cards-button">
                  View <BiLinkExternal />
                </button>
              </a>
            </div>
          </div>
        </a>
      </div>
    </article>
  );
};
export default MyProject;
