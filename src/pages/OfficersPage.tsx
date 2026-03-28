const officers = [
  {
    name: "Calvin Chrisfield",
    role: "President",
    classYear: "202X",
    major: "Public Policy",
    minor: "Spanish + Korean",
    favGame: "Just Dance",
    photo: undefined,
  },
  {
    name: "Anika Darbari",
    role: "VP of External Affairs and Communications",
    classYear: "202X",
    major: "Neuroscience",
    minor: "Spanish",
    favGame: "A Little to the Left",
    photo: undefined,
  },
  {
    name: "Alex Patron",
    role: "VP of Finance and Operations",
    classYear: "202X",
    major: "Computer Engineering",
    minor: undefined,
    favGame: "Satisfactory",
    photo: undefined,
  },
  {
    name: "Sakshi Shetty",
    role: "Campius Liaison",
    classYear: "202X",
    major: "Information Science ",
    minor: "Business",
    favGame: "Mario Kart",
    photo: undefined,
  },
  {
    name: "Emma Gross",
    role: "VP of Event Planning",
    classYear: "202X",
    major: "Animlas Science",
    minor: undefined,
    favGame: "Wii ski",
    photo: undefined,
  },
];

export default function OfficersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Raleway, sans-serif",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── HEADER with bridge graphic ── */}
      <div className="relative text-center py-10 sm:py-16" style={{ backgroundColor: "#85CAC0", color: "#2E4052" }}>
        <h1
          className="text-xs font-bold mb-6"
          style={{ fontFamily: "'Fredericka the Great', serif", color: "#2E4052" }}
        >
          Officers
        </h1>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "120px" }}>
          {/* Water */}
          <img
            src="/Rectangle 355.png"
            alt=""
            style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "30px", objectFit: "cover" }}
          />
          {/* Bridge sitting above water */}
          <div
            style={{
              position: "absolute",
              bottom: "18px",
              left: 0,
              width: "100%",
              height: "60px",
              backgroundImage: "url('/truss_bridge 6.png')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "bottom",
            }}
          />
        </div>
      </div>

      {/* ── OFFICERS LIST ── */}
      <div className="px-4 sm:px-8 pt-10 pb-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map((o, i) => (
            <div
              key={i}
              className="flex items-stretch bg-white rounded-2xl shadow-sm overflow-hidden"
              style={{ height: "160px" }}
            >
              {/* Role sidebar — sideways text to the left of the photo */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: o.role === "President" ? "#5CB8D6" : "#85CAC0",
                  width: "clamp(36px, 7vw, 48px)",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    color: "#000000",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    textAlign: "center",
                  }}
                >
                  {o.role}
                </span>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-5 min-w-0">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold overflow-hidden"
                  style={{ backgroundColor: "#b0c8d8" }}
                >
                  {o.photo ? (
                    <img src={o.photo} alt={o.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{o.name[0]}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm break-words" style={{ color: "#000000" }}>
                    {o.name}
                  </h3>
                  <div className="flex flex-col gap-y-0.5 mb-1">
                    <span className="text-xs" style={{ color: "#000000" }}>
                      Class of {o.classYear}
                    </span>
                    <span className="text-xs" style={{ color: "#000000" }}>
                      {o.major} Major
                    </span>
                    {o.minor && (
                      <span className="text-xs" style={{ color: "#000000" }}>
                        {o.minor} Minor
                      </span>
                    )}
                    <span className="text-xs" style={{ color: "#000000" }}>
                      Fav. Game: {o.favGame}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="py-6 text-center text-xs text-white mt-auto" style={{ backgroundColor: "#2E4052" }}>
        Designed and Coded by Campus Coder Crew. Copyright © 2024 BridgeUMD. All Rights Reserved.
      </footer>
    </div>
  );
}
