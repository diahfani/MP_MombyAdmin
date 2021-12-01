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

const TOTAL_LAYANAN = gql`
query TotalLayanan {
  mini_project_service_aggregate {
    aggregate {
      count(columns: id)
    }
  }
}
`
const TOTAL_THERAPIST = gql`
query TotalTherapist {
  mini_project_therapist_aggregate {
    aggregate {
      count(columns: id)
    }
  }
}
`

const LOGIN_ADMIN = gql`
query MyQuery {
  mini_project_admin_by_pk(id: 1) {
    password
    username
  }
}

`
// query MyQuery {
//   mini_project_admin(where: {password: {_eq: "admin123"}, username: {_eq: "admin"}}) {
//     password
//     username
//   }
// }

// query MyQuery($password: String!, $username: String!) {
//   mini_project_admin(where: {_and : {}, {password: $password, username: $username}} ) {
//     password
//     username
//   }
// }
export { GET_THERAPIST, GET_LAYANAN, GET_LAYANAN_BY_ID, GET_THERAPIST_BY_ID, TOTAL_LAYANAN, TOTAL_THERAPIST, LOGIN_ADMIN }