import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import Test from "./Test";

export default function App() {


  return (
<StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

