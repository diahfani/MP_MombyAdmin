import { Container } from 'react-bootstrap'
import image from '../images/2853458.jpg'
import '../style/login.css'

export default function login(){
    return (
        <>
            <div className="login">
                <div>
                    <img src={image} alt="ini background"></img>
                </div>
                <div className="middle-line"></div>
                <Container className="container-form">
                    <h3>Login as Admin</h3>
                    <hr/>
                    <br/>
                    <Container>
                        <form>
                        {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Username" /> */}
                        <input id="username" type="text" name="username" placeholder="Username" className="input"></input> <br/>
                        <input id="password" type="password" name="password" placeholder="Password" className="input"></input> <br/>
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