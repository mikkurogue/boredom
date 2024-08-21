import { gql } from "@apollo/client";

export const GetAllUsers = gql`
  query Users {
    users {
      data {
        id
        username
        website
      }
    }
  }
`;

export type User = {
  id: number;
  username: string;
  website: string;
};
