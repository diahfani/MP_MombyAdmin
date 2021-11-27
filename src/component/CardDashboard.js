import React from 'react'
import { Table } from 'react-bootstrap'
import '../style/CardDashboard.css'

function CardTotalTherapist() {
    return (
        <div style={{ textAlign:'center', width:'270px', height:'100px', background:'#EAF6F5', border:'1px solid #EAF6F5', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'35px'}}>
            <h2 style={{fontSize:'20px', paddingTop:'10px', color:'#0E483F'}}>Jumlah Therapist</h2>
            <h1 style={{ fontSize:'36px', fontWeight:'500', color:'#0E483F'}}>28</h1>
        </div>
    )
}

function CardTotalLayanan() {
    return (
        <div style={{ textAlign:'center', width:'270px', height:'100px', background:'#EAF6F5', border:'1px solid #EAF6F5', boxSizing:'border-box', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'35px'}}>
            <h2 style={{fontSize:'20px', paddingTop:'10px', color:'#0E483F'}}>Jumlah Layanan</h2>
            <h1 style={{ fontSize:'36px', fontWeight:'500', color:'#0E483F'}}>7</h1>
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

function TabelTherapist() {
    return (
        <div>
            <Table responsive striped bordered style={{background:'#EAF6F5'}}>
                <thead>
                    <td className="judul-tabel-id">ID</td>
                    <td className="judul-tabel-nama">Nama</td>
                    <td className="judul-tabel-tanggal">Tanggal Bergabung</td>
                </thead>
                <tbody>
                <tr>
                    <td className="data-tabel">21</td>
                    <td className="data-tabel">Diah</td>
                    <td className="data-tabel">21-10-2021</td>
                </tr>
                <tr>
                    <td className="data-tabel">1</td>
                    <td className="data-tabel">tes</td>
                    <td className="data-tabel">tes</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export {CardTotalTherapist, CardTotalLayanan, CardJumlahReservasi, TabelTherapist}
