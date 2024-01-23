import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "../Pages/BookDetail/BookDetails";
import BookList from "../Pages/Booklist/BookList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bookStore" element={<BookList />}></Route>
        <Route path="/bookStore/:BookId" element={<BookDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
