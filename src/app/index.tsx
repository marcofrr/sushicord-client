import React from 'react';
import Routes from '../routes'
import GlobalStyles from './globalStyles';
import { ApolloProvider, split, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from '../config';
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition, offsetLimitPagination } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";


const token = localStorage.getItem("token");

const httpLink = new HttpLink({
    uri: Config.baseUrl
});

// const link = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors)
//         graphQLErrors.map(({ message, locations, path }) =>
//             // console.log(
//             //     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//             // ),
//             console.log(message)
//         );

//     if (networkError) console.log(`[Network error]: ${networkError}`);
// });

const wsLink = new WebSocketLink({
    uri: Config.baseUrlWS,
    options: {
        reconnect: true,
        connectionParams: {
            token: token,
        },
    },
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
    httpLink,
);

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                 resourceCollection: offsetLimitPagination(),
                 PrivMessages: {
                     merge:false,
                    // merge(existing = [], incoming: any) {
                    //     console.log('existing',existing);
                    //     console.log('incoming',incoming)
                    //   return { ...incoming };
                    //   // this part of code is depends what you actually need to do, in my 
                    // }
                  }
            }
        }

        // FriendRequests: {
        //     fields: {
        //         receiver: {
        //             // Short for always preferring incoming over existing data.
        //             merge: false,
        //         },
        //         sender: {
        //             // Short for always preferring incoming over existing data.
        //             merge: false,
        //         },
        //     },
        // },
    },
});

export const client = new ApolloClient({
    link: splitLink,
    cache: cache
})

function App() {



    return (
        <>
            <ApolloProvider client={client}>
                <GlobalStyles />
                <div className={"App"}>
                    <Routes />
                </div >
            </ApolloProvider>

        </>

    );
}

export default App;
