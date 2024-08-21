import { gql } from "@apollo/client";

export const GetAllComments = gql`
  query Comments {
    comments {
      data {
        id
        name
        post {
          body
        }
        email
        body
      }
    }
  }
`;

export type Comment = {
  id: number;
  name: string;
  post: {
    body: string;
  };
  email: string;
  body: string;
};
