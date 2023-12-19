import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/Fullstack"
import Aws from "./pages/Aws"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:idx" element={<PersonDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/paths" element={<Paths />} >

            <Route path="fs" element={<FullStack/>}/>
            <Route path="aws" element={<Aws/>}/>

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
