import "./index.css";
const date = new Date();
export default function Footer() {
  return (
    <footer className="bg-dark footer-f">
      <p className="text-white">
        Copy right @ kumaran jaisankar {date.getFullYear()}
      </p>
    </footer>
  );
}
