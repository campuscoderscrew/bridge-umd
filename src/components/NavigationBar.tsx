import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Officers", to: "/officers" },
  { label: "Archive", to: "/archive" },
];

export default function NavigationBar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="w-full flex items-center justify-between py-3 sticky top-0 z-50"
      style={{ paddingLeft: "clamp(0.75rem, 4vw, 6rem)", paddingRight: "clamp(0.75rem, 4vw, 6rem)", backgroundColor: "#85CAC0", fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="no-underline flex-shrink-0"
        style={{ color: "#2E4052", textDecoration: "none", fontSize: "clamp(0.9rem, 3vw, 1.125rem)" }}
      >
        <span style={{ fontWeight: 700 }}>Bridge</span>
        <span style={{ fontWeight: 400 }}>UMD</span>
        <sup style={{ fontSize: "0.5rem" }}>™</sup>
      </Link>

      {/* Nav links */}
      <div className="flex" style={{ gap: "clamp(0.5rem, 2.5vw, 3rem)" }}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="no-underline transition-colors"
            style={{
              color: "#2E4052",
              textDecoration: "none",
              fontWeight: pathname === l.to ? 700 : 400,
              fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
