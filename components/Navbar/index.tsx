import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    const [visible, setVisible] = useState(false);



    return (
        <header className="primary-header flex" style={{ zIndex: 1 }}>
            <div>
                <Image src="/assets/shared/logo.svg" alt="space tourism logo" className="logo" width={50} height={50} />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation"
                onClick={() => {
                    setVisible(!visible)
                }}><span className="sr-only" aria-expanded="false">Menu</span></button>
            <nav>
                <ul id="primary-navigation" data-visible={visible} className="primary-navigation underline-indicators flex">
                    <NavItem destination="/" number="00" label="Home" />
                    <NavItem destination="/destination" number="01" label="Destination" />
                    <NavItem destination="/crew" number="02" label="Crew" />
                    {/* <NavItem destination="/technology" number="03" label="Technology" /> */}
                </ul>
            </nav>
        </header>
    );
}

interface NavItemProps {
    destination: string;
    number: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ destination, number, label }) => {
    const { pathname } = useRouter();

    return (
        <li className={`${pathname === destination && 'active'}`}><Link className="ff-sans-cond uppercase text-white letter-spacing-2" href={destination}><span aria-hidden="true">{number}</span>{label}</Link></li>
    )
}

export default Navbar;