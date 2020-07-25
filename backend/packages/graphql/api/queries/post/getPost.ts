import { gql } from 'apollo-server-express';

const getPost = gql`
  query getPost($input: GetPostInput!) {
    getPost(input: $input) {
      post {
        id
        content
        published
        title
        author {
          id
        }
      }
    }
  }
`;

export default getPost;
