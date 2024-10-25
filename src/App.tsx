import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import HeaderLayout from "./assets/components/Layout/HeaderLayout"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
