import React, { useState } from 'react';
// We are switching to standard React DOM components and Tailwind CSS for browser compatibility.

// --- Icon components (using lucide-react equivalent for web) ---
// Since this environment supports web icons (e.g., lucide-react or inline SVG), 
// we'll use inline SVG for maximum compatibility, similar to the original structure.

const CarIcon = ({ className = 'text-indigo-600', size = '24' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 17h14" />
        <path d="M5 7h14" />
        <path d="M9.5 5.5l.5-2.5h4l.5 2.5" />
    </svg>
);
const ListIcon = ({ className = 'text-gray-500', size = '24' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
);
const CalendarIcon = ({ className = 'text-gray-500', size = '24' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);
const UserIcon = ({ className = 'text-gray-500', size = '24' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

// --- Component Definitions ---

const SERVICES = [
    { id: '1', name: 'Oil Change (Standard)', price: 49.99, description: 'Includes filter replacement and fluid top-off.' },
    { id: '2', name: 'Tire Rotation & Balance', price: 35.00, description: 'Extends tire life and ensures smooth driving.' },
    { id: '3', name: 'Brake Inspection', price: 0.00, description: 'Free comprehensive check of your brake system.' },
    { id: '4', name: 'Diagnostic Service', price: 99.00, description: 'Computerized engine and system health check.' },
];

const ServiceCard = ({ service, onBook }) => (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 hover:shadow-lg transition duration-200">
        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <span className="text-lg font-bold text-indigo-600">
                ${service.price.toFixed(2)}
            </span>
            <button
                onClick={() => onBook(service)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 shadow-md"
            >
                Book Now
            </button>
        </div>
    </div>
);

// --- Screens ---

const HomeScreen = ({ setScreen }) => (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <h1 className="text-3xl font-extrabold text-gray-900">Welcome Back!</h1>
        <p className="text-base text-gray-600 mt-1">Your vehicle health is our top priority.</p>

        {/* Quick Actions */}
        <div className="flex justify-around mt-6 mb-8 gap-4">
            <button
                onClick={() => setScreen('Booking')}
                className="flex flex-col items-center justify-center bg-indigo-100 p-5 rounded-xl w-1/2 shadow-sm hover:bg-indigo-200 transition duration-150"
            >
                <CalendarIcon className="text-indigo-600" size="36" />
                <span className="mt-2 text-sm font-semibold text-indigo-700">Book Service</span>
            </button>
            <button
                onClick={() => setScreen('Services')}
                className="flex flex-col items-center justify-center bg-red-100 p-5 rounded-xl w-1/2 shadow-sm hover:bg-red-200 transition duration-150"
            >
                <ListIcon className="text-red-600" size="36" />
                <span className="mt-2 text-sm font-semibold text-red-700">View Services</span>
            </button>
        </div>

        {/* Next Appointment Card */}
        <div className="bg-indigo-600 p-5 rounded-2xl mb-5 shadow-xl">
            <h2 className="text-xl font-bold text-white">Upcoming Appointment</h2>
            <p className="text-3xl font-extrabold text-white mt-2">
                Tire Rotation
            </p>
            <p className="text-sm text-indigo-200 mt-1">
                Monday, Jan 29th at 10:00 AM
            </p>
            <button
                className="mt-4 bg-white hover:bg-gray-100 text-indigo-600 font-bold py-2 px-4 rounded-lg w-1/2 text-center shadow-md transition duration-150"
                onClick={() => alert("Redirecting to Appointment Management...")}
            >
                Manage
            </button>
        </div>

         {/* Vehicle Info Card */}
         <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Vehicle Details</h2>
            <DetailItem label="Make/Model" value="Honda Civic" />
            <DetailItem label="Mileage" value="48,500 mi" />
            <DetailItem label="Next Service" value="Oil Change due at 50k" color="text-green-600" />
        </div>
    </div>
);

const DetailItem = ({ label, value, color = 'text-gray-900' }) => (
    <div className="flex justify-between py-2 border-b border-gray-50 last:border-b-0">
        <span className="text-gray-500">{label}:</span>
        <span className={`font-semibold ${color}`}>{value}</span>
    </div>
);

const ServicesScreen = ({ setScreen }) => {
    const handleBook = (service) => {
        // Using window.alert as a browser fallback since RN Alert is not available here
        if (window.confirm(`Are you sure you want to book ${service.name} for $${service.price.toFixed(2)}?`)) {
            setScreen('Booking');
        }
    };

    return (
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
                Our Full Range of Services
            </h1>

            {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} onBook={handleBook} />
            ))}

            <div className="h-10" />
        </div>
    );
};

const BookingScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        serviceType: '',
        vehicle: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, date, serviceType } = formData;
        if (!name || !date || !serviceType) {
            alert('Missing Information: Please fill out all required fields.');
            return;
        }
        alert(`Booking Confirmed for ${name} on ${date} for ${serviceType}! We will contact you shortly.`);
        // Clear form
        setFormData({ name: '', date: '', serviceType: '', vehicle: '' });
    };

    const InputField = ({ label, name, placeholder, value, onChange }) => (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-indigo-600 mb-1">{label}</label>
            <input
                type={name === 'date' ? 'date' : 'text'}
                name={name}
                className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150 text-gray-800"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <h1 className="text-3xl font-extrabold text-indigo-600 mb-6">
                Schedule Your Appointment
            </h1>

            {/* Input Fields */}
            <InputField label="Your Name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
            <InputField label="Preferred Date" name="date" type="date" value={formData.date} onChange={handleChange} />
            <InputField label="Service Required" name="serviceType" placeholder="e.g., Oil Change or Brakes" value={formData.serviceType} onChange={handleChange} />
            <InputField label="Vehicle Make/Model" name="vehicle" placeholder="Toyota Camry 2020" value={formData.vehicle} onChange={handleChange} />

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl mt-6 shadow-xl shadow-indigo-300/50 transition duration-200 ease-in-out transform hover:scale-[1.01]"
            >
                Confirm Booking
            </button>

            <div className="h-10" />
        </form>
    );
};

