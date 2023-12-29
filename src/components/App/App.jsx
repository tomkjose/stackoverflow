import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
