import { gql } from '@apollo/client'

const INSERT_THERAPIST = gql`
mutation insertTherapist($nama: String!, $nohp: bigint!, $status: Boolean!, $umur: Int!, $domisili: String!, $foto: String = "") {
  insert_mini_project_therapist_one(object: {nama: $nama, nohp: $nohp, status: $status, umur: $umur, domisili: $domisili, foto: $foto}) {
    created_at
    domisili
    foto
    id
    nama
    nohp
    status
    umur
    updated_at
  }
}`


const INSERT_LAYANAN = gql`
mutation INSERT_LAYANAN($nama: String = "", $harga: Int = 10, $foto: String = "", $deskripsi: String = "") {
    insert_mini_project_service(objects: {nama: $nama, harga: $harga, foto: $foto, deskripsi: $deskripsi}) {
      returning {
        id
        nama
        harga
        foto
        deskripsi
        created_at
        updated_at
      }
    }
  }`

const DELETE_THERAPIST = gql`
mutation deleteTherapist($id: Int!) {
    delete_mini_project_therapist_by_pk(id: $id) {
      id
      nama
    }
  }
  `

const DELETE_LAYANAN = gql`
mutation deleteLayanan($id: Int!) {
    delete_mini_project_service_by_pk(id: $id) {
      id
      nama
    }
  }
  `

const UPDATE_THERAPIST = gql`
mutation MyMutation($id: Int! $nama: String = "", $nohp: bigint = "", $status: Boolean = false, $umur: Int!, $foto: String = "", $domisili: String = "") {
  update_mini_project_therapist_by_pk(pk_columns: {id: $id}, _set: {nama: $nama, nohp: $nohp, status: $status, umur: $umur, foto: $foto, domisili: $domisili}) {
    nama
    nohp
    status
    umur
    created_at
    domisili
    foto
    id
    updated_at
  }
}`

const UPDATE_LAYANAN =gql`
mutation MyMutation($id: Int! $nama: String!, $harga: Int!, $foto: String="", $deskripsi: String!) {
  update_mini_project_service_by_pk(pk_columns: {id: $id}, _set: {nama: $nama, harga: $harga, foto: $foto, deskripsi: $deskripsi}) {
    created_at
    deskripsi
    foto
    harga
    id
    nama
    updated_at
  }
}
`

export { INSERT_THERAPIST, INSERT_LAYANAN, DELETE_THERAPIST, DELETE_LAYANAN, UPDATE_THERAPIST, UPDATE_LAYANAN } 