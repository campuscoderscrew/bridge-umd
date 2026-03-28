import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center text-white z-50"
      style={{ backgroundColor: "#3ab0b0" }}
    >
      {/* Bridge silhouette */}
      <div
        className="w-full max-w-md h-24 bg-contain bg-center bg-no-repeat mb-8"
        style={{ backgroundImage: "url('/truss_bridge.png')", filter: "brightness(0.4)" }}
      />

      <h1 className="text-8xl font-bold mb-2" style={{ fontFamily: "'Zuume Rough', sans-serif", color: "#1a2a3a" }}>
        Error 404
      </h1>
      <p className="text-lg mb-8" style={{ color: "#1a2a3a" }}>
        Oops! The page is not found...
      </p>

      <Link to="/">
        <button
          className="px-8 py-3 rounded-xl font-semibold text-white text-sm"
          style={{ backgroundColor: "#2E4052", border: "none" }}
        >
          Go to Homepage
        </button>
      </Link>

      <footer className="absolute bottom-4 text-xs" style={{ color: "#1a2a3a99" }}>
        Empowered and Hosted by Campus Coder Crew. Copyright © 2024 BridgeUMD. All Rights Reserved.
      </footer>
    </div>
  );
}
