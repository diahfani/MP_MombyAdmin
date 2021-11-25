import { Container } from 'react-bootstrap'
import image from '../images/2853458.jpg'
import React, { useState } from 'react'
import '../style/login.css'

export default function Login(){
    // const [username, setusername] = useState("")
    // const [password, setpassword] = useState("")
    const [data, setdata] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) => {
        setdata({...data, [e.target.name]: e.target.value})
        console.log(handleChange)
    }

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="login">
                <div>
                    <img src={image} alt="ini background"></img>
                </div>
                <div className="middle-line"></div>
                <Container className="ctr-form">
                    <h3>Login as Admin</h3>
                    <hr/>
                    <br/>
                    <Container>
                        <form action="/dashboard" onSubmit={handleSubmit}>
                        {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Username" /> */}
                        <input id="username" type="text" value={data.username} onChange={handleChange} name="username" placeholder="Username" className="input-form"></input> <br/>
                        <input id="password" type="password" value={data.passwordpassword} onChange={handleChange} name="password" placeholder="Password" className="input-form"></input> <br/>
                        <button className="span-form">Login</button>
                        </form>
                        {/* <span className="span-text-bottom-contact">Contact to dev@aol.com</span> */}
                    </Container>
                    <Container className="container-text">
                        <span className="span-text-bottom">Forgot password?</span> <br/>
                        <span className="span-text-bottom-contact">Contact to dev@aol.com</span>
                    </Container>
                </Container>
            </div>
        </>
    )
}