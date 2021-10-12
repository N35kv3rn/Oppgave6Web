import './Navbar.css';

const Navbar = () => {
    return(
        <div>
            <header id="header">
                <ul id="list">
                    <li><p id="maintitle" className="navbar" >HIOF</p></li>
                    <li id="right"><p id="user" className="navbar" >User user</p></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar;