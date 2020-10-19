import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Signin.css';

function Signin() {
    const [toSignIn, setToSignIn] = useState(false);
    const switchSignIn = () => {
        setToSignIn(!toSignIn);
    }

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [users, setUsers] = useState(
        [
            {
                id: 0,
                name: "John Doe",
                email: "johndoe@domain.com",
                password: "1234john",
            },
            {
                id: 1,
                name: "Sam Smith",
                email: "samsmith@domain.com",
                password: "1234sam",
            }
        ]
    );

    // get user in list with same email as obj
    function getUser(obj, list) {
        for(let i=0; i<list.length; i++) {
            // check if username exists
            if( list[i].email === obj.email ){
                // check if password match for username, else tell user wrong password
                let passwordMatch = list[i].password === obj.password;
                if( !passwordMatch ){
                    alert("username/password doesn't match");
                    return null;
                }else{
                    return list[i];
                }
            }
        }
        return null;
    }

    // check if user with same email as obj exists in list
    function checkUserExists(obj, list) {
        for(let i=0; i<list.length; i++) {
            // check if username exists
            if( list[i].email === obj.email ){
                return true;
            }
        }
        return false;
    }

    // handle changes to form input
    function handleChange(event) {
        const {name, value} = event.target
        setUser( prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // login user if email/pass match
    function loginUser(event) {
        event.preventDefault();
        // TO DO: check if user exists and GET, else return error
        const currUser = getUser(user, users);
        if( currUser != null ){
            alert("Hello " + currUser.name );
        }else{
            alert("user not found");
        }
    }

    // register user - add user email/pass to DB
    function registerUser(event) {
        event.preventDefault();
        // TO DO: check server if user exists and throw error, else POST
        if( checkUserExists(user, users) ){
            alert("user already exists");
        }else{
            user["id"] = users.length;
            users.push(user);

            // update users so user is added
            setUsers(users);

            alert("added " + user.name);
            console.log(users);
        }
    }

    return (
        <div className="signin">
            <div className="siginin-container">
                <Link className="signin-logo" to="/"> <h1>MyShop</h1> </Link>

                <form className="signin-form">
                    { toSignIn ?
                        <h2 className="signin-form-item">Welcome Back!</h2> :
                        <h2 className="signin-form-item">Register Below</h2>
                    }

                    { !toSignIn ?
                        <div className="signin-form-item">
                            <h4 className="signin-form-email">Name: </h4>
                            <input 
                                name="name"
                                type="text"
                                value={user.name}
                                placeholder="Enter Name"
                                onChange={handleChange}
                            />
                        </div> : null
                    }

                    <div className="signin-form-item">
                        <h4 className="signin-form-email">E-mail: </h4>
                        <input 
                            name="email"
                            type="email"
                            value={user.email}
                            placeholder="Enter Email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="signin-form-item">
                        <h4 className="signin-form-password">Password: </h4>
                        <input
                            name="password"
                            type="password"
                            value={user.password}
                            placeholder="Enter Password"
                            onChange={handleChange}
                        />
                    </div>

                    { toSignIn ? 
                        <button onClick={loginUser} className="signin-form-submit signin-form-item" type="submit">Sign In</button> : 
                        <button onClick={registerUser} className="signin-form-submit signin-form-item" type="submit">Sign Up</button>
                    }
                </form>

                <div className="siginin-signup">
                    { toSignIn ?
                        <p>New to MyShop? <button onClick={switchSignIn}>Sign Up</button></p> :
                        <p>Already  registered? <button onClick={switchSignIn}>Sign In</button></p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Signin;
