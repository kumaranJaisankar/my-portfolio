import { useEffect } from "react";
import "./animation.css";
import "./index.css";
const logo = "kum's";

const Header = () => {
  let prevScrollPos = window.pageYOffset + 1;
  function scrollFunc(e) {
    let showclass = document.getElementsByClassName(".show");

    // current scroll position
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (prevScrollPos < currentScrollPos) {
      // user has scrolled up

      document.querySelector(".navbar").classList.remove("show");
    } else if (window.pageYOffset == 0) {
      document.querySelector(".navbar").classList.remove("show");
    } else {
      // user has scrolled down
      document.querySelector(".navbar").classList.add("show");
    }

    // update previous scroll position
    prevScrollPos = currentScrollPos;
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <a
        className="text-flicker-in-glow logo-style navbar-brand ml-xl-5"
        href="#HomeSection"
      >
        <span className="yello">{"<"}</span>
        {logo}
        <span className="yello">{"/>"}</span>
      </a>
      <button
        className="navbar-toggler nav-color"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto mr-xl-5">
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe">
              <button className="cta">
                <span className="hover-underline-animation">
                  ABOUT <span className="sr-only">(current)</span>
                </span>
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Myproject">
              <button className="cta">
                <span className="hover-underline-animation">
                  PROJECTS <span className="sr-only">(current)</span>
                </span>
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#MySkills">
              <button className="cta">
                <span className="hover-underline-animation">
                  SKILLS <span className="sr-only">(current)</span>
                </span>
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ContactMe">
              <button className="cta">
                <span className="hover-underline-animation">
                  CONTACT <span className="sr-only">(current)</span>
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
