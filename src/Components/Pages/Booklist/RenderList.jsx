import "./RenderListStyle.css";
import { Link } from "react-router-dom";
const RenderList = ({ bookList }) => {
  console.log(bookList);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
      {bookList.map((item, index) => {
        return (
          <>
            <div key={item.id} className="BookCard">
              <h4>Title: {item.title}</h4>
              <h5>Author: {item.author}</h5>
              <h5>Description:{item.description}</h5>
              <Link to={`/BookDetails/:${item.id}`}>Show Details</Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RenderList;
