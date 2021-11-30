import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/layananCreate.css'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/client'
import { INSERT_LAYANAN } from '../store/mutation'
import { GET_LAYANAN } from '../store/queries'


function LayananCreate() {
    const [insertLayanan, {loading, error}] = useMutation(INSERT_LAYANAN, {refetchQueries: [GET_LAYANAN]})
    // const [nama, setnama] = useState("")
    // const [harga, setharga] = useState(0)
    // const [deskripsi, setdeskripsi] = useState("")
    // const [foto, setfoto] = useState("")

    const [state, setstate] = useState({
        nama:"",
        harga:0,
        deskripsi:""
        })

    const handleChange = (e) =>{
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const tambahLayanan = () => {
        insertLayanan({
            variables: {
                nama: state.nama,
                harga: state.harga,
                deskripsi: state.deskripsi,
            }
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

            <div className="container-tambah">
                <Form style={{ padding: '3vh' }} onSubmit={tambahLayanan}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-pertama">Nama</Form.Label>
                        <Col className="form-pertama" sm={5}>
                            <Form.Control type="text" name="nama" value={state.nama} onChange={handleChange} placeholder="Nama service"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Harga</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="number" name="harga" value={state.harga} onChange={handleChange} placeholder="Rp."></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Deskripsi</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control as="textarea" name="deskripsi" value={state.deskripsi} onChange={handleChange} rows={3} ></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Foto Formal</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="file" name="foto" id="file"></Form.Control>
                        </Col>
                        {/* <Button style={{ background: '#0E483F' }}>Upload</Button>
                        <Form.Label>{progress}</Form.Label>
                        <img className="ref" src={fileUrl} alt="uploaded images" style={{ width: '150px' }} /> */}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col style={{ marginLeft: '14.5vw' }} sm={{ span: 10, offset: 2 }}>
                            <Button style={{ background: '#0E483F' }} onClick={tambahLayanan}>Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default LayananCreate
