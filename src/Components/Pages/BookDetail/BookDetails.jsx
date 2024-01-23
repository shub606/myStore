import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { BookId } = useParams();
  console.log("param", BookId);
  return <div>i am details</div>;
};
export default BookDetails;
