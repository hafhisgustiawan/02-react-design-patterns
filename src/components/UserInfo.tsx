import { UserType } from '../types/user-type';

const UserInfo: React.FC = (props) => {
  // console.log(props);
  const { age, books, country, name } = props as UserType;
  return props ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books?.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserInfo;
