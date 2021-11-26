import Sidebar from '../component/Sidebar'
import '../style/therapistCreate.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function TambahTherapist() {
    return (
    <div>
        <div style={{position:'fixed'}}>
            <Sidebar/>
        </div>
        <div className="title">
            <h2>Therapist</h2>
        </div>
        <div className="container-tambah">
            <Form style={{padding:'3vh'}}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-pertama">Nama</Form.Label>
                    <Col className="form-pertama" sm={5}>
                        <Form.Control type="text" placeholder="Nama lengkap"></Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-kedua">Umur</Form.Label>
                    <Col className="form-kedua" sm={5}>
                        <Form.Control type="text" placeholder="Umur"></Form.Control>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-kedua">No. HP</Form.Label>
                    <Col className="form-kedua" sm={5}>
                        <Form.Control type="number" placeholder="089xxxxxxxxx"></Form.Control>
                    </Col>
                </Form.Group>
                    
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-kedua">Domisili</Form.Label>
                    <Col className="form-kedua" sm={5}>
                        <Form.Control type="text" placeholder="Domisili"></Form.Control>
                    </Col>
                </Form.Group>
                    
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-kedua">Foto Formal</Form.Label>
                    <Col className="form-kedua" sm={5}>
                        <Form.Control type="file"></Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} className="label-kedua">Status</Form.Label>
                    <Col className="form-kedua" sm={5}>
                        <Form.Select defaultValue="Pilih">
                            <option value="true">Aktif</option>
                            <option value="false">Tdk Aktif</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                    
                <Form.Group as={Row} className="mb-3">
                    <Col style={{marginLeft:'14.5vw'}} sm={{ span: 10, offset: 2 }}>
                        <Button style={{background: '#0E483F'}} type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    </div>   
    )
}