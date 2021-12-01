import { gql } from '@apollo/client'

const THERAPIST_SUBSCRIPTION = gql`
subscription therapist_subscription {
    mini_project_therapist {
      id
      nama
      nohp
      status
      umur
      foto
      domisili
      created_at
      updated_at
    }
  }`

const LAYANAN_SUBSCRIPTION = gql`
subscription layananSubscription {
    mini_project_service {
      id
      nama
      updated_at
      harga
      foto
      deskripsi
      created_at
    }
  }`

  const TOTAL_LAYANAN = gql`
  subscription TotalLayanan {
    mini_project_service_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
  `
  const TOTAL_THERAPIST = gql`
  subscription TotalTherapist {
    mini_project_therapist_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
  `

  export { THERAPIST_SUBSCRIPTION, LAYANAN_SUBSCRIPTION, TOTAL_LAYANAN, TOTAL_THERAPIST }