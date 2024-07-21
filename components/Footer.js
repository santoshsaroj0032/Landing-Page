import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
             <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className="mb-4">
          <p>&copy; 2024 Santosh Landing Page. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
