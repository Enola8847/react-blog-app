import home from "../images/home.svg";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>หน้าแรกของเว็บ</h1>
        </div>
        <img src={home} alt="home"></img>
      </div>
    </>
  );
}
