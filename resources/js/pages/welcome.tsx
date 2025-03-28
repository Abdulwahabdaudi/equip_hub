import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Element, Link } from 'react-scroll';
import { toast, Toaster } from 'sonner';
import email from '../assets/Email.svg';
import Forward from '../assets/Forward.svg';
import forward from '../assets/ForwardSeeAll.svg';
import instagram from '../assets/Instagram.svg';
import linkedln from '../assets/LinkedIn.svg';
import location from '../assets/Location.svg';
import phone from '../assets/Phone.svg';
import searchIcon from '../assets/Search.svg';
import whatsapp from '../assets/WhatsApp.svg';
import block1 from '../assets/block1.svg';
import block2 from '../assets/block2.svg';
import block3 from '../assets/block3.svg';
import delivery from '../assets/delivery.svg';
import equip1 from '../assets/equip1.webp';
import equip2 from '../assets/equip2.webp';
import equip3 from '../assets/equip3.webp';
import equip4 from '../assets/equip4.webp';
import equip5 from '../assets/equip5.webp';
import equip6 from '../assets/equip6.webp';
import equipment from '../assets/equipment.svg';
import equipmentImage from '../assets/equipmentImage.webp';
import gps from '../assets/gps.svg';
import headerImage from '../assets/headerImage.webp';
import locationBlack from '../assets/locationBlack.svg';
import support from '../assets/support.svg';
import whyUsImage from '../assets/whyUsImage.webp';
import works1 from '../assets/works1.svg';
import works2 from '../assets/works2.svg';
import works3 from '../assets/works3.svg';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import Swipper from '../components/Swiper';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    interface Service {
        icon: string;
        title: string;
        text: string;
    }

    interface EquipmentItem {
        img: string;
        location: string;
        title: string;
        price: string;
    }

    interface WhyUsPoint {
        icon: string;
        title: string;
        text: string;
    }

    const handleInfo = () => {
        toast.info("Coming soon! We're working on this feature. Check back for updates.", {
            style: {
                backgroundColor: '#e0f7fa', // Light blue background
                color: '#006064', // Darker blue text
                border: '1px solid #b2ebf2', // Light blue border
            },
        });
    };

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleStart = (date: Date | null) => setStartDate(date);
    const handleEnd = (date: Date | null) => setEndDate(date);

    // Dummy data for repetitive sections
    const services: Service[] = [
        {
            icon: block1,
            title: 'Equipment Rentals',
            text: 'Browse and rent high-quality construction equipment with ease.',
        },
        {
            icon: block2,
            title: 'Logistics & Delivery',
            text: 'Get real-time tracking for equipment transport.',
        },
        {
            icon: block3,
            title: 'Dynamic Pricing',
            text: 'Transparent, flexible pricing based on demand and location.',
        },
    ];

    const equipmentItems: EquipmentItem[] = [
        {
            img: equip1,
            location: 'Dar es Salaam Tanzania',
            title: 'Excavator',
            price: 'Tshs 500,000/day',
        },
        {
            img: equip2,
            location: 'Dar es Salaam Tanzania',
            title: 'Truck',
            price: 'Tshs 500,000/day',
        },
        {
            img: equip3,
            location: 'Dar es Salaam Tanzania',
            title: 'Mini Excavator',
            price: 'Tshs 500,000/day',
        },
        {
            img: equip4,
            location: 'Dar es Salaam Tanzania',
            title: 'Cranes',
            price: 'Tshs 500,000/day',
        },
        {
            img: equip5,
            location: 'Dar es Salaam Tanzania',
            title: 'Mini Road Roller',
            price: 'Tshs 500,000/day',
        },
        {
            img: equip6,
            location: 'Dar es Salaam Tanzania',
            title: 'Generator',
            price: 'Tshs 500,000/day',
        },
    ];

    const whyUsPoints: WhyUsPoint[] = [
        {
            icon: equipment,
            title: 'Wide Equipment Selection',
            text: 'Variety of tools, heavy machinery available.',
        },
        {
            icon: delivery,
            title: 'Fast & Reliable Delivery',
            text: 'On-time equipment delivery with efficient logistics.',
        },
        {
            icon: gps,
            title: 'GPS Tracking',
            text: 'Track your rented equipment in real-time',
        },
        {
            icon: support,
            title: '24/7 Customer Support',
            text: 'Get assistance anytime with our dedicated support team.',
        },
    ];

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="mt-3">
            <Navbar auth={auth} />
                <Toaster position="top-center" richColors />
                <PageTransition>
                    {/* Header Section */}
                    <Element name="home" className="section bg-gray-900 py-20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
                                <div className="space-y-6 text-white md:w-1/2">
                                    <h1 className="text-4xl leading-tight font-bold md:text-5xl">
                                        Rent Construction <br />
                                        Equipment with Ease
                                    </h1>
                                    <p className="text-lg text-gray-400">
                                        Find the right equipment, connect with reliable logistics, and build your projects efficiently.
                                    </p>
                                    <button
                                        onClick={handleInfo}
                                        className="rounded-lg bg-amber-500 px-6 py-3 text-white transition-colors hover:bg-amber-600"
                                    >
                                        Explore Equipment
                                    </button>
                                    <p className="text-sm text-gray-400">Reliable equipment, delivered on time.</p>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={headerImage} alt="header" className="rounded-lg shadow-xl" />
                                </div>
                            </div>

                            <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
                                <select className="w-full rounded-lg border p-2">
                                    <option value="">Equipment Type</option>
                                    <option value="equipment1">Option 1</option>
                                    <option value="equipment2">Option 2</option>
                                    <option value="equipment2">Option 3</option>
                                </select>
                                <div className="flex gap-2">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleStart}
                                        placeholderText="Start Date"
                                        className="w-full rounded-lg border p-2"
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={handleEnd}
                                        placeholderText="End Date"
                                        className="w-full rounded-lg border p-2"
                                    />
                                </div>

                                <button
                                    onClick={handleInfo}
                                    className="flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
                                >
                                    <img src={searchIcon} alt="search" className="h-5 w-5" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </Element>

                    {/* Equipment Section */}
                    <Element className="section bg-amber-50 py-20" name={''}>
                        <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row md:px-8">
                            <div className="md:w-1/2">
                                <img src={equipmentImage} alt="equipment" className="rounded-lg shadow-xl" />
                            </div>
                            <div className="space-y-6 md:w-1/2">
                                <div className="mb-4 h-1 w-12 bg-black"></div>
                                <h2 className="text-3xl font-bold">Your Partner in Construction Success.</h2>
                                <p className="text-gray-600">
                                    More than just a marketplace, we're a community connecting contractors, suppliers, and projects. Together, we're
                                    building the future of Tanzania.
                                </p>
                                <div className="mt-8 grid grid-cols-3 gap-4">
                                    {[
                                        ['100+', 'Equipment Listed'],
                                        ['50+', 'Verified Supplier'],
                                        ['40+', 'Cities Covered'],
                                    ].map(([num, text]) => (
                                        <div key={num} className="rounded-lg bg-white p-4 text-center shadow">
                                            <h3 className="mb-2 text-2xl font-bold">{num}</h3>
                                            <p className="text-sm text-gray-600">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Element>

                    {/* Services Section */}
                    <Element name="services" className="section bg-white py-20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="mb-12 max-w-2xl">
                                <div className="mb-4 h-1 w-12 bg-amber-500"></div>
                                <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
                                <p className="text-gray-600">
                                    We offer a seamless solution for equipment rentals, logistics, and pricing transparency. Here’s how we help you
                                    get the job done efficiently.
                                </p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-3">
                                {services.map(({ icon, title, text }) => (
                                    <div key={title} className="rounded-tr-3xl border border-amber-500 p-6 transition-colors hover:bg-amber-50">
                                        <div className="mb-4 h-12 w-12 rounded-lg bg-amber-500 p-3">
                                            <img src={icon} alt={title} />
                                        </div>
                                        <h4 className="mb-2 text-xl font-semibold">{title}</h4>
                                        <p className="text-gray-600">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Element>

                    {/* Equipment Listings */}
                    <Element name="equipment" className="section bg-gray-900 py-20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
                                <div className="mb-8 md:mb-0">
                                    <div className="mb-4 h-1 w-12 bg-amber-500" />
                                    <h2 className="mb-2 text-3xl font-bold text-white">Equipments</h2>
                                    <p className="text-gray-400">Find reliable construction tools and machinery for rent at competitive prices.</p>
                                </div>
                                <button onClick={handleInfo} className="flex items-center gap-2 text-amber-500 hover:text-amber-400">
                                    See All <img src={forward} alt="arrow" className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {equipmentItems.map((item, index) => (
                                    <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                                        <img src={item.img} alt={item.title} className="mb-4 h-48 w-full rounded-lg object-cover" />
                                        <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                        <div className="mb-4 flex items-center gap-2 text-gray-600">
                                            <img src={locationBlack} alt="location" className="h-5 w-5" />
                                            <span>{item.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold">{item.price}</span>
                                            <button onClick={handleInfo} className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
                                                Rent Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Element>

                    {/* How It Works */}
                    <Element name="works" className="section bg-white py-20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="mb-12 max-w-3xl">
                                <div className="mb-4 h-1 w-12 bg-amber-500" />
                                <h2 className="mb-4 text-3xl font-bold">Get Your Rentals in Easy Steps</h2>
                                <p className="text-gray-600">
                                    Focus on your project, knowing that your equipment needs are taken care of. Experience a streamlined and efficient
                                    rental process from start to finish.
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                <div className="rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl">
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-amber-100 p-3">
                                        <img src={works1} alt="search" className="h-full w-full" />
                                    </div>
                                    <h4 className="mb-2 text-xl font-semibold">Search Equipment</h4>
                                    <p className="text-gray-600">Find the perfect equipment for your project needs.</p>
                                </div>
                                <div className="rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl">
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-amber-100 p-3">
                                        <img src={works2} alt="search" className="h-full w-full" />
                                    </div>
                                    <h4 className="mb-2 text-xl font-semibold">Book & Pay</h4>
                                    <p className="text-gray-600">Secure your equipment with easy payment options.</p>
                                </div>
                                <div className="rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl">
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-amber-100 p-3">
                                        <img src={works3} alt="search" className="h-full w-full" />
                                    </div>
                                    <h4 className="mb-2 text-xl font-semibold">Track & Receivet</h4>
                                    <p className="text-gray-600">Monitor delivery and getyour equipment on time.</p>
                                </div>
                            </div>
                        </div>
                    </Element>

                    {/* Testimonials Section */}
                    <Element className="section bg-gray-900 py-20" name={''}>
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="mx-auto mb-12 max-w-3xl text-center">
                                <div className="mx-auto mb-4 h-1 w-12 bg-amber-500" />
                                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Words From Our Customers</h2>
                                <p className="text-lg text-gray-400">
                                    Our customers trust us for seamless equipment rentals and logistics. Here's what they have to say about their
                                    experience!
                                </p>
                            </div>
                            <Swipper />
                        </div>
                    </Element>

                    {/* Why Choose Us */}
                    <Element className="section bg-amber-50 py-20" name={''}>
                        <div className="container mx-auto flex flex-col gap-12 px-4 md:flex-row md:px-8">
                            <div className="md:w-1/2">
                                <div className="mb-4 h-1 w-12 bg-amber-500" />
                                <h2 className="mb-4 text-3xl font-bold">Why Choose Us?</h2>
                                <p className="mb-8 text-gray-600">
                                    Our platform is designed to make your construction projects easier, faster, and more efficient. Here's why you
                                    should choose EQUIP.
                                </p>
                                <img src={whyUsImage} alt="why us" className="rounded-lg shadow-xl" />
                            </div>

                            <div className="space-y-8 md:w-1/2">
                                {whyUsPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="h-16 w-16 rounded-lg bg-white p-4 shadow">
                                            <img src={point.icon} alt={point.title} className="h-full w-full" />
                                        </div>
                                        <div>
                                            <h4 className="mb-2 text-xl font-semibold">{point.title}</h4>
                                            <p className="text-gray-600">{point.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Element>

                    {/* Contact Section */}
                    <Element name="contact" className="section bg-gray-900 py-20">
                        <div className="container mx-auto max-w-2xl px-4 md:px-8">
                            <h2 className="mb-4 text-center text-3xl font-bold text-white">Stay Connected with EquipHub</h2>
                            <p className="mb-8 text-center text-gray-400">Reach out for inquiries, support, or feedback – We're here to help!</p>

                            <form className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-white">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@gmail.com"
                                        className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-amber-500 focus:outline-none"
                                    />
                                </div>
                                {/* Repeat for other fields */}
                                <button
                                    onClick={handleInfo}
                                    className="w-full rounded-lg bg-amber-500 py-3 text-white transition-colors hover:bg-amber-600"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </Element>

                    {/* Footer */}
                    <footer className="bg-gray-900 py-12 text-white">
                        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4 md:px-8">
                            <div>
                                <h3 className="mb-4 text-2xl font-bold">EquipHub</h3>
                                <p className="text-gray-400">
                                    A digital marketplace revolutionizing construction in Tanzania. Find, rent, and manage equipment with ease, all in
                                    one place.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                                <ul className="space-y-2">
                                    {['home', 'Equipment', 'Services', 'contact'].map((link) => (
                                        <li key={link}>
                                            <Link
                                                to={link}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                className="flex cursor-pointer items-center gap-2 hover:text-amber-500"
                                            >
                                                <img src={Forward} alt="arrow" className="h-4 w-4" />
                                                {link.charAt(0).toUpperCase() + link.slice(1)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <img src={phone} alt="phone" className="h-5 w-5" />
                                        <span>+255 787 874 666</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={email} alt="email" className="h-5 w-5" />
                                        <span>EquipHub01@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={location} alt="location" className="h-5 w-5" />
                                        <span>Dar-es-Salaam,Tanzania.</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
                                <div className="flex gap-4">
                                    {[whatsapp, instagram, linkedln].map((icon, index) => (
                                        <img key={index} src={icon} alt="social" className="h-8 w-8 cursor-pointer hover:opacity-75" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
                            <p>© {new Date().getFullYear()} EquipHub. All rights reserved.</p>
                        </div>
                    </footer>
                </PageTransition>
            </div>
        </>
    );
}
