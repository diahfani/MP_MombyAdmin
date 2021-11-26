// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login';
// import Sidebar from './component/Sidebar';
import Therapist from './pages/therapist';
import Dashboard from './pages/dashboard'
import TambahTherapist from './pages/therapistCreate'
import UpdateTherapist from './pages/therapistUpdate'
import { signInWithEmailAndPassword } from './firebase'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/therapist" component={Therapist}/>
        <Route path="/tambah-therapist" component={TambahTherapist}></Route>
        <Route path="/update-therapist" component={UpdateTherapist}></Route>
      </Switch>
    </BrowserRouter>
    // <Login></Login>
    // <Sidebar></Sidebar>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
