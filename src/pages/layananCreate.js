import React from 'react'
import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/layananCreate.css'
import { Form, Col, Row, Button } from 'react-bootstrap'


function layananCreate() {
    return (
        <div>
            <div style={{ position: 'absolute', width: '120px', height: '40px', left: '1180px', top: '25px' }}>
                <AdminBar />
            </div>
            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>
            <div className="title">
                <h2>Layanan</h2>
            </div>

            <div className="container-tambah">
                <Form style={{ padding: '3vh' }}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-pertama">Nama</Form.Label>
                        <Col className="form-pertama" sm={5}>
                            <Form.Control type="text" placeholder="Nama lengkap"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Harga</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="number" placeholder="Rp."></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Deskripsi</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control as="textarea" rows={3} ></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col style={{ marginLeft: '14.5vw' }} sm={{ span: 10, offset: 2 }}>
                            <Button style={{ background: '#0E483F' }} type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default layananCreate
