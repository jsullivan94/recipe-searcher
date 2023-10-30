import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Login({ user, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [newUser, setNewUser] = useState(false)
   
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/users?username=${username}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
            })
        .then(users => {
            if (users.length > 0) {
                const user = users[0];
                if (user.password === password) {
                    setUser(user);
                    Cookies.set('flavorful_id', user.id, { expires: 7 });
                    navigate("/");
                } else {
                        alert("Incorrect password.");
                }
            } else {
                alert("User not found.");
            }
            })
        .catch(error => console.error("Error:", error.message));
    }

    const userData = {
        username: username,
        password: password,
        myrecipes: [],
        likedrecipes: []
    }

    function handleSignup(e) {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then(resp => resp.json())
        .then(resp => setUser(resp))
        Cookies.set('flavorful_id', user.id, { expires: 7 });
        navigate("/")
    }

    function handleClick() {
        setNewUser(prev => !prev)
    }

    return (
        <div className="login">
        {!newUser ?  
        <div>
            <h2 className="login_head">Login</h2>
            <form className="login_form" onSubmit={handleLogin}>
                <label className="login_label">Username</label>
                <input className="login_input" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label className="login_label">Password</label>
                <input className="login_input"type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className="login_button" type="submit">Submit</button>
            </form>
        </div>
        :
        <div>
            <h2 className="login_head">Signup</h2>
            <form className="login_form" onSubmit={handleSignup}>
                <label className="login_label">Username</label>
                <input className="login_input" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label className="login_label">Password</label>
                <input className="login_input" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className="login_button" type="submit">Submit</button>
            </form>
        </div>}
        <button className="login_toggle" onClick={handleClick}>{!newUser ? "Signup" : "Login"} </button>
        </div>
    )

}

export default Login