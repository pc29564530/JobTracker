import React,{useState} from 'react';
import Proptypes from 'prop-types';

async function loginUser(credentials){
    return fetch('/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    })
    .then(data=>data.json());
}

function Login({setToken}) {
    const [username,setUserName] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>UserName</p>
                    <input type="username" onChange={e=>setUserName(e.target.value)} placeholder="Username"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                </label>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken:Proptypes.func.isRequired
};

export default Login;
