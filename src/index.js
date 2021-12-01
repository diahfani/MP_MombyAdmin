import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import { Auth0Provider } from '@auth0/auth0-react'

const domain = "dev-l-jnxzbn.us.auth0.com"
const clientID = "64TIkoOsMBHgZ6V9ar66zDJNGHL9ACKL"

const httplink = new HttpLink({
  uri: 'https://clever-condor-65.hasura.app/v1/graphql',
  headers: {
    "content-type": "application/json",
    'x-hasura-admin-secret': 'cZ8H2rQtZFlTsY5Avpz9Cza1zDckUBPVF40vh91WwSZLgoQMcdl5wi3ccUF0K8ob'
  }
})

const wsLink = new WebSocketLink({
  uri: 'wss://clever-condor-65.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        'x-hasura-admin-secret': 'cZ8H2rQtZFlTsY5Avpz9Cza1zDckUBPVF40vh91WwSZLgoQMcdl5wi3ccUF0K8ob'
      }
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httplink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientID} redirectUri={window.location.origin}>
  <ApolloProvider client={client}>
    
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </ApolloProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
