import { gql } from "@apollo/client";

export const SUBS_FRIENDREQUESTS = gql`
  subscription newFriendRequest($receiverId: String!) {
    newFriendRequest(receiverId: $receiverId) {
      sender {
        _id
        email
        userName
      }
    }
  }
`;

export const SUBS_SERVERMESSAGES = gql`
  subscription newChannelMessage($channelId: String!) {
    newChannelMessage(channelId: $channelId) {
      _id
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

export const SUBS_PRIVATE_MESSAGES_NOTIFICATION = gql`
  subscription newPrivMessageNotification($receiverId: String!) {
    newPrivMessageNotification(receiverId: $receiverId) {
      _id
		  senderId 
    }
  }
`;