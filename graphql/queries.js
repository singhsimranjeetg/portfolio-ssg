import gql from 'graphql-tag';

export const GET_RESOURCES_QUERY = gql`
query {
  resources {
    name
    stars
    url
    created_by
    description
  }
}
`;