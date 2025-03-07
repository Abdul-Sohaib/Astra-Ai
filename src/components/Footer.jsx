import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black py-20 text-white">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Section - Branding */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white">BRANDSTORM</h3>
          </div>

          {/* Center Section - Navigation & Contact */}
          <div className="flex flex-col items-center gap-6 text-sm md:flex-row">
            <a href="mailto:Brandstormreachout@gmail.com" className="transition-colors duration-300 hover:text-gray-300">
              Work
            </a>
            <a href="mailto:Brandstormreachout@gmail.com" className="transition-colors duration-300 hover:text-gray-300">
              Studio
            </a>
            <a href="mailto:Brandstormreachout@gmail.com" className="transition-colors duration-300 hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.instagram.com" className="transition-colors duration-300 hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="transition-colors duration-300 hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section - Contact & Copyright */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 text-sm md:flex-row">
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <p className="text-gray-400">All Rights</p>
              <p className="text-gray-400">Reserved © 2025</p>
            </div>
            <div>
              <p className="text-gray-400">Business Inquiries</p>
              <a href="mailto:Brandstormreachout@gmail.com" className="text-gray-400 transition-colors duration-300 hover:text-white">
                Brandstormreachout@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-400">General</p>
              <a href="mailto:Brandstormreachout@gmail.com" className="text-gray-400 transition-colors duration-300 hover:text-white">
                Brandstormreachout@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Large BRANDSTORM Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full -rotate-6 overflow-hidden text-[150px] font-bold leading-none text-white/20 md:text-[250px]">
          BRANDSTORM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
