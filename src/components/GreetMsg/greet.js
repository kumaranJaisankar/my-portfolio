import SocialLink from "../SocialLinks/social";

const GreetMsg = () => (
  <div
    style={{ backgroundColor: "black" }}
    className=" w-100 d-flex flex-column align-items-center justify-content-center"
  >
    <h4 className="text-white text-warning">Kumaran jaisankar</h4>
    <p className="greet-text w-50 text-center mt-2">
      Thank you for taking your time and reading my site, If you like this
      portfolio template, make sure to give star ⭐ to the{" "}
      <a
        className="text-warning"
        href="https://github.com/kumaranJaisankar/my-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        repository
      </a>{" "}
      to make it more recognizable for other users. Thank you 💜
    </p>
    <p className="greet-text w-50 text-center mt-2">
      Feel free to contact me over the social networks.
    </p>
    <SocialLink />
  </div>
);
export default GreetMsg;
