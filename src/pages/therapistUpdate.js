import React from 'react'
import Sidebar from '../component/Sidebar'
import '../style/therapistUpdate.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import AdminBar from '../component/AdminBar'


function TherapistUpdate() {
    return (
        <div>
            <div style={{ position: 'absolute', width: '120px', height: '40px', left: '1180px', top: '25px' }}>
                <AdminBar />
            </div>
            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>
            <div className="title">
                <h2>Therapist</h2>
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
                                <Image style={{ width: "170px" }} src="https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" rounder />
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
                                <Form.Label column sm={2} className="label-kedua">Status</Form.Label>
                                <Col className="form-kedua" sm={5}>
                                    <Form.Select defaultValue="Pilih">
                                        <option value="true">Aktif</option>
                                        <option value="false">Tdk Aktif</option>
                                    </Form.Select>
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

export default TherapistUpdate
