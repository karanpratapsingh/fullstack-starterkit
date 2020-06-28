import { gql } from 'apollo-server-express';

const getPost = gql`
  query getPost($input: GetPostInput!) {
    getPost(input: $input) {
      post {
        id
        content
        published
        title
      }
    }
  }
`;

export default getPost;
