import Logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div>
        <nav className="d-flex justify-between align-middle items-center bg-white py-3">
            <div className="logo-box">
                <img src={Logo} alt="Logo" style={{ height:"80px", width:"80px" }} />
            </div>
            <div className="list-items">

            </div>
        </nav>
    </div>
  )
}

export default Navbar