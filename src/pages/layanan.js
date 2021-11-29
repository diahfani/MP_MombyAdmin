import React from 'react'
import AdminBar from '../component/AdminBar'
import Sidebar from '../component/Sidebar'
import '../style/layanan.css'
import { Link } from 'react-router-dom'
import LayananList from '../component/LayananList'
import { Row } from 'react-bootstrap'
import { useSubscription, useMutation } from '@apollo/client'
import { DELETE_LAYANAN } from '../store/mutation'
import Loading from '../component/loading'
import { LAYANAN_SUBSCRIPTION } from '../store/subscription'

function Layanan() {
    const {data, loading, error} = useSubscription(LAYANAN_SUBSCRIPTION)
    const [deleteLayanan, {loading:loadingDelete}] = useMutation(DELETE_LAYANAN)

    const hapusLayanan = (id) => {
        deleteLayanan({variables: {id: id}})
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
            <div className="tambah-button">
                <Link to="/tambah-layanan">
                    <span className="bttn">Tambah</span>
                </Link>
            </div>
            <div className="card-layanan" style={{ display: 'flex', justifyContent:'center'}}>
            <Row style={{width:'900px'}}>
                {loading?
                <Loading/>
                :
                data?.mini_project_service?.map(item => (
                    
                    <LayananList
                    key={item.id}
                    data={item}
                    nama={item.nama}
                    harga={item.harga}
                    deskripsi={item.deskripsi}
                    hapusLayanan={hapusLayanan}/>
                    
                ))}
                </Row>
                
                
            </div>
        </div>
    )
}

export default Layanan
