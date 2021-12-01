import '../style/sidebar.css'
import { useHistory } from 'react-router-dom'

export default function Sidebar() {
    const history = useHistory()
    return (
        <>
            <header>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </header>

            <div className="d-flex flex-column p-3 text-white" style={{ width: '280px', height:'100%', marginLeft:0, background: '#0E483F', marginRight:0 }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <p className="fs-4 fw-bolder">Momby</p>
                    <p className="fs-6 fw-bolder m-1">Admin</p>
                </a>
                <br />
                <ul className="nav nav-pills flex-column mb-auto" style={{ height: '85vh' }}>
                    <li className="text-nav">
                        <button onClick={()=>history.push('/dashboard')} aria-current="page" className="nav-link text-white" >
                            Dashboard
                        </button>
                    </li>
                    <li className="text-nav">
                        <button onClick={()=>history.push('/therapist')} className="nav-link text-white">
                            Therapist
                        </button>
                    </li>
                    <li className="text-nav">
                        <button onClick={()=>history.push('/layanan')} className="nav-link text-white">
                            Layanan
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}