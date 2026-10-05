import { Link } from "react-router-dom";
import type { Filter } from "../App";

export default function Nav({ onFilter }: { onFilter: (f: Filter) => void }) {
  const scrollToNewsletter = () =>
    document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="nav">
      <Link to="/" className="logo" onClick={() => onFilter("All")}>
        <span className="logo__mark" aria-hidden="true">
          L
        </span>
        Ly is <span className="logo__writing">writing…</span>
      </Link>
      <div className="nav__links">
        <Link to="/" className="nav__link" onClick={() => onFilter("All")}>
          Essays
        </Link>
        <Link to="/" className="nav__link" onClick={() => onFilter("Teardown")}>
          Teardowns
        </Link>
        <button type="button" className="nav__cta" onClick={scrollToNewsletter}>
          Subscribe ✦
        </button>
      </div>
    </nav>
  );
}
