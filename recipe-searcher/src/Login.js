import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ setUser }) {

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
        .then(navigate("/"))
    }

    return (
        <div>
        {!newUser ?  
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        :
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>}
        <button onClick={() => setNewUser(prev => !prev)}>{!newUser ? "Signup" : "Login"}</button>
        </div>
    )

}

export default Login