import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'

export const ALL_AUTHORS = gql`
query{
  allAuthors {
    name
    born
    bookCount
    id
  }
}
`
export const ALL_BOOKS = gql`
query{
  allBooks {
    title
    published
    author
    id
    genres
  }
}
`

const App = () => {
  // const [page, setPage] = useState("authors");
  const authors = useQuery(ALL_AUTHORS)
  const books = useQuery(ALL_BOOKS)
  const navigate = useNavigate();

  if(authors.loading || books.loading){
    return <div>loading...</div>
  }
  if (authors.error || books.error) {
    return <div>Error fetching data...</div>;
  }

  console.log('authors', authors.data.allAuthors)
  console.log('books', books.data.allBooks)
  return (
    <div>
       <div>
        <button onClick={() => navigate('/')}>Authors</button>
        <button onClick={() => navigate('/books')}>Books</button>
        <button onClick={() => navigate('/add')}>Add Book</button>
      </div>
        <Routes>
        <Route path="/" element={<Authors authors={authors.data.allAuthors}/>}  />
        <Route path="/books"  element={<Books books={books.data.allBooks}/>}  />
        <Route path="/add" element={  <NewBook/>}/>
      </Routes>
    </div>



  );
};

export default App;

// <div>
// <button onClick={() => setPage("authors")}>authors</button>
// <button onClick={() => setPage("books")}>books</button>
// <button onClick={() => setPage("add")}>add book</button>
// </div>

// <Authors show={page === "authors"} />

// <Books show={page === "books"} />

// <NewBook show={page === "add"} />