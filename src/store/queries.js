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

export { GET_THERAPIST }