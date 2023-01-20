import "./project.css";
import { BiLinkExternal } from "react-icons/bi";

const MyProject = () => {
  return (
    <article id="Myproject">
      <h1 className="text-center text-white mb-3 my-project">MY PROJECTS</h1>

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
          href="https://kumemojigame.ccbp.tech/"
          className="nav-link cards   mb-3 mr-3"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cards-img emoji-game">
            <h1 className="text-dark mt-3 ml-3">Emoji Game</h1>
          </div>
          <div className="cards-info">
            <p className="text-title">Emoji Game</p>

            <a
              href="https://kumemojigame.ccbp.tech/"
              rel="noreferrer"
              target="_blank"
              className="nav-link"
            >
              <button className="cards-button">
                View <BiLinkExternal />
              </button>
            </a>
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
