import { Container } from 'react-bootstrap'
// import { Row } from 'react-bootstrap'
// import { Col } from 'react-bootstrap'
import image from '../images/2853458.jpg'
import '../style/login.css'

export default function login(){
    return (
        <>
            {/* <Container>
                <Row>
                    <Col sm={6}>
                        <img src={image} alt="ini background"></img>
                    </Col>
                    <Col sm={6}>
                        <h1>TEST</h1>
                    </Col>
                </Row>
            </Container> */}
            <div className="login">
                <div>
                    <img src={image} alt="ini background"></img>
                </div>
                <div className="middle-line"></div>
                <Container>
                    <h3>Login as Admin</h3>
                    <br/> <br/>
                    
                </Container>
            </div>
        </>
    )
}