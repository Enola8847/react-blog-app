import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import "../page/Blog.css";
import { useState, useEffect } from "react";
export default function Blogs() {
  const [search, SetSearch] = useState("");
  const [filterblogs, SetFilterblogs] = useState([]);
  useEffect(() => {
    const result = blogs.filter((item) => item.title.includes(search));
    SetFilterblogs(result);
  }, [search]);
  return (
    <div className="blogs-contanier">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
        ></input>
      </div>
      <article>
        {filterblogs.map((item) => {
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
