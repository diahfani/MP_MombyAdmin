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

  export { THERAPIST_SUBSCRIPTION, LAYANAN_SUBSCRIPTION }