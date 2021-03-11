import { gql } from "@apollo/client";

export const MUTATION_SIGNUP = gql`
  mutation Signup(
    $email: String!
    $userName: String!
    $password: String!
    $birthDate: String!
  ) {
    signup(
      email: $email
      userName: $userName
      password: $password
      birthDate: $birthDate
    ) {
      id
    }
  }
`;

export const MUTATION_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        userName
      }
    }
  }
`;

export const MUTATION_HANDLE_FRIEND_REQUEST = gql`
  mutation HandleFriendRequest($action: String!, $requestId: String!) {
    handleFriendRequest(action: $action, requestId: $requestId) {
      _id
      sender {
        _id
        userName
      }
    }
  }
`;

export const MUTATION_SEND_SERVER_MESSAGE = gql`
  mutation SendServerMessage(
    $serverId: String!
    $channelId: String!
    $content: String!
  ) {
    sendServerMessage(
      serverId: $serverId
      channelId: $channelId
      content: $content
    ) {
      id
    }
  }
`;

export const MUTATION_SEND_PRIVATE_MESSAGE = gql`
  mutation sendPrivMessage($receiverId: String!, $content: String!) {
    sendPrivMessage(receiverId: $receiverId, content: $content) {
      _id
    }
  }
`;

export const MUTATION_CREATE_TEXT_CHANNEL = gql`
  mutation createTextChannel($serverId: String!, $channelName: String!) {
    createTextChannel(serverId: $serverId, channelName: $channelName) {
      id
    }
  }
`;

export const MUTATION_UPDATE_UNSEEN_MESSAGES = gql`
  mutation toggleUnseenMessages($senderId: String!) {
    toggleUnseenMessages(senderId: $senderId)
    {
      id
      userName
    }
  }
`;

