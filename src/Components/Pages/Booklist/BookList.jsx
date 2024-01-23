import { useEffect, useState } from "react";
import BookDetails from "../../../Booklist.json";
import Renderlists from "./RenderList";

const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(BookDetails);
  }, []);

  console.log("jsnkcaj", BookDetails);
  return (
    <div>
      <h2>This is Book Store</h2>
      <div>
        <div bookList={bookList}>
          <Renderlists bookList={bookList} />
        </div>
      </div>
    </div>
  );
};

export default BookList;
