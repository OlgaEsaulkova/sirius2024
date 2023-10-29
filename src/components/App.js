import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Promo from "./Promo.js";
import '../App.scss';

function App() {
  return (
    <div className="page">
        <div className="container">
          <Header />
          <SearchForm />
          <Promo />
        </div>
      </div>
  );
}

export default App;
