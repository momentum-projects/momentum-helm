# GraphQL

## Example API

1. [Countries](https://countries.trevorblades.com/)

```text
GET -> https://www.example.com/api/users/
<- list of users

{
  users: [
    {
      id: 1,
      name: "Spencer",
      birthday: "Saturday"
    },
    {
      id: 2,
      name: "Peter",
      birthday: "Monday"
    }
  ]
}

POST - creating an object
https://www.example.com/api/users/
{
  name: "Spencer",
  birthday: "Saturday"
}
RESPONSE - 200
{
  id: 5,
  name: "Spencer",
  birthday: "Saturday"
}

PATCH - WRITE
https://www.example.com/api/users/5
{
  birthday: "Sunday"
}
RESPONSE - 200
{
  id: 5,
  name: "Spence",
  birthday: "Saturday"
  connections: [
    {
      id: 3,


    },4,5]
}

https://www.example.com/api/users/5/connections?userDetail=true
https://www.example.com/api/connections/?user=5


{
  id: 5,
  name: "Spence",
  birthday: "Saturday"
  connections: [3,4,6]
}

N
https://www.example.com/api/users/3
https://www.example.com/api/users/4
https://www.example.com/api/users/6



```

no way to control what fields we get back

FIND: continents and their countries that start with N

## Skills

[Intro](https://graphql.org/learn/queries/)

1. Queries

```graphql
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```

1. Fields

```graphql
{
  hero {
    name
    height
    appearsIn
  }
}
```

1. Arguments

```graphql
{
  human(id: "1000") {
    name
    height
  }
}
```

1. Fragments

```graphql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

1. Parameters in Fragments

```graphql
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```

## Getting Started - GraphQL

1. [Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)

```graphql
query { 
  user(login:"drasch") {
    login
    avatarUrl
    email
    repositories(first: 20, privacy: PUBLIC) {
      totalCount
      nodes {
        name
        url
      }
    }
  }
}
```

1. [Fields on a User](https://docs.github.com/en/graphql/reference/objects#user)
1. [public apis](https://github.com/APIs-guru/graphql-apis)

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
1. Add Github Username to the profiles
1. Add repositories view to the profile page

## Using external data

1. Adding a repositories list to your application
1. Find something interesting in the GraphQL API to add to your application

## Refactoring Time

1. Add links to the side to navigate profiles

## Exercise

Today's exercise will be a collection of incremental improvements to your application. Some of these will overlap with refactorings we did together. Some won't.

1. Migrate any models to injected services
1. Add saving and loading of the data using services during construction and modification to load and save to `localStorage`.
1. Add a "login" function that sets the current user using a `login` service
1. Add "navigation" between your connections component and your profile editing (/and viewing) component
1. Allow the user to navigate between all the profiles
1. Allow the user to edit _their_ profile, but only _view_ others' profiles
1. Add a button to delete experience lines
1. Add a "connect" to the profiles component that aren't their own, use a shared component with the "connections" screen.
1. Sort the connections components to show people you're _not_ connected with at the top in a separate section, followed by people you _are_ connected with.

## Exercise - bonus

1. Bonus points: expand your experience model to include a `description` and a `time period` field (from year `start` to year `end`). Read about Angular Directives and create a directive to validate each of the years, and then to validate year `start` is less than (or equal to) year `end`. Show these errors in the UI.
1. Bonus Points: show on a given user's page their "new" connections, perhaps the 2 most recent people with whom they've connected, and link to their profiles.

## Resources

1. [GraphQL](https://graphql.org/)
1. [Features including Variables, Fragments](https://graphql.org/learn/queries/)
1. [Apollo Angular (GraphQL Client)](https://apollo-angular.com/docs/)
