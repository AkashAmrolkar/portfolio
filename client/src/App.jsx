import { Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./component/Navbar"
import MainPage from './Pages/MainPage'
import Footer from "./component/Footer";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
