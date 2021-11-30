import React from 'react'
import { Table } from 'react-bootstrap'
import '../style/CardDashboard.css'
// import {GET_THERAPIST, GET_LAYANAN} from '../store/queries'
// import ListTabelTherapist from './ListTabelTherapist'

function CardTotalTherapist() {
    return (
        <div style={{ textAlign:'center', width:'270px', height:'100px', background:'#EAF6F5', border:'1px solid #EAF6F5', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'35px'}}>
            <h2 style={{fontSize:'20px', paddingTop:'10px', color:'#0E483F'}}>Jumlah Therapist</h2>
            <h1 style={{ fontSize:'36px', fontWeight:'500', color:'#0E483F'}}>-</h1>
        </div>
    )
}

function CardTotalLayanan() {
    return (
        <div style={{ textAlign:'center', width:'270px', height:'100px', background:'#EAF6F5', border:'1px solid #EAF6F5', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'35px'}}>
            <h2 style={{fontSize:'20px', paddingTop:'10px', color:'#0E483F'}}>Jumlah Layanan</h2>
            <h1 style={{ fontSize:'36px', fontWeight:'500', color:'#0E483F'}}>-</h1>
        </div>
    )
}

function CardJumlahReservasi() {
    return (
        <div style={{ textAlign:'center', width:'270px', height:'100px', background:'#EAF6F5', border:'1px solid #EAF6F5', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'35px'}}>
            <h2 style={{fontSize:'20px', paddingTop:'10px', color:'#0E483F'}}>Total Reservasi</h2>
            <h1 style={{ fontSize:'36px', fontWeight:'500', color:'#0E483F'}}>-</h1>
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

export {CardTotalTherapist, CardTotalLayanan, CardJumlahReservasi, ListTabelTherapist, ListTabelLayanan}
