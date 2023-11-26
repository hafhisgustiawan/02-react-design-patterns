import { BookType } from '../types/book-type';

const BookInfo: React.FC<BookType> = (props) => {
  const { name, pages, price, title } = props;

  return props ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default BookInfo;
