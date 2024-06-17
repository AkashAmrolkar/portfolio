import { Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./component/Navbar"
import MainPage from './Pages/MainPage'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
