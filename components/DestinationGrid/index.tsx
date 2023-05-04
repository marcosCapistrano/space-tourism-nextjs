import { useState } from "react";
import Link from "next/link";

const tabs = [
    {
        id: 0,
        label: "MOON",
        srcSet: "assets/destination/image-moon.webp",
        src: "assets/destination/image-moon.png",
        alt: "the moon",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDist: "384,400",
        travelTime: "3 days"
    },
    {
        id: 1,
        label: "MARS",
        srcSet: "assets/destination/image-mars.webp",
        src: "assets/destination/image-mars.png",
        alt: "the moon",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgDist: "225 MIL.",
        travelTime: "9 Months"
    },
    {
        id: 2,
        label: "EUROPA",
        srcSet: "assets/destination/image-europa.webp",
        src: "assets/destination/image-europa.png",
        alt: "the moon",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgDist: "628 MIL.",
        travelTime: "3 years"
    },
    {
        id: 3,
        label: "TITAN",
        srcSet: "assets/destination/image-titan.webp",
        src: "assets/destination/image-titan.png",
        alt: "the moon",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgDist: "1.6 BIL.",
        travelTime: "7 years"
    },
]

function DestinationGrid() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="grid-container grid-container--destination flow">
            <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
            <div className="tab-list underline-indicators flex">
                {tabs.map(tab => (
                <button key={tab.id} className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${selected === tab.id && 'active'}`}
                onClick={() => setSelected(tab.id)}>{tab.label}</button>
                ))}
            </div>


            <picture>
                <source srcSet={tabs[selected].srcSet} type="image/webp" />
                <img src={tabs[selected].src} alt={tabs[selected].alt} />
            </picture>

            <article className="destination-info flow">
                <h2 className="fs-800 uppercase ff-serif">{tabs[selected].label}</h2>

                <p>{tabs[selected].description}</p>

                <div className="destination-meta flex">
                    <div>
                        <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                        <p className="ff-serif uppercase">{tabs[selected].avgDist} km</p>
                    </div>
                    <div>
                        <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                        <p className="ff-serif uppercase">{tabs[selected].travelTime}</p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default DestinationGrid;