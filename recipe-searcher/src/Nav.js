import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
        <nav>
        <Link to="/">Home</Link> &#160; &#160;
        <Link  to="/about">About</Link> &#160; &#160;
        <Link to="/newrecipe">My Recipes</Link>&#160; &#160;
        <Link to="/calculator">Calculator</Link>&#160; &#160;
        </nav>
        </div>
    )


}

export default Nav