import notfount from "../images/notfound.svg";
export default function NotFount() {
  return (
    <>
      <div className="container">
        <h3>ไม่พบหน้าเว็บ(404 Page Not Found)</h3>
        <img src={notfount} alt="notfound"></img>
      </div>
    </>
  );
}
