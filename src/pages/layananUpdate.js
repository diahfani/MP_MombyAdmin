import React from 'react'
import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/layananupdate.css'
import { Form, Container, Col, Row, Button, Image } from 'react-bootstrap'

function layananUpdate() {
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
                    <Container
                    // style={{ display: 'inline'}}
                    >
                        <Container
                            style={{
                                // display: 'inline-block', 
                                width: '180px'
                            }}
                        >
                            <Col xs={6} md={4} style={{ marginRight: 0, marginLeft: 0 }}>
                                <Image style={{ width: "170px" }} src="https://images.unsplash.com/photo-1470843810958-2da815d0e041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" rounder />
                            </Col>
                        </Container>

                        <div style={{ marginTop: '10px' }}>
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
                                    <Button style={{ background: '#0E483F' }} type="submit">Update</Button>
                                </Col>
                            </Form.Group>
                        </div>
                    </Container>

                </Form>
            </div>
        </div>
    )
}

export default layananUpdate
