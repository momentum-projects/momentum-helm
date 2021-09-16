import { NgModule } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { environment } from 'src/environments/environment';

const githubUri = 'https://api.github.com/graphql';
const defaultUri = 'https://localhost:4000/graphql';
export function createNamedApollo(
  httpLink: HttpLink
): Record<string, ApolloClientOptions<any>> {
  return {
    github: {
      name: 'github',
      link: authLink.concat(httpLink.create({ uri: githubUri })),
      cache: new InMemoryCache(),
    },
  };
}

export function createDefaultApollo(
  httpLink: HttpLink
): ApolloClientOptions<any> {
  return {
    link: authLink.concat(httpLink.create({ uri: defaultUri })),
    cache: new InMemoryCache(),
  };
}

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: 'Bearer ' + environment.githubToken,
    },
  };
});

@NgModule({
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createNamedApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
