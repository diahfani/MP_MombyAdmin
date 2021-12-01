import React from 'react'
import { Table } from 'react-bootstrap'
import '../style/CardDashboard.css'
import { TOTAL_LAYANAN, TOTAL_THERAPIST } from '../store/subscription'
import { useQuery, useSubscription } from '@apollo/client'
import Loading from './loading'
// import {GET_THERAPIST, GET_LAYANAN} from '../store/queries'
// import ListTabelTherapist from './ListTabelTherapist'

function CardTotalTherapist() {
    const { data: totalTherapist, loading: loadingTotalTherapist } = useSubscription(TOTAL_THERAPIST)
    console.log(totalTherapist?.mini_project_therapist_aggregate?.aggregate.count)
    return (
        <div style={{ textAlign: 'center', width: '270px', height: '100px', background: '#EAF6F5', border: '1px solid #EAF6F5', boxSizing: 'border-box', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '35px' }}>
            <h2 style={{ fontSize: '20px', paddingTop: '10px', color: '#0E483F' }}>Jumlah Therapist</h2>
            {loadingTotalTherapist?
            <Loading style={{ fontSize: '36px', fontWeight: '500', color: '#0E483F' }} />
        :
        <h1 style={{ fontSize: '36px', fontWeight: '500', color: '#0E483F' }}>{totalTherapist?.mini_project_therapist_aggregate?.aggregate.count}</h1>
        }
        </div>
    )
}

function CardTotalLayanan() {
    const { data: totalLayanan, loading: loadingTotallayanan } = useSubscription(TOTAL_LAYANAN)
    return (
        <div style={{ textAlign: 'center', width: '270px', height: '100px', background: '#EAF6F5', border: '1px solid #EAF6F5', boxSizing: 'border-box', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '35px' }}>
            <h2 style={{ fontSize: '20px', paddingTop: '10px', color: '#0E483F' }}>Jumlah Layanan</h2>
            {loadingTotallayanan ?
                <Loading style={{ fontSize: '36px', fontWeight: '500', color: '#0E483F' }} />
                :
                <h1 style={{ fontSize: '36px', fontWeight: '500', color: '#0E483F' }}>{totalLayanan?.mini_project_service_aggregate?.aggregate.count}</h1>
            }

        </div>
    )
}

function CardJumlahReservasi() {
    return (
        <div style={{ textAlign: 'center', width: '270px', height: '100px', background: '#EAF6F5', border: '1px solid #EAF6F5', boxSizing: 'border-box', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '35px' }}>
            <h2 style={{ fontSize: '20px', paddingTop: '10px', color: '#0E483F' }}>Total Reservasi</h2>
            <h1 style={{ fontSize: '36px', fontWeight: '500', color: '#0E483F' }}>-</h1>
        </div>
    )
}

function ListTabelTherapist(props) {
    return (
        <tbody>
            <tr>
                <td className="data-tabel">{props.id}</td>
                <td className="data-tabel">{props.nama}</td>
                <td className="data-tabel">{props.tanggal}</td>
            </tr>
        </tbody>
    )
}

function ListTabelLayanan(props) {
    return (
        <tbody>
            <tr>
                <td className="data-tabel">{props.id}</td>
                <td className="data-tabel">{props.nama}</td>
                <td className="data-tabel">{props.tanggal}</td>
            </tr>
        </tbody>
    )
}

export { CardTotalTherapist, CardTotalLayanan, CardJumlahReservasi, ListTabelTherapist, ListTabelLayanan }
