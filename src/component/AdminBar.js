import React from 'react'
import { GrUserAdmin } from 'react-icons/gr'
import {Nav, NavDropdown} from 'react-bootstrap'
import '../style/adminbar.css'
import { useHistory } from 'react-router-dom'
// import { useAuth0 } from '@aut
export default function AdminBar() {
    let history = useHistory()
    // const { logout } = useAuth0()
    return (
        <div>
            <div style={{ display:'flex', background: '#EAF6F5', borderRadius: '30px', textAlign: 'center', padding: '7px', width: '130px' }}>
            <GrUserAdmin style={{ marginRight: '0', marginTop:'4px' }} />
                <Nav>

                    <NavDropdown title="admin" style={{textDecoration:'none', color:'#0E483F'}}>
                        
                        <NavDropdown.Item style={{padding:'10px'}} onClick={() => history.push('/')}>
                        Logout</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                {/* <span><GrUserAdmin style={{ marginRight: '10px' }} />Admin</span> */}
            </div>
        </div>
    )
}
