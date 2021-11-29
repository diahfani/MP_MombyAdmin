import { gql } from '@apollo/client'

const INSERT_THERAPIST = gql`
mutation INSERT_THERAPIST($nama: String!, $nohp: bigint!, $status: Boolean!, $umur: Int!, $foto: String!, $domisili: String!) {
    insert_mini_project_therapist(objects: {nama: $nama, nohp: $nohp, status: $status, umur: $umur, foto: $foto, domisili: $domisili}) {
      returning {
        id
        nama
        nohp
        status
        umur
        domisili
        foto
        updated_at
        created_at
      }
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

export { INSERT_THERAPIST, INSERT_LAYANAN, DELETE_THERAPIST, DELETE_LAYANAN}