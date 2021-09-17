import { NgModule } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { environment } from 'src/environments/environment';

const githubUri = 'https://api.github.com/graphql';
const defaultUri = 'http://localhost:4000/graphql';

export const createNamedApollo = (
  httpLink: HttpLink
): Record<string, ApolloClientOptions<any>> => {
  return {
    github: {
      link: namedAuthLink.concat(httpLink.create({ uri: githubUri })),
      cache: new InMemoryCache(),
    },
  };
};

const namedAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: 'Bearer ' + environment.githubToken,
    },
  };
});

export function createDefaultApollo(
  httpLink: HttpLink
): ApolloClientOptions<any> {
  return {
    link: defaultAuthLink.concat(httpLink.create({ uri: defaultUri })),
    cache: new InMemoryCache(),
  };
}

const defaultAuthLink = setContext((_, { headers }) => {
  console.log({context: headers});
  return {
    headers: {
      ...headers,
      authorization: 'Bearer ' + localStorage.getItem('authorization'),
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
