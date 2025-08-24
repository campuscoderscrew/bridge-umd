function MindsetSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
            {/*Image carousel later*/}

            {/*Text section*/}
            <div className="space-y-6">
                {/* Need to fix section title font size */}
                <h2 className="text-3xl" style={{ fontFamily: 'Zuume Rough' }}>BridgeUMD Mindset</h2>
                <p>
                    BridgeUMD is the UMD chapter of BridgeUSA which is not about changing minds or creating centrists,
                    but encouraging students to engage differing beliefs, experiences, and perspectives. What unites us
                    is not agreement on policies, but a shared mindset. Every discussion is run by moderators and these 
                    norms of discussion to ensure a productive dialogue.
                </p>
                <ol>
                    <li>Listen to listen, not to respond</li>
                    <li>Don't interrupt or have side conversations</li>
                    <li>Address the statement, not the person</li>
                    <li>Participants represent only themselves and not the groups they belong to</li>
                </ol>
                <button onClick={() => (window.location.href = "https://bridgeusa.org")}
                    style={{ backgroundColor: "#85CAC0", color: "#FFFFFF" }}>Learn More</button>
            </div>
        </section>
    );
}

export default function HomePage () {
    return (
        <>
            <h1>HomePage</h1>
            <MindsetSection />
        </>
    )
}