import '../style/therapistlist.css'
import img from '../images/2853458.jpg'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_THERAPIST } from '../store/queries'


export default function TherapistList(props) {
    // const id = key
    // const { nama, umur, domisili, status } = data
    // const { item, loading, error } = useQuery(GET_THERAPIST)
    const status = () => {

        if (props.status === true) {
            return <span className="card-text">Aktif</span>
        } else {
            return <span className="card-text">Tdk Aktif</span>
        }
    }
    // const { nama, umur, domisili, status } = props.data
    return (
        <>
            {/* <header>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </header> */}
            <div className="card" style={{ background: '#EAF6F5' }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{ width: '150px', margin: 0 }}>
                        <img src="https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="..." className="img-fluid rounded-start" style={{ width: '100%', height: '100%' }}></img>
                    </div>
                    <div className="col-md-8" style={{ width: '80%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{props.nama}</h5>
                            <p className="card-text" style={{ margin: '8px' }}>{props.umur} Tahun</p>
                            <p className="card-text" style={{ margin: '8px' }}>{props.domisili}</p>
                            <div>
                                <span className="card-text" style={{ margin: '8px' }}>Status :</span>
                                <span className="card-text-status">{status(props.status)}</span>
                                <Link to="/update-therapist">
                                    <span className="edit-button">Edit</span>
                                </Link>
                                <span className="delete-button">Hapus</span>
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