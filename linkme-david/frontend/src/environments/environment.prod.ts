import { githubToken } from './secrets';

export const environment = {
  production: true,
  githubToken: githubToken,
  apiUrl: 'http://localhost:4005/graphql',
};
