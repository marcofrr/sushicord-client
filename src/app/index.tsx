import React, { useEffect, useState } from 'react';
import Routes from '../routes'
import GlobalStyles from './globalStyles';
import { ApolloProvider, split, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Config from '../config';
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition, offsetLimitPagination } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";


const token = sessionStorage.getItem("token");

export const httpLink = new HttpLink({
    uri: Config.baseUrl
});

const wsLink = new WebSocketLink({
    uri: Config.baseUrlWS,
    options: {
        reconnect: true,
        // lazy: true,
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
                  }
            }
        }


    },
});

export var client = new ApolloClient({
    link: splitLink,
    cache: cache
})

function App() {
    const [tokenState,setToken] = useState('')

    const newWsLink = new WebSocketLink({
        uri: Config.baseUrlWS,
        options: {
            reconnect: true,
            //  lazy: true,
            connectionParams: {
                token: tokenState,
            },
        },
        
    });

    const newSplitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        newWsLink,
        httpLink,
    );
    useEffect(() => {
        const listener = (e: any) => {
            setToken(e.detail)
        };
        document.addEventListener("onLogin", listener);
        return () => {
            document.removeEventListener("onLogin", listener);
        };
    }, []);
 
    useEffect(  () => {
        client.clearStore();
        client.stop();
        // (wsLink as any).subscriptionClient.close();
        // await app.close(); //

        client = new ApolloClient({
            link: newSplitLink,
            cache: cache
        })  

    }, [token]);

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