const ProfileScreen = () => (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-gray-200 flex justify-center items-center mb-5 shadow-inner">
            <UserIcon className="text-gray-600" size="72" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Alex Johnson</h1>
        <p className="text-base text-gray-500 mb-8">alex.j@example.com</p>

        {/* Info Sections */}
        <ProfileSection title="Contact Information">
            <ProfileItem label="Phone" value="(555) 123-4567" />
            <ProfileItem label="Address" value="123 Garage Lane, CA 90210" />
        </ProfileSection>

        <ProfileSection title="Vehicles Owned">
            <ProfileItem label="Car 1" value="Honda Civic (2021)" />
            <ProfileItem label="Car 2" value="Ford F-150 (2018)" />
        </ProfileSection>

        <button
            onClick={() => alert('You have been successfully logged out.')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl mt-8 shadow-lg transition duration-150"
        >
            Log Out
        </button>

        <div className="h-10" />
    </div>
);

const ProfileSection = ({ title, children }) => (
    <div className="bg-white w-full max-w-lg p-5 rounded-xl mb-6 shadow-md border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 border-b-2 border-indigo-100 pb-2 mb-2">{title}</h2>
        {children}
    </div>
);

const ProfileItem = ({ label, value }) => (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
        <span className="text-gray-500 text-base">{label}</span>
        <span className="font-medium text-gray-900 text-base">{value}</span>
    </div>
);


// --- Main App Component ---

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Home'); // Home, Services, Booking, Profile

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Services':
                return <ServicesScreen setScreen={setCurrentScreen} />;
            case 'Booking':
                return <BookingScreen setScreen={setCurrentScreen} />;
            case 'Profile':
                return <ProfileScreen setScreen={setCurrentScreen} />;
            case 'Home':
            default:
                return <HomeScreen setScreen={setCurrentScreen} />;
        }
    };

    const navItems = [
        { name: 'Home', icon: CarIcon },
        { name: 'Services', icon: ListIcon },
        { name: 'Booking', icon: CalendarIcon },
        { name: 'Profile', icon: UserIcon },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center">
            {/* Main Application Container (Simulating a mobile screen) */}
            <div className="w-full max-w-md bg-white shadow-2xl flex flex-col min-h-screen">
                
                {/* Header */}
                <header className="bg-white h-14 flex items-center px-6 border-b border-gray-200 shadow-sm">
                    <h1 className="text-xl font-extrabold text-indigo-600">
                        {currentScreen === 'Home' ? 'AutoCare Pro' : currentScreen}
                    </h1>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-hidden">
                    {renderScreen()}
                </main>

                {/* Bottom Navigation */}
                <nav className="bg-white h-20 flex justify-around items-start pt-2 border-t border-gray-200 shadow-xl">
                    {navItems.map((item) => {
                        const isActive = currentScreen === item.name;
                        const iconClass = isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-400';
                        const textClass = isActive ? 'font-semibold text-indigo-600' : 'text-gray-500';

                        return (
                            <button
                                key={item.name}
                                onClick={() => setCurrentScreen(item.name)}
                                className="flex flex-col items-center p-2 rounded-lg transition duration-150"
                            >
                                <item.icon className={iconClass} size="24" />
                                <span className={`text-xs mt-1 ${textClass}`}>
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default App;