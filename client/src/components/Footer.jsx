import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEE6DB] dark:bg-gray-800">
        <div className="container mx-auto p-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Bio and Social Links */}
            <div className="w-full md:w-1/2">
              <Link to="/" className="text-orange-600 font-bold text-xl">
                Job<span className="text-[#fb923c]">Aura</span>
              </Link>
              <p className="mt-4">
                JobAura is your ultimate platform for finding jobs and connecting with companies. We aim to simplify job searching and hiring processes.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FiInstagram />
                </a>
                <a href="#" className="text-2xl hover:text-blue-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/3">
              <h2 className="font-bold mb-3">Contact Us</h2>
              <ul className="space-y-2">
                <li className="hover:text-orange-600">Phone: +91 8519871906</li>
                <li className="hover:text-orange-600">Email: info@jobaura.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#EEE6DB] dark:bg-gray-800 py-5 flex justify-center items-center">
        <p className="text-sm text-center sm:text-left">
          Copyright&copy; 2025 by JobAura. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;