import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return (
    <div>
      <h2>รายระเอียดบทความ:{id}</h2>
    </div>
  );
}
