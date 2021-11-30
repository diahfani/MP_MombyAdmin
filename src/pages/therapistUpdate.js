import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import '../style/therapistUpdate.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import AdminBar from '../component/AdminBar'
import { useParams } from 'react-router-dom'
import { GET_THERAPIST_BY_ID } from '../store/queries'
import { useQuery, useMutation } from '@apollo/client'
import { UPDATE_THERAPIST } from '../store/mutation'
import Loading from '../component/loading'


function TherapistUpdate() {
    const { id } = useParams()
    const { data: dataid } = useQuery(GET_THERAPIST_BY_ID, { variables: { id: id } })
    const thisTherapistNama = dataid?.mini_project_therapist_by_pk?.nama
    const thisTherapistUmur = dataid?.mini_project_therapist_by_pk?.umur
    const thisTherapistNohp = dataid?.mini_project_therapist_by_pk?.nohp
    const thisTherapistDomisili = dataid?.mini_project_therapist_by_pk?.domisili
    // const thisTherapistStatus = dataid?.mini_project_therapist_by_pk?.status
    const [updateTherapist, { loading: loadingUpdate, error: errorUpdate }] = useMutation(UPDATE_THERAPIST)

    const [state, setstate] = useState({
        namaKosong: "",
        umurKosong: "",
        nohpKosong: "",
        domisiliKosong: "",
        statusKosong: false
    })

    if (errorUpdate) {
        return <p>error...</p>
    }


    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }


    const editTherapist = () => {
        updateTherapist({
            variables: {
                id: parseInt(id),
                nama: state.namaKosong,
                umur: Number(state.umurKosong),
                nohp: Number(state.nohpKosong),
                domisili: state.domisiliKosong,
                status: state.statusKosong
            }
        })
        setstate({
            nama: "",
            umur: 0,
            nohp: 0,
            domisili: "",
            status: false
        })
    }
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
            {loadingUpdate?
            <Loading style={{marginRight: '40vw', marginTop:'30vh', position:'absolute'}}/>
            :
            <div className="container-tambah">
            <Form style={{ padding: '3vh' }} onSubmit={editTherapist}>
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
                                <Form.Control type="text" placeholder={thisTherapistNama} value={state.namaKosong} name="namaKosong" onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">Umur</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Control type="number" placeholder={thisTherapistUmur} value={state.umurKosong} name="umurKosong" onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">No. HP</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Control type="number" placeholder={thisTherapistNohp} value={state.nohpKosong} name="nohpKosong" onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">Domisili</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Control type="text" placeholder={thisTherapistDomisili} name="domisiliKosong" value={state.domisiliKosong} onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">Status</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Select defaultValue="Pilih..." name="statusKosong" value={state.statusKosong} onChange={handleChange}>
                                    <option value="true">Aktif</option>
                                    <option value="false">Tdk Aktif</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col style={{ marginLeft: '14.5vw' }} sm={{ span: 10, offset: 2 }}>
                                <Button style={{ background: '#0E483F' }} onClick={editTherapist} to="/therapist">Update</Button>
                            </Col>
                        </Form.Group>
                    </div>
                </Container>

            </Form>
        </div>

            }
        </div>
    )
}

export default TherapistUpdate
