import { gql } from '@apollo/client'

const GET_THERAPIST = gql`
query getTherapist {
    mini_project_therapist {
      id
      nama
      umur
      domisili
      status
      created_at
      nohp
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

const GET_THERAPIST_BY_ID = gql`
query MyQuery($id: Int!) {
  mini_project_therapist_by_pk(id: $id) {
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
}
`

const GET_LAYANAN_BY_ID = gql`
query MyQuery($id: Int!) {
  mini_project_service_by_pk(id: $id) {
    created_at
    deskripsi
    foto
    harga
    id
    nama
    updated_at
  }
}`
export { GET_THERAPIST, GET_LAYANAN, GET_LAYANAN_BY_ID, GET_THERAPIST_BY_ID }