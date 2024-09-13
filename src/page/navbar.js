import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">หน้าแรกของเว็บ</Link>
      <Link to="/Blogs">บทความทั้งหมด</Link>
      <Link to="/About">เกี่ยวกับ</Link>
    </nav>
  );
}
