import Sidebar from '../component/Sidebar'
import '../style/therapist.css'
import TherapistList from '../component/TherapistList'
import { Link, useHistory } from 'react-router-dom'
import { useQuery, useMutation, useSubscription } from '@apollo/client'
import { GET_THERAPIST } from '../store/queries'
import { DELETE_THERAPIST } from '../store/mutation'
import AdminBar from '../component/AdminBar'
import Loading from '../component/loading'
import { THERAPIST_SUBSCRIPTION } from '../store/subscription'

export default function Therapist() {
    const history = useHistory()
    const {data, loading} = useSubscription(THERAPIST_SUBSCRIPTION)
    // const { data, loading, error } = useQuery(GET_THERAPIST)
    const [deleteTherapist, {loading: loadingDelete}] = useMutation(DELETE_THERAPIST)
    
    // if (loadingDelete) {
    //     return <Loading/>
    // }
    
    const hapusTherapist = (id) => {
        deleteTherapist({variables: {id: id}})
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
            <div className="tambah-button">
                {/* <Link to={"/tambah-therapist"}> */}
                    <span className="bttn" onClick={()=> history.push('/tambah-therapist')}>Tambah</span>
                {/* </Link> */}
            </div>
            <div className="card-container">
                { loadingDelete || loading ?
                <Loading/>
                :
                data?.mini_project_therapist?.map(item => (
                    <TherapistList
                        key={item.id}
                        data={item}
                        // nama={item.nama}
                        // umur={item.umur}
                        // domisili={item.domisili}
                        // status={item.status}
                        hapusTherapist={hapusTherapist}
                    />
                ))}
            </div>
        </div>
    )
}