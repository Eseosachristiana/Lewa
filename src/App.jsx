import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";




const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<ShopCategory />} />
          <Route path="/dreses" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;