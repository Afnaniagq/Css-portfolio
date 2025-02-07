import "../style/Header.css";
import Link from "next/link";
import { IoLogoAngular } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";


function Header() {
  

  return (
    
      <header className="header">
        {/* Logo */}
        <div className="logo">
        <IoLogoAngular/>
        </div>
        {/* Site Name */}
        <h2 className="site-name">Afnan Imran</h2>

        {/* Desktop Navigation Menu */}
        <ul className="desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skill">Skills</Link></li>
          <li><Link href="/project">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        

        
      </header>
    
  );
}

export default Header;
