# GraphQL

## Getting Started - GraphQL

1. [Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
1. [Fields on a User](https://docs.github.com/en/graphql/reference/objects#user)


## Using some Basic GraphQL
1. [Create a Github Personal Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) allow `repo:status` and `public_repo`
1. Add it to `src/environments/secrets.ts`
1. Add `secrets.ts` to `src/environments/.gitignore`
1. Update `environment.ts`

```typescript
import { githubToken } from './secrets';

export const environment = {
  production: false,
  githubToken: githubToken,
};
```

1. `ng add apollo-angular` endpoint: `https://api.github.com/graphql`



## Example API

1. [Countries](https://countries.trevorblades.com/)

## Resources

1. [public apis](https://github.com/APIs-guru/graphql-apis)
2. [GraphQL](https://graphql.org/)
3. [Features including Variables, Fragments](https://graphql.org/learn/queries/)
