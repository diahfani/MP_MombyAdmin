// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
    return (
        <>
            <header>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </header>
            <div class="d-flex justify-content-start flex-column flex-shrink-0 p-3 text-white" style={{ width: '20%', marginLeft: 0, background: '#0E483F' }}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <p class="fs-4 fw-bolder">Momby</p>
                    <p class="fs-6 fw-bolder m-1">Admin</p>
                </a>
                <br />
                <ul class="nav nav-pills flex-column mb-auto" style={{ height: '90vh' }}>
                    <li class="nav-item" style={{ margin: '10px' }}>
                        <a href="/" class="nav-link active" aria-current="page" >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/" class="nav-link text-white">
                            Therapist
                        </a>
                    </li>
                    <li>
                        <a href="/" class="nav-link text-white">
                            Layanan
                        </a>
                    </li>
                </ul>
                {/* <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>mdo</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div> */}
            </div>
        </>
    )
}