import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";

export default function Detail() {
  const [title, SetTitle] = useState("");
  const [image, SetImage] = useState("");
  const [content, SetContent] = useState("");
  const [author, SetAuthor] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    SetTitle(result.title);
    SetImage(result.image_url);
    SetContent(result.content);
    SetAuthor(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <img src={image} alt={title}></img>
      <div className="blogs-deteil">
        <strong>ผู้เขียน:{author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
