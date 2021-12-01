import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/layananupdate.css'
import { Form, Container, Col, Row, Button, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GET_LAYANAN_BY_ID } from '../store/queries'
import { UPDATE_LAYANAN } from '../store/mutation'
import Loading from '../component/loading'

function LayananUpdate() {
    const { id } = useParams()
    console.log(id)
    const { data: dataid } = useQuery(GET_LAYANAN_BY_ID, { variables: { id: id } })
    const nama = dataid?.mini_project_service_by_pk?.nama
    const harga = dataid?.mini_project_service_by_pk?.harga
    const deskripsi = dataid?.mini_project_service_by_pk?.deskripsi
    console.log(nama)
    console.log(harga)
    console.log(deskripsi)
    const [updateLayanan, { loading: loadingUpdate, error: errorUpdate }] = useMutation(UPDATE_LAYANAN)
    const [state, setstate] = useState({
        namaKosong: "",
        hargaKosong: 0,
        deskripsi: ""
    })

    if (errorUpdate) {
        return <p>error...</p>
    }

    if (loadingUpdate) {
        return <Loading></Loading>
    }

    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const editLayanan = () => {
        updateLayanan({
            variables: {
                id: id,
                nama: state.namaKosong,
                harga: Number(state.hargaKosong),
                deskripsi: state.deskripsi
            }
        })
        setstate({
            namaKosong: "",
            hargaKosong: 0,
            deskripsi: ""
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
                <h2>Layanan</h2>
            </div>
            {loadingUpdate?
            <Loading/>
            :
            <div className="container-tambah">
            <Form style={{ padding: '3vh' }} onSubmit={editLayanan}>
                <Container
                // style={{ display: 'inline'}}
                >
                    {/* <Container
                        style={{
                            // display: 'inline-block', 
                            width: '180px'
                        }}
                    >
                        <Col xs={6} md={4} style={{ marginRight: 0, marginLeft: 0 }}>
                            <Image style={{ width: "170px" }} src="https://images.unsplash.com/photo-1470843810958-2da815d0e041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" rounder />
                        </Col>
                    </Container> */}

                    <div style={{ marginTop: '10px' }}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-pertama">Nama</Form.Label>
                            <Col className="form-pertama" sm={5}>
                                <Form.Control type="text" placeholder={nama} name="namaKosong" value={state.namaKosong} onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">Harga</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Control type="number" placeholder={harga} name="hargaKosong" value={state.hargaKosong} onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} className="label-kedua">Deskripsi</Form.Label>
                            <Col className="form-kedua" sm={5}>
                                <Form.Control as="textarea" rows={3} placeholder={deskripsi} name="deskripsi" value={state.deskripsi} onChange={handleChange}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col style={{ marginLeft: '14.5vw' }} sm={{ span: 10, offset: 2 }}>
                                <Button style={{ background: '#0E483F' }} onClick={editLayanan}>Update</Button>
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

export default LayananUpdate
