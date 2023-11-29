import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./Main";

//? harici css dosyaları harici bir component ile bağlanmış olur
import "./App.css"

function App() {
  return (
    <>
      <h1>React App</h1>
      <Header />
      <Main />
      <Footer />
     
    </>
  );
}

export default App;
