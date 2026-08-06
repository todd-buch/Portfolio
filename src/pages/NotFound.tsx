import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <h1>Page not found</h1>
        <p>That page doesn&apos;t exist — or maybe it moved.</p>
        <Link to="/" className="not-found-home">
          Back to home
        </Link>
      </div>
    </main>
  );
}
