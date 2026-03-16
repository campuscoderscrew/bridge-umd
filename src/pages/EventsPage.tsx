import { useState } from "react";

const events = [
  {
    title: "Drug Regulation in the US",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Sept",
    time: "4:00 - 6:00 PM",
    tag: "Politics",
    upcoming: true,
  },
  {
    title: "Drug Regulation in Density",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Sept",
    time: "4:00 - 6:00 PM",
    tag: "Health",
    upcoming: true,
  },
  {
    title: "Drug Regulation in Florida",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Sept",
    time: "4:00 - 6:00 PM",
    tag: "Policy",
    upcoming: true,
  },
  { title: "Drug Regulation in Harris", location: "Location", date: "17", month: "Sept", time: "6:00 PM", tag: "Law", upcoming: true },
  {
    title: "Drug Regulation in Eberle",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Sept",
    time: "4:00 - 6:00 PM",
    tag: "Science",
    upcoming: true,
  },
  {
    title: "Drug Regulation in Texas",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Sept",
    time: "4:00 - 6:00 PM",
    tag: "Politics",
    upcoming: true,
  },
  {
    title: "Drug Regulation in the US",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Feb",
    time: "4:00 - 6:00 PM",
    tag: "Politics",
    upcoming: false,
  },
  {
    title: "Drug Regulation in Density",
    location: "Tawes Hall 0236",
    date: "17",
    month: "Jan",
    time: "4:00 - 6:00 PM",
    tag: "Health",
    upcoming: false,
  },
  {
    title: "Drug Regulation in Florida",
    location: "Tawes Hall 0236",
    date: "10",
    month: "Dec",
    time: "4:00 - 6:00 PM",
    tag: "Policy",
    upcoming: false,
  },
];



export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past" | "all">("upcoming");
  const [search, setSearch] = useState("");

  const filtered = events.filter(
    (e) =>
      (tab === "all" ? true : tab === "upcoming" ? e.upcoming : !e.upcoming) &&
      e.title.toLowerCase().includes(search.toLowerCase()),
  );

  const nextEventIndex = filtered.findIndex((e) => e.upcoming);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "Raleway, sans-serif" }}>
      {/* ── HEADER ── */}
      <div
        className="py-8 px-4 sm:px-10 text-center text-white"
        style={{
          background:
            "linear-gradient(0deg, #FFFFFF 0%, rgba(133, 202, 192, 0.9) 5.77%, rgba(133, 202, 192, 0.9) 94.71%, #85CAC0 100%), url('/src/assets/adam2 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Zuume Rough', sans-serif", color: "#2E4052" }}>
          Events
        </h1>
        {/* Search */}
        <div className="flex justify-center mb-4 w-full max-w-lg mx-auto px-2 sm:px-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search "Puppies and Politics" or "Drug Regulation of Dogs"'
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-700 text-sm outline-none"
            style={{ backgroundColor: "#ffffff" }}
          />
          <button
            className="px-4 py-2 rounded-r-lg text-white text-sm font-semibold"
            style={{ backgroundColor: "#2E4052", border: "none" }}
          >
            Search
          </button>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setTab("all")}
            className="px-5 py-1.5 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: tab === "all" ? "#2E4052" : "transparent",
              color: "#fff",
              border: "1.5px solid #fff",
              cursor: "pointer",
            }}
          >
            All Events
          </button>
          {(["upcoming", "past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-1.5 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: tab === t ? "#2E4052" : "transparent",
                color: "#fff",
                border: "1.5px solid #fff",
                cursor: "pointer",
              }}
            >
              {t === "upcoming" ? "Upcoming Events" : "Past Events"}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="px-4 sm:px-8 py-8 max-w-4xl mx-auto">
        {filtered.length === 0 && <p className="text-center text-gray-500 mt-10">No events found.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((ev, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-sm flex flex-col relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Event badge */}
              {(i === nextEventIndex && ev.upcoming) || !ev.upcoming ? (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: ev.upcoming ? "#85CAC0" : "#2E4052",
                      color: ev.upcoming ? "#2E4052" : "#ffffff",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      padding: "8px 10px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {ev.upcoming ? "NEXT" : "PAST"}
                  </div>
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "18px solid transparent",
                      borderRight: "18px solid transparent",
                      borderBottom: "7px solid white",
                      marginTop: "-7px",
                    }}
                  />
                </div>
              ) : null}

              {/* Date & Time header */}
              <div className="w-full flex items-center px-4 py-3 gap-2" style={{ backgroundColor: "#ffffff" }}>
                <div className="text-xs font-normal" style={{ color: "#2E4052" }}>
                  {ev.month} {ev.date}
                </div>
                <div className="text-xs font-normal" style={{ color: "#2E4052" }}>
                  | {ev.time}
                </div>
              </div>

              {/* Card body */}
              <div className="p-3 flex flex-col flex-1">
                <p className="text-xs font-bold mb-0.5" style={{ color: "#2E4052" }}>
                  {ev.title}
                </p>
                <p className="text-xs mb-2" style={{ color: "#6a8090" }}>
                  Join us for an open discussion exploring multiple perspectives on this topic. All viewpoints are
                  welcome as we work together to bridge the gap and foster meaningful dialogue on campus...
                </p>
                <a
                  href="https://maps.google.com/?q=Tawes+Hall,+University+of+Maryland,+College+Park,+MD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs mb-3 block"
                  style={{ color: "#6a8090", textDecoration: "underline" }}
                >
                  {ev.location}
                </a>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="https://www.instagram.com/bridgeumd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button
                      className="w-full py-1 rounded-lg font-semibold text-white"
                      style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer", fontSize: "0.6rem" }}
                    >
                      View IG Poster
                    </button>
                  </a>
                  <button
                    className="flex-1 py-1 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer", fontSize: "0.6rem" }}
                  >
                    + Cal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SHOW MORE ── */}
      <div className="flex justify-center py-6">
        <button
          className="px-8 py-2 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: "#2E4052", border: "none", cursor: "pointer" }}
        >
          Show More
        </button>
      </div>

      {/* ── FOOTER ── */}
      <footer className="py-6 text-center text-xs" style={{ backgroundColor: "#2E4052", color: "#ffffff" }}>
        Designed and Coded by Campus Coder Crew. Copyright © 2024 BridgeUMD. All Rights Reserved.
      </footer>
    </div>
  );
}
