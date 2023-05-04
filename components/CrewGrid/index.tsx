import { useState } from "react";
import Link from "next/link";

const tabs = [
    {
        id: 0,
        title: "Commander",
        name: "Douglas Hurley",
        srcSet: "assets/crew/image-douglas-hurley.webp",
        src: "assets/crew/image-douglas-hurley.png",
        alt: "Douglas Hurley",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        id: 1,
        title: "Mission Specialist",
        name: "MARK SHUTTLEWORTH",
        srcSet: "assets/crew/image-mark-shuttleworth.webp",
        src: "assets/crew/image-mark-shuttleworth.png",
        alt: "Mark Shuttleworth",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
        id: 2,
        title: "Pilot",
        name: "Victor Glover",
        srcSet: "assets/crew/image-victor-glover.webp",
        src: "assets/crew/image-victor-glover.png",
        alt: "Victor Glover",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
        id: 3,
        title: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        srcSet: "assets/crew/image-anousheh-ansari.webp",
        src: "assets/crew/image-anousheh-ansari.png",
        alt: "Anousheh Ansari",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
]

function CrewGrid() {
    const [selected, setSelected] = useState(0);
    const tab = tabs[selected]

    return (
        <div className="grid-container grid-container--crew flow">
            <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

            <div className="dot-indicators flex">
                {tabs.map(t => (
                    <button key={t.id} aria-selected={selected === t.id} className={`uppercase ff-sans-cond text-accent letter-spacing-2`}
                        onClick={() => setSelected(t.id)}></button>
                ))}
            </div>


            <picture>
                <source srcSet={tab.srcSet} type="image/webp" />
                <img src={tab.src} alt={tab.alt} />
            </picture>

            <article className="crew-details flow">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">{tab.title}</h2>
                    <p className="fs-700 uppercase ff-serif">{tab.name}</p>
                </header>
                <p>{tab.description}</p>
            </article>
        </div>
    );
}

export default CrewGrid;