import { Container } from 'react-bootstrap'
import image from '../images/2853458.jpg'
import React, { useState, useEffect } from 'react'
import '../style/login.css'
import { useHistory } from 'react-router-dom';
// import { auth, signInWithEmailAndPassword } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


export default function Login(){
    // const [user, loading, error] = useAuthState(auth)
    // const history = useHistory()
    // // let location = useLocation()
    // const [data, setdata] = useState({
    //     email:"",
    //     password:""
    // })

    // const handleChange = (e) => {
    //     setdata({...data, [e.target.name]: e.target.value})
    //     console.log(handleChange)
    // }

    // useEffect(() => {
    //     if (loading) {
    //         return
    //     }
        
    //     if(user){
    //         history.replace("/dashboard")
    //     } 
    // }, [user, loading])

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
                        {/* <form action="/dashboard"> */}
                        {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Username" /> */}
                        <input id="email" type="email" 
                        // value={data.email} 
                        // onChange={handleChange} 
                        name="email" placeholder="Username" className="input-form"></input> <br/>
                        <input id="password" type="password" 
                        // value={data.password} 
                        // onChange={handleChange} 
                        name="password" placeholder="Password" className="input-form"></input> <br/>
                        <button className="span-form" style={{cursor: 'pointer'}} 
                        // onClick={()=> signInWithEmailAndPassword(data.email, data.password)}
                        to="/dashboard"
                        >Login</button>
                        {/* </form> */}
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