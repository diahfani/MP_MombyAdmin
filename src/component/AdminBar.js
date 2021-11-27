import React from 'react'
import { GrUserAdmin } from 'react-icons/gr'

export default function AdminBar() {
    return (
        <div>
            <div style={{ background: '#EAF6F5', borderRadius: '30px', textAlign: 'center', padding: '7px', width: '130px' }}>

                <span><GrUserAdmin style={{ marginRight: '10px' }} />Admin</span>
            </div>
        </div>
    )
}
