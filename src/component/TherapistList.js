import '../style/therapistlist.css'
import { Link, useHistory } from 'react-router-dom'



export default function TherapistList(props) {
    const history = useHistory()
    const { id, nama, nohp, status, umur, domisili, foto, updated_at, created_at} = props.data

    console.log(foto)

    const checkstatus = () => {

        if (status === true) {
            return <span className="card-text">Aktif</span>
        } else {
            return <span className="card-text">Tdk Aktif</span>
        }
    }
    return (
        <>
            
            <div className="card" style={{ background: '#EAF6F5' }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{ width: '150px', margin: 0 }}>
                        <img src="https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="..." className="img-fluid rounded-start" style={{ width: '100%', height: '100%' }}></img>
                    </div>
                    <div className="col-md-8" style={{ width: '80%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{nama}</h5>
                            <p className="card-text" style={{ margin: '8px' }}>{umur} Tahun</p>
                            <p className="card-text" style={{ margin: '8px' }}>{domisili}</p>
                            <div key={id}>
                                <span className="card-text" style={{ margin: '8px' }}>Status :</span>
                                <span className="card-text-status">{checkstatus(status)}</span>
                                <Link to={`/update-therapist/${id}`} data={props.data}>
                                    <span className="edit-button" data={props.data} 
                                    // onClick={()=>history.push({`/update-therapist/${id}`})}
                                    >Edit</span>
                                </Link>
                                <span onClick={()=> props.hapusTherapist(id)} className="delete-button">Hapus</span>
                            </div>

                            {/* <div className="justify-content-end">
                                <span>edit</span>
                                <button>delete</button>
                            </div> */}
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 minutes ago</small> </p> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}