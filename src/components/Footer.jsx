import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="footer shell">
      <a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>SHIVANI SAGAR</span></a>
      <p>Designed with curiosity. Built with React.</p>
      <a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      <small>© {new Date().getFullYear()} Shivani Sagar. All rights reserved.</small>
    </footer>
  );
}
