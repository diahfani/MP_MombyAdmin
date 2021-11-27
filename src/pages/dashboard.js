import Sidebar from '../component/Sidebar'
import AdminBar from '../component/AdminBar'
import '../style/dashboard.css'
import {CardTotalTherapist, CardTotalLayanan, CardJumlahReservasi, TabelTherapist} from '../component/CardDashboard'
import { Row, Col } from 'react-bootstrap'

export default function Dashboard() {
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
                <Col sm> <CardTotalTherapist/> </Col>
                <Col sm> <CardTotalLayanan/> </Col>
                <Col sm> <CardJumlahReservasi/> </Col>
            </Row>
            </div>
            
            <div className="title-two">
                <h3 style={{fontSize:'24px'}}>Tabel Therapist</h3>
            </div>

            <div className="tabel-therapist">
                <TabelTherapist/>
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