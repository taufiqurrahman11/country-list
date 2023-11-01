import Home from "./components/pages/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:nameCountry" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
