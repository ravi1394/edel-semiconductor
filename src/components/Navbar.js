import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [dropdown, setDropdown] = useState('');

const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? '' : menu);
};

return (
    <nav className="navbar">
    <div className="logo">Edel Semiconductor</div>

    <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-item" onClick={() => toggleDropdown('company')}>
        Company ▾
        {dropdown === 'company' && (
            <ul className="dropdown">
            <li>About Us</li>
            <li>Leadership</li>
            <li>Mission & Vision</li>
            </ul>
        )}
        </div>

        <div className="nav-item" onClick={() => toggleDropdown('services')}>
        Services ▾
        {dropdown === 'services' && (
            <ul className="dropdown">
            <li>ASIC Design</li>
            <li>Verification</li>
            <li>Embedded Software</li>
            </ul>
        )}
        </div>

        <div className="nav-item">Careers</div>
        <div className="nav-item">Resources</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">🔍</div>
    </div>

    <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
        ☰
    </div>
    </nav>
);
};

export default Navbar;
