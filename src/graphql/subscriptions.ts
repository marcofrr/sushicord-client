import { gql } from "@apollo/client";

export const SUBS_FRIENDREQUESTS = gql`
  subscription newFriendRequest($receiverId: String!) {
    newFriendRequest(receiverId: $receiverId) {
      sender {
        id
        email
        userName
      }
    }
  }
`;

export const SUBS_SERVERMESSAGES = gql`
  subscription newFriendRequest($channelId: String!) {
    newServerMessage(channelId: $channelId) {
      id
      user {
        id
        userName
      }
      createdAt
      content
    }
  }
`;

export const SUBS_PRIVATE_MESSAGES = gql`
  subscription newPrivMessage($receiverId: String!) {
    newPrivMessage(receiverId: $receiverId) {
      _id
      senderId
      createdAt
      content
    }
  }
`;
