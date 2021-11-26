import Sidebar from '../component/Sidebar'
import '../style/therapist.css'
import TherapistList from '../component/TherapistList'
import { Link } from 'react-router-dom'


export default function Therapist() {


    return (
        <div>
        <div style={{position:'fixed'}}>
            <Sidebar/>
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
            <TherapistList/>
        </div>
        </div>
    )
}