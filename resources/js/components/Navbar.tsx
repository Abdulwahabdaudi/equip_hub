import React, { JSX, memo, useState } from 'react';
import { Link } from 'react-scroll';
//import { Link as RouterLink } from 'react-router-dom';
import { type SharedData } from '@/types';
import { Link as RouterLink } from '@inertiajs/react';
import humburgerIcon from '../assets/humburgerIcon.svg';
import logo from '../assets/logo.svg';
import Multiply from '../assets/Multiply.svg';

interface NavLink {
    to: string;
    label: string;
}

interface NavbarProps {
    auth: SharedData['auth'];
}

const Navbar: React.FC<NavbarProps> = ({ auth }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const navLinks: NavLink[] = [
        { to: 'home', label: 'Home' },
        { to: 'services', label: 'Services' },
        { to: 'equipment', label: 'Equipment' },
        { to: 'works', label: 'How it Works' },
        { to: 'contact', label: 'Contact' },
    ];

    const renderNavLinks = (mobile: boolean = false): JSX.Element[] =>
        navLinks.map(({ to, label }) => (
            <li key={to}>
                <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-amber-500"
                    className={`cursor-pointer p-2 transition-colors hover:text-amber-500 ${mobile ? 'text-white' : 'text-gray-300'}`}
                    onClick={() => mobile && setIsNavVisible(false)}
                >
                    {label}
                </Link>
            </li>
        ));

    return (
        <nav className="fixed top-0 z-50 w-full bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-2 md:py-3">
                <div className="flex items-center justify-between">
                    <RouterLink href="/">
                        <div className="h-12 w-32">
                            <img src={logo} alt="Website Logo" className="h-full w-full object-contain" />
                        </div>
                    </RouterLink>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <ul className="flex items-center gap-6">{renderNavLinks()}</ul>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <RouterLink href={route('dashboard')}>
                                    <button className="rounded-lg bg-amber-500 px-4 py-2 text-white transition-colors hover:bg-amber-600">
                                        Dashboard
                                    </button>
                                </RouterLink>
                            ) : (
                                <>
                                    <RouterLink href={route('login')}>
                                        <button className="rounded-lg border border-amber-500 px-4 py-2 text-amber-500 transition-colors hover:bg-amber-500/10">
                                            Login
                                        </button>
                                    </RouterLink>
                                    <RouterLink
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        <button className="rounded-lg bg-amber-500 px-4 py-2 text-white transition-colors hover:bg-amber-600">
                                            Sign up
                                        </button>
                                    </RouterLink>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsNavVisible(!isNavVisible)} className="p-2 text-gray-300 hover:text-amber-500">
                            <img src={isNavVisible ? Multiply : humburgerIcon} alt="Toggle Navigation" className="h-8 w-8" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isNavVisible && (
                    <div className="absolute top-full left-0 w-full bg-gray-900 shadow-xl md:hidden">
                        <ul className="flex flex-col items-center gap-4 p-4">
                            {renderNavLinks(true)}
                            <li className="w-full text-center">
                                <RouterLink href={route('login')}>
                                    <button className="w-full rounded-lg border border-amber-500 py-2 text-amber-500">Login</button>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default memo(Navbar);
