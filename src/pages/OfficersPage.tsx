import { useMemo } from "react";
const trussUrl = new URL("../assets/truss_bridge.png", import.meta.url).href;
import "./OfficersPage.css";
const COLORS = {
  bg: "#f7fafc", 
  card: "#ffffff",
  text: "#0f172a", 
  subtext: "#334155", 
  bridgeBlue: "#8be6c9ff", 
  bridgeBlueLight: "#8be6c9ff", 
  badgeBg: "#eaf1ff", 
};
const OFFICERS = [
  {
    name: "Calvin Chrisfield",
    role: "President",
    pronouns: "He/Him",
    year: "Sophomore",
    major: "Public Policy Major",
    minor: "Spanish + Korean Minor",
    favoriteGame: "Just Dance",
    avatarUrl: "", // add a photo url when ready
  },
  {
    name: "Anika Darbari",
    role: "VP of External Affairs and Communication",
    pronouns: "She/Her",
    year: "Junior",
    major: "Neuroscience Major",
    minor: "Spanish Minor",
    favoriteGame: "A Little to the Left",
    avatarUrl: "",
  },
    {
    name: "Anika Darbari",
    role: "VP of External Affairs and Communication",
    pronouns: "She/Her",
    year: "Junior",
    major: "Neuroscience Major",
    minor: "Spanish Minor",
    favoriteGame: "A Little to the Left",
    avatarUrl: "",
  },
  {
    name: "Alex Patrone",
    role: "VP of Finance and Operations",
    pronouns: "He/Him",
    year: "Sophomore",
    major: "Computer Engineering Major",
    minor: "",
    favoriteGame: "Satisfactory",
    avatarUrl: "",
  },
  {
    name: "Sakshi Shetty",
    role: "Campus Liaison",
    pronouns: "She/Her",
    year: "Junior",
    major: "Information Science Major",
    minor: "Business Minor",
    favoriteGame: "Mario Kart",
    avatarUrl: "",
  },
  {
    name: "Emma Gross",
    role: "VP of Event Planning",
    pronouns: "She/Her",
    year: "Junior",
    major: "Animal Science Major",
    minor: "",
    favoriteGame: "Wii Ski",
    avatarUrl: "",
  },
];
function RoleBadge({ role }: { role: string }) {
  return (
    <div
      className="absolute left-0 top-4 -translate-x-1/2 select-none"
      aria-hidden
    >
      <div
        className="rounded-xl px-3 py-1 text-xs font-semibold shadow-sm"
        style={{
          background: COLORS.badgeBg,
          color: COLORS.bridgeBlue,
          border: `1px solid ${COLORS.bridgeBlue}`,
        }}
      >
        {role}
      </div>
    </div>
  );
}

function OfficerCard({ o }: { o: (typeof OFFICERS)[number] }) {
  return (
    <article className="officer-card" tabIndex={0} role="group">
      {/* LEFT BLUE BANNER */}
      <div className="officer-card__ribbon">
        <span>{o.role}</span>
      </div>

      {/* CONTENT */}
      <div className="officer-card__content">
        <div className="officer-card__avatar" aria-label={`${o.name} profile image`}>
          {o.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={o.avatarUrl} alt={`${o.name} headshot`} />
          ) : (
            <span>IMG</span>
          )}
        </div>

        <div className="officer-card__title">
          <h3>{o.name}</h3>
          <p className="sub">
            {o.year} · {o.pronouns}
          </p>

          <dl className="officer-card__meta">
            <div>
              <dt>Major</dt>
              <dd>{o.major}</dd>
            </div>
            <div>
              <dt>Minor</dt>
              <dd>{o.minor || "—"}</dd>
            </div>
            <div className="full">
              <dt>Favorite Game</dt>
              <dd>{o.favoriteGame}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}



export default function OfficersPage() {
  const officers = useMemo(() => OFFICERS, []);

  return (
    <main className="min-h-screen w-full" style={{ background: COLORS.bg }}>
      {/* Header */}
      <header
        className="full-bleed border-b py-20 text-center"
        style={{
            // Image on top (visible), gradient behind it
            backgroundImage: `url(${trussUrl}), linear-gradient(180deg, ${COLORS.bridgeBlue} 0%, ${COLORS.bridgeBlueLight} 100%)`,
            backgroundRepeat: "repeat-x, no-repeat",
            backgroundPosition: "center bottom, center top",
            backgroundSize: "auto 80px, cover", // match the order above
            minHeight: 180, // ensure there's room for the strip
        }}
        >
        <h1 className="text-3xl tracking-tight text-white sm:text-4xl">Officers</h1>
        </header>
        <div className="full-bleed water-band -mt-px" aria-hidden="true" />

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="officers-grid">
          {officers.map((o) => (
            <OfficerCard key={o.name} o={o} />
          ))}
        </div>

        
      </section>
    </main>
  );

}
