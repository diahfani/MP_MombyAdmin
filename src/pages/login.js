import { Container } from 'react-bootstrap'
import image from '../images/2853458.jpg'
import React, { useState } from 'react'
import '../style/login.css'
import { useHistory } from 'react-router-dom';
import { LOGIN_ADMIN } from '../store/queries';
import { useQuery } from '@apollo/client';
// import { auth, signInWithEmailAndPassword } from '../firebase'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useAuth0 } from '@auth0/auth0-react'


export default function Login(){
    // const { loginWithRedirect } = useAuth0()
    let history = useHistory()
    const {loading: loadingAdmin, data: dataAdmin, error: errorAdmin} = useQuery(LOGIN_ADMIN)
    // console.log(dataAdmin?.mini_project_admin_by_pk.username)

    const [state, setstate] = useState({
        username:"",
        password:"",
        
    })

    const handleError = () => {
        if(errorAdmin){
            alert("data tidak sama atau data kosong")
        }
        
    }

    // const [error, seterror] = useState("")
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        let username = dataAdmin?.mini_project_admin_by_pk.username
        let password = dataAdmin?.mini_project_admin_by_pk.password
        // console.log(dataAdmin)
        // console.log(password)
        if (state.username === "" || state.password === "") {
            return handleError
        } else if ( state.username === !username || state.password === !password){
            return handleError
        } else if ( state.username === username && state.password === password){
            history.push('/dashboard')
        }

        // if ( state.username)
        // if (loginAdmin({
        //     variables: {
        //         username: state.username,
        //         password: state.password
        //     }
        // })=== undefined || [] || null) {
        //     alert("data tidak sama, coba lagi")
        // }

        // if ( state.username === "admin" && state.password === "admin123") {
        //     history.push('/dashboard')
        // }

        
    }


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
                        <input id="username" type="text" 
                        value={state.username} 
                        onChange={handleChange} 
                        name="username" placeholder="Username" className="input-form"></input> <br/>
                        <input id="password" type="password" 
                        value={state.password} 
                        onChange={handleChange} 
                        name="password" placeholder="Password" className="input-form"></input> <br/>
                        <button className="span-form" style={{cursor: 'pointer'}} 
                        // onClick={() => loginWithRedirect()} 
                        // onClick={()=> signInWithEmailAndPassword(data.email, data.password)}
                        onClick={handleLogin}
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