import Sidebar from '../component/Sidebar'
import '../style/therapistCreate.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AdminBar from '../component/AdminBar'
import { INSERT_THERAPIST } from '../store/mutation'
import { GET_THERAPIST } from '../store/queries'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../firebase'
import Loading from '../component/loading'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { v4 as uuidv4 } from 'uuid';
// import firebase from '../firebase'
// import { app } from '../firebase'

export default function TambahTherapist() {
    // const {data: dataTherapist, loading: loadingTherapist, error: errorTherapist} = useQuery

    const [insertTherapist, { loading: loadingInsert, error: errorInsert }] = useMutation(INSERT_THERAPIST, { refetchQueries: [GET_THERAPIST] })


    

    const [state, setstate] = useState({
        nama: "",
        umur: 0,
        noHp: 0,
        domisili: "",
        status: false
    })

    const [foto, setfoto] = useState(null)
    const [progress, setprogress] = useState(0)
    const [urldownload, seturl] = useState("")

    if (errorInsert) {
        return <p>error...</p>
    }

    const handleChangeFoto = (e) => {
        if (e.target.files[0]) {
            setfoto(e.target.files[0])
        }
        
        // console.log(e.target.value)
    }

    console.log("image: ", foto)
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    // function getFileExtension(filename) {
    //     return filename.split('.').pop()
    // }
    

    // function generateNameFile(name) {
    //     if (!name) {
    //         return;
    //     }
        
    //     const oldName = name
    //     const arrayNameFile = oldName.split('.')
    //     const extensionFile = arrayNameFile[arrayNameFile.length - 1]
    //     let uuid = require('uuid')
    //     let random = uuid.v4()
    //     const newNameFile = random + "." + extensionFile
    //     return newNameFile

    //     // const oldNameFile = name
    //     // const arrayNameFile = old
    // }

    const uploadFoto = () => {
        const storageRef = ref(storage, `/files/${foto.name}`)
        console.log(foto.name)
        const uploadTask = uploadBytesResumable(storageRef, foto[0])
        // const uploadTask = storageRef.put(file)
        uploadTask.on("state_changed", (snapshot) => {
            const progres = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) * 100)
            setprogress(progres)
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    seturl(url)
                    console.log(url)
                })
            }
        )
        console.log(foto)
    }


    const handleSubmit = () => {
        if (state.nama === "" || state.noHp === 0 || state.domisili === "") {
            alert("Data masih ada yang kosong")
        } else {
            insertTherapist({
                variables: {
                    nama: state.nama,
                    nohp: Number(state.noHp),
                    status: state.status,
                    umur: Number(state.umur),
                    domisili: state.domisili,
                    foto: urldownload
    
    
                }
            })
            setstate({
                ...state,
                nama: "",
                umur: 0,
                noHp: 0,
                domisili: "",
                status: false
            })
        }
        




        //         if (file === null) {
        //             return;
        //             storage.ref(`/images/${file.name}`).put(file)
        //   .on("state_changed" , alert("success") , alert);
        // }
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
            
            <div className="container-tambah">
                {loadingInsert?
                <Loading/>
            :
            <Form style={{ padding: '3vh' }} action="/therapist" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-pertama">Nama</Form.Label>
                        <Col className="form-pertama" sm={5}>
                            <Form.Control type="text" placeholder="Nama lengkap" name="nama" value={state.nama} onChange={handleChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Umur</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="text" placeholder="Umur" name="umur" value={state.umur} onChange={handleChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">No. HP</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="number" placeholder="089xxxxxxxxx" name="noHp" value={state.noHp} onChange={handleChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Domisili</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="text" placeholder="Domisili" name="domisili" value={state.domisili} onChange={handleChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Foto Formal</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Control type="file" onChange={handleChangeFoto}></Form.Control>
                            <Button style={{ background: '#0E483F', marginTop: '10px' }} onClick={uploadFoto}>Upload</Button>
                        </Col>
                        {/* <Form.Label>{progress}</Form.Label> */}
                        {/* <img className="ref" src={fileUrl} alt="uploaded images" style={{ width: '150px' }} /> */}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2} className="label-kedua">Status</Form.Label>
                        <Col className="form-kedua" sm={5}>
                            <Form.Select defaultValue="Pilih" name="status" value={state.status} onChange={handleChange}>
                                <option value="true">Aktif</option>
                                <option value="false">Tdk Aktif</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col style={{ marginLeft: '14.5vw' }} sm={{ span: 10, offset: 2 }}>
                            {/* <Link to="/therapist"> */}
                                <Button style={{ background: '#0E483F' }} onClick={handleSubmit}>Submit</Button>
                            {/* </Link> */}

                        </Col>
                    </Form.Group>
                </Form>
            }
                
            </div>
            
            
        </div>
    )
}