import { githubToken } from './secrets';

export const environment = {
  production: true,
  githubToken: githubToken,
  apiUrl: 'http://momentumhelm.pointd.io:4000/graphql',
};
