import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">หน้าแรกของเว็บ</Link>
      <Link to="/about">เกี่ยวกับ</Link>
      <Link to="/blog">บทความทั้งหมด</Link>
    </nav>
  );
}
