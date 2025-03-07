import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section - Branding */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">BRANDSTORM</h3>
          </div>

          {/* Center Section - Navigation & Contact */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <a href="mailto:Brandstormreachout@gmail.com" className="hover:text-gray-300 transition-colors duration-300">
              Work
            </a>
            <a href="mailto:Brandstormreachout@gmail.com" className="hover:text-gray-300 transition-colors duration-300">
              Studio
            </a>
            <a href="mailto:Brandstormreachout@gmail.com" className="hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.instagram.com" className="hover:text-gray-300 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section - Contact & Copyright */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <p className="text-gray-400">All Rights</p>
              <p className="text-gray-400">Reserved © 2025</p>
            </div>
            <div>
              <p className="text-gray-400">Business Inquiries</p>
              <a href="mailto:Brandstormreachout@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                Brandstormreachout@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-400">General</p>
              <a href="mailto:Brandstormreachout@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                Brandstormreachout@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Large BRANDSTORM Overlay */}
        <div className="absolute bottom-0 left-0 w-full text-[150px] md:text-[250px] font-bold text-white/20 -rotate-6 overflow-hidden leading-none z-0 pointer-events-none">
          BRANDSTORM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
