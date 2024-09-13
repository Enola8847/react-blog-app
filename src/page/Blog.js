import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import "../page/Blog.css";
export default function Blogs() {
  return (
    <div className="blogs-contanier">
      <article>
        {blogs.map((item) => {
          return (
            <Link to={`/Blogs/${item.id}`} key={item.id}>
              <div className="card">
                <h2> {item.title}</h2>
                <p>{item.content.substring(0, 300)}</p>
                <hr></hr>
              </div>
              ;
            </Link>
          );
        })}
      </article>
    </div>
  );
}
