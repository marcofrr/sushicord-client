import { gql } from "@apollo/client";

export const QUERY_GET_USERNAME = gql`
  query username($token: String!) {
    username(token: $token) {
      userName
    }
  }
`;

export const QUERY_GET_SERVERS = gql`
  query servers($token: String!) {
    server(token: $token) {
      id
      name
    }
  }
`;

export const QUERY_GET_ME_PAGE = gql`
  query get($token: String!) {
    username(token: $token) {
      userName
    }
    server(token: $token) {
      id
      name
    }
    # friendRequests(token: $token) {
    #   _id
    #   sender {
    #     _id
    #     userName
    #   }
    # }
  }
`;

export const QUERY_GET_FRIEND_REQUESTS = gql`
  query get($token: String!) {
    FriendRequests(token: $token) {
      _id
      sender {
        _id
        userName
      }
    }
  }
`;

export const QUERY_GET_FRIEND_LIST = gql`
  query get($token: String!) {
    friends(token: $token) {
      id
      userName
    }
  }
`;

export const QUERY_GET_SERVER_LIST = gql`
  query get($token: String!) {
    servers(token: $token) {
      id
      name
    }
  }
`;

export const QUERY_GET_SERVER_NAME = gql`
  query get($serverId: String!, $token: String!) {
    serverData(serverId: $serverId, token: $token) {
      id
      name
    }
  }
`;

export const QUERY_GET_SERVER_TEXT_CHANNELS = gql`
  query get($serverId: String!, $token: String!) {
    serverData(serverId: $serverId, token: $token) {
      textChannels {
        id
        name
      }
    }
  }
`;

export const QUERY_GET_SERVER_VOICE_CHANNELS = gql`
  query get($serverId: String!, $token: String!) {
    serverData(serverId: $serverId, token: $token) {
      voiceChannels {
        id
        name
      }
    }
  }
`;

export const QUERY_GET_SERVER_CHANNELS = gql`
  query get($serverId: String!, $token: String!) {
    serverData(serverId: $serverId, token: $token) {
      voiceChannels {
        id
        name
      }
      textChannels {
        id
        name
      }
    }
  }
`;

export const QUERY_GET_CHANNEL_MESSAGES = gql`
  query get(
    $serverId: String!
    $token: String!
    $channelId: String!
    $offset: Int!
    $limit: Int!
  ) {
    channelMessages(
      serverId: $serverId
      token: $token
      channelId: $channelId
      offset: $offset
      limit: $limit
    ) {
      id
      user {
        id
        userName
      }
      content
    }
  }
`;

export const QUERY_GET_PRIVATE_MESSAGES = gql`
  query Messages(
    $token: String!
    $senderId: String!
    $offset: Int!
    $limit: Int!
  ) {
    PrivMessages(
      token: $token
      senderId: $senderId
      offset: $offset
      limit: $limit
    ) {
      _id
      senderId
      receiverId
      content
      createdAt
    }
  }
`;

// export const QUERY_GET_OPPONENT = gql`
//     query GetSkill($id: ID!){
//         opponent(id: $id){
//             strength
//             magic
//             wisdom
//             dexterity
//             faith
//             agility
//             warrior {
//                 id
//                 warriorname
//                 name
//                 tribe
//             }
//         }
//     }
// `;
