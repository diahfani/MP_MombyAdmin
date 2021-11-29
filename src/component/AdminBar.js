import React from 'react'
import { GrUserAdmin } from 'react-icons/gr'
import {Nav, NavDropdown} from 'react-bootstrap'
import '../style/adminbar.css'

export default function AdminBar() {
    return (
        <div>
            <div style={{ display:'flex', background: '#EAF6F5', borderRadius: '30px', textAlign: 'center', padding: '7px', width: '130px' }}>
            <GrUserAdmin style={{ marginRight: '0', marginTop:'4px' }} />
                <Nav>

                    <NavDropdown title="admin" style={{textDecoration:'none', color:'#0E483F'}}>
                        <NavDropdown.Item style={{padding:'10px'}}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <span><GrUserAdmin style={{ marginRight: '10px' }} />Admin</span> */}
            </div>
        </div>
    )
}
