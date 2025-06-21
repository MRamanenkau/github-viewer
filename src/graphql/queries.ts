import { gql } from '@apollo/client';

export const LIST_REPOS = gql`
  query ListRepositories {
    listRepositories {
      name
      owner
      size
    }
  }
`;

export const REPO_DETAILS = gql`
    query GetRepositoryDetails($repo: String!) {
      repositoryDetails(repo: $repo) {
        name
        size
        owner
        isPrivate
        numberOfFiles
        ymlFileContent
        webhooks
      }
    }
`;
