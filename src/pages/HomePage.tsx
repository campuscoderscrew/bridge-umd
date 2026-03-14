import { Link } from "react-router-dom";
import { useState } from "react";

const allEvents = [
  { title: "Drug Regulation in the US",  eventDate: new Date("2026-03-21"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
  { title: "Drug Regulation in Density", eventDate: new Date("2026-04-02"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
  { title: "Drug Regulation in Florida", eventDate: new Date("2026-04-18"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
  { title: "Drug Regulation in Harris",  eventDate: new Date("2025-12-10"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
  { title: "Drug Regulation in Density", eventDate: new Date("2026-01-17"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
  { title: "Drug Regulation in the US",  eventDate: new Date("2026-02-17"), time: "4:00 - 6:00 PM", location: "Tawes Hall 0236" },
];

const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function HomePage() {
  const [eventTab, setEventTab] = useState<"upcoming" | "past">("upcoming");
  const today = new Date(); today.setHours(0,0,0,0);
  const displayedEvents = allEvents
    .filter(e => eventTab === "upcoming" ? e.eventDate >= today : e.eventDate < today)
    .sort((a, b) => eventTab === "upcoming" ? a.eventDate.getTime() - b.eventDate.getTime() : b.eventDate.getTime() - a.eventDate.getTime())
    .slice(0, 3)
    .map(e => ({ ...e, month: monthNames[e.eventDate.getMonth()], date: String(e.eventDate.getDate()) }));
  return (
    <div className="font-sans text-white" style={{ backgroundColor: "#1a2a3a" }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full"
        style={{ backgroundColor: "#85CAC0" }}
      >
        {/* Bridge image with rounded corners and separation from edges */}
        <img
          src="/src/assets/bay_bridge_with_land.png"
          alt=""
          style={{ width: "100%", height: "auto", display: "block", maxHeight: "70vh", objectFit: "cover" }}
        />

        {/* Text content — scales with the section */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start z-10"
          style={{ padding: "clamp(0.5rem, 4vw, 3rem)", paddingTop: "clamp(1rem, 5vw, 5rem)" }}>
          <div style={{ maxWidth: "clamp(200px, 45vw, 600px)" }}>
            <h1
              className="font-bold leading-none mb-2"
              style={{ fontFamily: "'Zuume Rough', sans-serif", color: "#fff", fontSize: "clamp(1.8rem, 7vw, 6rem)", whiteSpace: "nowrap" }}
            >
              Bridge the Gap
            </h1>
            <p className="mb-4" style={{ color: "#000000", fontSize: "clamp(0.6rem, 1.5vw, 1.1rem)" }}>
              Join the movement to reshape campus conversations.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/events">
                <button
                  className="rounded-xl font-semibold text-white"
                  style={{ backgroundColor: "#2E4052", border: "none", padding: "clamp(0.3rem, 1vw, 0.75rem) clamp(0.6rem, 2vw, 1.5rem)", fontSize: "clamp(0.55rem, 1.2vw, 1rem)" }}
                >
                  Upcoming Events
                </button>
              </Link>
              <button
                className="rounded-xl font-semibold text-white"
                style={{ backgroundColor: "#2E4052", border: "none", padding: "clamp(0.3rem, 1vw, 0.75rem) clamp(0.6rem, 2vw, 1.5rem)", fontSize: "clamp(0.55rem, 1.2vw, 1rem)" }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MINDSET SECTION ── */}
      <section style={{ backgroundColor: "#2E4052" }} className="py-16 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Placeholder image box */}
          <div className="w-full md:w-1/2 h-48 sm:h-64 flex-shrink-0 rounded-lg" style={{ backgroundColor: "#c0c0c0" }} />
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Fredericka the Great', serif", color: "#ffffff" }}
            >
              BridgeUMD Mindset
            </h2>
            <p className="text-sm mb-3" style={{ color: "#ffffff" }}>
              BridgeUMD is the UMD chapter of BridgeUSA which is not about changing minds or creating centrists, but encouraging students to engage differing beliefs, experiences and perspectives. What unites us is not agreement on policies, but a shared mindset.
            </p>
            <p className="text-sm mb-3" style={{ color: "#ffffff" }}>
              Every discussion is run by moderators and these norms of discussion to ensure a productive dialogue.
            </p>
            <ol className="list-decimal list-inside text-sm space-y-1" style={{ color: "#ffffff" }}>
              <li>Listen to listen, not to respond</li>
              <li>Don't interrupt or have side conversations</li>
              <li>Address the statement, not the person</li>
              <li>Participants represent only themselves and not the groups they belong to</li>
            </ol>
            <a
              href="https://www.bridgeusa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#85CAC0", color: "#2E4052", textDecoration: "none" }}
            >
              Read More on BridgeUSA
            </a>
          </div>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ── */}
      <section style={{ backgroundColor: "#ffffff" }} className="text-gray-800">
        <img src="/src/assets/Vector 22.png" alt="" style={{ display: "block", width: "100vw", maxWidth: "100vw", height: "auto" }} />
        <div className="max-w-5xl mx-auto pb-16 px-4 sm:px-10">
          <h2 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Fredericka the Great', serif", color: "#2E4052" }}>
            Event List
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
            <button
              onClick={() => setEventTab("upcoming")}
              className="px-6 py-2 rounded-full font-semibold text-sm"
              style={{ backgroundColor: eventTab === "upcoming" ? "#2E4052" : "transparent", color: eventTab === "upcoming" ? "#ffffff" : "#2E4052", border: "2px solid #2E4052", cursor: "pointer" }}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setEventTab("past")}
              className="px-6 py-2 rounded-full font-semibold text-sm"
              style={{ backgroundColor: eventTab === "past" ? "#2E4052" : "transparent", color: eventTab === "past" ? "#ffffff" : "#2E4052", border: "2px solid #2E4052", cursor: "pointer" }}
            >
              Past Events
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {displayedEvents.map((ev, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm flex flex-col relative" style={{ backgroundColor: "#ffffff" }}>
                {/* NEXT badge */}
                {i === 0 && eventTab === "upcoming" && (
                  <div style={{ position: "absolute", top: 0, right: 12, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
                    <div style={{ backgroundColor: "#85CAC0", color: "#2E4052", fontSize: "0.55rem", fontWeight: 700, padding: "8px 10px", letterSpacing: "0.05em" }}>
                      NEXT
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "18px solid transparent", borderRight: "18px solid transparent", borderBottom: "7px solid white", marginTop: "-7px" }} />
                  </div>
                )}
                {/* Date & Time header */}
                <div className="w-full flex items-center px-4 py-3 gap-2" style={{ backgroundColor: "#ffffff" }}>
                  <div className="text-xs font-normal" style={{ color: "#2E4052" }}>{ev.month} {ev.date}</div>
                  <div className="text-xs font-normal" style={{ color: "#2E4052" }}>| {ev.time}</div>
                </div>
                {/* Square image placeholder */}
                <div style={{ width: "100%", aspectRatio: "1 / 1", backgroundColor: "#c0c0c0" }} />
                {/* Card body */}
                <div className="p-3 flex flex-col flex-1">
                  <p className="text-xs font-bold mb-0.5" style={{ color: "#2E4052" }}>{ev.title}</p>
                  <a href="https://maps.google.com/?q=Tawes+Hall,+University+of+Maryland,+College+Park,+MD" target="_blank" rel="noopener noreferrer" className="text-xs mb-3 block" style={{ color: "#6a8090", textDecoration: "underline" }}>{ev.location}</a>
                  <div className="flex gap-2 mt-auto">
                    <a href="https://www.instagram.com/bridgeumd/" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full py-1 rounded-lg font-semibold text-white" style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer", fontSize: "0.6rem" }}>
                        View IG Poster
                      </button>
                    </a>
                    <button className="flex-1 py-1 rounded-lg font-semibold text-white" style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer", fontSize: "0.6rem" }}>
                      + Cal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/events">
              <button className="px-8 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer" }}>
                View All Events
              </button>
            </Link>
          </div>
        </div>
        {/* Ocean waves */}
        <div style={{ position: "relative", width: "100%", height: "80px", marginTop: "2rem" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "60px", backgroundImage: "url('/src/assets/Vector 27.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", backgroundPosition: "0px bottom", opacity: 1 }} />
          <div style={{ position: "absolute", bottom: 8, left: 0, width: "100%", height: "60px", backgroundImage: "url('/src/assets/Vector 27.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", backgroundPosition: "80px bottom", opacity: 0.7 }} />
          <div style={{ position: "absolute", bottom: 16, left: 0, width: "100%", height: "60px", backgroundImage: "url('/src/assets/Vector 27.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", backgroundPosition: "160px bottom", opacity: 0.4 }} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-4 sm:px-10 text-center text-white" style={{ background: "linear-gradient(180deg, #408ABF 0%, #2E4052 100%)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Zuume Rough', sans-serif", color: "#ffffff" }}>
          Join the Movement!
        </h2>
        <p className="text-sm mb-4" style={{ color: "#ffffff" }}>
          Subscribe to our newsletter or follow us on social media.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-800 text-sm w-full max-w-xs"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Discord */}
          <a href="#" style={{ color: "#ffffff" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/bridgeumd/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bridge-umd-96a269273" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <p className="text-xs mt-6" style={{ color: "#607080" }}>
          Empowered and Hosted by Campus Coder Crew. Copyright © 2024 BridgeUMD. All Rights Reserved.
        </p>
      </footer>

      {/* ── BOTTOM FOOTER ── */}
      <footer className="py-6 text-center text-xs text-white" style={{ backgroundColor: "#2E4052" }}>
        Designed and Coded by Campus Coder Crew. Copyright © 2024 BridgeUMD. All Rights Reserved.
      </footer>
    </div>
  );
}
