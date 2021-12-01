import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/dashboard.css'
import { CardTotalTherapist, CardTotalLayanan, CardJumlahReservasi, ListTabelTherapist, ListTabelLayanan } from '../component/CardDashboard'
import { Row, Col } from 'react-bootstrap'
// import { GET_THERAPIST, GET_LAYANAN, TOTAL_LAYANAN, TOTAL_THERAPIST } from '../store/queries'
import { useQuery, useSubscription } from '@apollo/client'
import { Table } from 'react-bootstrap'
import { LAYANAN_SUBSCRIPTION, THERAPIST_SUBSCRIPTION, TOTAL_LAYANAN, TOTAL_THERAPIST } from '../store/subscription'
import Loading from '../component/loading'
// import { useAuth0 } from '@auth0/auth0-react'
// import ListTabelTherapist from '../component/CardDashboard'

export default function Dashboard() {
    
    const { data: datatherapist, loading: loadingtherapist } = useSubscription(THERAPIST_SUBSCRIPTION)
    const { data: datalayanan, loading: loadinglayanan } = useSubscription(LAYANAN_SUBSCRIPTION)
    const { data: totalLayanan, loading: loadingTotallayanan } = useSubscription(TOTAL_LAYANAN)
    const { data: totalTherapist, loading: loadingTotalTherapist } = useSubscription(TOTAL_THERAPIST)
    // const rowCount = document.getElementById('table-id').rows.length
    // function HitungRows() {
    //     let table = document.getElementById('table-id')
    //     let totalRowCount = table.rows.length
    //     return totalRowCount
    // }
    
    // console.log(HitungRows())

    return (
        <div>
            <div style={{ position: 'absolute', width: '120px', height: '40px', left: '1180px', top: '25px' }}>
                <AdminBar />
            </div>
            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>
            <div className="title">
                <h2>Dashboard</h2>
            </div>

            <div className="card-monitoring">
                <Row>
                    <Col sm> <CardTotalTherapist data={totalTherapist} loading={loadingTotalTherapist} /> </Col>
                    <Col sm> <CardTotalLayanan data={totalLayanan} loading={loadingTotallayanan} /> </Col>
                    <Col sm> <CardJumlahReservasi /> </Col>
                </Row>
            </div>

            <div className="title-two">
                <h3 style={{ fontSize: '24px' }}>Tabel Therapist</h3>
            </div>

            <div className="tabel-therapist">
                <Table id="table-id" responsive striped bordered style={{ background: '#EAF6F5', borderRadius: '10px' }}>
                    <thead>
                        <td className="judul-tabel-id">ID</td>
                        <td className="judul-tabel-nama">Nama</td>
                        <td className="judul-tabel-tanggal">Tanggal Bergabung</td>
                    </thead>
                    { loadingtherapist?
                    <Loading/>
                    :
                    datatherapist?.mini_project_therapist?.map(item => (
                        <ListTabelTherapist
                            key={item.id}
                            id={item.id}
                            data={item}
                            nama={item.nama}
                            tanggal={item.created_at} />
                    ))}

                </Table>
            </div>

            <div className="title-three">
                <h3 style={{ fontSize: '24px' }}>Tabel Layanan</h3>
            </div>

            <div className="tabel-layanan">
                <Table responsive striped bordered style={{ background: '#EAF6F5' }}>
                    <thead>
                        <td className="judul-tabel-id">ID</td>
                        <td className="judul-tabel-nama">Nama</td>
                        <td className="judul-tabel-tanggal">Tanggal Layanan Ditambahkan</td>
                    </thead>
                    { loadinglayanan?
                    <Loading/>
                    :
                    datalayanan?.mini_project_service?.map(item => (
                        <ListTabelLayanan
                            key={item.id}
                            id={item.id}
                            data={item}
                            nama={item.nama}
                            tanggal={item.created_at} />
                    ))}
                </Table>
            </div>
            {/* <div className="card-monitoring">
                <div className="jumlah-therapist">
                    <CardDashboard/>
                </div>
                <div className="jumlah-layanan">

                </div>
                <div className="total-reservasi">

                </div>
            </div> */}

        </div>
    )
}