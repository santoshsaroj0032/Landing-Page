import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Fylesure</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#hero" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link href="#features" className="hover:text-yellow-300 transition duration-300">Features</Link>
          <Link href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className={`md:hidden bg-purple-600 p-4 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <Link href="#hero" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Home</Link>
        <Link href="#features" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Features</Link>
        <Link href="#contact" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
