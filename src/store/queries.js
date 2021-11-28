import { gql } from '@apollo/client'

const GET_THERAPIST = gql`
query getTherapist {
    mini_project_therapist {
      id
      nama
      umur
      domisili
      status
    }
  }
  `

const GET_LAYANAN = gql`
query GET_LAYANAN {
  mini_project_service {
    id
    nama
    harga
    deskripsi
    created_at
  }
}
`

export { GET_THERAPIST, GET_LAYANAN }