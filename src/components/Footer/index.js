import "./index.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const date = new Date();
export default function Footer() {
  return (
    <footer className="bg-dark footer-f">
      <p className="text-white">
        Copy right <AiOutlineCopyrightCircle /> kumaran jaisankar{" "}
        {date.getFullYear()}
      </p>
    </footer>
  );
}
