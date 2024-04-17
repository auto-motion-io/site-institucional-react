import { Outlet } from 'react-router-dom';
import Header from "./pages/components/header/Header"
import Footer from "./pages/components/footer/Footer"

function App() {
  return (
      <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;