import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { Routes, Route, useNavigate } from 'react-router-dom';
const App = () => {
  // const [page, setPage] = useState("authors");
  const navigate = useNavigate();
  return (
    <div>
       <div>
        <button onClick={() => navigate('/')}>Authors</button>
        <button onClick={() => navigate('/books')}>Books</button>
        <button onClick={() => navigate('/add')}>Add Book</button>
      </div>
        <Routes>
        <Route path="/" element={<Authors/>} />
        <Route path="/books"  element={<Books/>}/>
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