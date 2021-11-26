import '../style/therapistlist.css'
import img from '../images/2853458.jpg'
import { Link } from 'react-router-dom'


export default function TherapistList() {
    return (
        <>
            {/* <header>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </header> */}
            <div className="card" style={{ width: '900px', height:'150px', margin: 0, overflow: 'hidden', background:'#EAF6F5' }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{width: '150px', margin:0}}>
                        <img src={img} alt="..." className="img-fluid rounded-start" style={{maxWidth:'100%', maxHeight:'100%'}}></img>
                    </div>
                    <div className="col-md-8" style={{width: '80%'}}>
                        <div className="card-body">
                            <h5 className="card-title">Diah Aufa Arini</h5>
                            <p className="card-text" style={{margin:'8px'}}>21 Tahun</p>
                            <p className="card-text" style={{margin:'8px'}}>Bekasi</p>
                            <div>
                            <span className="card-text" style={{margin:'8px'}}>Status :</span>
                            <span className="card-text">Aktif</span>
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