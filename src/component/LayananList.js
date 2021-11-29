import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import image from '../images/2853458.jpg'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function LayananList(props) {

    const { id, nama, harga, foto, deskripsi, created_at, updated_at } = props.data
    return (
        <div style={{ width: '332px', margin: '0 100px 40px 0', display: 'inline-block' }}>
            <Card style={{ width: '332px', margin: '0', height: '100%', borderRadius: '20px', background: '#EAF6F5', display: 'inline-block' }}>
                <Card.Img variant="top" alt="..." style={{ width: '100%' }} src="https://images.unsplash.com/photo-1470843810958-2da815d0e041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{nama}</Card.Title>
                    <Card.Text style={{ textAlign: 'center', fontSize: '14px', overflow: 'auto' }}>{deskripsi}</Card.Text>
                    <Card.Title style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Rp. {harga}</Card.Title>
                    <Link to='/update-layanan'>
                        <Button style={{ marginLeft: '10.5vw', marginRight: '0.5vw', borderRadius: '20px', backgroundColor: '#0E483F' }}><AiFillEdit /></Button>
                    </Link>

                    <Button onClick={() => props.hapusLayanan(id)} style={{ borderRadius: '20px', backgroundColor: '#B12929' }}><AiOutlineDelete /></Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default LayananList
