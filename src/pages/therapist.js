import Sidebar from '../component/Sidebar'
import '../style/therapist.css'
import TherapistList from '../component/TherapistList'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_THERAPIST } from '../store/queries'
import AdminBar from '../component/AdminBar'
import Loading from '../component/loading'

export default function Therapist() {
    const { data, loading, error } = useQuery(GET_THERAPIST)

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
            <div className="tambah-button">
                <Link to="/tambah-therapist">
                    <span className="bttn">Tambah</span>
                </Link>
            </div>
            <div className="card-container">
                { loading?
                <Loading/>
                :
                data?.mini_project_therapist?.map(item => (
                    <TherapistList
                        key={item.id}
                        data={item}
                        nama={item.nama}
                        umur={item.umur}
                        domisili={item.domisili}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}